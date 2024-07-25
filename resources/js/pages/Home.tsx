import {
  RiCalendarScheduleLine,
  RiCrossLine,
  RiMap2Line,
  RiOpenArmLine,
  RiRestaurantLine,
  RiSpeakLine,
  RiYoutubeFill,
} from "@remixicon/react";

import { Event, Fellowship, PageProps, Worship } from "@/types";
import useMessage from "@/hooks/useMessage";
import PageLayout from "@/layouts/PageLayout";
import SiteHead from "@/components/base/SiteHead";
import EventSchedule from "@/components/base/EventSchedule";
import EventCard from "@/components/base/EventCard";
import Schedule from "@/components/base/Schedule";

interface HomeProps extends PageProps {
  events: Event[];
  worship: Worship;
  fellowships: Fellowship[];
}

const Home = ({ events, fellowships, worship }: HomeProps) => {
  const message = useMessage();

  return (
    <PageLayout className="home">
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
              <EventSchedule date={new Date(worship.date)} />
              <div className="flex gap-2 mt-2">
                <div className="flex items-center gap">
                  <RiSpeakLine size={18} />
                  {message.home.worship.sermon}
                </div>
                {worship.baptism && (
                  <div className="flex items-center gap">
                    <RiCrossLine size={18} />
                    {message.home.worship.baptism}
                  </div>
                )}
                {worship.eucharist && (
                  <div className="flex items-center gap">
                    <RiRestaurantLine size={18} />
                    {message.home.worship.eucharist}
                  </div>
                )}
                {worship.dinner && (
                  <div className="flex items-center gap">
                    <RiOpenArmLine size={18} />
                    {message.home.worship.dinner}
                  </div>
                )}
              </div>
              <h3 className="mb-2">
                {worship.speaker}: {worship.title}
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
      <section>
        <hr />
        <h2 className="mt-4 mb-8">{message.home.fellowships.heading}</h2>
        <div className="fellowships">
          {fellowships.map((fellowship) => (
            <div key={fellowship.id}>
              <img
                className="w-full"
                src={fellowship.cover ?? "/assets/fellowship.jpg"}
              />
              <h3 className="h3 mt-1">{fellowship.name}</h3>
              <span className="h3 muted">
                <Schedule
                  day={fellowship.day}
                  frequency={fellowship.frequency}
                />
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-8">
        <hr />
        <h2 className="mt-4 mb-8">{message.home.events}</h2>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </PageLayout>
  );
};

export default Home;
