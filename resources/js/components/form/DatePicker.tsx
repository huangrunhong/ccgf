import { useContext } from "react";
import { formatISO } from "date-fns/formatISO";
import { Chevron, DayPicker } from "react-day-picker";
import {
  RiCalendar2Line,
  RiArrowLeftSLine as ArrowLeft,
  RiArrowRightSLine as ArrowRight,
} from "@remixicon/react";

import FormContext from "@/contexts/FormContext";
import FormattedDate from "@/components/base/FormattedDate";
import Field from "@/components/form/Field";
import Dropdown from "@/components/base/Dropdown";
import useDateLocale from "@/hooks/useDateLocale";

interface CalendarProps {
  name: string;
  label?: string;
  dateformat?: string;
}

const ChevronIcon = (...[{ orientation }]: Parameters<typeof Chevron>) =>
  orientation === "left" ? <ArrowLeft size={18} /> : <ArrowRight size={18} />;

const DatePicker = ({ label, name, dateformat = "PPPP" }: CalendarProps) => {
  const locale = useDateLocale();
  const form = useContext(FormContext);

  const onSelect = (next: Date) => {
    form.setData(name, formatISO(next, { representation: "date" }));
  };

  return (
    <Field className="flex-1" name={name}>
      {label && <span>{label}</span>}
      <Dropdown className="calendar">
        <button type="button" className="input flex justify-between">
          <FormattedDate date={form.data[name]} format={dateformat} />
          <RiCalendar2Line className="muted" size={18} />
        </button>
        <Dropdown.Menu>
          <DayPicker
            required
            showOutsideDays
            mode="single"
            locale={locale}
            onSelect={onSelect}
            selected={form.data[name]}
            defaultMonth={form.data[name]}
            components={{ Chevron: ChevronIcon }}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Field>
  );
};

export default DatePicker;
