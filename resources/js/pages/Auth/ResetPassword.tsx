import { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import PasswordInput from "@/components/form/PasswordInput";

interface ResetPasswordProps {
  token: string;
  email: string;
}

const ResetPassword = ({ token, email }: ResetPasswordProps) => {
  const form = useForm({
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => form.reset("password", "password_confirmation");
  }, []);

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("password.store"));
  };

  return (
    <GuestLayout>
      <Head title="Reset Password" />
      <form onSubmit={submit}>
        <Input
          type="email"
          name="email"
          label="Email"
          autoComplete="username"
          inertiaForm={form}
        />
        <PasswordInput
          name="password"
          label="Password"
          autoComplete="new-password"
          inertiaForm={form}
        />
        <PasswordInput
          name="password_confirmation"
          label="Confirm Password"
          autoComplete="new-password"
          inertiaForm={form}
        />
        <button className="primary full mt-2" disabled={form.processing}>
          Reset Password
        </button>
      </form>
    </GuestLayout>
  );
};

export default ResetPassword;
