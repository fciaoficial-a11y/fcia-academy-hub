import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Compass,
  GraduationCap,
  LineChart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FCIA Academy — Educação Executiva de Alto Impacto" },
      {
        name: "description",
        content:
          "Plataforma premium de formação executiva da FCIA. Trilhas avançadas em liderança, estratégia, finanças e governança para líderes que decidem.",
      },
      { property: "og:title", content: "FCIA Academy — Educação Executiva" },
      {
        property: "og:description",
        content:
          "Programas executivos avançados para líderes e tomadores de decisão. Rigor, método e resultado.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const metrics = [
  { value: "12k+", label: "Executivos formados" },
  { value: "97%", label: "Satisfação dos alunos" },
  { value: "180+", label: "Empresas parceiras" },
  { value: "4.9/5", label: "Avaliação média" },
];

const tracks = [
  {
    icon: Briefcase,
    tag: "Liderança",
    title: "Liderança Estratégica Avançada",
    desc: "Decisão sob ambiguidade, alta performance de times e influência executiva.",
    level: "C-Level",
  },
  {
    icon: LineChart,
    tag: "Finanças",
    title: "Finanças Corporativas para Executivos",
    desc: "Valuation, alocação de capital e leitura financeira para decisões de board.",
    level: "Avançado",
  },
  {
    icon: Compass,
    tag: "Estratégia",
    title: "Estratégia & Transformação",
    desc: "Modelos de negócio, vantagens competitivas e execução em escala.",
    level: "Avançado",
  },
  {
    icon: BarChart3,
    tag: "Dados",
    title: "Decisões Baseadas em Dados",
    desc: "Analytics executivo, KPIs estratégicos e cultura data-driven.",
    level: "Intermediário",
  },
  {
    icon: Award,
    tag: "Governança",
    title: "Governança & Conselhos",
    desc: "Práticas de board, compliance e responsabilidade fiduciária moderna.",
    level: "C-Level",
  },
  {
    icon: Sparkles,
    tag: "Inovação",
    title: "Inovação e Novos Mercados",
    desc: "Exploração de oportunidades, novos modelos e crescimento sustentável.",
    level: "Avançado",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Currículo orientado a resultado",
    desc: "Cada trilha entrega entregáveis aplicáveis ao seu contexto real de negócio.",
  },
  {
    icon: Users,
    title: "Mentores que executam",
    desc: "Professores são líderes em atividade — não apenas teoria, mas prática viva.",
  },
  {
    icon: GraduationCap,
    title: "Metodologia executiva",
    desc: "Casos, simulações e laboratórios desenhados para o ritmo de quem decide.",
  },
  {
    icon: BookOpen,
    title: "Conteúdo vivo",
    desc: "Atualizações contínuas acompanhando o estado da arte do mercado global.",
  },
];

const journey = [
  {
    step: "01",
    title: "Diagnóstico executivo",
    desc: "Mapeamos seu momento de carreira e objetivos estratégicos.",
  },
  {
    step: "02",
    title: "Trilha personalizada",
    desc: "Combinação curada de programas, mentorias e laboratórios práticos.",
  },
  {
    step: "03",
    title: "Execução guiada",
    desc: "Aplicação em projetos reais, com acompanhamento e feedback estruturado.",
  },
  {
    step: "04",
    title: "Resultado mensurável",
    desc: "Evolução comprovada em decisão, liderança e impacto no negócio.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background font-bold tracking-tight">
              F
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">FCIA Academy</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Executive Education
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#programas" className="transition-colors hover:text-foreground">Programas</a>
            <a href="#diferenciais" className="transition-colors hover:text-foreground">Diferenciais</a>
            <a href="#jornada" className="transition-colors hover:text-foreground">Jornada</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent sm:inline-flex">
              Entrar
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              Candidatar-se
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background layers */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_-10%,oklch(0.82_0.07_265_/_0.45),transparent)] dark:bg-[radial-gradient(ellipse_70%_55%_at_20%_-10%,oklch(0.45_0.12_265_/_0.5),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_90%_30%,oklch(0.85_0.06_30_/_0.3),transparent)] dark:bg-[radial-gradient(ellipse_55%_50%_at_90%_30%,oklch(0.4_0.1_30_/_0.35),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.09]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
            {/* LEFT — copy */}
            <div className="animate-fade-in">
              {/* eyebrow */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 py-1.5 pl-1.5 pr-4 text-xs font-medium shadow-sm backdrop-blur">
                <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2 py-0.5 text-[10px] uppercase tracking-wider text-background">
                  Novo
                </span>
                <span className="text-muted-foreground">
                  Turma de inverno 2026 — inscrições abertas
                </span>
              </div>

              {/* headline */}
              <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[5rem]">
                Liderança que
                <span className="relative mx-3 inline-block italic">
                  <span className="bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground bg-clip-text font-serif text-transparent">
                    decide
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 h-2 w-full text-primary/60"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M0,4 Q25,0 50,4 T100,4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                não se improvisa.
              </h1>

              {/* subheadline */}
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                A <span className="font-medium text-foreground">FCIA Academy</span> é a
                plataforma de educação executiva avançada para quem opera no topo —
                trilhas em estratégia, finanças, governança e liderança com método,
                rigor e resultado mensurável.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-foreground px-7 py-3.5 text-sm font-semibold text-background shadow-[0_10px_40px_-10px_oklch(0.2_0.04_265_/_0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_oklch(0.2_0.04_265_/_0.7)]">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">Explorar programas</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="group inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary">
                  <span className="relative">
                    Falar com admissões
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* trust strip */}
              <div className="mt-12 flex items-center gap-5 border-t border-border pt-6">
                <div className="flex -space-x-2">
                  {[
                    "oklch(0.7_0.12_265)",
                    "oklch(0.65_0.14_30)",
                    "oklch(0.7_0.1_150)",
                    "oklch(0.6_0.13_320)",
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background shadow-sm"
                      style={{ background: `linear-gradient(135deg, ${c}, oklch(0.4 0.08 265))` }}
                    />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">
                  <div className="font-semibold text-foreground">+12.000 executivos</div>
                  <div>de empresas líderes já formados</div>
                </div>
              </div>
            </div>

            {/* RIGHT — visual stack */}
            <div className="relative hidden h-[520px] lg:block">
              {/* glow */}
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-3xl" />

              {/* Main card — program */}
              <div className="absolute right-0 top-0 w-[88%] rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-foreground/10 backdrop-blur transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    C-Level
                  </span>
                </div>
                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Programa em destaque
                </p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
                  Liderança Estratégica Avançada
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  12 semanas · 48h ao vivo · Mentoria 1:1
                </p>
                <div className="mt-6 space-y-2.5">
                  {["Decisão sob ambiguidade", "Influência executiva", "Times de alta performance"].map(
                    (m) => (
                      <div key={m} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span className="text-foreground">{m}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Próxima turma
                    </div>
                    <div className="text-sm font-semibold">Jun · 2026</div>
                  </div>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Ver detalhes <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating metric — progress */}
              <div className="absolute -left-2 top-44 w-60 rounded-xl border border-border bg-card/95 p-4 shadow-xl shadow-foreground/10 backdrop-blur-xl animate-fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <LineChart className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium">Sua evolução</span>
                  </div>
                  <span className="text-xs font-bold text-primary">+38%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-foreground" />
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Trilha executiva · 72% concluída
                </p>
              </div>

              {/* Floating badge — certified */}
              <div className="absolute -right-2 bottom-8 flex w-56 items-center gap-3 rounded-xl border border-border bg-card/95 p-3.5 shadow-xl shadow-foreground/10 backdrop-blur-xl">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <Award className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold leading-tight">
                    Certificação FCIA
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    Reconhecida pelo mercado
                  </div>
                </div>
              </div>

              {/* Tiny floating dot */}
              <div className="absolute left-12 bottom-20 flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-[11px] shadow-lg backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-medium">324 alunos online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="text-center md:text-left">
                <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {m.value}
                </div>
                <div className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="programas" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Trilhas executivas
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Programas avançados para acelerar sua liderança
              </h2>
              <p className="mt-3 text-muted-foreground">
                Currículos curados por especialistas em atuação no mercado, organizados
                em trilhas modulares de progressão real.
              </p>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Ver todos os programas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => {
              const Icon = t.icon;
              return (
                <article
                  key={t.title}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-background transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {t.level}
                    </span>
                  </div>

                  <p className="relative mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {t.tag}
                  </p>
                  <h3 className="relative mt-2 text-lg font-semibold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>

                  <div className="relative mt-6 flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Conhecer programa
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="relative border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Por que FCIA
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Uma plataforma desenhada para o ritmo de quem lidera.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Combinamos rigor acadêmico, prática executiva e acompanhamento
                individual para entregar evolução real — não apenas conteúdo.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent">
                Conhecer a metodologia
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold tracking-tight">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* JORNADA */}
      <section id="jornada" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Jornada do aluno
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Do diagnóstico ao resultado mensurável
            </h2>
            <p className="mt-3 text-muted-foreground">
              Um percurso estruturado em quatro estágios para garantir aprendizado
              aplicado e evolução verificável.
            </p>
          </div>

          <div className="relative mt-16">
            {/* connecting line */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-4">
              {journey.map((j, i) => (
                <div
                  key={j.step}
                  className="relative flex flex-col items-start"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold tracking-tight shadow-sm">
                    {j.step}
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">
                    {j.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {j.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,oklch(0.85_0.05_265_/_0.3),transparent)] dark:bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,oklch(0.4_0.08_265_/_0.35),transparent)]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-10 shadow-xl sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Pronto para liderar o próximo capítulo?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
                Inscreva-se no processo seletivo e dê o próximo passo na sua jornada
                executiva com a FCIA Academy.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                  Iniciar candidatura
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent">
                  Baixar catálogo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background font-bold">
                F
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-semibold">FCIA Academy</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Executive Education
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span>© {new Date().getFullYear()} FCIA Academy</span>
              <a href="#" className="hover:text-foreground">Termos</a>
              <a href="#" className="hover:text-foreground">Privacidade</a>
              <a href="#" className="hover:text-foreground">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
