import { ImageResponse } from "next/og";

import { SimboloSigem } from "./utils/marca";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Favicon da aba: só o símbolo, com fundo transparente.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SimboloSigem largura={480} />
      </div>
    ),
    size,
  );
}
