import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  DollarSign,
  GraduationCap,
  LineChart,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FCIA Academy — Tecnologia, IA e Negócios na Prática" },
      {
        name: "description",
        content:
          "Aprenda tecnologia, inteligência artificial e habilidades de negócio com aplicação real. Trilhas para pessoas e treinamentos corporativos para empresas.",
      },
      { property: "og:title", content: "FCIA Academy — Tecnologia e IA aplicadas" },
      {
        property: "og:description",
        content:
          "Plataforma moderna de aprendizado em IA, tecnologia e negócios. Para profissionais, empreendedores e empresas que querem evoluir.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const metrics = [
  { value: "38k+", label: "Alunos ativos na plataforma" },
  { value: "+220", label: "Empresas treinando times" },
  { value: "94%", label: "Aplicaram o que aprenderam" },
  { value: "4.9/5", label: "Avaliação média dos cursos" },
];

const tracks = [
  {
    icon: Bot,
    tag: "Inteligência Artificial",
    title: "IA Aplicada ao Trabalho",
    desc: "Domine ChatGPT, agentes de IA, automações e prompts avançados para produtividade real no dia a dia.",
    level: "Iniciante → Avançado",
    hours: "42h",
  },
  {
    icon: Code2,
    tag: "Tecnologia",
    title: "Desenvolvimento Moderno",
    desc: "Aprenda a construir produtos digitais com as stacks mais valorizadas do mercado e ship rápido.",
    level: "Do zero ao profissional",
    hours: "120h",
  },
  {
    icon: Rocket,
    tag: "Negócios",
    title: "Empreendedorismo Digital",
    desc: "Valide, lance e escale um negócio digital usando IA, automações e estratégias modernas de aquisição.",
    level: "Prática guiada",
    hours: "36h",
  },
  {
    icon: DollarSign,
    tag: "Renda",
    title: "Renda com IA e Freelas",
    desc: "Monte serviços, ofertas e produtos digitais usando IA para gerar renda extra ou viver disso.",
    level: "Aplicação imediata",
    hours: "28h",
  },
  {
    icon: TrendingUp,
    tag: "Carreira",
    title: "Profissional do Futuro",
    desc: "Reposicione sua carreira com habilidades em dados, IA e novas tecnologias mais demandadas.",
    level: "Trilha guiada",
    hours: "54h",
  },
  {
    icon: Brain,
    tag: "Inovação",
    title: "Mentalidade de Inovação",
    desc: "Pense como produto, decida com dados e aplique frameworks modernos para resolver problemas reais.",
    level: "Para líderes e times",
    hours: "24h",
  },
];

const corporateBenefits = [
  {
    icon: Building2,
    title: "Plataforma white-label para o time",
    desc: "Ambiente dedicado com a identidade da sua empresa, gestão de turmas e relatórios de progresso.",
  },
  {
    icon: BarChart3,
    title: "Trilhas customizadas por área",
    desc: "Conteúdo desenhado para Marketing, Comercial, Operações, Produto, RH e Tecnologia.",
  },
  {
    icon: Users,
    title: "Mentoria e suporte dedicado",
    desc: "Mentores especialistas acompanham o time com sessões ao vivo e suporte assíncrono.",
  },
  {
    icon: Award,
    title: "Certificação reconhecida",
    desc: "Certificados verificáveis ao final de cada trilha, alinhados às competências do mercado.",
  },
];

const practicalBenefits = [
  {
    icon: Zap,
    title: "Aplicação na primeira semana",
    desc: "Você sai de cada módulo com algo construído, automatizado ou entregue. Nada de teoria solta.",
  },
  {
    icon: DollarSign,
    title: "Caminhos reais de renda",
    desc: "Ofertas, freelas, produtos digitais e serviços com IA. Mostramos o como, não só o porquê.",
  },
  {
    icon: Briefcase,
    title: "Portfólio que abre portas",
    desc: "Projetos guiados que viram cases reais para entrevistas, propostas comerciais e clientes.",
  },
  {
    icon: Target,
    title: "Mentoria orientada a resultado",
    desc: "Acompanhamento focado no seu objetivo: nova vaga, primeiro cliente, escalar o negócio.",
  },
];

const journey = [
  {
    icon: Compass,
    step: "01",
    title: "Diagnóstico",
    desc: "Mapeamos seu momento, objetivo e nível para recomendar a trilha ideal.",
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "Aprendizado guiado",
    desc: "Aulas curtas, projetos práticos e mentores acompanhando sua evolução.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Aplicação real",
    desc: "Você implementa em projetos, no trabalho ou em ofertas de renda.",
  },
  {
    icon: Award,
    step: "04",
    title: "Resultado",
    desc: "Certificação, portfólio e novas oportunidades de carreira ou negócio.",
  },
];

const trustLogos = ["ITAÚ", "VALE", "AMBEV", "B3", "PETROBRAS", "NUBANK"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span>FCIA Academy</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#trilhas" className="transition-colors hover:text-foreground">Trilhas</a>
            <a href="#empresas" className="transition-colors hover:text-foreground">Para empresas</a>
            <a href="#beneficios" className="transition-colors hover:text-foreground">Benefícios</a>
            <a href="#jornada" className="transition-colors hover:text-foreground">Como funciona</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Entrar
            </Link>
            <a
              href="#trilhas"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Começar agora <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 20%, oklch(0.65 0.2 270 / 0.25), transparent 70%), radial-gradient(50% 40% at 85% 15%, oklch(0.7 0.18 200 / 0.22), transparent 70%), radial-gradient(60% 60% at 50% 100%, oklch(0.68 0.2 320 / 0.18), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Nova era de aprendizado em IA e tecnologia
            </div>

            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Domine{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-foreground bg-clip-text text-transparent">
                IA, tecnologia
              </span>{" "}
              e construa o seu próximo passo.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Cursos práticos para pessoas que querem evoluir e treinamentos
              corporativos para empresas que querem times preparados para o futuro.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#trilhas"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background shadow-lg shadow-foreground/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explorar cursos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#empresas"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-accent"
              >
                <Building2 className="h-4 w-4" />
                Soluções para empresas
              </a>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border/40 pt-6">
              <div>
                <div className="text-2xl font-semibold tracking-tight">38k+</div>
                <div className="text-xs text-muted-foreground">alunos</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">220+</div>
                <div className="text-xs text-muted-foreground">empresas</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">4.9★</div>
                <div className="text-xs text-muted-foreground">avaliação</div>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent blur-2xl" />
              <div className="relative h-full rounded-3xl border border-border/60 bg-card/60 p-6 shadow-2xl backdrop-blur-xl">
                {/* Card top */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Sessão ao vivo · IA aplicada
                  </div>
                  <div>00:42:18</div>
                </div>

                <div className="mt-5 rounded-2xl border border-border/60 bg-background/60 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Agente FCIA</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Recomendo iniciar pela trilha de <span className="text-foreground">IA Aplicada</span> e
                        seguir para Automações.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { label: "IA Aplicada", pct: 78, color: "from-primary to-primary/50" },
                    { label: "Automações", pct: 46, color: "from-foreground to-foreground/40" },
                    { label: "Produto Digital", pct: 22, color: "from-primary/70 to-primary/30" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{row.label}</span>
                        <span className="font-medium">{row.pct}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-border/60">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${row.color}`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                    <div className="text-xs text-muted-foreground">Próxima aula</div>
                    <div className="mt-1 text-sm font-medium">Agentes autônomos</div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/60 p-4">
                    <div className="text-xs text-muted-foreground">Mentor</div>
                    <div className="mt-1 text-sm font-medium">Helena V.</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl border border-border/60 bg-foreground/5 p-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Streak de 14 dias
                  </div>
                  <div className="font-medium">+320 XP hoje</div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/3 hidden rounded-2xl border border-border/60 bg-card/90 p-3 shadow-xl backdrop-blur xl:block">
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-500">
                    <TrendingUp className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-medium">+R$ 4.2k</div>
                    <div className="text-muted-foreground">primeiro freela</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-10 hidden rounded-2xl border border-border/60 bg-card/90 p-3 shadow-xl backdrop-blur xl:block">
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Award className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="font-medium">Certificação concluída</div>
                    <div className="text-muted-foreground">IA Aplicada · v3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / METRICS */}
      <section className="border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Times de alta performance que confiam na FCIA
          </div>
          <div className="mt-6 grid grid-cols-3 items-center gap-x-8 gap-y-6 md:grid-cols-6">
            {trustLogos.map((l) => (
              <div
                key={l}
                className="text-center text-sm font-semibold tracking-[0.18em] text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {l}
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-background p-6 md:p-8">
                <div className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section id="trilhas" className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                <BookOpenIcon /> Trilhas para indivíduos
              </div>
              <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Aprenda o que o mercado realmente paga em 2026.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Trilhas curtas, práticas e atualizadas. De IA aplicada a empreendedorismo digital,
                com aplicação real e mentoria.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Ver catálogo completo <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => (
              <article
                key={t.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-foreground/30 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <span>{t.level}</span>
                  <span className="font-medium text-foreground">{t.hours}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE */}
      <section id="empresas" className="relative overflow-hidden border-b border-border/40 bg-foreground text-background">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(50% 60% at 80% 20%, oklch(0.7 0.2 270 / 0.4), transparent 70%), radial-gradient(40% 50% at 10% 90%, oklch(0.7 0.18 200 / 0.35), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-xs text-background/70 backdrop-blur">
              <Building2 className="h-3.5 w-3.5" /> FCIA Corporate
            </div>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Capacite seu time em IA, tecnologia e inovação.
            </h2>
            <p className="mt-5 text-lg text-background/70">
              Treinamentos corporativos modulares para pequenas, médias e grandes empresas.
              Plataforma white-label, trilhas customizadas e mentoria dedicada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
              >
                Falar com especialista <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10"
              >
                Baixar apresentação
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-background/15 pt-6">
              <div>
                <div className="text-2xl font-semibold tracking-tight">220+</div>
                <div className="text-xs text-background/60">empresas</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">72h</div>
                <div className="text-xs text-background/60">setup médio</div>
              </div>
              <div>
                <div className="text-2xl font-semibold tracking-tight">NPS 81</div>
                <div className="text-xs text-background/60">satisfação</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {corporateBenefits.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur transition-colors hover:bg-background/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10 text-background">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-background/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL BENEFITS */}
      <section id="beneficios" className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3" /> Por que FCIA
            </div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Aprender aqui vira resultado real.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cada trilha é desenhada para te levar da primeira aula até a aplicação prática —
              no trabalho, no seu negócio ou em uma nova fonte de renda.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {practicalBenefits.map((b, i) => (
              <div
                key={b.title}
                className="relative rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute right-5 top-5 text-xs font-medium text-muted-foreground/60">
                  0{i + 1}
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="jornada" className="border-b border-border/40 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-muted-foreground">
              <Compass className="h-3 w-3" /> Sua jornada
            </div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Do primeiro clique ao primeiro resultado.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um caminho claro, guiado e com aplicação prática em cada etapa.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            <div className="grid gap-8 md:grid-cols-4">
              {journey.map((j) => (
                <div key={j.step} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                    <j.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="mt-4 text-xs font-medium tracking-[0.2em] text-muted-foreground">
                    {j.step}
                  </div>
                  <div className="mt-1 text-lg font-semibold tracking-tight">{j.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{j.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, oklch(0.65 0.22 270 / 0.18), transparent 70%), radial-gradient(50% 60% at 80% 100%, oklch(0.7 0.18 200 / 0.15), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-foreground p-10 text-background md:p-16">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(40% 50% at 20% 30%, oklch(0.7 0.22 270 / 0.5), transparent 70%), radial-gradient(40% 50% at 85% 80%, oklch(0.7 0.2 200 / 0.4), transparent 70%)",
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-3 py-1 text-xs text-background/70 backdrop-blur">
                  Comece hoje
                </div>
                <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Sua próxima evolução começa{" "}
                  <span className="bg-gradient-to-r from-background to-background/50 bg-clip-text text-transparent">
                    agora.
                  </span>
                </h2>
                <p className="mt-5 max-w-xl text-lg text-background/70">
                  Cursos para você crescer profissionalmente e soluções para sua empresa preparar
                  o time para o futuro do trabalho.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#trilhas"
                    className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Quero começar
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#empresas"
                    className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3.5 text-sm font-medium text-background/90 transition-colors hover:bg-background/10"
                  >
                    <Building2 className="h-4 w-4" />
                    Sou empresa
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-background/60">
                  <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> 7 dias de garantia</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Acesso vitalício</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Certificado oficial</span>
                </div>
              </div>

              <div className="rounded-2xl border border-background/15 bg-background/5 p-6 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.2em] text-background/60">Turma aberta</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">IA Aplicada · v4</div>
                <div className="mt-4 space-y-3 text-sm text-background/80">
                  <div className="flex items-center justify-between border-b border-background/10 pb-3">
                    <span className="text-background/60">Início</span>
                    <span>15 de Julho</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-background/10 pb-3">
                    <span className="text-background/60">Carga</span>
                    <span>42h · 8 semanas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-background/60">Formato</span>
                    <span>Online + mentoria ao vivo</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-background/60">Vagas preenchidas</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-background/10">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-background to-background/60" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
              <Sparkles className="h-3 w-3" />
            </div>
            FCIA Academy
          </div>
          <div>© {new Date().getFullYear()} FCIA. Tecnologia, IA e negócios na prática.</div>
        </div>
      </footer>
    </div>
  );
}

function BookOpenIcon() {
  return <LineChart className="h-3 w-3" />;
}
