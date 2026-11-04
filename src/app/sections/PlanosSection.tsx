"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { CtaLink } from "../components/CtaLink";
import { SecaoMarcador } from "../components/SecaoMarcador";
import { PLANOS } from "../utils/constants";
import {
  cadastroHref,
  formatarPreco,
  precoDoPeriodo,
  temPrecoAnual,
} from "../utils/functions";
import type { PeriodoPlano } from "../utils/types";

const PERIODOS: { value: PeriodoPlano; label: string }[] = [
  { value: "mensal", label: "Mensal" },
  { value: "anual", label: "Anual" },
];

export function PlanosSection() {
  const [periodo, setPeriodo] = useState<PeriodoPlano>("mensal");
  const mostrarPeriodo = temPrecoAnual(PLANOS);

  return (
    <section id="planos" className="bg-surface-alt scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <SecaoMarcador>Planos</SecaoMarcador>
            <h2 className="text-ink text-3xl leading-tight font-bold tracking-[-0.03em] sm:text-[2.6rem]">
              Escolha o pacote da sua empresa
            </h2>
            <p className="text-body mt-4 text-[1.05rem] leading-relaxed">
              Cada pacote reúne os módulos de um tipo de empresa. Um módulo que
              não está no seu pacote pode ser contratado avulso.
            </p>
          </div>

          {mostrarPeriodo && (
            <div
              role="radiogroup"
              aria-label="Período de cobrança"
              className="border-line bg-surface-card inline-flex self-start rounded-xl border p-1 sm:self-auto"
            >
              {PERIODOS.map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={periodo === value}
                  onClick={() => setPeriodo(value)}
                  className={cn(
                    "focus-visible:ring-ring/50 rounded-lg px-4 py-1.5 text-sm font-medium outline-none focus-visible:ring-3",
                    periodo === value ? "bg-ink text-on-deep" : "text-body",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        <ul className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {PLANOS.map((plano) => {
            const preco = precoDoPeriodo(plano, periodo);
            const destaque = plano.recomendado;

            return (
              <li
                key={plano.slug}
                className={cn(
                  "flex flex-col rounded-[20px] border p-7 sm:p-8",
                  destaque
                    ? "bg-deep-glow border-deep-line text-on-deep lg:-my-4 lg:py-12"
                    : "border-line bg-surface-card text-ink",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold tracking-[-0.02em]">
                    {plano.nome}
                  </h3>
                  {destaque && (
                    <span className="text-brand-strong rounded-full bg-white px-3 py-1 text-xs font-semibold">
                      Recomendado
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-2 text-[0.95rem] leading-relaxed",
                    destaque ? "text-on-deep-muted" : "text-body",
                  )}
                >
                  {plano.publico}
                </p>

                <p className="mt-7 flex items-baseline gap-1.5">
                  <span className="text-[2rem] font-bold tracking-[-0.03em]">
                    {preco === null ? "Sob consulta" : formatarPreco(preco)}
                  </span>
                  {preco !== null && (
                    <span
                      className={destaque ? "text-on-deep-muted" : "text-body"}
                    >
                      {periodo === "anual" ? "/ano" : "/mês"}
                    </span>
                  )}
                </p>

                <CtaLink
                  href={cadastroHref(plano.slug)}
                  variant={destaque ? "default" : "outline"}
                  className={cn(
                    "mt-6 w-full",
                    destaque &&
                      "bg-surface-card text-brand-strong hover:bg-highlight",
                  )}
                >
                  Contratar {plano.nome}
                </CtaLink>

                <ul
                  className={cn(
                    "mt-7 space-y-3 border-t pt-7 text-[0.95rem]",
                    destaque ? "border-deep-line" : "border-line",
                  )}
                >
                  {plano.itens.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check
                        aria-hidden
                        className={cn(
                          "mt-0.5 size-[18px] shrink-0",
                          destaque ? "text-on-deep-label" : "text-brand",
                        )}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <p className="text-subtle mt-10 text-sm">
          O acesso é liberado pela equipe da SyncForge assim que o pagamento é
          confirmado.
        </p>
      </div>
    </section>
  );
}
