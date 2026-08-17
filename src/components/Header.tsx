import Link from "next/link";
import { brand } from "@/content/brand";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";
import { LocaleSwitch } from "./LocaleSwitch";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="topbar">
      <div className="topbar__in">
        <Link href={href(locale, "/")} className="wordmark">
          {brand.name}
        </Link>

        <nav className="nav">
          {dict.nav.map((item) => (
            <Link key={item.href} href={href(locale, item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="topbar__end">
          <LocaleSwitch current={locale} label={dict.site.languageLabel} />

          {/* La acción de la barra va en tinta: el óxido queda para la
              acción principal de cada página. */}
          <Link href={href(locale, "/#abrir")} className="btn btn--ink">
            {dict.site.openAccount}
          </Link>

          <details className="menu">
            <summary aria-label={dict.site.menu}>{dict.site.menu}</summary>
            <div className="menu__panel">
              {dict.nav.map((item) => (
                <Link key={item.href} href={href(locale, item.href)}>
                  {item.label}
                </Link>
              ))}
              <LocaleSwitch current={locale} label={dict.site.languageLabel} />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
