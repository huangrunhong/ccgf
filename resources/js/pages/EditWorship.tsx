import { PageProps, Worship } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import WorshipForm from "@/components/WorshipForm";
import useMessage from "@/hooks/useMessage";

interface EditWorShipProps extends PageProps {
  worship: Worship;
}

const EditWorShip = ({ worship }: EditWorShipProps) => {
  const message = useMessage();

  const heading = worship.regular
    ? message.page.editRegularWorship
    : message.page.editSpecialWorship;

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={heading} />
      <WorshipForm heading={heading} worship={worship} />
    </AuthenticatedLayout>
  );
};

export default EditWorShip;
