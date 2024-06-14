import { Head } from "@inertiajs/react";

import { PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import Informative from "@/components/base/Informative";
import useMessage from "@/hooks/useMessage";

import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

interface EditProfileProps extends PageProps {
  status?: string;
  mustVerifyEmail: boolean;
}

const Edit = ({ auth, mustVerifyEmail, status }: EditProfileProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="profile.edit">
      <Head title="Profile" />
      <Informative
        className="mb-4"
        header={message.profile.updateProfile.header}
      >
        {message.profile.updateProfile.subheader}
      </Informative>
      <UpdateProfileInformationForm
        status={status}
        user={auth.user}
        mustVerifyEmail={mustVerifyEmail}
      />
      <hr className="my-4" />
      <Informative
        className="mb-4"
        header={message.profile.updatePassword.header}
      >
        {message.profile.updatePassword.subheader}
      </Informative>
      <UpdatePasswordForm />
      <hr className="my-4" />
      <Informative
        className="mb-4"
        header={message.profile.deleteAccount.header}
      >
        {message.profile.deleteAccount.subheader}
      </Informative>
      <DeleteUserForm />
    </AuthenticatedLayout>
  );
};

export default Edit;
