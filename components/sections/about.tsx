import { Badge } from '@/components/ui/badge';
import { getExperienceYears } from '@/lib/data/experience';

const coreStack = ['React', 'React Native', 'Node.js', 'NestJS', 'Express', 'PostgreSQL', 'GraphQL'];

export function About() {
  const years = getExperienceYears();
  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-base-surface/40 to-transparent">
      <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-base-muted">Sobre mí</p>
          <h2 className="text-3xl font-semibold text-base-text font-display">Hola, soy Jedabero</h2>
          <p className="text-base text-base-muted">
            Ingeniero de Sistemas con {years}+ años construyendo productos web y móviles. Me enfoco en arquitecturas
            ligeras, DX y performance en React/React Native con backends en Express, Next.js o NestJS sobre PostgreSQL.
          </p>
          <p className="text-base text-base-muted">
            Trabajo con equipos distribuidos para entregar features sostenibles, con medición continua y buenas
            prácticas listas para escalar.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {coreStack.map((item) => (
            <Badge key={item} variant={item === 'PostgreSQL' ? 'blue' : 'mint'}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
