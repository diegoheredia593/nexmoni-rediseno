"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppIcon } from "@/components/AppIcon";
import type { Locale } from "@/content/dictionary";

gsap.registerPlugin(ScrollTrigger);

const cardCopy: Record<Locale, { eyebrow: string; title: string; body: string; aria: string; hint: string }> = {
  es: {
    eyebrow: "TARJETA VISA DE DÉBITO",
    title: "Tu cuenta también cabe en tu bolsillo.",
    body: "Paga en comercios y en línea con el saldo disponible de tu cuenta NexMoni. Sin crédito ni deuda: usas únicamente tu propio dinero.",
    aria: "Tarjeta Visa de débito NexMoni",
    hint: "Desliza para girar",
  },
  en: {
    eyebrow: "VISA DEBIT CARD",
    title: "Your account, right in your pocket.",
    body: "Pay in stores and online with the available balance in your NexMoni account. No credit or debt: you only use your own money.",
    aria: "NexMoni Visa debit card",
    hint: "Scroll to rotate",
  },
  pt: {
    eyebrow: "CARTÃO VISA DE DÉBITO",
    title: "A tua conta também cabe no bolso.",
    body: "Paga em lojas e online com o saldo disponível da tua conta NexMoni. Sem crédito nem dívida: utilizas apenas o teu próprio dinheiro.",
    aria: "Cartão Visa de débito NexMoni",
    hint: "Desliza para rodar",
  },
  lt: {
    eyebrow: "VISA DEBETO KORTELĖ",
    title: "Tavo sąskaita visada kišenėje.",
    body: "Mokėk parduotuvėse ir internetu naudodamas turimą NexMoni sąskaitos likutį. Jokio kredito ar skolos – tik tavo pinigai.",
    aria: "NexMoni Visa debeto kortelė",
    hint: "Slink, kad pasuktum",
  },
};

export function CreditCardScroll({ locale }: { locale: Locale }) {
  const section = useRef<HTMLElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const copy = cardCopy[locale];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      if (!card.current) return;
      gsap.fromTo(card.current, { rotateY: 0, rotateX: -7 }, {
        rotateY: 360,
        rotateX: 7,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top top", end: "bottom bottom", scrub: 0.55 },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section className="card-scroll" ref={section} aria-label={copy.aria}>
      <div className="card-scroll__sticky">
        <div className="card-scroll__content wrap">
          <div className="card-scroll__copy">
            <span className="tag">{copy.eyebrow}</span>
            <h2>{copy.title}</h2>
            <p>{copy.body}</p>
          </div>

          <div className="card-scroll__scene">
            <div className="nex-card" ref={card}>
              <div className="nex-card__face nex-card__front">
                <div className="nex-card__brand"><AppIcon size={30} /><span>NexMoni</span></div>
                <span className="nex-card__type">DEBIT</span>
                <span className="nex-card__chip" aria-hidden="true"><i /><i /><i /></span>
                <svg className="nex-card__contactless" viewBox="0 0 30 30" aria-hidden="true"><path d="M8 10c3 3 3 7 0 10M13 7c5 5 5 11 0 16M18 4c7 7 7 15 0 22" /></svg>
                <span className="nex-card__number">••••&nbsp; ••••&nbsp; ••••&nbsp; 5937</span>
                <span className="nex-card__holder">NEXMONI MEMBER</span>
                <span className="nex-card__expires"><small>VALID<br />THRU</small>08/30</span>
                <span className="nex-card__visa" aria-label="Visa">VISA</span>
              </div>
              <div className="nex-card__face nex-card__back">
                <div className="nex-card__brand nex-card__brand--back"><AppIcon size={24} /><span>NexMoni</span></div>
                <span className="nex-card__stripe" aria-hidden="true" />
                <div className="nex-card__signature"><span>AUTHORIZED SIGNATURE</span><i>593</i></div>
                <span className="nex-card__hologram" aria-hidden="true"><i /></span>
                <span className="nex-card__visa nex-card__visa--back" aria-label="Visa">VISA</span>
                <p>NEXMONI OÜ · ESTONIA</p>
              </div>
            </div>
          </div>
        </div>
        <span className="card-scroll__hint" aria-hidden="true"><i />{copy.hint}</span>
      </div>
    </section>
  );
}