import { RiCloseLine } from "@remixicon/react";
import clsx from "clsx";

import useMessage from "@/hooks/useMessage";

interface DialogProps {
  children?: React.ReactNode;
  onConfirm: () => void;
  open: boolean;
  dismiss: (open: false) => void;
  title: string;
}

const Dialog = ({ children, onConfirm, open, dismiss, title }: DialogProps) => {
  const message = useMessage();

  const close = () => dismiss(false);
  const confirm = () => (dismiss(false), onConfirm());

  return (
    <div className={clsx("dialog", open && "open")}>
      <div className="dialog-body">
        <button className="close icon" onClick={close}>
          <RiCloseLine size={18} />
        </button>
        <h3 className="mb-3">{title}</h3>
        {children}
        <div className="flex gap mt-4">
          <button type="button" className="action full" onClick={close}>
            {message.cancel}
          </button>
          <button type="button" className="primary full" onClick={confirm}>
            {message.confirm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
