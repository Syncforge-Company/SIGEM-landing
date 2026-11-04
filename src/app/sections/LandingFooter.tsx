import Image from "next/image";

import { Logo } from "../components/Logo";
import { NAV_LINKS } from "../utils/constants";

export function LandingFooter() {
  return (
    <footer className="border-line border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Logo />
          <p className="text-subtle mt-2 text-sm">
            Sistema Integrado de Gestão Empresarial Modular
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-body hover:text-ink focus-visible:ring-ring/50 rounded-md text-sm outline-none focus-visible:ring-3"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-subtle flex items-center gap-2 text-sm">
            Um produto desenvolvido pela
            <span className="text-ink inline-flex items-center gap-1.5 font-semibold">
              <Image
                src="/landing/syncforge-logo.png"
                alt=""
                width={18}
                height={18}
              />
              SyncForge
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
