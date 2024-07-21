import { useContext } from "react";

import FormContext from "@/contexts/FormContext";

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends InputAttributes {
  name: string;
  label: string;
  suffix?: React.ReactNode;
}

const Input = ({ label, name, suffix, type, ...props }: InputProps) => {
  const form = useContext(FormContext);

  return (
    <div className="flex-column gap">
      <label htmlFor={name}>{label}</label>
      <div className="p-relative">
        <input
          {...props}
          id={name}
          name={name}
          type={type}
          value={form.data[name] ?? ""}
          onChange={(e) => form.setData(name, e.target.value)}
        />
        {suffix}
      </div>
      {form.errors[name] && (
        <small className="danger">{form.errors[name]}</small>
      )}
    </div>
  );
};

export default Input;
