import { CtaLink } from "../components/CtaLink";
import { FraseDigitada } from "../components/FraseDigitada";
import { ModulosConectados } from "../components/ModulosConectados";
import { SecaoMarcador } from "../components/SecaoMarcador";
import { landingRoutes } from "../utils/constants";

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:py-16">
        <div>
          {/* O marcador faz parte do h1 para o título da página conter o termo de busca principal. */}
          <h1 className="text-ink text-[2.5rem] leading-[1.05] font-bold tracking-[-0.035em] sm:text-[3.5rem]">
            <SecaoMarcador as="span">Sistema de gestão modular</SecaoMarcador>
            <span className="sr-only"> para pequenas empresas: </span>
            <FraseDigitada />
          </h1>
          <p className="text-body mt-5 max-w-[34rem] text-lg leading-relaxed">
            Vendas, estoque, financeiro e cadastros integrados em um único
            sistema. Contrate somente os módulos que sua empresa precisa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href={landingRoutes.planos}>Conhecer os planos</CtaLink>
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
