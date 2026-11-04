import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SecaoMarcador } from "../components/SecaoMarcador";

import { FAQ } from "../utils/constants";

export function FaqSection() {
  return (
    <section id="duvidas" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div>
          <SecaoMarcador>Dúvidas</SecaoMarcador>
          <h2 className="text-ink text-3xl leading-tight font-bold tracking-[-0.03em] sm:text-[2.6rem]">
            Perguntas frequentes
          </h2>
          <p className="text-body mt-4 max-w-sm text-[1.05rem] leading-relaxed">
            Como funcionam a contratação, os acessos e os dados da sua empresa.
          </p>
        </div>

        {/* hiddenUntilFound mantém as respostas no HTML (buscadores e a busca do navegador encontram) sem mostrá-las fechadas. */}
        <Accordion hiddenUntilFound className="border-line border-t">
          {FAQ.map(({ pergunta, resposta }) => (
            <AccordionItem
              key={pergunta}
              value={pergunta}
              className="border-line border-b"
            >
              <AccordionTrigger className="text-ink py-5 text-base font-semibold hover:no-underline">
                {pergunta}
              </AccordionTrigger>
              <AccordionContent className="text-body max-w-[60ch] pb-5 text-[0.98rem] leading-relaxed">
                {resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
