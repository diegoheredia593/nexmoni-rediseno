import Link from "next/link";
import { PageCloser } from "@/components/PageCloser";
import { withTerms } from "@/components/glossary/withTerms";
import { email } from "@/content/brand";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

export function FaqPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.faq;

  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="head">
            <span className="tag">
              {t.eyebrow} · {t.items.length} {t.sidenoteCount}
            </span>
            <h1 className="h1">{t.h1}</h1>
            <p className="lead">{t.subtitle}</p>
          </div>

          <div className="faq">
            {t.items.map((item, i) => (
              // Acordeón nativo: sin JavaScript, y el contenido abierto sigue
              // siendo buscable con Ctrl+F.
              <details key={item.q} className="faq__item" name="faq">
                <summary className="faq__q">
                  <span className="faq__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq__q-text">{withTerms(item.q)}</span>
                  <span className="faq__marker" aria-hidden="true" />
                </summary>

                <div className="faq__a">
                  {item.a.map((paragraph) => (
                    <p key={paragraph} className="body-s">
                      {withTerms(paragraph)}
                    </p>
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
          </div>

          <p className="caption" style={{ marginTop: "var(--s-32)" }}>
            {t.footnote}{" "}
            <a href={`mailto:${email.support}`} className="link">
              {email.support}
            </a>{" "}
            ·{" "}
            <Link href={href(locale, "/tarifas")} className="link">
              {t.feesLink}
            </Link>
          </p>
        </div>
      </section>

      <PageCloser
        locale={locale}
        dict={dict}
        copy={dict.closers.faq}
        secondaryHref="/acerca"
      />
    </>
  );
}
