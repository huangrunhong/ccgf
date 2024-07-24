import { enUS, de, zhCN } from "date-fns/locale";

import useLanguage from "./useLanguage";

const locales = { en: enUS, de, zh: zhCN };

const useDateLocale = () => {
  const lang = useLanguage();

  return locales[lang];
};

export default useDateLocale;
