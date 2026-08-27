/**
 * Español — fuente de la forma del diccionario.
 *
 * Al añadir una clave aquí, los otros tres idiomas dejan de compilar hasta que
 * se traduce. Es intencionado.
 */

export const es = {
  meta: {
    /** Atributo lang del documento. */
    htmlLang: "es",
    /** Locale para Intl: separadores de miles y decimales. */
    numberLocale: "es-ES",
  },

  site: {
    tag: "EUR · EE · UE",
    legal: "NEXMONI OÜ · DINERO ELECTRÓNICO EMITIDO POR CONNECTPAY UAB (EMI N.º 24)",
    compliance: "PSD2 · GDPR",
    version: "v1c-f1a — LITORAL",
    whatsapp: "WhatsApp",
    openAccount: "Descargar la app",
    menu: "Menú",
    languageLabel: "Idioma",
    themeLabel: "Aspecto",
    themeDay: "Claro",
    themeNight: "Oscuro",
  },

  nav: [
    { label: "Cómo funciona", href: "/#como" },
    { label: "Cuenta", href: "/#cuenta" },
    { label: "Precios", href: "/#precios" },
    { label: "Tarifas", href: "/tarifas" },
    { label: "Seguridad", href: "/#seguridad" },
  ],

  pages: {
    home: {
      title: "NexMoni — Tu vida está en dos países. Tu cuenta también.",
      description:
        "Cuenta europea en euros para enviar dinero a Latinoamérica. IBAN a tu nombre, transferencias SEPA y SWIFT, tarjeta Visa. Dinero electrónico emitido por ConnectPay UAB, licencia EMI n.º 24 del Banco de Lituania.",
    },
    fees: {
      title: "Tarifas y calculadora de envíos — NexMoni",
      description:
        "Tarifario completo de NexMoni y calculadora de conversión: comisión, diferencial de cambio y cuánto recibe el destinatario. Sin comisiones ocultas.",
    },
    about: {
      title: "Acerca de NexMoni — NexMoni OÜ, Estonia",
      description:
        "NexMoni OÜ, código de registro 17303472, Tallinn (Estonia). Distribuidor autorizado de ConnectPay UAB, entidad de dinero electrónico con licencia EMI n.º 24 del Banco de Lituania.",
    },
    faq: {
      title: "Preguntas frecuentes — NexMoni",
      description:
        "Cómo enviar dinero, quién emite las tarjetas, plazos SEPA y SWIFT, verificación de identidad, comisiones, seguridad de los fondos y cómo presentar una reclamación.",
    },
  },

  hero: {
    kicker: ["CUENTA EUROPEA", "100% REMOTO", "EMISOR REGULADO EN LA UE"],
    titleTop: "Tu vida está en dos países.",
    titleBottom: "Tu cuenta también.",
    lead:
      "Maneja euros, cambia divisas y envía dinero a los tuyos desde una sola cuenta abierta en la Unión Europea. Sin sucursales, sin letra pequeña.",
    cta: "Descargar la app",
    secondaryCta: "Habla con nosotros por WhatsApp",
    trust: [
      "Dinero electrónico emitido por ConnectPay UAB — licencia EMI n.º 24 del Banco de Lituania",
      "Fondos salvaguardados y segregados según normativa UE",
    ],
    figureBrief:
      "REFERENCIA HERO · COLUMNA VERTICAL A SANGRE, RECORTE CENTRAL ~1:1,9 (ENCUADRA SEGURO EN 3:4) · UNA SOLA FIGURA DE MEDIO CUERPO SOSTENIENDO EL MÓVIL, MIRADA FUERA DE CÁMARA, LUZ LATERAL DURA, FONDO LISO. HALFTONE GRUESO, SIN COLOR.",
  },

  steps: {
    eyebrow: "§ 02 — CÓMO FUNCIONA",
    title: "Tres pasos, no tres semanas.",
    lead: "Sin papeleo, sin sucursales, sin esperar días para tener una cuenta a tu nombre.",
    items: [
      {
        title: "Abre tu cuenta",
        body:
          "Regístrate con tu documento y una selfie. Obtén tu IBAN europeo propio en minutos, sin visitar ninguna sucursal.",
      },
      {
        title: "Verifica tu identidad",
        body:
          "La verificación (KYC) la procesa ConnectPay UAB, entidad autorizada por el Banco de Lituania. Desbloquea todas las funciones y límites más altos.",
      },
      {
        title: "Envía y controla tu dinero",
        body:
          "Transferencias desde tu cuenta y hacia Latinoamérica, tarjetas Visa y cambio de divisas — todo desde una sola app.",
      },
    ],
  },


  features: {
    title: "Una cuenta, dos países, cero fricción.",
    eyebrow: "TODO EN UN SOLO LUGAR",
    items: [
      {
        tag: "SEPA / SWIFT",
        title: "Transferencias sin fronteras",
        body: "SEPA directo desde la UE sin límites. SWIFT y más de 200 países cuando lo necesites.",
      },
      {
        tag: "EUR / USD / GBP",
        title: "Multidivisa real",
        body:
          "Guarda y cambia entre EUR, USD, GBP y muchas otras monedas en un mismo saldo, sin abrir otra cuenta.",
      },
      {
        tag: "IBAN",
        title: "IBAN a tu nombre",
        body:
          "Un número de cuenta europeo propio, para recibir tu nómina o pagos como cualquier residente de la UE.",
      },
      {
        tag: "VISA",
        title: "Tarjeta Visa",
        body: "Visa de débito para pagar hoy mismo. Física y/o virtual para retirar o pagar en persona.",
      },
      {
        tag: "KYC / E2E",
        title: "Seguridad verificable",
        body:
          "Verificación reforzada en cada acceso y cifrado de extremo a extremo. Cumplimos la normativa europea.",
      },
      {
        tag: "FX",
        title: "Cambio de divisa claro",
        body: "Ve la tasa y la comisión antes de confirmar. Nunca sorpresa, nunca escondida.",
      },
    ],
  },

  stats: [
    { figure: "200+", label: "países alcanzables por transferencia o SWIFT" },
    { figure: "N.º 24", label: "licencia EMI de ConnectPay UAB, nuestra entidad emisora" },
    { figure: "PSD2 · GDPR", label: "cumplimiento regulatorio en la Unión Europea" },
  ],

  pricing: {
    eyebrow: "§ 05 — PRECIOS",
    title: "Simple y transparente.",
    lead: "Elige según tu criterio actual. Puedes cambiar de plan cuando quieras.",
    includes: "INCLUYE",
    popular: "MÁS POPULAR",
    feesLink: "Tarifas detalladas",
    feesNote: "Sin comisiones ocultas — todo lo que cobramos, en un solo lugar.",
    plans: [
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
    ],
  },

  testimonial: {
    eyebrow: "§ 06 — TESTIMONIO",
    quote:
      "Antes tardaba días en mandarle dinero a mi mamá y pagaba comisiones que no entendía. Ahora lo hago en minutos y sé exactamente cuánto le llega.",
    author: "Usuaria de NexMoni",
    detail: "Vive en España, envía a Colombia",
    security: [
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
    ],
  },


  signup: {
    fields: [
      { name: "nombre", label: "NOMBRE COMPLETO", placeholder: "¿Cómo te llamas?" },
      { name: "telefono", label: "TELÉFONO", placeholder: "+34 600 000 000" },
      { name: "email", label: "CORREO ELECTRÓNICO", placeholder: "tu@correo.com" },
    ],
    submit: "Enviarme el enlace",
    sending: "Enviando…",
    whatsappNote: "¿Prefieres hablar primero? Escríbenos por WhatsApp.",
    contactEmail: "Escribir por correo",
    contactWhatsapp: "Abrir WhatsApp",
    errors: {
      name: "Escribe tu nombre.",
      phoneMissing: "Escribe tu teléfono.",
      phoneInvalid: "Revisa el número, con prefijo del país.",
      emailMissing: "Escribe tu correo.",
      emailInvalid: "Revisa el correo.",
      submit: "No hemos podido enviar la solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.",
    },
    success: {
      eyebrow: "ENLACE ENVIADO",
      title: "Gracias. Te enviamos el enlace.",
      body:
        "Revisa tu correo — ahí llega el enlace de descarga y los siguientes pasos para verificar tu identidad.",
    },
  },

  /* La descarga es el objetivo del embudo: todo lo demás lleva aquí. */
  download: {
    eyebrow: "DESCARGA",
    title: "Lleva tu cuenta en el bolsillo.",
    lead:
      "Abre la cuenta, verifica tu identidad y envía dinero desde la app. Todo en el móvil, en minutos.",
    soon: "Próximamente",
    appStorePre: "Descárgalo en el",
    appStoreName: "App Store",
    googlePlayPre: "Disponible en",
    googlePlayName: "Google Play",
    qrNote: "Apunta con la cámara de tu móvil",
    qrBrief: "CÓDIGO QR — PENDIENTE DE LAS URL REALES DE LAS TIENDAS",
    deskTitle: "¿Necesitas ayuda?",
    deskNote: "Contacta directamente con nuestro equipo por correo o WhatsApp.",
  },

  /**
   * Cierre de las páginas interiores.
   *
   * La portada terminaba pidiendo la descarga y las otras tres dejaban al
   * lector frente al pie justo cuando acababa de resolver su duda. Cada una
   * trae su propio texto porque el momento en que se lee es distinto: quien
   * termina el tarifario ya sabe el precio, quien termina «Acerca» ya sabe
   * quién custodia el dinero.
   *
   * El enlace secundario lleva siempre a la página interior que al lector le
   * queda por ver, para no repetir el enlace que cada página ya tiene al pie.
   */
  closers: {
    fees: {
      title: "Ya sabes lo que cuesta.",
      lead:
        "Las mismas tarifas que acabas de leer, aplicadas desde la app. Ábrela, verifica tu identidad y envía en minutos.",
      action: "Descargar la app",
      secondary: "Resolver una duda antes",
    },
    about: {
      title: "Ya sabes quién custodia tu dinero.",
      lead:
        "Fondos salvaguardados y segregados en una entidad con licencia del Banco de Lituania. Lo demás ocurre en la app.",
      action: "Descargar la app",
      secondary: "Ver las tarifas",
    },
    faq: {
      title: "¿Resuelto?",
      lead:
        "Si tu duda ya tiene respuesta, el siguiente paso cabe en el móvil: abre la cuenta y envía dinero desde la app.",
      action: "Descargar la app",
      secondary: "Quién custodia tu dinero",
    },
  },

  footer: {
    blurb:
      "Tu vida está en dos países. Tu cuenta también. Cuenta europea, transferencias directas y cero papeleo para que manejes tu dinero a tu manera.",
    columns: [
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
        // ⚠ Las cuatro apuntan al alta porque las páginas no existen todavía.
        title: "TÉRMINOS LEGALES",
        links: [
          { label: "Privacidad", href: "/legal/privacy" },
          { label: "Términos legales", href: "/legal/terms" },
          { label: "AML / KYC", href: "/legal/aml-kyc" },
          { label: "Quejas y reclamaciones", href: "/legal/complaints" },
          { label: "Derechos del consumidor", href: "/legal/consumer-rights" },
          { label: "Prevención de fraude", href: "/legal/fraud-prevention" },
          { label: "Términos de ConnectPay", href: "/connectpay-terms" },
        ],
      },
    ],
  },

  glossary: {
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
    FX: "Cambio de divisa (foreign exchange): la tasa a la que se convierte tu dinero de una moneda a otra.",
    PSD2:
      "Directiva europea de servicios de pago: fija reglas de seguridad y autenticación reforzada en cada operación.",
    GDPR:
      "Reglamento europeo de protección de datos: controla cómo se guardan y usan tus datos personales.",
  },

  fees: {
    eyebrow: "§ 01 — TARIFAS",
    title: "Tarifas detalladas.",
    lead:
      "Sin comisiones ocultas. Cada concepto que cobramos, con su importe, tal y como aparecerá en tu extracto.",
    sidenote: ["Importes en EUR", "Vigentes desde 2026"],
    schedule: [
      {
        label: "Cambio de moneda (FX)",
        note: "Diferencial aplicado sobre la tasa de mercado",
        price: "Spread 1–3% por par",
      },
      {
        label: "Transferencia SEPA",
        note: "Envíos en euros dentro de la zona SEPA",
        price: "1,5% · mín. 0,50 €",
      },
      {
        label: "Transferencia SWIFT",
        note: "Envíos internacionales fuera de la zona euro",
        price: "25,00 €",
      },
      {
        label: "Recarga con tarjeta",
        note: "Añadir fondos con tarjeta de débito o crédito",
        price: "2% del monto",
      },
      { label: "Retiro bancario", note: "Retirada a una cuenta bancaria externa", price: "1,00 €" },
      { label: "Transferencia interna", note: "Entre cuentas NexMoni", price: "Gratis" },
      {
        label: "Mantenimiento de cuenta",
        note: "Cargo periódico por cuenta activa",
        price: "1,00 € / 30 días",
      },
    ],
    terminologyEyebrow: ["TERMINOLOGÍA", "ESTANDARIZADA"],
    terminologyIntro:
      "Usamos el glosario estandarizado del Banco de Lituania, para que puedas comparar nuestras tarifas con las de cualquier otra entidad europea.",
    terminology: [
      { en: "Account management", local: "Mantenimiento de cuenta" },
      { en: "Issuance of a debit card", local: "Emisión de tarjeta de débito" },
      { en: "Cash withdrawal", local: "Retirada de efectivo" },
      { en: "Credit transfer — SEPA", local: "Transferencia SEPA en euros" },
      { en: "Credit transfer — non-SEPA", local: "Transferencia SWIFT fuera de la zona SEPA" },
      {
        en: "Settlement of received payments",
        local: "Abono de pagos recibidos — en euros y en otras monedas",
      },
      { en: "Currency conversion", local: "Cambio de divisa (FX)" },
    ],
    plansLink: "Ver planes",
  },

  calculator: {
    eyebrow: "§ 02 — CALCULADORA",
    title: "Calcula lo que llega.",
    lead:
      "Introduce un importe y verás el desglose completo: nuestra comisión, el diferencial de cambio y cuánto recibe el destinatario. Las mismas tarifas de la tabla de arriba, aplicadas a tu caso.",
    sidenote: ["Cálculo orientativo", "Tarifas del listado superior"],
    noticeStrong: "Tipos de cambio orientativos",
    noticeRest:
      ". No constituyen una oferta en firme: el importe definitivo se fija al confirmar el envío. Las comisiones son las del tarifario publicado arriba.",
    amount: "CANTIDAD",
    from: "DE",
    to: "A",
    amountAria: "Cantidad a enviar",
    comingSoon: "(próximamente)",
    receives: "El destinatario recibe",
    receivesNote: "Total después de comisiones",
    rate: "Tipo de cambio",
    spread: "Sobreprecio en el tipo de cambio",
    spreadNoFx: "Sin cambio de divisa",
    spreadNoteBefore: "Diferencial de ",
    spreadNoteAfter: " sobre la tasa media",
    fee: "Comisión por transferencia",
    total: "Coste total de la transferencia",
    totalNote: "Comisión más sobreprecio de cambio",
    foot: "Cálculo orientativo sobre el tarifario publicado. Consulta la tabla de arriba para el resto de conceptos.",
    badAmount: "Revisa el importe",
    unavailable: "Corredor no disponible",
    sepaOnlyBefore: "Hoy cotizamos envíos en euros dentro de la zona ",
    sepaOnlyAfter: ". El resto de destinos se activará en cuanto cerremos su precio.",
    rails: { sepa: "Transferencia SEPA", swift: "Transferencia SWIFT", internal: "Transferencia interna" },
    quoteErrors: {
      invalidAmount: "Introduce un importe mayor que cero.",
      noCorridor: "Todavía no operamos este envío.",
      corridorPending: "Este corredor abre próximamente. Estamos cerrando su precio.",
      belowFee: "El importe no cubre la comisión mínima de envío.",
    },
  },

  currencies: {
    EUR: "Euro",
    USD: "Dólar estadounidense",
    GBP: "Libra esterlina",
    COP: "Peso colombiano",
    PEN: "Sol peruano",
    DOP: "Peso dominicano",
    MXN: "Peso mexicano",
    BRL: "Real brasileño",
    CLP: "Peso chileno",
    ARS: "Peso argentino",
    BOB: "Boliviano",
    PYG: "Guaraní paraguayo",
    UYU: "Peso uruguayo",
    VES: "Bolívar venezolano",
  },

  about: {
    eyebrow: "§ 01 — ACERCA DE",
    h1: "Acerca de NexMoni",
    subtitle: "NexMoni OÜ — Estonia, Unión Europea",
    companyEyebrow: "DATOS DE LA EMPRESA",
    company: [
      { label: "Razón social", value: "NexMoni OÜ" },
      { label: "Código de registro", value: "17303472" },
      { label: "Domicilio social", value: "Tornimäe tn 5, 10145 Tallinn" },
      { label: "Jurisdicción", value: "República de Estonia, Unión Europea" },
    ],
    missionEyebrow: "§ 02 — NUESTRA MISIÓN",
    missionTitle: "Enviar dinero a casa debería ser tan sencillo como una conversación.",
    missionBody:
      "NexMoni nació para simplificar las transferencias internacionales de dinero para los migrantes y sus familias. Creemos que enviar dinero a casa debería ser tan sencillo como mantener una conversación. Nuestra plataforma conecta Europa con América Latina, permitiendo transferencias rápidas, seguras y asequibles impulsadas por inteligencia artificial.",
    regulatoryEyebrow: "§ 03 — ESTADO REGULATORIO",
    regulatoryTitle: "Quién custodia tu dinero.",
    regulatoryBody:
      "NexMoni OÜ opera como distribuidor autorizado de ConnectPay UAB, entidad de dinero electrónico supervisada por el Banco de Lituania. Los fondos de los clientes se mantienen salvaguardados y segregados conforme a la normativa de la Unión Europea.",
    regulatorySidenote: ["Entidad emisora", "y licencia"],
    regulatory: [
      { label: "Entidad emisora", value: "ConnectPay UAB" },
      { label: "Licencia EMI", value: "N.º 24 — Bank of Lithuania" },
      { label: "Domicilio del emisor", value: "Algirdo str. 38, Vilna" },
      { label: "Papel de NexMoni OÜ", value: "Distribuidor autorizado" },
    ],
    directives: [
      { code: "PSD2", detail: "Directiva UE 2015/2366 de servicios de pago" },
      { code: "EMD2", detail: "Directiva UE 2009/110/CE de dinero electrónico" },
    ],
    servicesEyebrow: "§ 04 — SERVICIOS",
    servicesTitle: "Lo que puedes hacer con la cuenta.",
    services: [
      {
        tag: "EUR / USD / GBP",
        title: "Monedero multidivisa",
        body: "Euros, dólares, libras y las principales monedas de América Latina en un mismo saldo.",
      },
      {
        tag: "IBAN",
        title: "Cuenta IBAN europea",
        body: "Un número de cuenta europeo a tu nombre, operativo en la zona SEPA.",
      },
      {
        tag: "SEPA / SWIFT",
        title: "Transferencias internacionales",
        body: "Envíos SEPA dentro de la zona euro y SWIFT a más de 200 países.",
      },
      {
        tag: "FX",
        title: "Cambio de divisas",
        body: "Conversión entre las monedas del monedero a tasas competitivas.",
      },
      {
        tag: "VISA",
        title: "Tarjetas Visa",
        body: "Tarjetas virtuales y físicas para pagar y retirar efectivo.",
      },
      {
        tag: "IA / WHATSAPP",
        title: "Asistente por WhatsApp",
        body: "Ordena transferencias por voz a través de un asistente de inteligencia artificial.",
      },
      {
        tag: "iOS / ANDROID / WEB",
        title: "Aplicaciones",
        body: "Acceso desde móvil y escritorio, con la misma cuenta y el mismo saldo.",
      },
    ],
    complianceEyebrow: "§ 05 — CUMPLIMIENTO",
    complianceTitle: "Marcos que nos obligan.",
    compliance: [
      { code: "AMLD4 / AMLD5", detail: "Directivas europeas de prevención de blanqueo de capitales" },
      {
        code: "RahaPTS",
        detail: "Ley estonia de prevención de blanqueo y financiación del terrorismo",
      },
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
    contactEyebrow: "§ 06 — CONTACTO",
    contactTitle: "A quién escribir.",
    contact: [
      { address: "support@nexmoni.com", purpose: "Consultas generales y soporte" },
      { address: "legal@nexmoni.com", purpose: "Asuntos legales" },
      { address: "compliance@nexmoni.com", purpose: "Cumplimiento normativo" },
      { address: "privacy@nexmoni.com", purpose: "Protección de datos y privacidad" },
    ],
  },

  faq: {
    eyebrow: "§ 01 — PREGUNTAS FRECUENTES",
    h1: "Preguntas frecuentes",
    subtitle: "Respuestas a las dudas más comunes.",
    sidenoteCount: "preguntas",
    sidenoteHint: "Pulsa para desplegar",
    footnote: "¿No encuentras lo que buscabas? Escríbenos y te respondemos por el mismo canal.",
    feesLink: "Ver tarifas",
    items: [
      {
        q: "¿Cómo bloqueo mi cuenta o congelo mi tarjeta?",
        a: [
          "Desde la propia aplicación, en Tarjetas o en Ajustes, en cualquier momento del día. El bloqueo es inmediato y puedes revertirlo tú mismo.",
          "Si has perdido el acceso a la app, escribe a support@nexmoni.com y lo bloqueamos nosotros.",
        ],
        list: [],
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
        list: [],
      },
      {
        q: "¿Está seguro mi dinero?",
        a: [
          "Los fondos se mantienen salvaguardados y segregados en ConnectPay UAB, conforme a la normativa europea de dinero electrónico.",
          "Las comunicaciones van cifradas en doble capa y cada operación exige autenticación reforzada de cliente (SCA), tal y como obliga la PSD2.",
        ],
        list: [],
      },
      {
        q: "¿Cómo verifico mi identidad (KYC)?",
        a: [
          "Durante el registro, aportando un documento de identidad y una selfie. La verificación la procesa ConnectPay, no NexMoni.",
        ],
        list: [],
      },
      {
        q: "¿Cómo presento una reclamación?",
        a: [
          "Escribe a complaints@nexmoni.com. Respondemos en un plazo máximo de 15 días hábiles.",
          "Si la respuesta no te satisface, puedes dirigirte directamente a ConnectPay UAB como entidad emisora, o al Banco de Lituania como supervisor.",
        ],
        list: [
          { label: "NexMoni OÜ", value: "complaints@nexmoni.com — 15 días hábiles" },
          { label: "Entidad emisora", value: "ConnectPay UAB" },
          { label: "Supervisor", value: "Banco de Lituania — lb.lt" },
        ],
      },
      {
        q: "¿Cómo contacto con soporte?",
        a: [
          "Por el asistente dentro de la aplicación o escribiendo a support@nexmoni.com.",
          "Si detectas un fraude o un cargo que no reconoces, avisa cuanto antes a fraud@nexmoni.com.",
        ],
        list: [],
      },
    ],
  },
  /* ── Maqueta de la aplicación ───────────────────────────────────────────────
     Alimenta el teléfono que se desplaza con la página. Es una REPRESENTACIÓN
     del producto, no una captura: la ficha de la app todavía no existe. */
  phone: {
    eyebrow: "La aplicación",
    title: "Así se ve enviar dinero",
    lead:
      "Cinco pantallas, desde que abres la app hasta que sabes que el dinero llegó. Sigue bajando y el teléfono avanza contigo.",
    disclaimer:
      "Maqueta de producto. Los importes usan los mismos tipos orientativos que la calculadora.",
    steps: [
      { title: "Eliges a quién", body: "Los destinatarios de siempre, arriba. Sin volver a escribir un IBAN nunca más." },
      { title: "Ves el cambio antes de pagar", body: "El tipo se fija al empezar. Lo que ves en esta pantalla es lo que recibe." },
      { title: "El desglose, entero", body: "Comisión y diferencial por separado, en euros. Nada aparece después." },
      { title: "Sigues el envío", body: "Cada paso con su hora. Sabes dónde está el dinero sin llamar a nadie." },
      { title: "Llega, y se nota", body: "Aviso en los dos teléfonos y comprobante descargable con la referencia." },
    ],
    ui: {
      greeting: "Hola, Diego",
      prompt: "¿A quién envías hoy?",
      recent: "Recientes",
      send: "Enviar dinero",
      youSend: "Envías",
      theyGet: "Recibe",
      rate: "Tipo de cambio",
      guaranteed: "Fijado 30 min",
      continue: "Continuar",
      reviewTitle: "Revisa el envío",
      amount: "Importe",
      fee: "Comisión de envío",
      spread: "Diferencial",
      totalPay: "Pagas en total",
      arrives: "Llega",
      confirm: "Confirmar y pagar",
      trackTitle: "En curso",
      received: "Recibido",
      converted: "Convertido a dólares",
      onTheWay: "En camino al banco",
      delivered: "Entregado",
      estimate: "Estimado hoy",
      doneTitle: "Entregado",
      doneNote: "Rosa ya tiene el dinero en su cuenta.",
      reference: "Referencia",
      share: "Descargar comprobante",
    },
  },
  /* Textos alternativos de la fotografía. Se traducen porque describen la
     imagen a quien no puede verla, y eso es contenido, no decoración. */
  photos: {
    band: "Al otro lado",
    bandLead: "El dinero sale de un turno de noche en Europa y termina en una cocina de Guayaquil. Las dos mitades cuentan.",
    ocean: "El Atlántico de noche visto desde gran altura, con las luces de la costa en el borde del encuadre.",
    milan: "Hombre joven en una calle residencial de Milán al anochecer.",
    madrid: "Mujer en la cocina de su piso en Madrid, apoyada en el marco de la puerta.",
    guayaquil: "Mujer mayor en la cocina de su casa en Guayaquil, mirando algo que tiene en las manos.",
    shop: "Interior de una tienda de barrio en la costa ecuatoriana, con la luz entrando por la puerta.",
    captionSend: "Quien envía",
    captionReceive: "Quien recibe",
  },
  feeBar: {
    eyebrow: "Anatomía del envío",
    lead: "A escala: cada tramo ocupa lo que pesa sobre lo que entregas.",
    sends: "Entregas",
    arrives: "Llega",
    converts: "Se convierte",
    fee: "Comisión",
    spread: "Diferencial",
    totalCost: "Coste total",
  },
} as const;
