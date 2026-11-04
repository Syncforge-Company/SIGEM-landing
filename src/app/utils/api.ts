import { API_URL, TEXTOS_AVISO } from "./constants";
import type { AvisoValores } from "./types";

type Resultado = { ok: true } | { ok: false; mensagem: string };

// POST /avisos-lancamento no SIGEM-api. Responde 204 tanto para inscrição
// nova quanto para e-mail repetido.
export async function inscreverAviso({
  nome,
  email,
  whatsapp,
}: AvisoValores): Promise<Resultado> {
  try {
    const resposta = await fetch(`${API_URL}/avisos-lancamento`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: nome.trim(),
        email: email.trim(),
        whatsapp: whatsapp.replace(/\D/g, ""),
      }),
    });
    if (resposta.ok) return { ok: true };
    if (resposta.status === 429)
      return { ok: false, mensagem: TEXTOS_AVISO.erros.limite };
    return { ok: false, mensagem: TEXTOS_AVISO.erros.generico };
  } catch {
    return { ok: false, mensagem: TEXTOS_AVISO.erros.generico };
  }
}
