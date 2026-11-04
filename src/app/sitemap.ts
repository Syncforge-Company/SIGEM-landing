import type { MetadataRoute } from "next";

import { SEO, SITE_URL } from "./utils/constants";

// A landing é uma página só; as seções são âncoras e não entram no sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: SEO.atualizadoEm,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
