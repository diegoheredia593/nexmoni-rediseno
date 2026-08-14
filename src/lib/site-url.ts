/**
 * URL pública del sitio.
 *
 * ⚠ El valor por defecto es una suposición a partir del dominio de correo. El
 *   `hreflang`, el canónico y el sitemap se emiten como URL absolutas, así que
 *   si el dominio real es otro hay que fijar NEXT_PUBLIC_SITE_URL en el entorno
 *   de despliegue — con un dominio equivocado, el buscador emparejaría mal las
 *   cuatro versiones de cada página.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexmoni.com",
);
