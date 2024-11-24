import { useContext } from "react";
import clsx from "clsx";

import FormContext from "@/contexts/FormContext";

interface FieldProps {
  name: string;
  className?: string;
  children: React.ReactNode;
}

const Field = ({ name, className, children }: FieldProps) => {
  const errors = useContext(FormContext).errors ?? {};

  return (
    <div className={clsx("flex-column gap", className)}>
      {children}
      {errors[name] && <small className="danger">{errors[name]}</small>}
    </div>
  );
};

export default Field;
