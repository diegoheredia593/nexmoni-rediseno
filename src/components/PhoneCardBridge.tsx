"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export function PhoneCardBridge({ label, phrase }: { label: string; phrase: string }) {
  const section = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start 82%", "end 28%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 24, mass: 0.34 });
  const dotX = useTransform(progress, [0, 0.48, 1], [230, 455, 650]);
  const dotY = useTransform(progress, [0, 0.48, 1], [220, 118, 198]);
  const phoneOpacity = useTransform(progress, [0, 0.58, 1], [1, 0.9, 0.24]);
  const cardOpacity = useTransform(progress, [0, 0.4, 1], [0.12, 0.48, 1]);
  const glowOpacity = useTransform(progress, [0.55, 1], [0, 1]);
  const cardY = useTransform(progress, [0.35, 1], [22, 0]);
  const cardScale = useTransform(progress, [0.35, 1], [0.88, 1]);

  return (
    <section className="product-bridge" ref={section}>
      <div className="product-bridge__in wrap">
        <div className="product-bridge__copy">
          <span className="tag">{label}</span>
          <h2>{phrase}</h2>
        </div>

        <svg className="product-bridge__map" viewBox="0 0 1000 360" aria-hidden="true">
          <defs>
            <linearGradient id="bridge-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="var(--acento-alto)" />
              <stop offset=".58" stopColor="var(--acento)" />
              <stop offset="1" stopColor="var(--senal)" />
            </linearGradient>
            <radialGradient id="bridge-card-glow">
              <stop offset="0" stopColor="var(--acento-alto)" stopOpacity=".48" />
              <stop offset="1" stopColor="var(--acento-alto)" stopOpacity="0" />
            </radialGradient>
            <filter id="bridge-pulse" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <motion.g className="product-bridge__phone-photo" style={{ opacity: reducedMotion ? 1 : phoneOpacity }}>
            <image
              className="product-bridge__phone-image"
              href="/images/phone-higgsfield.webp"
              x="24"
              y="18"
              width="270"
              height="320"
              preserveAspectRatio="xMidYMid meet"
            />
            <g className="product-bridge__phone-ui">
              <circle cx="159" cy="124" r="13" />
              <path d="M147 148h24M126 177h66M126 191h44M126 222h66" />
              <rect x="121" y="248" width="76" height="24" rx="12" />
            </g>
          </motion.g>

          <path className="product-bridge__guide" d="M230 220 C350 220 365 118 455 118 C548 118 550 198 650 198" />
          <motion.path className="product-bridge__flow" d="M230 220 C350 220 365 118 455 118 C548 118 550 198 650 198" style={{ pathLength: reducedMotion ? 1 : progress }} />
          <path className="product-bridge__flow product-bridge__flow--particles" d="M230 220 C350 220 365 118 455 118 C548 118 550 198 650 198" />
          {[0, 1, 2, 3, 4, 5].map((spark) => (
            <circle key={spark} className="product-bridge__spark" cx={282 + spark * 58} cy={190 - Math.sin(spark * 0.9) * 48} r={spark % 2 ? 1.8 : 2.8} style={{ animationDelay: `${spark * -0.42}s` }} />
          ))}
          <motion.circle className="product-bridge__pulse" r="8" cx={reducedMotion ? 650 : dotX} cy={reducedMotion ? 198 : dotY} filter="url(#bridge-pulse)" />

          <motion.g className="product-bridge__card-photo" style={{ opacity: reducedMotion ? 1 : cardOpacity, y: reducedMotion ? 0 : cardY, scale: reducedMotion ? 1 : cardScale }}>
            <motion.ellipse cx="790" cy="198" rx="196" ry="142" fill="url(#bridge-card-glow)" style={{ opacity: reducedMotion ? 0.7 : glowOpacity }} />
            <image className="product-bridge__card-image" href="/images/card-higgsfield.webp" x="610" y="64" width="370" height="247" preserveAspectRatio="xMidYMid meet" />
            <text className="product-bridge__card-debit" x="872" y="129">DEBIT</text>
          </motion.g>
        </svg>
      </div>
    </section>
  );
}
