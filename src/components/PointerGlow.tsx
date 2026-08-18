"use client";

import { useEffect, useRef } from "react";
import { useMousePositionRef } from "@/components/hooks/use-mouse-position-ref";

/**
 * Resplandor de fondo que sigue al puntero por toda la página.
 *
 * El demo del hook lee la posición con `setInterval(…, 16)` y un `setState`,
 * o sea 60 renders por segundo. Eso tira por la borda justo lo que el hook
 * anuncia de sí mismo —«no re-renders»— y aquí, siendo un fondo de página
 * entera, arrastraría al árbol completo sesenta veces por segundo. Este sitio
 * lo miran desde Android de gama baja, así que se hace como el hook pide: se
 * lee la referencia dentro de un `requestAnimationFrame` y solo se tocan dos
 * variables CSS. React renderiza una vez y no vuelve a enterarse.
 *
 * Sin contenedor, el hook devuelve coordenadas de viewport, que es justo lo
 * que necesita una capa `fixed`.
 */
export function PointerGlow() {
  const capa = useRef<HTMLDivElement>(null);
  const posicion = useMousePositionRef();

  useEffect(() => {
    const el = capa.current;
    if (!el) return;

    // Sin ratón no hay nada que seguir: en táctil el resplandor se quedaría
    // clavado donde cayó el último dedo. Y quien pide menos movimiento no
    // quiere un degradado persiguiéndole.
    const conRaton = window.matchMedia("(hover: hover) and (pointer: fine)");
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!conRaton.matches || menosMovimiento.matches) return;

    let cuadro = 0;
    // Se parte del valor que ya tiene la referencia, no de un centinela. Con
    // -1 el primer fotograma veía {0,0} como «movimiento» y encendía la capa
    // en la esquina superior izquierda antes de que nadie tocara el ratón.
    let ultimaX = posicion.current.x;
    let ultimaY = posicion.current.y;

    const pintar = () => {
      const { x, y } = posicion.current;
      // Solo se escribe en el DOM cuando el puntero se ha movido de verdad.
      if (x !== ultimaX || y !== ultimaY) {
        ultimaX = x;
        ultimaY = y;
        el.style.setProperty("--glow-x", `${x}px`);
        el.style.setProperty("--glow-y", `${y}px`);
        el.style.setProperty("--glow-on", "1");
      }
      cuadro = requestAnimationFrame(pintar);
    };

    cuadro = requestAnimationFrame(pintar);
    return () => cancelAnimationFrame(cuadro);
  }, [posicion]);

  return <div ref={capa} className="pointer-glow" aria-hidden="true" />;
}
