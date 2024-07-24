import de from "@/i18n/de";
import en from "@/i18n/en";
import zh from "@/i18n/zh";
import { SupportedLanguage } from "@/types";
import useLanguage from "@/hooks/useLanguage";

const locales: Record<SupportedLanguage, typeof de> = { de, en, zh };

const useMessage = () => {
  const lang = useLanguage();

  return locales[lang];
};

export default useMessage;
