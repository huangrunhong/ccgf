import ApplicationLogo from '@/components/ApplicationLogo';

const GuestLayout = ({ children }: React.PropsWithChildren) => (
  <div className="guest-layout">
    <main>
      <div className="logo mb-4">
        <ApplicationLogo size={48} />
      </div>
      {children}
    </main>
  </div>
);

export default GuestLayout;
