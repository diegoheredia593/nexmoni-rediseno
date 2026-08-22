import type { Dictionary } from "../dictionary";

/**
 * Lietuvių kalba.
 *
 * ⚠⚠ ESTA TRADUCCIÓN NECESITA REVISIÓN NATIVA ANTES DE PUBLICAR.
 *
 *   Es la única de las cuatro que no puedo dar por buena sin que la lea un
 *   hablante nativo, y encima es el idioma del supervisor: el Banco de Lituania
 *   lee lituano. Dos riesgos concretos:
 *
 *   1. La terminología regulada (elektroninių pinigų įstaiga, apsaugotos ir
 *      atskirtos lėšos, tapatybės nustatymas) tiene traducción oficial fijada
 *      en la normativa lituana. La de aquí es razonable pero no verificada
 *      contra los textos legales.
 *   2. El lituano declina: los nombres propios cambian de forma según el caso
 *      gramatical. Puede haber concordancias mal resueltas en frases donde se
 *      mezclan nombres de empresa con preposiciones.
 */
export const lt: Dictionary = {
  meta: {
    htmlLang: "lt",
    numberLocale: "lt-LT",
  },

  site: {
    tag: "EUR · EE · ES",
    legal: "NEXMONI OÜ · ELEKTRONINIUS PINIGUS LEIDŽIA CONNECTPAY UAB (EPĮ NR. 24)",
    compliance: "PSD2 · BDAR",
    version: "v1c-f1a — LITORAL",
    whatsapp: "WhatsApp",
    openAccount: "Atsisiųsti programėlę",
    menu: "Meniu",
    languageLabel: "Kalba",
    themeLabel: "Išvaizda",
    themeDay: "Šviesi",
    themeNight: "Tamsi",
  },

  nav: [
    { label: "Kaip veikia", href: "/#como" },
    { label: "Sąskaita", href: "/#cuenta" },
    { label: "Planai", href: "/#precios" },
    { label: "Įkainiai", href: "/tarifas" },
    { label: "Saugumas", href: "/#seguridad" },
  ],

  pages: {
    home: {
      title: "NexMoni — Tavo gyvenimas dviejose šalyse. Tavo sąskaita irgi.",
      description:
        "Europos sąskaita eurais pinigams į Lotynų Ameriką siųsti. IBAN tavo vardu, SEPA ir SWIFT pavedimai, Visa kortelė. Elektroninius pinigus leidžia ConnectPay UAB, EPĮ licencija Nr. 24, išduota Lietuvos banko.",
    },
    fees: {
      title: "Įkainiai ir pervedimų skaičiuoklė — NexMoni",
      description:
        "Pilnas NexMoni įkainių sąrašas ir konvertavimo skaičiuoklė: mūsų mokestis, valiutos kurso antkainis ir kiek gauna gavėjas. Jokių paslėptų mokesčių.",
    },
    about: {
      title: "Apie NexMoni — NexMoni OÜ, Estija",
      description:
        "NexMoni OÜ, registracijos kodas 17303472, Talinas, Estija. Įgaliotoji ConnectPay UAB platintoja; ConnectPay UAB yra elektroninių pinigų įstaiga, turinti Lietuvos banko išduotą EPĮ licenciją Nr. 24.",
    },
    faq: {
      title: "Dažniausiai užduodami klausimai — NexMoni",
      description:
        "Kaip siųsti pinigus, kas leidžia korteles, SEPA ir SWIFT terminai, tapatybės nustatymas, mokesčiai, lėšų apsauga ir kaip pateikti skundą.",
    },
  },

  hero: {
    kicker: ["EUROPOS SĄSKAITA", "100% NUOTOLIU", "ES REGULIUOJAMAS LEIDĖJAS"],
    titleTop: "Tavo gyvenimas dviejose šalyse.",
    titleBottom: "Tavo sąskaita irgi.",
    lead:
      "Laikyk eurus, keisk valiutas ir siųsk pinigus savo artimiesiems iš vienos Europos Sąjungoje atidarytos sąskaitos. Be filialų, be smulkaus šrifto.",
    cta: "Atsisiųsti programėlę",
    secondaryCta: "Parašyk mums per WhatsApp",
    trust: [
      "Elektroninius pinigus leidžia ConnectPay UAB — EPĮ licencija Nr. 24, išduota Lietuvos banko",
      "Lėšos apsaugotos ir atskirtos pagal ES teisės aktus",
    ],
    figureBrief:
      "HERO NUORODA · VERTIKALUS STULPELIS PER VISĄ KRAŠTĄ, CENTRINIS KADRAS ~1:1,9 (SAUGU 3:4) · VIENA PUSFIGŪRĖ SU TELEFONU RANKOJE, ŽVILGSNIS PRO KAMERĄ, KIETA ŠONINĖ ŠVIESA, LYGUS FONAS. STAMBUS RASTRAS, BE SPALVŲ.",
  },

  steps: {
    eyebrow: "§ 02 — KAIP VEIKIA",
    title: "Trys žingsniai, o ne trys savaitės.",
    lead: "Jokių popierių, jokių filialų, jokio laukimo dienomis, kol gausi sąskaitą savo vardu.",
    items: [
      {
        title: "Atidaryk sąskaitą",
        body:
          "Užsiregistruok su asmens dokumentu ir asmenuke. Savo europinį IBAN gausi per kelias minutes, neužsukdamas į jokį filialą.",
      },
      {
        title: "Nustatyk savo tapatybę",
        body:
          "Tapatybės nustatymą (KYC) atlieka ConnectPay UAB — Lietuvos banko prižiūrima įstaiga. Tai atrakina visas funkcijas ir didesnes ribas.",
      },
      {
        title: "Siųsk ir valdyk savo pinigus",
        body:
          "Pavedimai iš tavo sąskaitos ir į Lotynų Ameriką, Visa kortelės ir valiutos keitimas — viskas vienoje programėlėje.",
      },
    ],
  },


  features: {
    title: "Viena sąskaita, dvi šalys, jokių kliūčių.",
    eyebrow: "VISKAS VIENOJE VIETOJE",
    items: [
      {
        tag: "SEPA / SWIFT",
        title: "Pavedimai be sienų",
        body: "SEPA tiesiai iš ES be ribų. SWIFT ir daugiau nei 200 šalių, kai tik prireikia.",
      },
      {
        tag: "EUR / USD / GBP",
        title: "Tikra daugiavaliutė sąskaita",
        body:
          "Laikyk ir keisk EUR, USD, GBP ir daugelį kitų valiutų tame pačiame likutyje, neatidarydamas kitos sąskaitos.",
      },
      {
        tag: "IBAN",
        title: "IBAN tavo vardu",
        body:
          "Nuosavas europinis sąskaitos numeris, kad gautum atlyginimą ar mokėjimus kaip bet kuris ES gyventojas.",
      },
      {
        tag: "VISA",
        title: "Visa kortelė",
        body: "Visa debeto kortelė, kuria gali mokėti jau šiandien. Fizinė ir (arba) virtuali.",
      },
      {
        tag: "KYC / E2E",
        title: "Patikrinamas saugumas",
        body:
          "Sustiprintas patvirtinimas kiekvieno prisijungimo metu ir ištisinis šifravimas. Laikomės Europos teisės aktų.",
      },
      {
        tag: "FX",
        title: "Aiškus valiutos keitimas",
        body: "Kursą ir mokestį matai prieš patvirtindamas. Jokių netikėtumų, nieko paslėpto.",
      },
    ],
  },

  stats: [
    { figure: "200+", label: "šalių pasiekiama pavedimu arba SWIFT" },
    { figure: "Nr. 24", label: "ConnectPay UAB, mūsų leidėjos, EPĮ licencija" },
    { figure: "PSD2 · BDAR", label: "reguliacinė atitiktis Europos Sąjungoje" },
  ],

  pricing: {
    eyebrow: "§ 05 — PLANAI",
    title: "Paprasta ir skaidru.",
    lead: "Rinkis pagal tai, ko reikia dabar. Planą gali keisti bet kada.",
    includes: "APIMA",
    popular: "POPULIARIAUSIAS",
    feesLink: "Išsamūs įkainiai",
    feesNote: "Jokių paslėptų mokesčių — viskas, ką imame, vienoje vietoje.",
    plans: [
      {
        name: "Standard",
        price: "Nemokamai",
        pitch: "Viskas, ko reikia paprastai siųsti pinigus namo.",
        cta: "Rinktis Standard",
        items: [
          "EUR IBAN sąskaita",
          "SEPA pavedimai",
          "Daugiavaliutė piniginė",
          "Virtuali ir fizinė Visa kortelė",
        ],
      },
      {
        name: "Plus",
        price: "4,99 €/mėn.",
        pitch: "Tiems, kas siunčia dažnai ir nori geresnių įkainių.",
        cta: "Rinktis Plus",
        items: [
          "Viskas, kas yra Standard",
          "SWIFT pavedimai",
          "Sumažinti valiutos keitimo kursai",
          "Didesnės ribos",
        ],
      },
      {
        name: "Premium",
        price: "9,99 €/mėn.",
        pitch: "Aukščiausias lygis ir geriausios sąlygos tavo pinigams.",
        cta: "Rinktis Premium",
        items: [
          "Viskas, kas yra Plus",
          "Neriboti pavedimai",
          "Asmeninis sąskaitos vadybininkas",
          "Pirmenybė aptarnavime",
        ],
      },
    ],
  },

  testimonial: {
    eyebrow: "§ 06 — ATSILIEPIMAS",
    quote:
      "Anksčiau pinigų mamai persiuntimas trukdavo dienas, o mokesčių nesuprasdavau. Dabar tai trunka kelias minutes ir tiksliai žinau, kiek jai ateis.",
    author: "NexMoni klientė",
    detail: "Gyvena Ispanijoje, siunčia į Kolumbiją",
    security: [
      {
        title: "Apsaugoti pavedimai",
        body: "Šifruotas ryšys ir kiekvienos operacijos sekimas nuo pradžios iki pabaigos.",
      },
      {
        title: "Apsaugotos lėšos",
        body:
          "Tavo pinigai laikomi apsaugoti ir atskirti ConnectPay UAB, kaip numato ES teisės aktai.",
      },
      {
        title: "Sustiprintas patvirtinimas",
        body: "KYC saugo tavo sąskaitą, nustatydamas kiekvieną operaciją.",
      },
    ],
  },


  signup: {
    fields: [
      { name: "nombre", label: "VARDAS IR PAVARDĖ", placeholder: "Koks tavo vardas?" },
      { name: "telefono", label: "TELEFONAS", placeholder: "+370 600 00000" },
      { name: "email", label: "EL. PAŠTAS", placeholder: "tu@pastas.lt" },
    ],
    submit: "Atsiųsti nuorodą",
    sending: "Siunčiama…",
    whatsappNote: "Nori pirmiau pasikalbėti? Parašyk mums per WhatsApp.",
    errors: {
      name: "Įrašyk savo vardą.",
      phoneMissing: "Įrašyk telefono numerį.",
      phoneInvalid: "Patikrink numerį — su šalies kodu.",
      emailMissing: "Įrašyk el. pašto adresą.",
      emailInvalid: "Patikrink el. pašto adresą.",
      submit: "Nepavyko išsiųsti užklausos. Bandyk dar kartą arba parašyk per WhatsApp.",
    },
    success: {
      eyebrow: "NUORODA IŠSIŲSTA",
      title: "Ačiū. Nuoroda jau pakeliui.",
      body:
        "Patikrink el. paštą — ten rasi atsisiuntimo nuorodą ir tolesnius žingsnius tapatybei nustatyti.",
    },
  },

  /* La descarga es el objetivo del embudo: todo lo demás lleva aquí. */
  download: {
    eyebrow: "ATSISIUNTIMAS",
    title: "Turėk sąskaitą kišenėje.",
    lead:
      "Atidaryk sąskaitą, nustatyk tapatybę ir siųsk pinigus programėlėje. Viskas telefone, per kelias minutes.",
    soon: "Netrukus",
    appStorePre: "Atsisiųsk iš",
    appStoreName: "App Store",
    googlePlayPre: "Rasi",
    googlePlayName: "Google Play",
    qrNote: "Nukreipk telefono kamerą",
    qrBrief: "QR KODAS — LAUKIAMA TIKRŲJŲ PARDUOTUVIŲ ADRESŲ",
    deskTitle: "Naršai kompiuteriu?",
    deskNote: "Palik savo duomenis ir atsiųsime atsisiuntimo nuorodą.",
  },

  closers: {
    fees: {
      title: "Dabar žinai, kiek tai kainuoja.",
      lead:
        "Tie patys ką tik perskaityti įkainiai, taikomi programėlėje. Atsidaryk ją, patvirtink tapatybę ir išsiųsk per kelias minutes.",
      action: "Atsisiųsti programėlę",
      secondary: "Pirma išsiaiškinti klausimą",
    },
    about: {
      title: "Dabar žinai, kas saugo tavo pinigus.",
      lead:
        "Lėšos apsaugotos ir atskirtos Lietuvos banko licencijuotoje įstaigoje. Visa kita vyksta programėlėje.",
      action: "Atsisiųsti programėlę",
      secondary: "Peržiūrėti įkainius",
    },
    faq: {
      title: "Atsakyta?",
      lead:
        "Jei tavo klausimas jau išspręstas, kitas žingsnis telpa telefone: atsidaryk sąskaitą ir siųsk pinigus programėlėje.",
      action: "Atsisiųsti programėlę",
      secondary: "Kas saugo tavo pinigus",
    },
  },

  footer: {
    blurb:
      "Tavo gyvenimas dviejose šalyse. Tavo sąskaita irgi. Europos sąskaita, tiesioginiai pavedimai ir jokių popierių, kad savo pinigus tvarkytum kaip nori.",
    columns: [
      {
        title: "PRODUKTAI",
        links: [
          { label: "Funkcijos", href: "/#cuenta" },
          { label: "Planai", href: "/#precios" },
          { label: "Mokesčiai", href: "/tarifas" },
          { label: "Saugumas", href: "/#seguridad" },
        ],
      },
      {
        title: "ĮMONĖ",
        links: [
          { label: "Apie mus", href: "/acerca" },
          { label: "Dažni klausimai", href: "/preguntas-frecuentes" },
          { label: "Kontaktai", href: "/acerca#contacto" },
          { label: "support@nexmoni.com", href: "mailto:support@nexmoni.com" },
        ],
      },
      {
        title: "TEISINĖ INFORMACIJA",
        links: [
          { label: "Privatumas", href: "/#descargar" },
          { label: "Sąlygos", href: "/#descargar" },
          { label: "AML / KYC", href: "/#descargar" },
          { label: "Skundai", href: "/#descargar" },
        ],
      },
    ],
  },

  glossary: {
    SEPA:
      "Bendra mokėjimų eurais erdvė: pavedimai eurais tarp ES šalių tokiomis pačiomis sąlygomis kaip vietiniai.",
    SWIFT:
      "Tarptautinis bankų pranešimų tinklas. Naudojamas siųsti pinigus už euro zonos ribų, į daugiau nei 200 šalių.",
    IBAN:
      "Tarptautinis banko sąskaitos numeris. Tavasis yra europinis ir tavo vardu: tinka atlyginimui ar mokėjimams gauti.",
    KYC:
      "„Pažink savo klientą“: tapatybės nustatymas, kurio Europos teisės aktai reikalauja prieš pradedant naudotis sąskaita.",
    AML:
      "Pinigų plovimo prevencija: teisinės kontrolės priemonės, patvirtinančios teisėtą pinigų kilmę.",
    E2E: "Ištisinis šifravimas: duomenis perskaityti gali tik tu ir gavėjas; niekas pakeliui.",
    FX: "Valiutos keitimas (foreign exchange): kursas, kuriuo tavo pinigai konvertuojami iš vienos valiutos į kitą.",
    PSD2:
      "Europos mokėjimo paslaugų direktyva: nustato saugumo taisykles ir sustiprintą patvirtinimą kiekvienai operacijai.",
    GDPR:
      "Europos bendrasis duomenų apsaugos reglamentas: nustato, kaip saugomi ir naudojami tavo asmens duomenys.",
  },

  fees: {
    eyebrow: "§ 01 — ĮKAINIAI",
    title: "Išsamūs įkainiai.",
    lead:
      "Jokių paslėptų mokesčių. Kiekvienas mūsų imamas mokestis su suma — lygiai taip, kaip matysi savo išraše.",
    sidenote: ["Sumos eurais", "Galioja nuo 2026 m."],
    schedule: [
      {
        label: "Valiutos keitimas (FX)",
        note: "Antkainis, taikomas rinkos kursui",
        price: "1–3 % marža porai",
      },
      {
        label: "SEPA pavedimas",
        note: "Pavedimai eurais SEPA erdvėje",
        price: "1,5 % · min. 0,50 €",
      },
      {
        label: "SWIFT pavedimas",
        note: "Tarptautiniai pavedimai už euro zonos ribų",
        price: "25,00 €",
      },
      {
        label: "Papildymas kortele",
        note: "Lėšų papildymas debeto arba kredito kortele",
        price: "2 % nuo sumos",
      },
      { label: "Išgryninimas į banką", note: "Pervedimas į išorinę banko sąskaitą", price: "1,00 €" },
      { label: "Vidinis pavedimas", note: "Tarp NexMoni sąskaitų", price: "Nemokamai" },
      {
        label: "Sąskaitos administravimas",
        note: "Periodinis mokestis už aktyvią sąskaitą",
        price: "1,00 € / 30 d.",
      },
    ],
    terminologyEyebrow: ["STANDARTIZUOTA", "TERMINIJA"],
    terminologyIntro:
      "Naudojame Lietuvos banko standartizuotą terminiją, kad galėtum palyginti mūsų įkainius su bet kurios kitos Europos įstaigos įkainiais.",
    terminology: [
      { en: "Account management", local: "Sąskaitos administravimas" },
      { en: "Issuance of a debit card", local: "Debeto kortelės išdavimas" },
      { en: "Cash withdrawal", local: "Grynųjų pinigų išėmimas" },
      { en: "Credit transfer — SEPA", local: "SEPA kredito pervedimas eurais" },
      { en: "Credit transfer — non-SEPA", local: "SWIFT pervedimas už SEPA erdvės ribų" },
      {
        en: "Settlement of received payments",
        local: "Gautų mokėjimų įskaitymas — eurais ir kitomis valiutomis",
      },
      { en: "Currency conversion", local: "Valiutos konvertavimas (FX)" },
    ],
    plansLink: "Žiūrėti planus",
  },

  calculator: {
    eyebrow: "§ 02 — SKAIČIUOKLĖ",
    title: "Apskaičiuok, kiek nukeliaus.",
    lead:
      "Įvesk sumą ir pamatysi visą išskaidymą: mūsų mokestį, valiutos kurso antkainį ir kiek gauna gavėjas. Tie patys įkainiai kaip lentelėje viršuje, pritaikyti tavo atvejui.",
    sidenote: ["Orientacinis skaičiavimas", "Įkainiai iš sąrašo viršuje"],
    noticeStrong: "Orientaciniai valiutos kursai",
    noticeRest:
      ". Tai nėra galutinis pasiūlymas: galutinė suma nustatoma patvirtinant pavedimą. Mokesčiai — tie patys, kaip paskelbtame įkainių sąraše viršuje.",
    amount: "SUMA",
    from: "IŠ",
    to: "Į",
    amountAria: "Siunčiama suma",
    comingSoon: "(netrukus)",
    receives: "Gavėjas gauna",
    receivesNote: "Iš viso, atskaičius mokesčius",
    rate: "Valiutos kursas",
    spread: "Valiutos kurso antkainis",
    spreadNoFx: "Valiuta nekeičiama",
    spreadNoteBefore: "",
    spreadNoteAfter: " marža nuo vidutinio rinkos kurso",
    fee: "Pavedimo mokestis",
    total: "Bendra pavedimo kaina",
    totalNote: "Mokestis kartu su valiutos kurso antkainiu",
    foot: "Orientacinis skaičiavimas pagal paskelbtus įkainius. Visus kitus mokesčius rasi lentelėje viršuje.",
    badAmount: "Patikrink sumą",
    unavailable: "Kryptis neprieinama",
    sepaOnlyBefore: "Šiandien kotiruojame pavedimus eurais ",
    sepaOnlyAfter: " erdvėje. Kitos kryptys atsivers, kai tik nustatysime jų kainą.",
    rails: { sepa: "SEPA pavedimas", swift: "SWIFT pavedimas", internal: "Vidinis pavedimas" },
    quoteErrors: {
      invalidAmount: "Įvesk sumą, didesnę už nulį.",
      noCorridor: "Šio pavedimo dar nevykdome.",
      corridorPending: "Ši kryptis atsivers netrukus. Dar nustatome jos kainą.",
      belowFee: "Suma nepadengia minimalaus pavedimo mokesčio.",
    },
  },

  currencies: {
    EUR: "Euras",
    USD: "JAV doleris",
    GBP: "Svaras sterlingų",
    COP: "Kolumbijos pesas",
    PEN: "Peru solis",
    DOP: "Dominikos pesas",
    MXN: "Meksikos pesas",
    BRL: "Brazilijos realas",
    CLP: "Čilės pesas",
    ARS: "Argentinos pesas",
    BOB: "Bolivijos bolivijanas",
    PYG: "Paragvajaus guaranis",
    UYU: "Urugvajaus pesas",
    VES: "Venesuelos bolivaras",
  },

  about: {
    eyebrow: "§ 01 — APIE",
    h1: "Apie NexMoni",
    subtitle: "NexMoni OÜ — Estija, Europos Sąjunga",
    companyEyebrow: "ĮMONĖS DUOMENYS",
    company: [
      { label: "Juridinis pavadinimas", value: "NexMoni OÜ" },
      { label: "Registracijos kodas", value: "17303472" },
      { label: "Registruota buveinė", value: "Tornimäe tn 5, 10145 Talinas" },
      { label: "Jurisdikcija", value: "Estijos Respublika, Europos Sąjunga" },
    ],
    missionEyebrow: "§ 02 — MŪSŲ MISIJA",
    missionTitle: "Siųsti pinigus namo turėtų būti taip pat paprasta kaip pasikalbėti.",
    missionBody:
      "NexMoni gimė tam, kad supaprastintų tarptautinius pinigų pervedimus migrantams ir jų šeimoms. Tikime, kad siųsti pinigus namo turėtų būti taip pat paprasta kaip pasikalbėti. Mūsų platforma jungia Europą su Lotynų Amerika ir leidžia atlikti greitus, saugius ir prieinamus pervedimus, paremtus dirbtiniu intelektu.",
    regulatoryEyebrow: "§ 03 — REGULIACINIS STATUSAS",
    regulatoryTitle: "Kas saugo tavo pinigus.",
    regulatoryBody:
      "NexMoni OÜ veikia kaip įgaliotoji ConnectPay UAB platintoja. ConnectPay UAB yra elektroninių pinigų įstaiga, prižiūrima Lietuvos banko. Klientų lėšos laikomos apsaugotos ir atskirtos pagal Europos Sąjungos teisės aktus.",
    regulatorySidenote: ["Leidėja", "ir licencija"],
    regulatory: [
      { label: "Leidėja", value: "ConnectPay UAB" },
      { label: "EPĮ licencija", value: "Nr. 24 — Lietuvos bankas" },
      { label: "Leidėjos adresas", value: "Algirdo g. 38, Vilnius" },
      { label: "NexMoni OÜ vaidmuo", value: "Įgaliotoji platintoja" },
    ],
    directives: [
      { code: "PSD2", detail: "ES direktyva 2015/2366 dėl mokėjimo paslaugų" },
      { code: "EMD2", detail: "ES direktyva 2009/110/EB dėl elektroninių pinigų" },
    ],
    servicesEyebrow: "§ 04 — PASLAUGOS",
    servicesTitle: "Ką gali daryti su sąskaita.",
    services: [
      {
        tag: "EUR / USD / GBP",
        title: "Daugiavaliutė piniginė",
        body: "Eurai, doleriai, svarai ir pagrindinės Lotynų Amerikos valiutos tame pačiame likutyje.",
      },
      {
        tag: "IBAN",
        title: "Europinė IBAN sąskaita",
        body: "Europinis sąskaitos numeris tavo vardu, veikiantis SEPA erdvėje.",
      },
      {
        tag: "SEPA / SWIFT",
        title: "Tarptautiniai pavedimai",
        body: "SEPA pavedimai euro zonoje ir SWIFT į daugiau nei 200 šalių.",
      },
      {
        tag: "FX",
        title: "Valiutos keitimas",
        body: "Konvertavimas tarp piniginės valiutų konkurencingais kursais.",
      },
      {
        tag: "VISA",
        title: "Visa kortelės",
        body: "Virtualios ir fizinės kortelės mokėjimams ir grynųjų išėmimui.",
      },
      {
        tag: "DI / WHATSAPP",
        title: "WhatsApp asistentas",
        body: "Pavedimus gali užsakyti balsu per dirbtinio intelekto asistentą.",
      },
      {
        tag: "iOS / ANDROID / WEB",
        title: "Programėlės",
        body: "Prieiga iš telefono ir kompiuterio, su ta pačia sąskaita ir tuo pačiu likučiu.",
      },
    ],
    complianceEyebrow: "§ 05 — ATITIKTIS",
    complianceTitle: "Teisės aktai, kurių laikomės.",
    compliance: [
      { code: "AMLD4 / AMLD5", detail: "Europos pinigų plovimo prevencijos direktyvos" },
      {
        code: "RahaPTS",
        detail: "Estijos pinigų plovimo ir teroristų finansavimo prevencijos įstatymas",
      },
      { code: "BDAR", detail: "Europos bendrasis duomenų apsaugos reglamentas" },
      {
        code: "REGLAMENTAS (ES) 2015/847",
        detail: "Informacija, teikiama pervedant lėšas",
      },
      {
        code: "TARPTAUTINĖS SANKCIJOS",
        detail: "Europos Sąjungos, Jungtinių Tautų ir OFAC sąrašai",
      },
    ],
    contactEyebrow: "§ 06 — KONTAKTAI",
    contactTitle: "Kam rašyti.",
    contact: [
      { address: "support@nexmoni.com", purpose: "Bendrieji klausimai ir pagalba" },
      { address: "legal@nexmoni.com", purpose: "Teisiniai klausimai" },
      { address: "compliance@nexmoni.com", purpose: "Reguliacinė atitiktis" },
      { address: "privacy@nexmoni.com", purpose: "Duomenų apsauga ir privatumas" },
    ],
  },

  faq: {
    eyebrow: "§ 01 — DAŽNI KLAUSIMAI",
    h1: "Dažniausiai užduodami klausimai",
    subtitle: "Atsakymai į dažniausius klausimus.",
    sidenoteCount: "klausimai",
    sidenoteHint: "Spausk, kad išskleistum",
    footnote: "Neradai, ko ieškojai? Parašyk mums ir atsakysime tuo pačiu kanalu.",
    feesLink: "Žiūrėti įkainius",
    items: [
      {
        q: "Kaip užblokuoti sąskaitą arba kortelę?",
        a: [
          "Pačioje programėlėje, skiltyje Kortelės arba Nustatymai, bet kuriuo paros metu. Blokavimas įsigalioja iš karto ir gali jį atšaukti pats.",
          "Jei praradai prieigą prie programėlės, parašyk support@nexmoni.com ir užblokuosime mes.",
        ],
        list: [],
      },
      {
        q: "Kas leidžia pinigus ir korteles?",
        a: [
          "NexMoni OÜ veikia kaip platintoja. Elektroninius pinigus ir korteles leidžia įgaliotos įstaigos:",
        ],
        list: [
          { label: "Elektroniniai pinigai", value: "ConnectPay UAB — EPĮ licencija Nr. 24" },
          { label: "Visa kortelės", value: "Wallester AS" },
          { label: "NexMoni OÜ", value: "Įgaliotoji platintoja" },
        ],
      },
      {
        q: "Kaip išsiųsti pinigus?",
        a: [
          "Skiltyje Siųsti: pasirenki gavėją, nurodai sumą ir patvirtini. Prieš patvirtindamas matai visą išskaidymą.",
          "Terminai priklauso nuo pasirinkto būdo:",
        ],
        list: [
          { label: "SEPA", value: "Nuo kelių minučių iki 1 darbo dienos" },
          { label: "SWIFT", value: "Nuo 1 iki 5 darbo dienų" },
        ],
      },
      {
        q: "Kokie yra mokesčiai?",
        a: [
          "Visi mokesčiai rodomi prieš patvirtinant operaciją: niekas neišaiškėja vėliau.",
          "Visą sąrašą rasi įkainių skiltyje; jis atsiunčiamas ir pasveikinimo laiške.",
        ],
        list: [],
      },
      {
        q: "Ar mano pinigai saugūs?",
        a: [
          "Lėšos laikomos apsaugotos ir atskirtos ConnectPay UAB, kaip numato Europos elektroninių pinigų teisės aktai.",
          "Ryšys šifruojamas dviem sluoksniais, o kiekviena operacija reikalauja sustiprinto kliento patvirtinimo (SCA), kaip nustato PSD2.",
        ],
        list: [],
      },
      {
        q: "Kaip nustatyti tapatybę (KYC)?",
        a: [
          "Registracijos metu pateikiant asmens dokumentą ir asmenukę. Tapatybę nustato ConnectPay, ne NexMoni.",
        ],
        list: [],
      },
      {
        q: "Kaip pateikti skundą?",
        a: [
          "Parašyk complaints@nexmoni.com. Atsakome ne vėliau kaip per 15 darbo dienų.",
          "Jei atsakymas tavęs netenkina, gali kreiptis tiesiai į ConnectPay UAB kaip leidėją arba į Lietuvos banką kaip priežiūros instituciją.",
        ],
        list: [
          { label: "NexMoni OÜ", value: "complaints@nexmoni.com — 15 darbo dienų" },
          { label: "Leidėja", value: "ConnectPay UAB" },
          { label: "Priežiūros institucija", value: "Lietuvos bankas — lb.lt" },
        ],
      },
      {
        q: "Kaip susisiekti su pagalba?",
        a: [
          "Per asistentą programėlėje arba rašant support@nexmoni.com.",
          "Jei pastebėjai sukčiavimą ar neatpažįstamą nurašymą, kuo greičiau praneškite fraud@nexmoni.com.",
        ],
        list: [],
      },
    ],
  },
  phone: {
    eyebrow: "Programėlė",
    title: "Štai kaip atrodo pinigų siuntimas",
    lead:
      "Penki ekranai — nuo programėlės atidarymo iki žinios, kad pinigai pasiekė gavėją. Slinkite žemyn ir telefonas judės kartu.",
    disclaimer:
      "Produkto maketas. Sumos remiasi tais pačiais orientaciniais kursais kaip ir skaičiuoklė.",
    steps: [
      { title: "Pasirenkate gavėją", body: "Nuolatiniai gavėjai — pačiame viršuje. Daugiau niekada nereikės vesti IBAN." },
      { title: "Kursą matote prieš mokėdami", body: "Kursas fiksuojamas pradedant. Ką rodo šis ekranas, tą gavėjas ir gaus." },
      { title: "Visas išskaidymas", body: "Mokestis ir kurso skirtumas atskirai, eurais. Vėliau niekas neatsiranda." },
      { title: "Sekate pervedimą", body: "Kiekvienas žingsnis su laiku. Žinote, kur pinigai, niekam neskambindami." },
      { title: "Pasiekia — ir tai matyti", body: "Pranešimas į abu telefonus ir atsisiunčiamas kvitas su nuoroda." },
    ],
    ui: {
      greeting: "Sveiki, Diego",
      prompt: "Kam siunčiate šiandien?",
      recent: "Naujausi",
      send: "Siųsti pinigus",
      youSend: "Siunčiate",
      theyGet: "Gauna",
      rate: "Valiutos kursas",
      guaranteed: "Fiksuotas 30 min.",
      continue: "Tęsti",
      reviewTitle: "Peržiūrėkite pervedimą",
      amount: "Suma",
      fee: "Siuntimo mokestis",
      spread: "Kurso skirtumas",
      totalPay: "Iš viso mokate",
      arrives: "Pasiekia",
      confirm: "Patvirtinti ir mokėti",
      trackTitle: "Vykdoma",
      received: "Gauta",
      converted: "Konvertuota į dolerius",
      onTheWay: "Pakeliui į banką",
      delivered: "Pristatyta",
      estimate: "Numatoma šiandien",
      doneTitle: "Pristatyta",
      doneNote: "Rosa jau turi pinigus savo sąskaitoje.",
      reference: "Nuoroda",
      share: "Atsisiųsti kvitą",
    },
  },
  photos: {
    band: "Kitoje pusėje",
    bandLead: "Pinigai išeina iš naktinės pamainos Europoje ir atsiduria virtuvėje Gvajakilyje. Svarbios abi pusės.",
    ocean: "Atlantas naktį iš didelio aukščio, pakrantės žiburiai kadro pakraštyje.",
    milan: "Jaunas vyras gyvenamojoje Milano gatvėje sutemus.",
    madrid: "Moteris savo buto virtuvėje Madride, atsirėmusi į durų staktą.",
    guayaquil: "Vyresnė moteris savo virtuvėje Gvajakilyje žiūri į kažką, ką laiko rankose.",
    shop: "Kaimynystės parduotuvės vidus Ekvadoro pakrantėje, pro duris krenta šviesa.",
    captionSend: "Kas siunčia",
    captionReceive: "Kas gauna",
  },
  feeBar: {
    eyebrow: "Mokesčio sandara",
    title: "Ką mokate ir kas pasiekia",
    lead:
      "200 EUR pervedimas į Ekvadorą, visas. Juosta pavaizduota masteliu: kiekviena dalis užima tiek, kiek kainuoja.",
    sends: "Mokate",
    arrives: "Pasiekia",
    fee: "Mokestis",
    spread: "Kurso skirtumas",
    totalCost: "Bendra pervedimo kaina",
    note:
      "Pavyzdys su siūloma perlaidų pakopa (1,5 %, ne mažiau kaip 3 EUR), dar nepatvirtinta. Paskelbtame kainoraštyje yra tik fiksuotas 25 EUR SWIFT mokestis, kuris nuo šios sumos sudarytų 14 %.",
  },
};
