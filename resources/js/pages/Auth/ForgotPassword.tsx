import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";

const ForgotPassword = () => {
  const form = useForm({
    email: "",
  });

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("password.email"));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />
      <form onSubmit={submit}>
        <Input type="email" name="email" label="Email" inertiaForm={form} />
        <small className="text-muted">
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </small>
        <button className="primary full mt-2" disabled={form.processing}>
          Send Email Password Reset Link
        </button>
      </form>
    </GuestLayout>
  );
};

export default ForgotPassword;
