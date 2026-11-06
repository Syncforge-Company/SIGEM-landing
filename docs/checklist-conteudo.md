# Checklist — conteúdo e identidade da landing

Itens de revisão da landing antes do lançamento. Digitados das notas em
captura de tela; o primeiro item veio cortado na imagem — completar quando o
texto original for recuperado.

- [ ] …revisar os textos dos botões/links "…os módulos" e "Entrar em contato".
      > Na landing atual não existe CTA "Entrar em contato" (o rodapé só tem os
      > links de navegação), e os CTAs existentes são "Conhecer os planos",
      > "Como funciona" e "Avise-me no lançamento". Confirmar o texto completo
      > do item antes de agir.
      > Arquivos: `src/app/sections/HeroSection.tsx`, `LandingHeader.tsx`,
      > `PlanosSection.tsx`, `LandingFooter.tsx`, `utils/constants.ts`
      > (`NAV_LINKS`, `landingRoutes`).

- [ ] Revisar a proposta de valor (Value Proposition): deixar claro o que é o
      SIGEM, para quem foi desenvolvido e quais problemas resolve.
      > Onde a proposta de valor vive hoje:
      > - O que é: `h1` do hero em `HeroSection.tsx` ("Sistema de gestão
      >   modular para pequenas empresas") e `SEO.nomeCompleto`/`SEO.titulo`
      >   em `utils/constants.ts`.
      > - Para quem: `SEO.descricao` ("ERP online para pequenas empresas…") e
      >   o campo `publico` de cada plano em `PLANOS`.
      > - Quais problemas resolve: subtítulo do hero, `PASSOS_VENDA` (fluxo
      >   PDV → estoque → financeiro), `TAREFAS_DIGITADAS` e o FAQ
      >   ("O que é o SIGEM?").
      > Regra da casa (CLAUDE.md): não afirmar que o SIGEM faz algo que ainda
      > não existe — conferir no `SIGEM-app`/`SIGEM-api` e rotular como
      > "disponível", "em desenvolvimento" ou "planejado".

- [ ] Conferir a identidade visual: verificar logotipo, paleta de [cores…].
      > (Item também cortado na imagem — presume-se "paleta de cores".)
      > - Logotipo: `public/logos/` (`sigem-logo.svg`, `sigem-logo-branco.svg`,
      >   `sigem-icone.svg`), usado em `components/Logo.tsx` (header/rodapé) e
      >   em `utils/marca.tsx` para favicon, `icon.tsx`, `apple-icon.tsx` e
      >   `opengraph-image.tsx`.
      > - Paleta: fonte única é o bloco `@theme` de `app/globals.css`
      >   (`--color-ink`, `--color-brand`, `--color-brand-light`, …). No JSX só
      >   podem aparecer tokens do tema (regra do SIGEM-app). Verificar a
      >   paridade: `CORES_FEIXE` em `utils/constants.ts` replica os valores de
      >   `--color-brand-light`, `--color-brand` e `--color-ink` para o feixe
      >   animado do hero.
      > - Conferir também: logo branco sobre fundos escuros (seção profunda),
      >   contraste do texto (`ink`/`body`/`subtle` sobre `surface`), imagem de
      >   compartilhamento (OG) e ícones do PWA (`manifest.ts`).

## Como marcar

Marcar `[x]` só depois da revisão feita e dos ajustes commitsados (Conventional
Commits, em inglês), por exemplo: `docs(landing): refine value proposition copy`.
