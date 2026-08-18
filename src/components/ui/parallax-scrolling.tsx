"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Parallax por scroll.
 *
 * Conserva el mecanismo del original —una línea de tiempo con `scrub` atada
 * al elemento marcado con `data-parallax-layers`, que desplaza cada
 * `data-parallax-layer` un `yPercent` distinto— y cambia tres cosas:
 *
 *  1. Sin Lenis. El original monta un scroll suave que se apodera del scroll
 *     del documento entero; aquí eso afectaría a las 16 páginas, chocaría con
 *     el `scroll-behavior: smooth` que ya hay y con los saltos a las anclas
 *     del embudo. ScrollTrigger solo ya hace el parallax.
 *  2. La limpieza va acotada. El original hace
 *     `ScrollTrigger.getAll().forEach(st => st.kill())`, que al desmontarse se
 *     lleva por delante los disparadores de cualquier otro componente.
 *     `gsap.context()` limpia únicamente lo que creó esta instancia.
 *  3. Respeta `prefers-reduced-motion`: sin animación, los planos se quedan
 *     donde están y la composición sigue leyéndose.
 */

/** Cuánto se desplaza cada plano. Los valores son los del original. */
const DESPLAZAMIENTOS = [
  { plano: "1", yPercent: 70 },
  { plano: "2", yPercent: 55 },
  { plano: "3", yPercent: 40 },
  { plano: "4", yPercent: 10 },
] as const;

export function ParallaxLayers({
  children,
  className,
  /**
   * Escala los desplazamientos. Los valores del original están pensados para
   * una sección a pantalla completa; en un marco de 4:5 dentro de la portada
   * mueven los planos fuera de cuadro. El factor conserva las velocidades
   * relativas —lo que hace que el parallax se lea— y ajusta la magnitud.
   */
  factor = 1,
  /**
   * Tramo de scroll en el que corre la línea de tiempo. Los del original
   * —"0% 0%" a "100% 0%"— empiezan cuando el elemento toca el borde superior,
   * que para una sección a pantalla completa es lo suyo. Para una pieza
   * dentro de la portada eso significa que el efecto ocurre cuando ya se está
   * yendo: medido, entre 0 y 150 px de scroll no se movía nada. Atándolo a la
   * entrada y la salida del viewport, el parallax dura lo que dura verla.
   */
  start = "0% 0%",
  end = "100% 0%",
}: {
  children: ReactNode;
  className?: string;
  factor?: number;
  start?: string;
  end?: string;
}) {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const linea = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: 0,
        },
      });

      DESPLAZAMIENTOS.forEach((capa, i) => {
        linea.to(
          el.querySelectorAll(`[data-parallax-layer="${capa.plano}"]`),
          { yPercent: capa.yPercent * factor, ease: "none" },
          i === 0 ? undefined : "<",
        );
      });
    }, raiz);

    return () => ctx.revert();
  }, [factor, start, end]);

  return (
    <div ref={raiz} data-parallax-layers className={className}>
      {children}
    </div>
  );
}
