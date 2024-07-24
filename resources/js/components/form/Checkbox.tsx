import { useContext } from "react";
import { RiCheckLine } from "@remixicon/react";

import FormContext from "@/contexts/FormContext";
import Field from "@/components/form/Field";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox = ({ name, label, ...props }: CheckboxProps) => {
  const form = useContext(FormContext);

  return (
    <Field name={name}>
      <div className="flex gap items-center p-relative">
        {form.data[name] && <RiCheckLine className="checkbox-icon" size={16} />}
        <input
          {...props}
          id={name}
          name={name}
          type="checkbox"
          checked={form.data[name] ?? false}
          onChange={(e) => form.setData(name, e.target.checked)}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </Field>
  );
};

export default Checkbox;
