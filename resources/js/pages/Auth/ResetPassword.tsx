import { useEffect } from "react";
import { useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import PasswordInput from "@/components/form/PasswordInput";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

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
  const message = useMessage();

  useEffect(() => {
    return () => form.reset("password", "password_confirmation");
  }, []);

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("password.store"));
  };

  return (
    <GuestLayout>
      <SiteHead title={message.page.resetPassword} />
      <form onSubmit={submit}>
        <Input
          type="email"
          name="email"
          label={message.auth.email}
          autoComplete="username"
          inertiaForm={form}
        />
        <PasswordInput
          name="password"
          label={message.auth.password}
          autoComplete="new-password"
          inertiaForm={form}
        />
        <PasswordInput
          name="password_confirmation"
          label={message.auth.resetPassword.confirmPassword}
          autoComplete="new-password"
          inertiaForm={form}
        />
        <button className="primary full mt-2" disabled={form.processing}>
          {message.auth.resetPassword.button}
        </button>
      </form>
    </GuestLayout>
  );
};

export default ResetPassword;
