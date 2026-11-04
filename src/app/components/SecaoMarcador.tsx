import type { ReactNode } from "react";

type Props = { children: ReactNode; as?: "p" | "span" };

// Marca o início de uma seção: traço verde + nome curto da seção.
// `as="span"` permite usá-lo dentro de um título (ex.: no h1 do hero).
export function SecaoMarcador({ children, as: Tag = "p" }: Props) {
  return (
    <Tag className="text-brand mb-5 flex items-center gap-3 text-sm font-semibold tracking-normal">
      <span aria-hidden className="bg-brand h-0.5 w-8 rounded-full" />
      {children}
    </Tag>
  );
}
