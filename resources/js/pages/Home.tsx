import { RiCalendarScheduleLine, RiMap2Line } from "@remixicon/react";

import PageLayout from "@/layouts/PageLayout";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const Home = () => {
  const message = useMessage();

  return (
    <PageLayout>
      <SiteHead title={message.page.home} />
      <div className="landing">
        <div className="background">
          <div data-aos="fade-left" />
        </div>
        <section className="banner">
          <h2 data-aos="fade-right">法兰克福华人基督教會</h2>
          <h1 lang="de" data-aos="fade-right" data-aos-delay="200">
            Chinesische Christliche
            <br />
            Gemeinde Frankfurt
          </h1>
          <p lang="de" data-aos="fade-right" data-aos-delay="400">
            "Die Liebe ist langmütig, die Liebe ist gütig. Sie ereifert sich
            nicht, sie prahlt nicht, sie bläht sich nicht auf. Sie handelt nicht
            ungehörig, sucht nicht ihren Vorteil, lässt sich nicht zum Zorn
            reizen, trägt das Böse nicht nach."
          </p>
        </section>
        <hr />
      </div>
      <div className="church-service">
        <section>
          <h2 className="mb-4">{message.home.churchService}</h2>
          <div className="church-service-details">
            <span className="flex-1 large">
              教会主日崇拜现采取线上，线下双轨制。欢迎弟兄姊妹和各位朋友参加我们的实体或网络主日崇拜。
            </span>
            <div className="flex-1 flex-column gap-2">
              <div className="flex items-center gap-1">
                <RiCalendarScheduleLine size={24} />
                <span className="large">每周日 15:00</span>
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
      </div>
    </PageLayout>
  );
};

export default Home;
