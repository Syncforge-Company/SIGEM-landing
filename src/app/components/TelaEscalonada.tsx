"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = { largura: number; altura: number; children: ReactNode };

// Desenha a tela no tamanho real do sistema e reduz para caber na moldura.
export function TelaEscalonada({ largura, altura, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entrada]) =>
      setEscala(entrada.contentRect.width / largura),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [largura]);

  return (
    <div ref={ref} className="size-full overflow-hidden">
      <div
        className={escala === null ? "invisible" : undefined}
        style={{
          width: largura,
          height: altura,
          transform: `scale(${escala ?? 1})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
