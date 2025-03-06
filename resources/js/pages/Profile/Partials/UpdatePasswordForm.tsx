import { useForm } from '@inertiajs/react';

import Form from '@/components/form/Form';
import PasswordInput from '@/components/form/PasswordInput';
import useMessage from '@/hooks/useMessage';
import { toast } from 'react-toastify';

const UpdatePasswordForm = () => {
  const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });
  const message = useMessage();

  const updatePassword: React.FormEventHandler = () => {
    form.put(route('password.update'), {
      onError: () => toast.error(message.notification.error),
      onSuccess: () => toast.success(message.notification.success.updatePassword),
    });
    form.reset();
  };

  return (
    <Form form={form} onSubmit={updatePassword}>
      <PasswordInput
        required
        label={message.profile.updatePassword.currentPassword}
        name="current_password"
      />
      <PasswordInput
        required
        label={message.profile.updatePassword.newPassword}
        name="password"
        autoComplete="new-password"
      />
      <PasswordInput
        required
        label={message.profile.updatePassword.newPassword}
        name="password_confirmation"
        autoComplete="new-password"
      />
      <button className="primary mt-2" disabled={form.processing}>
        {message.profile.updatePassword.button}
      </button>
    </Form>
  );
};

export default UpdatePasswordForm;
