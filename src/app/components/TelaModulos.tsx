import {
  CircleHelp,
  CloudSun,
  LayoutGrid,
  ListFilter,
  MessageCircle,
  Search,
  Star,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { MODULOS_SISTEMA } from "../utils/constants";
import { jakarta } from "../utils/fonts";
import { ModuloIcone } from "./ModuloIcone";

type Props = { compacto?: boolean };

const FAVORITOS = MODULOS_SISTEMA.filter((modulo) => modulo.favorito);

// Tela inicial do sistema, recriada a partir do protótipo
// (public/prototypes/Tela de módulos-html). Estática: é uma ilustração.
export function TelaModulos({ compacto = false }: Props) {
  return (
    <div
      className={cn(
        jakarta.className,
        "bg-surface text-ink flex h-full flex-col overflow-hidden",
      )}
    >
      <header
        className={cn(
          "bg-brand text-white",
          compacto ? "px-5 pt-14 pb-4" : "px-8 py-3.5",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[22px] leading-[1.1] font-extrabold tracking-[1px]">
              SIGEM
            </span>
            <span className="text-xs font-medium tracking-[0.3px] text-white/85">
              {compacto
                ? "Gestão Empresarial Modular"
                : "Sistema Integrado de Gestão Empresarial Modular"}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            {!compacto && (
              <>
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/14">
                  <CircleHelp className="size-5" strokeWidth={1.8} />
                </span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/14">
                  <MessageCircle className="size-5" strokeWidth={1.8} />
                </span>
                <div className="flex flex-col items-end gap-[3px] pl-2">
                  <span className="text-sm font-semibold">Olá, Ana Souza</span>
                  <span className="text-xs text-white/85">
                    Terça-feira, 4 de novembro de 2026
                  </span>
                </div>
              </>
            )}
            <span className="flex size-11 items-center justify-center rounded-full border border-white/35 bg-white/20 text-[15px] font-bold">
              AS
            </span>
          </div>
        </div>
      </header>

      <main
        className={cn(
          "flex flex-col",
          compacto ? "gap-6 px-5 py-6" : "gap-8 px-8 py-8",
        )}
      >
        <section className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h1
              className={cn(
                "m-0 font-extrabold tracking-[-0.5px]",
                compacto ? "text-[22px]" : "text-[28px]",
              )}
            >
              Bom te ver de novo, <span className="text-brand">Ana</span>
            </h1>
            <p className="text-body m-0 text-[15px]">
              Escolha um módulo para começar.
            </p>
          </div>
          {!compacto && (
            <div className="border-line flex items-center gap-2.5 rounded-full border bg-white px-4 py-2.5">
              <CloudSun className="text-body size-5" strokeWidth={1.8} />
              <span className="text-body text-sm">Manaus, AM</span>
              <span className="text-lg font-bold">27°</span>
            </div>
          )}
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <Star
              className="size-5 fill-amber-500 text-amber-500"
              strokeWidth={1.6}
            />
            <h2 className="m-0 text-lg font-bold">Favoritos</h2>
          </div>
          <div
            className={cn(
              "grid gap-4",
              compacto
                ? "grid-cols-1 gap-3"
                : "grid-cols-[repeat(auto-fill,minmax(280px,1fr))]",
            )}
          >
            {FAVORITOS.map((modulo) => (
              <div
                key={modulo.id}
                className="border-line flex items-center gap-4 rounded-2xl border bg-white px-5 py-[18px] shadow-[0_1px_2px_rgb(11_20_48/0.04)]"
              >
                <ModuloIcone
                  modulo={modulo}
                  className="size-12 rounded-[14px]"
                  iconClassName="size-6"
                />
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-base font-bold">{modulo.nome}</span>
                  <span className="text-body text-[13px] font-medium">
                    {modulo.subs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div
            className={cn(
              "flex gap-4",
              compacto ? "flex-col" : "items-center justify-between",
            )}
          >
            <div className="flex items-center gap-2.5">
              <LayoutGrid className="size-5" strokeWidth={1.8} />
              <h2 className="m-0 text-lg font-bold">Módulos do sistema</h2>
              <span className="bg-brand/10 text-brand rounded-full px-2.5 py-1 text-xs font-bold">
                {MODULOS_SISTEMA.length} módulos
              </span>
            </div>
            <div className="flex w-full max-w-[560px] items-center gap-2.5">
              <div className="border-line flex h-12 min-w-0 flex-1 items-center gap-2.5 rounded-[14px] border bg-white px-4">
                <Search className="text-body size-[18px]" strokeWidth={2} />
                <span className="text-subtle text-[15px]">
                  Pesquisar módulos
                </span>
              </div>
              <div className="border-line flex h-12 items-center gap-2 rounded-[14px] border bg-white px-4 text-[15px] font-semibold">
                <ListFilter className="size-[18px]" strokeWidth={1.9} />
                {!compacto && <span>Filtrar</span>}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "grid gap-4",
              compacto ? "grid-cols-1 gap-3" : "grid-cols-4",
            )}
          >
            {MODULOS_SISTEMA.map((modulo) => (
              <div
                key={modulo.id}
                className={cn(
                  "border-line flex flex-col rounded-[18px] border bg-white shadow-[0_1px_2px_rgb(11_20_48/0.04)]",
                  compacto ? "gap-3 p-4" : "min-h-[196px] gap-[18px] p-[22px]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <ModuloIcone
                    modulo={modulo}
                    className="size-[52px] rounded-[15px]"
                    iconClassName="size-[26px]"
                  />
                  <Star
                    className={cn(
                      "size-[22px]",
                      modulo.favorito
                        ? "fill-amber-500 text-amber-500"
                        : "text-slate-400",
                    )}
                    strokeWidth={1.6}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <h3 className="m-0 text-lg font-bold">{modulo.nome}</h3>
                  <p className="text-body m-0 text-sm leading-[1.45]">
                    {modulo.descricao}
                  </p>
                </div>
                {!compacto && (
                  <div className="border-surface-alt border-t pt-3.5">
                    <span className="text-body text-xs font-semibold">
                      {modulo.subs}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
