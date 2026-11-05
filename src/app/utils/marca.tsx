// Marca do SIGEM (o ícone em SVG dos assets de /logos) para imagens geradas com
// next/og. Essas imagens não leem o CSS nem servem arquivos do site, então o SVG
// entra embutido como data URL e as cores vêm de CORES_MARCA, com os mesmos
// valores dos tokens de globals.css.
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const CORES_MARCA = {
  brand: "#176b61",
  brandStrong: "#123c3a",
  brandLight: "#2cbfae",
  onDeep: "#f4f7f6",
  ink: "#123c3a",
  body: "#45605d",
  surface: "#f4f7f6",
  line: "#dce9e4",
  highlight: "#d9f2e9",
};

export const SIMBOLO = `data:image/svg+xml;base64,${Buffer.from(
  readFileSync(
    join(process.cwd(), "public", "logos", "sigem-icone.svg"),
  ),
).toString("base64")}`;

type Props = { tamanho: number; cantoReto?: boolean };

export function MarcaSigem({ tamanho, cantoReto = false }: Props) {
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
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse não aceita next/image */}
      <img
        src={SIMBOLO}
        alt=""
        style={{
          width: tamanho - margem * 2,
          height: ((tamanho - margem * 2) * 330) / 331,
          display: "block",
        }}
      />
    </div>
  );
}
