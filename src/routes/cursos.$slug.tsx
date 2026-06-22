import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Clock, GraduationCap, Layers, Sparkles, Users } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { getTrack, tracks } from "@/lib/catalog";

export const Route = createFileRoute("/cursos/$slug")({
  loader: ({ params }) => {
    const track = getTrack(params.slug);
    if (!track) throw notFound();
    return { track };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.track.title} — FCIA Academy` },
          { name: "description", content: loaderData.track.desc },
          { property: "og:title", content: loaderData.track.title },
          { property: "og:description", content: loaderData.track.desc },
        ]
      : [{ title: "Curso — FCIA Academy" }],
  }),
  notFoundComponent: () => (
    <Section>
      <h1 className="font-display text-4xl font-semibold">Curso não encontrado</h1>
      <Link to="/cursos" className="mt-6 inline-flex items-center gap-1 text-sm text-foreground hover:gap-2">
        Voltar ao catálogo <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Section>
  ),
  errorComponent: () => (
    <Section>
      <h1 className="font-display text-2xl">Algo deu errado ao carregar este curso.</h1>
    </Section>
  ),
  component: CourseDetail,
});

function CourseDetail() {
  const { track } = Route.useLoaderData();
  const Icon = track.icon;
  const related = tracks.filter((t) => t.slug !== track.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-faint opacity-50" />
        <div className="absolute -top-32 right-[-10%] h-[400px] w-[400px] rounded-full bg-primary/25 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <Link to="/cursos" className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
            ← Catálogo
          </Link>
          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow>{track.tag}</Eyebrow>
              <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                {track.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{track.desc}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/inscricao"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:-translate-y-0.5"
                >
                  Inscreva-se agora <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/turmas"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-surface"
                >
                  Ver turmas abertas
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background">
                <Icon className="h-5 w-5" />
              </span>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <Meta icon={Clock} label="Carga" value={track.hours} />
                <Meta icon={Layers} label="Módulos" value={String(track.modules)} />
                <Meta icon={GraduationCap} label="Nível" value={track.level} />
                <Meta icon={Users} label="Formato" value="Online ao vivo" />
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Section className="border-b border-border">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>O que você sai sabendo</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Resultados concretos, aplicáveis na sua semana de trabalho.
            </h2>
            <ul className="mt-8 space-y-4">
              {track.outcomes.map((o: string) => (
                <li key={o} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span className="text-base text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-border bg-surface p-7">
            <Eyebrow>Estrutura</Eyebrow>
            <ol className="mt-5 space-y-3 text-sm">
              {Array.from({ length: Math.min(track.modules, 6) }).map((_, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/90">Módulo {i + 1}</span>
                  <Sparkles className="ml-auto h-3.5 w-3.5 text-primary" />
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Trilhas relacionadas
          </h2>
          <Link to="/cursos" className="text-sm text-muted-foreground hover:text-foreground">
            Ver todas
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {related.map((t) => {
            const I = t.icon;
            return (
              <Link
                key={t.slug}
                to="/cursos/$slug"
                params={{ slug: t.slug }}
                className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:bg-surface"
              >
                <I className="h-5 w-5 text-foreground" />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{t.desc}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Testimonials />
      <FAQ />
    </>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </dt>
      <dd className="mt-1 font-display text-base font-semibold">{value}</dd>
    </div>
  );
}
