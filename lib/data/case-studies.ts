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
    slug: 'fullstack-labs-distribucion',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'Portal de pedidos Chill-n-Go', en: 'Chill-n-Go Orders Portal' },
    domain: 'E-commerce',
    role: ['Frontend', 'Backend', 'Arquitectura'],
    frontend: ['React'],
    backend: ['Express.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: {
      es: 'Crear un portal B2B para que Chill-n-Go coloque y gestione pedidos de bolsas de vino premium con seguimiento claro.',
      en: 'Build a B2B portal so Chill-n-Go can place and manage premium wine bag orders with clear tracking.'
    },
    solution: {
      es: 'SPA en React con formularios y estados de pedido; backend Express/Postgres orquestando inventario y flujos de compra, listo para releases frecuentes.',
      en: 'React SPA with order forms and status tracking; Express/Postgres backend orchestrating inventory and purchase flows, release-friendly.'
    },
    impact: {
      es: [
        'menor fricción en captura de órdenes',
        'visibilidad clara de estados de pedido'
      ],
      en: [
        'reduced friction in order intake',
        'clearer visibility of order status'
      ]
    }
  },
  {
    slug: 'fullstack-labs-logistica',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'TMS EKA', en: 'EKA TMS' },
    domain: 'Logística',
    role: ['Arquitectura', 'Performance', 'Buenas prácticas'],
    frontend: ['React'],
    backend: ['Express.js', 'NestJS', 'Postgres'],
    infra: ['CI/CD', 'Caching', 'Observabilidad'],
    problem: {
      es: 'Construir un TMS robusto para EKA con visibilidad operativa, performance y espacio para releases seguros.',
      en: 'Build a robust TMS for EKA with operational visibility, performance, and room for safe releases.'
    },
    solution: {
      es: 'Frontend React con flujos de órdenes/tracking; backend Express/Nest sobre Postgres con caching selectivo y observabilidad para detectar cuellos.',
      en: 'React frontend for orders/tracking; Express/Nest backend on Postgres with selective caching and observability to catch bottlenecks.'
    },
    impact: {
      es: [
        'reducción de incidencias operativas',
        'releases frecuentes sin afectar operaciones'
      ],
      en: [
        'fewer operational incidents',
        'frequent releases without disrupting ops'
      ]
    }
  },
  {
    slug: 'fullstack-labs-glooko-mobile',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'Glooko Companion (Mobile)', en: 'Glooko Companion (Mobile)' },
    domain: 'Salud',
    role: ['Mobile', 'Arquitectura', 'Frontend'],
    frontend: ['React Native'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD', 'Feature flags'],
    problem: {
      es: 'Crear una app móvil whitelabel tipo clinical trial/medication companion para Glooko, preparada para múltiples marcas.',
      en: 'Create a whitelabel clinical trial / medication companion mobile app for Glooko, ready for multiple brands.'
    },
    solution: {
      es: 'Flujos de pacientes y adherencia en React Native con feature flags; servicios Node/Postgres y CI/CD para releases estables.',
      en: 'Patient and adherence flows in React Native with feature flags; Node/Postgres services and CI/CD for stable releases.'
    },
    impact: {
      es: [
        'aumento de adherencia reportada',
        'estabilidad en releases móviles',
        'reducción de incidencias en producción'
      ],
      en: [
        'improved reported adherence',
        'stable mobile releases',
        'fewer production incidents'
      ]
    }
  },
  {
    slug: 'fullstack-labs-glooko-admin',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'Glooko Admin', en: 'Glooko Admin' },
    domain: 'Salud',
    role: ['Frontend', 'Productividad', 'Arquitectura'],
    frontend: ['React'],
    backend: ['Node.js', 'Postgres'],
    infra: ['CI/CD'],
    problem: {
      es: 'Desarrollar un sitio administrativo para clinical trials y datos de Glooko con permisos y reporting claros.',
      en: 'Build an admin site for Glooko clinical trials and data with clear permissions and reporting.'
    },
    solution: {
      es: 'UI en React con módulos de gestión, dashboards y permisos; servicios Node/Postgres orquestando datos clínicos y flujos de revisión.',
      en: 'React UI with management modules, dashboards and permissions; Node/Postgres services orchestrating clinical data and review flows.'
    },
    impact: {
      es: [
        'mayor productividad del equipo clínico',
        'reducción de errores en captura de datos',
        'releases frecuentes sin degradar UX'
      ],
      en: [
        'higher productivity for clinical team',
        'fewer data capture errors',
        'frequent releases without UX degradation'
      ]
    }
  },
  {
    slug: 'fullstack-labs-cms-search',
    companyId: 'fullstack-labs',
    company: 'Fullstack Labs',
    title: { es: 'CMS & Search APIs', en: 'CMS & Search APIs' },
    domain: 'Plataforma / API',
    role: ['Backend', 'Arquitectura', 'Performance'],
    frontend: ['-'],
    backend: ['Express.js', 'GraphQL', 'TypeScript'],
    infra: ['CI/CD', 'Observabilidad', 'Caching'],
    problem: {
      es: 'Mantener y evolucionar el Content API y Search API consumidos por web y mobile, garantizando performance y estabilidad.',
      en: 'Maintain and evolve Content API and Search API consumed by web and mobile, ensuring performance and stability.'
    },
    solution: {
      es: 'Servicios Express/GraphQL en TypeScript con caching selectivo, endpoints versionados y observabilidad para equipos frontend/mobile.',
      en: 'Express/GraphQL services in TypeScript with selective caching, versioned endpoints, and observability for frontend/mobile teams.'
    },
    impact: {
      es: [
        'mejor tiempo de respuesta en búsquedas',
        'mayor estabilidad para lanzamientos multiequipo',
        'base lista para nuevas features de contenido'
      ],
      en: [
        'faster response time on searches',
        'more stability for multi-team launches',
        'foundation ready for new content features'
      ]
    }
  },
  {
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: { es: 'BeClose (Video chat)', en: 'BeClose (Video chat)' },
    domain: 'Comunicación',
    role: ['Mobile', 'Frontend'],
    frontend: ['React Native', 'WebRTC'],
    backend: ['Firebase'],
    infra: ['CI/CD'],
    problem: {
      es: 'Construir y evolucionar un MVP de video chat para conectar padres e hijos con buena calidad y baja fricción.',
      en: 'Build and evolve a video chat MVP to connect parents and kids with good quality and low friction.'
    },
    solution: {
      es: 'Transformé el MVP en producto estable con nuevas features; WebRTC para media, Firebase para señalización/mensajería y releases continuas en RN.',
      en: 'Turned the MVP into a stable product with new features; WebRTC for media, Firebase for signaling/messaging, and continuous RN releases.'
    },
    impact: {
      es: [
        'alta calidad de video en MVP',
        'menor fricción en onboarding',
        'estabilidad en sesiones de prueba'
      ],
      en: [
        'high video quality in MVP',
        'low friction onboarding',
        'stable test sessions'
      ]
    }
  },
  {
    slug: 'pluriza-logistica',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: { es: 'Veracruz Logística', en: 'Veracruz Logistics' },
    domain: 'Logística',
    role: ['Full-stack', 'DevOps', 'Liderazgo técnico'],
    frontend: ['Angular.js'],
    backend: ['Apollo GraphQL'],
    infra: ['AWS'],
    problem: {
      es: 'Construir Veracruz, software de gestión de carga y logística, coordinando un equipo de 3 personas.',
      en: 'Build Veracruz freight management software while coordinating a 3-person team.'
    },
    solution: {
      es: 'Angular.js + Apollo GraphQL, despliegues en AWS, pipelines y monitoreo; rol de DevOps y liderazgo técnico.',
      en: 'Angular.js + Apollo GraphQL, AWS deployments, pipelines and monitoring; DevOps and technical leadership role.'
    },
    impact: {
      es: [
        'mejora en visibilidad de carga',
        'reducción de tiempos de gestión',
        'despliegues más predecibles en AWS'
      ],
      en: [
        'improved freight visibility',
        'reduced management times',
        'more predictable AWS deployments'
      ]
    }
  },
  {
    slug: 'pluriza-ghost-management',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: { es: 'Ghost Management', en: 'Ghost Management' },
    domain: 'Operaciones',
    role: ['Frontend', 'Liderazgo'],
    frontend: ['Angular.js', 'Bootstrap'],
    backend: ['-'],
    infra: ['CI/CD'],
    problem: {
      es: 'Liderar Ghost Management, sistema de reservas, coordinando un equipo de 7 devs y un backlog activo.',
      en: 'Lead Ghost Management booking system, coordinating a 7-dev team and an active backlog.'
    },
    solution: {
      es: 'Angular.js + Bootstrap con flujos de reservas/admin; priorización de requerimientos, fixes y mentoring al equipo.',
      en: 'Angular.js + Bootstrap booking/admin flows; requirement prioritization, fixes, and mentoring for the team.'
    },
    impact: {
      es: [
        'mejora en gestión de reservas',
        'reducción de incidencias operativas',
        'entregas puntuales'
      ],
      en: [
        'improved booking management',
        'fewer operational issues',
        'on-time deliveries'
      ]
    }
  },
  {
    slug: 'idi-sed',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: { es: 'SED Evaluaciones', en: 'SED Evaluations' },
    domain: 'Educación / Evaluación',
    role: ['Frontend', 'Mantenimiento'],
    frontend: ['Ext JS', 'JavaScript'],
    backend: ['CodeIgniter', 'PHP'],
    infra: ['CI/CD'],
    problem: {
      es: 'Permitir que estudiantes, directivos y docentes evalúen instructores; mejorar estabilidad y features.',
      en: 'Enable students, headmasters, and teachers to assess instructors; improve stability and features.'
    },
    solution: {
      es: 'Mantenimiento y nuevas funciones en Ext JS/JavaScript sobre API CodeIgniter/PHP; fixes de bugs y mejoras UX.',
      en: 'Maintenance and new features in Ext JS/JavaScript on CodeIgniter/PHP API; bug fixes and UX improvements.'
    },
    impact: {
      es: [
        'reducción de bugs en evaluaciones',
        'mejoras en UX de formularios',
        'mayor adopción del sistema'
      ],
      en: [
        'fewer evaluation bugs',
        'improved form UX',
        'higher system adoption'
      ]
    }
  },
  {
    slug: 'idi-mangus',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: { es: 'Mangus Cursos', en: 'Mangus Courses' },
    domain: 'Educación',
    role: ['Mobile', 'Frontend'],
    frontend: ['PhoneGap', 'React'],
    backend: ['CodeIgniter'],
    infra: ['CI/CD'],
    problem: {
      es: 'Crear una plataforma de cursos en línea con presencia web y móvil.',
      en: 'Build an online courses platform with web and mobile presence.'
    },
    solution: {
      es: 'MVP móvil con PhoneGap y web app en React consumiendo API CodeIgniter; integración de contenidos y flujos de cursos.',
      en: 'PhoneGap mobile MVP and React web app consuming a CodeIgniter API; content integration and course flows.'
    },
    impact: {
      es: [
        'tiempo de salida al mercado reducido',
        'coherencia entre web y mobile',
        'estabilidad inicial del MVP'
      ],
      en: [
        'reduced time-to-market',
        'web/mobile consistency',
        'initial MVP stability'
      ]
    }
  },
  {
    slug: 'idi-cuc-movil',
    companyId: 'idi',
    company: 'Fundación IDI',
    title: { es: 'CUC Móvil', en: 'CUC Mobile' },
    domain: 'Educación / Campus',
    role: ['Mobile', 'Mantenimiento'],
    frontend: ['Java (Android)'],
    backend: ['CodeIgniter'],
    infra: ['CI/CD'],
    problem: {
      es: 'Actualizar app móvil de la universidad para notificaciones, guía de campus, notas y horarios.',
      en: 'Update the university mobile app for notifications, campus guidance, grades and schedules.'
    },
    solution: {
      es: 'Actualización de la app a Android 6.0; mantenimiento de integración con API CodeIgniter para datos académicos.',
      en: 'Updated the app to Android 6.0; maintained integration with CodeIgniter API for academic data.'
    },
    impact: {
      es: [
        'compatibilidad con versiones recientes de Android',
        'reducción de crashes/reportes',
        'mejor retención de usuarios'
      ],
      en: [
        'compatibility with newer Android versions',
        'fewer crashes/reports',
        'improved user retention'
      ]
    }
  }
];
