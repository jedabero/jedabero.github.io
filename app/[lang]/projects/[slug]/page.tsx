import { CompanyLogo } from '@/components/company-logo';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs } from '@/components/ui/tabs';
import { caseStudies } from '@/lib/data/case-studies';
import type { Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

type Params = { lang: Locale; slug: string };

export function generateStaticParams() {
  const locales: Locale[] = ['es', 'en'];
  return caseStudies.flatMap((item) => locales.map((lang) => ({ lang, slug: item.slug })));
}

export default function CaseStudyLangPage({ params }: { params: Params }) {
  if (params.lang !== 'es' && params.lang !== 'en') return notFound();

  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return notFound();

  const isEn = params.lang === 'en';
  const title = isEn ? study.title.en : study.title.es;
  const problem = isEn ? study.problem.en : study.problem.es;
  const solution = isEn ? study.solution.en : study.solution.es;
  const impact = isEn ? study.impact.en : study.impact.es;

  const tabs = [
    { id: 'context', label: isEn ? 'Context' : 'Contexto', content: problem },
    { id: 'solution', label: isEn ? 'Solution' : 'Solución', content: solution },
    {
      id: 'impact',
      label: isEn ? 'Impact' : 'Impacto',
      content: (
        <ul className="list-disc pl-4 space-y-1">
          {impact.map((item) => (
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
            <h1 className="text-3xl font-semibold font-display text-base-text">{title}</h1>
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
            <CardTitle>{isEn ? 'Details' : 'Detalles'}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs tabs={tabs} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
