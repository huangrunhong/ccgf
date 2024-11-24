import { useState } from "react";

const useSwitch = (): [boolean, () => void, () => void] => {
  const [enabled, setEnabled] = useState(false);

  return [enabled, () => setEnabled(true), () => setEnabled(false)];
};

export default useSwitch;
