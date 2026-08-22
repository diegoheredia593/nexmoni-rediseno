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
