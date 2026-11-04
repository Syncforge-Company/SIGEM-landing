import { ImageResponse } from "next/og";

import { MarcaSigem } from "./utils/marca";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<MarcaSigem tamanho={180} cantoReto />, size);
}
