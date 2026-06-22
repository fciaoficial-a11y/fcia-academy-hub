import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bot,
  Building2,
  CheckCircle2,
  Compass,
  GraduationCap,
  LineChart,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { tracks } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FCIA Academy — Tecnologia, IA e Negócios na prática" },
      {
        name: "description",
        content:
          "Plataforma de aprendizado em IA, tecnologia e novos negócios. Trilhas para pessoas e treinamentos corporativos para empresas.",
      },
      { property: "og:title", content: "FCIA Academy — Plataforma de Tecnologia e IA" },
      {
        property: "og:description",
        content:
          "Aprenda IA, tecnologia e negócios com aplicação real. Para pessoas, empreendedores e empresas.",
      },
    ],
  }),
  component: Index,
});

const metrics = [
  { value: "38k+", label: "Alunos ativos" },
  { value: "220+", label: "Empresas treinando times" },
  { value: "94%", label: "Aplicaram na primeira semana" },
  { value: "4.9", label: "Avaliação média" },
];

const differentials = [
  {
    icon: Zap,
    title: "Aprendizado aplicado, não teórico",
    desc: "Cada módulo termina com algo construído, automatizado ou entregue. Você aprende fazendo, e leva o resultado para o seu trabalho.",
  },
  {
    icon: Bot,
    title: "IA no centro da plataforma",
    desc: "Conteúdo, mentoria e prática integrados a agentes de IA que ajudam você a evoluir mais rápido em qualquer trilha.",
  },
  {
    icon: LineChart,
    title: "Curadoria orientada a mercado",
    desc: "Trilhas desenhadas com base no que empresas, recrutadores e o mercado realmente estão pedindo agora.",
  },
];

const journey = [
  { step: "01", icon: Compass, title: "Diagnóstico", desc: "Mapeamos seu momento, objetivo e nível para indicar a trilha ideal." },
  { step: "02", icon: GraduationCap, title: "Aprendizado guiado", desc: "Aulas curtas, projetos práticos e mentores ao vivo." },
  { step: "03", icon: Sparkles, title: "Aplicação real", desc: "Você aplica no trabalho, em ofertas e em projetos próprios." },
  { step: "04", icon: Rocket, title: "Resultado", desc: "Portfólio, certificação e novas oportunidades concretas." },
];

const logos = ["ITAÚ", "VALE", "AMBEV", "B3", "PETROBRAS", "NUBANK", "STONE", "C6 BANK"];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-faint opacity-60" aria-hidden />
        <div
          className="absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/30 blur-[140px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <Eyebrow>Plataforma · IA · Tecnologia · Negócios</Eyebrow>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
                Aprenda o que move o{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">próximo mercado</span>
                  <span className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-primary/70" aria-hidden />
                </span>
                .
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                IA aplicada, tecnologia moderna e novos modelos de negócio — em uma plataforma desenhada para pessoas, empreendedores e empresas que precisam avançar agora.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/trilhas"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Explorar trilhas
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/empresas"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Sou empresa
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground" /> Mentoria ao vivo
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground" /> Certificado verificável
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-foreground" /> Acesso vitalício
                </span>
              </div>
            </div>

            {/* Visual mock */}
            <div className="relative">
              <div className="relative rounded-3xl border border-border bg-card p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.18)]">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    /dashboard
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  <ProgressRow label="IA Aplicada · Módulo 4" value={72} />
                  <ProgressRow label="Agentes Autônomos" value={48} />
                  <ProgressRow label="Renda com IA · Cap 2" value={91} />
                </div>
                <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Bot className="h-3.5 w-3.5 text-primary" />
                    <span className="font-mono uppercase tracking-widest">AI mentor</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    Próximo passo: publique seu primeiro agente e compartilhe no portfólio.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-foreground p-4 text-background shadow-2xl animate-float-slow sm:block">
                <div className="text-[10px] font-mono uppercase tracking-widest text-background/60">
                  Conquista
                </div>
                <div className="mt-1 text-sm font-semibold">+1 projeto publicado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="border-b border-border bg-surface py-10">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Times de tecnologia, finanças e indústria que treinam com a FCIA
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((l) => (
              <span
                key={l}
                className="font-display text-sm font-semibold tracking-[0.18em] text-muted-foreground/80"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <Section className="border-b border-border">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background p-8">
              <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {m.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* TRILHAS */}
      <Section className="border-b border-border">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Trilhas"
            title="Conteúdo desenhado para o próximo mercado"
            description="Da inteligência artificial à carreira em tecnologia. Escolha a trilha que conecta o seu objetivo ao que o mercado busca agora."
          />
          <Link
            to="/trilhas"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2"
          >
            Ver todas as trilhas <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.slug}
                to="/cursos/$slug"
                params={{ slug: t.slug }}
                className="group relative flex flex-col bg-background p-7 transition-colors hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{t.level}</span>
                  <span>{t.hours}</span>
                </div>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 -translate-y-1 translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section className="border-b border-border bg-surface">
        <SectionHeading
          eyebrow="Por que FCIA"
          title="Um sistema construído para fazer você aplicar"
          description="Não é mais um catálogo de cursos. É uma plataforma de evolução, com IA, mentoria e produto desenhado para você não parar."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group relative rounded-2xl border border-border bg-background p-7 transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* EMPRESAS */}
      <Section className="border-b border-border">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>FCIA / Empresas</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Treinamento corporativo em IA e tecnologia, de ponta a ponta.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Plataforma white-label, trilhas customizadas por área, mentoria dedicada e relatórios de evolução. Estruturado para PMEs e grandes empresas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/empresas"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Soluções para empresas
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/empresas"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                Falar com vendas
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-border bg-foreground p-8 text-background">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-background/60">
                  <Building2 className="h-3.5 w-3.5" />
                  FCIA · Workspace
                </span>
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Live
                </span>
              </div>
              <div className="mt-8 grid gap-3 text-sm">
                <Row label="Times ativos" value="14" />
                <Row label="Trilhas em andamento" value="32" />
                <Row label="Conclusão média" value="87%" />
                <Row label="NPS dos times" value="72" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROVA SOCIAL */}
      <Testimonials />

      {/* JORNADA + CTA */}
      <Section>
        <SectionHeading
          eyebrow="Jornada"
          title="Do diagnóstico ao resultado."
          description="Uma estrutura simples e contínua. Você sempre sabe onde está, para onde vai e qual o próximo passo."
        />
        <div className="relative mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {journey.map((j) => {
            const Icon = j.icon;
            return (
              <div key={j.step} className="bg-background p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {j.step}
                  </span>
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                  {j.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background sm:p-14">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
            aria-hidden
          />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Eyebrow>Próxima turma aberta</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Comece sua trilha. <span className="text-primary">Avance de verdade.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base text-background/70">
                Inscrições abertas para a próxima turma. Vagas limitadas, mentoria ao vivo, acesso vitalício ao conteúdo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/inscricao"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Quero me inscrever
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/turmas"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3 text-sm font-medium text-background hover:bg-background/10"
                >
                  Ver próximas turmas
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-background/15 bg-background/5 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-background/60">
                <span>Turma IA · v4</span>
                <span>82% preenchida</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-background/10">
                <div className="h-full w-[82%] rounded-full bg-primary" />
              </div>
              <ul className="mt-6 space-y-2 text-sm text-background/80">
                <li className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-primary" /> Início 10 Jul · 2026</li>
                <li className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-primary" /> 8 semanas · online ao vivo</li>
                <li className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-primary" /> Mentoria 1:1 inclusa</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}

function ProgressRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono">{value}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
        <div className="h-full rounded-full bg-foreground" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-background/10 pb-3 last:border-0">
      <span className="text-background/60">{label}</span>
      <span className="font-display text-xl font-semibold">{value}</span>
    </div>
  );
}
