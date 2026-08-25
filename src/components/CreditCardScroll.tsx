"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppIcon } from "@/components/AppIcon";

gsap.registerPlugin(ScrollTrigger);

export function CreditCardScroll() {
  const section = useRef<HTMLElement>(null);
  const card = useRef<HTMLDivElement>(null);

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
    <section className="card-scroll" ref={section} aria-label="NexMoni card">
      <div className="card-scroll__sticky">
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
        <span className="card-scroll__hint" aria-hidden="true"><i />Scroll to rotate</span>
      </div>
    </section>
  );
}

