import { usePage } from "@inertiajs/react";

import { SupportedLanguage } from "@/types";

const isSupportedLanguage = (lang: string | null): lang is SupportedLanguage =>
  !!lang && ["en", "de", "zh"].includes(lang);

const getLanguage = (lang: string | null): SupportedLanguage =>
  isSupportedLanguage(lang) ? lang : "zh";

const useLanguage = () => {
  const page = usePage();

  return getLanguage(page.props.locale as string);
};

export default useLanguage;
