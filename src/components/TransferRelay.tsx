"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { AppIcon } from "@/components/AppIcon";
import type { Dictionary, Locale } from "@/content/dictionary";

const copy = {
  es: { tag: "EUROPA → LATINOAMÉRICA", sentTitle: "Enviado en euros.", receivedTitle: "Recibido en dólares.", received: "Has recibido", from: "desde España", available: "Disponible en tu cuenta", amount: "$227.83" },
  en: { tag: "EUROPE → LATIN AMERICA", sentTitle: "Sent in euros.", receivedTitle: "Received in dollars.", received: "You received", from: "from Spain", available: "Available in your account", amount: "$227.83" },
  pt: { tag: "EUROPA → AMÉRICA LATINA", sentTitle: "Enviado em euros.", receivedTitle: "Recebido em dólares.", received: "Recebeste", from: "desde Espanha", available: "Disponível na tua conta", amount: "$227.83" },
  lt: { tag: "EUROPA → LOTYNŲ AMERIKA", sentTitle: "Išsiųsta eurais.", receivedTitle: "Gauta doleriais.", received: "Gavai", from: "iš Ispanijos", available: "Pasiekiama tavo sąskaitoje", amount: "$227.83" },
} as const;

export function TransferRelay({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const t = copy[locale];
  const { scrollYProgress } = useScroll({ target: section, offset: ["start 80%", "end 24%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 82, damping: 24, mass: 0.38 });
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
