import { Head } from "@inertiajs/react";

import { Fellowship, PageProps, User } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import FellowshipForm from "@/components/FellowshipForm";

type EditFellowShipProps = PageProps<{ fellowship: Fellowship; users: User[] }>;

const EditFellowShip = ({ fellowship, users }: EditFellowShipProps) => (
  <AuthenticatedLayout currentPath="fellowships">
    <Head title="Edit fellowship" />
    <FellowshipForm fellowship={fellowship} users={users} />
  </AuthenticatedLayout>
);

export default EditFellowShip;
