import { format as formatDate } from "date-fns/format";

import useDateLocale from "@/hooks/useDateLocale";

interface FormattedDateProps extends React.HTMLAttributes<HTMLSpanElement> {
  date: string;
  format: string;
}

const FormattedDate = ({ date, format, ...props }: FormattedDateProps) => {
  const locale = useDateLocale();

  return <span {...props}>{formatDate(date, format, { locale })}</span>;
};

export default FormattedDate;
