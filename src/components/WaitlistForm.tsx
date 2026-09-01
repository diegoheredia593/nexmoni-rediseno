"use client";

import { useState, type FormEvent } from "react";
import { FlowButton } from "@/components/ui/flow-button";
import { email } from "@/content/brand";
import type { Locale } from "@/content/dictionary";

const copy = {
  es: {
    name: "Nombre completo", email: "Correo electrónico", residence: "¿En qué país vives?", connection: "¿Con qué país de Latinoamérica o Europa te relacionas?",
    use: "¿Para qué usarías NexMoni principalmente?", useOptions: ["Enviar dinero a mi familia", "Recibir dinero o ingresos", "Cambiar y guardar divisas", "Usar la tarjeta de débito", "Otro"],
    frequency: "¿Con qué frecuencia moverías dinero?", frequencyOptions: ["Cada semana", "Cada mes", "Varias veces al año", "Todavía no lo sé"],
    volume: "¿Qué cantidad moverías normalmente al mes?", volumeOptions: ["Menos de €250", "€250–€1.000", "€1.000–€3.000", "Más de €3.000"],
    wish: "¿Qué beneficio o función sería más valioso para ti?", consent: "Acepto recibir novedades sobre el lanzamiento y mi posición en la lista de espera.",
    submit: "Enviar mi solicitud", note: "Al continuar, abriremos tu correo con la solicitud preparada. Revísala y envíala para completar tu registro.", prepared: "Tu solicitud está preparada. Envíala desde tu aplicación de correo para completar el registro.", required: "Campo obligatorio",
  },
  en: {
    name: "Full name", email: "Email address", residence: "Which country do you live in?", connection: "Which country in Latin America or Europe are you connected to?",
    use: "What would you mainly use NexMoni for?", useOptions: ["Send money to my family", "Receive money or income", "Exchange and hold currencies", "Use the debit card", "Other"],
    frequency: "How often would you move money?", frequencyOptions: ["Every week", "Every month", "Several times a year", "I am not sure yet"],
    volume: "How much would you normally move each month?", volumeOptions: ["Less than €250", "€250–€1,000", "€1,000–€3,000", "More than €3,000"],
    wish: "Which benefit or feature would be most valuable to you?", consent: "I agree to receive launch updates and information about my place on the waitlist.",
    submit: "Send my application", note: "When you continue, we will open your email with the application ready. Review and send it to complete your registration.", prepared: "Your application is ready. Send it from your email app to complete registration.", required: "Required field",
  },
  pt: {
    name: "Nome completo", email: "Email", residence: "Em que país vives?", connection: "Com que país da América Latina ou Europa tens ligação?",
    use: "Para que usarias principalmente a NexMoni?", useOptions: ["Enviar dinheiro à minha família", "Receber dinheiro ou rendimentos", "Trocar e guardar divisas", "Usar o cartão de débito", "Outro"],
    frequency: "Com que frequência movimentarias dinheiro?", frequencyOptions: ["Todas as semanas", "Todos os meses", "Várias vezes por ano", "Ainda não sei"],
    volume: "Que valor movimentarias normalmente por mês?", volumeOptions: ["Menos de €250", "€250–€1.000", "€1.000–€3.000", "Mais de €3.000"],
    wish: "Que benefício ou funcionalidade seria mais valioso para ti?", consent: "Aceito receber novidades sobre o lançamento e a minha posição na lista de espera.",
    submit: "Enviar a minha candidatura", note: "Ao continuar, abriremos o teu email com a candidatura preparada. Revê e envia para concluir o registo.", prepared: "A tua candidatura está pronta. Envia-a pela aplicação de email para concluir o registo.", required: "Campo obrigatório",
  },
  lt: {
    name: "Vardas ir pavardė", email: "El. paštas", residence: "Kurioje šalyje gyveni?", connection: "Su kuria Lotynų Amerikos ar Europos šalimi esi susijęs?",
    use: "Kam dažniausiai naudotum NexMoni?", useOptions: ["Siųsti pinigus šeimai", "Gauti pinigus ar pajamas", "Keisti ir laikyti valiutas", "Naudoti debeto kortelę", "Kita"],
    frequency: "Kaip dažnai pervestum pinigus?", frequencyOptions: ["Kas savaitę", "Kas mėnesį", "Kelis kartus per metus", "Dar nežinau"],
    volume: "Kokią sumą paprastai pervestum per mėnesį?", volumeOptions: ["Mažiau nei €250", "€250–€1 000", "€1 000–€3 000", "Daugiau nei €3 000"],
    wish: "Kokia nauda ar funkcija tau būtų vertingiausia?", consent: "Sutinku gauti naujienas apie startą ir savo vietą laukiančiųjų sąraše.",
    submit: "Siųsti paraišką", note: "Tęsiant bus atidarytas el. paštas su paruošta paraiška. Peržiūrėk ir išsiųsk ją, kad užbaigtum registraciją.", prepared: "Paraiška paruošta. Išsiųsk ją el. paštu, kad užbaigtum registraciją.", required: "Privalomas laukas",
  },
} as const;

export function WaitlistForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Nombre / Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `País de residencia / Country of residence: ${form.get("residence")}`,
      `Conexión Europa–LatAm / Europe–LatAm connection: ${form.get("connection")}`,
      `Uso principal / Main use: ${form.get("use")}`,
      `Frecuencia / Frequency: ${form.get("frequency")}`,
      `Volumen mensual / Monthly volume: ${form.get("volume")}`,
      `Prioridad / Priority: ${form.get("wish")}`,
      `Idioma / Language: ${locale.toUpperCase()}`,
    ].join("\n");
    setPrepared(true);
    window.location.href = `mailto:${email.support}?subject=${encodeURIComponent("NexMoni — Founding member waitlist")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="waitlist-form" onSubmit={submit}>
      <div className="waitlist-form__grid">
        <label className="waitlist-field"><span>{t.name}</span><input name="name" autoComplete="name" required /></label>
        <label className="waitlist-field"><span>{t.email}</span><input name="email" type="email" autoComplete="email" required /></label>
        <label className="waitlist-field"><span>{t.residence}</span><input name="residence" autoComplete="country-name" required /></label>
        <label className="waitlist-field"><span>{t.connection}</span><input name="connection" required /></label>
        <label className="waitlist-field"><span>{t.use}</span><select name="use" defaultValue="" required><option value="" disabled>{t.required}</option>{t.useOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="waitlist-field"><span>{t.frequency}</span><select name="frequency" defaultValue="" required><option value="" disabled>{t.required}</option>{t.frequencyOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="waitlist-field waitlist-field--wide"><span>{t.volume}</span><select name="volume" defaultValue="" required><option value="" disabled>{t.required}</option>{t.volumeOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="waitlist-field waitlist-field--wide"><span>{t.wish}</span><textarea name="wish" rows={4} required /></label>
      </div>
      <label className="waitlist-consent"><input type="checkbox" required /><span>{t.consent}</span></label>
      <div className="waitlist-form__action">
        <FlowButton text={t.submit} type="submit" variant="accent" />
        <p className="caption">{prepared ? t.prepared : t.note}</p>
      </div>
    </form>
  );
}
