import type { Metadata } from "next";
import { withTerms } from "@/components/glossary/withTerms";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "Acerca de NexMoni — NexMoni OÜ, Estonia",
  description:
    "NexMoni OÜ, código de registro 17303472, Tallinn (Estonia). Distribuidor autorizado de ConnectPay UAB, entidad de dinero electrónico con licencia EMI N.º 24 del Banco de Lituania.",
};

/** Filas etiqueta / valor separadas por filete: el patrón del tarifario. */
function DataRows({ rows }: { rows: readonly { label: string; value: string }[] }) {
  return (
    <div style={{ borderTop: "1px solid var(--hairline-strong)" }}>
      {rows.map((row) => (
        <div
          key={row.label}
          className="row data-row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 24,
            alignItems: "baseline",
            padding: "15px 12px",
            borderBottom: "1px solid var(--hairline-soft)",
          }}
        >
          <div style={{ font: "400 13px/1.4 var(--sans)", color: "var(--ink-62)" }}>
            {row.label}
          </div>
          <div
            style={{
              font: "700 13px/1.4 var(--mono)",
              letterSpacing: "-.01em",
              textAlign: "right",
            }}
          >
            {withTerms(row.value)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function AcercaPage() {
  return (
    <>
      {/* ── Portada ────────────────────────────────────────────────────── */}
      <section className="split page-head" style={{ gridTemplateColumns: "1.05fr .95fr" }}>
        <div style={{ padding: "78px var(--pad-x)", borderRight: "1px solid var(--hairline)" }}>
          <div className="eyebrow" style={{ marginBottom: 44 }}>
            {about.eyebrow}
          </div>
          <h1 className="h1" style={{ marginBottom: 24 }}>
            {about.h1}
          </h1>
          <p
            style={{
              font: "400 17px/1.55 var(--sans)",
              color: "var(--ink-68)",
              margin: 0,
              maxWidth: "40ch",
            }}
          >
            {about.subtitle}
          </p>
        </div>

        <div
          style={{
            padding: "78px var(--pad-x)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 20 }}>
            {about.company.eyebrow}
          </div>
          <DataRows rows={about.company.rows} />
        </div>
      </section>

      {/* ── Misión ─────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">{about.mission.eyebrow}</div>
          <div>
            <h2 className="h2" style={{ maxWidth: "18ch" }}>
              {about.mission.title}
            </h2>
            <p
              style={{
                font: "400 16px/1.6 var(--sans)",
                color: "var(--ink-62)",
                maxWidth: "58ch",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              {about.mission.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── Estado regulatorio ─────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="eyebrow">{about.regulatory.eyebrow}</div>
          <div>
            <h2 className="h2">{about.regulatory.title}</h2>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              {withTerms(about.regulatory.body)}
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
            Entidad emisora
            <br />y licencia
          </div>
          <div>
            <DataRows rows={about.regulatory.rows} />

            <div className="grid-hairline" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 40 }}>
              {about.regulatory.directives.map((directive) => (
                <div key={directive.code} className="row" style={{ padding: "20px 20px 24px" }}>
                  <div
                    style={{
                      font: "700 11px/1.3 var(--mono)",
                      letterSpacing: ".14em",
                      color: "var(--accent)",
                    }}
                  >
                    {withTerms(directive.code)}
                  </div>
                  <div
                    style={{
                      font: "400 14px/1.5 var(--sans)",
                      color: "var(--ink-72)",
                      marginTop: 8,
                    }}
                  >
                    {directive.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Servicios ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="eyebrow">{about.services.eyebrow}</div>
          <div>
            <h2 className="h2">{about.services.title}</h2>
          </div>
        </div>

        <div className="grid-hairline grid-hairline--ragged cols-3">
          {about.services.items.map((item) => (
            <div key={item.n} className="row" style={{ padding: "28px 26px 40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  font: "400 9.5px/1 var(--mono)",
                  letterSpacing: ".14em",
                  color: "var(--ink-42)",
                  marginBottom: 38,
                }}
              >
                <span>{item.n}</span>
                <span>{item.tag}</span>
              </div>
              <h3
                style={{
                  font: "600 19px/1.25 var(--sans)",
                  letterSpacing: "-.015em",
                  margin: "0 0 10px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ font: "400 13.5px/1.6 var(--sans)", color: "var(--ink-64)", margin: 0 }}>
                {withTerms(item.body)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cumplimiento ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="eyebrow">{about.compliance.eyebrow}</div>
          <div>
            <h2 className="h2">{about.compliance.title}</h2>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--hairline-strong)" }}>
          {about.compliance.items.map((item) => (
            <div
              key={item.code}
              className="row compliance-row"
              style={{
                display: "grid",
                gridTemplateColumns: "260px 1fr",
                gap: 24,
                alignItems: "baseline",
                padding: "18px 12px",
                borderBottom: "1px solid var(--hairline-soft)",
              }}
            >
              <div
                style={{
                  font: "700 11px/1.4 var(--mono)",
                  letterSpacing: ".12em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                }}
              >
                {withTerms(item.code)}
              </div>
              <div style={{ font: "400 15px/1.5 var(--sans)", color: "var(--ink-72)" }}>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contacto ───────────────────────────────────────────────────── */}
      <section id="contacto" className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="eyebrow">{about.contact.eyebrow}</div>
          <div>
            <h2 className="h2">{about.contact.title}</h2>
          </div>
        </div>

        <div className="grid-hairline" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {about.contact.items.map((item) => (
            <div key={item.address} className="row" style={{ padding: "24px 22px 28px" }}>
              <a
                href={`mailto:${item.address}`}
                style={{
                  font: "500 17px/1.3 var(--sans)",
                  letterSpacing: "-.015em",
                  borderBottom: "1px solid var(--ink-30)",
                  paddingBottom: 2,
                }}
              >
                {item.address}
              </a>
              <div
                style={{
                  font: "400 13px/1.5 var(--sans)",
                  color: "var(--ink-50)",
                  marginTop: 10,
                }}
              >
                {item.purpose}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
