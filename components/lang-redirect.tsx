'use client';

import { normalizeLocale, type Locale } from '@/lib/i18n';
import { useEffect } from 'react';

const STORAGE_KEY = 'preferred-lang';

function pathForLocale(locale: Locale): string {
  return locale === 'es' ? '/' : `/${locale}`;
}

export function LangRedirect({ currentLocale }: { currentLocale: Locale }) {
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') {
      if (stored !== currentLocale) {
        window.location.assign(pathForLocale(stored));
      }
      return;
    }

    const navigatorLang =
      typeof navigator !== 'undefined' ? navigator.language || navigator.languages?.[0] : undefined;
    const detected = normalizeLocale(navigatorLang);

    if (detected !== currentLocale) {
      localStorage.setItem(STORAGE_KEY, detected);
      window.location.assign(pathForLocale(detected));
    }
  }, [currentLocale]);

  return null;
}
