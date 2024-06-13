import { useForm } from "@inertiajs/react";

import PasswordInput from "@/components/form/PasswordInput";

const UpdatePasswordForm = () => {
  const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const updatePassword: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.put(route("password.update"));
  };

  return (
    <form onSubmit={updatePassword}>
      <PasswordInput
        required
        label="Current Password"
        name="current_password"
        inertiaForm={form}
      />
      <PasswordInput
        required
        label="New Password"
        name="password"
        autoComplete="new-password"
        inertiaForm={form}
      />
      <PasswordInput
        required
        label="Confirm Password"
        name="password_confirmation"
        autoComplete="new-password"
        inertiaForm={form}
      />
      <button className="primary mt-2" disabled={form.processing}>
        Update password
      </button>
    </form>
  );
};

export default UpdatePasswordForm;
