import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIGEM · Sistema Integrado de Gestão Empresarial Modular",
  description:
    "Cadastros, vendas, estoque e financeiro num só sistema. Contrate o pacote que sua empresa usa hoje e libere novos módulos quando precisar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
