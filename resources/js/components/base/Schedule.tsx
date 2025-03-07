import { Day } from 'date-fns';

import useMessage from '@/hooks/useMessage';
import { Fellowship } from '@/types';

interface ScheduleProps {
  className?: string;
  day: Day;
  hour: string;
  frequency: Fellowship['frequency'];
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
