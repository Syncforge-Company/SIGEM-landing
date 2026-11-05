"use client";

import { FRASE_HEADLINE } from "../utils/constants";
import { useMontado } from "../utils/useMontado";
import { TypingAnimation } from "./TypingAnimation";

// Headline com a primeira parte fixa e a segunda digitada em loop. O servidor
// renderiza a frase inteira e a animação começa depois de montar, para o
// primeiro render bater entre servidor e cliente.
export function FraseDigitada() {
  const montado = useMontado();

  return (
    <>
      <span className="block">{FRASE_HEADLINE.fixa}</span>
      {montado ? (
        <TypingAnimation
          words={[FRASE_HEADLINE.digitada]}
          loop
          startOnView={false}
          typeSpeed={70}
          deleteSpeed={35}
          pauseDelay={1800}
          cursorStyle="line"
          className="block min-h-[2.1em] leading-[1.05] tracking-[-0.035em]"
        />
      ) : (
        <span className="block">{FRASE_HEADLINE.digitada}</span>
      )}
    </>
  );
}
