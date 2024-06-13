import { Head } from "@inertiajs/react";

import { PageProps, User } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import FellowshipForm from "@/components/FellowshipForm";

type CreateFellowShipProps = PageProps<{ users: User[] }>;

const CreateFellowShip = ({ users }: CreateFellowShipProps) => (
  <AuthenticatedLayout currentPath="fellowships">
    <Head title="Create fellowship" />
    <FellowshipForm users={users} />
  </AuthenticatedLayout>
);

export default CreateFellowShip;
