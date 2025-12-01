import { DiagramArrow, DiagramBlock } from '@/lib/diagrams/blocks';

const diagrams = [
  {
    title: 'Web + Mobile',
    flow: ['Client (React/React Native)', 'BFF (Next.js/NestJS/Express)', 'PostgreSQL', 'Redis/S3'],
    accent: ['mint', 'blue', 'mint', 'blue'] as const
  },
  {
    title: 'API GraphQL',
    flow: ['Clients', 'Node.js + GraphQL', 'Data Layer', 'Observabilidad'],
    accent: ['blue', 'mint', 'blue', 'mint'] as const
  }
];

export function Architecture() {
  return (
    <section id="architecture" className="py-16 md:py-20 bg-base-surface/30">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-base-muted">Arquitectura</p>
          <h2 className="text-3xl font-semibold text-base-text font-display">Diagramas ligeros</h2>
          <p className="text-base text-base-muted max-w-3xl">
            Referencias rápidas de cómo estructuro productos: BFFs en Node/GraphQL o Next.js, data en Postgres y
            caching donde aporta más. Sin assets sensibles; solo bloques conceptuales.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {diagrams.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-base-bg/60 p-5">
              <h3 className="text-xl font-semibold text-base-text font-display mb-4">{item.title}</h3>
              <div className="flex flex-col items-center gap-2">
                {item.flow.map((label, idx) => (
                  <div key={`v-${label}`} className="flex flex-col items-center gap-2">
                    <DiagramBlock label={label} accent={item.accent[idx] === 'blue' ? 'blue' : 'mint'} />
                    {idx < item.flow.length - 1 && (
                      <DiagramArrow from={label} to={item.flow[idx + 1]} orientation="vertical" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
