import { PhotoMetadata } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import EventForm from '@/components/EventForm';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

interface CreateEventProps {
  photos: PhotoMetadata[];
}

const CreateEvent = ({ photos }: CreateEventProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="events">
      <SiteHead title={message.page.createEvent} />
      <EventForm photos={photos} heading={message.page.createEvent} />
    </AuthenticatedLayout>
  );
};

export default CreateEvent;
