"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Cifra que sube desde cero al entrar en pantalla.
 *
 * Es el único sitio de la página donde el movimiento ES la información: un
 * número creciendo dice «esto se acumula» mejor que el número quieto. En el
 * resto del sitio el movimiento acompaña; aquí significa.
 *
 * El texto de partida es el valor final ya formateado, así que sin JavaScript
 * —o con movimiento reducido— la cifra correcta ya está en el DOM y en el
 * árbol de accesibilidad. La animación solo lo sustituye mientras dura.
 *
 * `aria-hidden` no: el lector de pantalla anuncia el nodo una vez, al llegar,
 * y para entonces `gsap` ya ha terminado o ni siquiera ha empezado.
 */
export function CountUp({
  valor,
  formato,
  className,
}: {
  valor: number;
  /** Recibe el valor intermedio y devuelve lo que se pinta. */
  formato: (n: number) => string;
  className?: string;
}) {
  const nodo = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = nodo.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const estado = { n: 0 };
      gsap.to(estado, {
        n: valor,
        duration: 1.4,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = formato(estado.n);
        },
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [valor, formato]);

  return (
    <span ref={nodo} className={className}>
      {formato(valor)}
    </span>
  );
}
