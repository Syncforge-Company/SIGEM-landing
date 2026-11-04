import { CtaLink } from "../components/CtaLink";
import { ModulosConectados } from "../components/ModulosConectados";
import { SecaoMarcador } from "../components/SecaoMarcador";
import { TarefaDigitada } from "../components/TarefaDigitada";
import { landingRoutes } from "../utils/constants";

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:py-16">
        <div>
          <SecaoMarcador>Sistema de gestão modular</SecaoMarcador>
          <h1 className="text-ink text-[2.5rem] leading-[1.05] font-bold tracking-[-0.035em] sm:text-[3.5rem]">
            Hoje sua empresa precisa <TarefaDigitada />
          </h1>
          <p className="text-body mt-5 max-w-[34rem] text-lg leading-relaxed">
            O SIGEM reúne cadastros, vendas, estoque e financeiro. Você contrata
            o pacote que faz sentido agora e libera novos módulos quando a
            empresa crescer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={landingRoutes.planos}>Ver planos</CtaLink>
            <CtaLink href={landingRoutes.comoFunciona} variant="outline">
              Como funciona
            </CtaLink>
          </div>
        </div>

        <ModulosConectados />
      </div>
    </section>
  );
}
