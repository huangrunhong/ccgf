import { useEffect, FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";

import Form from "@/components/form/Form";
import GuestLayout from "@/layouts/GuestLayout";
import PasswordInput from "@/components/form/PasswordInput";
import Informative from "@/components/base/Informative";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const ConfirmPassword = () => {
  const form = useForm({ password: "" });
  const message = useMessage();

  useEffect(() => {
    return () => form.reset("password");
  }, []);

  const submit: FormEventHandler = () => form.post(route("password.confirm"));

  return (
    <GuestLayout>
      <SiteHead title={message.page.confirmPassword} />
      <Informative className="mb-2">
        {message.auth.confirmPassword.info}
      </Informative>
      <Form form={form} onSubmit={submit}>
        <PasswordInput name="password" label={message.auth.password} />
        <button className="primary full mt-1" disabled={form.processing}>
          {message.confirm}
        </button>
      </Form>
    </GuestLayout>
  );
};

export default ConfirmPassword;
