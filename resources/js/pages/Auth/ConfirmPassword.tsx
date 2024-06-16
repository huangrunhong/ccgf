import { useEffect, FormEventHandler } from "react";
import { Head, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import PasswordInput from "@/components/form/PasswordInput";
import Informative from "@/components/base/Informative";
import useMessage from "@/hooks/useMessage";

const ConfirmPassword = () => {
  const form = useForm({ password: "" });
  const message = useMessage();

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
        {message.auth.confirmPassword.info}
      </Informative>
      <form onSubmit={submit}>
        <PasswordInput
          name="password"
          label={message.auth.password}
          inertiaForm={form}
        />
        <button className="primary full mt-1" disabled={form.processing}>
          {message.confirm}
        </button>
      </form>
    </GuestLayout>
  );
};

export default ConfirmPassword;
