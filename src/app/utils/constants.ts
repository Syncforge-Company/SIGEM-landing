import { Banknote, Box, FileText, Settings, ShoppingCart } from "lucide-react";

import type { ModuloSistema, PerguntaFaq, Plano, VendaExemplo } from "./types";

// Endereço público da landing, base das URLs absolutas de SEO (canonical,
// Open Graph, sitemap). Em produção, defina NEXT_PUBLIC_SITE_URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3002";

// Textos de busca e compartilhamento. Título até ~60 e descrição até ~160 caracteres.
export const SEO = {
  nome: "SIGEM",
  nomeCompleto: "Sistema Integrado de Gestão Empresarial Modular",
  titulo: "SIGEM | Sistema de gestão modular para pequenas empresas",
  descricao:
    "ERP online para pequenas empresas: PDV com caixa, controle de estoque, contas a pagar e receber e cadastros. Contrate só os módulos que usa. Da SyncForge.",
  palavrasChave: [
    "sistema de gestão para pequenas empresas",
    "ERP para pequenas empresas",
    "ERP modular",
    "ERP online",
    "sistema PDV",
    "frente de caixa",
    "controle de estoque",
    "contas a pagar e receber",
    "sistema para loja",
    "SIGEM",
    "SyncForge",
    "SIGEM by SyncForge",
    "sistema de gestão SyncForge",
    "ERP SyncForge",
  ],
  imagemAlt:
    "SIGEM by SyncForge, sistema de gestão modular: cadastros, vendas com PDV, estoque e financeiro",
  empresa: "SyncForge",
  // Marca do produto como aparece no compartilhamento e nos dados estruturados.
  marca: "SIGEM by SyncForge",
  // Data da última mudança de conteúdo, usada no sitemap.
  atualizadoEm: "2026-11-04",
};

// Endereço do SIGEM-app (login e cadastro). Vazio = mesmo domínio da landing.
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";

// Endereço do SIGEM-api, usado pelo formulário de aviso de lançamento.
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export const landingRoutes = {
  login: `${APP_URL}/login`,
  comoFunciona: "#como-funciona",
  planos: "#planos",
  duvidas: "#duvidas",
};

// Fim da contagem do "Em breve": meia-noite de 23/11/2026, horário de Manaus (UTC−4).
export const LANCAMENTO_EM = "2026-11-23T00:00:00-04:00";
// Liga a tela de "Em breve" por ambiente, sem editar código:
// NEXT_PUBLIC_LAUNCH_COUNTDOWN_ENABLED=false mostra a landing direto (dev);
// qualquer outro valor, ou a variável ausente, mantém a contagem ligada. Assim,
// esquecer a variável em produção nunca expõe o site antes do lançamento.
export const EM_BREVE_ATIVO =
  process.env.NEXT_PUBLIC_LAUNCH_COUNTDOWN_ENABLED !== "false";

export const TEXTOS_AVISO = {
  botao: "Avise-me no lançamento",
  titulo: "Avise-me no lançamento",
  descricao:
    "Deixe seu contato e avisamos quando o SIGEM estiver disponível, em 23 de novembro.",
  nome: "Nome",
  email: "E-mail",
  whatsapp: "WhatsApp",
  opcional: "opcional",
  placeholderNome: "Seu nome",
  placeholderEmail: "voce@empresa.com.br",
  placeholderWhatsapp: "(92) 99123-4567",
  enviar: "Quero ser avisado",
  enviando: "Enviando…",
  privacidade: "Usamos seus dados só para avisar sobre o lançamento.",
  sucessoTitulo: (nome: string) => `Pronto, ${nome}!`,
  sucessoTexto: "Você está na lista. Avisamos assim que o SIGEM for lançado.",
  fechar: "Fechar",
  erros: {
    nome: "Informe seu nome.",
    email: "Informe um e-mail válido.",
    whatsapp: "Informe o WhatsApp com DDD.",
    limite: "Muitas tentativas seguidas. Tente de novo em um minuto.",
    generico: "Não foi possível enviar agora. Tente de novo em instantes.",
  },
};

export const NAV_LINKS = [
  { label: "Como funciona", href: landingRoutes.comoFunciona },
  { label: "Planos", href: landingRoutes.planos },
  { label: "Dúvidas", href: landingRoutes.duvidas },
];

export const TAREFAS_DIGITADAS = [
  "vender no balcão.",
  "controlar o estoque.",
  "fechar o caixa.",
  "cobrar quem deve.",
];

// Frase da headline: a parte fixa é estática; só a segunda parte é digitada,
// apagada e repetida em loop.
export const FRASE_HEADLINE = {
  fixa: "Sua empresa funciona melhor",
  digitada: "quando tudo está conectado.",
};

// Os quatro módulos da tela inicial, com os textos e cores do protótipo
// (public/prototypes/Tela de módulos-html).
export const MODULOS_SISTEMA: ModuloSistema[] = [
  {
    id: "vendas",
    nome: "Vendas / PDV",
    descricao: "Frente de caixa, pedidos, orçamentos e clientes.",
    subs: "PDV · Pedidos · Clientes",
    icon: ShoppingCart,
    tom: "verde",
    favorito: true,
  },
  {
    id: "estoque",
    nome: "Estoque",
    descricao: "Produtos, entradas, saídas e inventário em tempo real.",
    subs: "Produtos · Movimentações",
    icon: Box,
    tom: "azul",
    favorito: false,
  },
  {
    id: "financeiro",
    nome: "Financeiro",
    descricao: "Contas a pagar e a receber e fluxo de caixa.",
    subs: "Pagar · Receber · Caixa",
    icon: Banknote,
    tom: "ambar",
    favorito: true,
  },
  {
    id: "config",
    nome: "Configurações",
    descricao: "Usuários, permissões, empresa e preferências.",
    subs: "Usuários · Preferências",
    icon: Settings,
    tom: "cinza",
    favorito: false,
  },
];

// Cores dos feixes do hero: mesmos valores de --color-brand-light, --color-brand e --color-ink.
export const CORES_FEIXE = {
  inicio: "#2cbfae",
  fim: "#176b61",
  trilha: "#123c3a",
};

// Fluxo real do PDV (api/docs/database.md §3), com dados de exemplo.
export const PASSOS_VENDA = [
  {
    titulo: "Você finaliza a venda no PDV",
    texto: "Itens, desconto e forma de pagamento numa tela só.",
  },
  {
    titulo: "O estoque baixa sozinho",
    texto: "Cada produto vendido sai do depósito, com a venda como motivo.",
  },
  {
    titulo: "O financeiro recebe os lançamentos",
    texto:
      "O que é à vista entra no caixa aberto; o parcelado vira conta a receber.",
  },
];

// Uma venda de exemplo, com valores que fecham entre os três módulos:
// R$ 189,90 = Pix de R$ 89,90 + crédito em 2x de R$ 50,00.
export const VENDA_EXEMPLO: VendaExemplo = {
  numero: 1042,
  itens: [
    { produto: "Café 500 g", quantidade: 2, total: 39.8, estoqueAntes: 24 },
    {
      produto: "Azeite extravirgem",
      quantidade: 1,
      total: 64.9,
      estoqueAntes: 12,
    },
    {
      produto: "Queijo minas 1 kg",
      quantidade: 1,
      total: 85.2,
      estoqueAntes: 8,
    },
  ],
  lancamentos: [
    {
      id: "pix",
      titulo: "Caixa 01",
      detalhe: "Entrada via Pix",
      valor: 89.9,
      icon: Banknote,
    },
    {
      id: "p1",
      titulo: "Parcela 1/2",
      detalhe: "Vence em 04/12",
      valor: 50,
      icon: FileText,
    },
    {
      id: "p2",
      titulo: "Parcela 2/2",
      detalhe: "Vence em 04/01",
      valor: 50,
      icon: FileText,
    },
  ],
};

// Pacotes do seed (api/docs/database.md §6). Preços e módulos de Serviços e
// Completo ainda não estão definidos pela SyncForge — confirmar antes de publicar.
export const PLANOS: Plano[] = [
  {
    slug: "servicos",
    nome: "Serviços",
    publico: "Para quem presta serviço e precisa organizar clientes e contas.",
    precoMensal: null,
    precoAnual: null,
    itens: ["Cadastros", "Financeiro", "Configurações e permissões"],
  },
  {
    slug: "comercio",
    nome: "Comércio",
    publico: "Para lojas que vendem no balcão e controlam estoque.",
    precoMensal: null,
    precoAnual: null,
    recomendado: true,
    itens: [
      "Cadastros de clientes, fornecedores e produtos",
      "Vendas, pedidos e PDV com caixa",
      "Estoque por depósito e inventário",
      "Financeiro: contas a pagar e a receber",
      "Configurações e permissões",
    ],
  },
  {
    slug: "completo",
    nome: "Completo",
    publico: "Para empresas que querem todos os módulos liberados.",
    precoMensal: null,
    precoAnual: null,
    itens: ["Todos os módulos do SIGEM", "Novos módulos assim que lançados"],
  },
];

export const FAQ: PerguntaFaq[] = [
  {
    pergunta: "O que é o SIGEM?",
    resposta:
      "O SIGEM é um sistema de gestão empresarial (ERP) online e modular para pequenas e médias empresas. Ele reúne cadastros, vendas com PDV e caixa, controle de estoque e financeiro, e você contrata só os módulos que a sua empresa usa. O lançamento é em 23 de novembro de 2026.",
  },
  {
    pergunta: "Quem desenvolve o SIGEM?",
    resposta:
      "O SIGEM é um produto da SyncForge. A SyncForge desenvolve o sistema e libera os módulos que cada empresa contrata.",
  },
  {
    pergunta: "Posso contratar só alguns módulos?",
    resposta:
      "Sim. Os pacotes reúnem os módulos mais usados por tipo de empresa, e um módulo que não está no seu pacote pode ser contratado avulso.",
  },
  {
    pergunta: "Como o acesso é liberado?",
    resposta:
      "Depois da contratação, a equipe da SyncForge confirma o pagamento e libera os módulos do seu plano. Você recebe o acesso com o usuário administrador da empresa.",
  },
  {
    pergunta: "Posso trocar de pacote depois?",
    resposta:
      "Sim. Ao trocar, os módulos do novo pacote são liberados e o histórico da empresa continua o mesmo.",
  },
  {
    pergunta: "Uma pessoa pode acessar mais de uma empresa?",
    resposta:
      "Sim. Com o mesmo login, ela escolhe a empresa ao entrar e tem um perfil de acesso diferente em cada uma.",
  },
  {
    pergunta: "Dá para limitar o que cada funcionário vê?",
    resposta:
      "Sim. Cada perfil define o que a pessoa pode ver, criar ou editar em cada módulo. O caixa, por exemplo, pode vender sem acessar o financeiro.",
  },
  {
    pergunta: "Os dados da minha empresa ficam separados?",
    resposta:
      "Sim. Cada registro pertence a uma empresa, e quem é de outra empresa não consegue ver nem alterar.",
  },
  {
    pergunta: "O SIGEM emite nota fiscal?",
    resposta:
      "Ainda não. A emissão de NF-e e NFC-e está entre os próximos módulos.",
  },
];
