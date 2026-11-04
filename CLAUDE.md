# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Contexto

Landing pública do SIGEM (Sistema Integrado de Gestão Empresarial Modular), em Next.js 16 (App Router), React 19, Tailwind 4 e shadcn sobre Base UI. Saiu do `SIGEM-app` para um repo próprio e é o submódulo `landing/` do repo agregador `SIGEM`. O sistema logado fica no `SIGEM-app` e a API no `SIGEM-api`.

**Estado atual:** página única com contagem "Em breve" até 23/11/2026, seções em `src/app/sections`, cópias de componentes da Magic UI em `src/app/components`, `components/ui` só com `button` e `accordion`, e o protótipo HTML da tela de módulos em `public/prototypes`. Os tokens da marca (`ink`, `brand`, `surface`, `highlight`…) estão no `@theme` de `globals.css`. Preços dos pacotes ainda **não definidos** (`precoMensal: null`).

Login e cadastro apontam para o app via `NEXT_PUBLIC_APP_URL` (`APP_URL` em `utils/constants.ts`).

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
