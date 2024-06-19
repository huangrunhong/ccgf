import PageLayout from "@/layouts/PageLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const Home = () => {
  const message = useMessage();

  return (
    <PageLayout>
      <SiteHead title={message.page.home} />
    </PageLayout>
  );
};

export default Home;
