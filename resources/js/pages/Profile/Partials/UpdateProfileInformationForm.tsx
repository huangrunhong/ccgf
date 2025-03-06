import { Link, useForm } from '@inertiajs/react';

import { User } from '@/types';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import useMessage from '@/hooks/useMessage';
import { toast } from 'react-toastify';

interface UpdateProfileInformationProps {
  user: User;
  status?: string;
  mustVerifyEmail: boolean;
}

const UpdateProfileInformation = ({
  user,
  status,
  mustVerifyEmail,
}: UpdateProfileInformationProps) => {
  const form = useForm({
    name: user.name,
    email: user.email,
  });
  const message = useMessage();

  const submit = () =>
    form.patch(route('profile.update'), {
      onError: () => toast.error(message.notification.error),
      onSuccess: () => toast.success(message.notification.success.updateProfile),
    });

  return (
    <Form form={form} onSubmit={submit}>
      <Input required label={message.profile.updateProfile.name} name="name" autoComplete="name" />
      <Input
        required
        label={message.profile.updateProfile.email}
        name="email"
        autoComplete="email"
      />
      {mustVerifyEmail && !user.email_verified_at && (
        <div className="flex-column gap">
          <small className="muted">{message.profile.updateProfile.verifyEmail.info}</small>
          <Link as="button" method="post" className="solid" href={route('verification.send')}>
            {message.profile.updateProfile.verifyEmail.resendVerificationEmail}
          </Link>
          {status === 'verification-link-sent' && (
            <small className="muted">
              {message.profile.updateProfile.verifyEmail.newVerificationLink}
            </small>
          )}
        </div>
      )}
      <button className="primary mt-2" disabled={form.processing}>
        {message.profile.updateProfile.button}
      </button>
    </Form>
  );
};

export default UpdateProfileInformation;
