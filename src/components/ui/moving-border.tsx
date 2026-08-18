"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Borde con una luz que recorre el perímetro.
 *
 * Tres adaptaciones respecto al original:
 *
 *  1. Importa de `motion/react` en vez de `framer-motion`. Es el mismo API en
 *     el paquete vigente, que este proyecto ya tenía instalado para el titular
 *     del hero; traer `framer-motion` metería una segunda copia de la misma
 *     librería en el bundle.
 *  2. Las clases por defecto van neutras. El original viene vestido para un
 *     sitio oscuro —`bg-slate-900`, `border-slate-800`, `text-white`— y con
 *     tamaño fijo de botón; aquí envuelve una calculadora sobre fondo claro,
 *     así que el aspecto lo pone quien lo usa.
 *  3. La animación se detiene cuando no hace falta: con
 *     `prefers-reduced-motion` no arranca, y fuera de pantalla se pausa. El
 *     original deja un `requestAnimationFrame` corriendo desde que carga la
 *     página, y esta calculadora vive al final de una página larga.
 */

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn("relative overflow-hidden bg-transparent p-[1px]", containerClassName)}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius }}>
        <MovingBorder duration={duration} rx={borderRadius} ry={borderRadius}>
          <div className={cn("h-20 w-20", borderClassName)} />
        </MovingBorder>
      </div>

      <div
        className={cn("relative flex h-full w-full flex-col antialiased", className)}
        style={{ borderRadius }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: unknown;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const envoltura = useRef<HTMLDivElement | null>(null);
  const progress = useMotionValue<number>(0);
  const [aLaVista, setALaVista] = useState(false);
  const menosMovimiento = useReducedMotion();

  // Fuera de pantalla no hay nada que mirar: se corta el trabajo por cuadro.
  useEffect(() => {
    const el = envoltura.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setALaVista(e.isIntersecting), {
      rootMargin: "120px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const corriendo = aLaVista && !menosMovimiento;

  useAnimationFrame((time) => {
    if (!corriendo) return;
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div ref={envoltura} className="absolute inset-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      {!menosMovimiento && (
        <motion.div
          style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
