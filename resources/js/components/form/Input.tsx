import { InertiaForm } from "@/types";

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends InputAttributes {
  name: string;
  label: string;
  suffix?: React.ReactNode;
  inertiaForm: InertiaForm;
}

const Input = ({
  label,
  name,
  suffix,
  type,
  inertiaForm: form,
  ...props
}: InputProps) => (
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
    {form.errors[name] && <small className="danger">{form.errors[name]}</small>}
  </div>
);

export default Input;
