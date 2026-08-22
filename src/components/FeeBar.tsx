"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { appDemo, dinero } from "@/content/appDemo";
import { CountUp } from "@/components/CountUp";
import type { Dictionary } from "@/content/dictionary";

gsap.registerPlugin(ScrollTrigger);

/**
 * Anatomía de la tarifa: una sola barra apilada, a escala.
 *
 * POR QUÉ EN CÓDIGO Y NO EN UNA IMAGEN
 *   Lleva cifras y etiquetas en cuatro idiomas, tiene que dibujarse al entrar
 *   en pantalla y tiene que seguir a la paleta cuando esta cambie. Una
 *   ilustración generada quedaría clavada a un idioma, a unos colores y a una
 *   resolución.
 *
 * POR QUÉ ESTE DIAGRAMA Y NO OTRO
 *   Es el único sitio del sitio donde el movimiento ES el dato: la barra
 *   llenándose y la cifra subiendo dicen «esto se acumula» mejor que el
 *   número quieto. En la calculadora, en cambio, no hay animación ninguna:
 *   eso no se lee, se consulta, y cualquier cosa que se mueva es fricción.
 *
 * Los importes salen de `appDemo`, que a su vez sale de `pricing.ts`. El
 * diagrama no puede contradecir a la calculadora ni al teléfono.
 */
export function FeeBar({ dict }: { dict: Dictionary }) {
  const t = dict.feeBar;
  const loc = dict.meta.numberLocale;
  const caja = useRef<HTMLDivElement>(null);

  const { importe, comision, diferencial, total } = appDemo;
  const costeTotal = comision + diferencial;
  const porcentaje = (costeTotal / importe) * 100;

  // Los tres tramos, a escala sobre lo que se paga en total.
  const tramos = [
    { clave: "llega", etiqueta: t.arrives, valor: importe - diferencial, tono: "llega" },
    { clave: "comision", etiqueta: t.fee, valor: comision, tono: "coste" },
    { clave: "diferencial", etiqueta: t.spread, valor: diferencial, tono: "coste-2" },
  ];

  useEffect(() => {
    const el = caja.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // Se dibuja de izquierda a derecha: el origen de la transformación al
      // borde izquierdo hace que la barra crezca, no que se estire desde el
      // centro. `scaleX` en vez de `width` para no recalcular la maqueta en
      // cada fotograma.
      gsap.from(".barra__tramo", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section rule">
      <div className="wrap">
        <div className="head">
          <span className="tag">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="barra" ref={caja}>
          <div className="barra__extremos">
            <span>
              <em>{t.sends}</em>
              <b>{dinero(total, "EUR", loc)}</b>
            </span>
            <span className="barra__derecha">
              <em>{t.arrives}</em>
              <b className="barra__llega">{dinero(appDemo.recibe, "USD", loc)}</b>
            </span>
          </div>

          <div className="barra__pista">
            {tramos.map((tr) => (
              <div
                key={tr.clave}
                className="barra__tramo"
                data-tono={tr.tono}
                style={{ flexGrow: tr.valor }}
                title={`${tr.etiqueta} · ${dinero(tr.valor, "EUR", loc)}`}
              />
            ))}
          </div>

          <ul className="barra__leyenda">
            {tramos.map((tr) => (
              <li key={tr.clave}>
                <span className="barra__punto" data-tono={tr.tono} />
                <span className="barra__etq">{tr.etiqueta}</span>
                <span className="barra__val">{dinero(tr.valor, "EUR", loc)}</span>
              </li>
            ))}
          </ul>

          <p className="barra__total">
            {t.totalCost}{" "}
            <CountUp
              className="barra__pct"
              valor={porcentaje}
              formato={(n) =>
                new Intl.NumberFormat(loc, {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                }).format(n) + " %"
              }
            />
          </p>

          <p className="caption barra__nota">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
