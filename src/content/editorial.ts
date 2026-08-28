import type { Locale } from "@/content/dictionary";

type EditorialLine = { label: string; phrase: string };

export const editorialCopy: Record<Locale, readonly EditorialLine[]> = {
  es: [
    { label: "DOS LUGARES", phrase: "Cobras aquí. Ayudas allá." },
    { label: "UN SOLO RECORRIDO", phrase: "Tu dinero cruza el océano. Tú mantienes el control." },
    { label: "TU DINERO", phrase: "No es crédito. Es tu dinero, disponible." },
  ],
  en: [
    { label: "TWO PLACES", phrase: "You earn here. You support them there." },
    { label: "ONE JOURNEY", phrase: "Your money crosses the ocean. You stay in control." },
    { label: "YOUR MONEY", phrase: "It is not credit. It is your money, available." },
  ],
  pt: [
    { label: "DOIS LUGARES", phrase: "Recebes aqui. Ajudas lá." },
    { label: "UM SÓ PERCURSO", phrase: "O teu dinheiro atravessa o oceano. Tu manténs o controlo." },
    { label: "O TEU DINHEIRO", phrase: "Não é crédito. É o teu dinheiro, disponível." },
  ],
  lt: [
    { label: "DVI VIETOS", phrase: "Uždirbi čia. Padedi ten." },
    { label: "VIENA KELIONĖ", phrase: "Tavo pinigai kerta vandenyną. Tu išlaikai kontrolę." },
    { label: "TAVO PINIGAI", phrase: "Tai ne kreditas. Tai tavo pinigai, visada pasiekiami." },
  ],
};