import { Link } from '@inertiajs/react';
import { RiQuestionLine } from '@remixicon/react';
import clsx from 'clsx';

import { PageProps, User } from '@/types';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import SiteHead from '@/components/base/SiteHead';
import DeleteLink from '@/components/base/DeleteLink';
import useMessage from '@/hooks/useMessage';

interface UsersProps extends PageProps {
  users: User[];
}

const Users = ({ auth, users }: UsersProps) => {
  const message = useMessage();

  return (
    <AuthenticatedLayout currentPath="users">
      <SiteHead title={message.page.users} />
      <div className="flex items-center justify-between mb-2">
        <span className="ml-1">{users.length} Items</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>{message.admin.users.name}</th>
            <th>{message.admin.users.email}</th>
            <th>{message.admin.users.admin}</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, admin }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td className="flex gap-1 items-center justify-between">
                <div className="flex gap-1 items-center">
                  <Link
                    method="post"
                    disabled={!!admin && auth.user.id === id}
                    className={clsx('switch', { checked: admin })}
                    href={route(admin ? 'users.member' : 'users.admin', { id })}
                  />
                  {!!admin && auth.user.id === id && (
                    <div className="flex" data-tooltip={message.admin.users.adminToggleDisabled}>
                      <RiQuestionLine size={18} />
                    </div>
                  )}
                </div>
                <DeleteLink href={route('users.destroy', { id })} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthenticatedLayout>
  );
};

export default Users;
