"use client";

import Link from "next/link";
import { TextRoll } from "@/components/ui/text-roll";
import { useEffect, useRef, useState } from "react";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

/**
 * Hero a sangre, en clave de noche.
 *
 * El vídeo va detrás de todo y el póster hace de primer fotograma, así que
 * mientras no exista el archivo la pieza ya se puede juzgar: se ve el póster.
 *
 * Tres cosas que un vídeo de fondo tiene que resolver sí o sí, y que el sitio
 * de referencia resuelve mal:
 *
 *  1. `preload="none"` y sin arrancar en pantallas pequeñas. El público de
 *     este sitio navega con datos móviles desde Android de gama baja; un vídeo
 *     hiperrealista pesa entre 15 y 40 veces lo que la foto. En móvil se queda
 *     el póster, que pesa 11 KB.
 *  2. `prefers-reduced-motion` deja el póster fijo. Un fondo en bucle es
 *     movimiento constante y no todo el mundo lo tolera.
 *  3. El velo no es un color plano: es un degradado que carga la tinta donde
 *     cae el texto y la suelta en los bordes, para que la imagen respire sin
 *     que el titular pierda contraste.
 */
const routeLabels: Record<Locale, { from: string; to: string; aria: string }> = {
  es: { from: "EUROPA", to: "LATINOAMÉRICA", aria: "Trayecto de Europa a Latinoamérica" },
  en: { from: "EUROPE", to: "LATIN AMERICA", aria: "Route from Europe to Latin America" },
  pt: { from: "EUROPA", to: "AMÉRICA LATINA", aria: "Rota da Europa para a América Latina" },
  lt: { from: "EUROPA", to: "LOTYNŲ AMERIKA", aria: "Maršrutas iš Europos į Lotynų Ameriką" },
};

export function HeroCinematic({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const video = useRef<HTMLVideoElement>(null);
  const [reproduce, setReproduce] = useState(false);

  useEffect(() => {
    const anchoBastante = window.matchMedia("(min-width: 900px)");
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Muchos móviles anuncian conexión lenta o ahorro de datos: se respeta.
    const conexion = (navigator as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const ahorra = Boolean(conexion?.saveData) || /2g/.test(conexion?.effectiveType ?? "");

    setReproduce(anchoBastante.matches && !menosMovimiento.matches && !ahorra);
  }, []);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (reproduce) v.play().catch(() => {});
    else v.pause();
  }, [reproduce]);

  return (
    <section className="cine">
      <video
        ref={video}
        className="cine__media"
        poster="/video/hero-poster.webp"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      >
        {reproduce && <source src="/video/hero.mp4" type="video/mp4" />}
      </video>

      <div className="cine__velo" aria-hidden="true" />

      <svg
        className="cine__route"
        viewBox="0 0 700 500"
        role="img"
        aria-label={routeLabels[locale].aria}
      >
        <defs>
          <filter id="route-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path className="cine__route-guide" d="M566 98 C450 88 370 154 318 238 C267 320 215 380 119 411" />
        <path className="cine__route-line" d="M566 98 C450 88 370 154 318 238 C267 320 215 380 119 411" />
        <circle className="cine__route-origin" cx="566" cy="98" r="6" />
        <circle className="cine__route-destination" cx="119" cy="411" r="7" />
        <circle className="cine__route-pulse" r="5" filter="url(#route-glow)">
          <animateMotion
            dur="4.8s"
            repeatCount="indefinite"
            path="M566 98 C450 88 370 154 318 238 C267 320 215 380 119 411"
          />
        </circle>
        <text className="cine__route-label" x="584" y="103">{routeLabels[locale].from}</text>
        <text className="cine__route-label cine__route-label--destination" x="101" y="440">{routeLabels[locale].to}</text>
      </svg>

      <div className="cine__in wrap">
        <span className="cine__kicker">{dict.hero.kicker.join(" · ")}</span>

        {/* El titular entra letra a letra al cargar. Esto NO contradice la regla
            de «nada se anima por encima del pliegue»: aquella prohíbe los
            revelados atados al scroll, que retrasan contenido ya visible. Esto
            es el gesto de apertura del hero y arranca solo, sin esperar a nada.
            `TextRoll` agrupa cada palabra en una caja sin corte, así que el
            salto de línea nunca parte una palabra por la mitad. */}
        <h1 className="cine__title">
          <TextRoll>{dict.hero.titleTop}</TextRoll>
          <br />
          <TextRoll>{dict.hero.titleBottom}</TextRoll>
        </h1>

        <p className="cine__lead">{dict.hero.lead}</p>

        <div className="cine__actions">
          <Link href={href(locale, "/#descargar")} className="pill pill--acento">
            {dict.hero.cta}
          </Link>
          <Link href={href(locale, "/#descargar")} className="pill pill--fantasma">
            {dict.hero.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Señal de que hay página debajo: sin esto un hero a pantalla completa
          hace creer que eso es todo lo que hay. */}
      <span className="cine__cue" aria-hidden="true" />
    </section>
  );
}
