import type { Dictionary } from "../dictionary";

/**
 * English.
 *
 * ⚠ The regulatory copy (licence attribution, safeguarding, complaints
 *   procedure) carries legal weight. This translation has not been reviewed by
 *   a lawyer — do so before publishing.
 */
export const en: Dictionary = {
  meta: {
    htmlLang: "en",
    numberLocale: "en-GB",
  },

  site: {
    tag: "EUR · EE · EU",
    legal: "NEXMONI OÜ · ELECTRONIC MONEY ISSUED BY CONNECTPAY UAB (EMI NO. 24)",
    compliance: "PSD2 · GDPR",
    version: "v1c-f1a — LITORAL",
    whatsapp: "WhatsApp",
    openAccount: "Get the app",
    menu: "Menu",
    languageLabel: "Language",
    themeLabel: "Appearance",
    themeDay: "Light",
    themeNight: "Dark",
  },

  nav: [
    { label: "How it works", href: "/#como" },
    { label: "Account", href: "/#cuenta" },
    { label: "Plans", href: "/#precios" },
    { label: "Fees", href: "/tarifas" },
    { label: "Security", href: "/#seguridad" },
  ],

  pages: {
    home: {
      title: "NexMoni — Your life spans two countries. So should your account.",
      description:
        "A European euro account for sending money to Latin America. An IBAN in your name, SEPA and SWIFT transfers, a Visa card. Electronic money issued by ConnectPay UAB, EMI licence no. 24 from the Bank of Lithuania.",
    },
    fees: {
      title: "Fees and transfer calculator — NexMoni",
      description:
        "NexMoni's full fee schedule and conversion calculator: our fee, the exchange rate markup and exactly what the recipient gets. No hidden charges.",
    },
    about: {
      title: "About NexMoni — NexMoni OÜ, Estonia",
      description:
        "NexMoni OÜ, registry code 17303472, Tallinn, Estonia. Authorised distributor of ConnectPay UAB, an electronic money institution holding EMI licence no. 24 from the Bank of Lithuania.",
    },
    faq: {
      title: "Frequently asked questions — NexMoni",
      description:
        "How to send money, who issues the cards, SEPA and SWIFT timings, identity verification, fees, how your funds are safeguarded and how to file a complaint.",
    },
  },

  hero: {
    kicker: ["EUROPEAN ACCOUNT", "100% REMOTE", "EU-REGULATED ISSUER"],
    titleTop: "Your life spans two countries.",
    titleBottom: "So should your account.",
    lead:
      "Hold euros, exchange currencies and send money to your family from a single account opened in the European Union. No branches, no small print.",
    cta: "Get the app",
    secondaryCta: "Talk to us on WhatsApp",
    trust: [
      "Electronic money issued by ConnectPay UAB — EMI licence no. 24 from the Bank of Lithuania",
      "Funds safeguarded and segregated under EU rules",
    ],
    figureBrief:
      "HERO REFERENCE · FULL-BLEED VERTICAL COLUMN, CENTRE CROP ~1:1.9 (SAFE AT 3:4) · A SINGLE HALF-LENGTH FIGURE HOLDING A PHONE, GAZE OFF CAMERA, HARD SIDE LIGHT, PLAIN BACKGROUND. COARSE HALFTONE, NO COLOUR.",
  },

  steps: {
    eyebrow: "§ 02 — HOW IT WORKS",
    title: "Three steps, not three weeks.",
    lead: "No paperwork, no branches, no waiting days for an account in your own name.",
    items: [
      {
        title: "Open your account",
        body:
          "Sign up with your ID document and a selfie. Get your own European IBAN in minutes, without setting foot in a branch.",
      },
      {
        title: "Verify your identity",
        body:
          "Verification (KYC) is handled by ConnectPay UAB, authorised by the Bank of Lithuania. It unlocks every feature and higher limits.",
      },
      {
        title: "Send and manage your money",
        body:
          "Transfers from your account and on to Latin America, Visa cards and currency exchange — all from a single app.",
      },
    ],
  },


  features: {
    title: "One account, two countries, zero friction.",
    eyebrow: "ALL IN ONE PLACE",
    items: [
      {
        tag: "SEPA / SWIFT",
        title: "Transfers without borders",
        body: "SEPA straight from the EU with no limits. SWIFT and 200+ countries whenever you need them.",
      },
      {
        tag: "EUR / USD / GBP",
        title: "Genuinely multi-currency",
        body:
          "Hold and exchange EUR, USD, GBP and many other currencies in one balance, without opening another account.",
      },
      {
        tag: "IBAN",
        title: "An IBAN in your name",
        body:
          "Your own European account number, so you can receive your salary or payments like any EU resident.",
      },
      {
        tag: "VISA",
        title: "Visa card",
        body: "A Visa debit card you can use today. Physical and/or virtual, to withdraw or pay in person.",
      },
      {
        tag: "KYC / E2E",
        title: "Security you can verify",
        body:
          "Strong authentication on every login and end-to-end encryption. We meet European requirements.",
      },
      {
        tag: "FX",
        title: "Clear currency exchange",
        body: "See the rate and the fee before you confirm. Never a surprise, never buried.",
      },
    ],
  },

  stats: [
    { figure: "200+", label: "countries reachable by transfer or SWIFT" },
    { figure: "No. 24", label: "EMI licence of ConnectPay UAB, our issuing institution" },
    { figure: "PSD2 · GDPR", label: "regulatory compliance across the European Union" },
  ],

  pricing: {
    eyebrow: "§ 05 — PLANS",
    title: "Simple and transparent.",
    lead: "Pick what suits you now. You can change plan whenever you like.",
    includes: "INCLUDES",
    popular: "MOST POPULAR",
    feesLink: "Detailed fees",
    feesNote: "No hidden charges — everything we bill, in one place.",
    plans: [
      {
        name: "Standard",
        price: "Free",
        pitch: "Everything you need to send money home, simply.",
        cta: "Choose Standard",
        items: [
          "EUR IBAN account",
          "SEPA transfers",
          "Multi-currency wallet",
          "Virtual + physical Visa card",
        ],
      },
      {
        name: "Plus",
        price: "€4.99/month",
        pitch: "For people who send often and want better rates.",
        cta: "Choose Plus",
        items: ["Everything in Standard", "SWIFT transfers", "Reduced exchange rates", "Higher limits"],
      },
      {
        name: "Premium",
        price: "€9.99/month",
        pitch: "The highest tier and the best terms for your money.",
        cta: "Choose Premium",
        items: [
          "Everything in Plus",
          "Unlimited transfers",
          "Dedicated account manager",
          "Priority support",
        ],
      },
    ],
  },

  testimonial: {
    eyebrow: "§ 06 — TESTIMONIAL",
    quote:
      "It used to take days to send money to my mum, and I paid fees I didn't understand. Now it takes minutes and I know exactly how much reaches her.",
    author: "NexMoni customer",
    detail: "Lives in Spain, sends to Colombia",
    security: [
      {
        title: "Protected transfers",
        body: "Encrypted connection and end-to-end tracking of every transaction.",
      },
      {
        title: "Protected funds",
        body: "Your money is safeguarded and segregated at ConnectPay UAB, under EU rules.",
      },
      {
        title: "Strong verification",
        body: "KYC keeps your account secure by identifying every transaction.",
      },
    ],
  },


  signup: {
    fields: [
      { name: "nombre", label: "FULL NAME", placeholder: "What's your name?" },
      { name: "telefono", label: "PHONE", placeholder: "+34 600 000 000" },
      { name: "email", label: "EMAIL", placeholder: "you@email.com" },
    ],
    submit: "Send me the link",
    sending: "Sending…",
    whatsappNote: "Rather talk first? Message us on WhatsApp.",
    errors: {
      name: "Enter your name.",
      phoneMissing: "Enter your phone number.",
      phoneInvalid: "Check the number, including the country code.",
      emailMissing: "Enter your email.",
      emailInvalid: "Check the email address.",
      submit: "We couldn't send your request. Try again or message us on WhatsApp.",
    },
    success: {
      eyebrow: "LINK SENT",
      title: "Thank you. The link is on its way.",
      body:
        "Check your email — the download link is there, along with the next steps to verify your identity.",
    },
  },

  /* La descarga es el objetivo del embudo: todo lo demás lleva aquí. */
  download: {
    eyebrow: "DOWNLOAD",
    title: "Carry your account in your pocket.",
    lead:
      "Open the account, verify your identity and send money from the app. All on your phone, in minutes.",
    soon: "Coming soon",
    appStorePre: "Download on the",
    appStoreName: "App Store",
    googlePlayPre: "Get it on",
    googlePlayName: "Google Play",
    qrNote: "Point your phone's camera at it",
    qrBrief: "QR CODE — PENDING THE REAL STORE URLS",
    deskTitle: "On a computer?",
    deskNote: "Leave your details and we'll send you the download link.",
  },

  closers: {
    fees: {
      title: "Now you know what it costs.",
      lead:
        "The same fees you have just read, applied from the app. Open it, verify your identity and send in minutes.",
      action: "Download the app",
      secondary: "Settle a question first",
    },
    about: {
      title: "Now you know who holds your money.",
      lead:
        "Funds safeguarded and segregated at an institution licensed by the Bank of Lithuania. Everything else happens in the app.",
      action: "Download the app",
      secondary: "See the fees",
    },
    faq: {
      title: "Answered?",
      lead:
        "If your question is settled, the next step fits in your pocket: open the account and send money from the app.",
      action: "Download the app",
      secondary: "Who holds your money",
    },
  },

  footer: {
    blurb:
      "Your life spans two countries. So should your account. A European account, direct transfers and zero paperwork, so you handle your money your way.",
    columns: [
      {
        title: "PRODUCTS",
        links: [
          { label: "Features", href: "/#cuenta" },
          { label: "Plans", href: "/#precios" },
          { label: "Fees", href: "/tarifas" },
          { label: "Security", href: "/#seguridad" },
        ],
      },
      {
        title: "COMPANY",
        links: [
          { label: "About us", href: "/acerca" },
          { label: "FAQ", href: "/preguntas-frecuentes" },
          { label: "Contact", href: "/acerca#contacto" },
          { label: "support@nexmoni.com", href: "mailto:support@nexmoni.com" },
        ],
      },
      {
        title: "LEGAL",
        links: [
          { label: "Privacy", href: "/#descargar" },
          { label: "Terms", href: "/#descargar" },
          { label: "AML / KYC", href: "/#descargar" },
          { label: "Complaints", href: "/#descargar" },
        ],
      },
    ],
  },

  glossary: {
    SEPA:
      "Single Euro Payments Area: euro transfers between EU countries on the same terms as a domestic one.",
    SWIFT:
      "The international banking messaging network. Used to send money outside the euro area, to 200+ countries.",
    IBAN:
      "International Bank Account Number. Yours is European and in your name: use it to receive your salary or payments.",
    KYC:
      "'Know your customer': the identity check European rules require before you can operate your account.",
    AML:
      "Anti-money laundering: the legal controls that establish where the money lawfully came from.",
    E2E: "End-to-end encryption: only you and the destination can read the data; nobody in between.",
    FX: "Foreign exchange: the rate at which your money is converted from one currency to another.",
    PSD2:
      "The EU payment services directive: it sets security rules and strong authentication for every transaction.",
    GDPR: "The EU data protection regulation: it governs how your personal data is stored and used.",
  },

  fees: {
    eyebrow: "§ 01 — FEES",
    title: "Detailed fees.",
    lead:
      "No hidden charges. Every item we bill, with its amount, exactly as it will appear on your statement.",
    sidenote: ["Amounts in EUR", "Effective from 2026"],
    schedule: [
      {
        label: "Currency exchange (FX)",
        note: "Markup applied over the market rate",
        price: "1–3% spread per pair",
      },
      {
        label: "SEPA transfer",
        note: "Euro transfers within the SEPA area",
        price: "1.5% · min. €0.50",
      },
      {
        label: "SWIFT transfer",
        note: "International transfers outside the euro area",
        price: "€25.00",
      },
      { label: "Card top-up", note: "Add funds with a debit or credit card", price: "2% of amount" },
      { label: "Bank withdrawal", note: "Withdrawal to an external bank account", price: "€1.00" },
      { label: "Internal transfer", note: "Between NexMoni accounts", price: "Free" },
      {
        label: "Account maintenance",
        note: "Recurring charge for an active account",
        price: "€1.00 / 30 days",
      },
    ],
    terminologyEyebrow: ["STANDARDISED", "TERMINOLOGY"],
    terminologyIntro:
      "We use the Bank of Lithuania's standardised glossary, so you can compare our fees against any other European institution.",
    terminology: [
      { en: "Account management", local: "The recurring charge for keeping the account open" },
      { en: "Issuance of a debit card", local: "Issuing a physical or virtual Visa card" },
      { en: "Cash withdrawal", local: "Taking cash out at an ATM" },
      { en: "Credit transfer — SEPA", local: "A euro transfer inside the SEPA area" },
      { en: "Credit transfer — non-SEPA", local: "A SWIFT transfer outside the SEPA area" },
      {
        en: "Settlement of received payments",
        local: "Crediting incoming payments — in euros and other currencies",
      },
      { en: "Currency conversion", local: "Exchanging one currency for another (FX)" },
    ],
    plansLink: "See plans",
  },

  calculator: {
    eyebrow: "§ 02 — CALCULATOR",
    title: "Work out what arrives.",
    lead:
      "Enter an amount and you'll see the full breakdown: our fee, the exchange rate markup and what the recipient receives. The same fees as the table above, applied to your case.",
    sidenote: ["Indicative calculation", "Fees from the list above"],
    noticeStrong: "Indicative exchange rates",
    noticeRest:
      ". They are not a firm offer: the final amount is set when you confirm the transfer. The fees are those published above.",
    amount: "AMOUNT",
    from: "FROM",
    to: "TO",
    amountAria: "Amount to send",
    comingSoon: "(coming soon)",
    receives: "The recipient gets",
    receivesNote: "Total after fees",
    rate: "Exchange rate",
    spread: "Exchange rate markup",
    spreadNoFx: "No currency exchange",
    spreadNoteBefore: "A ",
    spreadNoteAfter: " spread over the mid-market rate",
    fee: "Transfer fee",
    total: "Total cost of the transfer",
    totalNote: "Fee plus exchange rate markup",
    foot: "Indicative calculation based on the published fee schedule. See the table above for all other items.",
    badAmount: "Check the amount",
    unavailable: "Corridor unavailable",
    sepaOnlyBefore: "Today we quote euro transfers inside the ",
    sepaOnlyAfter: " area. Other destinations open as soon as we settle their pricing.",
    rails: { sepa: "SEPA transfer", swift: "SWIFT transfer", internal: "Internal transfer" },
    quoteErrors: {
      invalidAmount: "Enter an amount greater than zero.",
      noCorridor: "We don't operate this transfer yet.",
      corridorPending: "This corridor opens soon. We're still settling its pricing.",
      belowFee: "The amount doesn't cover the minimum transfer fee.",
    },
  },

  currencies: {
    EUR: "Euro",
    USD: "US dollar",
    GBP: "Pound sterling",
    COP: "Colombian peso",
    PEN: "Peruvian sol",
    DOP: "Dominican peso",
    MXN: "Mexican peso",
    BRL: "Brazilian real",
    CLP: "Chilean peso",
    ARS: "Argentine peso",
    BOB: "Bolivian boliviano",
    PYG: "Paraguayan guaraní",
    UYU: "Uruguayan peso",
    VES: "Venezuelan bolívar",
  },

  about: {
    eyebrow: "§ 01 — ABOUT",
    h1: "About NexMoni",
    subtitle: "NexMoni OÜ — Estonia, European Union",
    companyEyebrow: "COMPANY DETAILS",
    company: [
      { label: "Legal name", value: "NexMoni OÜ" },
      { label: "Registry code", value: "17303472" },
      { label: "Registered office", value: "Tornimäe tn 5, 10145 Tallinn" },
      { label: "Jurisdiction", value: "Republic of Estonia, European Union" },
    ],
    missionEyebrow: "§ 02 — OUR MISSION",
    missionTitle: "Sending money home should be as simple as a conversation.",
    missionBody:
      "NexMoni was founded to simplify international money transfers for migrants and their families. We believe sending money home should be as simple as having a conversation. Our platform connects Europe with Latin America, enabling fast, secure and affordable transfers powered by artificial intelligence.",
    regulatoryEyebrow: "§ 03 — REGULATORY STATUS",
    regulatoryTitle: "Who holds your money.",
    regulatoryBody:
      "NexMoni OÜ operates as an authorised distributor of ConnectPay UAB, an electronic money institution supervised by the Bank of Lithuania. Customer funds are safeguarded and held segregated in accordance with European Union rules.",
    regulatorySidenote: ["Issuing institution", "and licence"],
    regulatory: [
      { label: "Issuing institution", value: "ConnectPay UAB" },
      { label: "EMI licence", value: "No. 24 — Bank of Lithuania" },
      { label: "Issuer's address", value: "Algirdo str. 38, Vilnius" },
      { label: "NexMoni OÜ's role", value: "Authorised distributor" },
    ],
    directives: [
      { code: "PSD2", detail: "EU Directive 2015/2366 on payment services" },
      { code: "EMD2", detail: "EU Directive 2009/110/EC on electronic money" },
    ],
    servicesEyebrow: "§ 04 — SERVICES",
    servicesTitle: "What you can do with the account.",
    services: [
      {
        tag: "EUR / USD / GBP",
        title: "Multi-currency wallet",
        body: "Euros, dollars, pounds and the main Latin American currencies in one balance.",
      },
      {
        tag: "IBAN",
        title: "European IBAN account",
        body: "A European account number in your name, operating across the SEPA area.",
      },
      {
        tag: "SEPA / SWIFT",
        title: "International transfers",
        body: "SEPA transfers within the euro area and SWIFT to more than 200 countries.",
      },
      {
        tag: "FX",
        title: "Currency exchange",
        body: "Conversion between the currencies in your wallet at competitive rates.",
      },
      {
        tag: "VISA",
        title: "Visa cards",
        body: "Virtual and physical cards for paying and withdrawing cash.",
      },
      {
        tag: "AI / WHATSAPP",
        title: "WhatsApp assistant",
        body: "Order transfers by voice through an artificial intelligence assistant.",
      },
      {
        tag: "iOS / ANDROID / WEB",
        title: "Applications",
        body: "Access from mobile and desktop, with the same account and the same balance.",
      },
    ],
    complianceEyebrow: "§ 05 — COMPLIANCE",
    complianceTitle: "The frameworks that bind us.",
    compliance: [
      { code: "AMLD4 / AMLD5", detail: "European anti-money-laundering directives" },
      {
        code: "RahaPTS",
        detail: "Estonian money laundering and terrorist financing prevention act",
      },
      { code: "GDPR", detail: "European data protection regulation" },
      {
        code: "REGULATION (EU) 2015/847",
        detail: "Information accompanying transfers of funds",
      },
      {
        code: "INTERNATIONAL SANCTIONS",
        detail: "European Union, United Nations and OFAC lists",
      },
    ],
    contactEyebrow: "§ 06 — CONTACT",
    contactTitle: "Who to write to.",
    contact: [
      { address: "support@nexmoni.com", purpose: "General enquiries and support" },
      { address: "legal@nexmoni.com", purpose: "Legal matters" },
      { address: "compliance@nexmoni.com", purpose: "Regulatory compliance" },
      { address: "privacy@nexmoni.com", purpose: "Data protection and privacy" },
    ],
  },

  faq: {
    eyebrow: "§ 01 — FREQUENTLY ASKED QUESTIONS",
    h1: "Frequently asked questions",
    subtitle: "Answers to the most common questions.",
    sidenoteCount: "questions",
    sidenoteHint: "Tap to expand",
    footnote: "Didn't find what you were looking for? Write to us and we'll reply on the same channel.",
    feesLink: "See fees",
    items: [
      {
        q: "How do I block my account or freeze my card?",
        a: [
          "From the app itself, under Cards or Settings, at any hour. The block takes effect immediately and you can undo it yourself.",
          "If you've lost access to the app, write to support@nexmoni.com and we'll block it for you.",
        ],
        list: [],
      },
      {
        q: "Who issues the money and the cards?",
        a: [
          "NexMoni OÜ acts as a distributor. The electronic money and the cards are issued by authorised institutions:",
        ],
        list: [
          { label: "Electronic money", value: "ConnectPay UAB — EMI licence no. 24" },
          { label: "Visa cards", value: "Wallester AS" },
          { label: "NexMoni OÜ", value: "Authorised distributor" },
        ],
      },
      {
        q: "How do I send money?",
        a: [
          "From Send: choose the recipient, enter the amount and confirm. You see the full breakdown before confirming.",
          "Timings depend on the rail:",
        ],
        list: [
          { label: "SEPA", value: "From minutes to 1 business day" },
          { label: "SWIFT", value: "From 1 to 5 business days" },
        ],
      },
      {
        q: "What are the fees?",
        a: [
          "Every fee is shown before you confirm the transaction: nothing surfaces afterwards.",
          "The full schedule is in the fees section and also arrives in your welcome email.",
        ],
        list: [],
      },
      {
        q: "Is my money safe?",
        a: [
          "Funds are safeguarded and held segregated at ConnectPay UAB, in accordance with European electronic money rules.",
          "Communications are encrypted in two layers and every transaction requires strong customer authentication (SCA), as PSD2 requires.",
        ],
        list: [],
      },
      {
        q: "How do I verify my identity (KYC)?",
        a: [
          "During sign-up, by providing an identity document and a selfie. Verification is handled by ConnectPay, not NexMoni.",
        ],
        list: [],
      },
      {
        q: "How do I file a complaint?",
        a: [
          "Write to complaints@nexmoni.com. We respond within 15 business days at the latest.",
          "If our answer doesn't satisfy you, you may go directly to ConnectPay UAB as the issuing institution, or to the Bank of Lithuania as supervisor.",
        ],
        list: [
          { label: "NexMoni OÜ", value: "complaints@nexmoni.com — 15 business days" },
          { label: "Issuing institution", value: "ConnectPay UAB" },
          { label: "Supervisor", value: "Bank of Lithuania — lb.lt" },
        ],
      },
      {
        q: "How do I contact support?",
        a: [
          "Through the in-app assistant or by writing to support@nexmoni.com.",
          "If you spot fraud or a charge you don't recognise, tell fraud@nexmoni.com as soon as possible.",
        ],
        list: [],
      },
    ],
  },
  phone: {
    eyebrow: "The app",
    title: "This is what sending looks like",
    lead:
      "Five screens, from opening the app to knowing the money landed. Keep scrolling and the phone moves with you.",
    disclaimer:
      "Product mock-up. Amounts use the same indicative rates as the calculator.",
    steps: [
      { title: "Pick who", body: "The people you always send to, right at the top. No retyping an IBAN ever again." },
      { title: "See the rate before you pay", body: "The rate is locked when you start. What this screen shows is what they get." },
      { title: "The whole breakdown", body: "Fee and spread listed separately, in euros. Nothing appears afterwards." },
      { title: "Follow the transfer", body: "Every step with its timestamp. You know where the money is without calling anyone." },
      { title: "It lands, and you know it", body: "Both phones get a notice, and the receipt with the reference is downloadable." },
    ],
    ui: {
      greeting: "Hi, Diego",
      prompt: "Who are you sending to today?",
      recent: "Recent",
      send: "Send money",
      youSend: "You send",
      theyGet: "They get",
      rate: "Exchange rate",
      guaranteed: "Locked for 30 min",
      continue: "Continue",
      reviewTitle: "Check the transfer",
      amount: "Amount",
      fee: "Sending fee",
      spread: "Spread",
      totalPay: "You pay in total",
      arrives: "Arrives",
      confirm: "Confirm and pay",
      trackTitle: "In progress",
      received: "Received",
      converted: "Converted to dollars",
      onTheWay: "On the way to the bank",
      delivered: "Delivered",
      estimate: "Estimated today",
      doneTitle: "Delivered",
      doneNote: "Rosa already has the money in her account.",
      reference: "Reference",
      share: "Download receipt",
    },
  },
  photos: {
    band: "The other side",
    bandLead: "The money leaves a night shift in Europe and ends up in a kitchen in Guayaquil. Both halves count.",
    ocean: "The Atlantic at night from high altitude, coastal lights along the edge of the frame.",
    milan: "A young man on a residential street in Milan at dusk.",
    madrid: "A woman in the kitchen of her flat in Madrid, leaning against the doorframe.",
    guayaquil: "An older woman in her kitchen in Guayaquil, looking at something in her hands.",
    shop: "The inside of a neighbourhood shop on the Ecuadorian coast, light coming through the doorway.",
    captionSend: "Who sends",
    captionReceive: "Who receives",
  },
  feeBar: {
    eyebrow: "Anatomy of the transfer",
    lead: "To scale: each band is as wide as its share of what you hand over.",
    sends: "You hand over",
    arrives: "Arrives",
    converts: "Converted",
    fee: "Fee",
    spread: "Spread",
    totalCost: "Total cost",
  },
};
