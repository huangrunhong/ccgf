import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import EventForm from "@/components/EventForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const CreateWorShip = () => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="events">
      <SiteHead title={message.page.createEvent} />
      <EventForm heading={message.page.createEvent} />
    </AuthenticatedLayout>
  );
};

export default CreateWorShip;
