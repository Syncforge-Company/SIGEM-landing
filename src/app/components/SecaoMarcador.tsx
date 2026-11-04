import type { ReactNode } from "react";

type Props = { children: ReactNode };

// Marca o início de uma seção: traço verde + nome curto da seção.
export function SecaoMarcador({ children }: Props) {
  return (
    <p className="text-brand mb-5 flex items-center gap-3 text-sm font-semibold">
      <span aria-hidden className="bg-brand h-0.5 w-8 rounded-full" />
      {children}
    </p>
  );
}
