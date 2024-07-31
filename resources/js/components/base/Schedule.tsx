import { usePage } from "@inertiajs/react";
import { Day } from "date-fns";

import useMessage from "@/hooks/useMessage";

interface ScheduleProps {
  day: Day;
  frequency: 1 | 2;
}

const Schedule = ({ day, frequency }: ScheduleProps) => {
  const page = usePage();
  const message = useMessage();
  const delimiter = page.props.locale === "zh" ? " " : ", ";

  return (
    <span>
      {message.common.frequency[frequency]}
      {delimiter}
      {message.common.day[day]}
    </span>
  );
};

export default Schedule;
