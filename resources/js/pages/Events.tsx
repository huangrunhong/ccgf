import { Head } from "@inertiajs/react";

import { PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

const Events = ({ auth }: PageProps) => (
    <AuthenticatedLayout currentPath="events">
        <Head title="Events" />
    </AuthenticatedLayout>
);

export default Events;
