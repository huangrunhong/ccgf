import { Link } from '@inertiajs/react';
import { RiAddFill, RiEditLine } from '@remixicon/react';

import { PageProps, Worship } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import DeleteLink from '@/components/base/DeleteLink';
import FormattedDate from '@/components/base/FormattedDate';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface WorshipsProps extends PageProps {
  worships: Worship[];
}

const Worships = ({ worships }: WorshipsProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={message.page.dashboard} />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{worships.length} Items</span>
        <Link className="button solid" href={route('worships.create')}>
          <RiAddFill size={18} />
          {message.page.createWorship}
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>{message.admin.worships.date}</th>
            <th>{message.admin.worships.title}</th>
            <th>{message.admin.worships.location}</th>
          </tr>
        </thead>
        <tbody>
          {worships.map((worship) => (
            <tr key={worship.id}>
              <td>
                <FormattedDate date={worship.date} format="PPPPp" />
              </td>
              <td className="ellipsis">{worship.title}</td>
              <td className="flex gap-1 items-center justify-between">
                {worship.location}
                <div className="flex gap">
                  <DeleteLink href={route('worships.destroy', { id: worship.id })} />
                  <Link className="button icon" href={route('worships.edit', { id: worship.id })}>
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

export default Worships;
