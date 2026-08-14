/**
 * Registro de idiomas.
 *
 * El español es la fuente de la forma: `Dictionary` se deriva de `es`, así que
 * si a una traducción le falta una clave el build falla. Para añadir texto
 * nuevo: escribirlo primero en `locales/es.ts` y luego resolver los errores de
 * tipos que aparezcan en los otros tres archivos.
 */

import { es } from "./locales/es";
import { en } from "./locales/en";
import { pt } from "./locales/pt";
import { lt } from "./locales/lt";

export const locales = ["es", "en", "pt", "lt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Ensancha los literales de `as const` a `string` y quita el `readonly`,
 * conservando la longitud de las tuplas: una traducción con un paso de menos
 * en `steps` no compila.
 */
type Widen<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: Widen<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: Widen<T[K]> }
      : T;

export type Dictionary = Widen<typeof es>;

const dictionaries: Record<Locale, Dictionary> = { es, en, pt, lt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Etiquetas de los botones del selector de idioma. */
export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
  lt: "LT",
};

/** Nombre del idioma en su propia lengua, para el `title` de cada botón. */
export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  lt: "Lietuvių",
};
