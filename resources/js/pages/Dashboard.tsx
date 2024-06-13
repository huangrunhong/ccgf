import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";

const Dashboard = () => (
  <AuthenticatedLayout currentPath="dashboard">
    <Head title="Dashboard" />
  </AuthenticatedLayout>
);

export default Dashboard;
