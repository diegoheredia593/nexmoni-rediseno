/**
 * URL pública del sitio y modo de vista previa.
 *
 * ⚠ El valor por defecto de la URL es una suposición a partir del dominio de
 *   correo. El `hreflang`, el canónico y el sitemap se emiten como URL
 *   absolutas, así que si el dominio real es otro hay que fijar
 *   NEXT_PUBLIC_SITE_URL en el entorno de despliegue.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexmoni.com",
);

/**
 * Vista previa: despliegue para enseñar el diseño, no el sitio público.
 *
 * Cuando está activo, todas las páginas piden a los buscadores que no las
 * indexen y robots.txt bloquea el rastreo entero. Es lo que evita que una
 * demo con tipos de cambio orientativos acabe en Google y compita después
 * con el sitio real.
 *
 * Se activa de dos formas:
 *   - NEXT_PUBLIC_PREVIEW=1 en cualquier proveedor.
 *   - Automáticamente en Vercel fuera del entorno de producción.
 */
export const isPreview =
  process.env.NEXT_PUBLIC_PREVIEW === "1" ||
  (process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== "production");

/** Bloque `robots` para los metadatos de cada página. */
export const robotsPolicy = isPreview
  ? { index: false, follow: false, nocache: true }
  : undefined;
