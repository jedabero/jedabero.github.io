import { CompanyLogo } from '@/components/company-logo';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { caseStudies } from '@/lib/data/case-studies';
import { notFound } from 'next/navigation';

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return notFound();

  const tabs = [
    { id: 'context', label: 'Contexto', content: study.problem },
    { id: 'solution', label: 'Solución', content: study.solution },
    {
      id: 'impact',
      label: 'Impacto',
      content: (
        <ul className="list-disc pl-4 space-y-1">
          {study.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    }
  ];

  return (
    <main className="min-h-screen py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="flex items-center gap-3">
          <CompanyLogo companyId={study.companyId} size={40} />
          <div>
            <p className="text-sm text-base-muted uppercase tracking-[0.2em]">{study.company}</p>
            <h1 className="text-3xl font-semibold font-display text-base-text">{study.title}</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="blue">{study.domain}</Badge>
          {study.frontend.map((item) => (
            <Badge key={item} variant="mint">
              Frontend: {item}
            </Badge>
          ))}
          {study.backend.map((item) => (
            <Badge key={item} variant="mint">
              Backend: {item}
            </Badge>
          ))}
          {study.infra.map((item) => (
            <Badge key={item} variant="muted">
              {item}
            </Badge>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Detalles</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs tabs={tabs} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
