import { useContext, useState } from 'react';
import { format } from 'date-fns/format';
import { parseISO } from 'date-fns/parseISO';

import FormContext from '@/contexts/FormContext';
import DatePicker from '@/components/form/DatePicker';
import TimePicker from '@/components/form/TimePicker';
import Field from '@/components/form/Field';

interface DatetimePickerProps {
  name: string;
  label: string;
  dateformat?: string;
}

const DatetimePicker = ({ name, label, dateformat }: DatetimePickerProps) => {
  const form = useContext(FormContext);
  const [datetime, setDatetime] = useState({
    time: format(form.data[name], 'kk:mm'),
    date: format(form.data[name], 'yyyy-MM-dd'),
  });

  return (
    <Field name={name}>
      <FormContext.Provider
        value={{
          data: datetime,
          setData: (key, value) => {
            const next = { ...datetime, [key]: value };

            setDatetime(next);
            form.setData(name, parseISO(`${next.date}T${next.time}`));
          },
        }}
      >
        <span>{label}</span>
        <div className="flex gap">
          <DatePicker name="date" dateformat={dateformat} />
          <TimePicker name="time" />
        </div>
      </FormContext.Provider>
    </Field>
  );
};

export default DatetimePicker;
