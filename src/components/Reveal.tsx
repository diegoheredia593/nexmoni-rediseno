"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * La primitiva de revelado: opacidad y 16 px de subida al entrar en pantalla.
 *
 * TRES DECISIONES QUE IMPORTAN
 *
 * 1. El estado inicial lo pone JavaScript, nunca el CSS. Si la opacidad 0
 *    viviera en la hoja de estilos y el script fallara —o el navegador lo
 *    bloqueara— la página entera quedaría invisible para siempre. Escrito así,
 *    sin JavaScript se ve todo, sin más.
 *
 * 2. `once: true`. Volver a animar al subir es lo que hace que un sitio se
 *    sienta de plantilla.
 *
 * 3. Nada por encima del pliegue. El componente no debe envolver el hero: ya
 *    está a la vista y retrasarlo solo añade rebote.
 *
 * `escalonado` reparte la entrada entre los hijos directos; sin él se anima el
 * bloque como una sola pieza.
 */
export function Reveal({
  children,
  escalonado = false,
  retardo = 0,
  className,
  as: Etiqueta = "div",
}: {
  children: React.ReactNode;
  escalonado?: boolean;
  retardo?: number;
  className?: string;
  as?: "div" | "section" | "ol" | "ul";
}) {
  const nodo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = nodo.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const objetivos = escalonado ? Array.from(el.children) : [el];
      gsap.from(objetivos, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: "power2.out",
        stagger: escalonado ? 0.06 : 0,
        delay: retardo,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [escalonado, retardo]);

  return (
    <Etiqueta ref={nodo as React.Ref<never>} className={className}>
      {children}
    </Etiqueta>
  );
}
