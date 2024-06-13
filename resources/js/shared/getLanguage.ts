import { SupportedLanguage } from "@/types";

const isSupportedLanguage = (lang: string | null): lang is SupportedLanguage =>
  !!lang && ["en", "de", "zh"].includes(lang);

const getLanguage = (lang: string | null): SupportedLanguage =>
  isSupportedLanguage(lang) ? lang : "zh";

export default getLanguage;
