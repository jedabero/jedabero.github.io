import { Button } from '@/components/ui/button';
import type { SectionContent } from '@/lib/i18n';
import Link from 'next/link';

type Props = {
  content: SectionContent;
};

export function Hero({ content }: Props) {
  return (
    <section id="hero" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6">
        {content.eyebrow ? (
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-base-muted">
            <span className="h-2 w-2 rounded-full bg-accent-mint" aria-hidden />
            {content.eyebrow}
          </div>
        ) : null}
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-base-text">{content.title}</h1>
        {content.description ? <p className="text-lg text-base-muted max-w-3xl">{content.description}</p> : null}
        <div className="flex flex-wrap gap-4">
          <Link href="#contact" className="inline-flex">
            <Button size="lg">{content.ctaPrimary}</Button>
          </Link>
          {content.ctaSecondary ? (
            <Link href="/cv.pdf" className="inline-flex">
              <Button variant="outline" size="lg">
                {content.ctaSecondary}
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
