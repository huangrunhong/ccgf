import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const Dashboard = () => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="dashboard">
      <SiteHead title={message.page.dashboard} />
    </AuthenticatedLayout>
  );
};

export default Dashboard;
