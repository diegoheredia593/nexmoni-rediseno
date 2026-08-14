"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, locales, localeLabels, localeNames, type Locale } from "@/content/dictionary";
import { pathFor, resolveSlug } from "@/content/routes";

/**
 * Selector de idioma: ES EN PT LT.
 *
 * Conserva la página, no solo el idioma: desde /es/tarifas, pulsar EN lleva a
 * /en/fees — el slug también se traduce. Son enlaces reales, así que funcionan
 * sin JavaScript, se abren en otra pestaña y los rastreadores los siguen.
 */
export function LocaleSwitch({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  /** La misma página que estamos viendo, pero en otro idioma. */
  function equivalent(target: Locale): string {
    const [, first, second] = pathname.split("/");

    // La portada no tiene slug.
    if (!second) return `/${target}`;

    const from = isLocale(first) ? first : current;
    const resolved = resolveSlug(from, second);

    // Ruta desconocida: al menos cambiamos el idioma.
    return resolved ? pathFor(resolved.key, target) : `/${target}`;
  }

  return (
    <div className="locales" role="group" aria-label={label}>
      {locales.map((locale) => {
        const isCurrent = locale === current;
        return (
          <Link
            key={locale}
            href={equivalent(locale)}
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
