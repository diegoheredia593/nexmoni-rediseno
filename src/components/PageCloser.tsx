import Link from "next/link";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

/**
 * Cierre de las páginas interiores.
 *
 * El objetivo del embudo es la descarga, pero hasta ahora solo la portada
 * terminaba pidiéndola: tarifas, acerca y preguntas dejaban al lector frente
 * al pie justo cuando acababa de resolver su duda.
 *
 * Es el único acento de estas tres páginas, así que el óxido se gasta aquí y
 * el enlace secundario va en gris.
 */
export function PageCloser({
  locale,
  dict,
  copy,
  secondaryHref,
}: {
  locale: Locale;
  dict: Dictionary;
  copy: Dictionary["closers"][keyof Dictionary["closers"]];
  secondaryHref: string;
}) {
  return (
    <section className="section rule">
      <div className="wrap">
        <div className="closer">
          <div className="stack-16">
            <span className="tag">{dict.download.eyebrow}</span>
            <h2>{copy.title}</h2>
            <p className="lead">{copy.lead}</p>
          </div>

          <div className="closer__actions">
            <Link href={href(locale, "/#descargar")} className="btn btn--primary">
              {copy.action}
            </Link>
            <Link href={href(locale, secondaryHref)} className="link">
              {copy.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
