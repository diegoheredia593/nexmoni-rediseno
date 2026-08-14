import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo, Space_Mono } from "next/font/google";
import { GlossaryProvider } from "@/components/glossary/GlossaryProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary, isLocale, locales, type Locale } from "@/content/dictionary";
import "../globals.css";

// next/font descarga y auto-hospeda las familias en build: sin peticiones a
// Google en tiempo de ejecución y sin salto de fuente.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceMono = Space_Mono({
  // latin-ext cubre los diacríticos del lituano (ą, č, ę, ė, į, š, ų, ū, ž).
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

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
    title: dict.pages.home.title,
    description: dict.pages.home.description,
    alternates: {
      canonical: `/${locale}`,
      // Le dice al buscador que las cuatro son la misma página en otro idioma.
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);

  return (
    <html lang={dict.meta.htmlLang} className={`${archivo.variable} ${spaceMono.variable}`}>
      <body>
        <GlossaryProvider glossary={dict.glossary}>
          <Header locale={locale} dict={dict} />
          <main>{children}</main>
          <Footer locale={locale} dict={dict} />
        </GlossaryProvider>
      </body>
    </html>
  );
}
