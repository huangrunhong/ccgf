import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import FellowshipForm from "@/components/FellowshipForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const CreateFellowShip = () => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <SiteHead title={message.page.createFellowship} />
      <FellowshipForm heading={message.page.createFellowship} />
    </AuthenticatedLayout>
  );
};

export default CreateFellowShip;
