import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { Button as MarcoAnimado } from "@/components/ui/moving-border";
import { PageCloser } from "@/components/PageCloser";
import { withTerms } from "@/components/glossary/withTerms";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

export function FeesPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.fees;

  return (
    <>
      {/* ── Tarifario ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="tag">
              {t.eyebrow} · {t.sidenote[0]} · {t.sidenote[1]}
            </span>
            <h1 className="h1">{t.title}</h1>
            <p className="lead">{t.lead}</p>
          </div>

          <div className="rows">
            {t.schedule.map((fee) => (
              <div key={fee.label} className="rows__item">
                <div>
                  <h4>{withTerms(fee.label)}</h4>
                  <p className="caption">{withTerms(fee.note)}</p>
                </div>
                <div className="rows__value">{fee.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Calculadora ────────────────────────────────────────────────── */}
      <section id="calculadora" className="section rule">
        <div className="wrap">
          <div className="head">
            <span className="tag">{dict.calculator.eyebrow}</span>
            <h2>{dict.calculator.title}</h2>
            <p className="lead">{dict.calculator.lead}</p>
          </div>

          {/* El cliente avisó de que la calculadora pasaba desapercibida: no
              tenía contenedor, solo filas de filete flotando en la sección.
              El marco la convierte en un instrumento con bordes, y la luz que
              lo recorre es lo que hace que el ojo la encuentre.
              Radio 2 px: lo mínimo para que la luz no se coma la esquina, muy
              lejos de los 28 px del original. */}
          <MarcoAnimado
            as="div"
            borderRadius="2px"
            duration={5200}
            containerClassName="calc-frame"
            borderClassName="calc-frame__light"
            className="calc-frame__inner"
          >
            <Calculator dict={dict} />
          </MarcoAnimado>
        </div>
      </section>

      {/* ── Terminología estandarizada ─────────────────────────────────── */}
      <section className="section rule">
        <div className="wrap">
          <div className="head">
            <span className="tag">
              {t.terminologyEyebrow[0]} {t.terminologyEyebrow[1]}
            </span>
            <p className="lead">{t.terminologyIntro}</p>
          </div>

          <div className="duo">
            {t.terminology.map((term) => (
              <div key={term.en} className="duo__item">
                <span className="tag tag--strong">{term.en}</span>
                <p className="body-s">{withTerms(term.local)}</p>
              </div>
            ))}
          </div>

          <p className="caption" style={{ marginTop: "var(--s-24)" }}>
            <Link href={href(locale, "/#precios")} className="link">
              {t.plansLink}
            </Link>
          </p>
        </div>
      </section>

      <PageCloser
        locale={locale}
        dict={dict}
        copy={dict.closers.fees}
        secondaryHref="/preguntas-frecuentes"
      />
    </>
  );
}
