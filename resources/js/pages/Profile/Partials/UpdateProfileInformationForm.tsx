import { Link, useForm } from "@inertiajs/react";

import { User } from "@/types";
import Input from "@/components/form/Input";
import useMessage from "@/hooks/useMessage";

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

  const submit: React.FormEventHandler = (e) => {
    e.preventDefault();
    form.patch(route("profile.update"));
  };

  return (
    <form onSubmit={submit}>
      <Input
        required
        label={message.profile.updateProfile.name}
        name="name"
        autoComplete="name"
        inertiaForm={form}
      />
      <Input
        required
        label={message.profile.updateProfile.email}
        name="email"
        autoComplete="email"
        inertiaForm={form}
      />
      {mustVerifyEmail && !user.email_verified_at && (
        <div className="flex-column gap">
          <small className="muted">
            {message.profile.updateProfile.verifyEmail.info}
          </small>
          <Link
            as="button"
            method="post"
            className="solid"
            href={route("verification.send")}
          >
            {message.profile.updateProfile.verifyEmail.resendVerificationEmail}
          </Link>
          {status === "verification-link-sent" && (
            <small className="muted">
              {message.profile.updateProfile.verifyEmail.newVerificationLink}
            </small>
          )}
        </div>
      )}
      <button className="primary mt-2" disabled={form.processing}>
        {message.profile.updateProfile.button}
      </button>
    </form>
  );
};

export default UpdateProfileInformation;
