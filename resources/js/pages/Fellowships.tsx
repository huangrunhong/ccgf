import { Link } from '@inertiajs/react';
import { RiAddFill, RiArchiveLine, RiEditLine } from '@remixicon/react';

import { Fellowship, PageProps, PostStatus, ResponseStatus } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import Badge from '@/components/base/Badge';
import DeleteLink from '@/components/base/DeleteLink';
import Schedule from '@/components/base/Schedule';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface FellowshipsProps extends PageProps {
  fellowships: Fellowship[];
}

const postStatusType: Record<PostStatus, ResponseStatus | undefined> = {
  published: 'success',
  draft: 'warning',
  archived: undefined,
};

const Fellowships = ({ fellowships }: FellowshipsProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <SiteHead title={message.page.fellowships} />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{fellowships.length} Items</span>
        <Link className="button solid" href={route('fellowships.create')}>
          <RiAddFill size={18} />
          {message.page.createFellowship}
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>{message.admin.fellowships.name}</th>
            <th>{message.admin.fellowships.status}</th>
            <th>{message.admin.fellowships.location}</th>
            <th>{message.admin.fellowships.schedule}</th>
            <th>{message.admin.fellowships.contact}</th>
          </tr>
        </thead>
        <tbody>
          {fellowships.map((fellowship) => (
            <tr key={fellowship.id}>
              <td>{fellowship.name}</td>
              <td>
                <Badge
                  status={postStatusType[fellowship.status]}
                  content={message.admin.post.status[fellowship.status]}
                />
              </td>
              <td>{fellowship.location}</td>
              <td>
                <Schedule
                  day={fellowship.day}
                  hour={fellowship.hour}
                  frequency={fellowship.frequency}
                />
              </td>
              <td className="flex gap-1 items-center justify-between">
                {fellowship.contact}
                <div className="flex gap">
                  <DeleteLink href={route('fellowships.destroy', { id: fellowship.id })} />
                  <Link
                    as="button"
                    method="patch"
                    className="icon"
                    href={route('fellowships.archive', { id: fellowship.id })}
                  >
                    <RiArchiveLine size={18} />
                  </Link>
                  <Link
                    className="button icon"
                    href={route('fellowships.edit', { id: fellowship.id })}
                  >
                    <RiEditLine size={18} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthenticatedLayout>
  );
};

export default Fellowships;
