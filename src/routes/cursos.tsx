import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { tracks } from "@/lib/catalog";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos — FCIA Academy" },
      { name: "description", content: "Catálogo completo de cursos em IA, tecnologia, negócios e carreira." },
      { property: "og:title", content: "Catálogo de Cursos FCIA" },
      { property: "og:description", content: "Explore o catálogo da FCIA Academy." },
    ],
  }),
  component: CursosPage,
});

function CursosPage() {
  return (
    <>
      <Section className="border-b border-border">
        <SectionHeading
          eyebrow="Catálogo"
          title="Todos os cursos da plataforma."
          description="Filtre por interesse, nível ou área. Conteúdo atualizado constantemente conforme o mercado evolui."
        />
        <div className="mt-10 flex items-center gap-3 rounded-full border border-border bg-background px-5 py-3 shadow-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar cursos, temas ou ferramentas…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
            ⌘ K
          </span>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.slug}
                to="/cursos/$slug"
                params={{ slug: t.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.2)]"
              >
                <div className="relative h-32 overflow-hidden border-b border-border bg-surface">
                  <div className="absolute inset-0 grid-faint opacity-50" />
                  <Icon className="absolute right-5 top-5 h-12 w-12 text-foreground/90 transition-transform group-hover:scale-110" />
                  <span className="absolute bottom-3 left-5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">{t.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{t.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-5 text-xs text-muted-foreground">
                    <span>{t.hours} · {t.modules} módulos</span>
                    <span className="inline-flex items-center gap-1 text-foreground">
                      Detalhes <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
