import { useId } from "react";

/**
 * La marca de NexMoni.
 *
 * Los tres trazados salen TAL CUAL del logotipo vectorial del cliente
 * (`NexMoni_logo_vector.svg`), sin retocar un solo número. La marca ocupa
 * x 200…674 e y 102,7…578,9 dentro del lienzo original, así que en lugar de
 * moverla se usa esa caja como `viewBox`: es la forma de recortar el logotipo
 * sin tocar la geometría, y cualquier futura versión del archivo se copia
 * igual de directo.
 *
 * Son TRES piezas, no dos: el galón grande y dos cuñas —la superior y la
 * inferior— que forman el interior. La reconstrucción a ojo anterior las hacía
 * pasar por un segundo galón continuo, que no es lo que dibuja el original.
 *
 * EL COLOR VA EN TOKENS, NO EN HEXADECIMALES
 *   El archivo trae una gradiente azul marino casi negra (#111d2d → #0b1727).
 *   Aquí se conserva su dirección pero entre `--acento-alto` y `--acento`, así
 *   que la marca sigue a las tres paletas y a los dos temas sin declarar un
 *   color propio. Un color fijo se pelearía con las seis combinaciones, y en
 *   tema noche un azul casi negro sería invisible sobre el papel oscuro.
 *
 * `useId` no es decorativo: la marca se pinta tres veces en la misma página y
 * dos `<linearGradient>` con el mismo `id` hacen que todas resuelvan contra la
 * primera; al desmontarse esa, las demás se quedan sin relleno.
 */

/** Copiados literalmente del vectorial entregado. */
const TRAZOS = [
  "M656 126C665 132 661 141 651 147L291 347C281 353 281 360 291 366L608 545C615 549 615 555 607 560C560 589 507 582 463 557L224 421C206 411 200 398 200 381V351C200 323 213 298 238 283L509 120C550 96 616 96 656 126Z",
  "M668 151C672 149 674 154 674 160V207C674 244 658 271 630 289L481 384V306C481 277 495 253 522 237L668 151Z",
  "M541 372C545 370 549 370 554 373L646 425C663 435 670 451 670 471V534C670 541 667 543 661 539L457 425C452 422 452 418 457 414L541 372Z",
];

/** Caja de la marca dentro del lienzo original, medida con `getBBox`. */
const CAJA = "200 102.7 474 476.2";

export function AppIcon({
  size = 22,
  className,
  title,
  /** Fondo de aplicación: cuadrado redondeado relleno con la marca calada.
   *  Es como se ve el icono en la pantalla de inicio de un teléfono. */
  enCaja = false,
}: {
  size?: number;
  className?: string;
  /** Sin esto el icono queda oculto para lectores de pantalla: junto al
   *  logotipo escrito sería repetir el nombre dos veces. */
  title?: string;
  enCaja?: boolean;
}) {
  const id = useId();
  const grad = `nx-${id}`;

  const piezas = (relleno: string) =>
    TRAZOS.map((d) => <path key={d.slice(0, 12)} d={d} fill={relleno} />);

  const comun = {
    width: size,
    height: size,
    className,
    role: title ? ("img" as const) : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    focusable: "false" as const,
  };

  const gradiente = (
    <defs>
      <linearGradient id={grad} x1="0" y1="0" x2="0.42" y2="1">
        <stop offset="0%" stopColor="var(--acento-alto)" />
        <stop offset="100%" stopColor="var(--acento)" />
      </linearGradient>
    </defs>
  );

  if (!enCaja) {
    return (
      <svg viewBox={CAJA} {...comun}>
        {gradiente}
        {piezas(`url(#${grad})`)}
      </svg>
    );
  }

  // La marca se lleva al centro de un lienzo de 64 y se encoge al 84 ‰ para
  // dejar el aire que pide un icono de aplicación. `translate(-200 -102.7)`
  // primero lleva su esquina al origen; sin eso el escalado la arrastraría
  // fuera del cuadrado.
  return (
    <svg viewBox="0 0 64 64" {...comun}>
      {gradiente}
      {/* 14 de radio sobre 64 = 22 %, la proporción de esquina que usa iOS. */}
      <rect width="64" height="64" rx="14" fill={`url(#${grad})`} />
      <g transform="translate(12.1 12) scale(0.084) translate(-200 -102.7)">
        {piezas("var(--sobre-acento)")}
      </g>
    </svg>
  );
}
