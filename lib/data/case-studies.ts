export type CaseStudy = {
  slug: string;
  companyId: 'fullstack-labs' | 'pluriza' | 'idi';
  company: string;
  title: string;
  titleEn?: string;
  domain: string;
  role: string[];
  frontend: string[];
  backend: string[];
  infra: string[];
  problem: string;
  problemEn?: string;
  solution: string;
  solutionEn?: string;
  impact: string[];
  impactEn?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fullstack-labs-logistica',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Plataforma de Logística Global',
    titleEn: 'Global Logistics Platform',
    domain: 'Logística',
    role: ['Arquitectura', 'Performance', 'Buenas prácticas'],
    frontend: ['React', 'React Native'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CI/CD', 'Caching', 'Observabilidad'],
    problem: 'Optimizar tracking y visibilidad de envíos a escala internacional.',
    problemEn: 'Optimize tracking and shipment visibility at international scale.',
    solution:
      'BFF en Node/GraphQL, caching selectivo y trazas distribuidas para diagnosticar cuellos de botella.',
    solutionEn:
      'Node/GraphQL BFF, selective caching, and distributed tracing to diagnose bottlenecks.',
    impact: [
      'Placeholder: mejora de TTFB y latencias en flujos críticos',
      'Placeholder: reducción de errores en producción',
      'Placeholder: releases semanales sostenidas'
    ],
    impactEn: [
      'Placeholder: improved TTFB and latency in critical flows',
      'Placeholder: reduced production errors',
      'Placeholder: sustained weekly releases'
    ]
  },
  {
    slug: 'fullstack-labs-salud',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Portal de Salud',
    titleEn: 'Healthcare Portal',
    domain: 'Salud',
    role: ['Arquitectura', 'Frontend', 'Prácticas seguras'],
    frontend: ['React'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CI/CD', 'Feature flags'],
    problem: 'Habilitar interacción segura entre pacientes y profesionales.',
    problemEn: 'Enable secure interactions between patients and professionals.',
    solution:
      'Diseño de flujos autenticados, permisos granulares y manejo de datos sensibles con validaciones consistentes.',
    solutionEn:
      'Designed authenticated flows, granular permissions, and sensitive data handling with consistent validations.',
    impact: [
      'Placeholder: mejora de tasa de éxito en formularios',
      'Placeholder: disminución de incidencias de seguridad',
      'Placeholder: onboarding de equipos más rápido'
    ],
    impactEn: [
      'Placeholder: improved form completion rate',
      'Placeholder: fewer security incidents',
      'Placeholder: faster onboarding for teams'
    ]
  },
  {
    slug: 'fullstack-labs-distribucion',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Distribución de Contenido',
    titleEn: 'Content Distribution',
    domain: 'Medios',
    role: ['Arquitectura', 'Frontend', 'Performance'],
    frontend: ['React'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CDN', 'Edge caching'],
    problem: 'Entregar contenido con SLAs estrictos y variaciones de formato.',
    problemEn: 'Deliver content under strict SLAs across varying formats.',
    solution:
      'Normalización de datos en GraphQL, caching en edge y optimización de renders en React.',
    solutionEn:
      'GraphQL data normalization, edge caching, and React render optimizations.',
    impact: [
      'Placeholder: mejora de Core Web Vitals',
      'Placeholder: menor tasa de timeouts',
      'Placeholder: mayor capacidad de publicación concurrente'
    ],
    impactEn: [
      'Placeholder: improved Core Web Vitals',
      'Placeholder: fewer timeouts',
      'Placeholder: higher concurrent publishing capacity'
    ]
  },
  {
    slug: 'fullstack-labs-operaciones',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: 'Operaciones Internas',
    titleEn: 'Internal Operations',
    domain: 'Operaciones',
    role: ['Productividad', 'Frontend', 'Process design'],
    frontend: ['React', 'React Native'],
    backend: ['Node.js', 'GraphQL'],
    infra: ['CI/CD', 'Sentry', 'Feature flags'],
    problem: 'Optimizar workflows internos y reducir fricción operativa.',
    problemEn: 'Optimize internal workflows and reduce operational friction.',
    solution:
      'Refactor de flujos críticos, componentes compartidos y medición continua de performance.',
    solutionEn:
      'Refactored critical flows, shared components, and continuous performance measurement.',
    impact: [
      'Placeholder: reducción de tiempo en tareas repetitivas',
      'Placeholder: menos bugs regresivos',
      'Placeholder: adopción interna más alta'
    ],
    impactEn: [
      'Placeholder: reduced time on repetitive tasks',
      'Placeholder: fewer regressions',
      'Placeholder: higher internal adoption'
    ]
  },
  {
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: 'Comunicación Segura',
    titleEn: 'Secure Communication',
    domain: 'Comunicación',
    role: ['Full-stack', 'Arquitectura'],
    frontend: ['React'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD', 'Observabilidad'],
    problem: 'Construir una plataforma de comunicación y colaboración empresarial.',
    problemEn: 'Build an enterprise communication and collaboration platform.',
    solution:
      'Front en React con flows claros y backend Node/Postgres con modelos centrados en permisos y auditoría.',
    solutionEn:
      'React front with clear flows and Node/Postgres backend with permission and audit-focused models.',
    impact: [
      'Placeholder: mejora en retención de usuarios',
      'Placeholder: menor tiempo de respuesta en mensajería',
      'Placeholder: reducción de issues de permisos'
    ],
    impactEn: [
      'Placeholder: improved user retention',
      'Placeholder: lower messaging response time',
      'Placeholder: fewer permission issues'
    ]
  },
  {
    slug: 'pluriza-logistica',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: 'Logística y Conectividad Familiar',
    titleEn: 'Logistics and Family Connectivity',
    domain: 'Logística',
    role: ['Full-stack', 'Optimización de flujos'],
    frontend: ['React', 'Angular'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: 'Lograr trazabilidad y conectividad para operaciones y familias.',
    problemEn: 'Achieve traceability and connectivity for operations and families.',
    solution:
      'Arquitectura híbrida React/Angular mientras se migran módulos críticos, APIs Node y persistencia en Postgres.',
    solutionEn:
      'Hybrid React/Angular architecture during migration of critical modules, Node APIs, and Postgres persistence.',
    impact: [
      'Placeholder: continuidad sin downtime durante migración',
      'Placeholder: reducción de costos operativos',
      'Placeholder: mejora en satisfacción de usuarios finales'
    ],
    impactEn: [
      'Placeholder: no downtime during migration',
      'Placeholder: reduced operational costs',
      'Placeholder: improved end-user satisfaction'
    ]
  },
  {
    slug: 'idi-elearning-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: 'E-learning CUC',
    titleEn: 'CUC E-learning',
    domain: 'Educación',
    role: ['Frontend', 'Integraciones'],
    frontend: ['React', 'ExtJS'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: 'Escalar un sistema de aprendizaje en línea multi-interfaz.',
    problemEn: 'Scale a multi-interface online learning system.',
    solution:
      'Componentes React coexistiendo con ExtJS mientras se incorporan integraciones de contenidos y trazabilidad.',
    solutionEn:
      'React components coexisting with ExtJS while adding content integrations and traceability.',
    impact: [
      'Placeholder: mayor estabilidad en periodos de alta carga',
      'Placeholder: adopción de la plataforma en nuevos programas',
      'Placeholder: reducción de tickets de soporte'
    ],
    impactEn: [
      'Placeholder: higher stability in peak periods',
      'Placeholder: platform adoption in new programs',
      'Placeholder: fewer support tickets'
    ]
  },
  {
    slug: 'idi-admin-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: 'Administrativo CUC',
    titleEn: 'CUC Administrative',
    domain: 'Administrativo',
    role: ['Full-stack', 'Mantenimiento evolutivo'],
    frontend: ['React'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: 'Unificar sistemas administrativos y académicos.',
    problemEn: 'Unify administrative and academic systems.',
    solution:
      'Normalización de dominios, UI consistente en React y capas de servicios en Node/Postgres.',
    solutionEn:
      'Domain normalization, consistent React UI, and service layers in Node/Postgres.',
    impact: [
      'Placeholder: mejora en consistencia de datos',
      'Placeholder: tiempos menores en procesos internos',
      'Placeholder: reducción de errores operativos'
    ],
    impactEn: [
      'Placeholder: improved data consistency',
      'Placeholder: shorter internal process times',
      'Placeholder: reduced operational errors'
    ]
  },
  {
    slug: 'idi-multi-interfaz',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: 'Multi-Interfaz',
    titleEn: 'Multi-Interface',
    domain: 'Educación',
    role: ['Frontend', 'Mobile'],
    frontend: ['React', 'PhoneGap'],
    backend: ['Node.js'],
    infra: ['CI/CD'],
    problem: 'Dar acceso web y móvil a funcionalidades educativas.',
    problemEn: 'Provide web and mobile access to educational features.',
    solution:
      'Diseño de componentes reutilizables, empaquetado móvil y servicios compatibles con clientes ligeros.',
    solutionEn:
      'Reusable components, mobile packaging, and services compatible with lightweight clients.',
    impact: [
      'Placeholder: aumento de uso móvil',
      'Placeholder: despliegues más predecibles',
      'Placeholder: menor tiempo de resolución de bugs'
    ],
    impactEn: [
      'Placeholder: increased mobile usage',
      'Placeholder: more predictable releases',
      'Placeholder: shorter bug resolution time'
    ]
  }
];
