import { Fellowship, PageProps, User } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import FellowshipForm from "@/components/FellowshipForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

type EditFellowShipProps = PageProps<{ fellowship: Fellowship; users: User[] }>;

const EditFellowShip = ({ fellowship, users }: EditFellowShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <SiteHead title={message.page.editFellowship} />
      <FellowshipForm fellowship={fellowship} users={users} />
    </AuthenticatedLayout>
  );
};

export default EditFellowShip;
