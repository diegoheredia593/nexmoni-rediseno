import { FlowButton } from "@/components/ui/flow-button";
import type { Locale } from "@/content/dictionary";

const copy = {
  es: {
    eyebrow: "MEMBRESÍA FUNDADORA",
    title: "Forma parte de los miembros fundadores.",
    lead: "Únete a la lista de espera y recibe beneficios VIP reservados para quienes lleguen primero.",
    limit: "Solo para las primeras 1.000 personas en unirse.",
    button: "Unirme a la lista de espera",
    count: "1.000",
    countLabel: "plazas fundadoras",
  },
  en: {
    eyebrow: "FOUNDING MEMBERSHIP",
    title: "Become a founding member.",
    lead: "Join the waitlist and receive VIP benefits reserved for those who arrive first.",
    limit: "Only for the first 1,000 people to join.",
    button: "Join the waitlist",
    count: "1,000",
    countLabel: "founding spots",
  },
  pt: {
    eyebrow: "MEMBRO FUNDADOR",
    title: "Faz parte dos membros fundadores.",
    lead: "Entra na lista de espera e recebe benefícios VIP reservados para quem chegar primeiro.",
    limit: "Apenas para as primeiras 1.000 pessoas a aderir.",
    button: "Entrar na lista de espera",
    count: "1.000",
    countLabel: "lugares fundadores",
  },
  lt: {
    eyebrow: "STEIGIAMOJI NARYSTĖ",
    title: "Tapk steigiamuoju nariu.",
    lead: "Prisijunk prie laukiančiųjų sąrašo ir gauk VIP naudų, skirtų pirmiesiems nariams.",
    limit: "Tik pirmiesiems 1 000 prisijungusiųjų.",
    button: "Prisijungti prie sąrašo",
    count: "1 000",
    countLabel: "steigiamųjų vietų",
  },
} as const;

export function WaitlistSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="descargar" className="section rule waitlist-invite">
      <div className="wrap waitlist-invite__grid">
        <div className="waitlist-invite__copy">
          <span className="tag">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p className="lead">{t.lead}</p>
          <p className="waitlist-invite__limit">{t.limit}</p>
          <FlowButton text={t.button} href={`/${locale}/waitlist`} variant="accent" />
        </div>
        <div className="waitlist-invite__count" aria-label={`${t.count} ${t.countLabel}`}>
          <strong>{t.count}</strong>
          <span>{t.countLabel}</span>
        </div>
      </div>
    </section>
  );
}
