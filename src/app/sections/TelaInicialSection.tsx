import { Iphone } from "../components/Iphone";
import { Safari } from "../components/Safari";
import { SecaoMarcador } from "../components/SecaoMarcador";
import { TelaEscalonada } from "../components/TelaEscalonada";
import { TelaModulos } from "../components/TelaModulos";

// Proporções da área de tela das molduras da Magic UI.
const DESKTOP = { largura: 1280, altura: Math.round((1280 * 700) / 1200) };
const CELULAR = { largura: 390, altura: Math.round((390 * 843.5) / 389.5) };

export function TelaInicialSection() {
  return (
    <section
      id="como-funciona"
      className="bg-surface-alt scroll-mt-16 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          <SecaoMarcador>Como funciona</SecaoMarcador>
          <h2 className="text-ink max-w-md text-3xl leading-tight font-bold tracking-[-0.03em] sm:text-[2.6rem]">
            Cada módulo a um clique da tela inicial
          </h2>
          <p className="text-body mt-5 max-w-md text-[1.05rem] leading-relaxed">
            Ao entrar, você vê só os módulos que a sua empresa contratou. Fixe
            nos favoritos os que usa todo dia e encontre o resto pela busca, no
            computador ou no celular.
          </p>
        </div>

        <div
          role="img"
          aria-label="Tela inicial do SIGEM no computador e no celular, com os favoritos Vendas e Financeiro e os módulos Vendas, Estoque, Financeiro e Configurações."
          className="relative pb-20 lg:mr-[-12%] lg:pb-16"
        >
          <Safari
            url="app.sigem.com.br/inicio"
            className="rounded-xl shadow-[0_30px_70px_-35px_rgb(11_20_48/0.45)]"
          >
            <TelaEscalonada {...DESKTOP}>
              <TelaModulos />
            </TelaEscalonada>
          </Safari>

          <div className="absolute right-3 -bottom-4 w-[30%] origin-bottom rotate-[7deg] max-w-[190px] min-w-[120px] drop-shadow-[0_24px_40px_rgb(11_20_48/0.3)] sm:right-[8%] lg:-bottom-12">
            <Iphone>
              <TelaEscalonada {...CELULAR}>
                <TelaModulos compacto />
              </TelaEscalonada>
            </Iphone>
          </div>
        </div>
      </div>
    </section>
  );
}
