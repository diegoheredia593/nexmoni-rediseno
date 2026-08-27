"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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
import { quote, type QuoteResult } from "@/lib/quote";
import { FeeBar } from "@/components/FeeBar";
import { Term } from "./glossary/Term";

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
  const nextResult = useMemo(() => quote({ amount, from, to }), [amount, from, to]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [displayed, setDisplayed] = useState<{
    result: QuoteResult;
    from: CurrencyCode;
    to: CurrencyCode;
  }>({ result: nextResult, from, to });

  useEffect(() => {

    setIsUpdating(true);
    const timer = window.setTimeout(() => {
      setDisplayed({ result: nextResult, from, to });
      setIsUpdating(false);
    }, 420);

    return () => window.clearTimeout(timer);
  }, [nextResult, from, to]);

  const result = displayed.result;
  const resultFrom = displayed.from;
  const resultTo = displayed.to;

  return (
    <div className="calc" data-updating={isUpdating || undefined} aria-busy={isUpdating}>
      {ratesArePlaceholder && (
        <p className="calc__notice" role="note">
          <strong>{t.noticeStrong}</strong>
          {t.noticeRest} <span className="tag">{ratesUpdatedAt}</span>
        </p>
      )}

      <div className="calc__inputs">
        <label className="field">
          <span className="tag">{t.amount}</span>
          <input
            inputMode="decimal"
            value={rawAmount}
            onChange={(e) => setRawAmount(e.target.value)}
            aria-label={t.amountAria}
          />
        </label>

        <label className="field">
          <span className="tag">{t.from}</span>
          <select value={from} onChange={(e) => setFrom(e.target.value as CurrencyCode)}>
            {sourceCurrencies.map((code) => (
              <option key={code} value={code}>
                {code} — {dict.currencies[code]}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="tag">{t.to}</span>
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

      {result.ok ? (
        <>
          <div className="calc__out">
            <div>
              <h4>{t.receives}</h4>
              <p className="caption">{t.receivesNote}</p>
            </div>
            <div className="calc__figure" aria-live="polite">
              <LiveValue value={formatMoney(result.receives, resultTo, numberLocale)} />
            </div>
          </div>

          <dl className="calc__rows">
            <CalcRow
              label={t.rate}
              note={`1 ${resultFrom} → ${resultTo}`}
              value={formatRate(result.effectiveRate, numberLocale)}
            />
            <CalcRow
              label={t.spread}
              note={
                result.spread === 0
                  ? t.spreadNoFx
                  : `${t.spreadNoteBefore}${formatPercent(result.spread, numberLocale)}${t.spreadNoteAfter} (${formatRate(result.midRate, numberLocale)})`
              }
              value={formatMoney(result.spreadCost, resultFrom, numberLocale)}
            />
            <CalcRow
              label={t.fee}
              note={t.rails[result.rail]}
              value={formatMoney(result.transferFee, resultFrom, numberLocale)}
            />
            <CalcRow
              label={t.total}
              note={t.totalNote}
              value={formatMoney(result.totalCost, resultFrom, numberLocale)}
              strong
            />
          </dl>

          {/* La representación gráfica de lo que se acaba de calcular. Va aquí
              y no en una sección aparte porque una barra que cambia a 800 px
              de donde estás tecleando no la ve nadie. */}
          <FeeBar
            key={resultFrom + "-" + resultTo + "-" + result.send + "-" + result.receives}
            dict={dict}
            quote={result}
            from={resultFrom}
            to={resultTo}
          />

          <p className="caption" style={{ paddingTop: "var(--s-16)" }}>
            {t.foot}
          </p>
        </>
      ) : (
        <div className="calc__pending" role="status">
          <span className="tag tag--strong">
            {result.reason === "invalidAmount" || result.reason === "belowFee"
              ? t.badAmount
              : t.unavailable}
          </span>
          <p className="body-s" style={{ marginTop: "var(--s-12)", maxWidth: "54ch" }}>
            {t.quoteErrors[result.reason]}
          </p>
          {result.reason === "corridorPending" && (
            <p className="body-s" style={{ marginTop: "var(--s-8)", maxWidth: "54ch" }}>
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

function LiveValue({ value }: { value: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      key={value}
      className="calc__live-value"
      initial={reduceMotion ? false : { opacity: 0.18, y: 12, scale: 0.985, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      {value}
    </motion.span>
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
    <div className={`calc__row${strong ? " calc__row--total" : ""}`}>
      <dt>
        <span className={strong ? "h4" : "body-s"} style={{ color: "var(--ink)" }}>
          {label}
        </span>
        <span className="caption">{note}</span>
      </dt>
      <dd><LiveValue value={value} /></dd>
    </div>
  );
}
