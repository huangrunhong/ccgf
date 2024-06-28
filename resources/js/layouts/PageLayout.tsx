import { Link } from "@inertiajs/react";
import { RiHandHeartLine } from "@remixicon/react";

import ApplicationLogo from "@/components/ApplicationLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useMessage from "@/hooks/useMessage";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const message = useMessage();

  return (
    <div className="page-layout">
      <header>
        <div className="flex flex-1 items-center gap-2">
          <ApplicationLogo />
          <span className="address">
            Kirchhainer Strasse 2<br />
            60433 Frankfurt am Main
          </span>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <Link href={route("locale.chinese")}>{message.header.library}</Link>
          <Link href={route("locale.chinese")}>{message.header.about}</Link>
          <Link
            className="flex items-center gap"
            href={route("locale.chinese")}
          >
            <RiHandHeartLine size={18} />
            {message.header.donate}
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default PageLayout;
