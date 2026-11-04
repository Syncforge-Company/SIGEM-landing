import { APP_URL, TEXTOS_AVISO } from "./constants";
import type { AvisoErros, AvisoValores, PeriodoPlano, Plano } from "./types";

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

// (92) 99123-4567 enquanto digita; guarda no máximo 11 dígitos.
export function mascararWhatsapp(valor: string) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  const meio = d.length === 11 ? 7 : 6;
  return `(${d.slice(0, 2)}) ${d.slice(2, meio)}-${d.slice(meio)}`;
}

export function validarAviso({ nome, email, whatsapp }: AvisoValores) {
  const erros: AvisoErros = {};
  if (!nome.trim()) erros.nome = TEXTOS_AVISO.erros.nome;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    erros.email = TEXTOS_AVISO.erros.email;
  const digitos = whatsapp.replace(/\D/g, "");
  if (digitos && (digitos.length < 10 || digitos.length > 11))
    erros.whatsapp = TEXTOS_AVISO.erros.whatsapp;
  return erros;
}
