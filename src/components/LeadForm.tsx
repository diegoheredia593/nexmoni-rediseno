import type { Dictionary } from "@/content/dictionary";
import { email } from "@/content/brand";
import { FlowButton } from "@/components/ui/flow-button";

const whatsappUrl = "https://wa.me/34632956541";

/**
 * Contacto directo mientras las tiendas todavía no están publicadas.
 * No recopila ni registra datos personales: el visitante decide si abre su
 * cliente de correo o una conversación con el equipo de NexMoni.
 */
export function LeadForm({ dict }: { dict: Dictionary }) {
  const t = dict.signup;

  return (
    <div className="form form--contact">
      <FlowButton text={t.contactEmail} href={`mailto:${email.support}`} variant="accent" block />
      <FlowButton text={t.contactWhatsapp} href={whatsappUrl} target="_blank" rel="noreferrer" block />
      <p className="caption">{t.whatsappNote}</p>
    </div>
  );
}
