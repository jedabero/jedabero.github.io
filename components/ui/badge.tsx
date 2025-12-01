import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'mint' | 'blue' | 'muted';
  className?: string;
};

export function Badge({ children, variant = 'muted', className }: BadgeProps) {
  const variants = {
    mint: 'bg-accent-mint/15 text-accent-mint border border-accent-mint/30',
    blue: 'bg-accent-blue/15 text-accent-blue border border-accent-blue/30',
    muted: 'bg-white/5 text-base-text border border-white/10'
  };
  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs', variants[variant], className)}>
      {children}
    </span>
  );
}
