import { cn } from "@/lib/utils";

import type { ModuloSistema, TomModulo } from "../utils/types";

// Fundo e cor do ícone de cada módulo, como no protótipo.
export const TONS_MODULO: Record<TomModulo, string> = {
  verde: "bg-highlight text-brand",
  azul: "bg-blue-50 text-blue-700",
  ambar: "bg-amber-50 text-amber-700",
  cinza: "bg-slate-100 text-slate-600",
};

type Props = {
  modulo: ModuloSistema;
  className?: string;
  iconClassName?: string;
};

export function ModuloIcone({ modulo, className, iconClassName }: Props) {
  const { icon: Icon } = modulo;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        TONS_MODULO[modulo.tom],
        className,
      )}
    >
      <Icon aria-hidden className={iconClassName} strokeWidth={1.8} />
    </div>
  );
}
