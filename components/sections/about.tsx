import { Badge } from '@/components/ui/badge';
import { getExperienceYears } from '@/lib/data/experience';
import type { AboutContent } from '@/lib/i18n';
import Image from 'next/image';

const coreStack = ['React', 'React Native', 'Node.js', 'NestJS', 'Express', 'PostgreSQL', 'GraphQL'];

type Props = {
  content: AboutContent;
};

export function About({ content }: Props) {
  const years = getExperienceYears();
  const intro = content.intro.replace('{years}', years.toString());
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-base-surface/40 to-transparent">
      <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-4">
          {content.eyebrow ? (
            <p className="text-sm uppercase tracking-[0.2em] text-base-muted">{content.eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold text-base-text font-display">{content.title}</h2>
          <p className="text-base text-base-muted">{intro}</p>
          <p className="text-base text-base-muted">{content.detail}</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-accent-mint/10 rounded-full" aria-hidden />
            <Image
              src="/me.png"
              alt="Jedabero"
              width={240}
              height={240}
              className="relative h-48 w-48 md:h-56 md:w-56 rounded-2xl object-cover ring-2 ring-white/10 shadow-lg shadow-black/30"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((item) => (
              <Badge key={item} variant={item === 'PostgreSQL' ? 'blue' : 'mint'}>
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
