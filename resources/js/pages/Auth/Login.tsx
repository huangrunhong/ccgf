import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import Checkbox from "@/components/form/Checkbox";
import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import PasswordInput from "@/components/form/PasswordInput";
import useMessage from "@/hooks/useMessage";

const Login = () => {
  const form = useForm({
    email: "",
    password: "",
    remember: false,
  });
  const message = useMessage();

  useEffect(() => {
    return () => form.reset("password");
  }, []);

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("login"));
  };

  return (
    <GuestLayout>
      <Head title="Log in" />
      <form onSubmit={submit}>
        <Input
          label={message.auth.email}
          type="email"
          name="email"
          autoComplete="username"
          inertiaForm={form}
        />
        <PasswordInput
          label={message.auth.password}
          name="password"
          inertiaForm={form}
        />
        <Checkbox
          name="remember"
          label={message.auth.login.remember}
          inertiaForm={form}
        />
        <div className="flex gap mt-2">
          <Link href={route("password.request")} className="button action full">
            {message.auth.login.forget}
          </Link>
          <button className="primary full" disabled={form.processing}>
            {message.auth.login.button}
          </button>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Login;
