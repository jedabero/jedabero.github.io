'use client';

import type { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const STORAGE_KEY = 'preferred-lang';

function pathForLocale(locale: Locale): string {
  return `/${locale}`;
}

type Props = {
  current: Locale;
  className?: string;
};

export function LangSwitcher({ current, className }: Props) {
  const router = useRouter();
  const [active, setActive] = useState<Locale>(current);

  useEffect(() => {
    setActive(current);
  }, [current]);

  function handleChange(locale: Locale) {
    if (locale === active) return;
    setActive(locale);
    localStorage.setItem(STORAGE_KEY, locale);
    router.push(pathForLocale(locale));
  }

  return (
    <div className={cn('flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-0.5', className)}>
      {(['es', 'en'] as Locale[]).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => handleChange(locale)}
          className={cn(
            'px-2 py-1 text-xs rounded-full transition-colors',
            active === locale
              ? 'bg-accent-mint/20 text-accent-mint'
              : 'text-base-muted hover:text-base-text'
          )}
          aria-pressed={active === locale}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
