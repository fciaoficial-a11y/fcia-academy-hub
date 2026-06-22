import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  fullName: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  password: z
    .string()
    .min(8, "Mínimo de 8 caracteres")
    .max(72, "Máximo de 72 caracteres"),
});

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Criar conta — FCIA Academy" },
      { name: "description", content: "Crie sua conta gratuita na FCIA Academy." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ fullName, email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Dados inválidos");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
        data: { full_name: parsed.data.fullName },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Conta criada! Redirecionando…");
    navigate({ to: "/dashboard" });
  }

  return (
    <AuthShell
      eyebrow="Cadastro"
      title="Crie sua conta"
      subtitle="Comece a aprender IA, automação e novas tecnologias."
      footer={
        <>
          Já tem conta?{" "}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Entrar
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Nome completo</Label>
          <Input
            id="fullName"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Como podemos te chamar?"
            autoComplete="name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 8 caracteres"
            autoComplete="new-password"
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Criando conta..." : "Criar conta grátis"}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Ao criar conta você concorda com nossos termos.
        </p>
      </form>
    </AuthShell>
  );
}
