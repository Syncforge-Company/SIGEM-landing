"use client";

import { BellRing, CircleCheck } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { inscreverAviso } from "../utils/api";
import { TEXTOS_AVISO } from "../utils/constants";
import { mascararWhatsapp, validarAviso } from "../utils/functions";
import type { AvisoErros, AvisoValores } from "../utils/types";

const VAZIO: AvisoValores = { nome: "", email: "", whatsapp: "" };

const BOTAO_GRANDE =
  "bg-brand text-on-deep hover:bg-brand-strong h-11 rounded-xl px-5 text-[0.95rem]";

const CAMPO =
  "border-line bg-surface-card text-ink placeholder:text-subtle focus-visible:border-brand focus-visible:ring-brand/20 h-11 rounded-xl px-3.5 text-[0.95rem]";

type Estado = "preenchendo" | "enviando" | "enviado";

export function AvisoLancamento() {
  const [aberto, setAberto] = useState(false);
  const [valores, setValores] = useState(VAZIO);
  const [erros, setErros] = useState<AvisoErros>({});
  const [estado, setEstado] = useState<Estado>("preenchendo");
  const [erroEnvio, setErroEnvio] = useState<string | null>(null);

  function alterar(campo: keyof AvisoValores, valor: string) {
    setValores((atuais) => ({
      ...atuais,
      [campo]: campo === "whatsapp" ? mascararWhatsapp(valor) : valor,
    }));
    setErros((atuais) => ({ ...atuais, [campo]: undefined }));
  }

  function mudarAberto(abrir: boolean) {
    setAberto(abrir);
    // Depois de enviado, a próxima abertura começa do zero.
    if (!abrir && estado === "enviado") {
      setValores(VAZIO);
      setEstado("preenchendo");
    }
    if (!abrir) setErroEnvio(null);
  }

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const encontrados = validarAviso(valores);
    setErros(encontrados);
    if (Object.keys(encontrados).length) return;

    setEstado("enviando");
    setErroEnvio(null);
    const resultado = await inscreverAviso(valores);
    if (resultado.ok) {
      setEstado("enviado");
    } else {
      setEstado("preenchendo");
      setErroEnvio(resultado.mensagem);
    }
  }

  const primeiroNome = valores.nome.trim().split(/\s+/)[0];

  return (
    <Dialog open={aberto} onOpenChange={mudarAberto}>
      <DialogTrigger render={<Button className={BOTAO_GRANDE} />}>
        <BellRing aria-hidden className="size-[18px]" />
        {TEXTOS_AVISO.botao}
      </DialogTrigger>

      <DialogContent className="bg-surface-card ring-line max-h-[calc(100dvh-2rem)] gap-6 overflow-y-auto rounded-[20px] p-6 text-left sm:max-w-md sm:p-7">
        {estado === "enviado" ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <span className="bg-highlight text-brand flex size-14 items-center justify-center rounded-full">
              <CircleCheck aria-hidden className="size-7" />
            </span>
            <DialogTitle className="text-ink text-xl font-bold tracking-[-0.02em]">
              {TEXTOS_AVISO.sucessoTitulo(primeiroNome)}
            </DialogTitle>
            <DialogDescription className="text-body max-w-xs text-[0.95rem] leading-relaxed">
              {TEXTOS_AVISO.sucessoTexto}
            </DialogDescription>
            <DialogClose
              render={<Button className={cn(BOTAO_GRANDE, "mt-3 w-full")} />}
            >
              {TEXTOS_AVISO.fechar}
            </DialogClose>
          </div>
        ) : (
          <>
            <DialogHeader className="gap-2">
              <span className="bg-highlight text-brand flex size-11 items-center justify-center rounded-xl">
                <BellRing aria-hidden className="size-5" />
              </span>
              <DialogTitle className="text-ink mt-2 text-xl font-bold tracking-[-0.02em]">
                {TEXTOS_AVISO.titulo}
              </DialogTitle>
              <DialogDescription className="text-body text-[0.95rem] leading-relaxed">
                {TEXTOS_AVISO.descricao}
              </DialogDescription>
            </DialogHeader>

            <form noValidate onSubmit={enviar} className="flex flex-col gap-4">
              <Campo
                id="aviso-nome"
                label={TEXTOS_AVISO.nome}
                erro={erros.nome}
              >
                <Input
                  id="aviso-nome"
                  autoComplete="name"
                  placeholder={TEXTOS_AVISO.placeholderNome}
                  value={valores.nome}
                  onChange={(e) => alterar("nome", e.target.value)}
                  aria-invalid={Boolean(erros.nome)}
                  aria-describedby={erros.nome ? "aviso-nome-erro" : undefined}
                  className={CAMPO}
                />
              </Campo>

              <Campo
                id="aviso-email"
                label={TEXTOS_AVISO.email}
                erro={erros.email}
              >
                <Input
                  id="aviso-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={TEXTOS_AVISO.placeholderEmail}
                  value={valores.email}
                  onChange={(e) => alterar("email", e.target.value)}
                  aria-invalid={Boolean(erros.email)}
                  aria-describedby={
                    erros.email ? "aviso-email-erro" : undefined
                  }
                  className={CAMPO}
                />
              </Campo>

              <Campo
                id="aviso-whatsapp"
                label={TEXTOS_AVISO.whatsapp}
                opcional
                erro={erros.whatsapp}
              >
                <Input
                  id="aviso-whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  placeholder={TEXTOS_AVISO.placeholderWhatsapp}
                  value={valores.whatsapp}
                  onChange={(e) => alterar("whatsapp", e.target.value)}
                  aria-invalid={Boolean(erros.whatsapp)}
                  aria-describedby={
                    erros.whatsapp ? "aviso-whatsapp-erro" : undefined
                  }
                  className={CAMPO}
                />
              </Campo>

              {erroEnvio && (
                <p
                  role="alert"
                  className="bg-destructive/10 text-destructive rounded-xl px-3.5 py-2.5 text-sm"
                >
                  {erroEnvio}
                </p>
              )}

              <Button
                type="submit"
                disabled={estado === "enviando"}
                className={cn(BOTAO_GRANDE, "mt-1 w-full")}
              >
                {estado === "enviando"
                  ? TEXTOS_AVISO.enviando
                  : TEXTOS_AVISO.enviar}
              </Button>
              <p className="text-subtle text-center text-xs">
                {TEXTOS_AVISO.privacidade}
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

type CampoProps = {
  id: string;
  label: string;
  opcional?: boolean;
  erro?: string;
  children: React.ReactNode;
};

function Campo({ id, label, opcional, erro, children }: CampoProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-ink text-sm font-semibold">
        {label}
        {opcional && (
          <span className="text-subtle font-normal">
            {" "}
            ({TEXTOS_AVISO.opcional})
          </span>
        )}
      </Label>
      {children}
      {erro && (
        <p id={`${id}-erro`} className="text-destructive text-xs">
          {erro}
        </p>
      )}
    </div>
  );
}
