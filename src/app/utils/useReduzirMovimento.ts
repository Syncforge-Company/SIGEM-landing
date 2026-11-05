"use client";

import { useReducedMotion } from "motion/react";

import { useMontado } from "./useMontado";

// Preferência de movimento reduzido só vale após a hidratação: se o primeiro
// render do cliente differir do HTML do servidor, a hidratação quebra.
export function useReduzirMovimento() {
  const reduzir = useReducedMotion();
  return useMontado() && !!reduzir;
}
