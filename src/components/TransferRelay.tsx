"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { AppIcon } from "@/components/AppIcon";
import type { Dictionary, Locale } from "@/content/dictionary";

const copy = {
  es: { tag: "EUROPA → LATINOAMÉRICA", title: "Enviado en euros. Recibido en pesos.", received: "Has recibido", from: "desde España", available: "Disponible en tu cuenta", amount: "1.234.567 COP" },
  en: { tag: "EUROPE → LATIN AMERICA", title: "Sent in euros. Received in pesos.", received: "You received", from: "from Spain", available: "Available in your account", amount: "1,234,567 COP" },
  pt: { tag: "EUROPA → AMÉRICA LATINA", title: "Enviado em euros. Recebido em pesos.", received: "Recebeste", from: "desde Espanha", available: "Disponível na tua conta", amount: "1.234.567 COP" },
  lt: { tag: "EUROPA → LOTYNŲ AMERIKA", title: "Išsiųsta eurais. Gauta pesais.", received: "Gavai", from: "iš Ispanijos", available: "Pasiekiama tavo sąskaitoje", amount: "1 234 567 COP" },
} as const;

export function TransferRelay({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const t = copy[locale];
  const { scrollYProgress } = useScroll({ target: section, offset: ["start 78%", "end 28%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 82, damping: 24, mass: 0.38 });

  return (
    <section className="transfer-relay" ref={section}>
      <div className="wrap transfer-relay__inner">
        <div className="transfer-relay__copy">
          <span className="tag">{t.tag}</span>
          <h2>{t.title}</h2>
        </div>

        <div className="transfer-relay__stage">
          <svg className="transfer-relay__routes" viewBox="0 0 1100 620" aria-hidden="true">
            <defs>
              <linearGradient id="relay-flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="var(--acento-alto)" />
                <stop offset=".52" stopColor="#fff0c9" />
                <stop offset="1" stopColor="var(--senal)" />
              </linearGradient>
              <filter id="relay-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path className="transfer-relay__guide" d="M-40 302 C170 302 220 160 402 205 C475 223 482 294 536 302" />
            <motion.path className="transfer-relay__flow" d="M-40 302 C170 302 220 160 402 205 C475 223 482 294 536 302" style={{ pathLength: reducedMotion ? 1 : progress }} />
            <path className="transfer-relay__particles" d="M-40 302 C170 302 220 160 402 205 C475 223 482 294 536 302" />
            <path className="transfer-relay__guide" d="M742 302 C850 302 858 430 1135 430" />
            <motion.path className="transfer-relay__flow transfer-relay__flow--out" d="M742 302 C850 302 858 430 1135 430" style={{ pathLength: reducedMotion ? 1 : progress }} />
            <path className="transfer-relay__particles transfer-relay__particles--out" d="M742 302 C850 302 858 430 1135 430" />
            <circle className="transfer-relay__pulse" cx="536" cy="302" r="8" filter="url(#relay-glow)" />
            <circle className="transfer-relay__pulse transfer-relay__pulse--out" cx="742" cy="302" r="6" filter="url(#relay-glow)" />
          </svg>

          <div className="transfer-relay__phone" aria-label={`${t.received} ${t.amount} ${t.from}`}>
            <div className="fone__marco">
              <div className="fone__borde">
                <div className="fone__pantalla">
                  <div className="app__estado">
                    <span>9:42</span><span className="app__isla" />
                    <span className="app__iconos"><i className="app__señal" /><i className="app__bateria" /></span>
                  </div>
                  <div className="relay-screen">
                    <AppIcon size={38} enCaja className="app__marca" />
                    <span className="relay-screen__check" aria-hidden="true" />
                    <p className="app__titulo">{t.received}</p>
                    <strong className="relay-screen__amount">{t.amount}</strong>
                    <p className="relay-screen__from">{t.from}</p>
                    <div className="relay-screen__rule" />
                    <span className="app__etq">{t.available}</span>
                  </div>
                  <span className="fone__inicio" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
