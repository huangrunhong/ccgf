import {
  RiCalendarScheduleLine,
  RiLiveLine,
  RiCheckLine,
  RiMap2Line,
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
        <div className="flex-column gap-1 mb-4">
          <span className="large muted">{message.home.welcome}</span>
          <h1>{message.home.heading}</h1>
        </div>
        <div className="banner" />
        <p className="pastor-words py-12">{message.home.subheading}</p>
      </section>
      <section className="pt-4 pb-8">
        <hr />
        <div className="flex gap-2 items-center mt-4 mb-8">
          <h2 className="flex-1">{message.home.worship}</h2>
          <div className="flex flex-1 justify-between">
            <div className="flex items-center gap">
              <RiCalendarScheduleLine size={20} />
              <span className="large">每周日15:30</span>
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
            <span className="muted">
              教会主日崇拜现采取线上，线下双轨制。欢迎弟兄姊妹和各位朋友参加我们的实体或网络主日崇拜。
            </span>
            <div className="flex-column gap-1">
              <span className="large muted">证道 / 洗礼 / 圣餐 / 爱宴</span>
              <EventSchedule />
              <h3 className="mt-3 mb-1">
                信心可以衡量吗？
                <span className="muted"> 普美恩师母</span>
              </h3>
            </div>
          </div>
          <div className="flex-1 p-relative">
            <img className="w-full" src="/assets/worship.jpg" alt="worship" />
            <a className="live-stream">
              <RiLiveLine size={24} />
              <span className="large">现场直播</span>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
