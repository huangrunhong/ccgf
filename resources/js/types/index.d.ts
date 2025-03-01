import { Day } from "date-fns";
import { Config } from "ziggy-js";

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}

export interface PhotoMetadata {
  name: string;
  size: number;
  lastModified: number;
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
  regular: boolean;
  date: string;
  location: string;
  cover: string | null;
  speaker: string | null;
  description: string | null;
  title?: string;
  dinner?: boolean;
  baptism?: boolean;
  eucharist?: boolean;
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
  day: Day;
  frequency: "every.week" | "every.two.weeks" | "every.month";
  contact: string | null;
  location: string;
  description: string;
  cover: string | null;
  zoom: string | null;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export interface SelectOption<T extends string | number = string> {
  value: T;
  label: string;
}

export interface PageProps {
  auth: {
    user: User;
  };
  ziggy: Config & { location: string };
}
