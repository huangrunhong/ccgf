import { usePage } from "@inertiajs/react";

import useMessage from "@/hooks/useMessage";

interface ScheduleProps {
  day: number;
  frequency: number;
}

const Schedule = ({ day, frequency }: ScheduleProps) => {
  const page = usePage();
  const message = useMessage();
  const delimiter = page.props.locale === "zh" ? " " : ", ";

  return (
    <span>
      {message.common.frequency[frequency as 1 | 2]}
      {delimiter}
      {message.common.day[day as 1 | 2 | 3 | 4 | 5 | 6 | 7]}
    </span>
  );
};

export default Schedule;
