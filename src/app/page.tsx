import { EmBreveSection } from "./sections/EmBreveSection";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";
import { LandingFooter } from "./sections/LandingFooter";
import { LandingHeader } from "./sections/LandingHeader";
import { PlanosSection } from "./sections/PlanosSection";
import { TelaInicialSection } from "./sections/TelaInicialSection";
import { VendaIntegradaSection } from "./sections/VendaIntegradaSection";

export default function Page() {
  return (
    <div className="bg-surface flex min-h-full flex-col">
      <LandingHeader />
      <main className="flex-1">
        <EmBreveSection>
          <HeroSection />
        </EmBreveSection>
        <TelaInicialSection />
        <VendaIntegradaSection />
        <PlanosSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </div>
  );
}
