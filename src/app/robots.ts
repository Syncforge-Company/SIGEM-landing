import type { MetadataRoute } from "next";

import { INDEXAVEL, SITE_URL } from "./utils/constants";

export default function robots(): MetadataRoute.Robots {
  // Fora da produção (dev e previews), nenhum robô deve rastrear o site.
  if (!INDEXAVEL) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
