import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";

import { INDEXAVEL, SEO, SITE_URL } from "./utils/constants";
import { CORES_MARCA } from "./utils/marca";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.titulo, template: `%s | ${SEO.nome}` },
  description: SEO.descricao,
  applicationName: SEO.nome,
  keywords: SEO.palavrasChave,
  authors: [{ name: SEO.empresa }],
  creator: SEO.empresa,
  publisher: SEO.empresa,
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SEO.marca,
    title: SEO.titulo,
    description: SEO.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.titulo,
    description: SEO.descricao,
  },
  robots: {
    index: INDEXAVEL,
    follow: INDEXAVEL,
    googleBot: {
      index: INDEXAVEL,
      follow: INDEXAVEL,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: CORES_MARCA.brand,
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
