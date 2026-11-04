import Link from "next/link";

import { CtaLink } from "../components/CtaLink";
import { Logo } from "../components/Logo";
import { NAV_LINKS, landingRoutes } from "../utils/constants";

export function LandingHeader() {
  return (
    <header className="border-line/80 bg-surface/85 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-body hover:text-ink focus-visible:ring-ring/50 rounded-md text-sm font-medium outline-none focus-visible:ring-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
          //botar login quando tiver pronto
            href={landingRoutes.planos}
            className="text-ink hover:bg-surface-alt focus-visible:ring-ring/50 rounded-lg px-3 py-2 text-sm font-medium outline-none focus-visible:ring-3"
          >
            Entrar
          </Link>
          <CtaLink href={landingRoutes.planos} className="h-9 px-4 text-sm">
            Ver planos
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
