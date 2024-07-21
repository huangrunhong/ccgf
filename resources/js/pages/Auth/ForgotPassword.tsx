import { useForm } from "@inertiajs/react";

import Form from "@/components/form/Form";
import GuestLayout from "@/layouts/GuestLayout";
import Input from "@/components/form/Input";
import SiteHead from "@/components/base/SiteHead";
import useMessage from "@/hooks/useMessage";

const ForgotPassword = () => {
  const form = useForm({
    email: "",
  });
  const message = useMessage();

  const submit: React.FormEventHandler = () =>
    form.post(route("password.email"));

  return (
    <GuestLayout>
      <SiteHead title={message.page.forgetPassword} />
      <Form form={form} onSubmit={submit}>
        <Input type="email" name="email" label={message.auth.email} />
        <small className="muted">{message.auth.forgetPassword.info}</small>
        <button className="primary full mt-2" disabled={form.processing}>
          {message.auth.forgetPassword.sendLink}
        </button>
      </Form>
    </GuestLayout>
  );
};

export default ForgotPassword;
