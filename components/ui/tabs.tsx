'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
};

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              active === tab.id
                ? 'border-accent-blue/50 bg-accent-blue/15 text-accent-blue'
                : 'border-white/10 text-base-muted hover:border-white/30 hover:text-base-text'
            )}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-base-muted">
        {tabs.find((tab) => tab.id === active)?.content}
      </div>
    </div>
  );
}
