/**
 * Página "Acerca de". Datos societarios y regulatorios facilitados por el
 * cliente — no editar sin confirmación: son declaraciones con efecto legal.
 *
 * `brand` es la fuente única del nombre y del dominio de correo. El resto del
 * sitio debe cuadrar con esto: la marca es NexMoni, no NextMoni.
 */

export const brand = {
  legalName: "NexMoni OÜ",
  shortName: "NexMoni",
  emailDomain: "nexmoni.com",
} as const;

export const about = {
  eyebrow: "§ 01 — ACERCA DE",
  h1: "Acerca de NexMoni",
  subtitle: "NexMoni OÜ — Estonia, Unión Europea",

  company: {
    eyebrow: "DATOS DE LA EMPRESA",
    rows: [
      { label: "Razón social", value: "NexMoni OÜ" },
      { label: "Código de registro", value: "17303472" },
      { label: "Domicilio social", value: "Tornimäe tn 5, 10145 Tallinn" },
      { label: "Jurisdicción", value: "República de Estonia, Unión Europea" },
    ],
  },

  mission: {
    eyebrow: "§ 02 — NUESTRA MISIÓN",
    title: "Enviar dinero a casa debería ser tan sencillo como una conversación.",
    body:
      "NexMoni nació para simplificar las transferencias internacionales de dinero para los migrantes y sus familias. Creemos que enviar dinero a casa debería ser tan sencillo como mantener una conversación. Nuestra plataforma conecta Europa con América Latina, permitiendo transferencias rápidas, seguras y asequibles impulsadas por inteligencia artificial.",
  },

  regulatory: {
    eyebrow: "§ 03 — ESTADO REGULATORIO",
    title: "Quién custodia tu dinero.",
    body:
      "NexMoni OÜ opera como distribuidor autorizado de ConnectPay UAB, entidad de dinero electrónico supervisada por el Banco de Lituania. Los fondos de los clientes se mantienen salvaguardados y segregados conforme a la normativa de la Unión Europea.",
    rows: [
      { label: "Entidad emisora", value: "ConnectPay UAB" },
      { label: "Licencia EMI", value: "N.º 24 — Bank of Lithuania" },
      { label: "Domicilio del emisor", value: "Algirdo str. 38, Vilna" },
      { label: "Papel de NexMoni OÜ", value: "Distribuidor autorizado" },
    ],
    directives: [
      { code: "PSD2", detail: "Directiva UE 2015/2366 de servicios de pago" },
      { code: "EMD2", detail: "Directiva UE 2009/110/CE de dinero electrónico" },
    ],
  },

  services: {
    eyebrow: "§ 04 — SERVICIOS",
    title: "Lo que puedes hacer con la cuenta.",
    items: [
      {
        n: "01",
        tag: "EUR / USD / GBP",
        title: "Monedero multidivisa",
        body: "Euros, dólares, libras y las principales monedas de América Latina en un mismo saldo.",
      },
      {
        n: "02",
        tag: "IBAN",
        title: "Cuenta IBAN europea",
        body: "Un número de cuenta europeo a tu nombre, operativo en la zona SEPA.",
      },
      {
        n: "03",
        tag: "SEPA / SWIFT",
        title: "Transferencias internacionales",
        body: "Envíos SEPA dentro de la zona euro y SWIFT a más de 200 países.",
      },
      {
        n: "04",
        tag: "FX",
        title: "Cambio de divisas",
        body: "Conversión entre las monedas del monedero a tasas competitivas.",
      },
      {
        n: "05",
        tag: "VISA",
        title: "Tarjetas Visa",
        body: "Tarjetas virtuales y físicas para pagar y retirar efectivo.",
      },
      {
        n: "06",
        tag: "IA / WHATSAPP",
        title: "Asistente por WhatsApp",
        body: "Ordena transferencias por voz a través de un asistente de inteligencia artificial.",
      },
      {
        n: "07",
        tag: "iOS / ANDROID / WEB",
        title: "Aplicaciones",
        body: "Acceso desde móvil y escritorio, con la misma cuenta y el mismo saldo.",
      },
    ],
  },

  compliance: {
    eyebrow: "§ 05 — CUMPLIMIENTO",
    title: "Marcos que nos obligan.",
    items: [
      {
        code: "AMLD4 / AMLD5",
        detail: "Directivas europeas de prevención de blanqueo de capitales",
      },
      { code: "RahaPTS", detail: "Ley estonia de prevención de blanqueo y financiación del terrorismo" },
      { code: "GDPR", detail: "Reglamento europeo de protección de datos" },
      {
        code: "REGLAMENTO (UE) 2015/847",
        detail: "Información que acompaña a las transferencias de fondos",
      },
      {
        code: "SANCIONES INTERNACIONALES",
        detail: "Listas de la Unión Europea, Naciones Unidas y OFAC",
      },
    ],
  },

  contact: {
    eyebrow: "§ 06 — CONTACTO",
    title: "A quién escribir.",
    items: [
      { address: `support@${brand.emailDomain}`, purpose: "Consultas generales y soporte" },
      { address: `legal@${brand.emailDomain}`, purpose: "Asuntos legales" },
      { address: `compliance@${brand.emailDomain}`, purpose: "Cumplimiento normativo" },
      { address: `privacy@${brand.emailDomain}`, purpose: "Protección de datos y privacidad" },
    ],
  },
} as const;
