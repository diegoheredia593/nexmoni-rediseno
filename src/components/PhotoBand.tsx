import Image from "next/image";
import type { Dictionary } from "@/content/dictionary";
import { Reveal } from "@/components/Reveal";

/**
 * Las dos mitades del envío.
 *
 * Casi todas las webs de remesas enseñan a quien manda el dinero. Muy pocas
 * enseñan la casa donde llega, que es donde está la carga emocional del
 * producto. Esta banda pone las dos caras seguidas a propósito.
 *
 * NADA DE POSTAL: los interiores son domésticos —una cocina, una tienda de
 * barrio— porque el destino de una remesa es una vida corriente, no un paisaje.
 *
 * Las imágenes se sirven desde `public/foto/`. Si un archivo todavía no está,
 * `next/image` devuelve 404 en tiempo de ejecución pero NO rompe el build ni
 * descoloca la maqueta: el hueco conserva su proporción por el `aspect-ratio`
 * del CSS. Es lo que permite montar la sección antes de tener la fotografía.
 */
export function PhotoBand({ dict }: { dict: Dictionary }) {
  const f = dict.photos;

  const piezas = [
    { src: "/foto/remitente-milan.webp", alt: f.milan, pie: f.captionSend, alto: true },
    { src: "/foto/remitente-lisboa.webp", alt: f.lisbon, pie: f.captionSend, alto: false },
    { src: "/foto/destino-guayaquil.webp", alt: f.guayaquil, pie: f.captionReceive, alto: false },
    { src: "/foto/destino-tienda.webp", alt: f.shop, pie: f.captionReceive, alto: true },
  ];

  return (
    <section className="section rule">
      <div className="wrap">
        <Reveal className="head">
          <span className="tag">{f.band}</span>
          <p className="lead">{f.bandLead}</p>
        </Reveal>

        <Reveal className="tira" escalonado>
          {piezas.map((p) => (
            <figure key={p.src} className="tira__pieza" data-alto={p.alto || undefined}>
              <div className="tira__marco">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 700px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption className="tira__pie">{p.pie}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
