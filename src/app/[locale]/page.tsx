import Link from "next/link";
import { notFound } from "next/navigation";
import { withTerms } from "@/components/glossary/withTerms";
import { HeroCinematic } from "@/components/HeroCinematic";
import { PhoneScroll } from "@/components/PhoneScroll";
import { CreditCardScroll } from "@/components/CreditCardScroll";
import { StoryThread } from "@/components/StoryThread";
import { EditorialBeat } from "@/components/EditorialBeat";
import { TransferRelay } from "@/components/TransferRelay";
import { Reveal } from "@/components/Reveal";
import { LeadForm } from "@/components/LeadForm";
import { GlowCard } from "@/components/ui/spotlight-card";
import { FlowButton } from "@/components/ui/flow-button";
import { AvatarPlaceholder, QrPlaceholder } from "@/components/Placeholders";
import { StoreButtons } from "@/components/StoreButtons";
import { getDictionary, isLocale, locales } from "@/content/dictionary";
import { href } from "@/content/routes";
import { editorialCopy } from "@/content/editorial";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const FEATURED_PLAN = "Plus";
const calculatorCta = {
  es: {
    eyebrow: "CALCULA TU ENVÍO",
    title: "Antes de enviar, mira cuánto llega.",
    body: "Introduce el importe y comprueba el tipo de cambio, las comisiones y el monto final que recibirá la otra persona.",
    button: "Usar la calculadora",
  },
  en: {
    eyebrow: "CALCULATE YOUR TRANSFER",
    title: "See what arrives before you send.",
    body: "Enter the amount and check the exchange rate, fees and final amount the other person will receive.",
    button: "Use the calculator",
  },
  pt: {
    eyebrow: "CALCULA O TEU ENVIO",
    title: "Vê quanto chega antes de enviar.",
    body: "Introduz o valor e consulta a taxa de câmbio, as comissões e o montante final que a outra pessoa irá receber.",
    button: "Usar a calculadora",
  },
  lt: {
    eyebrow: "APSKAIČIUOK PERVEDIMĄ",
    title: "Prieš siųsdamas sužinok, kiek bus gauta.",
    body: "Įvesk sumą ir patikrink valiutos kursą, mokesčius bei galutinę sumą, kurią gaus kitas žmogus.",
    button: "Naudoti skaičiuoklę",
  },
} as const;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const editorial = editorialCopy[locale];
  const calculator = calculatorCta[locale];

  return (
    <>
      <HeroCinematic locale={locale} dict={dict} />
      <StoryThread />

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

      <EditorialBeat index={1} {...editorial[0]} />

      {/* ── Cómo funciona: filas con filete, no tarjetas ──────────────── */}
      <section id="como" className="section chapter chapter--how">
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

      <TransferRelay dict={dict} locale={locale} />

      {/* ── La tarjeta: una vuelta completa ligada al scroll ─────────── */}
      <CreditCardScroll locale={locale} />

      <section className="calculator-cta">
        <div className="wrap calculator-cta__inner">
          <div>
            <span className="tag">{calculator.eyebrow}</span>
            <h2>{calculator.title}</h2>
            <p>{calculator.body}</p>
          </div>
          <FlowButton
            text={calculator.button}
            href={`${href(locale, "/tarifas")}#calculadora`}
            variant="accent"
          />
        </div>
      </section>

      {/* ── La cuenta: seis piezas en dos columnas ────────────────────── */}
      <section id="cuenta" className="section rule chapter chapter--account">
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
      <section id="precios" className="section chapter chapter--pricing">
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
                  <FlowButton
                    text={plan.cta}
                    href={href(locale, "/#descargar")}
                    variant={featured ? "accent" : "default"}
                    block
                  />
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
      <section id="seguridad" className="section rule chapter chapter--security">
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
