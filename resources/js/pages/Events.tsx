import { Link } from "@inertiajs/react";
import { RiAddFill, RiDeleteBinLine, RiEditLine } from "@remixicon/react";

import { PageProps, Event } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

type EventsProps = PageProps<{ events: Event[] }>;

const Events = ({ events }: EventsProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="events">
      <SiteHead title={message.page.events} />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{events.length} Items</span>
        <Link className="button solid" href={route("events.create")}>
          <RiAddFill size={18} />
          {message.admin.events.post}
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>{message.admin.events.date}</th>
            <th>{message.admin.events.location}</th>
            <th>{message.admin.events.title}</th>
            <th>{message.admin.events.description}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.date}</td>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td style={{ width: "8rem" }}>
                <div className="flex gap">
                  <Link
                    as="button"
                    method="delete"
                    className="icon"
                    href={route("events.destroy", { id: event.id })}
                  >
                    <RiDeleteBinLine size={18} />
                  </Link>
                  <Link
                    className="button icon"
                    href={route("events.edit", { id: event.id })}
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
export default Events;
