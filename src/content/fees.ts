/**
 * Tarifario publicado y glosario estandarizado del Banco de Lituania.
 * Los importes deben coincidir con `pricing.ts`, que es lo que calcula.
 */

export const feeSchedule = [
  {
    label: "Cambio de moneda (FX)",
    note: "Diferencial aplicado sobre la tasa de mercado",
    price: "Spread 1–3% por par",
  },
  {
    label: "Transferencia SEPA",
    note: "Envíos en euros dentro de la zona SEPA",
    price: "1,5% · mín. 0,50 €",
  },
  {
    label: "Transferencia SWIFT",
    note: "Envíos internacionales fuera de la zona euro",
    price: "25,00 €",
  },
  {
    label: "Recarga con tarjeta",
    note: "Añadir fondos con tarjeta de débito o crédito",
    price: "2% del monto",
  },
  {
    label: "Retiro bancario",
    note: "Retirada a una cuenta bancaria externa",
    price: "1,00 €",
  },
  {
    label: "Transferencia interna",
    note: "Entre cuentas NextMoni",
    price: "Gratis",
  },
  {
    label: "Mantenimiento de cuenta",
    note: "Cargo periódico por cuenta activa",
    price: "1,00 € / 30 días",
  },
] as const;

export const terminology = [
  { en: "Account management", es: "Mantenimiento de cuenta" },
  { en: "Issuance of a debit card", es: "Emisión de tarjeta de débito" },
  { en: "Cash withdrawal", es: "Retirada de efectivo" },
  { en: "Credit transfer — SEPA", es: "Transferencia SEPA en euros" },
  { en: "Credit transfer — non-SEPA", es: "Transferencia SWIFT fuera de la zona SEPA" },
  {
    en: "Settlement of received payments",
    es: "Abono de pagos recibidos — en euros y en otras monedas",
  },
  { en: "Currency conversion", es: "Cambio de divisa (FX)" },
] as const;

export const feesPage = {
  eyebrow: "§ 01 — TARIFAS",
  title: "Tarifas detalladas.",
  lead:
    "Sin comisiones ocultas. Cada concepto que cobramos, con su importe, tal y como aparecerá en tu extracto.",
  sidenote: ["Importes en EUR", "Vigentes desde 2026"],
  terminologyIntro:
    "Usamos el glosario estandarizado del Banco de Lituania, para que puedas comparar nuestras tarifas con las de cualquier otra entidad europea.",
  calculator: {
    eyebrow: "§ 02 — CALCULADORA",
    title: "Calcula lo que llega.",
    lead:
      "Introduce un importe y verás el desglose completo: nuestra comisión, el diferencial de cambio y cuánto recibe el destinatario. Las mismas tarifas de la tabla de arriba, aplicadas a tu caso.",
  },
} as const;
