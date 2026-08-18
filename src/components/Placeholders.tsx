/**
 * Piezas fotográficas.
 *
 * Acero templado reduce el encargo de seis piezas a dos: la figura de portada
 * y el retrato del testimonio. Ambas están ya montadas.
 *
 * Las tres imágenes son generadas, no fotografiadas. Van sin tramar a
 * propósito: el halftone lo pone el CSS sobre ellas, y si vinieran ya tramadas
 * las dos retículas se cruzarían y aparecería muaré.
 */

import Image from "next/image";
import { ParallaxLayers } from "@/components/ui/parallax-scrolling";

export function HeroFigure() {
  return (
    <div className="hero-figure" style={{ aspectRatio: "4 / 5" }}>
      {/* Cuatro planos, del fondo al frente. Los de atrás se desplazan más
          que los de delante, que es lo que separa la composición al hacer
          scroll. El factor baja la magnitud del original a este marco. */}
      {/* Se deja el rango del original a propósito: con él la línea de
          tiempo está en cero mientras la figura ocupa su sitio en la
          portada, así que el primer pintado muestra la composición
          diseñada. Atarlo a la visibilidad la arrancaba ya empezada y
          el disco aparecía a un 60 % en vez de a su 46 %. */}
      <ParallaxLayers className="hero-figure__layers" factor={0.3}>
        {/* 1 · El fondo. Sobredimensionado y subido, para que al desplazarse
               hacia abajo no descubra el borde superior del marco. */}
        <div data-parallax-layer="1" className="hero-figure__field">
          <Image
            src="/foto/hero-fondo.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* 2 · La figura, recortada sobre transparencia. Se le da holgura
               vertical porque el plano recorre un 16,5 % de su propia altura:
               sin ese aire, al moverse descubriría el borde inferior. */}
        <div data-parallax-layer="2" className="hero-figure__subject">
          <Image
            src="/foto/hero-figura.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 40vw"
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
          />
        </div>

        {/* 3 · Filete horizontal a la altura de las manos. Da una referencia
               fija contra la que se mide el desplazamiento de la figura; sin
               algo recto, el parallax casi no se percibe. */}
        <div data-parallax-layer="3" className="hero-figure__rule" />

        {/* 4 · El punto de acento, al frente: es dirección de arte, no
               interfaz. Apenas se mueve, y por eso ancla la composición. */}
        <div
          data-parallax-layer="4"
          className="dot"
          style={{
            left: "13%",
            top: "63%",
            width: "5%",
            aspectRatio: "1",
            transform: "translate(-50%,-50%)",
            background: "var(--accent)",
          }}
        />
      </ParallaxLayers>

      {/* El halftone va encima de todos los planos: es tratamiento de la
          pieza entera, no de una capa suelta. */}
      <div className="hero-figure__screen" aria-hidden="true" />
    </div>
  );
}

/**
 * Código QR de descarga. Marcador: no se puede generar uno real hasta que
 * existan las URL de las fichas. Ver `stores` en `content/brand.ts`.
 */
export function QrPlaceholder({ brief }: { brief: string }) {
  return (
    <div className="qr">
      <div className="qr__grid" aria-hidden="true">
        {Array.from({ length: 64 }, (_, i) => (
          <span key={i} data-on={(i * 7 + (i % 5) * 3) % 3 === 0 ? "1" : undefined} />
        ))}
      </div>
      <p className="qr__brief">{brief}</p>
    </div>
  );
}

export function AvatarPlaceholder() {
  return (
    <div className="avatar">
      <Image src="/foto/testimonio.webp" alt="" width={44} height={44} />
    </div>
  );
}
