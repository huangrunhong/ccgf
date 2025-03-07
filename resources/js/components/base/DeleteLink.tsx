import { Link } from '@inertiajs/react';
import { RiDeleteBinLine } from '@remixicon/react';

import useSwitch from '@/hooks/useSwitch';
import useMessage from '@/hooks/useMessage';
import Dialog from '@/components/base/Dialog';

interface DeleteLinkProps {
  href: string;
}

const DeleteLink = ({ href }: DeleteLinkProps) => {
  const message = useMessage();
  const [enabled, enable, disable] = useSwitch();

  return (
    <>
      <button className="icon" onClick={enable}>
        <RiDeleteBinLine size={18} />
      </button>
      <Dialog
        visible={enabled}
        dismiss={disable}
        title={message.delete.header}
        confirmButton={
          <Link as="button" method="delete" className="primary" href={href}>
            {message.delete.button}
          </Link>
        }
      />
    </>
  );
};

export default DeleteLink;
