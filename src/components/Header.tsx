import Link from "next/link";
import { nav, site } from "@/content/site";

export function Header() {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <Link href="/" className="wordmark">
          {site.name}
        </Link>
        <span className="header__meta">{site.meta}</span>
      </div>

      <nav className="nav">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <a
          href={site.whatsapp}
          className="mono"
          style={{ font: "400 10.5px/1 var(--mono)", letterSpacing: ".1em", color: "var(--ink-55)" }}
        >
          WhatsApp
        </a>
        <Link href="/#abrir" className="btn btn--ink">
          <span>Abrir cuenta</span>
        </Link>

        {/* Menú compacto por debajo de 1100px */}
        <details className="menu">
          <summary aria-label="Abrir menú">Menú</summary>
          <div className="menu__panel">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
