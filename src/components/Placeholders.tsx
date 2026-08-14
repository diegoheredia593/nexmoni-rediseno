/**
 * Marcadores de posición fotográficos.
 *
 * ⚠ TEMPORALES. Cada uno lleva su briefing en la leyenda: proporción, encuadre,
 * sujeto, luz y tratamiento. Se sustituyen por fotografía real con halftone
 * grueso en blanco y negro; el handoff pide explícitamente NO publicar estas
 * animaciones.
 */

const dot = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  ...extra,
});

export function HeroFigure({ label, coords, brief }: { label: string; coords: string; brief: string }) {
  return (
    <div
      style={{
        position: "relative",
        padding: 20,
        background: "var(--surface-alt)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          right: 20,
          display: "flex",
          justifyContent: "space-between",
          font: "400 9px/1 var(--mono)",
          letterSpacing: ".14em",
          color: "var(--ink-42)",
          zIndex: 2,
        }}
      >
        <span style={{ background: "var(--surface-alt)", padding: "4px 6px" }}>{label}</span>
        <span style={{ background: "var(--surface-alt)", padding: "4px 6px" }}>{coords}</span>
      </div>

      <div className="halftone" style={{ height: "100%", minHeight: 640 }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "46%",
            width: "52%",
            aspectRatio: "1",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div
            style={dot({
              background:
                "radial-gradient(circle, rgba(20,24,29,.55) 0 58%, rgba(20,24,29,0) 72%)",
              animation: "nm-drift 9s ease-in-out infinite",
            })}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "52%",
            width: "15%",
            aspectRatio: "9/19",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "var(--surface)",
              outline: "1px solid rgba(20,24,29,.55)",
              animation: "nm-drift 9s ease-in-out infinite",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "52%",
            width: "5%",
            aspectRatio: "1",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div
            style={dot({ background: "var(--accent)", animation: "nm-pulse 2.6s ease-in-out infinite" })}
          />
        </div>
        <div className="halftone__caption">{brief}</div>
      </div>
    </div>
  );
}

export function UseTriptych({ label, format, briefs }: { label: string; format: string; briefs: readonly string[] }) {
  return (
    <section style={{ borderBottom: "1px solid var(--hairline)", padding: "0 var(--pad-x) 40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 0",
          font: "400 9px/1 var(--mono)",
          letterSpacing: ".14em",
          color: "var(--ink-45)",
        }}
      >
        <span>{label}</span>
        <span>{format}</span>
      </div>

      <div className="triptych" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        <div className="halftone" style={{ aspectRatio: "4/5" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "16%",
              width: "34%",
              aspectRatio: "9/17",
              transform: "translateX(-50%)",
              background: "var(--surface)",
              outline: "1px solid rgba(20,24,29,.55)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: "34%",
              width: "11%",
              aspectRatio: "1",
              background: "var(--accent)",
              borderRadius: "50%",
              animation: "nm-rise 3.2s ease-in-out infinite",
            }}
          />
          <div className="halftone__caption">{briefs[0]}</div>
        </div>

        <div className="halftone" style={{ aspectRatio: "4/5" }}>
          <div
            style={{
              position: "absolute",
              left: "26%",
              top: "44%",
              width: "30%",
              aspectRatio: "1",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div style={dot({ background: "rgba(20,24,29,.5)", animation: "nm-inL 4.4s ease-in-out infinite" })} />
          </div>
          <div
            style={{
              position: "absolute",
              left: "74%",
              top: "44%",
              width: "30%",
              aspectRatio: "1",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div style={dot({ background: "rgba(20,24,29,.32)", animation: "nm-inR 4.4s ease-in-out infinite" })} />
          </div>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "44%",
              width: "9%",
              aspectRatio: "1",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div style={dot({ background: "var(--accent)", animation: "nm-pulse 2.2s ease-in-out infinite" })} />
          </div>
          <div className="halftone__caption">{briefs[1]}</div>
        </div>

        <div className="halftone" style={{ aspectRatio: "4/5" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "46%",
              width: "56%",
              aspectRatio: "8/5",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                background: "var(--surface)",
                outline: "1px solid rgba(20,24,29,.55)",
                overflow: "hidden",
                animation: "nm-tilt 6s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "8%",
                  bottom: "14%",
                  width: "34%",
                  height: "7%",
                  background: "rgba(20,24,29,.45)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "8%",
                  top: "14%",
                  width: "16%",
                  aspectRatio: "1",
                  background: "var(--accent)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "22%",
                  background: "rgba(20,24,29,.14)",
                  animation: "nm-sweep 3.6s linear infinite",
                }}
              />
            </div>
          </div>
          <div className="halftone__caption">{briefs[2]}</div>
        </div>
      </div>
    </section>
  );
}

export function ClosingFigure({ label, format, brief }: { label: string; format: string; brief: string }) {
  return (
    <section style={{ borderBottom: "1px solid var(--hairline)", padding: "0 var(--pad-x) 40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 0",
          font: "400 9px/1 var(--mono)",
          letterSpacing: ".14em",
          color: "var(--ink-45)",
        }}
      >
        <span>{label}</span>
        <span>{format}</span>
      </div>
      <div className="halftone" style={{ aspectRatio: "3/1" }}>
        {["14%", "86%"].map((left) => (
          <div
            key={left}
            style={{
              position: "absolute",
              left,
              top: "50%",
              width: "9%",
              aspectRatio: "1",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              background: "rgba(20,24,29,.5)",
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: "14%",
            right: "14%",
            top: "50%",
            height: 1,
            background: "rgba(20,24,29,.45)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            width: "3%",
            aspectRatio: "1",
            transform: "translateY(-50%)",
            borderRadius: "50%",
            background: "var(--accent)",
            animation: "nm-scan 5s linear infinite",
          }}
        />
        <div className="halftone__caption">{brief}</div>
      </div>
    </section>
  );
}

export function AvatarPlaceholder() {
  return (
    <div
      className="halftone"
      style={{ width: 44, height: 44, flex: "none", backgroundSize: "4px 4px" }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "52%",
          width: "52%",
          aspectRatio: "1",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div style={dot({ background: "rgba(20,24,29,.5)", animation: "nm-pulse 3.4s ease-in-out infinite" })} />
      </div>
    </div>
  );
}
