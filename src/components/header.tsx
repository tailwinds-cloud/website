import { site } from "@/lib/site";
import { Icon } from "./icons";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="shrink-0" aria-label={`${site.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-horizontal.webp" alt={site.name} width={720} height={169} className="h-11 w-auto sm:h-14" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-ink">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-ocean">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-ocean/30 transition hover:bg-navy sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          {/* Mobile menu: no-JS disclosure */}
          <details className="group relative lg:hidden">
            <summary
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full text-navy hover:bg-mist [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Icon name="menu" className="size-6" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 mt-3 w-56 rounded-2xl border border-navy/10 bg-white p-2 shadow-xl shadow-navy/10"
            >
              {[...nav, { href: "#contact", label: "Contact" }].map((n) => (
                <a key={n.href} href={n.href} className="block rounded-xl px-4 py-2.5 text-sm font-medium text-navy hover:bg-mist">
                  {n.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
