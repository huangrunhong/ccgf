import { RiCalendarScheduleLine, RiMap2Line } from "@remixicon/react";

import PageLayout from "@/layouts/PageLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const Home = () => {
  const message = useMessage();

  return (
    <PageLayout>
      <SiteHead title={message.page.home} />
      <div className="flex items-center justify-center gap-2 section mt-6">
        <div className="flex justify-center">
          <img
            src="/assets/church.webp"
            alt=""
            data-aos="fade"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="flex-column items-end gap-1"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1>
            Chinesische Christliche
            <br />
            Gemeinde Frankfurt
          </h1>
          <h3>法兰克福华人基督教會</h3>
        </div>
      </div>
      <hr />
      <section>
        <h2 className="mb-4">{message.home.churchService}</h2>
        <div className="flex gap-2 justify-between">
          <span className="large">
            教会主日崇拜现采取线上，线下双轨制。
            <br />
            欢迎弟兄姊妹和各位朋友参加我们的实体或网络主日崇拜。
          </span>
          <div className="flex-column gap-2">
            <div className="flex items-center gap-1">
              <RiCalendarScheduleLine size={24} />
              <span className="large">每周日15:00</span>
            </div>
            <div className="flex items-center gap-1">
              <RiMap2Line size={24} />
              <span className="large">
                Kirchhainer Strasse 2, 60433 Frankfurt am Main
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
