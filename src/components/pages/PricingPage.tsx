import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { PageCloser } from "@/components/PageCloser";
import { Reveal } from "@/components/Reveal";
import { withTerms } from "@/components/glossary/withTerms";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

const FEATURED_PLAN = "Plus";

export function PricingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <section className="section chapter chapter--pricing pricing-page">
        <div className="wrap">
          <Reveal className="head">
            <span className="tag">{dict.pricing.eyebrow}</span>
            <h1 className="h1">{dict.pricing.title}</h1>
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
                        <li key={item}><span>{withTerms(item)}</span></li>
                      ))}
                    </ul>
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

      <PageCloser
        locale={locale}
        dict={dict}
        copy={dict.closers.fees}
        secondaryHref="/preguntas-frecuentes"
      />
    </>
  );
}
