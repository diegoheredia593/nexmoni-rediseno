/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CIFRAS DE LA MAQUETA DE LA APLICACIÓN
 * ─────────────────────────────────────────────────────────────────────────────
 * Alimenta el teléfono que se desplaza con la página. Se deriva de `midRates`
 * en lugar de escribir números a mano para que la maqueta no pueda contradecir
 * a la calculadora: si mañana entran los tipos reales, el teléfono se corrige
 * solo.
 *
 * ⚠ DOS COSAS SIGUEN SIENDO ORIENTATIVAS:
 *   1. El tipo, porque `ratesArePlaceholder` sigue en `true`.
 *   2. `comisionDemo` y `diferencialDemo`. NO salen del tarifario: el tarifario
 *      solo publica el SWIFT de 25 € fijos, que en un envío de 200 € daría un
 *      14 % y convertiría la maqueta en un argumento en contra. Aquí se usa el
 *      tramo de remesa que quedó propuesto y sin decidir (1,5 %, mínimo 3 €).
 *      Al cerrar el precio real: traer esto de `pricing.ts` y borrar la nota.
 *
 * El corredor es España → Ecuador porque Ecuador está dolarizado —no hace falta
 * inventar una cotización— y porque es el destino de la fotografía del sitio.
 */

import { midRates } from "./pricing";

const IMPORTE = 200;
const comisionDemo = 3.0;      // 1,5 % con mínimo de 3 € — tramo propuesto
const diferencialDemo = 0.012; // 1,2 %, dentro de la banda 1–3 % del tarifario

const tipoAplicado = midRates.USD * (1 - diferencialDemo);

export const appDemo = {
  origen: "EUR",
  destino: "USD",
  destinatario: "Rosa Chávez",
  destinatarioCorto: "Rosa",
  banco: "Guayaquil · ****4471",
  referencia: "NX-8842-QG",
  importe: IMPORTE,
  comision: comisionDemo,
  diferencial: IMPORTE * diferencialDemo,
  total: IMPORTE + comisionDemo,
  tipo: tipoAplicado,
  recibe: IMPORTE * tipoAplicado,
  contactos: [
    { iniciales: "RC", nombre: "Rosa Chávez", lugar: "Guayaquil" },
    { iniciales: "MJ", nombre: "Marta Jaramillo", lugar: "Quito" },
    { iniciales: "LP", nombre: "Luis Peña", lugar: "Manta" },
  ],
  horas: ["09:41", "09:41", "09:43", "12:10"],
} as const;

/** Formateo con el `numberLocale` del diccionario para que 227,84 no salga
 *  como 227.84 en español ni al revés en inglés. */
export function dinero(valor: number, moneda: string, locale: string) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: moneda,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
}

export function tasa(valor: number, locale: string) {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  }).format(valor);
}
