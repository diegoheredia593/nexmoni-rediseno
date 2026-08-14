"use client";

import { useMemo, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import {
  corridors,
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

/** Destinos alcanzables desde una moneda de origen. */
function destinationsFor(from: CurrencyCode) {
  return corridors.filter((c) => c.from === from).map((c) => ({ code: c.to, status: c.status }));
}

export function Calculator({ dict }: { dict: Dictionary }) {
  const t = dict.calculator;
  const numberLocale = dict.meta.numberLocale;

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
          <strong>{t.noticeStrong}</strong>
          {t.noticeRest}
        </p>
      )}

      {/* ── Entradas ─────────────────────────────────────────────────── */}
      <div className="calc__inputs">
        <label className="field">
          <span className="field__label">{t.amount}</span>
          <input
            inputMode="decimal"
            value={rawAmount}
            onChange={(e) => setRawAmount(e.target.value)}
            aria-label={t.amountAria}
          />
        </label>

        <label className="field">
          <span className="field__label">{t.from}</span>
          <select value={from} onChange={(e) => setFrom(e.target.value as CurrencyCode)}>
            {sourceCurrencies.map((code) => (
              <option key={code} value={code}>
                {code} — {dict.currencies[code]}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="field__label">{t.to}</span>
          <select value={to} onChange={(e) => setTo(e.target.value as CurrencyCode)}>
            {destinations.map((dest) => (
              <option key={dest.code} value={dest.code}>
                {dest.code} — {dict.currencies[dest.code]}
                {dest.status === "pending" ? ` ${t.comingSoon}` : ""}
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
              <div className="calc__headline-label">{t.receives}</div>
              <div className="calc__headline-note">{t.receivesNote}</div>
            </div>
            <div className="calc__headline-figure">
              {formatMoney(result.receives, to, numberLocale)}
            </div>
          </div>

          <dl className="calc__rows">
            <CalcRow
              label={t.rate}
              note={`1 ${from} → ${to}`}
              value={formatRate(result.effectiveRate, numberLocale)}
            />
            <CalcRow
              label={t.spread}
              note={
                result.spread === 0
                  ? t.spreadNoFx
                  : `${t.spreadNoteBefore}${formatPercent(result.spread, numberLocale)}${t.spreadNoteAfter} (${formatRate(result.midRate, numberLocale)})`
              }
              value={formatMoney(result.spreadCost, from, numberLocale)}
            />
            <CalcRow
              label={t.fee}
              note={t.rails[result.rail]}
              value={formatMoney(result.transferFee, from, numberLocale)}
            />
            <CalcRow
              label={t.total}
              note={t.totalNote}
              value={formatMoney(result.totalCost, from, numberLocale)}
              strong
            />
          </dl>

          <p className="calc__foot">
            {t.foot} <span className="mono">{ratesUpdatedAt}</span>
          </p>
        </div>
      ) : (
        <div className="calc__pending" role="status">
          <div className="calc__pending-label">
            {result.reason === "invalidAmount" || result.reason === "belowFee"
              ? t.badAmount
              : t.unavailable}
          </div>
          <p className="calc__pending-body">{t.quoteErrors[result.reason]}</p>
          {result.reason === "corridorPending" && (
            <p className="calc__pending-body">
              {t.sepaOnlyBefore}
              <Term term="SEPA" />
              {t.sepaOnlyAfter}
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
