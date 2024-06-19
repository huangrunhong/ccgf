import {
  RiCalendarEventLine,
  RiCrossLine,
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
          <ApplicationLogo />
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
            {message.dashboard.menu.church}
          </Link>
          <Link
            href={route("fellowships")}
            className={classNames("fellowships")}
          >
            <RiTeamLine size={18} />
            {message.dashboard.menu.fellowship}
          </Link>
          <Link className={classNames("events")} href={route("events")}>
            <RiCalendarEventLine size={18} />
            {message.dashboard.menu.event}
          </Link>
          <hr />
          <Link
            href={route("profile.edit")}
            className={classNames("profile.edit")}
          >
            <RiUserLine size={18} />
            {message.dashboard.menu.profile}
          </Link>
          <Link as="button" method="post" href={route("logout")}>
            <RiLogoutBoxLine size={18} />
            {message.dashboard.menu.signOut}
          </Link>
        </aside>
        <div className="panel">{children}</div>
      </main>
    </div>
  );
};

export default AuthenticatedLayout;
