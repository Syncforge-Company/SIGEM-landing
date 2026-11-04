"use client";

import { Check, ChevronRight } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import {
  MODULOS_SISTEMA,
  PASSOS_VENDA,
  VENDA_EXEMPLO,
} from "../utils/constants";
import { formatarPreco, totalDaVenda } from "../utils/functions";
import { AnimatedList } from "./AnimatedList";
import { EtapaModulo } from "./EtapaModulo";
import { NumberTicker } from "./NumberTicker";

const [vendas, estoque, financeiro] = MODULOS_SISTEMA;
const { numero, itens, lancamentos } = VENDA_EXEMPLO;
const TOTAL = totalDaVenda(itens);

// Momento em que cada etapa acende, em ms, depois que a seção aparece.
const TEMPOS = [500, 1700, 2900];

function Conector({ ativo }: { ativo: boolean }) {
  return (
    <li
      aria-hidden
      className="flex items-center justify-center py-1 lg:h-[302px] lg:py-0"
    >
      <span
        className={cn(
          "flex size-8 rotate-90 items-center justify-center rounded-full border transition-colors duration-500 lg:rotate-0",
          ativo
            ? "border-brand bg-brand text-on-deep"
            : "border-line bg-surface-card text-subtle",
        )}
      >
        <ChevronRight className="size-4" />
      </span>
    </li>
  );
}

export function FluxoVenda() {
  const ref = useRef<HTMLOListElement>(null);
  const visivel = useInView(ref, { once: true, amount: 0.4 });
  const reduzirMovimento = useReducedMotion();
  const [etapaAnimada, setEtapaAnimada] = useState(0);
  const etapa = reduzirMovimento ? 3 : etapaAnimada;

  useEffect(() => {
    if (!visivel || reduzirMovimento) return;
    const timers = TEMPOS.map((tempo, index) =>
      setTimeout(() => setEtapaAnimada(index + 1), tempo),
    );
    return () => timers.forEach(clearTimeout);
  }, [visivel, reduzirMovimento]);

  return (
    <ol
      ref={ref}
      className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-5"
    >
      <EtapaModulo
        modulo={vendas}
        numero={1}
        ativo={etapa >= 1}
        {...PASSOS_VENDA[0]}
      >
        <p className="text-subtle text-xs">Venda nº {numero}</p>
        <ul className="mt-3 space-y-2 text-sm">
          {itens.map((item) => (
            <li key={item.produto} className="flex justify-between gap-3">
              <span className="text-body">
                {item.quantidade}× {item.produto}
              </span>
              <span className="text-ink tabular-nums">
                {formatarPreco(item.total)}
              </span>
            </li>
          ))}
        </ul>
        <div className="border-line mt-3 flex justify-between border-t pt-3 font-semibold">
          <span className="text-ink">Total</span>
          <span className="text-ink tabular-nums">{formatarPreco(TOTAL)}</span>
        </div>
        <div
          className={cn(
            "mt-4 flex h-10 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors duration-500",
            etapa >= 1 ? "bg-highlight text-brand" : "bg-brand text-on-deep",
          )}
        >
          {etapa >= 1 ? (
            <>
              <Check className="size-4" /> Venda finalizada
            </>
          ) : (
            "Finalizar venda"
          )}
        </div>
      </EtapaModulo>

      <Conector ativo={etapa >= 2} />

      <EtapaModulo
        modulo={estoque}
        numero={2}
        ativo={etapa >= 2}
        {...PASSOS_VENDA[1]}
      >
        <p className="text-subtle text-xs">Depósito principal</p>
        <ul className="mt-3 space-y-3">
          {itens.map((item) => {
            const depois = item.estoqueAntes - item.quantidade;
            return (
              <li
                key={item.produto}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="text-body truncate">{item.produto}</span>
                <span className="flex shrink-0 items-center gap-2">
                  {etapa >= 2 && (
                    <span className="text-xs font-semibold text-amber-700">
                      −{item.quantidade}
                    </span>
                  )}
                  <span className="text-ink w-14 text-right font-semibold tabular-nums">
                    {etapa >= 2 && !reduzirMovimento ? (
                      <NumberTicker
                        startValue={item.estoqueAntes}
                        value={depois}
                      />
                    ) : etapa >= 2 ? (
                      depois
                    ) : (
                      item.estoqueAntes
                    )}{" "}
                    un.
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
        <p className="text-subtle mt-5 text-xs leading-relaxed">
          Saídas registradas com o motivo “Venda nº {numero}”.
        </p>
      </EtapaModulo>

      <Conector ativo={etapa >= 3} />

      <EtapaModulo
        modulo={financeiro}
        numero={3}
        ativo={etapa >= 3}
        {...PASSOS_VENDA[2]}
      >
        {etapa >= 3 ? (
          <AnimatedList delay={reduzirMovimento ? 0 : 700} className="gap-2.5">
            {lancamentos.map(({ id, titulo, detalhe, valor, icon: Icon }) => (
              <div
                key={id}
                className="border-line flex w-full items-center gap-3 rounded-xl border p-2.5"
              >
                <span className="bg-highlight text-brand flex size-8 shrink-0 items-center justify-center rounded-lg">
                  <Icon className="size-4" strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-ink block truncate text-sm font-semibold">
                    {titulo}
                  </span>
                  <span className="text-subtle block truncate text-xs">
                    {detalhe}
                  </span>
                </span>
                <span className="text-brand text-sm font-semibold tabular-nums">
                  +{formatarPreco(valor)}
                </span>
              </div>
            ))}
          </AnimatedList>
        ) : (
          <p className="text-subtle flex h-full min-h-[180px] items-center justify-center text-sm">
            Aguardando a venda
          </p>
        )}
      </EtapaModulo>
    </ol>
  );
}
