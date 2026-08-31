"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { AppIcon } from "@/components/AppIcon";
import type { Dictionary, Locale } from "@/content/dictionary";

const copy = {
  es: { tag: "EUROPA → LATINOAMÉRICA", sentTitle: "Enviado en euros.", receivedTitle: "Recibido en pesos.", received: "Has recibido", from: "desde España", available: "Disponible en tu cuenta", amount: "1.234.567 COP" },
  en: { tag: "EUROPE → LATIN AMERICA", sentTitle: "Sent in euros.", receivedTitle: "Received in pesos.", received: "You received", from: "from Spain", available: "Available in your account", amount: "1,234,567 COP" },
  pt: { tag: "EUROPA → AMÉRICA LATINA", sentTitle: "Enviado em euros.", receivedTitle: "Recebido em pesos.", received: "Recebeste", from: "desde Espanha", available: "Disponível na tua conta", amount: "1.234.567 COP" },
  lt: { tag: "EUROPA → LOTYNŲ AMERIKA", sentTitle: "Išsiųsta eurais.", receivedTitle: "Gauta pesais.", received: "Gavai", from: "iš Ispanijos", available: "Pasiekiama tavo sąskaitoje", amount: "1 234 567 COP" },
} as const;

export function TransferRelay({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const t = copy[locale];
  const { scrollYProgress } = useScroll({ target: section, offset: ["start 80%", "end 24%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 82, damping: 24, mass: 0.38 });
  const incoming = useTransform(progress, [0, 0.48], [0, 1]);
  const outgoing = useTransform(progress, [0.5, 1], [0, 1]);
  const sentOpacity = useTransform(progress, [0, 0.12, 0.48, 0.62], [0.18, 1, 1, 0.42]);
  const receivedOpacity = useTransform(progress, [0.38, 0.58], [0.12, 1]);
  const phoneOpacity = useTransform(progress, [0.28, 0.5], [0.28, 1]);
  const phoneY = useTransform(progress, [0.28, 0.52], [24, 0]);

  return (
    <section className="transfer-relay" ref={section}>
      <div className="wrap transfer-relay__inner">
        <div className="transfer-relay__copy">
          <span className="tag">{t.tag}</span>
          <h2>
            <motion.span style={{ opacity: reducedMotion ? 1 : sentOpacity }}>{t.sentTitle}</motion.span>
            <motion.span style={{ opacity: reducedMotion ? 1 : receivedOpacity }}>{t.receivedTitle}</motion.span>
          </h2>
        </div>

        <div className="transfer-relay__stage">
          <svg className="transfer-relay__routes" viewBox="0 0 1100 680" aria-hidden="true">
            <defs>
              <linearGradient id="relay-flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="var(--acento-alto)" /><stop offset=".52" stopColor="#fff0c9" /><stop offset="1" stopColor="var(--senal)" />
              </linearGradient>
              <filter id="relay-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path className="transfer-relay__guide" d="M170 -35 C170 95 280 126 405 205 C480 252 484 302 536 302" />
            <motion.path className="transfer-relay__flow" d="M170 -35 C170 95 280 126 405 205 C480 252 484 302 536 302" style={{ pathLength: reducedMotion ? 1 : incoming }} />
            <path className="transfer-relay__particles" d="M170 -35 C170 95 280 126 405 205 C480 252 484 302 536 302" />
            <path className="transfer-relay__guide" d="M742 302 C875 330 883 482 880 715" />
            <motion.path className="transfer-relay__flow transfer-relay__flow--out" d="M742 302 C875 330 883 482 880 715" style={{ pathLength: reducedMotion ? 1 : outgoing }} />
            <path className="transfer-relay__particles transfer-relay__particles--out" d="M742 302 C875 330 883 482 880 715" />
            <circle className="transfer-relay__pulse" cx="536" cy="302" r="8" filter="url(#relay-glow)" />
            <circle className="transfer-relay__pulse transfer-relay__pulse--out" cx="742" cy="302" r="6" filter="url(#relay-glow)" />
          </svg>

          <motion.div className="transfer-relay__phone" style={{ opacity: reducedMotion ? 1 : phoneOpacity, y: reducedMotion ? 0 : phoneY }} aria-label={`${t.received} ${t.amount} ${t.from}`}>
            <div className="fone__marco"><div className="fone__borde"><div className="fone__pantalla">
              <div className="app__estado"><span>9:42</span><span className="app__isla" /><span className="app__iconos"><i className="app__señal" /><i className="app__bateria" /></span></div>
              <div className="relay-screen">
                <AppIcon size={38} enCaja className="app__marca" /><span className="relay-screen__check" aria-hidden="true" />
                <p className="app__titulo">{t.received}</p><strong className="relay-screen__amount">{t.amount}</strong><p className="relay-screen__from">{t.from}</p>
                <div className="relay-screen__rule" /><span className="app__etq">{t.available}</span>
              </div>
              <span className="fone__inicio" aria-hidden="true" />
            </div></div></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
