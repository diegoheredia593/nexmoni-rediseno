"use client";

import { useEffect, useState } from "react";

export const CLAVE_PALETA = "nexmoni:paleta";

/** Las tres direcciones del documento de dirección visual. Los nombres tienen
 *  que coincidir con los selectores `[data-paleta]` de `globals.css`. */
const PALETAS = [
  { id: "litoral", nombre: "Litoral", pista: "Petróleo sobre hueso", muestra: "#0f5f63" },
  { id: "altiplano", nombre: "Altiplano", pista: "Ladrillo sobre grafito", muestra: "#b23a1f" },
  { id: "transito", nombre: "Tránsito II", pista: "Cobre, degradado de rango", muestra: "#a65825" },
] as const;

/**
 * Selector de paleta para enseñar el sitio a un cliente.
 *
 * SOLO EXISTE EN VISTA PREVIA. El componente se monta desde el layout detrás de
 * `isPreview`, así que en un despliegue de producción ni siquiera llega al
 * paquete. Una paleta se decide viéndola aplicada a la página real, no mirando
 * cuadraditos de color en una diapositiva; esto es para eso y para nada más.
 *
 * Escribe `data-paleta` en <html>, que es donde `globals.css` tiene los seis
 * bloques (tres paletas × dos temas). Se combina con el conmutador día/noche
 * sin que ninguno de los dos sepa del otro.
 */
export function PaletteSwitch() {
  const [abierto, setAbierto] = useState(false);
  const [actual, setActual] = useState<string>("litoral");

  useEffect(() => {
    let guardada: string | null = null;
    try {
      guardada = localStorage.getItem(CLAVE_PALETA);
    } catch {
      /* almacenamiento bloqueado: se queda en la de por defecto */
    }
    if (guardada && PALETAS.some((p) => p.id === guardada)) {
      document.documentElement.dataset.paleta = guardada;
      setActual(guardada);
    }
  }, []);

  const elegir = (id: string) => {
    document.documentElement.dataset.paleta = id;
    try {
      localStorage.setItem(CLAVE_PALETA, id);
    } catch {
      /* igual que arriba */
    }
    setActual(id);
  };

  return (
    <div className="paleta" data-abierto={abierto || undefined}>
      <button
        type="button"
        className="paleta__tirador"
        aria-expanded={abierto}
        onClick={() => setAbierto((v) => !v)}
      >
        <span className="paleta__punto" style={{ background: "var(--acento)" }} />
        {abierto ? "Cerrar" : "Paleta"}
      </button>

      {abierto && (
        <div className="paleta__panel">
          <p className="paleta__titulo">Dirección visual</p>
          {PALETAS.map((p) => (
            <button
              key={p.id}
              type="button"
              className="paleta__opcion"
              data-activa={actual === p.id || undefined}
              onClick={() => elegir(p.id)}
            >
              <span className="paleta__punto" style={{ background: p.muestra }} />
              <span>
                <b>{p.nombre}</b>
                <em>{p.pista}</em>
              </span>
            </button>
          ))}
          <p className="paleta__pie">
            Solo en vista previa. Se combina con el conmutador claro / oscuro de
            la barra: seis aspectos en total, los seis medidos contra WCAG AA.
          </p>
        </div>
      )}
    </div>
  );
}
