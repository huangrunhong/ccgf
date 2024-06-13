import { Link, usePage } from "@inertiajs/react";
import { RiGlobeLine } from "@remixicon/react";

import { SupportedLanguage } from "@/types";
import getLanguage from "@/shared/getLanguage";
import Dropdown from "@/components/base/Dropdown";

const languages: Record<SupportedLanguage, string> = {
  en: "English",
  de: "Deutsch",
  zh: "中文",
} as const;

const LanguageSwitcher = () => (
  <Dropdown>
    <button>
      <RiGlobeLine size={18} />
      {languages[getLanguage(usePage().props.locale as string)]}
    </button>
    <Dropdown.Menu>
      <Link
        as="button"
        method="post"
        className="button"
        href={route("locale.update", { locale: "zh" })}
      >
        {languages.zh}
      </Link>
      <Link
        as="button"
        method="post"
        className="button"
        href={route("locale.update", { locale: "de" })}
      >
        {languages.de}
      </Link>
      <Link
        as="button"
        method="post"
        className="button"
        href={route("locale.update", { locale: "en" })}
      >
        {languages.en}
      </Link>
    </Dropdown.Menu>
  </Dropdown>
);

export default LanguageSwitcher;
