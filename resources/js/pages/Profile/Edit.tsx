import { Head } from "@inertiajs/react";

import { PageProps } from "@/types";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import Informative from "@/components/base/Informative";

import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

interface EditProfileProps extends PageProps {
  status?: string;
  mustVerifyEmail: boolean;
}

const Edit = ({ auth, mustVerifyEmail, status }: EditProfileProps) => (
  <AuthenticatedLayout currentPath="profile.edit">
    <Head title="Profile" />
    <Informative className="mb-4" header="Profile Information">
      Update your account's profile information and email address.
    </Informative>
    <UpdateProfileInformationForm
      status={status}
      user={auth.user}
      mustVerifyEmail={mustVerifyEmail}
    />
    <hr className="my-4" />
    <Informative className="mb-4" header="Update Password">
      Ensure your account is using a long, random password to stay secure.
    </Informative>
    <UpdatePasswordForm />
    <hr className="my-4" />
    <Informative className="mb-4" header="Delete Account">
      Once your account is deleted, all of its resources and data will be
      permanently deleted. Before deleting your account, please download any
      data or information that you wish to retain.
    </Informative>
    <DeleteUserForm />
  </AuthenticatedLayout>
);

export default Edit;
