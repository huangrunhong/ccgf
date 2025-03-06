import { useContext } from 'react';

import FormContext from '@/contexts/FormContext';
import Field from '@/components/form/Field';

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends InputAttributes {
  name: string;
  label: string;
  suffix?: React.ReactNode;
}

const Input = ({ label, name, suffix, type, ...props }: InputProps) => {
  const form = useContext(FormContext);

  return (
    <Field name={name}>
      <label htmlFor={name}>{label}</label>
      <div className="p-relative">
        <input
          {...props}
          id={name}
          name={name}
          type={type}
          value={form.data[name] ?? ''}
          onChange={(e) => form.setData(name, e.target.value)}
        />
        {suffix}
      </div>
    </Field>
  );
};

export default Input;
