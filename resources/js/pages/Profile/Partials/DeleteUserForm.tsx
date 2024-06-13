import { useState } from "react";
import { useForm } from "@inertiajs/react";

import Dialog from "@/components/base/Dialog";
import PasswordInput from "@/components/form/PasswordInput";
import Informative from "@/components/base/Informative";

const DeleteUserForm = () => {
  const form = useForm({ password: "" });
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="primary" onClick={() => setOpen(true)}>
        Delete account
      </button>
      <Dialog
        open={open}
        setOpen={setOpen}
        title="Are you sure you want to delete your account?"
        onConfirm={() => form.delete(route("profile.destroy"))}
      >
        <Informative className="mb-2">
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Please enter your password to confirm you would
          like to permanently delete your account.
        </Informative>
        <form>
          <PasswordInput
            required
            name="password"
            label="Password"
            inertiaForm={form}
          />
        </form>
      </Dialog>
    </>
  );
};

export default DeleteUserForm;
