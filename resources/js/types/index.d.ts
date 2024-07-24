import { Config } from "ziggy-js";

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}

export interface InertiaForm {
  setData: (name: string, value: any) => void;
  data: Record<string, any>;
  errors?: Record<string, string>;
}

export type PostStatus = "published" | "archived" | "draft";

export type ResponseStatus = "success" | "warning" | "error";

export type SupportedLanguage = "en" | "de" | "zh";

export interface Worship {
  id: number;
  title: string;
  speaker: string;
  date: string;
  dinner: boolean;
  baptism: boolean;
  eucharist: boolean;
}

export interface Event {
  id: number;
  title: string;
  description?: string;
  date: string;
  location: string;
  cover: string | null;
}

export interface Fellowship {
  id: number;
  status: PostStatus;
  name: string;
  hour: string;
  day: number;
  frequency: number;
  contact: string | null;
  location: string;
  description: string;
  cover: string | null;
  zoom: string | null;
}

export interface SelectOption<T extends string | number = string> {
  value: T;
  label: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
  ziggy: Config & { location: string };
};
