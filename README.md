# SIGEM Landing

Landing pública do **SIGEM (Sistema Integrado de Gestão Empresarial Modular)**, o ERP modular da SyncForge. Repositório privado, de uso interno, submódulo `landing/` do repo agregador [SIGEM](https://github.com/Syncforge-Company/SIGEM).

**Stack:** Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui (Base UI) · Motion · Lucide

## Rodando localmente

```bash
git clone --recurse-submodules https://github.com/Syncforge-Company/SIGEM.git
cd SIGEM/landing
pnpm install
pnpm dev
```

A landing abre em http://localhost:3002 (o app usa a 3000 e a API a 3001). Usamos Node 24 e pnpm 11.

Os links de login e cadastro apontam para o SIGEM-app. Copie `.env.example` para `.env.local` e ajuste `NEXT_PUBLIC_APP_URL` (ex.: `http://localhost:3000`). Sem a variável, os links usam o mesmo domínio da landing.

Em produção, defina `NEXT_PUBLIC_SITE_URL` com o endereço público da landing (ex.: `https://sigem.com.br`): ele é a base do canonical, das imagens de compartilhamento, do `robots.txt` e do `sitemap.xml`.

O botão "Avise-me no lançamento" envia os contatos para o SIGEM-api: ajuste `NEXT_PUBLIC_API_URL` (ex.: `http://localhost:3001`) e, na API, coloque o endereço da landing em `LANDING_URL` para o CORS liberar.

## Comandos

```bash
pnpm dev                   # servidor de desenvolvimento (porta 3002)
pnpm build                 # build de produção
pnpm start                 # serve o build
pnpm lint                  # eslint
pnpm exec tsc --noEmit     # checagem de tipos
```

## Estrutura

```
public/
├── landing/syncforge-logo.png          # logo do rodapé
└── prototypes/Tela de módulos-html/    # protótipo exportado da tela de módulos (referência de design)
src/
├── app/
│   ├── layout.tsx  globals.css         # fonte DM Sans e tokens da marca (ink, brand, surface, highlight…)
│   ├── page.tsx                        # monta as seções
│   ├── components/                     # Magic UI copiada (feixes, digitação, lista, contador, Safari, iPhone) e peças da landing
│   ├── sections/                       # uma seção da página por arquivo
│   └── utils/                          # constants (textos, planos, FAQ, rotas), functions, types, fonts
├── components/ui/                      # shadcn (Base UI) usados aqui: button, accordion
└── lib/utils.ts                        # cn
```

- A contagem "Em breve" vai até `LANCAMENTO_EM` (23/11/2026) e é ligada por ambiente com `NEXT_PUBLIC_LAUNCH_COUNTDOWN_ENABLED` (veja "Ambientes").
- Os preços dos pacotes ainda não estão definidos (`precoMensal: null`).
- O protótipo em `public/prototypes` é referência de design, não código: sirva a pasta (`python3 -m http.server`) e abra `Main.dc.html`.

## Ambientes

| Ambiente | Branch | Na Vercel | Contagem "Em breve" | Para quê |
|---|---|---|---|---|
| Produção | `main` | Production | Ligada (`true`) | Site público |
| Homologação | `staging` | Preview, só a branch `staging`, com endereço fixo | Ligada (`true`) | A Alessandra testa exatamente o que vai subir |
| Desenvolvimento | `dev` e PRs | Preview (todas as branches) | Desligada (`false`) | Trabalhar no layout sem a contagem |
| Local | qualquer | `.env.local` | Desligada (`false`) | `pnpm dev` |

**Fluxo:** `feature` → PR para `dev` → PR de `dev` para `staging` (homologação) → depois do OK, PR de `staging` para `main` (produção). Correção urgente sai da `main` e volta para `staging` e `dev`.

**Variáveis por ambiente:** cada ambiente tem um arquivo de exemplo, só de referência (o Next não carrega esses arquivos):

- `.env.example` → copie para `.env.local` (desenvolvimento local);
- `.env.development.example` → Vercel, ambiente **Preview** (todas as branches);
- `.env.staging.example` → Vercel, ambiente **Preview** com a branch **`staging`** selecionada; vale por cima dos valores gerais de Preview;
- `.env.production.example` → Vercel, ambiente **Production**.

`NEXT_PUBLIC_LAUNCH_COUNTDOWN_ENABLED=false` mostra a landing direto. Qualquer outro valor, ou a variável ausente, mantém a contagem ligada: esquecer a variável em produção nunca expõe o site antes do lançamento. Variáveis `NEXT_PUBLIC_*` entram no build, então mudar o valor na Vercel exige um novo deploy.

**Endereço da homologação:** em Vercel → Settings → Domains, adicione um domínio (ex.: `homolog.sigem…` ou um `*.vercel.app`) e associe-o à branch `staging` (Git Branch). Use esse endereço em `NEXT_PUBLIC_SITE_URL` da staging e em `LANDING_URL` da API de homologação.

## Padrões

Os mesmos do [SIGEM-app](https://github.com/Syncforge-Company/SIGEM-app): só tokens do tema (sem cor hex no JSX), `export default` só em `page.tsx` e `layout.tsx`, Server Component por padrão, `components/ui` é Base UI (prop `render`, não `asChild`), termos de negócio em português e técnicos em inglês, commits em inglês (Conventional Commits).

Novo componente do shadcn: `pnpm dlx shadcn@latest add <componente>`.
