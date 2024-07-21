import { createContext } from "react";

import { InertiaForm } from "@/types";

const FormContext = createContext<InertiaForm>({
  data: {},
  errors: {},
  setData: () => {},
});

export default FormContext;
