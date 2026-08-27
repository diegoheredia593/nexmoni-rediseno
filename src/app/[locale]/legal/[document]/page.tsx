import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/content/dictionary";
import { getLegalDocument, legalDocuments } from "@/content/legal";
import { siteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return locales.flatMap((locale) => legalDocuments.map((document) => ({ locale, document: document.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; document: string }> }): Promise<Metadata> {
  const { locale, document: slug } = await params;
  const document = getLegalDocument(slug);
  if (!document || !isLocale(locale)) return {};
  return {
    metadataBase: siteUrl,
    title: `${document.title} — NexMoni`,
    description: document.blocks.find((block) => block.kind === "paragraph")?.text,
    alternates: { canonical: `/es/legal/${document.slug}` },
  };
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string; document: string }> }) {
  const { locale, document: slug } = await params;
  if (!isLocale(locale)) notFound();
  const document = getLegalDocument(slug);
  if (!document) notFound();
  const dict = getDictionary(locale);

  return (
    <article className="legal-page">
      <div className="wrap legal-page__wrap">
        <span className="tag">{dict.site.legal}</span>
        <div className="legal-document">
          {document.blocks.map((block, index) => {
            if (block.kind === "title") return <h1 key={index}>{block.text}</h1>;
            if (block.kind === "subtitle") return <p key={index} className="legal-document__subtitle">{block.text}</p>;
            if (block.kind === "heading") return <h2 key={index}>{block.text}</h2>;
            if (block.kind === "space") return <span key={index} className="legal-document__space" aria-hidden="true" />;
            return <p key={index} className={block.text.startsWith("•") ? "legal-document__bullet" : undefined}>{block.text}</p>;
          })}
        </div>
      </div>
    </article>
  );
}