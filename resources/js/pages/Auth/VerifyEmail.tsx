import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/layouts/GuestLayout";
import Informative from "@/components/base/Informative";

const VerifyEmail = ({ status }: { status?: string }) => {
  const form = useForm({});

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.post(route("verification.send"));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />
      <Informative className="mb-4">
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn't receive the email, we will gladly send you another.
      </Informative>
      {status === "verification-link-sent" && (
        <Informative className="mb-4">
          A new verification link has been sent to the email address you
          provided during registration.
        </Informative>
      )}
      <form onSubmit={submit}>
        <div className="flex gap">
          <button className="primary full" disabled={form.processing}>
            Resend Verification Email
          </button>
          <Link
            as="button"
            method="post"
            className="action full"
            href={route("logout")}
          >
            Log Out
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
};

export default VerifyEmail;
