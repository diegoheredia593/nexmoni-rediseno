import { useId } from "react";

/**
 * La marca de NexMoni.
 *
 * Reconstruida como SVG a partir del logotipo del cliente: dos galones
 * anidados apuntando a la izquierda, el exterior con el vértice muy adelantado
 * y el interior a media altura, ambos abriéndose hacia la derecha.
 *
 * SE REDIBUJA, NO SE INCRUSTA
 *   El original es un mapa de bits con gradiente azul→púrpura. En vectorial
 *   escala sin pesar, se recorta limpio a 20 px en la barra y —lo que importa
 *   aquí— puede tomar el color de los tokens. Si aparece el .ai o el .svg
 *   original conviene sustituir estos dos trazados por los suyos: esto es una
 *   reconstrucción a ojo, fiel en proporción pero no calcada.
 *
 * EL COLOR VA EN TOKENS, NO EN HEXADECIMALES
 *   El púrpura de la marca pelea con las tres paletas del sitio. La gradiente
 *   conserva su dirección y su contraste interno, pero entre `--acento-alto` y
 *   `--acento`, así que la marca sigue a Litoral, Altiplano y Tránsito II y a
 *   los dos temas sin declarar un color propio.
 *
 * `useId` no es decorativo: la marca se pinta tres veces en la misma página y
 * dos `<linearGradient>` con el mismo `id` hacen que todas resuelvan contra la
 * primera; al desmontarse esa, las demás se quedan sin relleno.
 */
export function AppIcon({
  size = 22,
  className,
  title,
  /** Fondo de aplicación: cuadrado redondeado relleno, con la marca calada.
   *  Es como se ve en la pantalla de inicio de un teléfono. */
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

  // Los dos galones. Trazo grueso con unión en inglete: el original tiene el
  // vértice en punta, y `round` lo redondearía hasta perder el carácter.
  const galones = (color: string) => (
    <>
      <path
        d="M55 8 L7 32 L43 56"
        fill="none"
        stroke={color}
        strokeWidth="11"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
      />
      <path
        d="M55 24 L31 33 L48 45"
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
      />
    </>
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--acento-alto)" />
          <stop offset="100%" stopColor="var(--acento)" />
        </linearGradient>
      </defs>

      {enCaja ? (
        <>
          {/* 22 % de radio: la proporción de esquina que usa iOS. */}
          <rect width="64" height="64" rx="14" fill={`url(#${grad})`} />
          <g transform="translate(32 32) scale(0.72) translate(-32 -32)">
            {galones("var(--sobre-acento)")}
          </g>
        </>
      ) : (
        galones(`url(#${grad})`)
      )}
    </svg>
  );
}
