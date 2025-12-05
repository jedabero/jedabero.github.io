export type PlaygroundItem = {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  link: string;
  external?: boolean;
  tag?: string;
};

export const playgroundItems: PlaygroundItem[] = [
  {
    slug: 'pdf-util',
    title: { es: 'PDF Util', en: 'PDF Util' },
    description: {
      es: 'Combina múltiples documentos PDF en uno solo de forma rápida.',
      en: 'Merge multiple PDF documents into one quickly.'
    },
    link: '/pdf-util',
    tag: 'Demo'
  },
  {
    slug: 'debt-simulator',
    title: { es: 'Debt Simulator', en: 'Debt Simulator' },
    description: {
      es: 'Simula amortización y estrategias de pago de deudas.',
      en: 'Simulate amortization and debt payoff strategies.'
    },
    link: 'https://debt-simulator.jedabero.me',
    external: true,
    tag: 'Demo'
  }
];
