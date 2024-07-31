import { Fellowship, PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import FellowshipForm from "@/components/FellowshipForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

interface EditFellowShipProps extends PageProps {
  fellowship: Fellowship;
}

const EditFellowShip = ({ fellowship }: EditFellowShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <SiteHead title={message.page.editFellowship} />
      <FellowshipForm
        fellowship={fellowship}
        heading={message.page.editFellowship}
      />
    </AuthenticatedLayout>
  );
};

export default EditFellowShip;
