import { useSyncExternalStore } from "react";

// Relógio compartilhado: um "tick" por segundo. No servidor não há hora
// (null), então o HTML pré-renderizado não depende do momento do build.
function assinar(aviso: () => void) {
  const id = setInterval(aviso, 1000);
  return () => clearInterval(id);
}
const agoraEmSegundos = () => Math.floor(Date.now() / 1000);
const semHora = () => null;

export function useAgora() {
  return useSyncExternalStore(assinar, agoraEmSegundos, semHora);
}
