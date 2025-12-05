export type Locale = "es" | "en";

export type Localized<T = string> = { es: T; en: T };
export type LocalizedString = Localized<string>;

export type NavContentLocalized = {
  brand: LocalizedString;
  links: { href: string; label: LocalizedString }[];
};

export type SectionContentLocalized = {
  title: LocalizedString;
  eyebrow?: LocalizedString;
  description?: LocalizedString;
  ctaPrimary?: LocalizedString;
  ctaSecondary?: LocalizedString;
};

export type AboutContentLocalized = SectionContentLocalized & {
  intro: LocalizedString;
  detail: LocalizedString;
};

export type ProjectsContentLocalized = SectionContentLocalized & {
  cta: LocalizedString;
};

export type ContactContentLocalized = SectionContentLocalized & {
  note?: LocalizedString;
};

export type DictionaryLocalized = {
  nav: NavContentLocalized;
  hero: SectionContentLocalized;
  about: AboutContentLocalized;
  projects: ProjectsContentLocalized;
  architecture: SectionContentLocalized;
  contact: ContactContentLocalized;
};

export type NavContent = {
  brand: string;
  links: { href: string; label: string }[];
};

export type SectionContent = {
  title: string;
  eyebrow?: string;
  description?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
};

export type AboutContent = SectionContent & {
  intro: string;
  detail: string;
};

export type ProjectsContent = SectionContent & {
  cta: string;
};

export type ContactContent = SectionContent & {
  note?: string;
};

export type Dictionary = {
  nav: NavContent;
  hero: SectionContent;
  about: AboutContent;
  projects: ProjectsContent;
  architecture: SectionContent;
  contact: ContactContent;
};

const content: DictionaryLocalized = {
  nav: {
    brand: { es: "Jedabero", en: "Jedabero" },
    links: [
      { href: "#projects", label: { es: "Proyectos", en: "Projects" } },
      { href: "#architecture", label: { es: "Arquitectura", en: "Architecture" } },
      { href: "#contact", label: { es: "Contacto", en: "Contact" } },
      { href: "/playground", label: { es: "Playground", en: "Playground" } },
      { href: "/blog", label: { es: "Blog", en: "Blog" } }
    ]
  },
  hero: {
    eyebrow: {
      es: "Disponible para colaborar en productos web y móviles",
      en: "Available for web and mobile products"
    },
    title: {
      es: "Full Stack Engineer enfocado en React, React Native, Node/Nest/Express y PostgreSQL.",
      en: "Full Stack Engineer focused on React, React Native, Node/Nest/Express and PostgreSQL."
    },
    description: {
      es: "Diseño arquitecturas ligeras, optimizo performance y acelero equipos con buenas prácticas. Casos de estudio privados con foco en logística, salud, medios y educación.",
      en: "I design lean architectures, improve performance and help teams ship faster with good practices. Private case studies across logistics, healthcare, media and education."
    },
    ctaPrimary: { es: "Hablemos", en: "Let’s talk" },
    ctaSecondary: { es: "Descargar CV", en: "Download CV" }
  },
  about: {
    title: { es: "Hola, soy Jedabero", en: "Hi, I’m Jedabero" },
    intro: {
      es: "Ingeniero de Sistemas con más de {years} años construyendo productos web y móviles. Me enfoco en arquitecturas ligeras, DX y performance en React/React Native con backends en Express, Next.js o NestJS sobre PostgreSQL.",
      en: "Systems Engineer with {years}+ years building web and mobile products. I focus on lean architectures, DX and performance in React/React Native with Express, Next.js or NestJS backends on PostgreSQL."
    },
    detail: {
      es: "Trabajo con equipos distribuidos para entregar features sostenibles, con medición continua y buenas prácticas listas para escalar.",
      en: "I work with distributed teams to ship sustainable features, with continuous measurement and ready-to-scale practices."
    },
    description: { es: "", en: "" },
    eyebrow: { es: "Sobre mí", en: "About" }
  },
  projects: {
    title: { es: "Casos de estudio privados", en: "Private case studies" },
    description: {
      es: "Trabajo en logística, salud, medios, educación y operaciones internas. Los detalles viven en casos de estudio sin enlaces públicos.",
      en: "I work in logistics, healthcare, media, education and internal ops. Details live in private case studies (no public links)."
    },
    cta: { es: "Ver caso de estudio", en: "View case study" }
  },
  architecture: {
    title: { es: "Diagramas ligeros", en: "Lightweight diagrams" },
    description: {
      es: "Referencias rápidas de cómo estructuro productos: BFFs en Node/GraphQL o Next.js, data en Postgres y caching donde aporta más. Sin assets sensibles; solo bloques conceptuales.",
      en: "Quick references for how I structure products: Node/GraphQL or Next.js BFFs, Postgres data and caching where it matters. No sensitive assets, just conceptual blocks."
    },
    eyebrow: { es: "Arquitectura", en: "Architecture" }
  },
  contact: {
    title: { es: "Hablemos", en: "Let’s talk" },
    description: {
      es: "Casos de estudio privados. Si quieres ver detalles o hablar de un reto, escríbeme o conecta por redes.",
      en: "Private case studies available. If you want details or to discuss a challenge, drop a line or connect."
    },
    eyebrow: { es: "Contacto", en: "Contact" }
  }
};

function deepPick<T>(value: any, locale: Locale): T {
  if (value === null || value === undefined) return value;
  if (typeof value === "string") return value as T;
  if (value.es !== undefined && value.en !== undefined) {
    return (value as { es: T; en: T })[locale];
  }
  if (Array.isArray(value)) {
    return value.map((v) => deepPick(v, locale)) as T;
  }
  if (typeof value === "object") {
    const out: any = {};
    for (const key of Object.keys(value)) {
      out[key] = deepPick((value as any)[key], locale);
    }
    return out as T;
  }
  return value as T;
}

export function getDictionary(locale: Locale): Dictionary {
  return deepPick<Dictionary>(content, locale);
}

export { content as bilingualContent };
