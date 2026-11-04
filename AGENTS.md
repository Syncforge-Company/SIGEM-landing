<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## SIGEM — padrões do projeto

A landing segue os padrões do `SIGEM-app` (no repo agregador, `../app/docs/`): `code-standards.md` para nomes, TypeScript, componentes (shadcn sobre Base UI: prop `render`, não `asChild`) e estilo, e `decisions.md` para o porquê. As regras de módulos, master-detail e `DataTable` não se aplicam aqui.

Commits em inglês (Conventional Commits).
