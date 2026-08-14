import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/content/dictionary";
import { pathFor, resolveSlug } from "@/content/routes";

/**
 * Todas las páginas viven bajo /<idioma>/<slug traducido>. Este middleware
 * atiende las rutas sin idioma — la raíz, o un enlace antiguo como /tarifas —
 * y redirige al idioma que mejor encaje con el navegador del visitante,
 * traduciendo también el slug.
 */

/** Mejor idioma según Accept-Language; el español si no hay coincidencia. */
function negotiate(header: string | null) {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.split("=")[1]) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    // "pt-BR" cuenta como "pt"; "es-419" como "es".
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ¿Ya lleva idioma? Entonces la ruta [locale]/[slug] se encarga del resto,
  // incluida la redirección de un slug de otro idioma.
  const [, first] = pathname.split("/");
  if (isLocale(first)) return NextResponse.next();

  const locale = negotiate(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();

  if (pathname === "/") {
    url.pathname = `/${locale}`;
  } else {
    // /tarifas → /en/fees si el visitante viene en inglés.
    const segment = pathname.split("/")[1];
    const resolved = resolveSlug(locale, segment);
    url.pathname = resolved ? pathFor(resolved.key, locale) : `/${locale}${pathname}`;
  }

  return NextResponse.redirect(url);
}

export const config = {
  // Se excluyen la API, los archivos internos de Next y cualquier ruta con
  // extensión (icon.svg, robots.txt, sitemap.xml…), que no se traducen.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
