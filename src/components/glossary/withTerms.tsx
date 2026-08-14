import { Fragment, type ReactNode } from "react";
import { Term } from "./Term";
import type { Tone } from "./GlossaryProvider";

const TERM_RE = /\b(SEPA|SWIFT|IBAN|KYC|AML|E2E|FX|PSD2|GDPR)\b/g;

/**
 * Envuelve la jerga regulada de una cadena en `<Term>`.
 * El copy vive en archivos de contenido como texto plano, así que la detección
 * se hace aquí, en el render, y no recorriendo el DOM ya montado.
 */
export function withTerms(text: string, tone: Tone = "light"): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  TERM_RE.lastIndex = 0;
  while ((match = TERM_RE.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Term key={`${match[1]}-${match.index}`} term={match[1]} tone={tone} />,
    );
    last = match.index + match[1].length;
  }

  if (parts.length === 0) return text;
  if (last < text.length) parts.push(text.slice(last));

  return parts.map((part, i) => <Fragment key={i}>{part}</Fragment>);
}
