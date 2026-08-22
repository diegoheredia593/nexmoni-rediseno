"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { CLAVE_TEMA } from "@/lib/tema";

interface ThemeToggleProps {
  className?: string;
  /** Nombre accesible. El componente no tiene texto: sin esto un lector de
   *  pantalla anuncia un control sin nombre. */
  label: string;
  labelDia: string;
  labelNoche: string;
}

export function ThemeToggle({ className, label, labelDia, labelNoche }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [montado, setMontado] = useState(false);

  // El original arranca con `useState(true)` y su propio estado. Aquí no puede:
  //
  //  1. El script en línea del layout ya ha escrito `data-tema` antes del primer
  //     pintado. Si el componente impusiera su propio valor inicial, el primer
  //     render de React contradiría al script y la página parpadearía justo lo
  //     que el script existe para evitar.
  //  2. Hay DOS instancias montadas a la vez —la de la barra y la del panel del
  //     menú— y solo cambia cuál es visible según el ancho. Con estado propio en
  //     cada una, tocar una dejaría a la otra mostrando el icono contrario.
  //
  // El atributo del <html> es la única fuente de verdad; el observador mantiene
  // a las dos mirándola.
  useEffect(() => {
    const raiz = document.documentElement;
    const leer = () => setIsDark(raiz.dataset.tema === "noche");
    leer();
    setMontado(true);
    const obs = new MutationObserver(leer);
    obs.observe(raiz, { attributeFilter: ["data-tema"] });
    return () => obs.disconnect();
  }, []);

  // Si el visitante nunca ha elegido, la página sigue al sistema operativo:
  // cambiar el modo oscuro del móvil al anochecer debe cambiar también esto.
  // En cuanto pulsa, se guarda su elección y dejamos de seguirlo.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const alCambiar = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(CLAVE_TEMA)) return;
      document.documentElement.dataset.tema = e.matches ? "noche" : "dia";
    };
    mq.addEventListener("change", alCambiar);
    return () => mq.removeEventListener("change", alCambiar);
  }, []);

  const alternar = () => {
    const siguiente = isDark ? "dia" : "noche";
    document.documentElement.dataset.tema = siguiente;
    try {
      localStorage.setItem(CLAVE_TEMA, siguiente);
    } catch {
      // Modo privado de Safari o almacenamiento bloqueado: el tema se aplica
      // igual, solo que no sobrevive a la recarga. No es motivo para romper.
    }
    // El observador de arriba propaga el cambio a las dos instancias.
  };

  // Hasta que el efecto corre no sabemos el tema del visitante —en el servidor
  // no hay forma de saberlo—, así que el marcado inicial es el claro.
  const oscuro = montado && isDark;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={oscuro}
      aria-label={`${label}: ${oscuro ? labelNoche : labelDia}`}
      onClick={alternar}
      // El original es un <div role="button" tabIndex={0}> sin manejador de
      // teclado: recibe el foco al tabular y luego no hace nada, ni con Intro
      // ni con Espacio. Un <button> de verdad trae las dos teclas, el papel
      // correcto y el foco, sin escribir nada.
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        // `border` de Tailwind solo fija el GROSOR. El estilo lo pone el
        // preflight, que este proyecto no importa a propósito (reiniciaría las
        // 800 líneas escritas a mano). Sin `border-solid` el borde no se dibuja:
        // medido, 0 px de ancho computado.
        "border-solid",
        oscuro
          ? "bg-zinc-950 border border-zinc-800"
          : "bg-white border border-zinc-200",
        className,
      )}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            oscuro
              ? "transform translate-x-0 bg-zinc-800"
              : "transform translate-x-8 bg-gray-200",
          )}
        >
          {oscuro ? (
            <Moon className="w-4 h-4 text-white" strokeWidth={1.5} />
          ) : (
            <Sun className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
          )}
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            oscuro ? "bg-transparent" : "transform -translate-x-8",
          )}
        >
          {oscuro ? (
            <Sun className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
          ) : (
            <Moon className="w-4 h-4 text-black" strokeWidth={1.5} />
          )}
        </div>
      </div>
    </button>
  );
}
