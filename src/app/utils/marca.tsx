// Marca do SIGEM para as imagens geradas com next/og (ícones e imagem de
// compartilhamento). Essas imagens não leem o CSS nem os arquivos do site, então
// tudo é lido no build a partir das fontes oficiais:
// - cores: tokens do @theme em globals.css (fonte única da paleta);
// - símbolo: public/logos/sigem-icone.svg, embutido como data URL.
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Cores
// -----------------------------------------------------------------------------

// Nome usado no código → token de globals.css. Os valores vêm sempre do CSS.
const TOKENS_MARCA = {
  ink: "--color-ink",
  body: "--color-body",
  brand: "--color-brand",
  brandStrong: "--color-brand-strong",
  brandLight: "--color-brand-light",
  surface: "--color-surface",
  line: "--color-line",
  highlight: "--color-highlight",
  onDeep: "--color-on-deep",
} as const;

type CorMarca = keyof typeof TOKENS_MARCA;

function lerCoresDoTema(): Record<CorMarca, string> {
  const css = readFileSync(join(process.cwd(), "src/app/globals.css"), "utf8");
  // Só o bloco `@theme {`, onde ficam os valores; o `@theme inline` só referencia variáveis.
  const tema = css.match(/@theme\s*\{([\s\S]*?)\n\}/)?.[1] ?? "";
  const valores = new Map(
    [...tema.matchAll(/(--color-[\w-]+)\s*:\s*([^;]+);/g)].map(
      ([, token, valor]) => [token, valor.trim()],
    ),
  );

  return Object.fromEntries(
    Object.entries(TOKENS_MARCA).map(([cor, token]) => {
      const valor = valores.get(token);
      if (!valor) {
        throw new Error(`Token ${token} não encontrado no @theme de globals.css.`);
      }
      return [cor, valor];
    }),
  ) as Record<CorMarca, string>;
}

export const CORES_MARCA = lerCoresDoTema();

// Símbolo
// -----------------------------------------------------------------------------

const SVG_SIMBOLO = readFileSync(
  join(process.cwd(), "public/logos/sigem-icone.svg"),
);

export const SIMBOLO = `data:image/svg+xml;base64,${SVG_SIMBOLO.toString("base64")}`;

// Altura ÷ largura do símbolo, tirada do viewBox do próprio SVG.
const [, , larguraSvg, alturaSvg] =
  SVG_SIMBOLO.toString("utf8")
    .match(/viewBox="([^"]+)"/)?.[1]
    .split(/\s+/)
    .map(Number) ?? [];

export const PROPORCAO_SIMBOLO = alturaSvg / larguraSvg;

type SimboloProps = { largura: number };

// O símbolo como fundo de uma div: o ImageResponse desenha sem precisar de <img>.
export function SimboloSigem({ largura }: SimboloProps) {
  return (
    <div
      style={{
        width: largura,
        height: largura * PROPORCAO_SIMBOLO,
        display: "flex",
        backgroundImage: `url(${SIMBOLO})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

// Marca
// -----------------------------------------------------------------------------

type MarcaProps = { tamanho: number; cantoReto?: boolean };

// Símbolo centralizado num quadrado com o fundo da landing.
export function MarcaSigem({ tamanho, cantoReto = false }: MarcaProps) {
  const margem = tamanho * 0.12;

  return (
    <div
      style={{
        width: tamanho,
        height: tamanho,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: CORES_MARCA.surface,
        borderRadius: cantoReto ? 0 : tamanho * 0.22,
      }}
    >
      <SimboloSigem largura={tamanho - margem * 2} />
    </div>
  );
}
