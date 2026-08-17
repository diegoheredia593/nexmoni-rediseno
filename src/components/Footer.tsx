import Link from "next/link";
import { brand } from "@/content/brand";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__col">
            <span className="wordmark">{brand.name}</span>
            <p className="body-s" style={{ maxWidth: "34ch" }}>
              {dict.footer.blurb}
            </p>
          </div>

          {dict.footer.columns.map((col) => (
            <div key={col.title} className="footer__col">
              <span className="tag">{col.title}</span>
              {col.links.map((link) => (
                <Link key={link.label} href={href(locale, link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__legal">
          <span>{dict.site.legal}</span>
          <span>{dict.site.compliance}</span>
          <span>{dict.site.version}</span>
        </div>
      </div>
    </footer>
  );
}
