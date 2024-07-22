import { Link } from "@inertiajs/react";
import { RiAddFill, RiDeleteBinLine, RiEditLine } from "@remixicon/react";

import { PageProps, Worship } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

type WorshipsProps = PageProps<{ worships: Worship[] }>;

const Worships = ({ worships }: WorshipsProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={message.page.dashboard} />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{worships.length} Items</span>
        <Link className="button solid" href={route("worships.create")}>
          <RiAddFill size={18} />
          {message.admin.worships.post}
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>{message.admin.worships.date}</th>
            <th>{message.admin.worships.speaker}</th>
            <th>{message.admin.worships.title}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {worships.map((worship) => (
            <tr key={worship.id}>
              <td>{worship.date}</td>
              <td>{worship.speaker}</td>
              <td>{worship.title}</td>
              <td style={{ width: "8rem" }}>
                <div className="flex gap">
                  <Link
                    as="button"
                    method="delete"
                    className="icon"
                    href={route("worships.destroy", { id: worship.id })}
                  >
                    <RiDeleteBinLine size={18} />
                  </Link>
                  <Link
                    className="button icon"
                    href={route("worships.edit", { id: worship.id })}
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

export default Worships;
