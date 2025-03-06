import { Link, useForm } from '@inertiajs/react';

import Form from '@/components/form/Form';
import GuestLayout from '@/layouts/GuestLayout';
import Informative from '@/components/base/Informative';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

const VerifyEmail = ({ status }: { status?: string }) => {
  const form = useForm({});
  const message = useMessage();

  const submit: React.FormEventHandler = () => form.post(route('verification.send'));

  return (
    <GuestLayout>
      <SiteHead title={message.page.emailVerification} />
      <Informative className="mb-4">{message.auth.verifyEmail.info}</Informative>
      {status === 'verification-link-sent' && (
        <Informative className="mb-4">{message.auth.verifyEmail.verificationLink}</Informative>
      )}
      <Form form={form} onSubmit={submit}>
        <div className="flex gap">
          <button className="primary full" disabled={form.processing}>
            {message.auth.verifyEmail.resendEmail}
          </button>
          <Link as="button" method="post" className="action full" href={route('logout')}>
            {message.auth.verifyEmail.logout}
          </Link>
        </div>
      </Form>
    </GuestLayout>
  );
};

export default VerifyEmail;
