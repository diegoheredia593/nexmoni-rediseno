/**
 * Marcadores de posición fotográficos.
 *
 * ⚠ TEMPORALES. La leyenda lleva el encargo: proporción, encuadre, sujeto,
 * luz y tratamiento. Se sustituyen por fotografía real con halftone grueso en
 * blanco y negro; el manual de diseño pide explícitamente NO publicar estas
 * animaciones.
 *
 * Acero templado reduce el encargo de seis piezas a dos: una figura de
 * portada y el retrato del testimonio. Una idea por pantalla.
 */

import { ParallaxLayers } from "@/components/ui/parallax-scrolling";

export function HeroFigure({ brief }: { brief: string }) {
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
        {/* 1 · Campo halftone. Sobredimensionado y subido, para que al bajar
               no descubra el borde superior del marco.
               ⏳ Aquí va la IMAGEN B (fondo del rodaje) si llega. */}
        <div data-parallax-layer="1" className="hero-figure__field" />

        {/* 2 · La masa de la figura.
               ⏳ AQUÍ VA LA IMAGEN A: la figura recortada sobre transparencia,
               en blanco y negro. Se sustituye este div por el <img> y se
               quita el degradado. */}
        <div
          data-parallax-layer="2"
          className="dot"
          style={{
            left: "50%",
            top: "46%",
            width: "56%",
            aspectRatio: "1",
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(20,24,29,.5) 0 58%, rgba(20,24,29,0) 72%)",
          }}
        />

        {/* 3 · El móvil. */}
        <div
          data-parallax-layer="3"
          style={{
            position: "absolute",
            left: "50%",
            top: "52%",
            width: "16%",
            aspectRatio: "9 / 19",
            transform: "translate(-50%,-50%)",
            background: "var(--surface)",
            outline: "1px solid rgba(20,24,29,.5)",
          }}
        />

        {/* 4 · El punto de acento, al frente: es dirección de arte, no
               interfaz. Apenas se mueve, y por eso ancla la composición. */}
        <div
          data-parallax-layer="4"
          className="dot"
          style={{
            left: "50%",
            top: "52%",
            width: "5%",
            aspectRatio: "1",
            transform: "translate(-50%,-50%)",
            background: "var(--accent)",
          }}
        />
      </ParallaxLayers>

      {/* La leyenda del encargo no se mueve: no es parte de la composición. */}
      <div className="halftone__brief">{brief}</div>
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
    <div
      className="halftone"
      style={{ width: 44, height: 44, flex: "none", backgroundSize: "4px 4px" }}
    >
      <div
        className="dot"
        style={{
          left: "50%",
          top: "52%",
          width: "52%",
          aspectRatio: "1",
          transform: "translate(-50%,-50%)",
          background: "rgba(20,24,29,.5)",
        }}
      />
    </div>
  );
}
