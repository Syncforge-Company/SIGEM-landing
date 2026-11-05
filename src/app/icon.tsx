import { ImageResponse } from "next/og";

import { SIMBOLO } from "./utils/marca";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

// Favicon da aba: só o ícone, com fundo transparente.
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
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse não aceita next/image */}
        <img
          src={SIMBOLO}
          alt=""
          style={{ width: 480, height: (480 * 330) / 331, display: "block" }}
        />
      </div>
    ),
    size,
  );
}
