"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { forwardRef, useRef, type RefObject } from "react";

import { CORES_FEIXE, MODULOS_SISTEMA } from "../utils/constants";
import type { ModuloSistema } from "../utils/types";
import { AnimatedBeam } from "./AnimatedBeam";
import { ModuloIcone } from "./ModuloIcone";

const [vendas, estoque, financeiro, config] = MODULOS_SISTEMA;

const NoModulo = forwardRef<HTMLDivElement, { modulo: ModuloSistema }>(
  function NoModulo({ modulo }, ref) {
    return (
      <div
        ref={ref}
        className="border-line bg-surface-card relative z-10 flex w-[92px] flex-col items-center gap-2 rounded-2xl border p-3 text-center shadow-[0_10px_30px_-18px_rgb(18_60_58/0.45)] sm:w-[204px] sm:flex-row sm:text-left"
      >
        <ModuloIcone
          modulo={modulo}
          className="size-11 rounded-xl"
          iconClassName="size-[22px]"
        />
        <div className="min-w-0">
          <p className="text-ink text-xs font-semibold sm:text-sm">
            {modulo.nome}
          </p>
          <p className="text-subtle hidden text-xs leading-snug sm:block">
            {modulo.subs}
          </p>
        </div>
      </div>
    );
  },
);

type FeixeProps = {
  container: RefObject<HTMLDivElement | null>;
  de: RefObject<HTMLDivElement | null>;
  para: RefObject<HTMLDivElement | null>;
  curvatura: number;
  atraso: number;
  parado: boolean;
};

function Feixe({ container, de, para, curvatura, atraso, parado }: FeixeProps) {
  return (
    <AnimatedBeam
      containerRef={container}
      fromRef={de}
      toRef={para}
      curvature={curvatura}
      delay={atraso}
      duration={parado ? 0 : 3.2}
      repeat={parado ? 0 : Infinity}
      repeatDelay={1.2}
      pathColor={CORES_FEIXE.trilha}
      pathOpacity={0.12}
      pathWidth={2}
      gradientStartColor={CORES_FEIXE.inicio}
      gradientStopColor={CORES_FEIXE.fim}
    />
  );
}

// Uma venda entra pelo PDV, passa pelo SIGEM e chega ao estoque e ao financeiro.
// Decorativa: o mesmo conteúdo está no texto da página.
export function ModulosConectados() {
  const container = useRef<HTMLDivElement>(null);
  const centro = useRef<HTMLDivElement>(null);
  const refVendas = useRef<HTMLDivElement>(null);
  const refConfig = useRef<HTMLDivElement>(null);
  const refEstoque = useRef<HTMLDivElement>(null);
  const refFinanceiro = useRef<HTMLDivElement>(null);
  const parado = useReducedMotion() ?? false;

  return (
    <div
      ref={container}
      aria-hidden
      className="relative mx-auto flex h-[340px] w-full max-w-[600px] items-center justify-between sm:h-[400px]"
    >
      <div className="flex flex-col gap-16 sm:gap-20">
        <NoModulo ref={refVendas} modulo={vendas} />
        <NoModulo ref={refConfig} modulo={config} />
      </div>

      <div
        ref={centro}
        className="bg-deep-glow relative z-10 flex rounded-[24px] p-3.5 shadow-[0_24px_50px_-20px_rgb(18_60_58/0.7)] sm:p-4"
      >
        <Image
          src="/logos/sigem-logo-branco.svg"
          alt=""
          width={1414}
          height={330}
          unoptimized
          className="h-6 w-auto sm:h-8"
        />
      </div>

      <div className="flex flex-col gap-16 sm:gap-20">
        <NoModulo ref={refEstoque} modulo={estoque} />
        <NoModulo ref={refFinanceiro} modulo={financeiro} />
      </div>

      <Feixe
        container={container}
        de={refVendas}
        para={centro}
        curvatura={-40}
        atraso={0}
        parado={parado}
      />
      <Feixe
        container={container}
        de={refConfig}
        para={centro}
        curvatura={40}
        atraso={1.6}
        parado={parado}
      />
      <Feixe
        container={container}
        de={centro}
        para={refEstoque}
        curvatura={-40}
        atraso={0.8}
        parado={parado}
      />
      <Feixe
        container={container}
        de={centro}
        para={refFinanceiro}
        curvatura={40}
        atraso={0.8}
        parado={parado}
      />
    </div>
  );
}
