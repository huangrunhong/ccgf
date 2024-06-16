import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Informative from "@/components/base/Informative";
import useMessage from "@/hooks/useMessage";

const VerifyEmail = ({ status }: { status?: string }) => {
  const form = useForm({});
  const message = useMessage();

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("verification.send"));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />
      <Informative className="mb-4">
        {message.auth.verifyEmail.info}
      </Informative>
      {status === "verification-link-sent" && (
        <Informative className="mb-4">
          {message.auth.verifyEmail.verificationLink}
        </Informative>
      )}
      <form onSubmit={submit}>
        <div className="flex gap">
          <button className="primary full" disabled={form.processing}>
            {message.auth.verifyEmail.resendEmail}
          </button>
          <Link
            as="button"
            method="post"
            className="action full"
            href={route("logout")}
          >
            {message.auth.verifyEmail.logout}
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
};

export default VerifyEmail;
