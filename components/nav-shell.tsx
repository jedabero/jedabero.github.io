"use client";

import { Navbar } from "@/components/sections/navbar";
import { bilingualContent, type Locale, type NavContent } from "@/lib/i18n";
import { usePathname } from "next/navigation";

function isLangPath(path: string) {
  return /^\/(es|en)(\/|$)/.test(path);
}

function localeFromPath(path: string): Locale {
  return path.startsWith("/en") ? "en" : "es";
}

function pick<T>(value: any, locale: Locale): T {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") return value as T;
  if (value.es !== undefined && value.en !== undefined) {
    return (value as { es: T; en: T })[locale];
  }
  if (Array.isArray(value)) return value.map((v) => pick(v, locale)) as T;
  if (typeof value === "object") {
    const out: any = {};
    for (const key of Object.keys(value)) out[key] = pick((value as any)[key], locale);
    return out as T;
  }
  return value as T;
}

function buildNav(pathname: string): { content: NavContent; locale: Locale } {
  const locale = localeFromPath(pathname);
  const baseNav = pick<NavContent>(bilingualContent.nav, locale);

  if (isLangPath(pathname)) {
    const base = `/${locale}`;
    return {
      locale,
      content: {
        ...baseNav,
        links: baseNav.links.map((link) =>
          link.href.startsWith("#")
            ? { ...link, href: `${base}${link.href}` }
            : link
        )
      }
    };
  }

  // fallback for non-lang paths: adjust home link to /es
  return {
    locale,
    content: {
      ...baseNav,
      links: baseNav.links.map((link) => {
        if (link.href.startsWith("#")) return { ...link, href: "/es" };
        return link;
      })
    }
  };
}

export function NavShell() {
  const pathname = usePathname() || "/";
  const { content, locale } = buildNav(pathname);
  return <Navbar content={content} currentLocale={locale} />;
}
