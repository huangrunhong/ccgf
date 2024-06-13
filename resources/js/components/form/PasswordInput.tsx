import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "@remixicon/react";

import Input, { InputProps } from "./Input";

const EyeIcon = ({ reveal = false }) =>
  reveal ? <RiEyeLine size={18} /> : <RiEyeCloseLine size={18} />;

const PasswordInput = ({
  autoComplete = "current-password",
  ...props
}: InputProps) => {
  const [reveal, setReveal] = useState(false);

  const toggle = () => setReveal(!reveal);
  const type = reveal ? "text" : "password";

  const suffix = (
    <button type="button" className="input-suffix" onClick={toggle}>
      <EyeIcon reveal={reveal} />
    </button>
  );

  return (
    <Input autoComplete={autoComplete} type={type} suffix={suffix} {...props} />
  );
};

export default PasswordInput;
