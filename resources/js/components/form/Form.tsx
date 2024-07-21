import { InertiaForm } from "@/types";
import FormContext from "@/contexts/FormContext";

interface FormProps {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  form: InertiaForm;
}

const Form = ({ children, form, onSubmit }: FormProps) => (
  <FormContext.Provider value={form}>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit && onSubmit(e);
      }}
    >
      {children}
    </form>
  </FormContext.Provider>
);

export default Form;
