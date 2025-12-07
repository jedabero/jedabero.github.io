export type Project = {
  slug: string;
  companyId: 'fullstack-labs' | 'pluriza' | 'idi';
  name: string;
  company: string;
  domain: string;
  type: 'Proyecto privado';
  stack: string[];
  summary: {
    es: string;
    en: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'fullstack-labs-distribucion',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'Chill-n-Go Orders',
    domain: 'E-commerce',
    type: 'Proyecto privado',
    stack: ['React', 'Express.js', 'Postgres'],
    summary: {
      es: 'Portal web B2B para colocar y gestionar pedidos de bolsas de vino premium de Chill-n-Go.',
      en: 'B2B web portal to place and manage Chill-n-Go premium wine bag orders.'
    }
  },
  {
    slug: 'fullstack-labs-logistica',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'TMS EKA',
    domain: 'Logística',
    type: 'Proyecto privado',
    stack: ['React', 'Express.js', 'NestJS', 'Postgres'],
    summary: {
      es: 'TMS para EKA, uno de los mayores proveedores de soluciones logísticas: visibilidad de órdenes y control operativo.',
      en: 'TMS for EKA, a leading logistics solutions provider: order visibility and operational control.'
    }
  },
  {
    slug: 'fullstack-labs-glooko-mobile',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'Glooko Companion (Mobile)',
    domain: 'Salud',
    type: 'Proyecto privado',
    stack: ['React Native', 'Node.js', 'Postgres'],
    summary: {
      es: 'App móvil whitelabel tipo clinical trial/medication companion para Glooko en React Native.',
      en: 'React Native whitelabel clinical trial / medication companion mobile app for Glooko.'
    }
  },
  {
    slug: 'fullstack-labs-glooko-admin',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'Glooko Admin',
    domain: 'Salud',
    type: 'Proyecto privado',
    stack: ['React', 'Node.js', 'Postgres'],
    summary: {
      es: 'Sitio administrativo en React para gestionar clinical trials y datos de Glooko.',
      en: 'React admin site to manage Glooko clinical trials and data.'
    }
  },
  {
    slug: 'fullstack-labs-cms-search',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'CMS & Search APIs',
    domain: 'Plataforma / API',
    type: 'Proyecto privado',
    stack: ['Node.js', 'TypeScript', 'Express.js', 'GraphQL'],
    summary: {
      es: 'Content API y Search API en Express/GraphQL para web y mobile; mantenimiento, performance y nuevas features.',
      en: 'Express/GraphQL Content API and Search API for web and mobile; maintenance, performance and new features.'
    }
  },
  {
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    name: 'BeClose',
    domain: 'Comunicación',
    type: 'Proyecto privado',
    stack: ['React Native', 'WebRTC', 'Firebase'],
    summary: {
      es: 'BeClose: app móvil de video chat para padres e hijos. Evolución del MVP a producto estable con WebRTC y Firebase.',
      en: 'BeClose: mobile video chat app for parents and kids. Evolved MVP into a stable product with WebRTC and Firebase.'
    }
  },
  {
    slug: 'pluriza-logistica',
    companyId: 'pluriza',
    company: 'Pluriza',
    name: 'Veracruz Logística',
    domain: 'Logística',
    type: 'Proyecto privado',
    stack: ['Angular.js', 'Apollo GraphQL', 'AWS'],
    summary: {
      es: 'Software de gestión de carga y logística; DevOps y liderazgo en equipo de 3 personas.',
      en: 'Freight management and logistics software; DevOps and leadership in a 3-person team.'
    }
  },
  {
    slug: 'pluriza-ghost-management',
    companyId: 'pluriza',
    company: 'Pluriza',
    name: 'Ghost Management',
    domain: 'Operaciones',
    type: 'Proyecto privado',
    stack: ['Angular.js', 'Bootstrap'],
    summary: {
      es: 'App de gestión de reservas; liderazgo de equipo de 7 devs, nuevas features y fixes en Angular.js + Bootstrap.',
      en: 'Booking management app; led a 7-dev team, added features and fixes using Angular.js + Bootstrap.'
    }
  },
  {
    slug: 'idi-sed',
    companyId: 'idi',
    company: 'Fundación IDI',
    name: 'SED Evaluaciones',
    domain: 'Educación / Evaluación',
    type: 'Proyecto privado',
    stack: ['Ext JS', 'JavaScript', 'CodeIgniter', 'PHP'],
    summary: {
      es: 'Plataforma para que estudiantes, directivos y docentes evalúen instructores; fixes y nuevas features.',
      en: 'Platform for students, headmasters, and teachers to assess instructors; bug fixes and new features.'
    }
  },
  {
    slug: 'idi-mangus',
    companyId: 'idi',
    company: 'Fundación IDI',
    name: 'Mangus Cursos',
    domain: 'Educación',
    type: 'Proyecto privado',
    stack: ['PhoneGap', 'React', 'CodeIgniter'],
    summary: {
      es: 'Plataforma de cursos en línea: MVP móvil con PhoneGap y web app en React, ambas consumiendo API CodeIgniter.',
      en: 'Online course platform: PhoneGap mobile MVP and React web app, both consuming a CodeIgniter API.'
    }
  },
  {
    slug: 'idi-cuc-movil',
    companyId: 'idi',
    company: 'Fundación IDI',
    name: 'CUC Móvil',
    domain: 'Educación / Campus',
    type: 'Proyecto privado',
    stack: ['Java (Android)', 'CodeIgniter'],
    summary: {
      es: 'App móvil para notificaciones, guía de campus, notas y horarios; actualización a Android 6.0.',
      en: 'Mobile app for notifications, campus guidance, grades and schedules; updated to Android 6.0.'
    }
  }
];
