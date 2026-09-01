import { locales, type Locale } from "./dictionary";

/**
 * Rutas traducidas.
 *
 * Cada página tiene una clave estable (`fees`, `about`, `faq`) y un *slug* por
 * idioma. La clave es lo que se usa en el código; el slug solo aparece en la
 * URL.
 *
 * Los slugs van en ASCII a propósito: "įkainiai" acabaría percent-encoded como
 * %C4%AFkainiai en cuanto alguien copie el enlace.
 *
 * Cambiar un slug publicado rompe los enlaces existentes y tira el
 * posicionamiento de esa página. Si hay que hacerlo, conviene añadir el slug
 * viejo a `legacySlugs` para que siga redirigiendo.
 */

export const routeKeys = ["pricing", "fees", "about", "faq"] as const;
export type RouteKey = (typeof routeKeys)[number];

export const slugs: Record<RouteKey, Record<Locale, string>> = {
  pricing: {
    es: "precios",
    en: "plans",
    pt: "planos",
    lt: "planai",
  },
  fees: {
    es: "tarifas",
    en: "fees",
    pt: "tarifas",
    lt: "ikainiai",
  },
  about: {
    es: "acerca",
    en: "about",
    pt: "sobre-nos",
    lt: "apie-mus",
  },
  faq: {
    es: "preguntas-frecuentes",
    en: "faq",
    pt: "perguntas-frequentes",
    // DUK: la abreviatura habitual de "dažniausiai užduodami klausimai".
    lt: "duk",
  },
};

/**
 * Slugs que ya no son los canónicos de su idioma pero deben seguir
 * resolviendo. Se llenan al renombrar una ruta publicada.
 *
 * Los slugs en español estuvieron un tiempo activos en los cuatro idiomas
 * (/en/tarifas, /lt/acerca…), así que se reconocen y redirigen.
 */
export const legacySlugs: Record<string, RouteKey> = {
  tarifas: "fees",
  acerca: "about",
  "preguntas-frecuentes": "faq",
};

/** El slug canónico de una página en un idioma. */
export function slugFor(key: RouteKey, locale: Locale): string {
  return slugs[key][locale];
}

/** Ruta completa de una página en un idioma. */
export function pathFor(key: RouteKey, locale: Locale): string {
  return `/${locale}/${slugFor(key, locale)}`;
}

/**
 * Resuelve un slug a su página.
 *
 * Devuelve también si el slug es el canónico del idioma: cuando no lo es
 * — `/en/tarifas`, que fue una URL real — la página redirige de forma
 * permanente al canónico en vez de servir el mismo contenido en dos
 * direcciones, que es lo que el buscador penaliza.
 */
export function resolveSlug(
  locale: Locale,
  slug: string,
): { key: RouteKey; canonical: boolean } | null {
  const decoded = decodeURIComponent(slug).toLowerCase();

  for (const key of routeKeys) {
    if (slugs[key][locale] === decoded) return { key, canonical: true };
  }

  // ¿Es el slug de otro idioma, o uno antiguo?
  for (const key of routeKeys) {
    for (const other of locales) {
      if (slugs[key][other] === decoded) return { key, canonical: false };
    }
  }

  const legacy = legacySlugs[decoded];
  if (legacy) return { key: legacy, canonical: false };

  return null;
}

/** Todas las combinaciones idioma × página, para el prerender y el sitemap. */
export function allRoutes(): { locale: Locale; key: RouteKey; path: string }[] {
  return locales.flatMap((locale) =>
    routeKeys.map((key) => ({ locale, key, path: pathFor(key, locale) })),
  );
}

/**
 * Traduce un enlace interno al idioma indicado.
 *
 * Los diccionarios escriben los enlaces con la ruta en español, que hace de
 * clave canónica; aquí se cambia por el slug del idioma:
 *
 *   href("en", "/")                  → "/en"
 *   href("en", "/precios")           → "/en/plans"
 *   href("en", "/tarifas")           → "/en/fees"
 *   href("lt", "/acerca#contacto")   → "/lt/apie-mus#contacto"
 *
 * Los `mailto:` y las URL absolutas pasan sin tocar.
 */
export function href(locale: Locale, path: string): string {
  if (!path.startsWith("/")) return path;

  const [rawPath, hash] = path.split("#");
  const suffix = hash ? `#${hash}` : "";
  const clean = rawPath.replace(/\/+$/, "");

  // "/" y "/#ancla" apuntan a la portada del idioma.
  if (clean === "") return `/${locale}${suffix}`;

  const resolved = resolveSlug(locale, clean.slice(1));
  if (resolved) return `${pathFor(resolved.key, locale)}${suffix}`;

  // Ruta que no es una página traducida: se deja tal cual, con prefijo.
  return `/${locale}${clean}${suffix}`;
}
