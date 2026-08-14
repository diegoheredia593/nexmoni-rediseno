import Link from "next/link";
import { withTerms } from "@/components/glossary/withTerms";
import { LeadForm } from "@/components/LeadForm";
import {
  AvatarPlaceholder,
  ClosingFigure,
  HeroFigure,
  UseTriptych,
} from "@/components/Placeholders";
import {
  featuredPlan,
  features,
  hero,
  plans,
  security,
  stats,
  steps,
  testimonial,
} from "@/content/site";

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="split hero" style={{ gridTemplateColumns: "1.05fr .95fr" }}>
        <div
          style={{
            padding: "78px var(--pad-x) 40px",
            borderRight: "1px solid var(--hairline)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 56,
          }}
        >
          <div>
            <div
              className="eyebrow"
              style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 44 }}
            >
              {hero.kicker.map((k, i) => (
                <span key={k}>
                  {i > 0 && <span style={{ marginRight: 10 }}>·</span>}
                  {k}
                </span>
              ))}
            </div>

            <h1 className="h1">
              {hero.titleTop}
              <br />
              <span style={{ color: "var(--ink-42)" }}>{hero.titleBottom}</span>
            </h1>

            <p
              style={{
                font: "400 17px/1.55 var(--sans)",
                color: "var(--ink-68)",
                maxWidth: "46ch",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              {hero.lead}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                flexWrap: "wrap",
                marginTop: 40,
              }}
            >
              <Link href="#abrir" className="btn btn--amber">
                <span>
                  {hero.cta} <b className="arrow">→</b>
                </span>
              </Link>
              <Link href="#abrir" className="link-underline">
                {hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1,
              background: "var(--hairline)",
              borderTop: "1px solid var(--hairline)",
            }}
          >
            {hero.trust.map((item, i) => (
              <div
                key={item.n}
                style={{
                  background: "var(--surface)",
                  padding: i === 0 ? "20px 0 0" : "20px 0 0 22px",
                }}
              >
                <div
                  style={{
                    font: "400 9.5px/1 var(--mono)",
                    letterSpacing: ".14em",
                    color: "var(--accent-light)",
                    marginBottom: 9,
                  }}
                >
                  {item.n}
                </div>
                <div style={{ font: "400 12.5px/1.45 var(--sans)", color: "var(--ink-70)" }}>
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        <HeroFigure />
      </section>

      {/* ── § 02 Cómo funciona ─────────────────────────────────────────── */}
      <section id="como" className="section">
        <div className="section-head">
          <div className="eyebrow">§ 02 — CÓMO FUNCIONA</div>
          <div>
            <h2 className="h2">Tres pasos, no tres semanas.</h2>
            <p className="lead">
              Sin papeleo, sin sucursales, sin esperar días para tener una cuenta a tu nombre.
            </p>
          </div>
        </div>

        <div className="grid-hairline cols-3">
          {steps.map((step) => (
            <div key={step.n} className="row" style={{ padding: "30px 26px 34px" }}>
              <div
                style={{
                  font: "500 10px/1 var(--mono)",
                  letterSpacing: ".16em",
                  color: "var(--accent-light)",
                  marginBottom: 46,
                }}
              >
                {step.n}
              </div>
              <h3
                style={{
                  font: "600 22px/1.2 var(--sans)",
                  letterSpacing: "-.02em",
                  margin: "0 0 12px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ font: "400 14px/1.6 var(--sans)", color: "var(--ink-64)", margin: 0 }}>
                {withTerms(step.body)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <UseTriptych />

      {/* ── Cuenta ─────────────────────────────────────────────────────── */}
      <section id="cuenta" className="section">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 40,
            flexWrap: "wrap",
            marginBottom: 54,
          }}
        >
          <h2 className="h2--wide" style={{ maxWidth: "20ch" }}>
            Una cuenta, dos países, cero fricción.
          </h2>
          <div className="eyebrow">TODO EN UN SOLO LUGAR</div>
        </div>

        <div className="grid-hairline cols-3">
          {features.map((feature) => (
            <div key={feature.n} className="row" style={{ padding: "28px 26px 40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  font: "400 9.5px/1 var(--mono)",
                  letterSpacing: ".14em",
                  color: "var(--ink-42)",
                  marginBottom: 38,
                }}
              >
                <span>{feature.n}</span>
                <span>{feature.tag}</span>
              </div>
              <h3
                style={{
                  font: "600 19px/1.25 var(--sans)",
                  letterSpacing: "-.015em",
                  margin: "0 0 10px",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ font: "400 13.5px/1.6 var(--sans)", color: "var(--ink-64)", margin: 0 }}>
                {withTerms(feature.body)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Banda de cifras (fondo ink) ────────────────────────────────── */}
      <section
        className="stats"
        style={{
          borderBottom: "1px solid var(--hairline)",
          background: "var(--ink)",
          color: "var(--on-dark)",
          padding: "70px var(--pad-x)",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 40,
        }}
      >
        {stats.map((stat) => (
          <div key={stat.figure}>
            <div
              style={{
                font: "600 clamp(40px,6vw,86px)/.9 var(--sans)",
                letterSpacing: "-.05em",
                color: "var(--on-dark)",
              }}
            >
              {stat.figure}
            </div>
            <div style={{ height: 1, background: "var(--on-dark-25)", margin: "20px 0 14px" }} />
            <div
              style={{
                font: "400 12px/1.55 var(--mono)",
                letterSpacing: ".06em",
                color: "var(--on-dark-62)",
                maxWidth: "30ch",
              }}
            >
              {withTerms(stat.label, "dark")}
            </div>
          </div>
        ))}
      </section>

      {/* ── § 05 Precios ───────────────────────────────────────────────── */}
      <section id="precios" className="section">
        <div className="section-head" style={{ marginBottom: 54 }}>
          <div className="eyebrow">§ 05 — PRECIOS</div>
          <div>
            <h2 className="h2">Simple y transparente.</h2>
            <p className="lead" style={{ maxWidth: "48ch" }}>
              Elige según tu criterio actual. Puedes cambiar de plan cuando quieras.
            </p>
          </div>
        </div>

        <div className="grid-hairline cols-3">
          {plans.map((plan) => {
            const isFeatured = plan.name === featuredPlan;
            return (
              <div key={plan.name} className="plan">
                {isFeatured && <div style={{ height: 4, background: "var(--accent-light)" }} />}
                <div
                  style={{
                    padding: "28px 26px 0",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: 34,
                    }}
                  >
                    <span
                      style={{
                        font: "500 11px/1 var(--mono)",
                        letterSpacing: ".16em",
                        textTransform: "uppercase",
                      }}
                    >
                      {plan.name}
                    </span>
                    {isFeatured && (
                      <span
                        style={{
                          font: "400 9px/1 var(--mono)",
                          letterSpacing: ".14em",
                          color: "var(--accent-light)",
                          border: "1px solid var(--accent-light)",
                          padding: "4px 7px",
                        }}
                      >
                        MÁS POPULAR
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      font: "600 clamp(30px,3.4vw,44px)/1 var(--sans)",
                      letterSpacing: "-.04em",
                      marginBottom: 14,
                    }}
                  >
                    {plan.price}
                  </div>
                  <p
                    style={{
                      font: "400 13.5px/1.6 var(--sans)",
                      color: "var(--ink-62)",
                      margin: "0 0 26px",
                      minHeight: 66,
                    }}
                  >
                    {plan.pitch}
                  </p>

                  <div
                    style={{
                      font: "400 9.5px/1 var(--mono)",
                      letterSpacing: ".14em",
                      color: "var(--ink-42)",
                      marginBottom: 14,
                    }}
                  >
                    INCLUYE
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0 0 30px",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 9,
                      flex: 1,
                    }}
                  >
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          gap: 10,
                          font: "400 13.5px/1.45 var(--sans)",
                          color: "var(--ink-78)",
                        }}
                      >
                        <span style={{ color: "var(--accent-light)" }}>—</span>
                        <span>{withTerms(item)}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="#abrir" className="btn btn--outline">
                    <span>{plan.cta}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "baseline",
            flexWrap: "wrap",
            marginTop: 26,
            font: "400 12px/1.5 var(--mono)",
            color: "var(--ink-50)",
          }}
        >
          <Link href="/tarifas" style={{ borderBottom: "1px solid rgba(20,24,29,.35)" }}>
            Tarifas detalladas
          </Link>
          <span>Sin comisiones ocultas — todo lo que cobramos, en un solo lugar.</span>
        </div>
      </section>

      {/* ── § 06 Testimonio ────────────────────────────────────────────── */}
      <section id="seguridad" className="split testimonial" style={{ gridTemplateColumns: "1.15fr .85fr" }}>
        <div style={{ padding: "78px var(--pad-x)", borderRight: "1px solid var(--hairline)" }}>
          <div className="eyebrow" style={{ marginBottom: 40 }}>
            § 06 — TESTIMONIO
          </div>
          <blockquote
            style={{
              margin: 0,
              font: "500 clamp(22px,2.7vw,38px)/1.25 var(--sans)",
              letterSpacing: "-.025em",
              textWrap: "pretty",
            }}
          >
            “{testimonial.quote}”
          </blockquote>
          <div style={{ marginTop: 34, display: "flex", gap: 16, alignItems: "center" }}>
            <AvatarPlaceholder />
            <div style={{ font: "400 11.5px/1.6 var(--mono)", color: "var(--ink-60)" }}>
              {testimonial.attribution[0]}
              <br />
              {testimonial.attribution[1]}
            </div>
          </div>
        </div>

        <div style={{ padding: "78px var(--pad-x)", display: "flex", flexDirection: "column" }}>
          {security.map((item) => (
            <div key={item.title} style={{ padding: "22px 0", borderTop: "1px solid var(--hairline)" }}>
              <h3 style={{ font: "600 16px/1.2 var(--sans)", margin: "0 0 8px" }}>{item.title}</h3>
              <p style={{ font: "400 13px/1.55 var(--sans)", color: "var(--ink-62)", margin: 0 }}>
                {withTerms(item.body)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ClosingFigure />

      {/* ── Abrir cuenta ───────────────────────────────────────────────── */}
      <section id="abrir" className="split cta" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "88px var(--pad-x)", borderRight: "1px solid var(--hairline)" }}>
          <div
            className="eyebrow"
            style={{ color: "var(--accent-light)", marginBottom: 30 }}
          >
            EMPIEZA HOY
          </div>
          <h2
            style={{
              font: "600 clamp(32px,4.8vw,72px)/.98 var(--sans)",
              letterSpacing: "-.04em",
              margin: "0 0 22px",
            }}
          >
            Abre tu cuenta en minutos.
          </h2>
          <p
            style={{
              font: "400 16px/1.6 var(--sans)",
              color: "var(--ink-65)",
              maxWidth: "42ch",
              margin: 0,
            }}
          >
            Sin sucursales, sin papeleo. Solo tu documento, una selfie, y tu {withTerms("IBAN")}{" "}
            europeo listo para usar.
          </p>
        </div>

        <div style={{ padding: "88px var(--pad-x)" }}>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
