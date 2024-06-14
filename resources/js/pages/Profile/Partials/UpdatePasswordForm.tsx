import { useForm } from "@inertiajs/react";

import PasswordInput from "@/components/form/PasswordInput";
import useMessage from "@/hooks/useMessage";

const UpdatePasswordForm = () => {
  const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  const message = useMessage();

  const updatePassword: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.put(route("password.update"));
  };

  return (
    <form onSubmit={updatePassword}>
      <PasswordInput
        required
        label={message.profile.updatePassword.currentPassword}
        name="current_password"
        inertiaForm={form}
      />
      <PasswordInput
        required
        label={message.profile.updatePassword.newPassword}
        name="password"
        autoComplete="new-password"
        inertiaForm={form}
      />
      <PasswordInput
        required
        label={message.profile.updatePassword.newPassword}
        name="password_confirmation"
        autoComplete="new-password"
        inertiaForm={form}
      />
      <button className="primary mt-2" disabled={form.processing}>
        {message.profile.updatePassword.button}
      </button>
    </form>
  );
};

export default UpdatePasswordForm;
