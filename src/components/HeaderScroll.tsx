"use client";

import { useEffect } from "react";

/**
 * Marca la barra superior como «sobre el hero» o «sobre la página».
 *
 * Sobre la noche va transparente y en texto claro; en cuanto el hero se va,
 * vuelve a ser la barra de papel de siempre. Se resuelve con un
 * IntersectionObserver sobre el propio hero en vez de escuchar el scroll: no
 * hay trabajo por cuadro y el umbral es exacto.
 *
 * Si no hay hero de noche en la página —las tres interiores— no hace nada y
 * la barra se queda en su estado claro.
 */
export function HeaderScroll() {
  useEffect(() => {
    const hero = document.querySelector(".cine");
    const barra = document.querySelector(".topbar");
    if (!hero || !barra) return;

    barra.classList.add("topbar--sobre-noche");
    const obs = new IntersectionObserver(
      ([e]) => barra.classList.toggle("topbar--sobre-noche", e.isIntersecting),
      // Se cambia cuando queda menos de la altura de la barra de hero visible.
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    obs.observe(hero);
    return () => {
      obs.disconnect();
      barra.classList.remove("topbar--sobre-noche");
    };
  }, []);

  return null;
}
