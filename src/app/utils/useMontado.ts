"use client";

import { useSyncExternalStore } from "react";

// true só depois da hidratação: no servidor e no primeiro render do cliente o
// snapshot é o do servidor (false), então o HTML casa entre os dois lados e a
// árvore é re-renderizada no cliente logo em seguida.
const semAssinatura = () => () => {};
const montado = () => true;
const naoMontado = () => false;

export function useMontado() {
  return useSyncExternalStore(semAssinatura, montado, naoMontado);
}
