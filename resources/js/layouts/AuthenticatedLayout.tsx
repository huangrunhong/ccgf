import {
  RiArticleLine,
  RiCalendarEventLine,
  RiContactsBookLine,
  RiCrossLine,
  RiGroupLine,
  RiImageLine,
  RiLogoutBoxLine,
  RiTeamLine,
  RiUserLine,
} from '@remixicon/react';
import { Link, usePage } from '@inertiajs/react';
import { Bounce, ToastContainer } from 'react-toastify';
import clsx from 'clsx';

import { PageProps } from '@/types';
import ApplicationLogo from '@/components/ApplicationLogo';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import useMessage from '@/hooks/useMessage';
import Badge from '@/components/base/Badge';

interface AuthenticatedLayoutProps {
  currentPath: string;
  children: React.ReactNode;
}

interface PageLinkProps extends AuthenticatedLayoutProps {
  path: string;
}

const PageLink = ({ children, currentPath, path }: PageLinkProps) => (
  <Link href={route(path)} className={clsx('button full', currentPath === path && 'active')}>
    {children}
  </Link>
);

const AuthenticatedLayout = ({ children, currentPath }: AuthenticatedLayoutProps) => {
  const message = useMessage();
  const page = usePage<PageProps>();

  const user = page.props.auth.user;

  return (
    <div className="authenticated-layout">
      <header>
        <nav>
          <ApplicationLogo size={24} />
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
      <main>
        <aside>
          {!!user.admin && (
            <>
              <PageLink currentPath={currentPath} path="dashboard">
                <RiCrossLine size={18} />
                {message.admin.menu.church}
              </PageLink>
              <PageLink currentPath={currentPath} path="fellowships">
                <RiTeamLine size={18} />
                {message.admin.menu.fellowship}
              </PageLink>
              <PageLink currentPath={currentPath} path="events">
                <RiCalendarEventLine size={18} />
                {message.admin.menu.event}
              </PageLink>
              <PageLink currentPath={currentPath} path="posts">
                <RiArticleLine size={18} />
                {message.admin.menu.post}
              </PageLink>
              <PageLink currentPath={currentPath} path="contacts">
                <RiContactsBookLine size={18} />
                {message.admin.menu.contact}
              </PageLink>
              <PageLink currentPath={currentPath} path="users">
                <RiGroupLine size={18} />
                {message.admin.menu.user}
              </PageLink>
              <PageLink currentPath={currentPath} path="photoLibrary">
                <RiImageLine size={18} />
                {message.admin.menu.photoLibrary}
              </PageLink>
              <hr className="my-1" />
            </>
          )}
          <PageLink currentPath={currentPath} path="profile.edit">
            <RiUserLine size={18} />
            <div className="flex items-center gap">
              {user.name}
              {!!user.admin && <Badge status="success" content={message.admin.menu.admin} />}
            </div>
          </PageLink>
          <Link as="button" method="post" href={route('logout')}>
            <RiLogoutBoxLine size={18} />
            {message.admin.menu.signOut}
          </Link>
        </aside>
        <div className="panel">{children}</div>
      </main>
      <ToastContainer
        className="toast"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default AuthenticatedLayout;
