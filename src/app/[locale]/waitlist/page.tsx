import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WaitlistForm } from "@/components/WaitlistForm";
import { isLocale, locales, type Locale } from "@/content/dictionary";

const copy = {
  es: {
    eyebrow: "LISTA DE ESPERA · MIEMBROS FUNDADORES",
    title: "Tu lugar empieza aquí.",
    lead: "Cuéntanos cómo moverías tu dinero entre Europa y Latinoamérica. Tus respuestas nos ayudarán a priorizar el acceso y los beneficios VIP para los primeros 1.000 miembros.",
    privacy: "Tus respuestas se usarán únicamente para gestionar tu solicitud y preparar el lanzamiento de NexMoni.",
  },
  en: {
    eyebrow: "WAITLIST · FOUNDING MEMBERS",
    title: "Your place starts here.",
    lead: "Tell us how you would move money between Europe and Latin America. Your answers will help us prioritise access and VIP benefits for the first 1,000 members.",
    privacy: "Your answers will only be used to manage your application and prepare the NexMoni launch.",
  },
  pt: {
    eyebrow: "LISTA DE ESPERA · MEMBROS FUNDADORES",
    title: "O teu lugar começa aqui.",
    lead: "Conta-nos como movimentarias dinheiro entre a Europa e a América Latina. As tuas respostas ajudar-nos-ão a priorizar o acesso e os benefícios VIP para os primeiros 1.000 membros.",
    privacy: "As tuas respostas serão usadas apenas para gerir a candidatura e preparar o lançamento da NexMoni.",
  },
  lt: {
    eyebrow: "LAUKIANČIŲJŲ SĄRAŠAS · STEIGIAMIEJI NARIAI",
    title: "Tavo vieta prasideda čia.",
    lead: "Papasakok, kaip pervestum pinigus tarp Europos ir Lotynų Amerikos. Atsakymai padės nustatyti pirmųjų 1 000 narių prieigos ir VIP naudų prioritetą.",
    privacy: "Atsakymai bus naudojami tik tavo paraiškai administruoti ir NexMoni startui pasiruošti.",
  },
} as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = copy[locale];
  return {
    title: t.title,
    description: t.lead,
    robots: { index: false, follow: false },
  };
}

export default async function WaitlistPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = copy[locale];

  return (
    <section className="section waitlist-page">
      <div className="wrap waitlist-page__layout">
        <header className="waitlist-page__intro">
          <span className="tag">{t.eyebrow}</span>
          <h1 className="h1">{t.title}</h1>
          <p className="lead">{t.lead}</p>
          <p className="caption">{t.privacy}</p>
        </header>
        <WaitlistForm locale={locale as Locale} />
      </div>
    </section>
  );
}
