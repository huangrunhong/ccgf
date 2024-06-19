import { PageProps, User } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import FellowshipForm from "@/components/FellowshipForm";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

type CreateFellowShipProps = PageProps<{ users: User[] }>;

const CreateFellowShip = ({ users }: CreateFellowShipProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="fellowships">
      <SiteHead title={message.page.createFellowship} />
      <FellowshipForm users={users} />
    </AuthenticatedLayout>
  );
};

export default CreateFellowShip;
