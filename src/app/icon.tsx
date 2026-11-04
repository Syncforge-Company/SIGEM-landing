import { ImageResponse } from "next/og";

import { MarcaSigem } from "./utils/marca";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<MarcaSigem tamanho={512} />, size);
}
