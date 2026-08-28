"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isLocale, locales, localeLabels, localeNames, type Locale } from "@/content/dictionary";
import { pathFor, resolveSlug } from "@/content/routes";

export function LocaleSwitch({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const [suffix, setSuffix] = useState("");

  useEffect(() => {
    const syncSuffix = () => setSuffix(window.location.search + window.location.hash);
    syncSuffix();
    window.addEventListener("hashchange", syncSuffix);
    return () => window.removeEventListener("hashchange", syncSuffix);
  }, [pathname]);

  function equivalent(target: Locale): string {
    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];
    const rest = segments.slice(1);

    if (rest.length === 0) return `/${target}${suffix}`;

    const from = isLocale(first) ? first : current;
    const resolved = resolveSlug(from, rest[0]);

    if (resolved) return `${pathFor(resolved.key, target)}${suffix}`;

    return `/${target}/${rest.join("/")}${suffix}`;
  }

  return (
    <div className="locales" role="group" aria-label={label}>
      {locales.map((locale) => {
        const isCurrent = locale === current;
        return (
          <Link
            key={locale}
            href={equivalent(locale)}
            scroll={false}
            className={`locales__item${isCurrent ? " locales__item--on" : ""}`}
            hrefLang={locale}
            title={localeNames[locale]}
            aria-current={isCurrent ? "true" : undefined}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
