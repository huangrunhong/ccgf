import { useContext } from "react";
import clsx from "clsx";

import FormContext from "@/contexts/FormContext";

interface FieldProps {
  name: string;
  className?: string;
  children: React.ReactNode;
}

const Field = ({ name, className, children }: FieldProps) => {
  const form = useContext(FormContext);
  const error = (form.errors ?? {})[name];

  return (
    <div className={clsx("flex-column gap", className)}>
      {children}
      {error && <small className="danger">{error}</small>}
    </div>
  );
};

export default Field;
