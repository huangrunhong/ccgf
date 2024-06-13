import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import Checkbox from "@/components/form/Checkbox";
import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import PasswordInput from "@/components/form/PasswordInput";

const Login = () => {
  const form = useForm({
    email: "",
    password: "",
    remember: false,
  });

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
          label="Email"
          type="email"
          name="email"
          autoComplete="username"
          inertiaForm={form}
        />
        <PasswordInput label="Password" name="password" inertiaForm={form} />
        <Checkbox name="remember" label="Remember me" inertiaForm={form} />
        <div className="flex gap mt-2">
          <Link href={route("password.request")} className="button action full">
            Forgot your password?
          </Link>
          <button className="primary full" disabled={form.processing}>
            Log in
          </button>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Login;
