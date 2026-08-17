import type { Dictionary } from "../dictionary";

/**
 * Português (variante europeia — pt-PT).
 *
 * ⚠ Se o público principal forem brasileiros residentes na Europa, convém
 *   mudar para pt-BR: muda vocabulário ("telemóvel"/"celular", "levantamento"/
 *   "saque") e o `numberLocale`.
 *
 * ⚠ O texto regulatório (atribuição da licença, salvaguarda de fundos,
 *   procedimento de reclamação) tem efeito legal. Esta tradução não foi
 *   revista por um jurista — fazê-lo antes de publicar.
 */
export const pt: Dictionary = {
  meta: {
    htmlLang: "pt",
    numberLocale: "pt-PT",
  },

  site: {
    tag: "EUR · EE · UE",
    legal: "NEXMONI OÜ · MOEDA ELETRÓNICA EMITIDA PELA CONNECTPAY UAB (EMI N.º 24)",
    compliance: "PSD2 · RGPD",
    version: "v1c-f1a — AÇO",
    whatsapp: "WhatsApp",
    openAccount: "Descarregar a app",
    menu: "Menu",
    languageLabel: "Idioma",
  },

  nav: [
    { label: "Como funciona", href: "/#como" },
    { label: "Conta", href: "/#cuenta" },
    { label: "Planos", href: "/#precios" },
    { label: "Tarifas", href: "/tarifas" },
    { label: "Segurança", href: "/#seguridad" },
  ],

  pages: {
    home: {
      title: "NexMoni — A tua vida está em dois países. A tua conta também.",
      description:
        "Conta europeia em euros para enviar dinheiro para a América Latina. IBAN em teu nome, transferências SEPA e SWIFT, cartão Visa. Moeda eletrónica emitida pela ConnectPay UAB, licença EMI n.º 24 do Banco da Lituânia.",
    },
    fees: {
      title: "Tarifas e calculadora de envios — NexMoni",
      description:
        "Tabela completa de tarifas da NexMoni e calculadora de conversão: comissão, margem cambial e quanto recebe o destinatário. Sem comissões escondidas.",
    },
    about: {
      title: "Acerca da NexMoni — NexMoni OÜ, Estónia",
      description:
        "NexMoni OÜ, código de registo 17303472, Taline (Estónia). Distribuidora autorizada da ConnectPay UAB, instituição de moeda eletrónica com licença EMI n.º 24 do Banco da Lituânia.",
    },
    faq: {
      title: "Perguntas frequentes — NexMoni",
      description:
        "Como enviar dinheiro, quem emite os cartões, prazos SEPA e SWIFT, verificação de identidade, comissões, segurança dos fundos e como apresentar uma reclamação.",
    },
  },

  hero: {
    kicker: ["CONTA EUROPEIA", "100% REMOTO", "EMISSOR REGULADO NA UE"],
    titleTop: "A tua vida está em dois países.",
    titleBottom: "A tua conta também.",
    lead:
      "Guarda euros, troca divisas e envia dinheiro aos teus a partir de uma única conta aberta na União Europeia. Sem balcões, sem letras pequenas.",
    cta: "Descarregar a app",
    secondaryCta: "Fala connosco pelo WhatsApp",
    trust: [
      "Moeda eletrónica emitida pela ConnectPay UAB — licença EMI n.º 24 do Banco da Lituânia",
      "Fundos salvaguardados e segregados segundo as regras da UE",
    ],
    figureBrief:
      "REFERÊNCIA HERO · COLUNA VERTICAL ATÉ AO CORTE, RECORTE CENTRAL ~1:1,9 (SEGURO EM 3:4) · UMA ÚNICA FIGURA DE MEIO CORPO A SEGURAR O TELEMÓVEL, OLHAR FORA DE CÂMARA, LUZ LATERAL DURA, FUNDO LISO. MEIO-TOM GROSSO, SEM COR.",
  },

  steps: {
    eyebrow: "§ 02 — COMO FUNCIONA",
    title: "Três passos, não três semanas.",
    lead: "Sem papelada, sem balcões, sem esperar dias por uma conta em teu nome.",
    items: [
      {
        title: "Abre a tua conta",
        body:
          "Regista-te com o teu documento e uma selfie. Recebe o teu IBAN europeu em minutos, sem ir a nenhum balcão.",
      },
      {
        title: "Verifica a tua identidade",
        body:
          "A verificação (KYC) é tratada pela ConnectPay UAB, entidade autorizada pelo Banco da Lituânia. Desbloqueia todas as funções e limites mais altos.",
      },
      {
        title: "Envia e controla o teu dinheiro",
        body:
          "Transferências a partir da tua conta e para a América Latina, cartões Visa e câmbio de divisas — tudo numa só app.",
      },
    ],
  },


  features: {
    title: "Uma conta, dois países, zero atrito.",
    eyebrow: "TUDO NUM SÓ SÍTIO",
    items: [
      {
        tag: "SEPA / SWIFT",
        title: "Transferências sem fronteiras",
        body: "SEPA direto a partir da UE sem limites. SWIFT e mais de 200 países quando precisares.",
      },
      {
        tag: "EUR / USD / GBP",
        title: "Multimoeda a sério",
        body:
          "Guarda e troca entre EUR, USD, GBP e muitas outras moedas no mesmo saldo, sem abrir outra conta.",
      },
      {
        tag: "IBAN",
        title: "IBAN em teu nome",
        body:
          "Um número de conta europeu teu, para receberes o teu salário ou pagamentos como qualquer residente da UE.",
      },
      {
        tag: "VISA",
        title: "Cartão Visa",
        body: "Visa de débito para pagares hoje mesmo. Físico e/ou virtual, para levantar ou pagar presencialmente.",
      },
      {
        tag: "KYC / E2E",
        title: "Segurança verificável",
        body:
          "Autenticação reforçada em cada acesso e cifragem ponta a ponta. Cumprimos as regras europeias.",
      },
      {
        tag: "FX",
        title: "Câmbio transparente",
        body: "Vês a taxa e a comissão antes de confirmar. Nunca uma surpresa, nunca escondido.",
      },
    ],
  },

  stats: [
    { figure: "200+", label: "países alcançáveis por transferência ou SWIFT" },
    { figure: "N.º 24", label: "licença EMI da ConnectPay UAB, a nossa entidade emissora" },
    { figure: "PSD2 · RGPD", label: "cumprimento regulatório na União Europeia" },
  ],

  pricing: {
    eyebrow: "§ 05 — PLANOS",
    title: "Simples e transparente.",
    lead: "Escolhe conforme precisas agora. Podes mudar de plano quando quiseres.",
    includes: "INCLUI",
    popular: "MAIS POPULAR",
    feesLink: "Tarifas detalhadas",
    feesNote: "Sem comissões escondidas — tudo o que cobramos, num só sítio.",
    plans: [
      {
        name: "Standard",
        price: "Grátis",
        pitch: "Tudo o que é essencial para enviar dinheiro para casa de forma simples.",
        cta: "Escolher Standard",
        items: [
          "Conta IBAN EUR",
          "Transferências SEPA",
          "Carteira multimoeda",
          "Cartão Visa virtual + físico",
        ],
      },
      {
        name: "Plus",
        price: "4,99 €/mês",
        pitch: "Para quem envia com frequência e quer melhores taxas.",
        cta: "Escolher Plus",
        items: [
          "Tudo o do Standard",
          "Transferências SWIFT",
          "Taxas de câmbio reduzidas",
          "Limites alargados",
        ],
      },
      {
        name: "Premium",
        price: "9,99 €/mês",
        pitch: "O nível mais alto e as melhores condições para o teu dinheiro.",
        cta: "Escolher Premium",
        items: [
          "Tudo o do Plus",
          "Envios ilimitados",
          "Gestor de conta dedicado",
          "Prioridade no apoio",
        ],
      },
    ],
  },

  testimonial: {
    eyebrow: "§ 06 — TESTEMUNHO",
    quote:
      "Antes demorava dias a mandar dinheiro à minha mãe e pagava comissões que não percebia. Agora faço-o em minutos e sei exatamente quanto lhe chega.",
    author: "Cliente da NexMoni",
    detail: "Vive em Espanha, envia para a Colômbia",
    security: [
      {
        title: "Envios protegidos",
        body: "Ligação cifrada e acompanhamento de cada operação do princípio ao fim.",
      },
      {
        title: "Fundos protegidos",
        body:
          "O teu dinheiro fica salvaguardado e segregado na ConnectPay UAB, conforme as regras da UE.",
      },
      {
        title: "Verificação reforçada",
        body: "KYC para manter a tua conta segura, identificando cada operação.",
      },
    ],
  },


  signup: {
    fields: [
      { name: "nombre", label: "NOME COMPLETO", placeholder: "Como te chamas?" },
      { name: "telefono", label: "TELEFONE", placeholder: "+351 900 000 000" },
      { name: "email", label: "CORREIO ELETRÓNICO", placeholder: "tu@email.com" },
    ],
    submit: "Enviar-me o link",
    sending: "A enviar…",
    whatsappNote: "Preferes falar primeiro? Escreve-nos pelo WhatsApp.",
    errors: {
      name: "Escreve o teu nome.",
      phoneMissing: "Escreve o teu telefone.",
      phoneInvalid: "Verifica o número, com indicativo do país.",
      emailMissing: "Escreve o teu email.",
      emailInvalid: "Verifica o email.",
      submit: "Não conseguimos enviar o teu pedido. Tenta de novo ou escreve-nos pelo WhatsApp.",
    },
    success: {
      eyebrow: "LINK ENVIADO",
      title: "Obrigado. Enviámos-te o link.",
      body:
        "Vê o teu email — aí chega o link para descarregar a app e os passos seguintes para verificar a tua identidade.",
    },
  },

  /* La descarga es el objetivo del embudo: todo lo demás lleva aquí. */
  download: {
    eyebrow: "DESCARREGAR",
    title: "Leva a tua conta no bolso.",
    lead:
      "Abre a conta, verifica a tua identidade e envia dinheiro a partir da app. Tudo no telemóvel, em minutos.",
    soon: "Brevemente",
    appStorePre: "Descarrega na",
    appStoreName: "App Store",
    googlePlayPre: "Disponível no",
    googlePlayName: "Google Play",
    qrNote: "Aponta a câmara do telemóvel",
    qrBrief: "CÓDIGO QR — À ESPERA DOS ENDEREÇOS REAIS DAS LOJAS",
    deskTitle: "Estás no computador?",
    deskNote: "Deixa os teus dados e enviamos-te o link de descarga.",
  },

  footer: {
    blurb:
      "A tua vida está em dois países. A tua conta também. Conta europeia, transferências diretas e zero papelada para gerires o teu dinheiro à tua maneira.",
    columns: [
      {
        title: "PRODUTOS",
        links: [
          { label: "Funcionalidades", href: "/#cuenta" },
          { label: "Planos", href: "/#precios" },
          { label: "Comissões", href: "/tarifas" },
          { label: "Segurança", href: "/#seguridad" },
        ],
      },
      {
        title: "EMPRESA",
        links: [
          { label: "Sobre nós", href: "/acerca" },
          { label: "Perguntas frequentes", href: "/preguntas-frecuentes" },
          { label: "Contacto", href: "/acerca#contacto" },
          { label: "support@nexmoni.com", href: "mailto:support@nexmoni.com" },
        ],
      },
      {
        title: "TERMOS LEGAIS",
        links: [
          { label: "Privacidade", href: "/#descargar" },
          { label: "Termos legais", href: "/#descargar" },
          { label: "AML / KYC", href: "/#descargar" },
          { label: "Reclamações", href: "/#descargar" },
        ],
      },
    ],
  },

  glossary: {
    SEPA:
      "Espaço Único de Pagamentos em Euros: transferências em euros entre países da UE, nas mesmas condições de uma nacional.",
    SWIFT:
      "Rede internacional de mensagens bancárias. Usa-se para enviar dinheiro fora da zona euro, para mais de 200 países.",
    IBAN:
      "Número internacional de conta bancária. O teu é europeu e está em teu nome: serve para receberes salário ou pagamentos.",
    KYC:
      "«Conhece o teu cliente»: a verificação de identidade que as regras europeias exigem antes de operares a conta.",
    AML:
      "Prevenção do branqueamento de capitais: os controlos legais que asseguram a origem lícita do dinheiro.",
    E2E: "Cifragem ponta a ponta: só tu e o destino podem ler os dados; ninguém pelo caminho.",
    FX: "Câmbio (foreign exchange): a taxa a que o teu dinheiro é convertido de uma moeda para outra.",
    PSD2:
      "Diretiva europeia dos serviços de pagamento: fixa regras de segurança e autenticação reforçada em cada operação.",
    GDPR:
      "Regulamento europeu de proteção de dados: controla como os teus dados pessoais são guardados e usados.",
  },

  fees: {
    eyebrow: "§ 01 — TARIFAS",
    title: "Tarifas detalhadas.",
    lead:
      "Sem comissões escondidas. Cada item que cobramos, com o seu valor, tal como aparecerá no teu extrato.",
    sidenote: ["Valores em EUR", "Em vigor desde 2026"],
    schedule: [
      {
        label: "Câmbio de moeda (FX)",
        note: "Margem aplicada sobre a taxa de mercado",
        price: "Spread 1–3% por par",
      },
      {
        label: "Transferência SEPA",
        note: "Envios em euros dentro da zona SEPA",
        price: "1,5% · mín. 0,50 €",
      },
      {
        label: "Transferência SWIFT",
        note: "Envios internacionais fora da zona euro",
        price: "25,00 €",
      },
      {
        label: "Carregamento com cartão",
        note: "Adicionar fundos com cartão de débito ou crédito",
        price: "2% do valor",
      },
      { label: "Levantamento bancário", note: "Levantamento para conta bancária externa", price: "1,00 €" },
      { label: "Transferência interna", note: "Entre contas NexMoni", price: "Grátis" },
      {
        label: "Manutenção de conta",
        note: "Encargo periódico por conta ativa",
        price: "1,00 € / 30 dias",
      },
    ],
    terminologyEyebrow: ["TERMINOLOGIA", "NORMALIZADA"],
    terminologyIntro:
      "Usamos o glossário normalizado do Banco da Lituânia, para poderes comparar as nossas tarifas com as de qualquer outra instituição europeia.",
    terminology: [
      { en: "Account management", local: "Manutenção de conta" },
      { en: "Issuance of a debit card", local: "Emissão de cartão de débito" },
      { en: "Cash withdrawal", local: "Levantamento de numerário" },
      { en: "Credit transfer — SEPA", local: "Transferência SEPA em euros" },
      { en: "Credit transfer — non-SEPA", local: "Transferência SWIFT fora da zona SEPA" },
      {
        en: "Settlement of received payments",
        local: "Crédito de pagamentos recebidos — em euros e noutras moedas",
      },
      { en: "Currency conversion", local: "Câmbio de moeda (FX)" },
    ],
    plansLink: "Ver planos",
  },

  calculator: {
    eyebrow: "§ 02 — CALCULADORA",
    title: "Calcula o que chega.",
    lead:
      "Indica um valor e vês a decomposição completa: a nossa comissão, a margem cambial e quanto recebe o destinatário. As mesmas tarifas da tabela acima, aplicadas ao teu caso.",
    sidenote: ["Cálculo indicativo", "Tarifas da lista acima"],
    noticeStrong: "Taxas de câmbio indicativas",
    noticeRest:
      ". Não constituem uma oferta firme: o valor definitivo é fixado ao confirmar o envio. As comissões são as da tabela publicada acima.",
    amount: "MONTANTE",
    from: "DE",
    to: "PARA",
    amountAria: "Montante a enviar",
    comingSoon: "(brevemente)",
    receives: "O destinatário recebe",
    receivesNote: "Total depois de comissões",
    rate: "Taxa de câmbio",
    spread: "Margem sobre a taxa de câmbio",
    spreadNoFx: "Sem câmbio de moeda",
    spreadNoteBefore: "Margem de ",
    spreadNoteAfter: " sobre a taxa média",
    fee: "Comissão de transferência",
    total: "Custo total da transferência",
    totalNote: "Comissão mais margem cambial",
    foot: "Cálculo indicativo sobre a tabela de tarifas publicada. Consulta a tabela acima para os restantes itens.",
    badAmount: "Verifica o montante",
    unavailable: "Corredor indisponível",
    sepaOnlyBefore: "Hoje cotamos envios em euros dentro da zona ",
    sepaOnlyAfter: ". Os restantes destinos abrem assim que fecharmos o preço.",
    rails: { sepa: "Transferência SEPA", swift: "Transferência SWIFT", internal: "Transferência interna" },
    quoteErrors: {
      invalidAmount: "Indica um montante maior que zero.",
      noCorridor: "Ainda não operamos este envio.",
      corridorPending: "Este corredor abre brevemente. Estamos a fechar o preço.",
      belowFee: "O montante não cobre a comissão mínima de envio.",
    },
  },

  currencies: {
    EUR: "Euro",
    USD: "Dólar norte-americano",
    GBP: "Libra esterlina",
    COP: "Peso colombiano",
    PEN: "Sol peruano",
    DOP: "Peso dominicano",
    MXN: "Peso mexicano",
    BRL: "Real brasileiro",
    CLP: "Peso chileno",
    ARS: "Peso argentino",
    BOB: "Boliviano",
    PYG: "Guarani paraguaio",
    UYU: "Peso uruguaio",
    VES: "Bolívar venezuelano",
  },

  about: {
    eyebrow: "§ 01 — ACERCA",
    h1: "Acerca da NexMoni",
    subtitle: "NexMoni OÜ — Estónia, União Europeia",
    companyEyebrow: "DADOS DA EMPRESA",
    company: [
      { label: "Denominação social", value: "NexMoni OÜ" },
      { label: "Código de registo", value: "17303472" },
      { label: "Sede social", value: "Tornimäe tn 5, 10145 Taline" },
      { label: "Jurisdição", value: "República da Estónia, União Europeia" },
    ],
    missionEyebrow: "§ 02 — A NOSSA MISSÃO",
    missionTitle: "Enviar dinheiro para casa devia ser tão simples como uma conversa.",
    missionBody:
      "A NexMoni nasceu para simplificar as transferências internacionais de dinheiro para os migrantes e as suas famílias. Acreditamos que enviar dinheiro para casa devia ser tão simples como manter uma conversa. A nossa plataforma liga a Europa à América Latina, permitindo transferências rápidas, seguras e acessíveis, impulsionadas por inteligência artificial.",
    regulatoryEyebrow: "§ 03 — ESTATUTO REGULATÓRIO",
    regulatoryTitle: "Quem guarda o teu dinheiro.",
    regulatoryBody:
      "A NexMoni OÜ opera como distribuidora autorizada da ConnectPay UAB, instituição de moeda eletrónica supervisionada pelo Banco da Lituânia. Os fundos dos clientes são salvaguardados e mantidos segregados conforme as regras da União Europeia.",
    regulatorySidenote: ["Entidade emissora", "e licença"],
    regulatory: [
      { label: "Entidade emissora", value: "ConnectPay UAB" },
      { label: "Licença EMI", value: "N.º 24 — Bank of Lithuania" },
      { label: "Sede do emissor", value: "Algirdo str. 38, Vílnius" },
      { label: "Papel da NexMoni OÜ", value: "Distribuidora autorizada" },
    ],
    directives: [
      { code: "PSD2", detail: "Diretiva UE 2015/2366 relativa aos serviços de pagamento" },
      { code: "EMD2", detail: "Diretiva UE 2009/110/CE relativa à moeda eletrónica" },
    ],
    servicesEyebrow: "§ 04 — SERVIÇOS",
    servicesTitle: "O que podes fazer com a conta.",
    services: [
      {
        tag: "EUR / USD / GBP",
        title: "Carteira multimoeda",
        body: "Euros, dólares, libras e as principais moedas da América Latina no mesmo saldo.",
      },
      {
        tag: "IBAN",
        title: "Conta IBAN europeia",
        body: "Um número de conta europeu em teu nome, operacional na zona SEPA.",
      },
      {
        tag: "SEPA / SWIFT",
        title: "Transferências internacionais",
        body: "Envios SEPA dentro da zona euro e SWIFT para mais de 200 países.",
      },
      {
        tag: "FX",
        title: "Câmbio de divisas",
        body: "Conversão entre as moedas da carteira a taxas competitivas.",
      },
      {
        tag: "VISA",
        title: "Cartões Visa",
        body: "Cartões virtuais e físicos para pagar e levantar numerário.",
      },
      {
        tag: "IA / WHATSAPP",
        title: "Assistente por WhatsApp",
        body: "Ordena transferências por voz através de um assistente de inteligência artificial.",
      },
      {
        tag: "iOS / ANDROID / WEB",
        title: "Aplicações",
        body: "Acesso a partir do telemóvel e do computador, com a mesma conta e o mesmo saldo.",
      },
    ],
    complianceEyebrow: "§ 05 — CUMPRIMENTO",
    complianceTitle: "Os quadros que nos obrigam.",
    compliance: [
      {
        code: "AMLD4 / AMLD5",
        detail: "Diretivas europeias de prevenção do branqueamento de capitais",
      },
      {
        code: "RahaPTS",
        detail: "Lei estónia de prevenção do branqueamento e do financiamento do terrorismo",
      },
      { code: "RGPD", detail: "Regulamento europeu de proteção de dados" },
      {
        code: "REGULAMENTO (UE) 2015/847",
        detail: "Informações que acompanham as transferências de fundos",
      },
      {
        code: "SANÇÕES INTERNACIONAIS",
        detail: "Listas da União Europeia, das Nações Unidas e da OFAC",
      },
    ],
    contactEyebrow: "§ 06 — CONTACTO",
    contactTitle: "A quem escrever.",
    contact: [
      { address: "support@nexmoni.com", purpose: "Questões gerais e apoio" },
      { address: "legal@nexmoni.com", purpose: "Assuntos jurídicos" },
      { address: "compliance@nexmoni.com", purpose: "Cumprimento regulatório" },
      { address: "privacy@nexmoni.com", purpose: "Proteção de dados e privacidade" },
    ],
  },

  faq: {
    eyebrow: "§ 01 — PERGUNTAS FREQUENTES",
    h1: "Perguntas frequentes",
    subtitle: "Respostas às dúvidas mais comuns.",
    sidenoteCount: "perguntas",
    sidenoteHint: "Toca para abrir",
    footnote: "Não encontraste o que procuravas? Escreve-nos e respondemos pelo mesmo canal.",
    feesLink: "Ver tarifas",
    items: [
      {
        q: "Como bloqueio a minha conta ou congelo o cartão?",
        a: [
          "Na própria aplicação, em Cartões ou em Definições, a qualquer hora. O bloqueio é imediato e podes revertê-lo tu mesmo.",
          "Se perdeste o acesso à app, escreve para support@nexmoni.com e bloqueamos nós.",
        ],
        list: [],
      },
      {
        q: "Quem emite o dinheiro e os cartões?",
        a: [
          "A NexMoni OÜ atua como distribuidora. A moeda eletrónica e os cartões são emitidos por entidades autorizadas:",
        ],
        list: [
          { label: "Moeda eletrónica", value: "ConnectPay UAB — Licença EMI n.º 24" },
          { label: "Cartões Visa", value: "Wallester AS" },
          { label: "NexMoni OÜ", value: "Distribuidora autorizada" },
        ],
      },
      {
        q: "Como envio dinheiro?",
        a: [
          "Em Enviar: escolhes o destinatário, indicas o valor e confirmas. Antes de confirmar vês a decomposição completa.",
          "Os prazos dependem da via:",
        ],
        list: [
          { label: "SEPA", value: "De minutos a 1 dia útil" },
          { label: "SWIFT", value: "De 1 a 5 dias úteis" },
        ],
      },
      {
        q: "Quais são as comissões?",
        a: [
          "Todas as comissões são mostradas antes de confirmares a operação: nunca aparecem depois.",
          "A lista completa está na secção de tarifas e chega-te também no email de boas-vindas.",
        ],
        list: [],
      },
      {
        q: "O meu dinheiro está seguro?",
        a: [
          "Os fundos são salvaguardados e mantidos segregados na ConnectPay UAB, conforme as regras europeias de moeda eletrónica.",
          "As comunicações vão cifradas em dupla camada e cada operação exige autenticação forte do cliente (SCA), tal como a PSD2 obriga.",
        ],
        list: [],
      },
      {
        q: "Como verifico a minha identidade (KYC)?",
        a: [
          "Durante o registo, apresentando um documento de identidade e uma selfie. A verificação é feita pela ConnectPay, não pela NexMoni.",
        ],
        list: [],
      },
      {
        q: "Como apresento uma reclamação?",
        a: [
          "Escreve para complaints@nexmoni.com. Respondemos num prazo máximo de 15 dias úteis.",
          "Se a resposta não te satisfizer, podes dirigir-te diretamente à ConnectPay UAB como entidade emissora, ou ao Banco da Lituânia como supervisor.",
        ],
        list: [
          { label: "NexMoni OÜ", value: "complaints@nexmoni.com — 15 dias úteis" },
          { label: "Entidade emissora", value: "ConnectPay UAB" },
          { label: "Supervisor", value: "Banco da Lituânia — lb.lt" },
        ],
      },
      {
        q: "Como contacto o apoio?",
        a: [
          "Pelo assistente dentro da aplicação ou escrevendo para support@nexmoni.com.",
          "Se detetares uma fraude ou um débito que não reconheces, avisa quanto antes fraud@nexmoni.com.",
        ],
        list: [],
      },
    ],
  },
};
