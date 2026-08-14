import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { withTerms } from "@/components/glossary/withTerms";
import { getDictionary, isLocale, locales } from "@/content/dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.pages.about.title,
    description: dict.pages.about.description,
    alternates: {
      canonical: `/${locale}/acerca`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/acerca`])),
    },
  };
}

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
          <div style={{ font: "400 13px/1.4 var(--sans)", color: "var(--ink-62)" }}>{row.label}</div>
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

export default async function AcercaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale).about;

  return (
    <>
      {/* ── Portada ────────────────────────────────────────────────────── */}
      <section className="split page-head" style={{ gridTemplateColumns: "1.05fr .95fr" }}>
        <div style={{ padding: "78px var(--pad-x)", borderRight: "1px solid var(--hairline)" }}>
          <div className="eyebrow" style={{ marginBottom: 44 }}>
            {t.eyebrow}
          </div>
          <h1 className="h1" style={{ marginBottom: 24 }}>
            {t.h1}
          </h1>
          <p
            style={{
              font: "400 17px/1.55 var(--sans)",
              color: "var(--ink-68)",
              margin: 0,
              maxWidth: "40ch",
            }}
          >
            {t.subtitle}
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
            {t.companyEyebrow}
          </div>
          <DataRows rows={t.company} />
        </div>
      </section>

      {/* ── Misión ─────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">{t.missionEyebrow}</div>
          <div>
            <h2 className="h2" style={{ maxWidth: "18ch" }}>
              {t.missionTitle}
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
              {t.missionBody}
            </p>
          </div>
        </div>
      </section>

      {/* ── Estado regulatorio ─────────────────────────────────────────── */}
      <section className="section">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="eyebrow">{t.regulatoryEyebrow}</div>
          <div>
            <h2 className="h2">{t.regulatoryTitle}</h2>
            <p className="lead" style={{ maxWidth: "58ch" }}>
              {withTerms(t.regulatoryBody)}
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
            {t.regulatorySidenote[0]}
            <br />
            {t.regulatorySidenote[1]}
          </div>
          <div>
            <DataRows rows={t.regulatory} />

            <div className="grid-hairline cols-2" style={{ marginTop: 40 }}>
              {t.directives.map((directive) => (
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
                    style={{ font: "400 14px/1.5 var(--sans)", color: "var(--ink-72)", marginTop: 8 }}
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
          <div className="eyebrow">{t.servicesEyebrow}</div>
          <div>
            <h2 className="h2">{t.servicesTitle}</h2>
          </div>
        </div>

        <div className="grid-hairline grid-hairline--ragged cols-3">
          {t.services.map((item, i) => (
            <div key={item.title} className="row" style={{ padding: "28px 26px 40px" }}>
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
                <span>{`0${i + 1}`}</span>
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
          <div className="eyebrow">{t.complianceEyebrow}</div>
          <div>
            <h2 className="h2">{t.complianceTitle}</h2>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--hairline-strong)" }}>
          {t.compliance.map((item) => (
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
          <div className="eyebrow">{t.contactEyebrow}</div>
          <div>
            <h2 className="h2">{t.contactTitle}</h2>
          </div>
        </div>

        <div className="grid-hairline cols-2">
          {t.contact.map((item) => (
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
                style={{ font: "400 13px/1.5 var(--sans)", color: "var(--ink-50)", marginTop: 10 }}
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
