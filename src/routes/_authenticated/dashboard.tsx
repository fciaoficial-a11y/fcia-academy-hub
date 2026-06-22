import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Activity, BookOpen, Trophy, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — FCIA Academy" },
      { name: "description", content: "Seu painel na FCIA Academy." },
    ],
  }),
  component: DashboardPage,
});

interface ProfileRow {
  full_name: string | null;
}

function DashboardPage() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", userData.user.id)
        .maybeSingle<ProfileRow>();
      if (!mounted) return;
      setName(data?.full_name ?? userData.user.email?.split("@")[0] ?? "");
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl px-6 py-12">
      <div className="absolute inset-0 -z-10 tech-grid opacity-20" aria-hidden />

      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        Dashboard
      </div>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Olá, <span className="text-gradient">{name || "explorer"}</span> 👋
      </h1>
      <p className="mt-2 max-w-xl text-muted-foreground">
        Sua jornada começa aqui. Esta é a fundação da plataforma — cursos, trilhas e conquistas chegam nas próximas sprints.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { icon: BookOpen, label: "Cursos ativos", value: "0" },
          { icon: Activity, label: "Horas estudadas", value: "0h" },
          { icon: Trophy, label: "Conquistas", value: "—" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-primary/30"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/25" aria-hidden />
            <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div className="relative mt-4 font-display text-2xl font-semibold">{value}</div>
            <div className="relative text-sm text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-8">
        <h2 className="font-display text-xl font-semibold">Plataforma em construção</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta sprint entregou apenas a fundação: autenticação, perfil e dashboard protegido. As próximas sprints adicionam trilhas, cursos, quizzes e gamificação.
        </p>
      </div>
    </div>
  );
}
