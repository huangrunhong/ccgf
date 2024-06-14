import { useState } from "react";
import { useForm } from "@inertiajs/react";

import Dialog from "@/components/base/Dialog";
import PasswordInput from "@/components/form/PasswordInput";
import Informative from "@/components/base/Informative";
import useMessage from "@/hooks/useMessage";

const DeleteUserForm = () => {
  const message = useMessage();
  const form = useForm({ password: "" });
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="primary" onClick={() => setOpen(true)}>
        {message.profile.deleteAccount.button}
      </button>
      <Dialog
        open={open}
        setOpen={setOpen}
        title={message.profile.deleteAccount.modal.header}
        onConfirm={() => form.delete(route("profile.destroy"))}
      >
        <Informative className="mb-2">
          {message.profile.deleteAccount.modal.info}
        </Informative>
        <form>
          <PasswordInput
            required
            name="password"
            label={message.profile.deleteAccount.modal.password}
            inertiaForm={form}
          />
        </form>
      </Dialog>
    </>
  );
};

export default DeleteUserForm;
