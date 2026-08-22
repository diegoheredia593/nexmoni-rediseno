"use client";

import { useEffect, useState } from "react";

/** Clave de `localStorage`. Fuera del componente porque el script anti-parpadeo
 *  de `layout.tsx` tiene que usar exactamente la misma cadena. */
export const CLAVE_TEMA = "nexmoni:tema";

type Tema = "dia" | "noche";

/**
 * Conmutador día / noche.
 *
 * El estado real vive en `document.documentElement.dataset.tema`, no aquí: el
 * script en línea del layout ya lo ha escrito antes del primer pintado, así que
 * este componente arranca leyéndolo en vez de imponer un valor. Si arrancara con
 * un valor propio, el primer render de React contradiría al script y la página
 * parpadearía justo lo que el script existe para evitar.
 *
 * `montado` gobierna el `suppressHydrationWarning` de facto: en el servidor no
 * hay manera de saber el tema del visitante, así que hasta que el efecto corre
 * el botón se pinta en su estado neutro.
 */
export function ThemeSwitch({
  label,
  labelDia,
  labelNoche,
}: {
  label: string;
  labelDia: string;
  labelNoche: string;
}) {
  const [tema, setTema] = useState<Tema>("dia");
  const [montado, setMontado] = useState(false);

  // Hay DOS conmutadores montados a la vez —el de la barra y el del panel del
  // menú—, y solo cambia cuál es visible según el ancho. Si cada uno guardara
  // su propio estado, tocar uno dejaría al otro mostrando el astro contrario.
  // El atributo del <html> es la única fuente de verdad y el observador
  // mantiene a los dos mirándola.
  useEffect(() => {
    const raiz = document.documentElement;
    const leer = () => setTema(raiz.dataset.tema === "noche" ? "noche" : "dia");
    leer();
    setMontado(true);
    const obs = new MutationObserver(leer);
    obs.observe(raiz, { attributeFilter: ["data-tema"] });
    return () => obs.disconnect();
  }, []);

  // Si el visitante nunca ha elegido, la página sigue al sistema operativo:
  // cambiar el modo oscuro del móvil al anochecer debe cambiar también esto.
  // En cuanto pulsa el botón se guarda su elección y dejamos de seguirlo.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const alCambiar = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(CLAVE_TEMA)) return;
      const siguiente: Tema = e.matches ? "noche" : "dia";
      document.documentElement.dataset.tema = siguiente;
      setTema(siguiente);
    };
    mq.addEventListener("change", alCambiar);
    return () => mq.removeEventListener("change", alCambiar);
  }, []);

  const alternar = () => {
    const siguiente: Tema = tema === "dia" ? "noche" : "dia";
    document.documentElement.dataset.tema = siguiente;
    try {
      localStorage.setItem(CLAVE_TEMA, siguiente);
    } catch {
      // Modo privado en Safari o almacenamiento bloqueado: el tema se aplica
      // igual, solo que no sobrevive a la recarga. No es motivo para romper.
    }
    // El observador de arriba propaga el cambio a las dos instancias.
  };

  const esNoche = montado && tema === "noche";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={esNoche}
      aria-label={`${label}: ${esNoche ? labelNoche : labelDia}`}
      className="tema"
      data-noche={esNoche || undefined}
      onClick={alternar}
    >
      {/* El astro: un disco que se desplaza y al que una segunda sombra le da
          el mordisco que lo convierte en luna creciente. Los rayos son
          `box-shadow`, así que aparecen y desaparecen sin nodos extra. */}
      <span className="tema__astro" aria-hidden="true">
        <span className="tema__mordisco" />
      </span>
      {/* Las estrellas solo existen de noche; se desvanecen con la transición. */}
      <span className="tema__estrellas" aria-hidden="true">
        <i /><i /><i />
      </span>
    </button>
  );
}
