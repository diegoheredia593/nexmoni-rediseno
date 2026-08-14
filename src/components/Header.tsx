import Link from "next/link";
import { brand } from "@/content/brand";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";
import { LocaleSwitch } from "./LocaleSwitch";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <Link href={href(locale, "/")} className="wordmark">
          {brand.name}
        </Link>
        <span className="header__meta">{dict.site.tag}</span>
      </div>

      <nav className="nav">
        {dict.nav.map((item) => (
          <Link key={item.href} href={href(locale, item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <LocaleSwitch current={locale} label={dict.site.languageLabel} />

        <a
          href={href(locale, "/#abrir")}
          className="mono header__whatsapp"
          style={{ font: "400 10.5px/1 var(--mono)", letterSpacing: ".1em", color: "var(--ink-55)" }}
        >
          {dict.site.whatsapp}
        </a>

        <Link href={href(locale, "/#abrir")} className="btn btn--ink">
          <span>{dict.site.openAccount}</span>
        </Link>

        {/* Menú compacto por debajo de 1100px */}
        <details className="menu">
          <summary aria-label={dict.site.menu}>{dict.site.menu}</summary>
          <div className="menu__panel">
            {dict.nav.map((item) => (
              <Link key={item.href} href={href(locale, item.href)}>
                {item.label}
              </Link>
            ))}
            {/* En pantallas estrechas el selector vive aquí, no en la barra. */}
            <LocaleSwitch current={locale} label={dict.site.languageLabel} />
          </div>
        </details>
      </div>
    </header>
  );
}
