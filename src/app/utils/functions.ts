import { APP_URL } from "./constants";
import type { PeriodoPlano, Plano } from "./types";

const real = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function precoDoPeriodo(plano: Plano, periodo: PeriodoPlano) {
  return periodo === "anual" ? plano.precoAnual : plano.precoMensal;
}

export function formatarPreco(valor: number) {
  return real.format(valor);
}

export function temPrecoAnual(planos: Plano[]) {
  return planos.some((plano) => plano.precoAnual !== null);
}

export function cadastroHref(slug: string) {
  return `${APP_URL}/cadastro?plano=${slug}`;
}

export function totalDaVenda(itens: { total: number }[]) {
  return itens.reduce((soma, item) => soma + item.total, 0);
}
