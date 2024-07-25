import { Event, PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import EventForm from "@/components/EventForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

interface EditEventProps extends PageProps {
  event: Event;
}

const EditEvent = ({ event }: EditEventProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="events">
      <SiteHead title={message.page.editEvent} />
      <EventForm event={event} />
    </AuthenticatedLayout>
  );
};

export default EditEvent;
