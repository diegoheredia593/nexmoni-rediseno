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
