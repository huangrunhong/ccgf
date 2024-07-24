import {
  RiCalendarScheduleLine,
  RiMap2Line,
  RiYoutubeFill,
} from "@remixicon/react";

import useMessage from "@/hooks/useMessage";
import PageLayout from "@/layouts/PageLayout";
import SiteHead from "@/components/base/SiteHead";
import EventSchedule from "@/components/base/EventSchedule";

const Home = () => {
  const message = useMessage();

  return (
    <PageLayout>
      <SiteHead title={message.page.home} />
      <section className="pt-10">
        <div className="mb-2">
          <span className="large muted">{message.home.welcome}</span>
          <h1>{message.home.heading}</h1>
        </div>
        <div className="banner" />
        <p className="pastor-words py-12">{message.home.subheading}</p>
      </section>
      <section className="pt-4 pb-8">
        <hr />
        <div className="flex gap-2 items-center mt-4 mb-8">
          <h2 className="flex-1">{message.home.worship.heading}</h2>
          <div className="flex flex-1 justify-between">
            <div className="flex items-center gap">
              <RiCalendarScheduleLine size={20} />
              <span className="large">
                {message.home.worship.schedule} 15:30
              </span>
            </div>
            <div className="flex items-center gap">
              <RiMap2Line size={20} />
              <span className="large">
                Kirchhainer Strasse 2, 60433 Frankfurt am Main
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 flex-column justify-between">
            <span className="muted">{message.home.worship.description}</span>
            <div className="flex-column gap-1">
              <EventSchedule />
              <h3 className="mt-4 mb-1">
                <span className="muted">普美恩师母:</span> 信心可以衡量吗？
              </h3>
            </div>
          </div>
          <div className="flex-1 p-relative">
            <img className="w-full" src="/assets/worship.jpg" alt="worship" />
            <a className="live-stream">
              <RiYoutubeFill size={24} />
              <span className="large">{message.home.worship.video}</span>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
