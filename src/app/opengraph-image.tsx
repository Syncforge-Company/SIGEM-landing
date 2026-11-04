import { ImageResponse } from "next/og";

import { SEO } from "./utils/constants";
import { CORES_MARCA, MarcaSigem } from "./utils/marca";

export const alt = SEO.imagemAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MODULOS = ["Cadastros", "Vendas e PDV", "Estoque", "Financeiro"];

// Imagem de compartilhamento (WhatsApp, LinkedIn, Facebook, X).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: CORES_MARCA.surface,
          color: CORES_MARCA.ink,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <MarcaSigem tamanho={72} />
          <span style={{ fontSize: 40, fontWeight: 700 }}>SIGEM</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Sistema de gestão modular para pequenas empresas
          </span>
          <div style={{ display: "flex", gap: 14 }}>
            {MODULOS.map((modulo) => (
              <span
                key={modulo}
                style={{
                  fontSize: 26,
                  padding: "10px 22px",
                  borderRadius: 999,
                  background: CORES_MARCA.highlight,
                  color: CORES_MARCA.brandStrong,
                }}
              >
                {modulo}
              </span>
            ))}
          </div>
        </div>

        <span style={{ fontSize: 26, color: CORES_MARCA.body }}>
          {`Lançamento em 23 de novembro · ${SEO.empresa}`}
        </span>
      </div>
    ),
    size,
  );
}
