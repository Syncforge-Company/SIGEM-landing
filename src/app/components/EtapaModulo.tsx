import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import type { ModuloSistema } from "../utils/types";
import { ModuloIcone } from "./ModuloIcone";

type Props = {
  modulo: ModuloSistema;
  numero: number;
  titulo: string;
  texto: string;
  ativo: boolean;
  children: ReactNode;
};

// Um módulo no fluxo da venda: a "tela" do módulo e, embaixo, o passo explicado.
export function EtapaModulo({
  modulo,
  numero,
  titulo,
  texto,
  ativo,
  children,
}: Props) {
  return (
    <li className="flex flex-col gap-5">
      <div
        className={cn(
          "bg-surface-card flex flex-col rounded-[20px] border transition-[opacity,border-color,box-shadow] duration-500",
          ativo
            ? "border-brand-light/70 shadow-[0_24px_50px_-30px_rgb(4_120_87/0.55)]"
            : "border-line opacity-60",
        )}
      >
        <div className="border-line flex items-center gap-3 border-b px-5 py-4">
          <ModuloIcone
            modulo={modulo}
            className="size-9 rounded-[10px]"
            iconClassName="size-[18px]"
          />
          <span className="text-ink font-semibold">{modulo.nome}</span>
        </div>
        <div className="min-h-[232px] px-5 py-4">{children}</div>
      </div>

      <div className="flex gap-3.5 px-1">
        <span
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-500",
            ativo ? "bg-brand text-on-deep" : "bg-surface-alt text-subtle",
          )}
        >
          {numero}
        </span>
        <div>
          <p className="text-ink font-semibold">{titulo}</p>
          <p className="text-body mt-1 text-[0.95rem] leading-relaxed">
            {texto}
          </p>
        </div>
      </div>
    </li>
  );
}
