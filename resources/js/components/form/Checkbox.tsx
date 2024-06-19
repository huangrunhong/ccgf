import { RiCheckLine } from "@remixicon/react";

import { InertiaForm } from "@/types";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  inertiaForm: InertiaForm;
}

const Checkbox = ({
  name,
  label,
  inertiaForm: form,
  ...props
}: CheckboxProps) => (
  <div className="flex-column gap">
    <div className="flex gap items-center p-relative">
      {form.data[name] && <RiCheckLine className="checkbox-icon" size={16} />}
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={(e) => form.setData(name, e.target.checked)}
        {...props}
      />
      <label htmlFor={name}>{label}</label>
    </div>
    {form.errors[name] && <small className="danger">{form.errors[name]}</small>}
  </div>
);

export default Checkbox;
