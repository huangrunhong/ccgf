import { Event, PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import EventForm from '@/components/EventForm';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface EditEventProps {
  event: Event;
  photos: PhotoMetadata[];
}

const EditEvent = ({ event, photos }: EditEventProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="events">
      <SiteHead title={message.page.editEvent} />
      <EventForm event={event} photos={photos} heading={message.page.editEvent} />
    </AuthenticatedLayout>
  );
};

export default EditEvent;
