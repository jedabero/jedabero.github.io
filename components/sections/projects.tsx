import { CompanyLogo } from '@/components/company-logo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/lib/data/projects';
import Link from 'next/link';

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-base-muted">Proyectos</p>
          <h2 className="text-3xl font-semibold text-base-text font-display">Casos de estudio privados</h2>
          <p className="text-base text-base-muted max-w-3xl">
            Trabajo en logística, salud, medios, educación y operaciones internas. Los detalles viven en casos de
            estudio sin enlaces públicos; usa los tabs para ver frontend, backend e impacto.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col gap-4">
              <CardHeader className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CompanyLogo companyId={project.companyId} size={32} />
                  <div>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{project.company}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="muted">{project.type}</Badge>
                  <Badge variant="blue">{project.domain}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <p className="text-base text-base-muted">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="mint">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="pt-2">
                  <Link href={`/projects/${project.slug}`} className="inline-flex">
                    <Button variant="ghost" size="md">
                      Ver caso de estudio
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
