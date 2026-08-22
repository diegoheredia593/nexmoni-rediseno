"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { appDemo, dinero, tasa } from "@/content/appDemo";
import type { Dictionary } from "@/content/dictionary";

gsap.registerPlugin(ScrollTrigger);

/**
 * El teléfono que se desplaza con la página.
 *
 * CÓMO FUNCIONA
 *   El aparato queda pegado (`position: sticky`) mientras la columna de texto,
 *   mucho más alta, pasa por delante. El lienzo de dentro de la pantalla se
 *   desplaza atado al scroll de la sección: bajar por la web es bajar por la
 *   app. No hay `pin` de ScrollTrigger a propósito —`sticky` de CSS hace lo
 *   mismo sin tocar el flujo del documento, y es lo que evita que la sección
 *   se descoloque en móvil, que es donde el `pin` se rompe.
 *
 * POR QUÉ EL LIENZO SE MIDE EN CADA `refresh`
 *   La altura del contenido depende del idioma: el lituano ocupa más que el
 *   español y el desplazamiento se quedaría corto o pasado. Medirlo dentro de
 *   `invalidateOnRefresh` lo recalcula al cambiar el tamaño y al volver de otra
 *   pestaña.
 */
export function PhoneScroll({ dict }: { dict: Dictionary }) {
  const seccion = useRef<HTMLElement>(null);
  const lienzo = useRef<HTMLDivElement>(null);
  const t = dict.phone;
  const u = t.ui;
  const loc = dict.meta.numberLocale;

  useEffect(() => {
    const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Con movimiento reducido no se anima nada: la app se queda en la primera
    // pantalla y los pasos se leen como una lista normal. Una regla de CSS no
    // sirve aquí, porque GSAP escribe estilos en línea que la regla no alcanza.
    if (menosMovimiento.matches) return;

    const ctx = gsap.context(() => {
      const el = lienzo.current;
      const marco = el?.parentElement;
      if (!el || !marco) return;

      gsap.to(el, {
        ease: "none",
        scrollTrigger: {
          trigger: seccion.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
        y: () => -(el.scrollHeight - marco.clientHeight),
      });

      // El paso activo se marca con una clase, no con estado de React: esto se
      // dispara decenas de veces por segundo y un `setState` por cada una
      // volvería a renderizar el árbol entero sin necesidad.
      gsap.utils.toArray<HTMLElement>(".fone__paso").forEach((paso) => {
        ScrollTrigger.create({
          trigger: paso,
          start: "top 65%",
          end: "bottom 65%",
          toggleClass: { targets: paso, className: "es-activo" },
        });
      });
    }, seccion);

    return () => ctx.revert();
  }, []);

  const filas = [
    { etiqueta: u.amount, valor: dinero(appDemo.importe, "EUR", loc) },
    { etiqueta: u.fee, valor: dinero(appDemo.comision, "EUR", loc) },
    { etiqueta: u.spread, valor: dinero(appDemo.diferencial, "EUR", loc) },
  ];

  const seguimiento = [
    { texto: u.received, hora: appDemo.horas[0], hecho: true },
    { texto: u.converted, hora: appDemo.horas[1], hecho: true },
    { texto: u.onTheWay, hora: appDemo.horas[2], hecho: true },
    { texto: u.delivered, hora: appDemo.horas[3], hecho: false },
  ];

  return (
    <section className="section fone" ref={seccion}>
      <div className="wrap">
        <div className="head">
          <span className="tag">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="fone__rejilla">
          {/* ── El aparato ──────────────────────────────────────────────── */}
          <div className="fone__col">
            <div className="fone__pegado">
              <div className="fone__marco">
                <div className="fone__borde">
                  <div className="fone__pantalla">
                    {/* Barra de estado: fuera del lienzo, así no se desplaza. */}
                    <div className="app__estado">
                      <span>9:41</span>
                      <span className="app__isla" />
                      <span className="app__iconos">
                        <i className="app__señal" />
                        <i className="app__bateria" />
                      </span>
                    </div>

                    <div className="fone__lienzo" ref={lienzo}>
                      {/* 1 · Inicio */}
                      <div className="app__pant">
                        <p className="app__saludo">{u.greeting}</p>
                        <p className="app__titulo">{u.prompt}</p>
                        <p className="app__etq">{u.recent}</p>
                        <div className="app__contactos">
                          {appDemo.contactos.map((c) => (
                            <div key={c.iniciales} className="app__contacto">
                              <span className="app__avatar">{c.iniciales}</span>
                              <span className="app__nombre">{c.nombre}</span>
                              <span className="app__lugar">{c.lugar}</span>
                            </div>
                          ))}
                        </div>
                        <div className="app__cta">{u.send}</div>
                      </div>

                      {/* 2 · Importe */}
                      <div className="app__pant">
                        <p className="app__titulo">{u.send}</p>
                        <div className="app__campo">
                          <span className="app__etq">{u.youSend}</span>
                          <strong className="app__cifra">
                            {dinero(appDemo.importe, "EUR", loc)}
                          </strong>
                        </div>
                        <div className="app__hilo" />
                        <div className="app__campo app__campo--dest">
                          <span className="app__etq">{u.theyGet}</span>
                          <strong className="app__cifra">
                            {dinero(appDemo.recibe, "USD", loc)}
                          </strong>
                        </div>
                        <div className="app__fila">
                          <span>{u.rate}</span>
                          <span className="app__num">1 EUR = {tasa(appDemo.tipo, loc)} USD</span>
                        </div>
                        <div className="app__pildora">{u.guaranteed}</div>
                        <div className="app__cta">{u.continue}</div>
                      </div>

                      {/* 3 · Revisión */}
                      <div className="app__pant">
                        <p className="app__titulo">{u.reviewTitle}</p>
                        <div className="app__dest">
                          <span className="app__avatar">{appDemo.contactos[0].iniciales}</span>
                          <span>
                            <b>{appDemo.destinatario}</b>
                            <em>{appDemo.banco}</em>
                          </span>
                        </div>
                        <div className="app__desglose">
                          {filas.map((f) => (
                            <div key={f.etiqueta} className="app__fila">
                              <span>{f.etiqueta}</span>
                              <span className="app__num">{f.valor}</span>
                            </div>
                          ))}
                          <div className="app__fila app__fila--total">
                            <span>{u.totalPay}</span>
                            <span className="app__num">
                              {dinero(appDemo.total, "EUR", loc)}
                            </span>
                          </div>
                        </div>
                        <div className="app__llega">
                          <span>{u.arrives}</span>
                          <strong>{dinero(appDemo.recibe, "USD", loc)}</strong>
                        </div>
                        <div className="app__cta">{u.confirm}</div>
                      </div>

                      {/* 4 · Seguimiento */}
                      <div className="app__pant">
                        <p className="app__titulo">{u.trackTitle}</p>
                        <div className="app__ruta">
                          {seguimiento.map((p) => (
                            <div
                              key={p.texto}
                              className="app__hito"
                              data-hecho={p.hecho || undefined}
                            >
                              <span className="app__marca" />
                              <span className="app__hito-txt">{p.texto}</span>
                              <span className="app__hora">
                                {p.hecho ? p.hora : u.estimate}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="app__fila">
                          <span>{u.amount}</span>
                          <span className="app__num">{dinero(appDemo.recibe, "USD", loc)}</span>
                        </div>
                      </div>

                      {/* 5 · Entregado */}
                      <div className="app__pant app__pant--fin">
                        <span className="app__tic" aria-hidden="true" />
                        <p className="app__titulo">{u.doneTitle}</p>
                        <strong className="app__cifra app__cifra--grande">
                          {dinero(appDemo.recibe, "USD", loc)}
                        </strong>
                        <p className="app__nota">{u.doneNote}</p>
                        <div className="app__fila">
                          <span>{u.reference}</span>
                          <span className="app__num">{appDemo.referencia}</span>
                        </div>
                        <div className="app__cta app__cta--fantasma">{u.share}</div>
                      </div>
                    </div>

                    <span className="fone__inicio" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <p className="fone__aviso">{t.disclaimer}</p>
            </div>
          </div>

          {/* ── Los pasos ───────────────────────────────────────────────── */}
          <ol className="fone__pasos">
            {t.steps.map((paso, i) => (
              <li key={paso.title} className="fone__paso">
                <span className="fone__paso-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{paso.title}</h3>
                <p>{paso.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
