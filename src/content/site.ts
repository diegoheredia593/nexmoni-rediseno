/**
 * Contenido de la landing. Copy extraído del prototipo de diseño
 * (design_handoff_nextmoni_landing). Editar aquí, no en los componentes.
 */

/**
 * ⚖ Atribución de la licencia — leer antes de tocar nada de esto.
 *
 * NexMoni OÜ NO tiene licencia propia: es distribuidor autorizado de
 * ConnectPay UAB, que es quien posee la licencia EMI n.º 24 del Banco de
 * Lituania y quien emite el dinero electrónico. Cualquier texto que dé a
 * entender que la licencia es nuestra es una declaración falsa ante el
 * supervisor. Al redactar copy nuevo, nombrar siempre al emisor.
 */
export const site = {
  name: "NexMoni",
  meta: "EUR · EE · UE",
  legal: "NEXMONI OÜ · DINERO ELECTRÓNICO EMITIDO POR CONNECTPAY UAB (EMI N.º 24)",
  compliance: "PSD2 · GDPR",
  version: "v1c-f1a — ACERO",
  whatsapp: "#abrir",
} as const;

export const nav = [
  { label: "Cómo funciona", href: "/#como" },
  { label: "Cuenta", href: "/#cuenta" },
  { label: "Precios", href: "/#precios" },
  { label: "Tarifas", href: "/tarifas" },
  { label: "Seguridad", href: "/#seguridad" },
] as const;

export const hero = {
  kicker: ["CUENTA EUROPEA", "100% REMOTO", "EMISOR REGULADO EN LA UE"],
  titleTop: "Tu vida está en dos países.",
  titleBottom: "Tu cuenta también.",
  lead:
    "Maneja euros, cambia divisas y envía dinero a los tuyos desde una sola cuenta abierta en la Unión Europea. Sin sucursales, sin letra pequeña.",
  cta: "Abrir cuenta gratis",
  secondaryCta: "Habla con nosotros por WhatsApp",
  trust: [
    {
      n: "01",
      body: "Dinero electrónico emitido por ConnectPay UAB — licencia EMI n.º 24 del Banco de Lituania",
    },
    { n: "02", body: "Fondos salvaguardados y segregados según normativa UE" },
  ],
  figure: {
    label: "FIG. 01 — HERO",
    coords: "40.4168 N / 3.7038 W",
    brief:
      "REFERENCIA HERO · COLUMNA VERTICAL A SANGRE, RECORTE CENTRAL ~1:1,9 (ENCUADRA SEGURO EN 3:4) · UNA SOLA FIGURA DE MEDIO CUERPO SOSTENIENDO EL MÓVIL, MIRADA FUERA DE CÁMARA, LUZ LATERAL DURA, FONDO LISO. HALFTONE GRUESO, SIN COLOR.",
  },
} as const;

export const steps = [
  {
    n: "01",
    title: "Abre tu cuenta",
    body:
      "Regístrate con tu documento y una selfie. Obtén tu IBAN europeo propio en minutos, sin visitar ninguna sucursal.",
  },
  {
    n: "02",
    title: "Verifica tu identidad",
    body:
      "La verificación (KYC) la procesa ConnectPay UAB, entidad autorizada por el Banco de Lituania. Desbloquea todas las funciones y límites más altos.",
  },
  {
    n: "03",
    title: "Envía y controla tu dinero",
    body:
      "Transferencias desde tu cuenta y hacia Latinoamérica, tarjetas Visa y cambio de divisas — todo desde una sola app.",
  },
] as const;

export const features = [
  {
    n: "01",
    tag: "SEPA / SWIFT",
    title: "Transferencias sin fronteras",
    body: "SEPA directo desde la UE sin límites. SWIFT y más de 200 países cuando lo necesites.",
  },
  {
    n: "02",
    tag: "EUR / USD / GBP",
    title: "Multidivisa real",
    body:
      "Guarda y cambia entre EUR, USD, GBP y muchas otras monedas en un mismo saldo, sin abrir otra cuenta.",
  },
  {
    n: "03",
    tag: "IBAN",
    title: "IBAN a tu nombre",
    body:
      "Un número de cuenta europeo propio, para recibir tu nómina o pagos como cualquier residente de la UE.",
  },
  {
    n: "04",
    tag: "VISA",
    title: "Tarjeta Visa",
    body: "Visa de débito para pagar hoy mismo. Física y/o virtual para retirar o pagar en persona.",
  },
  {
    n: "05",
    tag: "KYC / E2E",
    title: "Seguridad verificable",
    body:
      "Verificación reforzada en cada acceso y cifrado de extremo a extremo. Cumplimos la normativa europea.",
  },
  {
    n: "06",
    tag: "FX",
    title: "Cambio de divisa claro",
    body: "Ve la tasa y la comisión antes de confirmar. Nunca sorpresa, nunca escondida.",
  },
] as const;

export const stats = [
  { figure: "200+", label: "países alcanzables por transferencia o SWIFT" },
  { figure: "N.º 24", label: "licencia EMI de ConnectPay UAB, nuestra entidad emisora" },
  { figure: "PSD2 · GDPR", label: "cumplimiento regulatorio en la Unión Europea" },
] as const;

/** Plan destacado: recibe la barra superior ámbar y el distintivo "MÁS POPULAR". */
export const featuredPlan: "Standard" | "Plus" | "Premium" = "Plus";

export const plans = [
  {
    name: "Standard",
    price: "Gratis",
    pitch: "Todo lo esencial para enviar dinero a casa de forma sencilla.",
    cta: "Elegir Standard",
    items: [
      "Cuenta IBAN EUR",
      "Transferencias SEPA",
      "Monedero multidivisa",
      "Tarjeta Visa virtual + física",
    ],
  },
  {
    name: "Plus",
    price: "€4,99/mes",
    pitch: "Para quienes envían con frecuencia y quieren mejores tarifas.",
    cta: "Elegir Plus",
    items: [
      "Todo lo de Standard",
      "Transferencias SWIFT",
      "Tasas de cambio reducidas",
      "Límites ampliados",
    ],
  },
  {
    name: "Premium",
    price: "€9,99/mes",
    pitch: "Un máximo nivel y las mejores condiciones para tu dinero.",
    cta: "Elegir Premium",
    items: [
      "Todo lo de Plus",
      "Envíos ilimitados",
      "Gestor de cuenta dedicado",
      "Prioridad en soporte",
    ],
  },
] as const;

export const security = [
  {
    title: "Envíos protegidos",
    body: "Conexión cifrada y seguimiento de cada operación de principio a fin.",
  },
  {
    title: "Fondos protegidos",
    body:
      "Tu dinero queda salvaguardado y segregado en ConnectPay UAB, conforme a la normativa de la UE.",
  },
  {
    title: "Verificación reforzada",
    body: "KYC para mantener tu cuenta segura, identificando cada operación.",
  },
] as const;

export const testimonial = {
  quote:
    "Antes tardaba días en mandarle dinero a mi mamá y pagaba comisiones que no entendía. Ahora lo hago en minutos y sé exactamente cuánto le llega.",
  attribution: ["Usuaria de NexMoni", "Vive en España, envía a Colombia"],
} as const;

export const leadFields = [
  { name: "nombre", label: "NOMBRE COMPLETO", ph: "¿Cómo te llamas?", type: "text" },
  { name: "telefono", label: "TELÉFONO", ph: "+34 600 000 000", type: "tel" },
  { name: "email", label: "CORREO ELECTRÓNICO", ph: "tu@correo.com", type: "email" },
] as const;

export const footerColumns = [
  {
    title: "PRODUCTOS",
    links: [
      { label: "Funciones", href: "/#cuenta" },
      { label: "Precios", href: "/#precios" },
      { label: "Comisiones", href: "/tarifas" },
      { label: "Seguridad", href: "/#seguridad" },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { label: "Sobre nosotros", href: "/acerca" },
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
      { label: "Contacto", href: "/acerca#contacto" },
      { label: "support@nexmoni.com", href: "mailto:support@nexmoni.com" },
    ],
  },
  {
    title: "TÉRMINOS LEGALES",
    links: [
      { label: "Privacidad", href: "#abrir" },
      { label: "Términos legales", href: "#abrir" },
      { label: "AML / KYC", href: "#abrir" },
      { label: "Quejas y reclamaciones", href: "#abrir" },
    ],
  },
] as const;

/** Jerga regulada explicada en los tooltips del glosario. */
export const glossary: Record<string, string> = {
  SEPA:
    "Zona Única de Pagos en Euros: transferencias en euros entre países de la UE, con las mismas condiciones que una nacional.",
  SWIFT:
    "Red internacional de mensajería bancaria. Se usa para enviar dinero fuera de la zona euro, a más de 200 países.",
  IBAN:
    "Número de cuenta bancaria internacional. El tuyo es europeo y va a tu nombre: sirve para recibir tu nómina o pagos.",
  KYC:
    "«Conoce a tu cliente»: la verificación de identidad que exige la normativa europea antes de operar con tu cuenta.",
  AML:
    "Prevención de blanqueo de capitales: los controles legales que aseguran el origen lícito del dinero.",
  E2E: "Cifrado de extremo a extremo: solo tú y el destino pueden leer los datos; nadie por el camino.",
  FX:
    "Cambio de divisa (foreign exchange): la tasa a la que se convierte tu dinero de una moneda a otra.",
  PSD2:
    "Directiva europea de servicios de pago: fija reglas de seguridad y autenticación reforzada en cada operación.",
  GDPR:
    "Reglamento europeo de protección de datos: controla cómo se guardan y usan tus datos personales.",
};
