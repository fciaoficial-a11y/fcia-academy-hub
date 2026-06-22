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

      {/* PROVA DE VALOR + DIFERENCIAIS */}
      <section
        id="diferenciais"
        className="relative overflow-hidden border-b border-border bg-card/30"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
          <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Prova de valor
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Resultados que sustentam reputação de mercado
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Não falamos em promessas — falamos em números, método e impacto
              comprovado em quem já passou pela FCIA Academy.
            </p>
          </div>

          {/* Metrics row */}
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="group relative bg-background p-6 transition-colors hover:bg-card sm:p-8"
              >
                <div className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-primary to-foreground transition-all duration-500 group-hover:w-full" />
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </div>
                <div className="mt-3 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Bento grid — diferenciais + testimonial */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* Highlight card — large */}
            <article className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl border border-border bg-foreground p-8 text-background lg:col-span-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.35_0.1_265),transparent_60%)] opacity-70" />
              <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/10 backdrop-blur">
                  <GraduationCap className="h-6 w-6" />
                </span>

                <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.18em] text-background/60">
                  Metodologia FCIA
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Aprender, aplicar, decidir.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-background/75">
                  Cada módulo é construído em três camadas: fundamentação
                  conceitual, simulação de cenário real e entrega aplicada ao seu
                  negócio. Você sai com decisão, não com diploma.
                </p>

                <div className="mt-auto space-y-2.5 pt-8">
                  {[
                    "Cases de boards reais",
                    "Mentoria executiva 1:1",
                    "Laboratórios de decisão",
                    "Avaliação por entrega",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Differentiators — small cards */}
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold tracking-tight">
                        {d.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial + logos */}
          <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-background p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <figure className="relative">
              <div className="text-5xl leading-none text-foreground/15 sm:text-6xl">
                &ldquo;
              </div>
              <blockquote className="-mt-4 text-pretty text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
                A FCIA Academy mudou a forma como nossa diretoria toma decisão.
                Saímos de discussões circulares para um framework objetivo de
                priorização e execução.
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="h-11 w-11 rounded-full border border-border shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.12 265), oklch(0.45 0.1 265))",
                  }}
                />
                <div>
                  <div className="text-sm font-semibold">Helena Vasconcelos</div>
                  <div className="text-xs text-muted-foreground">
                    COO · Grupo industrial · ex-McKinsey
                  </div>
                </div>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-between gap-6 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Confiada por líderes de
              </p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-sm font-semibold tracking-tight text-muted-foreground/70">
                {["ITAÚ", "VALE", "AMBEV", "B3", "PETROBRAS", "NUBANK"].map(
                  (l) => (
                    <div
                      key={l}
                      className="text-center transition-colors hover:text-foreground"
                    >
                      {l}
                    </div>
                  ),
                )}
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Ver casos de impacto
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
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
