import { PageProps, PhotoMetadata } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import EventForm from "@/components/EventForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

interface CreateWorShipProps extends PageProps {
  photos: PhotoMetadata[];
}

const CreateWorShip = ({ photos }: CreateWorShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="events">
      <SiteHead title={message.page.createEvent} />
      <EventForm photos={photos} heading={message.page.createEvent} />
    </AuthenticatedLayout>
  );
};

export default CreateWorShip;
