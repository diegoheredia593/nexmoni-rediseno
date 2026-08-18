"use client";

import { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";

/**
 * RECONSTRUIDO A PARTIR DE SU USO.
 *
 * El archivo original no venía en el encargo: solo llegó el demo que lo
 * importa. La API sale de ahí —`label`, `staggerDuration`, `transition`,
 * `className`— y el comportamiento, del nombre: cada letra sale por arriba
 * mientras su copia entra por abajo, y lo que distingue este del típico
 * «letter swap» es que el orden de los retardos va barajado en vez de ir de
 * izquierda a derecha. Se rebaraja en cada pasada para que no se repita.
 *
 * Si aparece el fuente auténtico, sustituir este archivo: la firma es la
 * misma y quien lo consume no cambia.
 */

export type RandomLetterSwapProps = {
  label: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
};

/** Fisher–Yates: un orden distinto de retardos en cada pasada. */
function barajar(n: number) {
  const orden = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [orden[i], orden[j]] = [orden[j], orden[i]];
  }
  return orden;
}

export function RandomLetterSwap({
  label,
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.6, type: "spring" },
}: RandomLetterSwapProps) {
  const [encima, setEncima] = useState(false);
  const [orden, setOrden] = useState(() => barajar(label.length));

  const entrar = useCallback(() => {
    setOrden(barajar(label.length));
    setEncima(true);
  }, [label.length]);

  // Las letras van en cajas `inline-block` y el navegador puede cortar la
  // línea entre dos cualesquiera; agrupadas por palabra, el corte solo cae en
  // los espacios. Mismo motivo que en el titular del hero.
  const palabras = useMemo(() => {
    const salida: { texto: string; desde: number }[] = [];
    let cursor = 0;
    for (const palabra of label.split(" ")) {
      salida.push({ texto: palabra, desde: cursor });
      cursor += palabra.length + 1;
    }
    return salida;
  }, [label]);

  // Quien pide menos movimiento recibe la etiqueta quieta. La regla de
  // globals.css no llega: motion anima con estilos en línea desde JavaScript.
  const menosMovimiento = useReducedMotion();
  if (menosMovimiento) {
    return <span className={className}>{label}</span>;
  }

  const letra = (caracter: string, i: number) => {
    const retardo = orden[i] * staggerDuration;
    const paso = { ...transition, delay: retardo };
    const glifo = caracter === " " ? "\u00A0" : caracter;

    return (
      <span key={i} className="relative inline-block overflow-hidden align-bottom">
        <motion.span
          className="inline-block"
          animate={{ y: encima ? "-100%" : "0%" }}
          transition={paso}
        >
          {glifo}
        </motion.span>
        <motion.span
          className="absolute left-0 top-0 inline-block"
          animate={{ y: encima ? "0%" : "100%" }}
          transition={paso}
        >
          {glifo}
        </motion.span>
      </span>
    );
  };

  return (
    <span
      className={className}
      onMouseEnter={entrar}
      onMouseLeave={() => setEncima(false)}
    >
      <span aria-hidden="true">
        {palabras.map((palabra, p) => (
          <span key={palabra.desde} className="inline-block whitespace-nowrap">
            {palabra.texto.split("").map((c, j) => letra(c, palabra.desde + j))}
            {p < palabras.length - 1 && letra(" ", palabra.desde + palabra.texto.length)}
          </span>
        ))}
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
