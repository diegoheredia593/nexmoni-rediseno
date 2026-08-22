import { PageCloser } from "@/components/PageCloser";
import { Reveal } from "@/components/Reveal";
import { withTerms } from "@/components/glossary/withTerms";
import type { Dictionary, Locale } from "@/content/dictionary";

/** Filas etiqueta / valor: el patrón del tarifario, reutilizado. */
function DataRows({
  rows,
  wide = false,
}: {
  rows: readonly { label: string; value: string }[];
  wide?: boolean;
}) {
  return (
    <div className={`rows${wide ? " rows--wide" : ""}`}>
      {rows.map((row) => (
        <div key={row.label} className="rows__item">
          <div className="body-s">{row.label}</div>
          <div className="rows__value">{withTerms(row.value)}</div>
        </div>
      ))}
    </div>
  );
}

export function AboutPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.about;

  return (
    <>
      {/* ── Portada ────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="hero split-top">
            <div className="stack-24">
              <span className="tag">{t.eyebrow}</span>
              <h1 className="display">{t.h1}</h1>
              <p className="lead">{t.subtitle}</p>
            </div>

            <div className="stack-16">
              <span className="tag">{t.companyEyebrow}</span>
              <DataRows rows={t.company} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Misión ─────────────────────────────────────────────────────── */}
      <section className="section rule">
        <div className="wrap">
          <div className="head" style={{ marginBottom: "var(--s-24)" }}>
            <span className="tag">{t.missionEyebrow}</span>
            <h2 style={{ maxWidth: "18ch" }}>{t.missionTitle}</h2>
          </div>
          <p className="body-s" style={{ maxWidth: "62ch", fontSize: "var(--t-body)" }}>
            {t.missionBody}
          </p>
        </div>
      </section>

      {/* ── Estado regulatorio ─────────────────────────────────────────── */}
      <section className="section rule">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{t.regulatoryEyebrow}</span>
            <h2>{t.regulatoryTitle}</h2>
            <p className="lead">{withTerms(t.regulatoryBody)}</p>
          </Reveal>

          <DataRows rows={t.regulatory} />

          <div className="duo" style={{ marginTop: "var(--s-48)" }}>
            {t.directives.map((directive) => (
              <div key={directive.code} className="duo__item">
                <span className="tag tag--strong">{withTerms(directive.code)}</span>
                <p className="body-s">{directive.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ──────────────────────────────────────────────────── */}
      <section className="section rule">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{t.servicesEyebrow}</span>
            <h2>{t.servicesTitle}</h2>
          </Reveal>

          <div className="duo">
            {t.services.map((item) => (
              <div key={item.title} className="duo__item">
                <span className="tag">{item.tag}</span>
                <h4>{item.title}</h4>
                <p className="body-s">{withTerms(item.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cumplimiento ───────────────────────────────────────────────── */}
      <section className="section rule">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{t.complianceEyebrow}</span>
            <h2>{t.complianceTitle}</h2>
          </Reveal>

          <DataRows
            wide
            rows={t.compliance.map((c) => ({ label: c.code, value: c.detail }))}
          />
        </div>
      </section>

      {/* ── Contacto ───────────────────────────────────────────────────── */}
      <section id="contacto" className="section rule">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{t.contactEyebrow}</span>
            <h2>{t.contactTitle}</h2>
          </Reveal>

          <div className="duo">
            {t.contact.map((item) => (
              <div key={item.address} className="duo__item">
                <a href={`mailto:${item.address}`} className="h4 link" style={{ alignSelf: "start" }}>
                  {item.address}
                </a>
                <p className="caption">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCloser
        locale={locale}
        dict={dict}
        copy={dict.closers.about}
        secondaryHref="/tarifas"
      />
    </>
  );
}
