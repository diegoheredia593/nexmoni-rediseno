"use client";

import { useMemo, useState } from "react";
import {
  corridors,
  currencyByCode,
  defaultAmount,
  defaultFrom,
  defaultTo,
  ratesArePlaceholder,
  ratesUpdatedAt,
  sourceCurrencies,
  type CurrencyCode,
} from "@/content/pricing";
import { formatMoney, formatPercent, formatRate, parseAmount } from "@/lib/format";
import { quote } from "@/lib/quote";
import { Term } from "./glossary/Term";

/** Destinos alcanzables desde una moneda de origen, activos primero. */
function destinationsFor(from: CurrencyCode) {
  return corridors
    .filter((c) => c.from === from)
    .map((c) => ({ code: c.to, status: c.status }));
}

export function Calculator() {
  const [rawAmount, setRawAmount] = useState(String(defaultAmount));
  const [from, setFrom] = useState<CurrencyCode>(defaultFrom);
  const [to, setTo] = useState<CurrencyCode>(defaultTo);

  const amount = parseAmount(rawAmount);
  const destinations = useMemo(() => destinationsFor(from), [from]);
  const result = useMemo(() => quote({ amount, from, to }), [amount, from, to]);

  return (
    <div className="calc">
      {ratesArePlaceholder && (
        <p className="calc__notice" role="note">
          <strong>Tipos de cambio orientativos</strong>, con fecha {ratesUpdatedAt}. No constituyen
          una oferta en firme: el importe definitivo se fija al confirmar el envío. Las comisiones
          son las del tarifario publicado arriba.
        </p>
      )}

      {/* ── Entradas ─────────────────────────────────────────────────── */}
      <div className="calc__inputs">
        <label className="field">
          <span className="field__label">CANTIDAD</span>
          <input
            inputMode="decimal"
            value={rawAmount}
            onChange={(e) => setRawAmount(e.target.value)}
            aria-label="Cantidad a enviar"
          />
        </label>

        <label className="field">
          <span className="field__label">DE</span>
          <select value={from} onChange={(e) => setFrom(e.target.value as CurrencyCode)}>
            {sourceCurrencies.map((code) => (
              <option key={code} value={code}>
                {code} — {currencyByCode.get(code)?.name}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="field__label">A</span>
          <select value={to} onChange={(e) => setTo(e.target.value as CurrencyCode)}>
            {destinations.map((dest) => (
              <option key={dest.code} value={dest.code}>
                {dest.code} — {currencyByCode.get(dest.code)?.name}
                {dest.status === "pending" ? " (próximamente)" : ""}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* ── Resultado ────────────────────────────────────────────────── */}
      {result.ok ? (
        <div className="calc__result">
          <div className="calc__headline">
            <div>
              <div className="calc__headline-label">El destinatario recibe</div>
              <div className="calc__headline-note">Total después de comisiones</div>
            </div>
            <div className="calc__headline-figure">{formatMoney(result.receives, to)}</div>
          </div>

          <dl className="calc__rows">
            <CalcRow
              label="Tipo de cambio"
              note={`1 ${from} → ${to}`}
              value={formatRate(result.effectiveRate)}
            />
            <CalcRow
              label="Sobreprecio en el tipo de cambio"
              note={
                result.spread === 0
                  ? "Sin cambio de divisa"
                  : `Diferencial de ${formatPercent(result.spread)} sobre la tasa media (${formatRate(result.midRate)})`
              }
              value={formatMoney(result.spreadCost, from)}
            />
            <CalcRow
              label="Comisión por transferencia"
              note={result.railLabel}
              value={formatMoney(result.transferFee, from)}
            />
            <CalcRow
              label="Coste total de la transferencia"
              note="Comisión más sobreprecio de cambio"
              value={formatMoney(result.totalCost, from)}
              strong
            />
          </dl>

          <p className="calc__foot">
            Cálculo orientativo sobre el tarifario publicado. Consulta la tabla de arriba para el
            resto de conceptos.
          </p>
        </div>
      ) : (
        <div className="calc__pending" role="status">
          <div className="calc__pending-label">
            {result.reason === "invalid-amount" || result.reason === "amount-below-fee"
              ? "Revisa el importe"
              : "Corredor no disponible"}
          </div>
          <p className="calc__pending-body">{result.message}</p>
          {(result.reason === "corridor-pending" || result.reason === "no-spread") && (
            <p className="calc__pending-body">
              Hoy cotizamos envíos en euros dentro de la zona <Term term="SEPA" />. El resto de
              destinos se activará en cuanto cerremos su precio.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function CalcRow({
  label,
  note,
  value,
  strong = false,
}: {
  label: string;
  note: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className={`calc__row${strong ? " calc__row--strong" : ""}`}>
      <dt>
        <span className="calc__row-label">{label}</span>
        <span className="calc__row-note">{note}</span>
      </dt>
      <dd className="calc__row-value">{value}</dd>
    </div>
  );
}
