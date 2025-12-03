import { About } from "@/components/sections/about";
import { Architecture } from "@/components/sections/architecture";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Navbar } from "@/components/sections/navbar";
import { getDictionary, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { LangRedirect } from "@/components/lang-redirect";

type Params = { lang: Locale };

export async function generateStaticParams() {
  // Declaramos async para alinear con la firma nueva de Next 15 (params puede ser Promise).
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function LangPage({
  params,
}: {
  params: Promise<Params>;
}) {
  // En Next 15 los params llegan como Promise; los esperamos para mantener tipado estricto.
  const { lang } = await params;

  if (lang !== "es" && lang !== "en") {
    return notFound();
  }
  const dict = getDictionary(lang);
  return (
    <main className="min-h-screen">
      <LangRedirect currentLocale={lang} />
      <Navbar content={dict.nav} currentLocale={lang} />
      <div className="bg-page-gradient bg-grid">
        <Hero content={dict.hero} />
        <About content={dict.about} />
        <Projects content={dict.projects} locale={lang} />
        <Architecture content={dict.architecture} />
        <Contact content={dict.contact} />
      </div>
    </main>
  );
}
