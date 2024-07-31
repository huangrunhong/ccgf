import {
  RiCrossLine,
  RiOpenArmLine,
  RiRestaurantLine,
  RiSpeakLine,
  RiYoutubeFill,
} from "@remixicon/react";
import { nextDay } from "date-fns/nextDay";
import { isSameWeek } from "date-fns/isSameWeek";

import { Event, Fellowship, PageProps, Worship } from "@/types";
import getDay from "@/lib/getDay";
import useMessage from "@/hooks/useMessage";
import PageLayout from "@/layouts/PageLayout";
import SiteHead from "@/components/base/SiteHead";
import EventSchedule from "@/components/base/EventSchedule";
import EventCard from "@/components/base/EventCard";
import Schedule from "@/components/base/Schedule";
import Section from "@/components/base/Section";

const isThisWeek = (date: string) =>
  isSameWeek(date, new Date(), { weekStartsOn: 1 });

const fineUpcomingWorship = (worships: Worship[]) =>
  worships.find((worship) => !worship.regular && isThisWeek(worship.date)) ||
  worships.find((worship) => worship.regular);

const castRecurringDate = ({ date, regular }: Worship) =>
  regular ? nextDay(new Date(), getDay(date)) : new Date(date);

interface HomeProps extends PageProps {
  events: Event[];
  worships: Worship[];
  fellowships: Fellowship[];
}

const Home = ({ events, fellowships, worships }: HomeProps) => {
  const message = useMessage();
  const worship = fineUpcomingWorship(worships) || worships.at(0);

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
      <Section heading={message.home.worship.heading}>
        <div className="flex gap-2">
          <div className="flex-1 flex-column justify-between">
            <span className="muted">{message.home.worship.description}</span>
            {worship && (
              <div className="flex-column gap-2">
                <EventSchedule date={castRecurringDate(worship)} />
                <div className="flex gap-2 large">
                  <div className="flex items-center gap">
                    <RiSpeakLine size={20} />
                    {message.home.worship.sermon}
                  </div>
                  {worship.baptism && (
                    <div className="flex items-center gap">
                      <RiCrossLine size={20} />
                      {message.home.worship.baptism}
                    </div>
                  )}
                  {worship.eucharist && (
                    <div className="flex items-center gap">
                      <RiRestaurantLine size={20} />
                      {message.home.worship.eucharist}
                    </div>
                  )}
                  {worship.dinner && (
                    <div className="flex items-center gap">
                      <RiOpenArmLine size={20} />
                      {message.home.worship.dinner}
                    </div>
                  )}
                </div>
                <h3 className="flex-column gap mb-2">
                  <span className="muted">{worship.title}</span>
                  <span>{worship.location}</span>
                </h3>
              </div>
            )}
          </div>
          <div className="flex-1 p-relative">
            <img className="w-full" src="/assets/worship.jpg" alt="worship" />
            <a className="live-stream">
              <RiYoutubeFill size={24} />
              <span className="large">{message.home.worship.video}</span>
            </a>
          </div>
        </div>
      </Section>
      <Section heading={message.home.fellowships.heading}>
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
      </Section>
      <Section heading={message.home.events}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </Section>
    </PageLayout>
  );
};

export default Home;
