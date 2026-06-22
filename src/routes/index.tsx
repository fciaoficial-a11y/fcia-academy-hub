import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowUpRight,
  Award,
  Bot,
  Brain,
  CheckCircle2,
  Crown,
  Flame,
  Play,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from "lucide-react";
import { FAQ } from "@/components/site/FAQ";
import { tracks } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FCIA Academy — IA, Automação e Tecnologia Aplicada" },
      {
        name: "description",
        content:
          "Aprenda IA, automação e tecnologia aplicada com trilhas práticas, certificações e projetos reais. Plataforma premium para acelerar sua evolução profissional.",
      },
      { property: "og:title", content: "FCIA Academy — Plataforma de IA e Tecnologia" },
      {
        property: "og:description",
        content:
          "Cursos práticos em IA, automação e novas tecnologias. Certificados, projetos reais e mentoria.",
      },
    ],
  }),
  component: Index,
});

const heroStats = [
  { value: "+20", label: "Cursos planejados" },
  { value: "6", label: "Trilhas de aprendizado" },
  { value: "100%", label: "Certificados automáticos" },
  { value: "∞", label: "Projetos reais" },
];

const socialProof = [
  { value: "94%", label: "Satisfação dos alunos", icon: Star },
  { value: "4.9", label: "Avaliação média", icon: Trophy },
  { value: "+300h", label: "Conteúdo on-demand", icon: Play },
  { value: "24/7", label: "Comunidade ativa", icon: Activity },
];

const gamification = [
  { icon: Zap, title: "Sistema de XP", desc: "Ganhe pontos a cada aula, projeto e desafio concluído." },
  { icon: Trophy, title: "Conquistas", desc: "Desbloqueie badges por marcos práticos no seu trajeto." },
  { icon: Crown, title: "Níveis", desc: "Evolua de iniciante a especialista em IA aplicada." },
  { icon: Award, title: "Badges raros", desc: "Conquistas exclusivas para quem entrega projetos reais." },
  { icon: Target, title: "Ranking ativo", desc: "Compita com outros alunos e suba na liga semanal." },
  { icon: Flame, title: "Streak diário", desc: "Mantenha sua sequência e consolide o aprendizado." },
];

const instructorMetrics = [
  { value: "15+", label: "Anos em tecnologia" },
  { value: "+50", label: "Produtos digitais" },
  { value: "+10k", label: "Alunos impactados" },
];

function Index() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Animated tech grid */}
        <div className="absolute inset-0 tech-grid opacity-60" aria-hidden />
        {/* Gradient orbs */}
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/25 blur-[160px] animate-pulse-glow"
          aria-hidden
        />
        <div
          className="absolute top-40 right-[-10%] h-[400px] w-[400px] rounded-full bg-accent/30 blur-[140px] animate-pulse-glow"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-24 lg:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
            {/* Copy */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Plataforma de IA · Tecnologia · Automação
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Aprenda{" "}
                <span className="text-gradient">IA, Automação</span>
                <br />e Tecnologia Aplicada
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Transforme conhecimento em resultado real através de cursos práticos, projetos, certificações e metodologias usadas no mercado.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/inscricao"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-primary transition-transform hover:-translate-y-0.5"
                >
                  Começar gratuitamente
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/trilhas"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
                >
                  Explorar trilhas
                </Link>
              </div>

              {/* Hero stats */}
              <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
                {heroStats.map((s) => (
                  <div key={s.label} className="bg-background/40 p-4 backdrop-blur">
                    <div className="font-display text-2xl font-semibold text-gradient">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium platform mockup */}
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl"
                aria-hidden
              />
              <div className="relative rounded-3xl border border-white/10 bg-card/80 p-5 backdrop-blur-xl glow-primary">
                {/* window chrome */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    fcia.academy/dashboard
                  </span>
                </div>

                {/* greeting + XP */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Bom dia, Ana</div>
                    <div className="mt-1 font-display text-lg font-semibold">Nível 7 · Explorer</div>
                  </div>
                  <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    2.480 XP
                  </div>
                </div>

                {/* XP bar */}
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>

                {/* progress rows */}
                <div className="mt-5 space-y-3">
                  <ProgressRow label="IA Aplicada · Módulo 4" value={72} />
                  <ProgressRow label="Automação com n8n" value={48} />
                  <ProgressRow label="Marketing com IA" value={91} />
                </div>

                {/* bottom widgets */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      <Award className="h-3 w-3 text-accent" /> Certificado
                    </div>
                    <div className="mt-1.5 text-sm font-semibold">Prompt Eng. Pro</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      <Trophy className="h-3 w-3 text-primary" /> Ranking
                    </div>
                    <div className="mt-1.5 text-sm font-semibold">#23 · Top 5%</div>
                  </div>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-6 -left-6 hidden animate-float-slow rounded-2xl border border-white/10 bg-card/90 p-4 backdrop-blur-xl ring-glow sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Flame className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      Streak
                    </div>
                    <div className="text-sm font-semibold">14 dias seguidos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section className="relative border-y border-white/5 bg-surface/30 py-12 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {socialProof.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.05]"
                >
                  <Icon className="h-5 w-5 text-primary transition-colors group-hover:text-accent" />
                  <div className="mt-3 font-display text-3xl font-semibold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ TRILHAS — horizontal scroll ============ */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 tech-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                Trilhas
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Aprenda o que <span className="text-gradient">move o mercado</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Da IA aplicada à automação. Cada trilha forma você com prática real e projetos publicáveis.
              </p>
            </div>
            <Link
              to="/trilhas"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground hover:bg-white/10"
            >
              Ver todas <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="mt-12 -mx-6 overflow-x-auto px-6 pb-4 lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="flex gap-5 lg:grid lg:grid-cols-3 lg:gap-6">
              {tracks.map((t) => {
                const Icon = t.icon;
                return (
                  <Link
                    key={t.slug}
                    to="/cursos/$slug"
                    params={{ slug: t.slug }}
                    className="group relative w-[280px] shrink-0 lg:w-auto"
                  >
                    <div
                      className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="relative h-full rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/30 transition-all group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {t.tag}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t.desc}
                      </p>
                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-muted-foreground">
                        <span>{t.modules} cursos</span>
                        <span className="text-primary">{t.hours}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DEMO — Platform showcase ============ */}
      <section className="relative overflow-hidden border-y border-white/5 bg-surface/40 py-20 sm:py-28">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              Plataforma
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Veja a FCIA Academy <span className="text-gradient">em ação</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dashboard, player, XP, certificados e ranking — uma experiência completa para aprender e evoluir.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <DemoCard
              icon={Play}
              tag="Player"
              title="Aulas que carregam em segundos"
              desc="Player otimizado, capítulos, transcrição automática e notas inline."
            />
            <DemoCard
              icon={Award}
              tag="Certificados"
              title="Certificação verificável"
              desc="Cada trilha gera certificado com QR e link público para LinkedIn."
            />
            <DemoCard
              icon={Trophy}
              tag="Ranking"
              title="Liga semanal"
              desc="Compita por XP, mantenha streak e suba no ranking ao vivo."
            />
          </div>
        </div>
      </section>

      {/* ============ GAMIFICATION ============ */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 tech-grid opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Gamificação
            </div>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Evoluir vira um <span className="text-gradient">jogo</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              XP, conquistas, badges e ranking transformam consistência em hábito.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gamification.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/25"
                    aria-hidden
                  />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground ring-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-semibold">{g.title}</h3>
                  <p className="relative mt-1.5 text-sm text-muted-foreground">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ INSTRUCTOR ============ */}
      <section className="relative overflow-hidden border-y border-white/5 bg-surface/30 py-20 sm:py-28">
        <div
          className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                Instrutor
              </div>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Fernando Cabral
              </h2>
              <p className="mt-2 text-lg text-gradient font-medium">
                Especialista em IA, SaaS e Educação Tecnológica
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Mais de uma década construindo produtos digitais, automações e estratégias com IA. Mentor de centenas de profissionais e fundador da FCIA Academy.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "IA Aplicada",
                  "SaaS",
                  "Automação",
                  "Branding Estratégico",
                  "Educação Tech",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                {instructorMetrics.map((m) => (
                  <div key={m.label} className="bg-background/50 p-5">
                    <div className="font-display text-2xl font-semibold text-gradient">
                      {m.value}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual portrait card */}
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-card/80 to-accent/20 p-8 backdrop-blur-xl">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                    Fundador · CEO
                  </div>
                  <div className="flex h-48 w-48 items-center justify-center self-center rounded-full bg-gradient-to-br from-primary to-accent text-7xl font-display font-bold text-primary-foreground ring-glow">
                    FC
                  </div>
                  <div>
                    <div className="font-display text-2xl font-semibold">
                      "Tecnologia muda a vida de quem aprende a aplicar."
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">— Fernando Cabral</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ />

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 tech-grid opacity-40" aria-hidden />
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[160px] animate-pulse-glow"
          aria-hidden
        />
        <div
          className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-accent/30 blur-[120px] animate-pulse-glow"
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            <Brain className="h-3 w-3" />
            Próxima geração de profissionais
          </div>

          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Pronto para dominar{" "}
            <span className="text-gradient">IA e tecnologia aplicada?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Comece gratuitamente hoje e acelere sua evolução profissional com a plataforma que coloca você na frente da próxima revolução tecnológica.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/inscricao"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground glow-primary transition-transform hover:-translate-y-0.5"
            >
              Começar agora
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/trilhas"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              Ver trilhas
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Sem cartão de crédito
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Acesso imediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Cancele quando quiser
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

function ProgressRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className="font-mono text-primary">{value}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function DemoCard({
  icon: Icon,
  tag,
  title,
  desc,
}: {
  icon: typeof Play;
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40">
      <div
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-all group-hover:bg-primary/30"
        aria-hidden
      />
      <div className="relative flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-primary" />
        {tag}
      </div>
      <h3 className="relative mt-5 font-display text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <div className="relative mt-6 h-24 rounded-xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
    </div>
  );
}
