import { Link } from "@inertiajs/react";
import { RiHandHeartLine, RiLiveLine } from "@remixicon/react";

import ApplicationLogo from "@/components/ApplicationLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useMessage from "@/hooks/useMessage";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const message = useMessage();

  return (
    <>
      <header>
        <nav className="flex items-center gap-2 p-2">
          <ApplicationLogo />
          <span className="flex-1">
            Kirchhainer Strasse 2<br />
            60433 Frankfurt am Main
          </span>
          <Link href={route("locale.chinese")}>{message.header.library}</Link>
          <Link href={route("locale.chinese")}>{message.header.about}</Link>
          <div className="flex gap-1">
            <LanguageSwitcher />
            <button className="solid">
              {message.header.liveStream}
              <RiLiveLine size={18} />
            </button>
            <button className="solid">
              {message.header.donate}
              <RiHandHeartLine size={18} />
            </button>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default PageLayout;
