"use client";

import { Fragment } from "react";

import { useAgora } from "../utils/useAgora";

type Props = { ate: string };

const PARTES = [
  { label: "Dias", segundos: 86_400 },
  { label: "Horas", segundos: 3_600 },
  { label: "Minutos", segundos: 60 },
  { label: "Segundos", segundos: 1 },
];

function partes(restante: number) {
  let resto = restante;
  return PARTES.map(({ segundos }) => {
    const valor = Math.floor(resto / segundos);
    resto -= valor * segundos;
    return valor;
  });
}

export function ContagemRegressiva({ ate }: Props) {
  const agora = useAgora();
  const fim = Math.floor(new Date(ate).getTime() / 1000);
  const valores = agora === null ? null : partes(Math.max(fim - agora, 0));

  return (
    <dl role="timer" aria-live="off" className="flex items-start">
      {PARTES.map(({ label }, index) => (
        <Fragment key={label}>
          {index > 0 && (
            <span
              aria-hidden
              className="text-subtle/40 px-1.5 text-5xl leading-none font-light sm:px-4 sm:text-7xl"
            >
              :
            </span>
          )}
          <div className="flex min-w-[3.6ch] flex-col-reverse items-center gap-2">
            <dt className="text-subtle text-xs font-medium sm:text-sm">
              {label}
            </dt>
            <dd className="text-ink text-5xl leading-none font-bold tracking-[-0.04em] tabular-nums sm:text-7xl">
              {valores ? String(valores[index]).padStart(2, "0") : "--"}
            </dd>
          </div>
        </Fragment>
      ))}
    </dl>
  );
}
