import {
  RiArticleLine,
  RiCalendarEventLine,
  RiCrossLine,
  RiImageLine,
  RiLogoutBoxLine,
  RiTeamLine,
  RiUserLine,
} from "@remixicon/react";
import { Link } from "@inertiajs/react";
import clsx from "clsx";

import ApplicationLogo from "@/components/ApplicationLogo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useMessage from "@/hooks/useMessage";
import { Bounce, ToastContainer } from "react-toastify";

interface AuthenticatedLayoutProps {
  currentPath: string;
  children: React.ReactNode;
}

const AuthenticatedLayout = ({
  children,
  currentPath,
}: AuthenticatedLayoutProps) => {
  const message = useMessage();

  const classNames = (href: string) =>
    clsx("button full", currentPath === href && "active");

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
          <Link href={route("dashboard")} className={classNames("dashboard")}>
            <RiCrossLine size={18} />
            {message.admin.menu.church}
          </Link>
          <Link
            href={route("fellowships")}
            className={classNames("fellowships")}
          >
            <RiTeamLine size={18} />
            {message.admin.menu.fellowship}
          </Link>
          <Link className={classNames("events")} href={route("events")}>
            <RiCalendarEventLine size={18} />
            {message.admin.menu.event}
          </Link>
          <Link className={classNames("posts")} href={route("posts")}>
            <RiArticleLine size={18} />
            {message.admin.menu.post}
          </Link>
          <Link
            href={route("photoLibrary")}
            className={classNames("photoLibrary")}
          >
            <RiImageLine size={18} />
            {message.admin.menu.photoLibrary}
          </Link>
          <hr className="my-1" />
          <Link
            href={route("profile.edit")}
            className={classNames("profile.edit")}
          >
            <RiUserLine size={18} />
            {message.admin.menu.profile}
          </Link>
          <Link as="button" method="post" href={route("logout")}>
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
