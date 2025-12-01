import { About } from '@/components/sections/about';
import { Architecture } from '@/components/sections/architecture';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Navbar } from '@/components/sections/navbar';
import { getDictionary } from '@/lib/i18n';
import { LangRedirect } from '@/components/lang-redirect';

export default function HomePage() {
  const dict = getDictionary('es');
  return (
    <main className="min-h-screen">
      <LangRedirect currentLocale="es" />
      <Navbar content={dict.nav} currentLocale="es" />
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
