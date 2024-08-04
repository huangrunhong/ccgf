import { Event } from "@/types";
import EventSchedule from "@/components/base/EventSchedule";

interface EventListProps {
  events: Event[];
}

const EventList = (props: EventListProps) =>
  props.events.map((event) => (
    <div
      key={event.id}
      className="flex max-lg-flex-column gap-x-4 gap-y-2 mb-4"
    >
      <div className="flex-1">
        <img
          alt="event"
          className="w-full"
          src={event.cover ?? "/assets/event.jpg"}
        />
      </div>
      <EventSchedule
        className="flex-1"
        date={new Date(event.date)}
        title={event.title}
        location={event.location}
      />
    </div>
  ));

export default EventList;
