// Marca do SIGEM (quadrado verde com a grade de módulos) para imagens geradas
// com next/og. Essas imagens não leem o CSS do site, então as cores vêm daqui,
// com os mesmos valores dos tokens de globals.css.
export const CORES_MARCA = {
  brand: "#047857",
  brandStrong: "#065f46",
  brandLight: "#34d399",
  onDeep: "#f0fdf7",
  ink: "#0b1430",
  body: "#4b5675",
  surface: "#f3f5fa",
  line: "#e3e8f2",
  highlight: "#e3f6ec",
};

type Props = { tamanho: number; cantoReto?: boolean };

export function MarcaSigem({ tamanho, cantoReto = false }: Props) {
  const quadrado = tamanho * 0.23;
  const espaco = tamanho * 0.086;
  const borda = Math.max(2, tamanho * 0.055);

  return (
    <div
      style={{
        width: tamanho,
        height: tamanho,
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        gap: espaco,
        padding: (tamanho - (2 * quadrado + espaco)) / 2,
        background: CORES_MARCA.brand,
        borderRadius: cantoReto ? 0 : tamanho * 0.25,
      }}
    >
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width: quadrado,
            height: quadrado,
            border: `${borda}px solid ${CORES_MARCA.onDeep}`,
            borderRadius: quadrado * 0.24,
          }}
        />
      ))}
    </div>
  );
}
