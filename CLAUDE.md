# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Contexto

Landing pública do SIGEM (Sistema Integrado de Gestão Empresarial Modular), em Next.js 16 (App Router), React 19, Tailwind 4 e shadcn sobre Base UI. Saiu do `SIGEM-app` para um repo próprio e é o submódulo `landing/` do repo agregador `SIGEM`. O sistema logado fica no `SIGEM-app` e a API no `SIGEM-api`.

**Estado atual:** página única com contagem "Em breve" até 23/11/2026, seções em `src/app/sections`, cópias de componentes da Magic UI em `src/app/components`, `components/ui` com `button`, `accordion`, `dialog`, `input` e `label`, e o protótipo HTML da tela de módulos em `public/prototypes`. Os tokens da marca (`ink`, `brand`, `surface`, `highlight`…) estão no `@theme` de `globals.css`. Preços dos pacotes ainda **não definidos** (`precoMensal: null`).

**Ambientes:** `main` = produção e `dev` = desenvolvimento e homologação (a Alessandra testa na `dev`); fluxo `feature` → `dev` → `main`. A contagem "Em breve" é ligada por `NEXT_PUBLIC_LAUNCH_COUNTDOWN_ENABLED` (`EM_BREVE_ATIVO` em `utils/constants.ts`): só `false` desliga, ausente fica ligada. Os valores de cada ambiente estão em `.env.example` (local), `.env.development.example` (Preview, inclui a `dev`) e `.env.production.example`, e são aplicados na Vercel. Não volte a ligar ou desligar a contagem editando o código. Só a produção é indexável: `INDEXAVEL` (em `utils/constants.ts`) usa a `VERCEL_ENV` e, em `preview`/`development`, a página publica `noindex` e o `robots.txt` bloqueia tudo. A `main` é protegida no GitHub: só o Davi faz push ou merge nela.

Login e cadastro apontam para o app via `NEXT_PUBLIC_APP_URL` (`APP_URL` em `utils/constants.ts`).

**SEO:** metadados em `layout.tsx` (título, descrição, canonical, Open Graph, Twitter, robots) a partir de `SEO` e `SITE_URL` em `utils/constants.ts`; `SITE_URL` vem de `NEXT_PUBLIC_SITE_URL` e é **obrigatório em produção** (sem ele, canonical, Open Graph e sitemap apontam para localhost). Arquivos gerados pelo Next: `opengraph-image.tsx`, `icon.tsx`, `apple-icon.tsx`, `robots.ts`, `sitemap.ts` e `manifest.ts`; a marca usada nas imagens fica em `utils/marca.tsx`. O JSON-LD (Organization, WebSite, SoftwareApplication e FAQPage) é montado em `utils/dadosEstruturados.ts` a partir das constantes, então editar o FAQ atualiza os dados estruturados. A marca aparece como "SIGEM by SyncForge" (`SEO.marca`) no nome do site no compartilhamento, no manifest e no JSON-LD, e a SyncForge é a autora e editora do SIGEM nos dados estruturados. Regras: um único `h1` (o do hero); o mock `TelaModulos` não usa tags de título; sem `offers` no JSON-LD enquanto os preços não existirem.

O botão "Avise-me no lançamento", embaixo da contagem, abre um modal (`components/AvisoLancamento.tsx`) que envia nome, e-mail e WhatsApp opcional para `POST /avisos-lancamento` do `SIGEM-api`, no endereço de `NEXT_PUBLIC_API_URL` (`API_URL` em `utils/constants.ts`; chamada em `utils/api.ts`). Os textos ficam em `TEXTOS_AVISO`. A API precisa ter a origem da landing em `LANDING_URL` para o CORS liberar.

## Comandos

Use `pnpm`.

```bash
pnpm dev                   # localhost:3002
pnpm build
pnpm lint
pnpm exec tsc --noEmit

pnpm dlx shadcn@latest add <componente>   # adiciona componente em components/ui
```

## Next.js 16

Antes de escrever código, consulte `node_modules/next/dist/docs/`. `cacheComponents` e `partialPrefetching` estão ligados e o Tailwind roda pelo loader `@tailwindcss/turbopack` em `next.config.ts`.

## Convenções

As mesmas do `SIGEM-app`:

- **`components/ui` é Base UI, não Radix:** composição com a prop `render`, não `asChild`.
- **Cores só por tokens do tema,** nenhuma cor hex no JSX.
- `export default` só em `page.tsx` e `layout.tsx`; o resto usa export nomeado.
- Server Component por padrão; `'use client'` só onde há estado, eventos ou hooks de cliente.
- `any` é proibido: use `unknown` com validação.
- Termos de negócio em português, técnicos em inglês. Textos ao usuário em pt-BR, em `utils/constants.ts`.
- Não afirme que o SIGEM faz algo que ainda não existe: confira no `SIGEM-app`/`SIGEM-api` e diga se é "disponível", "em desenvolvimento" ou "planejado".

Commits em inglês, Conventional Commits (`feat(landing): add pricing toggle`).
