import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import useMessage from "@/hooks/useMessage";

const ForgotPassword = () => {
  const form = useForm({
    email: "",
  });
  const message = useMessage();

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("password.email"));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />
      <form onSubmit={submit}>
        <Input
          type="email"
          name="email"
          label={message.auth.email}
          inertiaForm={form}
        />
        <small className="text-muted">{message.auth.forgetPassword.info}</small>
        <button className="primary full mt-2" disabled={form.processing}>
          {message.auth.forgetPassword.sendLink}
        </button>
      </form>
    </GuestLayout>
  );
};

export default ForgotPassword;
