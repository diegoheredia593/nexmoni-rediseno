"use client";

import { useRef } from "react";
import { useGlossary, type Tone } from "./GlossaryProvider";

/**
 * Jerga regulada con definición al pasar el cursor o al enfocar.
 * El tono lo pasa la sección (no se mide la luminancia en tiempo de ejecución,
 * como hacía el prototipo): en banda oscura el subrayado y el tooltip invierten.
 */
export function Term({ term, tone = "light" }: { term: string; tone?: Tone }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { show, hide } = useGlossary();

  const open = () => {
    if (ref.current) show(term, ref.current.getBoundingClientRect(), tone);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`term${tone === "dark" ? " term--dark" : ""}`}
      aria-label={`${term} — ver definición`}
      onMouseEnter={open}
      onFocus={open}
      onMouseLeave={hide}
      onBlur={hide}
      onClick={open}
    >
      {term}
    </button>
  );
}
