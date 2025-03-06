import { Day } from 'date-fns';

import useMessage from '@/hooks/useMessage';

interface ScheduleProps {
  day: Day;
  hour: string;
  frequency: 1 | 2;
  className?: string;
}

const Schedule = ({ className, day, hour, frequency }: ScheduleProps) => {
  const message = useMessage();

  return (
    <span className={className}>
      {message.common.frequency[frequency]} {message.common.day[day]} {hour}
    </span>
  );
};

export default Schedule;
