import { useContext } from "react";

import { SelectOption } from "@/types";
import Dropdown from "@/components/base/Dropdown";
import FormContext from "@/contexts/FormContext";

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
      {form.errors[name] && (
        <small className="danger">{form.errors[name]}</small>
      )}
    </div>
  );
};

export default Select;
