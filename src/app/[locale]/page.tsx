import Link from "next/link";
import { notFound } from "next/navigation";
import { withTerms } from "@/components/glossary/withTerms";
import { HeroCinematic } from "@/components/HeroCinematic";
import { PhoneScroll } from "@/components/PhoneScroll";
import { CreditCardScroll } from "@/components/CreditCardScroll";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { GlowCard } from "@/components/ui/spotlight-card";
import { AvatarPlaceholder, QrPlaceholder } from "@/components/Placeholders";
import { StoreButtons } from "@/components/StoreButtons";
import { getDictionary, isLocale, locales } from "@/content/dictionary";
import { href } from "@/content/routes";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const FEATURED_PLAN = "Plus";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <HeroCinematic locale={locale} dict={dict} />

      {/* Confianza: una línea, sin tarjetas. Va en clave de NOCHE, no de día:
          son las credenciales del hero y pertenecen a él. Sobre el papel claro
          quedaba como una franja huérfana entre dos zonas, sin ser de ninguna.
          `withTerms(…, "dark")` es obligatorio aquí: los términos del glosario
          tienen dos juegos de color y el claro no se lee sobre el fondo
          oscuro. */}
      <section className="confianza">
        <div className="wrap">
          <div className="trust">
            {dict.hero.trust.map((body, i) => (
              <div key={body}>
                <span className="n">{`0${i + 1}`}</span>
                <p className="caption">{withTerms(body, "dark")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona: filas con filete, no tarjetas ──────────────── */}
      <section id="como" className="section">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{dict.steps.eyebrow}</span>
            <h2>{dict.steps.title}</h2>
            <p className="lead">{dict.steps.lead}</p>
          </Reveal>

          <Reveal className="list" escalonado>
            {dict.steps.items.map((step, i) => (
              <div key={step.title} className="list__item">
                <span className="n">{`0${i + 1}`}</span>
                <h3>{step.title}</h3>
                <p className="body-s">{withTerms(step.body)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── La aplicación: el teléfono que se desplaza con la página ──── */}
      <PhoneScroll dict={dict} />

      {/* ── La tarjeta: una vuelta completa ligada al scroll ─────────── */}
      <CreditCardScroll locale={locale} />

      {/* ── La cuenta: seis piezas en dos columnas ────────────────────── */}
      <section id="cuenta" className="section rule">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{dict.features.eyebrow}</span>
            <h2>{dict.features.title}</h2>
          </Reveal>

          <Reveal className="duo" escalonado>
            {dict.features.items.map((feature) => (
              <div key={feature.title} className="duo__item">
                <span className="tag">{feature.tag}</span>
                <h4>{feature.title}</h4>
                <p className="body-s">{withTerms(feature.body)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Cifras: lo único a sangre ─────────────────────────────────── */}
      <section className="figures">
        <div className="wrap">
          <Reveal className="figures__grid" escalonado>
            {dict.stats.map((stat) => (
              <div key={stat.figure}>
                <div className="n">{stat.figure}</div>
                <div className="sep" />
                <p>{withTerms(stat.label, "dark")}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Precios ───────────────────────────────────────────────────── */}
      <section id="precios" className="section">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{dict.pricing.eyebrow}</span>
            <h2>{dict.pricing.title}</h2>
            <p className="lead">{dict.pricing.lead}</p>
          </Reveal>

          <Reveal className="plans plans--glow" escalonado>
            {dict.pricing.plans.map((plan) => {
              const featured = plan.name === FEATURED_PLAN;
              return (
                <GlowCard key={plan.name} customSize glowColor="rust" className="plan-glow">
                <div className={`plan${featured ? " plan--featured" : ""}`}>
                  <span className="tag tag--strong">
                    {plan.name}
                    {featured ? ` · ${dict.pricing.popular}` : ""}
                  </span>
                  <div className="plan__price">{plan.price}</div>
                  <p className="body-s">{plan.pitch}</p>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <span>{withTerms(item)}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Solo el plan destacado lleva la acción en óxido */}
                  <Link
                    href={href(locale, "/#descargar")}
                    className={`btn btn--block ${featured ? "btn--primary" : "btn--ghost"}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
                </GlowCard>
              );
            })}
          </Reveal>

          <p className="caption" style={{ marginTop: "var(--s-24)" }}>
            {dict.pricing.feesNote}{" "}
            <Link href={href(locale, "/tarifas")} className="link">
              {dict.pricing.feesLink}
            </Link>
          </p>
        </div>
      </section>

      {/* ── Testimonio y seguridad ────────────────────────────────────── */}
      <section id="seguridad" className="section rule">
        <div className="wrap">
          <div className="hero split-top">
            <div className="stack-24">
              <span className="tag">{dict.testimonial.eyebrow}</span>
              <blockquote className="quote">“{dict.testimonial.quote}”</blockquote>
              <div style={{ display: "flex", gap: "var(--s-16)", alignItems: "center" }}>
                <AvatarPlaceholder />
                <p className="caption">
                  {dict.testimonial.author}
                  <br />
                  {dict.testimonial.detail}
                </p>
              </div>
            </div>

            <div className="list list--plain">
              {dict.testimonial.security.map((item) => (
                <div key={item.title} className="list__item">
                  <h4>{item.title}</h4>
                  <p className="body-s">{withTerms(item.body)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Descarga: el final del embudo ─────────────────────────────── */}
      <section id="descargar" className="section rule">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{dict.download.eyebrow}</span>
            <h2>{dict.download.title}</h2>
            <p className="lead">{dict.download.lead}</p>
          </Reveal>

          <div className="download">
            <div className="stack-24">
              <StoreButtons dict={dict} />

              {/* Desde el ordenador no se puede instalar: se envía el enlace. */}
              <div
                className="stack-16"
                style={{ paddingTop: "var(--s-32)", borderTop: "1px solid var(--hairline)" }}
              >
                <h4>{dict.download.deskTitle}</h4>
                <p className="body-s" style={{ maxWidth: "42ch" }}>
                  {dict.download.deskNote}
                </p>
                <LeadForm dict={dict} />
              </div>
            </div>

            <div className="stack-16">
              <span className="tag">{dict.download.qrNote}</span>
              <QrPlaceholder brief={dict.download.qrBrief} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
