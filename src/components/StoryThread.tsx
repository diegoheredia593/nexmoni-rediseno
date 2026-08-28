"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export function StoryThread() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const progress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 24,
    mass: 0.32,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.025, 0.96, 1], [0, 1, 1, 0]);

  return (
    <motion.aside className="story-thread" style={{ opacity }} aria-hidden="true">
      <span className="story-thread__rail" />
      <motion.span
        className="story-thread__progress"
        style={{ scaleY: reducedMotion ? 1 : progress }}
      />
      {[18, 43, 68, 91].map((position) => (
        <span key={position} className="story-thread__node" style={{ top: position + "%" }} />
      ))}
    </motion.aside>
  );
}