import { useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';

import Checkbox from '@/components/form/Checkbox';
import Form from '@/components/form/Form';
import GuestLayout from '@/layouts/GuestLayout';
import Input from '@/components/form/Input';
import PasswordInput from '@/components/form/PasswordInput';
import SiteHead from '@/components/base/SiteHead';
import useMessage from '@/hooks/useMessage';

const Login = () => {
  const form = useForm({
    email: '',
    password: '',
    remember: false,
  });
  const message = useMessage();

  useEffect(() => {
    return () => form.reset('password');
  }, []);

  const submit: React.FormEventHandler = () => form.post(route('login'));

  return (
    <GuestLayout>
      <SiteHead title={message.page.login} />
      <Form form={form} onSubmit={submit}>
        <Input label={message.auth.email} type="email" name="email" autoComplete="username" />
        <PasswordInput label={message.auth.password} name="password" />
        <Checkbox name="remember" label={message.auth.login.remember} />
        <div className="flex gap mt-2">
          <Link href={route('password.request')} className="button action full">
            {message.auth.login.forget}
          </Link>
          <button className="primary full" disabled={form.processing}>
            {message.auth.login.button}
          </button>
        </div>
      </Form>
    </GuestLayout>
  );
};

export default Login;
