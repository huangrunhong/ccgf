import { useForm } from "@inertiajs/react";

import Form from "@/components/form/Form";
import Dialog from "@/components/base/Dialog";
import PasswordInput from "@/components/form/PasswordInput";
import Informative from "@/components/base/Informative";
import useMessage from "@/hooks/useMessage";
import useSwitch from "@/hooks/useSwitch";

const DeleteUserForm = () => {
  const message = useMessage();
  const form = useForm({ password: "" });
  const [enabled, enable, disable] = useSwitch();

  return (
    <>
      <button className="primary" onClick={enable}>
        {message.profile.deleteAccount.button}
      </button>
      <Dialog
        visible={enabled}
        dismiss={disable}
        title={message.profile.deleteAccount.modal.header}
        onConfirm={() => form.delete(route("profile.destroy"))}
      >
        <Informative>{message.profile.deleteAccount.modal.info}</Informative>
        <Form form={form}>
          <PasswordInput
            required
            name="password"
            label={message.profile.deleteAccount.modal.password}
          />
        </Form>
      </Dialog>
    </>
  );
};

export default DeleteUserForm;
