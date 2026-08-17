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

export function HeroFigure({ brief }: { brief: string }) {
  return (
    <div className="halftone" style={{ aspectRatio: "4 / 5" }}>
      <div
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
      <div
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
      {/* El punto de acento aquí es dirección de arte, no interfaz. */}
      <div
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
      <div className="halftone__brief">{brief}</div>
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
