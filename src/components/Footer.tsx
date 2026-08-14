import Link from "next/link";
import { brand } from "@/content/brand";
import type { Dictionary, Locale } from "@/content/dictionary";
import { href } from "@/content/routes";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer
      className="footer"
      style={{
        padding: "70px var(--pad-x) 34px",
        display: "grid",
        gridTemplateColumns: "1.3fr repeat(3, .9fr)",
        gap: 40,
      }}
    >
      <div>
        <div style={{ font: "600 17px/1 var(--sans)", letterSpacing: "-.02em", marginBottom: 16 }}>
          {brand.name}
        </div>
        <p
          style={{
            font: "400 13px/1.6 var(--sans)",
            color: "var(--ink-60)",
            maxWidth: "38ch",
            margin: 0,
          }}
        >
          {dict.footer.blurb}
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          {["APP STORE", "GOOGLE PLAY"].map((store) => (
            <a
              key={store}
              href={href(locale, "/#abrir")}
              style={{
                border: "1px solid var(--ink-30)",
                padding: "10px 14px",
                font: "400 10px/1 var(--mono)",
                letterSpacing: ".12em",
              }}
            >
              {store}
            </a>
          ))}
        </div>
      </div>

      {dict.footer.columns.map((col) => (
        <div key={col.title}>
          <div
            style={{
              font: "400 9.5px/1 var(--mono)",
              letterSpacing: ".16em",
              color: "var(--ink-45)",
              marginBottom: 16,
            }}
          >
            {col.title}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={href(locale, link.href)}
                style={{ font: "400 13px/1.3 var(--sans)", color: "var(--ink-72)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div
        style={{
          gridColumn: "1 / -1",
          borderTop: "1px solid var(--hairline)",
          paddingTop: 18,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
          font: "400 9.5px/1 var(--mono)",
          letterSpacing: ".12em",
          color: "var(--ink-42)",
        }}
      >
        <span>{dict.site.legal}</span>
        <span>{dict.site.compliance}</span>
        <span>{dict.site.version}</span>
      </div>
    </footer>
  );
}
