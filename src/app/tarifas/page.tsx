import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "@/components/Calculator";
import { withTerms } from "@/components/glossary/withTerms";
import { feeSchedule, feesPage, terminology } from "@/content/fees";

export const metadata: Metadata = {
  title: "Tarifas y calculadora de envíos — NexMoni",
  description:
    "Tarifario completo de NexMoni y calculadora de conversión: comisión, diferencial de cambio y cuánto recibe el destinatario. Sin comisiones ocultas.",
};

export default function TarifasPage() {
  return (
    <>
      {/* ── § 01 Tarifas ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 54 }}>
          <div className="eyebrow">{feesPage.eyebrow}</div>
          <div>
            <h2 className="h2">{feesPage.title}</h2>
            <p className="lead" style={{ fontSize: 16 }}>
              {feesPage.lead}
            </p>
          </div>
        </div>

        <div className="fees-block" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}>
          <div
            style={{
              font: "400 10px/1.7 var(--mono)",
              letterSpacing: ".1em",
              color: "var(--ink-42)",
              textTransform: "uppercase",
            }}
          >
            {feesPage.sidenote[0]}
            <br />
            {feesPage.sidenote[1]}
          </div>

          <div style={{ borderTop: "1px solid var(--hairline-strong)" }}>
            {feeSchedule.map((fee) => (
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
                  <div
                    style={{
                      font: "500 17px/1.3 var(--sans)",
                      letterSpacing: "-.015em",
                    }}
                  >
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
          <div className="eyebrow">{feesPage.calculator.eyebrow}</div>
          <div>
            <h2 className="h2">{feesPage.calculator.title}</h2>
            <p className="lead" style={{ maxWidth: "56ch" }}>
              {feesPage.calculator.lead}
            </p>
          </div>
        </div>

        <div className="fees-block" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}>
          <div
            style={{
              font: "400 10px/1.7 var(--mono)",
              letterSpacing: ".1em",
              color: "var(--ink-42)",
              textTransform: "uppercase",
            }}
          >
            Cálculo orientativo
            <br />
            Tarifas del listado superior
          </div>
          <Calculator />
        </div>
      </section>

      {/* ── Terminología estandarizada ─────────────────────────────────── */}
      <section className="section">
        <div className="fees-block" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}>
          <div className="eyebrow" style={{ paddingTop: 8 }}>
            TERMINOLOGÍA
            <br />
            ESTANDARIZADA
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
              {feesPage.terminologyIntro}
            </p>

            <div className="term-grid">
              {terminology.map((term) => (
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
                    {withTerms(term.es)}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 30,
                font: "400 12px/1.5 var(--mono)",
                color: "var(--ink-50)",
              }}
            >
              <Link href="/#precios" style={{ borderBottom: "1px solid rgba(20,24,29,.35)" }}>
                Ver planes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
