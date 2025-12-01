import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-base-muted">
          <span className="h-2 w-2 rounded-full bg-accent-mint" aria-hidden />
          Disponible para colaborar en productos web y móviles
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold font-display text-base-text">
          Full Stack Engineer enfocado en React, React Native, Node/Nest/Express y PostgreSQL.
        </h1>
        <p className="text-lg text-base-muted max-w-3xl">
          Diseño arquitecturas ligeras, optimizo performance y acelero equipos con buenas prácticas. Casos de estudio
          privados con foco en logística, salud, medios y educación.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#contact" className="inline-flex">
            <Button size="lg">Hablemos</Button>
          </Link>
          <Link href="/cv.pdf" className="inline-flex">
            <Button variant="outline" size="lg">
              Descargar CV
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
