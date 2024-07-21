import { useContext } from "react";

import { SelectOption } from "@/types";
import Dropdown from "@/components/base/Dropdown";
import FormContext from "@/contexts/FormContext";

export interface SelectProps<
  N extends string,
  T extends string | number = string
> {
  label?: string;
  name: N;
  values?: T[];
  options?: SelectOption<T>[];
}

const getLabel = <T extends string>(options: SelectOption<T>[], value: T) =>
  options.find((option) => option.value === value)?.label ?? value;

const Select = <N extends string, T extends string | number = string>({
  label,
  name,
  options = [],
  values = [],
}: SelectProps<N, T>) => {
  const form = useContext(FormContext);

  return (
    <div className="flex-column gap flex-1">
      {label && <span>{label}</span>}
      <Dropdown>
        <button type="button" className="select">
          {getLabel(options, form.data[name])}
        </button>
        <Dropdown.Menu>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => form.setData(name, option.value)}
            >
              {option.label}
            </button>
          ))}
          {values.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => form.setData(name, value)}
            >
              {value}
            </button>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {form.errors[name] && (
        <small className="danger">{form.errors[name]}</small>
      )}
    </div>
  );
};

export default Select;
