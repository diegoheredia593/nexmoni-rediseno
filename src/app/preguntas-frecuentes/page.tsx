import type { Metadata } from "next";
import Link from "next/link";
import { withTerms } from "@/components/glossary/withTerms";
import { brand } from "@/content/about";
import { faq, faqPage } from "@/content/faq";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — NexMoni",
  description:
    "Cómo enviar dinero, quién emite las tarjetas, plazos SEPA y SWIFT, verificación de identidad, comisiones, seguridad de los fondos y cómo presentar una reclamación.",
};

export default function FaqPage() {
  return (
    <>
      {/* ── Portada ────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-head" style={{ marginBottom: 48 }}>
          <div className="eyebrow">{faqPage.eyebrow}</div>
          <div>
            <h1 className="h2" style={{ marginBottom: 20 }}>
              {faqPage.h1}
            </h1>
            <p className="lead" style={{ fontSize: 17 }}>
              {faqPage.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ── Preguntas ──────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="fees-block" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 40 }}>
          <div
            style={{
              font: "400 10px/1.7 var(--mono)",
              letterSpacing: ".1em",
              color: "var(--ink-42)",
              textTransform: "uppercase",
            }}
          >
            {faq.length} preguntas
            <br />
            Pulsa para desplegar
          </div>

          <div className="faq">
            {faq.map((item, i) => (
              // Acordeón nativo: sin JavaScript, y el navegador ya lo hace
              // accesible y buscable con Ctrl+F al abrirlo.
              <details key={item.q} className="faq__item" name="faq">
                <summary className="faq__q">
                  <span className="faq__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq__q-text">{withTerms(item.q)}</span>
                  <span className="faq__marker" aria-hidden="true" />
                </summary>

                <div className="faq__a">
                  {item.a.map((paragraph) => (
                    <p key={paragraph}>{withTerms(paragraph)}</p>
                  ))}

                  {item.list && (
                    <dl className="faq__list">
                      {item.list.map((entry) => (
                        <div key={entry.label}>
                          <dt>{entry.label}</dt>
                          <dd>{withTerms(entry.value)}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </details>
            ))}

            <p
              style={{
                marginTop: 30,
                font: "400 12px/1.7 var(--mono)",
                color: "var(--ink-50)",
              }}
            >
              {faqPage.footnote}{" "}
              <a
                href={`mailto:support@${brand.emailDomain}`}
                style={{ borderBottom: "1px solid rgba(20,24,29,.35)" }}
              >
                support@{brand.emailDomain}
              </a>{" "}
              ·{" "}
              <Link href="/tarifas" style={{ borderBottom: "1px solid rgba(20,24,29,.35)" }}>
                Ver tarifas
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
