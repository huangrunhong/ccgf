import { Link } from "@inertiajs/react";

const ApplicationLogo = ({ className = "" }) => (
  <Link className={className} href={route("locale.chinese")}>
    <div className="logo">
      <strong>CC</strong>
      <strong>GF</strong>
    </div>
  </Link>
);

export default ApplicationLogo;
