import { RiCloseLine } from '@remixicon/react';
import clsx from 'clsx';

import noop from '@/lib/noop';
import useMessage from '@/hooks/useMessage';

interface DialogProps {
  children?: React.ReactNode;
  className?: string;
  confirmButton?: React.ReactNode;
  fullscreen?: boolean;
  onConfirm?: () => void;
  dismiss: (open: false) => void;
  title: string;
  visible: boolean | string;
}

const Dialog = ({
  title,
  children,
  className,
  confirmButton,
  fullscreen,
  dismiss,
  visible,
  onConfirm = noop,
}: DialogProps) => {
  const message = useMessage();

  const close = () => dismiss(false);
  const confirm = () => (dismiss(false), onConfirm());

  return (
    <div className={clsx('dialog', className, { visible })}>
      <div className={clsx('dialog-body', { fullscreen })}>
        <button type="button" className="close icon" onClick={close}>
          <RiCloseLine size={18} />
        </button>
        <h3>{title}</h3>
        {children}
        <div className="flex justify-end gap mt-1">
          <button type="button" className="action" onClick={close}>
            {message.cancel}
          </button>
          {confirmButton || (
            <button type="button" className="primary" onClick={confirm}>
              {message.confirm}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
