import { FAQ, MODULOS_SISTEMA, SEO, SITE_URL } from "./constants";

// Dados estruturados (schema.org) da landing. Sem `offers`: os preços ainda
// não estão definidos e não podem ser inventados.
export function dadosEstruturados() {
  const empresaId = `${SITE_URL}/#empresa`;
  const siteId = `${SITE_URL}/#site`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": empresaId,
        name: SEO.empresa,
        description: `Empresa que desenvolve o ${SEO.nome}, ${SEO.nomeCompleto}.`,
        logo: `${SITE_URL}/landing/syncforge-logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: SITE_URL,
        name: SEO.nome,
        alternateName: [SEO.nomeCompleto, SEO.marca],
        description: SEO.descricao,
        inLanguage: "pt-BR",
        publisher: { "@id": empresaId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#sigem`,
        name: SEO.nome,
        alternateName: [SEO.nomeCompleto, SEO.marca],
        description: SEO.descricao,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "ERP",
        operatingSystem: "Web",
        inLanguage: "pt-BR",
        featureList: MODULOS_SISTEMA.map(
          ({ nome, descricao }) => `${nome}: ${descricao}`,
        ),
        author: { "@id": empresaId },
        creator: { "@id": empresaId },
        publisher: { "@id": empresaId },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#duvidas`,
        mainEntity: FAQ.map(({ pergunta, resposta }) => ({
          "@type": "Question",
          name: pergunta,
          acceptedAnswer: { "@type": "Answer", text: resposta },
        })),
      },
    ],
  };
}

// JSON.stringify não escapa "<"; trocar evita fechar a tag <script> por engano.
export function serializarJsonLd(dados: unknown) {
  return JSON.stringify(dados).replace(/</g, "\\u003c");
}
