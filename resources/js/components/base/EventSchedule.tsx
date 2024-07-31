import useLanguage from "@/hooks/useLanguage";
import FormattedDate from "@/components/base/FormattedDate";

interface EventScheduleProps {
  date: Date;
}

const EventSchedule = ({ date }: EventScheduleProps) => {
  const locale = useLanguage();

  return (
    <div className="flex-column gap-1">
      <div className="flex gap">
        <div className="flex-column">
          <span className="h3">{date.getFullYear()}</span>
          <strong className="h2">
            <strong>
              {date.toLocaleString(locale, { month: "short", day: "numeric" })}
            </strong>
          </strong>
        </div>
        <div className="dialog-line ml-4 mr-2 mt-1 mb-2" />
        <div className="flex-column items-end">
          <span className="h3">
            {date.toLocaleString(locale, { weekday: "long" })}
          </span>
          <span className="h2">
            <FormattedDate date={date} format="p" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
