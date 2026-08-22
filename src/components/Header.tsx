import Link from "next/link";
import { brand } from "@/content/brand";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import { LocaleSwitch } from "./LocaleSwitch";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AppIcon } from "@/components/AppIcon";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="topbar">
      <div className="topbar__in">
        <Link href={href(locale, "/")} className="wordmark">
          {/* Sin `title`: el nombre ya va escrito al lado y anunciarlo dos
              veces es ruido para quien usa lector de pantalla. */}
          <AppIcon size={22} />
          {brand.name}
        </Link>

        <nav className="nav">
          {dict.nav.map((item) => (
            <Link key={item.href} href={href(locale, item.href)}>
              <RandomLetterSwap
                label={item.label}
                staggerDuration={0.025}
                transition={{ duration: 0.6, type: "spring" }}
              />
            </Link>
          ))}
        </nav>

        <div className="topbar__end">
          <ThemeToggle
            className="tema-barra"
            label={dict.site.themeLabel}
            labelDia={dict.site.themeDay}
            labelNoche={dict.site.themeNight}
          />

          <LocaleSwitch current={locale} label={dict.site.languageLabel} />

          {/* La acción de la barra va en tinta: el óxido queda para la
              acción principal de cada página. */}
          <Link href={href(locale, "/#descargar")} className="btn btn--ink">
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

              {/* En la barra no cabe por debajo de 620 px; aquí sí, y además
                  puede ir etiquetado. */}
              <div className="menu__tema">
                <span>{dict.site.themeLabel}</span>
                <ThemeToggle
                  className="tema-menu"
                  label={dict.site.themeLabel}
                  labelDia={dict.site.themeDay}
                  labelNoche={dict.site.themeNight}
                />
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
