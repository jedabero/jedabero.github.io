import { About } from '@/components/sections/about';
import { Architecture } from '@/components/sections/architecture';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Navbar } from '@/components/sections/navbar';
import { getDictionary, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

type Params = { lang: Locale };

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default function LangPage({ params }: { params: Params }) {
  if (params.lang !== 'es' && params.lang !== 'en') {
    return notFound();
  }
  const dict = getDictionary(params.lang);
  return (
    <main className="min-h-screen">
      <Navbar content={dict.nav} />
      <div className="bg-page-gradient">
        <Hero content={dict.hero} />
        <About content={dict.about} />
        <Projects content={dict.projects} />
        <Architecture content={dict.architecture} />
        <Contact content={dict.contact} />
      </div>
    </main>
  );
}
