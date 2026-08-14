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
 * ⚠ CIFRAS ORIENTATIVAS PARA LA DEMO. Recogidas de prensa financiera el
 *   14-08-2026 y cruzadas vía USD (EUR/USD 1,153). Sirven para que el cliente
 *   vea la calculadora funcionando; NO son cotizaciones de un proveedor y no
 *   deben publicarse como oferta.
 *
 *   Al recibir las tasas reales: sustituir los valores, poner
 *   `ratesArePlaceholder = false` y actualizar `ratesUpdatedAt`.
 *
 *   Procedencia de cada valor:
 *     USD, GBP        — cotización directa EUR/X.
 *     COP, PEN, MXN,
 *     BRL, ARS, DOP   — USD/X publicado ese día, cruzado por EUR/USD.
 *     CLP, BOB, PYG,
 *     UYU, VES        — ESTIMACIÓN. No encontré cotización del día; son órdenes
 *                       de magnitud. Verificar antes de enseñarlas a nadie.
 */
export const ratesArePlaceholder = true;
export const ratesUpdatedAt = "2026-08-14";

export const midRates: Record<CurrencyCode, number> = {
  EUR: 1,
  USD: 1.153,
  GBP: 0.8536,
  COP: 3605,
  PEN: 3.874,
  DOP: 67.14,
  MXN: 19.63,
  BRL: 6.025,
  CLP: 1038, // estimación
  ARS: 1715,
  BOB: 7.97, // estimación — el boliviano está anclado al dólar
  PYG: 8244, // estimación
  UYU: 45.5, // estimación
  VES: 215, // estimación poco fiable — ver el corredor VES, que sigue cerrado
};

/**
 * ─── 2. DIFERENCIAL FX POR PAR ───────────────────────────────────────────────
 * Fracción decimal sobre la tasa media (0.015 = 1,5 %). El tarifario publica
 * "Spread 1–3 % por par", así que cada par necesita su valor real.
 *
 * ⚠ VALORES DE DEMO. El diferencial es una decisión comercial vuestra, no un
 *   dato de mercado: no hay forma de buscarlo. Los de abajo están repartidos
 *   dentro de la banda 1–3 % que ya anuncia el tarifario, más estrechos en los
 *   pares líquidos y más amplios en los exóticos, que es la práctica habitual.
 *   Sustituir por la tabla real cuando la haya.
 *
 * Formato de clave: "ORIGEN>DESTINO". Un par sin entrada aquí NO se cotiza: la
 * calculadora lo anuncia como próximo en lugar de inventar un número.
 */
export const spreads: Record<string, number> = {
  // Mismo par = sin cambio de divisa, sin diferencial.
  "EUR>EUR": 0,

  "EUR>USD": 0.01,
  "EUR>GBP": 0.012,
  "EUR>MXN": 0.015,
  "EUR>BRL": 0.018,
  "EUR>COP": 0.02,
  "EUR>PEN": 0.02,
  "EUR>CLP": 0.022,
  "EUR>DOP": 0.022,
  "EUR>BOB": 0.025,
  "EUR>UYU": 0.025,
  "EUR>PYG": 0.028,
  "EUR>ARS": 0.03,
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
    note: "Entre cuentas NexMoni",
  },
};

/**
 * ─── 4. CORREDORES ───────────────────────────────────────────────────────────
 * Qué combinaciones origen→destino se pueden cotizar hoy.
 *
 * `status: "live"`     → la calculadora devuelve cifras.
 * `status: "pending"`  → aparece en el selector pero anunciado como próximo.
 *
 * Abiertos para la demo con la vía SWIFT del tarifario (25 € fijos), que es el
 * único precio publicado para envíos fuera de la zona euro. Ojo: 25 € fijos
 * pesan mucho en importes de remesa pequeños — ver la nota del README.
 *
 * Para activar un corredor: añadir su diferencial en `spreads`, fijar el `rail`
 * y poner `status: "live"`.
 */
export interface Corridor {
  from: CurrencyCode;
  to: CurrencyCode;
  rail: Rail;
  status: "live" | "pending";
}

export const corridors: Corridor[] = [
  { from: "EUR", to: "EUR", rail: "sepa", status: "live" },

  { from: "EUR", to: "COP", rail: "swift", status: "live" },
  { from: "EUR", to: "PEN", rail: "swift", status: "live" },
  { from: "EUR", to: "DOP", rail: "swift", status: "live" },
  { from: "EUR", to: "MXN", rail: "swift", status: "live" },
  { from: "EUR", to: "BRL", rail: "swift", status: "live" },
  { from: "EUR", to: "CLP", rail: "swift", status: "live" },
  { from: "EUR", to: "ARS", rail: "swift", status: "live" },
  { from: "EUR", to: "BOB", rail: "swift", status: "live" },
  { from: "EUR", to: "PYG", rail: "swift", status: "live" },
  { from: "EUR", to: "UYU", rail: "swift", status: "live" },
  { from: "EUR", to: "USD", rail: "swift", status: "live" },
  { from: "EUR", to: "GBP", rail: "swift", status: "live" },

  // Cerrado a propósito: el bolívar se mueve demasiado y tiene control de
  // cambios. Sin cotización de un proveedor real, cualquier cifra que pusiera
  // aquí estaría mal. Se abre cuando haya fuente.
  { from: "EUR", to: "VES", rail: "swift", status: "pending" },
];

export function corridorFor(from: CurrencyCode, to: CurrencyCode): Corridor | null {
  return corridors.find((c) => c.from === from && c.to === to) ?? null;
}

/** Monedas que hoy pueden ser origen de un envío. */
export const sourceCurrencies: CurrencyCode[] = Array.from(
  new Set(corridors.map((c) => c.from)),
);

/** Estado inicial de la calculadora: el corredor más representativo del producto. */
export const defaultAmount = 1000;
export const defaultFrom: CurrencyCode = "EUR";
export const defaultTo: CurrencyCode = "COP";
