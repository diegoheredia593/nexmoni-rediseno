import { CLAVE_TEMA } from "./ThemeSwitch";

/**
 * Escribe `data-tema` en <html> antes del primer pintado.
 *
 * Tiene que ser un script en línea y bloqueante. Cualquier otra vía —un efecto
 * de React, un script diferido, una clase puesta tras la hidratación— llega
 * tarde: el navegador ya habría pintado un cuadro con el tema claro y el
 * visitante que eligió oscuro vería un fogonazo blanco en cada navegación.
 *
 * Es también la razón de que la elección se guarde en `localStorage` y no en
 * una cookie leída por el servidor: las páginas son estáticas y se sirven desde
 * caché, así que el servidor no puede personalizar el HTML por visitante.
 *
 * Sin elección guardada seguimos al sistema operativo. El `try` cubre el modo
 * privado de Safari, donde el mero hecho de leer `localStorage` puede lanzar.
 */
export function ThemeScript() {
  const codigo = `(function(){try{var g=localStorage.getItem(${JSON.stringify(
    CLAVE_TEMA,
  )});var n=g?g==="noche":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.tema=n?"noche":"dia";}catch(e){document.documentElement.dataset.tema="dia";}})();`;

  return <script dangerouslySetInnerHTML={{ __html: codigo }} />;
}
