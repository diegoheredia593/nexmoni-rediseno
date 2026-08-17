/**
 * Constantes que no se traducen: nombre societario, dominio de correo y las
 * direcciones que aparecen en varios idiomas.
 *
 * La marca es NexMoni (no NextMoni) y el dominio nexmoni.com.
 */
export const brand = {
  name: "NexMoni",
  legalName: "NexMoni OÜ",
  emailDomain: "nexmoni.com",
} as const;

export const email = {
  support: `support@${brand.emailDomain}`,
  legal: `legal@${brand.emailDomain}`,
  compliance: `compliance@${brand.emailDomain}`,
  privacy: `privacy@${brand.emailDomain}`,
  complaints: `complaints@${brand.emailDomain}`,
  fraud: `fraud@${brand.emailDomain}`,
} as const;

/**
 * ─── TIENDAS DE APLICACIONES ─────────────────────────────────────────────────
 * La descarga es el objetivo del embudo: todo lo demás lleva aquí.
 *
 * ⏳ PENDIENTE: las fichas todavía no existen. Mientras `published` sea `false`,
 *    los botones se muestran deshabilitados y anuncian «próximamente» en lugar
 *    de llevar a una página rota.
 *
 *    Al publicar las aplicaciones: pegar las URL, poner `published: true` y
 *    generar el código QR real (hoy es un marcador, como la fotografía).
 */
export const stores = {
  published: false,
  appStore: "",
  googlePlay: "",
} as const;

/** Enlace de una tienda, o `null` si todavía no se puede descargar. */
export function storeUrl(store: "appStore" | "googlePlay"): string | null {
  if (!stores.published) return null;
  return stores[store] || null;
}
