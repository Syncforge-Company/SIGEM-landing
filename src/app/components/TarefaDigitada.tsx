"use client";

import { useReducedMotion } from "motion/react";

import { TAREFAS_DIGITADAS } from "../utils/constants";
import { TypingAnimation } from "./TypingAnimation";

export function TarefaDigitada() {
  const reduzirMovimento = useReducedMotion();

  return (
    <>
      <span className="sr-only">
        vender, controlar o estoque, fechar o caixa e cobrar.
      </span>
      {reduzirMovimento ? (
        <span aria-hidden className="block">
          {TAREFAS_DIGITADAS[0]}
        </span>
      ) : (
        <TypingAnimation
          aria-hidden
          words={TAREFAS_DIGITADAS}
          loop
          startOnView={false}
          typeSpeed={70}
          deleteSpeed={35}
          pauseDelay={1800}
          cursorStyle="line"
          className="block min-h-[2.1em] leading-[1.05] tracking-[-0.035em] sm:min-h-[1.05em]"
        />
      )}
    </>
  );
}
