import clsx from "clsx";

import useLanguage from "@/hooks/useLanguage";
import FormattedDate from "@/components/base/FormattedDate";

const format = { month: "short", day: "numeric" } as const;

interface EventScheduleProps {
  children?: React.ReactNode;
  className?: string;
  date: Date;
  location?: string;
  title?: string;
  description?: string;
}

const EventSchedule = ({
  children,
  className,
  date,
  location,
  title,
  description,
}: EventScheduleProps) => {
  const locale = useLanguage();

  return (
    <div className={clsx(className, "flex-column gap-2 justify-between")}>
      <div className="flex-column gap-2">
        <div className="flex-column gap-1">
          <div className="flex gap">
            <div className="flex-column">
              <span className="h3">{date.getFullYear()}</span>
              <strong className="h2">
                {date.toLocaleString(locale, format)}
              </strong>
            </div>
            <div className="dialog-line ml-4 mr-2 mt-1 mb-2" />
            <div className="flex-column items-end">
              <FormattedDate className="h3" date={date} format="iiii" />
              <FormattedDate className="h2" date={date} format="p" />
            </div>
          </div>
        </div>
        {children}
        <h3 className="flex-column gap">
          {title && <span className="muted">{title}</span>}
          <span>{location}</span>
        </h3>
      </div>
      {description && <span className="muted">{description}</span>}
    </div>
  );
};

export default EventSchedule;
