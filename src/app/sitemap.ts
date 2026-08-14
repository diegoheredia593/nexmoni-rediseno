import type { MetadataRoute } from "next";
import { locales } from "@/content/dictionary";
import { allRoutes, pathFor } from "@/content/routes";
import { siteUrl } from "@/lib/site-url";

/**
 * Sitemap con las 16 páginas: cada una declara sus tres traducciones, que es
 * lo que empareja las versiones en el buscador.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (path: string) => new URL(path, siteUrl).toString();

  const homes = locales.map((locale) => ({
    url: absolute(`/${locale}`),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, absolute(`/${l}`)])),
    },
  }));

  const inner = allRoutes().map(({ key, path }) => ({
    url: absolute(path),
    changeFrequency: "monthly" as const,
    // El tarifario es la página que más tráfico de búsqueda debería captar.
    priority: key === "fees" ? 0.9 : 0.7,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, absolute(pathFor(key, l))]),
      ),
    },
  }));

  return [...homes, ...inner];
}
