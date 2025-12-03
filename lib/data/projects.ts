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
      es: 'Portal web para crear y gestionar pedidos de bolsas de vino premium.',
      en: 'Web portal to place and manage orders for premium wine bags.'
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
      es: 'TMS para uno de los mayores proveedores de soluciones logísticas (EKA).',
      en: 'TMS for one of the largest logistics solutions providers (EKA).'
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
      es: 'App móvil whitelabel tipo clinical trial/medication companion para Glooko.',
      en: 'Whitelabel clinical trial / medication companion mobile app for Glooko.'
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
      es: 'Sitio administrativo para gestionar clinical trials y datos de Glooko.',
      en: 'Administrative site to manage clinical trials and data for Glooko.'
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
      es: 'Content API y Search API consumidas por frontend y mobile; mantenimiento y evolución del CMS/Search.',
      en: 'Content API and Search API consumed by frontend and mobile; maintenance and evolution of CMS/Search.'
    }
  },
  {
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    name: 'Video Chat Familiar',
    domain: 'Comunicación',
    type: 'Proyecto privado',
    stack: ['React Native', 'WebRTC', 'Firebase'],
    summary: {
      es: 'App móvil de video chat para padres e hijos; evolución de MVP a producto estable con más features.',
      en: 'Mobile video chat app for parents and kids; evolved MVP into a stable product with more features.'
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
