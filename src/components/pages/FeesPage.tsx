import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { withTerms } from "@/components/glossary/withTerms";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

export function FeesPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.fees;

  return (
    <>
      {/* ── § 01 Tarifas ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 54 }}>
          <div className="eyebrow">{t.eyebrow}</div>
          <div>
            {/* h1 de la página: se estiliza como h2 para no romper la escala. */}
            <h1 className="h2">{t.title}</h1>
            <p className="lead" style={{ fontSize: 16 }}>
              {t.lead}
            </p>
          </div>
        </div>

        <div
          className="fees-block"
          style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}
        >
          <div
            style={{
              font: "400 10px/1.7 var(--mono)",
              letterSpacing: ".1em",
              color: "var(--ink-42)",
              textTransform: "uppercase",
            }}
          >
            {t.sidenote[0]}
            <br />
            {t.sidenote[1]}
          </div>

          <div style={{ borderTop: "1px solid var(--hairline-strong)" }}>
            {t.schedule.map((fee) => (
              <div
                key={fee.label}
                className="row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "17px 12px",
                  borderBottom: "1px solid var(--hairline-soft)",
                }}
              >
                <div>
                  <div style={{ font: "500 17px/1.3 var(--sans)", letterSpacing: "-.015em" }}>
                    {withTerms(fee.label)}
                  </div>
                  <div
                    style={{
                      font: "400 12px/1.5 var(--sans)",
                      color: "var(--ink-50)",
                      marginTop: 3,
                    }}
                  >
                    {withTerms(fee.note)}
                  </div>
                </div>
                <div
                  style={{
                    font: "700 14px/1.3 var(--mono)",
                    letterSpacing: "-.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {fee.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── § 02 Calculadora ───────────────────────────────────────────── */}
      <section id="calculadora" className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="eyebrow">{dict.calculator.eyebrow}</div>
          <div>
            <h2 className="h2">{dict.calculator.title}</h2>
            <p className="lead" style={{ maxWidth: "56ch" }}>
              {dict.calculator.lead}
            </p>
          </div>
        </div>

        <div
          className="fees-block"
          style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}
        >
          <div
            style={{
              font: "400 10px/1.7 var(--mono)",
              letterSpacing: ".1em",
              color: "var(--ink-42)",
              textTransform: "uppercase",
            }}
          >
            {dict.calculator.sidenote[0]}
            <br />
            {dict.calculator.sidenote[1]}
          </div>
          <Calculator dict={dict} />
        </div>
      </section>

      {/* ── Terminología estandarizada ─────────────────────────────────── */}
      <section className="section">
        <div
          className="fees-block"
          style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}
        >
          <div className="eyebrow" style={{ paddingTop: 8 }}>
            {t.terminologyEyebrow[0]}
            <br />
            {t.terminologyEyebrow[1]}
          </div>
          <div>
            <p
              style={{
                font: "400 14px/1.6 var(--sans)",
                color: "var(--ink-62)",
                maxWidth: "56ch",
                margin: "0 0 26px",
                textWrap: "pretty",
              }}
            >
              {t.terminologyIntro}
            </p>

            <div className="term-grid">
              {t.terminology.map((term) => (
                <div key={term.en} className="row">
                  <div
                    style={{
                      font: "700 10px/1.3 var(--mono)",
                      letterSpacing: ".1em",
                      color: "var(--accent)",
                      textTransform: "uppercase",
                    }}
                  >
                    {term.en}
                  </div>
                  <div
                    style={{
                      font: "400 14px/1.45 var(--sans)",
                      color: "var(--ink-72)",
                      marginTop: 8,
                      textWrap: "pretty",
                    }}
                  >
                    {withTerms(term.local)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 30, font: "400 12px/1.5 var(--mono)", color: "var(--ink-50)" }}>
              <Link
                href={href(locale, "/#precios")}
                style={{ borderBottom: "1px solid rgba(20,24,29,.35)" }}
              >
                {t.plansLink}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
