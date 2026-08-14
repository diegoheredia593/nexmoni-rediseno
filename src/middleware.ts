import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/content/dictionary";

/**
 * Todas las páginas viven bajo /<idioma>. Este middleware atiende las rutas sin
 * idioma — la raíz, o un enlace antiguo tipo /tarifas — y redirige al idioma
 * que mejor encaje con el navegador del visitante.
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

  // ¿Ya lleva idioma? Entonces no hay nada que hacer.
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  const locale = negotiate(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Se excluyen la API, los archivos internos de Next y cualquier ruta con
  // extensión (icon.svg, robots.txt…), que no se traducen.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export { locales };
