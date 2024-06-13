import { usePage } from "@inertiajs/react";

import de from "@/i18n/de";
import en from "@/i18n/en";
import zh from "@/i18n/zh";
import { SupportedLanguage } from "@/types";
import getLanguage from "@/shared/getLanguage";

const locales: Record<SupportedLanguage, typeof de> = { de, en, zh };

const useMessage = () => {
  return locales[getLanguage(usePage().props.locale as string)];
};

export default useMessage;
