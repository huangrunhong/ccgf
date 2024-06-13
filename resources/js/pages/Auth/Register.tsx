import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import PasswordInput from "@/components/form/PasswordInput";

const Register = () => {
  const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => form.reset("password", "password_confirmation");
  }, []);

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title="Register" />
      <form onSubmit={submit}>
        <Input
          autoComplete="name"
          name="name"
          label="Name"
          inertiaForm={form}
        />
        <Input
          autoComplete="username"
          type="email"
          name="email"
          label="Email"
          inertiaForm={form}
        />
        <PasswordInput
          autoComplete="new-password"
          name="password"
          label="Password"
          inertiaForm={form}
        />
        <PasswordInput
          autoComplete="new-password"
          name="password_confirmation"
          label="Confirm Password"
          inertiaForm={form}
        />
        <div className="flex gap mt-2">
          <Link href={route("login")} className="button action full">
            Already registered?
          </Link>
          <button className="primary full" disabled={form.processing}>
            Register
          </button>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Register;
