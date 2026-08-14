import { currencyByCode, type CurrencyCode } from "@/content/pricing";

/**
 * Formateo numérico. Cada función recibe el locale de Intl del idioma activo
 * (`meta.numberLocale` del diccionario): el español agrupa con punto y decide
 * con coma, el inglés al revés.
 */

/** Importe con los separadores del idioma y el código ISO detrás. */
export function formatMoney(value: number, code: CurrencyCode, locale: string): string {
  const decimals = currencyByCode.get(code)?.decimals ?? 2;
  const amount = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
  return `${amount} ${code}`;
}

/** Tasa de cambio: más decimales, porque el diferencial vive en los últimos. */
export function formatRate(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
  }).format(value);
}

export function formatPercent(fraction: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(fraction);
}

/**
 * Acepta "1.234,56" y "1234.56": el usuario teclea con la convención que
 * conoce, y no siempre coincide con el idioma en el que está la página.
 */
export function parseAmount(input: string): number {
  const cleaned = input.replace(/\s/g, "");
  if (!cleaned) return NaN;

  const lastComma = cleaned.lastIndexOf(",");
  const lastDot = cleaned.lastIndexOf(".");

  // El separador decimal es el último que aparece; el otro son los miles.
  let normalized: string;
  if (lastComma > lastDot) {
    normalized = cleaned.replace(/\./g, "").replace(",", ".");
  } else if (lastDot > lastComma) {
    normalized = cleaned.replace(/,/g, "");
  } else {
    normalized = cleaned.replace(/[.,]/g, "");
  }

  return Number(normalized);
}
