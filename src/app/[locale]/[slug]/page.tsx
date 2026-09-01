import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { AboutPage } from "@/components/pages/AboutPage";
import { FaqPage } from "@/components/pages/FaqPage";
import { FeesPage } from "@/components/pages/FeesPage";
import { PricingPage } from "@/components/pages/PricingPage";
import { defaultLocale, getDictionary, isLocale, locales } from "@/content/dictionary";
import { allRoutes, pathFor, resolveSlug, slugFor, type RouteKey } from "@/content/routes";
import { robotsPolicy } from "@/lib/site-url";

/**
 * Todas las páginas interiores pasan por aquí: el slug viene traducido
 * (/en/fees, /lt/ikainiai) y este componente lo resuelve a la página.
 *
 * Si el slug pertenece a otro idioma o es uno antiguo, redirige de forma
 * permanente al canónico en lugar de servir el mismo contenido en dos URL.
 */

export function generateStaticParams() {
  return allRoutes().map(({ locale, path }) => ({
    locale,
    slug: path.split("/")[2],
  }));
}

/** Qué clave del diccionario describe cada página. */
const metaKey: Record<Exclude<RouteKey, "pricing">, "fees" | "about" | "faq"> = {
  fees: "fees",
  about: "about",
  faq: "faq",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const resolved = resolveSlug(locale, slug);
  if (!resolved) return {};

  const dict = getDictionary(locale);
  const page = resolved.key === "pricing"
    ? { title: dict.pricing.title, description: dict.pricing.lead }
    : dict.pages[metaKey[resolved.key]];

  return {
    robots: robotsPolicy,
    title: page.title,
    description: page.description,
    alternates: {
      canonical: pathFor(resolved.key, locale),
      // Cada idioma con su propio slug: es lo que empareja las cuatro
      // versiones en el buscador. "x-default" apunta a la ruta sin idioma,
      // que el middleware negocia según el navegador del visitante.
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, pathFor(resolved.key, l)])),
        "x-default": `/${slugFor(resolved.key, defaultLocale)}`,
      },
    },
  };
}

export default async function LocalisedPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const resolved = resolveSlug(locale, slug);
  if (!resolved) notFound();

  // /en/tarifas → /en/fees, con 308, para no duplicar contenido.
  if (!resolved.canonical) permanentRedirect(pathFor(resolved.key, locale));

  const dict = getDictionary(locale);

  switch (resolved.key) {
    case "pricing":
      return <PricingPage locale={locale} dict={dict} />;
    case "fees":
      return <FeesPage locale={locale} dict={dict} />;
    case "about":
      return <AboutPage locale={locale} dict={dict} />;
    case "faq":
      return <FaqPage locale={locale} dict={dict} />;
  }
}
