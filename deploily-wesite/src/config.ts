import { Pathnames } from "next-intl/navigation";

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',

  '/login': {
    en: '/login',
    fr: '/se-connecter',
  }

} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;