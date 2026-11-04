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

- A contagem "Em breve" vai até `LANCAMENTO_EM` (23/11/2026). `EM_BREVE_ATIVO = false` mostra a landing direto.
- Os preços dos pacotes ainda não estão definidos (`precoMensal: null`).
- O protótipo em `public/prototypes` é referência de design, não código: sirva a pasta (`python3 -m http.server`) e abra `Main.dc.html`.

## Padrões

Os mesmos do [SIGEM-app](https://github.com/Syncforge-Company/SIGEM-app): só tokens do tema (sem cor hex no JSX), `export default` só em `page.tsx` e `layout.tsx`, Server Component por padrão, `components/ui` é Base UI (prop `render`, não `asChild`), termos de negócio em português e técnicos em inglês, commits em inglês (Conventional Commits).

Novo componente do shadcn: `pnpm dlx shadcn@latest add <componente>`.
