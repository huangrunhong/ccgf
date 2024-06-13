import { Link } from "@inertiajs/react";

import ApplicationLogo from "@/components/ApplicationLogo";

const GuestLayout = ({ children }: React.PropsWithChildren) => (
  <div className="guest-layout">
    <main>
      <Link className="logo-link mb-4" href="/">
        <ApplicationLogo />
      </Link>
      {children}
    </main>
  </div>
);

export default GuestLayout;
