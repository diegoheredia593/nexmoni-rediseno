import type { Dictionary } from "@/content/dictionary";
import { email } from "@/content/brand";

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
      <a className="btn btn--primary btn--block" href={`mailto:${email.support}`}>
        {t.contactEmail}
      </a>
      <a
        className="btn btn--ghost btn--block"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        {t.contactWhatsapp}
      </a>
      <p className="caption">{t.whatsappNote}</p>
    </div>
  );
}