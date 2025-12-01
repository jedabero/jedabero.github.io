export type Project = {
  slug: string;
  companyId: 'fullstack-labs' | 'pluriza' | 'idi';
  name: string;
  company: string;
  domain: string;
  type: 'Proyecto privado';
  stack: string[];
  summary: string;
};

export const projects: Project[] = [
  {
    slug: 'fullstack-labs-logistica',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'Logística Global',
    domain: 'Logística',
    type: 'Proyecto privado',
    stack: ['React', 'React Native', 'Node.js', 'GraphQL', 'Postgres'],
    summary: 'Plataforma internacional de tracking y visibilidad de envíos.'
  },
  {
    slug: 'fullstack-labs-salud',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'Atención en Salud',
    domain: 'Salud',
    type: 'Proyecto privado',
    stack: ['React', 'Node.js', 'GraphQL', 'Postgres'],
    summary: 'Portal de pacientes y profesionales con flujos seguros y auditables.'
  },
  {
    slug: 'fullstack-labs-distribucion',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'Distribución de Contenido',
    domain: 'Medios',
    type: 'Proyecto privado',
    stack: ['React', 'Node.js', 'GraphQL', 'Postgres'],
    summary: 'Gestión y entrega de contenido con SLAs estrictos.'
  },
  {
    slug: 'fullstack-labs-operaciones',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    name: 'Operaciones',
    domain: 'Operaciones',
    type: 'Proyecto privado',
    stack: ['React', 'React Native', 'Node.js', 'GraphQL'],
    summary: 'Optimización de procesos y workflows internos.'
  },
  {
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    name: 'Comunicación Segura',
    domain: 'Comunicación',
    type: 'Proyecto privado',
    stack: ['React', 'Node.js', 'Postgres'],
    summary: 'Plataforma de comunicación y colaboración empresarial.'
  },
  {
    slug: 'pluriza-logistica',
    companyId: 'pluriza',
    company: 'Pluriza',
    name: 'Logística Familiar',
    domain: 'Logística',
    type: 'Proyecto privado',
    stack: ['React', 'Angular', 'Node.js', 'Postgres'],
    summary: 'Solución de conectividad y trazabilidad para familias y operaciones.'
  },
  {
    slug: 'idi-elearning-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    name: 'E-learning CUC',
    domain: 'Educación',
    type: 'Proyecto privado',
    stack: ['React', 'ExtJS', 'Node.js', 'Postgres'],
    summary: 'Sistema de aprendizaje en línea para la Universidad de la Costa.'
  },
  {
    slug: 'idi-admin-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    name: 'Administrativo CUC',
    domain: 'Administrativo',
    type: 'Proyecto privado',
    stack: ['React', 'Node.js', 'Postgres'],
    summary: 'Sistemas administrativos y académicos centralizados.'
  },
  {
    slug: 'idi-multi-interfaz',
    companyId: 'idi',
    company: 'Fundación IDI',
    name: 'Multi-Interfaz',
    domain: 'Educación',
    type: 'Proyecto privado',
    stack: ['React', 'ExtJS', 'PhoneGap'],
    summary: 'Interfaces múltiples para acceso móvil y web.'
  }
];
