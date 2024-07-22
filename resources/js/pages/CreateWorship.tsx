import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import WorshipForm from "@/components/WorshipForm";
import useMessage from "@/hooks/useMessage";

const CreateWorShip = () => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={message.page.createFellowship} />
      <WorshipForm />
    </AuthenticatedLayout>
  );
};

export default CreateWorShip;
