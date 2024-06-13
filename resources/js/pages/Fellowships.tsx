import { Head, Link } from "@inertiajs/react";
import {
  RiAddFill,
  RiArchiveLine,
  RiDeleteBinLine,
  RiEditLine,
} from "@remixicon/react";

import { Fellowship, PageProps, PostStatus, ResponseStatus } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import Badge from "@/components/base/Badge";
import useMessage from "@/hooks/useMessage";

type FellowshipsProps = PageProps<{ fellowships: Fellowship[] }>;

const postStatusLabel: Record<PostStatus, string> = {
  published: "已发布",
  draft: "草稿",
  archived: "已存档",
};

const postStatusType: Record<PostStatus, ResponseStatus | undefined> = {
  published: "success",
  draft: "warning",
  archived: undefined,
};

const Fellowships = ({ fellowships }: FellowshipsProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <Head title="Fellowships" />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{fellowships.length} Items</span>
        <Link className="button solid" href={route("fellowships.create")}>
          <RiAddFill size={18} />
          {message.dashboard.fellowships.addFellowship}
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>{message.dashboard.fellowships.name}</th>
            <th>{message.dashboard.fellowships.status}</th>
            <th>{message.dashboard.fellowships.location}</th>
            <th>{message.dashboard.fellowships.schedule}</th>
            <th>{message.dashboard.fellowships.contact}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fellowships.map((fellowship) => (
            <tr key={fellowship.id}>
              <td>{fellowship.name}</td>
              <td>
                <Badge
                  status={postStatusType[fellowship.status]}
                  content={message.postStatus[fellowship.status]}
                />
              </td>
              <td>{fellowship.location}</td>
              <td>
                {fellowship.frequency} {fellowship.day} {fellowship.hour}
              </td>
              <td>{fellowship.admin?.name}</td>
              <td style={{ width: "8rem" }}>
                <div className="flex gap">
                  <Link
                    as="button"
                    method="delete"
                    className="icon"
                    href={route("fellowships.destroy", { id: fellowship.id })}
                  >
                    <RiDeleteBinLine size={18} />
                  </Link>
                  <Link
                    as="button"
                    method="patch"
                    className="icon"
                    href={route("fellowships.archive", { id: fellowship.id })}
                  >
                    <RiArchiveLine size={18} />
                  </Link>
                  <Link
                    className="button icon"
                    href={route("fellowships.edit", { id: fellowship.id })}
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
