"use client";

import { useEffect, useRef, useState } from "react";
import type { CurrencyCode } from "@/content/pricing";
import { formatMoney } from "@/lib/format";
import type { QuoteBreakdown } from "@/lib/quote";
import type { Dictionary } from "@/content/dictionary";

/**
 * Anatomía del envío: una sola barra apilada, a escala real.
 *
 * QUÉ REPRESENTA
 *   El ancho total es lo que el visitante ENTREGA. Se reparte en tres tramos:
 *   lo que sobrevive y se convierte, la comisión y el diferencial. Suman
 *   exactamente el importe entregado, porque el motor de cotización descuenta
 *   la comisión del importe en vez de sumarla encima
 *   (`amountConverted = amount - transferFee`). La versión anterior de esta
 *   barra la sumaba, y conectada así habría contradicho a la calculadora que
 *   tiene justo encima.
 *
 * POR QUÉ EN CÓDIGO Y NO EN UNA IMAGEN
 *   Lleva cifras y etiquetas en cuatro idiomas, cambia con cada pulsación y
 *   tiene que seguir a la paleta. Una ilustración quedaría clavada a un
 *   idioma, a unos colores y a un importe.
 *
 * SOBRE EL MOVIMIENTO
 *   Los tramos se mueven con una transición de CSS sobre el ancho, no con una
 *   animación de entrada por scroll. Es deliberado: esto vive dentro de la
 *   calculadora, y ahí quedamos en que no hay movimiento decorativo. Una
 *   transición corta sobre el ancho no adorna, hace legible el cambio —sin
 *   ella los tramos saltan y no se ve qué creció. El porcentaje tampoco se
 *   anima: contar hasta la cifra mientras el visitante sigue tecleando
 *   mostraría números que nunca fueron ciertos.
 */
export function FeeBar({
  dict,
  quote,
  from,
  to,
}: {
  dict: Dictionary;
  quote: QuoteBreakdown;
  from: CurrencyCode;
  to: CurrencyCode;
}) {
  const t = dict.feeBar;
  const loc = dict.meta.numberLocale;
  const dinero = (v: number, m: CurrencyCode) => formatMoney(v, m, loc);
  const [dibujada, setDibujada] = useState(false);
  const primera = useRef(true);

  // Entrada: los tramos arrancan a cero y crecen una sola vez, al montar. A
  // partir de ahí la misma transición sirve para cada cambio de importe.
  useEffect(() => {
    if (!primera.current) return;
    primera.current = false;
    const id = requestAnimationFrame(() => setDibujada(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const entregado = quote.send;
  const convierte = quote.send - quote.totalCost;

  const tramos = [
    { clave: "convierte", etiqueta: t.converts, valor: convierte, tono: "llega" },
    { clave: "comision", etiqueta: t.fee, valor: quote.transferFee, tono: "coste" },
    { clave: "diferencial", etiqueta: t.spread, valor: quote.spreadCost, tono: "coste-2" },
  ].filter((tr) => tr.valor > 0);

  const pct = (v: number) => (entregado > 0 ? (v / entregado) * 100 : 0);
  const costePct = pct(quote.totalCost);

  return (
    <div className="barra">
      <div className="barra__cabeza">
        <span className="tag">{t.eyebrow}</span>
        <p className="caption barra__lead">{t.lead}</p>
      </div>

      <div className="barra__extremos">
        <span>
          <em>{t.sends}</em>
          <b>{dinero(entregado, from)}</b>
        </span>
        <span className="barra__derecha">
          <em>{t.arrives}</em>
          <b className="barra__llega">{dinero(quote.receives, to)}</b>
        </span>
      </div>

      <div className="barra__pista">
        {tramos.map((tr) => (
          <div
            key={tr.clave}
            className="barra__tramo"
            data-tono={tr.tono}
            style={{ width: dibujada ? `${pct(tr.valor)}%` : "0%" }}
          >
            <span className="sr-only">
              {tr.etiqueta}: {dinero(tr.valor, from)}
            </span>
          </div>
        ))}
      </div>

      <ul className="barra__leyenda">
        {tramos.map((tr) => (
          <li key={tr.clave}>
            <span className="barra__punto" data-tono={tr.tono} />
            <span className="barra__etq">{tr.etiqueta}</span>
            <span className="barra__val">{dinero(tr.valor, from)}</span>
          </li>
        ))}
      </ul>

      <p className="barra__total">
        {t.totalCost}
        <span className="barra__pct">
          {new Intl.NumberFormat(loc, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          }).format(costePct)}
          {" %"}
        </span>
      </p>
    </div>
  );
}
