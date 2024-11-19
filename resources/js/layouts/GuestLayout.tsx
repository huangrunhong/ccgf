import ApplicationLogo from "@/components/ApplicationLogo";

const GuestLayout = ({ children }: React.PropsWithChildren) => (
  <div className="guest-layout">
    <main>
      <ApplicationLogo className="logo-link mb-4" />
      {children}
    </main>
  </div>
);

export default GuestLayout;
