import { useEffect } from "react";
import { Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import PasswordInput from "@/components/form/PasswordInput";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const Register = () => {
  const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const message = useMessage();

  useEffect(() => {
    return () => form.reset("password", "password_confirmation");
  }, []);

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("register"));
  };

  return (
    <GuestLayout>
      <SiteHead title={message.page.register} />
      <form onSubmit={submit}>
        <Input
          autoComplete="name"
          name="name"
          label={message.auth.register.name}
          inertiaForm={form}
        />
        <Input
          autoComplete="username"
          type="email"
          name="email"
          label={message.auth.email}
          inertiaForm={form}
        />
        <PasswordInput
          autoComplete="new-password"
          name="password"
          label={message.auth.password}
          inertiaForm={form}
        />
        <PasswordInput
          autoComplete="new-password"
          name="password_confirmation"
          label={message.auth.register.confirmPassword}
          inertiaForm={form}
        />
        <div className="flex gap mt-2">
          <Link href={route("login")} className="button action full">
            {message.auth.register.alreadyRegistered}
          </Link>
          <button className="primary full" disabled={form.processing}>
            {message.auth.register.button}
          </button>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Register;
