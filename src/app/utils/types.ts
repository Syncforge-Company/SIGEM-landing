import type { LucideIcon } from "lucide-react";

export type TomModulo = "verde" | "azul" | "ambar" | "cinza";

export type ModuloSistema = {
  id: string;
  nome: string;
  descricao: string;
  subs: string;
  icon: LucideIcon;
  tom: TomModulo;
  favorito: boolean;
};

export type ItemVenda = {
  produto: string;
  quantidade: number;
  total: number;
  estoqueAntes: number;
};

export type Lancamento = {
  id: string;
  titulo: string;
  detalhe: string;
  valor: number;
  icon: LucideIcon;
};

export type VendaExemplo = {
  numero: number;
  itens: ItemVenda[];
  lancamentos: Lancamento[];
};

export type PeriodoPlano = "mensal" | "anual";

export type Plano = {
  slug: string; // igual ao Plano.slug da API
  nome: string;
  publico: string;
  // null = preço ainda não definido; a tela mostra "Sob consulta".
  precoMensal: number | null;
  precoAnual: number | null;
  recomendado?: boolean;
  itens: string[];
};

export type PerguntaFaq = {
  pergunta: string;
  resposta: string;
};

export type AvisoValores = { nome: string; email: string; whatsapp: string };

export type AvisoErros = Partial<Record<keyof AvisoValores, string>>;
