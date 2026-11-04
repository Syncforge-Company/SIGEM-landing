import type { MetadataRoute } from "next";

import { SEO } from "./utils/constants";
import { CORES_MARCA } from "./utils/marca";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SEO.nome} · ${SEO.nomeCompleto}`,
    short_name: SEO.nome,
    description: SEO.descricao,
    lang: "pt-BR",
    start_url: "/",
    display: "browser",
    background_color: CORES_MARCA.surface,
    theme_color: CORES_MARCA.brand,
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
