import { PageProps, Worship } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import WorshipForm from "@/components/WorshipForm";
import useMessage from "@/hooks/useMessage";

type EditWorShipProps = PageProps<{ worship: Worship }>;

const EditWorShip = ({ worship }: EditWorShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={message.page.editFellowship} />
      <WorshipForm worship={worship} />
    </AuthenticatedLayout>
  );
};

export default EditWorShip;
