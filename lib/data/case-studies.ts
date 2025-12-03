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
      es: 'Crear un portal B2B para que Chill-n-Go gestione y procese pedidos de bolsas de vino premium.',
      en: 'Build a B2B portal for Chill-n-Go to manage and process premium wine bag orders.'
    },
    solution: {
      es: 'SPA en React con formularios de pedido y estados de orden; backend Express/Postgres para orquestar inventario y flujos de compra.',
      en: 'React SPA with order forms and status tracking; Express/Postgres backend orchestrating inventory and purchase flows.'
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
      es: 'Construir un TMS robusto para un proveedor líder de soluciones logísticas (EKA) con visibilidad y control operativos.',
      en: 'Build a robust TMS for a leading logistics solutions provider (EKA) with operational visibility and control.'
    },
    solution: {
      es: 'Frontend React con flujos de órdenes y tracking; backend Express/Nest sobre Postgres, caching selectivo y monitoreo para cuellos de botella.',
      en: 'React frontend for orders and tracking; Express/Nest backend on Postgres with selective caching and monitoring for bottlenecks.'
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
      es: 'Crear una app móvil whitelabel tipo clinical trial/medication companion para Glooko.',
      en: 'Create a whitelabel clinical trial / medication companion mobile app for Glooko.'
    },
    solution: {
      es: 'Implementación de flujos de pacientes y adherencia en React Native, con servicios Node/Postgres y feature flags.',
      en: 'Implemented patient and adherence flows in React Native, backed by Node/Postgres services and feature flags.'
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
      es: 'Desarrollar un sitio administrativo para gestionar clinical trials y datos de Glooko.',
      en: 'Develop an admin site to manage clinical trials and data for Glooko.'
    },
    solution: {
      es: 'UI en React con módulos de gestión, dashboards y permisos; servicios Node/Postgres para orquestar datos clínicos.',
      en: 'React UI with management modules, dashboards and permissions; Node/Postgres services orchestrating clinical data.'
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
    slug: 'pluriza-comunicacion',
    companyId: 'pluriza',
    company: 'Pluriza',
    title: { es: 'Video Chat Familiar', en: 'Family Video Chat' },
    domain: 'Comunicación',
    role: ['Mobile', 'Frontend'],
    frontend: ['React Native', 'WebRTC'],
    backend: ['Firebase'],
    infra: ['CI/CD'],
    problem: {
      es: 'Construir y evolucionar un MVP de video chat para acercar padres e hijos.',
      en: 'Build and evolve a video chat MVP to bring parents and kids closer.'
    },
    solution: {
      es: 'Transformación del MVP en un producto estable añadiendo features y estabilidad con React Native, WebRTC y Firebase para señalización/mensajería.',
      en: 'Transformed the MVP into a stable product, adding features and stability with React Native, WebRTC, and Firebase for signaling/messaging.'
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
      es: 'Gestionar carga y logística con coordinación de equipo y operaciones en un equipo de 3 personas.',
      en: 'Manage freight and logistics with team and operations coordination in a 3-person team.'
    },
    solution: {
      es: 'App Angular.js con backend Apollo GraphQL, despliegues en AWS y DevOps liderando un equipo pequeño.',
      en: 'Angular.js app with Apollo GraphQL backend, AWS deployments, and DevOps while leading a small team.'
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
      es: 'Liderar el desarrollo de un sistema de gestión de reservas con equipo de 7 devs.',
      en: 'Lead development of a booking management system with a 7-dev team.'
    },
    solution: {
      es: 'App Angular.js + Bootstrap con flujos de reservas/admin, guiando el equipo y abordando bugs/nuevos requerimientos.',
      en: 'Angular.js + Bootstrap app with booking/admin flows, guiding the team and addressing bugs/new requirements.'
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
