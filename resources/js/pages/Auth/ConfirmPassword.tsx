import { useEffect, FormEventHandler } from "react";
import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import PasswordInput from "@/components/form/PasswordInput";
import Informative from "@/components/base/Informative";

const ConfirmPassword = () => {
  const form = useForm({ password: "" });

  useEffect(() => {
    return () => form.reset("password");
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("password.confirm"));
  };

  return (
    <GuestLayout>
      <Head title="Confirm Password" />
      <Informative className="mb-2">
        This is a secure area of the application. Please confirm your password
        before continuing.
      </Informative>
      <form onSubmit={submit}>
        <PasswordInput name="password" label="Password" inertiaForm={form} />
        <button className="primary full mt-1" disabled={form.processing}>
          Confirm
        </button>
      </form>
    </GuestLayout>
  );
};

export default ConfirmPassword;
