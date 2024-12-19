import { Head } from "@inertiajs/react";

interface BaseHeadProps {
  title: string;
  children?: React.ReactNode;
}

const SiteHead = ({ title, children }: BaseHeadProps) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico?" />
    <link rel="alternate" href="https://ccc-frankfurt.de/en" hrefLang="en" />
    <link rel="alternate" href="https://ccc-frankfurt.de/de" hrefLang="de" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
    />
    {children}
  </Head>
);

export default SiteHead;
