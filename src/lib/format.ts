import { currencyByCode, type CurrencyCode } from "@/content/pricing";

const LOCALE = "es-ES";

/** Importe con separadores españoles y el código ISO detrás: "1.234,56 EUR". */
export function formatMoney(value: number, code: CurrencyCode): string {
  const decimals = currencyByCode.get(code)?.decimals ?? 2;
  const amount = new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
  return `${amount} ${code}`;
}

/** Tasa de cambio: más decimales, porque el diferencial vive en los últimos. */
export function formatRate(value: number): string {
  return new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
  }).format(value);
}

export function formatPercent(fraction: number): string {
  return `${new Intl.NumberFormat(LOCALE, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(fraction * 100)} %`;
}

/** Acepta "1.234,56" y "1234.56" — el usuario teclea en cualquiera de los dos. */
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
