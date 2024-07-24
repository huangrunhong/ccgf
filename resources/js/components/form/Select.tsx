import { useContext } from "react";

import { SelectOption } from "@/types";
import Dropdown from "@/components/base/Dropdown";
import FormContext from "@/contexts/FormContext";
import Field from "@/components/form/Field";

const getLabel = <T extends string>(options: SelectOption<T>[], value: T) =>
  options.find((option) => option.value === value)?.label ?? value;

export interface SelectProps<T extends string | number = string> {
  label?: string;
  name: string;
  options?: SelectOption<T>[];
}

const Select = <T extends string | number = string>({
  label,
  name,
  options = [],
}: SelectProps<T>) => {
  const form = useContext(FormContext);

  return (
    <Field name={name} className="flex-1">
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
              onClick={(event) => {
                event.currentTarget.blur();
                form.setData(name, option.value);
              }}
            >
              {option.label}
            </button>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Field>
  );
};

export default Select;
