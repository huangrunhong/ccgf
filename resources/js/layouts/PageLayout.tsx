import { Link } from "@inertiajs/react";
import { RiHandHeartLine, RiHeart3Fill } from "@remixicon/react";

import ApplicationLogo from "@/components/ApplicationLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useMessage from "@/hooks/useMessage";

interface PageLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const PageLayout = ({ className, children }: PageLayoutProps) => {
  const message = useMessage();

  return (
    <>
      <header>
        <nav className="flex py-3">
          <div className="flex flex-1 items-center gap-1">
            <ApplicationLogo />
            <span style={{ lineHeight: 1.25 }}>
              Kirchhainer Strasse 2<br />
              60433 Frankfurt am Main
            </span>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <Link href={route("locale.chinese")}>{message.header.events}</Link>
            <Link href={route("locale.chinese")}>
              {message.header.fellowships}
            </Link>
            <Link href={route("locale.chinese")}>{message.header.library}</Link>
            <Link href={route("locale.chinese")}>{message.header.about}</Link>
            <div className="flex-1" />
            <Link
              className="flex items-center gap"
              href={route("locale.chinese")}
            >
              <RiHandHeartLine size={18} />
              {message.header.donate}
            </Link>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>
      <main className={className}>{children}</main>
      <footer>
        <section className="mb-8">
          <hr className="mt-4 mb-8" />
          <div className="flex items-center gap-2">
            <ApplicationLogo />
            <Link className="ml-6" href={route("locale.chinese")}>
              {message.header.events}
            </Link>
            <Link href={route("locale.chinese")}>
              {message.header.fellowships}
            </Link>
            <Link href={route("locale.chinese")}>{message.header.library}</Link>
            <Link href={route("locale.chinese")}>{message.header.about}</Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default PageLayout;
