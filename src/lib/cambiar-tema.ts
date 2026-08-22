"use client";

import { flushSync } from "react-dom";
import { CLAVE_TEMA } from "./tema";

export type Tema = "dia" | "noche";

/** `startViewTransition` no está en el `lib.dom` de esta versión de TypeScript
 *  y solo lo trae Chromium. Se declara aquí en vez de castear a `any` en el
 *  punto de uso, para que la comprobación de abajo siga siendo real. */
type DocumentoConTransicion = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> };
};

/**
 * Lee el tema vigente y, si el atributo no está, lo reconstruye.
 *
 * La red de seguridad no es teórica: el atributo lo escribe un script en línea
 * y no React, así que cualquier regeneración del árbol por un desajuste de
 * hidratación lo borra. Ya ocurrió una vez. Reconstruirlo desde lo guardado
 * —y en su defecto desde el sistema operativo— hace que el tema elegido
 * sobreviva a un fallo así en lugar de perderse en silencio.
 */
export function temaVigente(): Tema {
  const puesto = document.documentElement.dataset.tema;
  if (puesto === "noche" || puesto === "dia") return puesto;

  let guardado: string | null = null;
  try {
    guardado = localStorage.getItem(CLAVE_TEMA);
  } catch {
    /* almacenamiento bloqueado */
  }
  const recuperado: Tema =
    guardado === "noche" || guardado === "dia"
      ? guardado
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "noche"
        : "dia";

  document.documentElement.dataset.tema = recuperado;
  return recuperado;
}

/** Escribe el tema y lo guarda. Es lo único imprescindible; todo lo demás de
 *  este archivo es adorno que puede no ocurrir. */
function escribir(siguiente: Tema) {
  document.documentElement.dataset.tema = siguiente;
  try {
    localStorage.setItem(CLAVE_TEMA, siguiente);
  } catch {
    // Modo privado de Safari o almacenamiento bloqueado: el tema se aplica
    // igual, solo que no sobrevive a la recarga. No es motivo para romper.
  }
}

/**
 * Cambia el tema con un barrido circular que nace en el control pulsado.
 *
 * VIVE EN UN MÓDULO DE CLIENTE APARTE
 *   `flushSync` viene de `react-dom`, y `lib/tema.ts` lo importa también
 *   `ThemeScript`, que es un componente de servidor. Cargarlo con `import()`
 *   dinámico dentro del manejador resolvía el tipado pero retrasaba el primer
 *   clic lo que tardase la petición del módulo. Separarlo deja la constante en
 *   un archivo neutro y el código de animación aquí, cargado con el
 *   conmutador.
 *
 * CÓMO FUNCIONA
 *   `startViewTransition` fotografía la página antes y después del cambio y
 *   nos deja animar entre las dos instantáneas. Animamos el `clip-path` de la
 *   nueva desde un círculo de radio cero en el centro del botón hasta uno que
 *   cubre la esquina más lejana. Como el conmutador vive en la barra superior,
 *   el círculo se expande casi todo hacia abajo, que es el gesto pedido.
 *
 * DOS SALIDAS ANTES DE ANIMAR, LAS DOS OBLIGATORIAS
 *
 *   1. `startViewTransition` solo existe en Chromium. El componente de origen
 *      lo llamaba sin comprobar: en Firefox y en Safari antiguo eso lanza
 *      TypeError y —lo importante— el tema NO LLEGA A CAMBIARSE, porque el
 *      cambio iba dentro de la propia llamada. Aquí el cambio va primero y la
 *      animación es opcional.
 *
 *   2. Un barrido de 620 ms a pantalla completa es exactamente lo que
 *      `prefers-reduced-motion` existe para evitar. Con esa preferencia el
 *      tema cambia de golpe.
 *
 * `flushSync` es necesario: React agrupa las actualizaciones y, sin él, la
 * instantánea «nueva» se tomaría antes de que el atributo llegue al DOM, así
 * que el barrido revelaría el tema viejo.
 */
export async function cambiarTema(siguiente: Tema, origen?: HTMLElement | null) {
  const doc = document as DocumentoConTransicion;

  const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!doc.startViewTransition || menosMovimiento || !origen) {
    escribir(siguiente);
    return;
  }

  // Se mide ANTES de arrancar la transición: en cuanto empieza, la página real
  // queda tapada por las instantáneas y el rectángulo del botón deja de ser
  // fiable.
  const { left, top, width, height } = origen.getBoundingClientRect();
  const cx = left + width / 2;
  const cy = top + height / 2;

  // Radio hasta la esquina más lejana: por debajo, el barrido terminaría
  // dejando un trozo de página sin cubrir.
  const radio = Math.hypot(
    Math.max(cx, window.innerWidth - cx),
    Math.max(cy, window.innerHeight - cy),
  );

  const transicion = doc.startViewTransition(() => {
    flushSync(() => escribir(siguiente));
  });

  try {
    await transicion.ready;
  } catch {
    // Si otra transición la interrumpe, `ready` rechaza. El tema ya está
    // puesto, así que no hay nada que recuperar.
    return;
  }

  document.documentElement.animate(
    {
      clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${radio}px at ${cx}px ${cy}px)`],
    },
    {
      duration: 620,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      pseudoElement: "::view-transition-new(root)",
    },
  );
}
