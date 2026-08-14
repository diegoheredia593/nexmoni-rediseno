/**
 * Preguntas frecuentes. Contenido facilitado por el cliente; las respuestas
 * sobre emisor, salvaguarda de fondos y reclamaciones tienen efecto legal.
 */

import { brand } from "./about";

export const faqPage = {
  eyebrow: "§ 01 — PREGUNTAS FRECUENTES",
  h1: "Preguntas frecuentes",
  subtitle: "Respuestas a las dudas más comunes.",
  footnote:
    "¿No encuentras lo que buscabas? Escríbenos y te respondemos por el mismo canal.",
} as const;

export interface FaqItem {
  q: string;
  /** Párrafos de la respuesta. */
  a: string[];
  /** Datos en forma de lista: pasos, plazos, direcciones. */
  list?: { label: string; value: string }[];
}

export const faq: FaqItem[] = [
  {
    q: "¿Cómo bloqueo mi cuenta o congelo mi tarjeta?",
    a: [
      "Desde la propia aplicación, en Tarjetas o en Ajustes, en cualquier momento del día. El bloqueo es inmediato y puedes revertirlo tú mismo.",
      `Si has perdido el acceso a la app, escribe a support@${brand.emailDomain} y lo bloqueamos nosotros.`,
    ],
  },
  {
    q: "¿Quién emite el dinero y las tarjetas?",
    a: [
      "NexMoni OÜ actúa como distribuidor. El dinero electrónico y las tarjetas los emiten entidades autorizadas:",
    ],
    list: [
      { label: "Dinero electrónico", value: "ConnectPay UAB — Licencia EMI N.º 24" },
      { label: "Tarjetas Visa", value: "Wallester AS" },
      { label: "NexMoni OÜ", value: "Distribuidor autorizado" },
    ],
  },
  {
    q: "¿Cómo envío dinero?",
    a: [
      "Desde Enviar: eliges destinatario, indicas el importe y confirmas. Antes de confirmar ves el desglose completo.",
      "Los plazos dependen de la vía:",
    ],
    list: [
      { label: "SEPA", value: "De minutos a 1 día hábil" },
      { label: "SWIFT", value: "De 1 a 5 días hábiles" },
    ],
  },
  {
    q: "¿Cuáles son las comisiones?",
    a: [
      "Todas las comisiones se muestran antes de confirmar la operación: nunca se descubren después.",
      "El listado completo está en la sección de precios y te llega también en el correo de bienvenida.",
    ],
  },
  {
    q: "¿Está seguro mi dinero?",
    a: [
      "Los fondos se mantienen salvaguardados y segregados en ConnectPay UAB, conforme a la normativa europea de dinero electrónico.",
      "Las comunicaciones van cifradas en doble capa y cada operación exige autenticación reforzada de cliente (SCA), tal y como obliga la PSD2.",
    ],
  },
  {
    q: "¿Cómo verifico mi identidad (KYC)?",
    a: [
      "Durante el registro, aportando un documento de identidad y una selfie. La verificación la procesa ConnectPay, no NexMoni.",
    ],
  },
  {
    q: "¿Cómo presento una reclamación?",
    a: [
      `Escribe a complaints@${brand.emailDomain}. Respondemos en un plazo máximo de 15 días hábiles.`,
      "Si la respuesta no te satisface, puedes dirigirte directamente a ConnectPay UAB como entidad emisora, o al Banco de Lituania como supervisor.",
    ],
    list: [
      { label: "NexMoni OÜ", value: `complaints@${brand.emailDomain} — 15 días hábiles` },
      { label: "Entidad emisora", value: "ConnectPay UAB" },
      { label: "Supervisor", value: "Banco de Lituania — lb.lt" },
    ],
  },
  {
    q: "¿Cómo contacto con soporte?",
    a: [
      `Por el asistente dentro de la aplicación o escribiendo a support@${brand.emailDomain}.`,
      `Si detectas un fraude o un cargo que no reconoces, avisa cuanto antes a fraud@${brand.emailDomain}.`,
    ],
  },
];
