"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, localeNames, type Locale } from "@/content/dictionary";

/**
 * Selector de idioma: ES EN PT LT.
 *
 * Conserva la página en la que estás — cambiar de idioma en /tarifas te deja en
 * /en/tarifas, no en la portada. Son enlaces reales, así que funcionan sin
 * JavaScript, se pueden abrir en otra pestaña y los rastreadores los siguen.
 */
export function LocaleSwitch({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  // La ruta siempre empieza por /<idioma>; lo que sigue es la página.
  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");

  return (
    <div className="locales" role="group" aria-label={label}>
      {locales.map((locale) => {
        const isCurrent = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest}`}
            className={`locales__item${isCurrent ? " locales__item--on" : ""}`}
            hrefLang={locale}
            title={localeNames[locale]}
            aria-current={isCurrent ? "true" : undefined}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
