import { Event } from "@/types";
import EventSchedule from "@/components/base/EventSchedule";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => (
  <div className="flex gap-2 mb-4">
    <div className="flex-1">
      <EventSchedule date={new Date(event.date)} />
      <h3 className="mt-4 mb-1">{event.title}</h3>
      <span className="large">{event.location}</span>
    </div>
    <div className="flex-1">
      <img
        className="w-full"
        src={event.cover ?? "/assets/event.jpg"}
        alt="event"
      />
    </div>
  </div>
);

export default EventCard;
