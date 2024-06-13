import { Link, useForm } from "@inertiajs/react";

import { User } from "@/types";
import Input from "@/components/form/Input";

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

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.patch(route("profile.update"));
  };

  return (
    <form onSubmit={submit}>
      <Input
        required
        label="Name"
        name="name"
        autoComplete="name"
        inertiaForm={form}
      />
      <Input
        required
        label="Email"
        name="email"
        autoComplete="email"
        inertiaForm={form}
      />
      {mustVerifyEmail && !user.email_verified_at && (
        <div className="flex-column gap">
          <small className="text-muted">
            Your email address is unverified.
          </small>
          <Link
            as="button"
            method="post"
            className="solid"
            href={route("verification.send")}
          >
            Click here to re-send the verification email.
          </Link>
          {status === "verification-link-sent" && (
            <small className="text-muted">
              A new verification link has been sent to your email address.
            </small>
          )}
        </div>
      )}
      <button className="primary mt-2" disabled={form.processing}>
        Update profile
      </button>
    </form>
  );
};

export default UpdateProfileInformation;
