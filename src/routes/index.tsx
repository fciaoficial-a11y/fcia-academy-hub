import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FCIA Academy — Executive Education" },
      {
        name: "description",
        content:
          "FCIA Academy delivers executive-grade learning programs with a focus on outcomes, rigor, and clarity.",
      },
      { property: "og:title", content: "FCIA Academy" },
      {
        property: "og:description",
        content: "Executive-grade learning programs built for outcomes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-semibold">
              F
            </span>
            <span className="text-sm font-semibold tracking-tight">
              FCIA Academy
            </span>
          </Link>
          <nav className="text-sm text-muted-foreground">
            <span className="hidden sm:inline">Executive Education Platform</span>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            FCIA Academy
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Executive learning, engineered for outcomes.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A focused platform for delivering rigorous, production-grade
            educational programs. Built clean. Built to scale.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Explore programs
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">
              Contact admissions
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} FCIA Academy</span>
          <span>v0.1 — initial scaffold</span>
        </div>
      </footer>
    </main>
  );
}
