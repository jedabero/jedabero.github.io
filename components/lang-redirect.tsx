"use client";

import { normalizeLocale, type Locale } from "@/lib/i18n";
import { useEffect } from "react";

const STORAGE_KEY = "preferred-lang";

function pathForLocale(locale: Locale, targetPath = ""): string {
  const suffix = targetPath
    ? targetPath.startsWith("/")
      ? targetPath
      : `/${targetPath}`
    : "";
  const base = `/${locale}`;
  if (suffix === "/" || suffix === "") return base;
  return `${base}${suffix}`;
}

export function LangRedirect({
  currentLocale,
  targetPath = "",
  force = false,
}: {
  currentLocale: Locale;
  targetPath?: string;
  force?: boolean;
}) {
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    const navigatorLang =
      typeof navigator !== "undefined"
        ? navigator.language || navigator.languages?.[0]
        : undefined;
    const detected = normalizeLocale(navigatorLang);

    const preferred =
      stored === "en" || stored === "es"
        ? (stored as Locale)
        : detected ?? currentLocale;

    if (force || preferred !== currentLocale) {
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, preferred);
      }
      window.location.assign(pathForLocale(preferred, targetPath));
    }
  }, [currentLocale, force, targetPath]);

  return null;
}
