"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { glossary } from "@/content/site";

export type Tone = "light" | "dark";

interface ActiveTerm {
  key: string;
  anchor: DOMRect;
  tone: Tone;
}

interface GlossaryContextValue {
  show: (key: string, anchor: DOMRect, tone: Tone) => void;
  hide: () => void;
}

const GlossaryContext = createContext<GlossaryContextValue | null>(null);

export function useGlossary(): GlossaryContextValue {
  const ctx = useContext(GlossaryContext);
  // Fuera del proveedor los términos se comportan como texto normal.
  return ctx ?? { show: () => {}, hide: () => {} };
}

const EDGE = 14;
const OFFSET = 10;

export function GlossaryProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ActiveTerm | null>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  const show = useCallback((key: string, anchor: DOMRect, tone: Tone) => {
    if (!glossary[key]) return;
    setPos(null);
    setActive({ key, anchor, tone });
  }, []);

  const hide = useCallback(() => {
    setActive(null);
    setPos(null);
  }, []);

  // Cualquier scroll invalida la posición: se oculta, igual que el prototipo.
  useEffect(() => {
    if (!active) return;
    const onScroll = () => hide();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, [active, hide]);

  // Centrado sobre el término, pegado a los bordes y volteado abajo si no cabe.
  useLayoutEffect(() => {
    if (!active || !tipRef.current) return;
    const tip = tipRef.current.getBoundingClientRect();
    const { anchor } = active;

    let left = anchor.left + anchor.width / 2 - tip.width / 2;
    left = Math.max(EDGE, Math.min(left, window.innerWidth - tip.width - EDGE));

    let top = anchor.top - tip.height - OFFSET;
    if (top < 12) top = anchor.bottom + OFFSET;

    setPos({ left, top });
  }, [active]);

  const value = useMemo(() => ({ show, hide }), [show, hide]);

  return (
    <GlossaryContext.Provider value={value}>
      {children}
      {active && typeof document !== "undefined"
        ? createPortal(
            <div
              ref={tipRef}
              role="tooltip"
              className={`tip${active.tone === "dark" ? " tip--dark" : ""}`}
              style={{
                left: pos?.left ?? -9999,
                top: pos?.top ?? -9999,
                visibility: pos ? "visible" : "hidden",
              }}
            >
              <div className="tip__term">{active.key}</div>
              <div className="tip__def">{glossary[active.key]}</div>
            </div>,
            document.body,
          )
        : null}
    </GlossaryContext.Provider>
  );
}
