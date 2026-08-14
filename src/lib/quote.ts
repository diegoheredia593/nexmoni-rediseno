/**
 * Motor de cotización.
 *
 * Orden de las operaciones (el mismo que usan los comparadores del sector, y el
 * que hace que las cifras cuadren en pantalla):
 *
 *   1. Se cobra la comisión de envío sobre el importe enviado.
 *   2. Lo que queda se convierte a la moneda destino.
 *   3. La conversión usa la tasa media menos nuestro diferencial.
 *
 *   coste total = comisión de envío + diferencial de cambio
 *
 * El diferencial se expresa también en moneda de origen para poder sumarlo a la
 * comisión: es lo que el usuario deja de recibir frente a la tasa media.
 */

import {
  type CurrencyCode,
  corridorFor,
  midRates,
  railFees,
  spreadFor,
} from "@/content/pricing";

export interface QuoteInput {
  amount: number;
  from: CurrencyCode;
  to: CurrencyCode;
}

export interface QuoteBreakdown {
  ok: true;
  /** Importe que el usuario envía, en moneda de origen. */
  send: number;
  /** Comisión de envío, en moneda de origen. */
  transferFee: number;
  /** Etiqueta de la vía usada (SEPA, SWIFT…). */
  railLabel: string;
  /** Importe convertido tras descontar la comisión, en moneda de origen. */
  amountConverted: number;
  /** Tasa media de mercado, sin diferencial. */
  midRate: number;
  /** Tasa que aplicamos, ya con el diferencial descontado. */
  effectiveRate: number;
  /** Diferencial aplicado, en fracción decimal (0.015 = 1,5 %). */
  spread: number;
  /** Coste del diferencial, en moneda de origen. */
  spreadCost: number;
  /** Comisión + diferencial, en moneda de origen. */
  totalCost: number;
  /** Lo que recibe el destinatario, en moneda destino. */
  receives: number;
}

export type QuoteUnavailableReason =
  | "invalid-amount"
  | "no-corridor"
  | "corridor-pending"
  | "no-spread"
  | "amount-below-fee";

export interface QuoteUnavailable {
  ok: false;
  reason: QuoteUnavailableReason;
  message: string;
}

export type QuoteResult = QuoteBreakdown | QuoteUnavailable;

const messages: Record<QuoteUnavailableReason, string> = {
  "invalid-amount": "Introduce un importe mayor que cero.",
  "no-corridor": "Todavía no operamos este envío.",
  "corridor-pending": "Este corredor abre próximamente. Estamos cerrando su precio.",
  "no-spread": "Este corredor abre próximamente. Estamos cerrando su precio.",
  "amount-below-fee": "El importe no cubre la comisión mínima de envío.",
};

function unavailable(reason: QuoteUnavailableReason): QuoteUnavailable {
  return { ok: false, reason, message: messages[reason] };
}

/** Comisión de envío en moneda de origen, según la vía del corredor. */
export function transferFeeFor(rail: keyof typeof railFees, amount: number): number {
  const fee = railFees[rail];
  return Math.max(amount * fee.percent + fee.flat, fee.min);
}

export function quote({ amount, from, to }: QuoteInput): QuoteResult {
  if (!Number.isFinite(amount) || amount <= 0) return unavailable("invalid-amount");

  const corridor = corridorFor(from, to);
  if (!corridor) return unavailable("no-corridor");
  if (corridor.status === "pending") return unavailable("corridor-pending");

  const spread = spreadFor(from, to);
  if (spread === null) return unavailable("no-spread");

  const transferFee = transferFeeFor(corridor.rail, amount);
  const amountConverted = amount - transferFee;
  if (amountConverted <= 0) return unavailable("amount-below-fee");

  // Las tasas están expresadas por 1 EUR, así que se cruzan a través del euro.
  const midRate = midRates[to] / midRates[from];
  const effectiveRate = midRate * (1 - spread);
  const spreadCost = amountConverted * spread;

  return {
    ok: true,
    send: amount,
    transferFee,
    railLabel: railFees[corridor.rail].label,
    amountConverted,
    midRate,
    effectiveRate,
    spread,
    spreadCost,
    totalCost: transferFee + spreadCost,
    receives: amountConverted * effectiveRate,
  };
}
