export type CaseStudy = {
  slug: string;
  companyId: 'fullstack-labs' | 'pluriza' | 'idi';
  company: string;
  title: string;
  domain: string;
  role: string[];
  frontend: string[];
  backend: string[];
  infra: string[];
  problem: string;
  solution: string;
  impact: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fullstack-labs-logistica',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Plataforma de Logística Global',
    domain: 'Logística',
    role: ['Arquitectura', 'Performance', 'Buenas prácticas'],
    frontend: ['React', 'React Native'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CI/CD', 'Caching', 'Observabilidad'],
    problem: 'Optimizar tracking y visibilidad de envíos a escala internacional.',
    solution:
      'BFF en Node/GraphQL, caching selectivo y trazas distribuidas para diagnosticar cuellos de botella.',
    impact: [
      'Placeholder: mejora de TTFB y latencias en flujos críticos',
      'Placeholder: reducción de errores en producción',
      'Placeholder: releases semanales sostenidas'
    ]
  },
  {
    slug: 'fullstack-labs-salud',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Portal de Salud',
    domain: 'Salud',
    role: ['Arquitectura', 'Frontend', 'Prácticas seguras'],
    frontend: ['React'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CI/CD', 'Feature flags'],
    problem: 'Habilitar interacción segura entre pacientes y profesionales.',
    solution:
      'Diseño de flujos autenticados, permisos granulares y manejo de datos sensibles con validaciones consistentes.',
    impact: [
      'Placeholder: mejora de tasa de éxito en formularios',
      'Placeholder: disminución de incidencias de seguridad',
      'Placeholder: onboarding de equipos más rápido'
    ]
  },
  {
    slug: 'fullstack-labs-distribucion',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Distribución de Contenido',
    domain: 'Medios',
    role: ['Arquitectura', 'Frontend', 'Performance'],
    frontend: ['React'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CDN', 'Edge caching'],
    problem: 'Entregar contenido con SLAs estrictos y variaciones de formato.',
    solution:
      'Normalización de datos en GraphQL, caching en edge y optimización de renders en React.',
    impact: [
      'Placeholder: mejora de Core Web Vitals',
      'Placeholder: menor tasa de timeouts',
      'Placeholder: mayor capacidad de publicación concurrente'
    ]
  },
  {
    slug: 'fullstack-labs-operaciones',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Operaciones Internas',
    domain: 'Operaciones',
    role: ['Productividad', 'Frontend', 'Process design'],
    frontend: ['React', 'React Native'],
    backend: ['Node.js', 'GraphQL'],
    infra: ['CI/CD', 'Sentry', 'Feature flags'],
    problem: 'Optimizar workflows internos y reducir fricción operativa.',
    solution:
      'Refactor de flujos críticos, componentes compartidos y medición continua de performance.',
    impact: [
      'Placeholder: reducción de tiempo en tareas repetitivas',
      'Placeholder: menos bugs regresivos',
      'Placeholder: adopción interna más alta'
    ]
  },
  {
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: 'Comunicación Segura',
    domain: 'Comunicación',
    role: ['Full-stack', 'Arquitectura'],
    frontend: ['React'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD', 'Observabilidad'],
    problem: 'Construir una plataforma de comunicación y colaboración empresarial.',
    solution:
      'Front en React con flows claros y backend Node/Postgres con modelos centrados en permisos y auditoría.',
    impact: [
      'Placeholder: mejora en retención de usuarios',
      'Placeholder: menor tiempo de respuesta en mensajería',
      'Placeholder: reducción de issues de permisos'
    ]
  },
  {
    slug: 'pluriza-logistica',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: 'Logística y Conectividad Familiar',
    domain: 'Logística',
    role: ['Full-stack', 'Optimización de flujos'],
    frontend: ['React', 'Angular'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: 'Lograr trazabilidad y conectividad para operaciones y familias.',
    solution:
      'Arquitectura híbrida React/Angular mientras se migran módulos críticos, APIs Node y persistencia en Postgres.',
    impact: [
      'Placeholder: continuidad sin downtime durante migración',
      'Placeholder: reducción de costos operativos',
      'Placeholder: mejora en satisfacción de usuarios finales'
    ]
  },
  {
    slug: 'idi-elearning-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: 'E-learning CUC',
    domain: 'Educación',
    role: ['Frontend', 'Integraciones'],
    frontend: ['React', 'ExtJS'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: 'Escalar un sistema de aprendizaje en línea multi-interfaz.',
    solution:
      'Componentes React coexistiendo con ExtJS mientras se incorporan integraciones de contenidos y trazabilidad.',
    impact: [
      'Placeholder: mayor estabilidad en periodos de alta carga',
      'Placeholder: adopción de la plataforma en nuevos programas',
      'Placeholder: reducción de tickets de soporte'
    ]
  },
  {
    slug: 'idi-admin-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: 'Administrativo CUC',
    domain: 'Administrativo',
    role: ['Full-stack', 'Mantenimiento evolutivo'],
    frontend: ['React'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: 'Unificar sistemas administrativos y académicos.',
    solution:
      'Normalización de dominios, UI consistente en React y capas de servicios en Node/Postgres.',
    impact: [
      'Placeholder: mejora en consistencia de datos',
      'Placeholder: tiempos menores en procesos internos',
      'Placeholder: reducción de errores operativos'
    ]
  },
  {
    slug: 'idi-multi-interfaz',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: 'Multi-Interfaz',
    domain: 'Educación',
    role: ['Frontend', 'Mobile'],
    frontend: ['React', 'PhoneGap'],
    backend: ['Node.js'],
    infra: ['CI/CD'],
    problem: 'Dar acceso web y móvil a funcionalidades educativas.',
    solution:
      'Diseño de componentes reutilizables, empaquetado móvil y servicios compatibles con clientes ligeros.',
    impact: [
      'Placeholder: aumento de uso móvil',
      'Placeholder: despliegues más predecibles',
      'Placeholder: menor tiempo de resolución de bugs'
    ]
  }
];
