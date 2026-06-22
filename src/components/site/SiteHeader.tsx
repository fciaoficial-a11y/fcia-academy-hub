import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const nav = [
  { to: "/trilhas", label: "Trilhas" },
  { to: "/cursos", label: "Cursos" },
  { to: "/turmas", label: "Turmas" },
  { to: "/empresas", label: "Empresas" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      {/* Light glass layer */}
      <div className="absolute inset-0 -z-10 bg-white/65 backdrop-blur-xl backdrop-saturate-150" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />

      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-6 px-6">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5 justify-self-start">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-[0_6px_20px_-6px_rgb(14_165_233_/_0.55)]">
            <span className="font-display text-[13px] font-bold tracking-tight">F</span>
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-cyan-300 ring-2 ring-white" />
          </div>
          <span className="font-display text-[15px] font-semibold tracking-tight text-slate-900">
            FCIA<span className="text-slate-300">/</span>
            <span className="text-slate-500 font-medium">Academy</span>
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 px-1.5 py-1 shadow-[0_1px_0_0_rgb(255_255_255_/_0.9)_inset,0_8px_24px_-12px_rgb(15_23_42_/_0.08)] backdrop-blur md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-1.5 text-[13.5px] font-medium text-slate-600 transition-all hover:text-slate-900"
              activeProps={{
                className:
                  "text-sky-700 bg-sky-50/80 ring-1 ring-inset ring-sky-100",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2 justify-self-end">
          <Link
            to="/inscricao"
            className="hidden rounded-full px-3 py-2 text-[13.5px] font-medium text-slate-600 transition-colors hover:text-slate-900 sm:inline-flex"
          >
            Entrar
          </Link>
          <Link
            to="/inscricao"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-sky-500 to-sky-600 px-4 py-2 text-[13.5px] font-medium text-white shadow-[0_1px_0_0_rgb(255_255_255_/_0.25)_inset,0_8px_20px_-8px_rgb(14_165_233_/_0.6)] ring-1 ring-sky-500/40 transition-all hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgb(255_255_255_/_0.25)_inset,0_12px_28px_-8px_rgb(14_165_233_/_0.7)]"
          >
            Comece agora
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
