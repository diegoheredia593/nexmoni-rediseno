import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { withTerms } from "@/components/glossary/withTerms";
import { email } from "@/content/brand";
import { getDictionary, href, isLocale, locales } from "@/content/dictionary";

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
    title: dict.pages.faq.title,
    description: dict.pages.faq.description,
    alternates: {
      canonical: `/${locale}/preguntas-frecuentes`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/preguntas-frecuentes`])),
    },
  };
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale).faq;

  return (
    <>
      {/* ── Portada ────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="section-head" style={{ marginBottom: 48 }}>
          <div className="eyebrow">{t.eyebrow}</div>
          <div>
            <h1 className="h2" style={{ marginBottom: 20 }}>
              {t.h1}
            </h1>
            <p className="lead" style={{ fontSize: 17 }}>
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ── Preguntas ──────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 0 }}>
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
            {t.items.length} {t.sidenoteCount}
            <br />
            {t.sidenoteHint}
          </div>

          <div className="faq">
            {t.items.map((item, i) => (
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

                  {item.list.length > 0 && (
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

            <p style={{ marginTop: 30, font: "400 12px/1.7 var(--mono)", color: "var(--ink-50)" }}>
              {t.footnote}{" "}
              <a
                href={`mailto:${email.support}`}
                style={{ borderBottom: "1px solid rgba(20,24,29,.35)" }}
              >
                {email.support}
              </a>{" "}
              ·{" "}
              <Link
                href={href(locale, "/tarifas")}
                style={{ borderBottom: "1px solid rgba(20,24,29,.35)" }}
              >
                {t.feesLink}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
