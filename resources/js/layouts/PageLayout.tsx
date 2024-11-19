import { useState } from "react";
import { Link } from "@inertiajs/react";
import {
  RiCloseLargeLine,
  RiHandHeartLine,
  RiInstagramLine,
  RiMenuLine,
  RiYoutubeLine,
} from "@remixicon/react";
import clsx from "clsx";

import ApplicationLogo from "@/components/ApplicationLogo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useMessage from "@/hooks/useMessage";

const INSTAGRAM_LINK = "https://www.instagram.com/";

const YOUTUBE_LINK =
  "https://www.youtube.com/channel/UCdRg2vpU8CrsPqjXTySb_1A/streams";

interface PageLinksProps {
  className?: string;
  message: ReturnType<typeof useMessage>;
}

const PageLinks = ({ className, message }: PageLinksProps) => (
  <div className={className}>
    <Link href={route("locale.chinese")}>{message.header.events}</Link>
    <Link href={route("locale.chinese")}>{message.header.fellowships}</Link>
    <Link href={route("locale.chinese")}>{message.header.library}</Link>
    <Link className="mr-6" href={route("posts.get", { slug: "about" })}>
      {message.header.about}
    </Link>
    <Link className="flex items-center gap" href={route("locale.chinese")}>
      <RiHandHeartLine size={18} />
      {message.header.donate}
    </Link>
  </div>
);

interface PageLayoutProps {
  className?: string;
  children: React.ReactNode;
}

const PageLayout = ({ className, children }: PageLayoutProps) => {
  const message = useMessage();
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => setOpen(!open);

  return (
    <div className="page-layout">
      <header>
        <nav className="flex items-center gap-1 py-3">
          <ApplicationLogo />
          <div className="flex-1">
            <span className="address max-lg-hidden">
              Kirchhainer Strasse 2<br />
              60433 Frankfurt am Main
            </span>
          </div>
          <PageLinks
            message={message}
            className="flex items-center gap-2 max-lg-hidden"
          />
          <LanguageSwitcher />
          <div
            onClick={toggleMobileMenu}
            className="burger-menu min-lg-hidden"
            tabIndex={0}
          >
            {open ? <RiCloseLargeLine size={22} /> : <RiMenuLine size={24} />}
          </div>
          <div className={clsx("mobile-menu min-lg-hidden", open && "open")}>
            <PageLinks className="flex-column p-3 gap-2" message={message} />
          </div>
        </nav>
      </header>
      <main className={className}>{children}</main>
      <footer>
        <section className="mb-8">
          <hr className="mt-4 mb-8" />
          <ApplicationLogo />
          <div className="flex flex-wrap gap-2 items-end justify-between mt-3">
            <div className="flex-column gap-1">
              <div className="flex gap-1">
                <Link href={route("locale.chinese")}>
                  {message.header.imprint}
                </Link>
                <span>•</span>
                <Link href={route("locale.chinese")}>
                  {message.header.terms}
                </Link>
                <span>•</span>
                <Link href={route("login")}>{message.auth.login.button}</Link>
              </div>
              <span>@2024 Chinesische Christliche Gemeinde Frankfurt e.V.</span>
            </div>
            <div className="flex items-center gap-2">
              <a href={YOUTUBE_LINK} className="flex items-center gap">
                <RiYoutubeLine size={24} />
                YouTube
              </a>
              <a href={INSTAGRAM_LINK} className="flex items-center gap">
                <RiInstagramLine size={22} />
                Instagramm
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default PageLayout;
