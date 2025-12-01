import { cn } from '@/lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-xl border border-white/10 bg-base-surface/80 backdrop-blur-sm shadow-lg shadow-black/20', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn('px-5 pt-5', className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={cn('text-lg font-semibold text-base-text', className)}>{children}</h3>;
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={cn('text-sm text-base-muted', className)}>{children}</p>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn('px-5 pb-5', className)}>{children}</div>;
}
