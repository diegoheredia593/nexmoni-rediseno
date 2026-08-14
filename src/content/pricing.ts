/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TARIFAS Y TIPOS DE CAMBIO — ÚNICA FUENTE DE VERDAD
 * ─────────────────────────────────────────────────────────────────────────────
 * Este archivo alimenta a la vez el tarifario público (/tarifas) y la
 * calculadora de conversión. Editar aquí; ningún componente lleva cifras.
 *
 * ⚠ ANTES DE PUBLICAR — tres cosas están pendientes de datos reales:
 *   1. `midRates`  → valores PROVISIONALES. Ver la nota sobre el bloque.
 *   2. `spreads`   → falta la tabla de diferenciales por par.
 *   3. `corridors` → solo EUR→EUR (SEPA) está activo; el resto espera precio.
 */

export type CurrencyCode =
  | "EUR" | "USD" | "GBP"
  | "COP" | "PEN" | "DOP" | "MXN" | "BRL" | "CLP" | "ARS" | "BOB" | "PYG" | "UYU" | "VES";

export interface Currency {
  code: CurrencyCode;
  name: string;
  /** Decimales con los que se muestra. Los pesos chilenos y guaraníes no usan céntimos. */
  decimals: number;
}

export const currencies: Currency[] = [
  { code: "EUR", name: "Euro", decimals: 2 },
  { code: "USD", name: "Dólar estadounidense", decimals: 2 },
  { code: "GBP", name: "Libra esterlina", decimals: 2 },
  { code: "COP", name: "Peso colombiano", decimals: 0 },
  { code: "PEN", name: "Sol peruano", decimals: 2 },
  { code: "DOP", name: "Peso dominicano", decimals: 2 },
  { code: "MXN", name: "Peso mexicano", decimals: 2 },
  { code: "BRL", name: "Real brasileño", decimals: 2 },
  { code: "CLP", name: "Peso chileno", decimals: 0 },
  { code: "ARS", name: "Peso argentino", decimals: 2 },
  { code: "BOB", name: "Boliviano", decimals: 2 },
  { code: "PYG", name: "Guaraní paraguayo", decimals: 0 },
  { code: "UYU", name: "Peso uruguayo", decimals: 2 },
  { code: "VES", name: "Bolívar venezolano", decimals: 2 },
];

export const currencyByCode = new Map(currencies.map((c) => [c.code, c]));

/**
 * ─── 1. TASAS DE REFERENCIA ──────────────────────────────────────────────────
 * Unidades de cada moneda por 1 EUR. Tasa media de mercado, SIN nuestro
 * diferencial (el diferencial se aplica aparte, en `spreads`).
 *
 * ⚠ CIFRAS PROVISIONALES, PUESTAS SOLO PARA QUE LA CALCULADORA FUNCIONE.
 *   No proceden de ningún proveedor y no son válidas para publicar.
 *   Sustituir por las tasas reales antes de lanzar y actualizar `ratesUpdatedAt`.
 *   Mientras `ratesArePlaceholder` sea `true`, la interfaz muestra un aviso
 *   visible de que las cifras no son definitivas.
 */
export const ratesArePlaceholder = true;
export const ratesUpdatedAt = "2026-08-14";

export const midRates: Record<CurrencyCode, number> = {
  EUR: 1,
  USD: 1.16,
  GBP: 0.85,
  COP: 4550,
  PEN: 4.15,
  DOP: 70.5,
  MXN: 21.4,
  BRL: 6.35,
  CLP: 1090,
  ARS: 1480,
  BOB: 8.05,
  PYG: 8600,
  UYU: 46.5,
  VES: 215,
};

/**
 * ─── 2. DIFERENCIAL FX POR PAR ───────────────────────────────────────────────
 * Fracción decimal sobre la tasa media (0.015 = 1,5 %). El tarifario publica
 * "Spread 1–3 % por par", así que cada par necesita su valor real.
 *
 * ⏳ PENDIENTE: falta la tabla por par. Un par sin entrada aquí NO se cotiza;
 *    la calculadora lo marca como no disponible en lugar de inventar un número.
 *
 * Formato de clave: "ORIGEN>DESTINO".
 *
 *   export const spreads: Record<string, number> = {
 *     "EUR>COP": 0.018,
 *     "EUR>PEN": 0.021,
 *     ...
 *   };
 */
export const spreads: Record<string, number> = {
  // Mismo par = sin cambio de divisa, sin diferencial.
  "EUR>EUR": 0,
};

export function spreadFor(from: CurrencyCode, to: CurrencyCode): number | null {
  const value = spreads[`${from}>${to}`];
  return value === undefined ? null : value;
}

/**
 * ─── 3. COMISIONES DE ENVÍO ──────────────────────────────────────────────────
 * Tomadas del tarifario publicado.
 */
export type Rail = "sepa" | "swift" | "internal";

export interface RailFee {
  id: Rail;
  label: string;
  /** Porcentaje sobre el importe enviado, en fracción decimal. */
  percent: number;
  /** Comisión fija en EUR, sumada al porcentaje. */
  flat: number;
  /** Mínimo en EUR aplicado al total de la comisión. */
  min: number;
  note: string;
}

export const railFees: Record<Rail, RailFee> = {
  sepa: {
    id: "sepa",
    label: "Transferencia SEPA",
    percent: 0.015,
    flat: 0,
    min: 0.5,
    note: "Envíos en euros dentro de la zona SEPA",
  },
  swift: {
    id: "swift",
    label: "Transferencia SWIFT",
    percent: 0,
    flat: 25,
    min: 0,
    note: "Envíos internacionales fuera de la zona euro",
  },
  internal: {
    id: "internal",
    label: "Transferencia interna",
    percent: 0,
    flat: 0,
    min: 0,
    note: "Entre cuentas NextMoni",
  },
};

/**
 * ─── 4. CORREDORES ───────────────────────────────────────────────────────────
 * Qué combinaciones origen→destino se pueden cotizar hoy.
 *
 * `status: "live"`     → la calculadora devuelve cifras.
 * `status: "pending"`  → aparece en el selector pero anunciado como próximo.
 *
 * Hoy solo EUR→EUR por SEPA tiene precio cerrado. Para activar un corredor:
 * añadir su diferencial en `spreads`, fijar el `rail` y poner `status: "live"`.
 */
export interface Corridor {
  from: CurrencyCode;
  to: CurrencyCode;
  rail: Rail;
  status: "live" | "pending";
}

export const corridors: Corridor[] = [
  { from: "EUR", to: "EUR", rail: "sepa", status: "live" },

  // Pendientes de precio. El `rail` es una previsión, no un precio cerrado.
  { from: "EUR", to: "USD", rail: "swift", status: "pending" },
  { from: "EUR", to: "GBP", rail: "swift", status: "pending" },
  { from: "EUR", to: "COP", rail: "swift", status: "pending" },
  { from: "EUR", to: "PEN", rail: "swift", status: "pending" },
  { from: "EUR", to: "DOP", rail: "swift", status: "pending" },
  { from: "EUR", to: "MXN", rail: "swift", status: "pending" },
  { from: "EUR", to: "BRL", rail: "swift", status: "pending" },
  { from: "EUR", to: "CLP", rail: "swift", status: "pending" },
  { from: "EUR", to: "ARS", rail: "swift", status: "pending" },
  { from: "EUR", to: "BOB", rail: "swift", status: "pending" },
  { from: "EUR", to: "PYG", rail: "swift", status: "pending" },
  { from: "EUR", to: "UYU", rail: "swift", status: "pending" },
  { from: "EUR", to: "VES", rail: "swift", status: "pending" },
];

export function corridorFor(from: CurrencyCode, to: CurrencyCode): Corridor | null {
  return corridors.find((c) => c.from === from && c.to === to) ?? null;
}

/** Monedas que hoy pueden ser origen de un envío. */
export const sourceCurrencies: CurrencyCode[] = Array.from(
  new Set(corridors.map((c) => c.from)),
);

/** Importe por defecto de la calculadora, en la moneda de origen. */
export const defaultAmount = 1000;
