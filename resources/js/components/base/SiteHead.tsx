import { Head } from "@inertiajs/react";

interface BaseHeadProps {
  title: string;
  children?: React.ReactNode;
}

const SiteHead = ({ title, children }: BaseHeadProps) => {
  <Head>
    <title>{title}</title>
    <link rel="alternate" href="https://ccc-frankfurt.de/en" hrefLang="en" />
    <link rel="alternate" href="https://ccc-frankfurt.de/de" hrefLang="de" />
    {children}
  </Head>;
};

export default SiteHead;
