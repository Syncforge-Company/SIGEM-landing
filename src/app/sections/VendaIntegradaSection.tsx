import { FluxoVenda } from "../components/FluxoVenda";
import { SecaoMarcador } from "../components/SecaoMarcador";

export function VendaIntegradaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <SecaoMarcador>Módulos integrados</SecaoMarcador>
            <h2 className="text-ink max-w-lg text-3xl leading-tight font-bold tracking-[-0.03em] sm:text-[2.6rem]">
              Uma venda e o resto da empresa já sabe
            </h2>
          </div>
          <p className="text-body max-w-md text-[1.05rem] leading-relaxed lg:justify-self-end">
            Os módulos conversam entre si: a venda feita no PDV baixa o estoque
            e lança no financeiro, sem digitar a mesma informação duas vezes.
          </p>
        </div>

        <div className="mt-14">
          <FluxoVenda />
        </div>
      </div>
    </section>
  );
}
