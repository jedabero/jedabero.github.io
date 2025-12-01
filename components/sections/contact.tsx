import { buttonVariants } from '@/components/ui/button';
import type { ContactContent } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { name: 'GitHub', href: 'https://github.com/jedabero', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/jedabero', icon: Linkedin },
  { name: 'Email', href: 'mailto:hello@jedabero.me', icon: Mail }
];

type Props = {
  content: ContactContent;
};

export function Contact({ content }: Props) {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-base-muted">{content.eyebrow ?? ''}</p>
          <h2 className="text-3xl font-semibold text-base-text font-display">{content.title}</h2>
          <p className="text-base text-base-muted max-w-3xl">{content.description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'outline', size: 'md' }))}
              >
                <Icon className="h-4 w-4 mr-2" /> {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
