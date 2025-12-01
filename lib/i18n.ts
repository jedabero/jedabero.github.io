export type Locale = 'es' | 'en';

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

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: {
      brand: 'Jedabero',
      links: [
        { href: '#projects', label: 'Proyectos' },
        { href: '#architecture', label: 'Arquitectura' },
        { href: '#contact', label: 'Contacto' }
      ]
    },
    hero: {
      eyebrow: 'Disponible para colaborar en productos web y móviles',
      title: 'Full Stack Engineer enfocado en React, React Native, Node/Nest/Express y PostgreSQL.',
      description:
        'Diseño arquitecturas ligeras, optimizo performance y acelero equipos con buenas prácticas. Casos de estudio privados con foco en logística, salud, medios y educación.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Descargar CV'
    },
    about: {
      title: 'Hola, soy Jedabero',
      intro:
        'Ingeniero de Sistemas con más de {years} años construyendo productos web y móviles. Me enfoco en arquitecturas ligeras, DX y performance en React/React Native con backends en Express, Next.js o NestJS sobre PostgreSQL.',
      detail:
        'Trabajo con equipos distribuidos para entregar features sostenibles, con medición continua y buenas prácticas listas para escalar.',
      description: '',
      eyebrow: 'Sobre mí'
    },
    projects: {
      title: 'Casos de estudio privados',
      description:
        'Trabajo en logística, salud, medios, educación y operaciones internas. Los detalles viven en casos de estudio sin enlaces públicos.',
      cta: 'Ver caso de estudio'
    },
    architecture: {
      title: 'Diagramas ligeros',
      description:
        'Referencias rápidas de cómo estructuro productos: BFFs en Node/GraphQL o Next.js, data en Postgres y caching donde aporta más. Sin assets sensibles; solo bloques conceptuales.',
      eyebrow: 'Arquitectura'
    },
    contact: {
      title: 'Hablemos',
      description:
        'Casos de estudio privados. Si quieres ver detalles o hablar de un reto, escríbeme o conecta por redes.',
      eyebrow: 'Contacto'
    }
  },
  en: {
    nav: {
      brand: 'Jedabero',
      links: [
        { href: '#projects', label: 'Projects' },
        { href: '#architecture', label: 'Architecture' },
        { href: '#contact', label: 'Contact' }
      ]
    },
    hero: {
      eyebrow: 'Available for web and mobile products',
      title: 'Full Stack Engineer focused on React, React Native, Node/Nest/Express and PostgreSQL.',
      description:
        'I design lean architectures, improve performance and help teams ship faster with good practices. Private case studies across logistics, healthcare, media and education.',
      ctaPrimary: 'Let’s talk',
      ctaSecondary: 'Download CV'
    },
    about: {
      title: 'Hi, I’m Jedabero',
      intro:
        'Systems Engineer with {years}+ years building web and mobile products. I focus on lean architectures, DX and performance in React/React Native with Express, Next.js or NestJS backends on PostgreSQL.',
      detail:
        'I work with distributed teams to ship sustainable features, with continuous measurement and ready-to-scale practices.',
      description: '',
      eyebrow: 'About'
    },
    projects: {
      title: 'Private case studies',
      description:
        'I work in logistics, healthcare, media, education and internal ops. Details live in private case studies (no public links).',
      cta: 'View case study'
    },
    architecture: {
      title: 'Lightweight diagrams',
      description:
        'Quick references for how I structure products: Node/GraphQL or Next.js BFFs, Postgres data and caching where it matters. No sensitive assets, just conceptual blocks.',
      eyebrow: 'Architecture'
    },
    contact: {
      title: 'Let’s talk',
      description:
        'Private case studies available. If you want details or to discuss a challenge, drop a line or connect.',
      eyebrow: 'Contact'
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
