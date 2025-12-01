export type CaseStudy = {
  slug: string;
  companyId: 'fullstack-labs' | 'pluriza' | 'idi';
  company: string;
  title: { es: string; en: string };
  domain: string;
  role: string[];
  frontend: string[];
  backend: string[];
  infra: string[];
  problem: { es: string; en: string };
  solution: { es: string; en: string };
  impact: { es: string[]; en: string[] };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fullstack-labs-logistica',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'Plataforma de Logística Global', en: 'Global Logistics Platform' },
    domain: 'Logística',
    role: ['Arquitectura', 'Performance', 'Buenas prácticas'],
    frontend: ['React', 'React Native'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CI/CD', 'Caching', 'Observabilidad'],
    problem: {
      es: 'Optimizar tracking y visibilidad de envíos a escala internacional.',
      en: 'Optimize tracking and shipment visibility at international scale.'
    },
    solution: {
      es: 'BFF en Node/GraphQL, caching selectivo y trazas distribuidas para diagnosticar cuellos de botella.',
      en: 'Node/GraphQL BFF, selective caching, and distributed tracing to diagnose bottlenecks.'
    },
    impact: {
      es: [
        'Placeholder: mejora de TTFB y latencias en flujos críticos',
        'Placeholder: reducción de errores en producción',
        'Placeholder: releases semanales sostenidas'
      ],
      en: [
        'Placeholder: improved TTFB and latency in critical flows',
        'Placeholder: reduced production errors',
        'Placeholder: sustained weekly releases'
      ]
    }
  },
  {
    slug: 'fullstack-labs-salud',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'Portal de Salud', en: 'Healthcare Portal' },
    domain: 'Salud',
    role: ['Arquitectura', 'Frontend', 'Prácticas seguras'],
    frontend: ['React'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CI/CD', 'Feature flags'],
    problem: {
      es: 'Habilitar interacción segura entre pacientes y profesionales.',
      en: 'Enable secure interactions between patients and professionals.'
    },
    solution: {
      es: 'Diseño de flujos autenticados, permisos granulares y manejo de datos sensibles con validaciones consistentes.',
      en: 'Designed authenticated flows, granular permissions, and sensitive data handling with consistent validations.'
    },
    impact: {
      es: [
        'Placeholder: mejora de tasa de éxito en formularios',
        'Placeholder: disminución de incidencias de seguridad',
        'Placeholder: onboarding de equipos más rápido'
      ],
      en: [
        'Placeholder: improved form completion rate',
        'Placeholder: fewer security incidents',
        'Placeholder: faster onboarding for teams'
      ]
    }
  },
  {
    slug: 'fullstack-labs-distribucion',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'Distribución de Contenido', en: 'Content Distribution' },
    domain: 'Medios',
    role: ['Arquitectura', 'Frontend', 'Performance'],
    frontend: ['React'],
    backend: ['Node.js', 'GraphQL', 'Postgres'],
    infra: ['CDN', 'Edge caching'],
    problem: {
      es: 'Entregar contenido con SLAs estrictos y variaciones de formato.',
      en: 'Deliver content under strict SLAs across varying formats.'
    },
    solution: {
      es: 'Normalización de datos en GraphQL, caching en edge y optimización de renders en React.',
      en: 'GraphQL data normalization, edge caching, and React render optimizations.'
    },
    impact: {
      es: [
        'Placeholder: mejora de Core Web Vitals',
        'Placeholder: menor tasa de timeouts',
        'Placeholder: mayor capacidad de publicación concurrente'
      ],
      en: [
        'Placeholder: improved Core Web Vitals',
        'Placeholder: fewer timeouts',
        'Placeholder: higher concurrent publishing capacity'
      ]
    }
  },
  {
    slug: 'fullstack-labs-operaciones',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'Operaciones Internas', en: 'Internal Operations' },
    domain: 'Operaciones',
    role: ['Productividad', 'Frontend', 'Process design'],
    frontend: ['React', 'React Native'],
    backend: ['Node.js', 'GraphQL'],
    infra: ['CI/CD', 'Sentry', 'Feature flags'],
    problem: {
      es: 'Optimizar workflows internos y reducir fricción operativa.',
      en: 'Optimize internal workflows and reduce operational friction.'
    },
    solution: {
      es: 'Refactor de flujos críticos, componentes compartidos y medición continua de performance.',
      en: 'Refactored critical flows, shared components, and continuous performance measurement.'
    },
    impact: {
      es: [
        'Placeholder: reducción de tiempo en tareas repetitivas',
        'Placeholder: menos bugs regresivos',
        'Placeholder: adopción interna más alta'
      ],
      en: [
        'Placeholder: reduced time on repetitive tasks',
        'Placeholder: fewer regressions',
        'Placeholder: higher internal adoption'
      ]
    }
  },
  {
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: { es: 'Comunicación Segura', en: 'Secure Communication' },
    domain: 'Comunicación',
    role: ['Full-stack', 'Arquitectura'],
    frontend: ['React'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD', 'Observabilidad'],
    problem: {
      es: 'Construir una plataforma de comunicación y colaboración empresarial.',
      en: 'Build an enterprise communication and collaboration platform.'
    },
    solution: {
      es: 'Front en React con flows claros y backend Node/Postgres con modelos centrados en permisos y auditoría.',
      en: 'React front with clear flows and Node/Postgres backend with permission and audit-focused models.'
    },
    impact: {
      es: [
        'Placeholder: mejora en retención de usuarios',
        'Placeholder: menor tiempo de respuesta en mensajería',
        'Placeholder: reducción de issues de permisos'
      ],
      en: [
        'Placeholder: improved user retention',
        'Placeholder: lower messaging response time',
        'Placeholder: fewer permission issues'
      ]
    }
  },
  {
    slug: 'pluriza-logistica',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: { es: 'Logística y Conectividad Familiar', en: 'Logistics and Family Connectivity' },
    domain: 'Logística',
    role: ['Full-stack', 'Optimización de flujos'],
    frontend: ['React', 'Angular'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: {
      es: 'Lograr trazabilidad y conectividad para operaciones y familias.',
      en: 'Achieve traceability and connectivity for operations and families.'
    },
    solution: {
      es: 'Arquitectura híbrida React/Angular mientras se migran módulos críticos, APIs Node y persistencia en Postgres.',
      en: 'Hybrid React/Angular architecture during migration of critical modules, Node APIs, and Postgres persistence.'
    },
    impact: {
      es: [
        'Placeholder: continuidad sin downtime durante migración',
        'Placeholder: reducción de costos operativos',
        'Placeholder: mejora en satisfacción de usuarios finales'
      ],
      en: [
        'Placeholder: no downtime during migration',
        'Placeholder: reduced operational costs',
        'Placeholder: improved end-user satisfaction'
      ]
    }
  },
  {
    slug: 'idi-elearning-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: { es: 'E-learning CUC', en: 'CUC E-learning' },
    domain: 'Educación',
    role: ['Frontend', 'Integraciones'],
    frontend: ['React', 'ExtJS'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: {
      es: 'Escalar un sistema de aprendizaje en línea multi-interfaz.',
      en: 'Scale a multi-interface online learning system.'
    },
    solution: {
      es: 'Componentes React coexistiendo con ExtJS mientras se incorporan integraciones de contenidos y trazabilidad.',
      en: 'React components coexisting with ExtJS while adding content integrations and traceability.'
    },
    impact: {
      es: [
        'Placeholder: mayor estabilidad en periodos de alta carga',
        'Placeholder: adopción de la plataforma en nuevos programas',
        'Placeholder: reducción de tickets de soporte'
      ],
      en: [
        'Placeholder: higher stability in peak periods',
        'Placeholder: platform adoption in new programs',
        'Placeholder: fewer support tickets'
      ]
    }
  },
  {
    slug: 'idi-admin-cuc',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: { es: 'Administrativo CUC', en: 'CUC Administrative' },
    domain: 'Administrativo',
    role: ['Full-stack', 'Mantenimiento evolutivo'],
    frontend: ['React'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: {
      es: 'Unificar sistemas administrativos y académicos.',
      en: 'Unify administrative and academic systems.'
    },
    solution: {
      es: 'Normalización de dominios, UI consistente en React y capas de servicios en Node/Postgres.',
      en: 'Domain normalization, consistent React UI, and service layers in Node/Postgres.'
    },
    impact: {
      es: [
        'Placeholder: mejora en consistencia de datos',
        'Placeholder: tiempos menores en procesos internos',
        'Placeholder: reducción de errores operativos'
      ],
      en: [
        'Placeholder: improved data consistency',
        'Placeholder: shorter internal process times',
        'Placeholder: reduced operational errors'
      ]
    }
  },
  {
    slug: 'idi-multi-interfaz',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: { es: 'Multi-Interfaz', en: 'Multi-Interface' },
    domain: 'Educación',
    role: ['Frontend', 'Mobile'],
    frontend: ['React', 'PhoneGap'],
    backend: ['Node.js'],
    infra: ['CI/CD'],
    problem: {
      es: 'Dar acceso web y móvil a funcionalidades educativas.',
      en: 'Provide web and mobile access to educational features.'
    },
    solution: {
      es: 'Diseño de componentes reutilizables, empaquetado móvil y servicios compatibles con clientes ligeros.',
      en: 'Reusable components, mobile packaging, and services compatible with lightweight clients.'
    },
    impact: {
      es: [
        'Placeholder: aumento de uso móvil',
        'Placeholder: despliegues más predecibles',
        'Placeholder: menor tiempo de resolución de bugs'
      ],
      en: [
        'Placeholder: increased mobile usage',
        'Placeholder: more predictable releases',
        'Placeholder: shorter bug resolution time'
      ]
    }
  }
];
