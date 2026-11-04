"use client";

import { useEffect, type ReactNode } from "react";

import { AvisoLancamento } from "../components/AvisoLancamento";
import { ContagemRegressiva } from "../components/ContagemRegressiva";
import { EM_BREVE_ATIVO, LANCAMENTO_EM } from "../utils/constants";
import { useAgora } from "../utils/useAgora";

type Props = { children: ReactNode };

// "Em breve" na frente do hero: camada translúcida com a contagem até
// LANCAMENTO_EM. Começa visível já no HTML do servidor; depois do lançamento
// some e o hero fica livre.
export function EmBreveSection({ children }: Props) {
  const agora = useAgora();
  const lancado =
    !EM_BREVE_ATIVO ||
    (agora !== null && agora * 1000 >= new Date(LANCAMENTO_EM).getTime());

  // Até o lançamento a página fica presa no hero: sem barra de rolagem e
  // voltando ao topo se algo tentar rolar (links #âncora, teclado, URL com #).
  useEffect(() => {
    if (lancado) return;
    const html = document.documentElement;
    const voltarAoTopo = () => window.scrollTo(0, 0);
    html.style.overflow = "hidden";
    voltarAoTopo();
    window.addEventListener("scroll", voltarAoTopo);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("scroll", voltarAoTopo);
    };
  }, [lancado]);

  if (lancado) return children;

  return (
    <div className="relative">
      <div inert aria-hidden>
        {children}
      </div>

      <div
        role="region"
        aria-labelledby="em-breve-titulo"
        className="bg-surface/80 absolute inset-0 z-20 flex flex-col items-center justify-center px-4 py-12 text-center backdrop-blur-[3px] sm:px-6"
      >
        <h2
          id="em-breve-titulo"
          className="text-ink max-w-3xl text-[2.5rem] leading-[1.05] font-bold tracking-[-0.035em] sm:text-[3.5rem]"
        >
          O SIGEM chega em 23 de novembro
        </h2>

        <p className="text-ink mt-12 mb-6 text-sm font-semibold">
          Tempo até o lançamento
        </p>
        <ContagemRegressiva ate={LANCAMENTO_EM} />

        <div className="mt-10">
          <AvisoLancamento />
        </div>
      </div>
    </div>
  );
}
