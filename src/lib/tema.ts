/**
 * Clave de `localStorage` donde se guarda el tema elegido.
 *
 * Vive en un módulo propio, SIN `"use client"`, y esa es toda la razón de que
 * exista este archivo. La declaraba antes el componente del conmutador, que sí
 * es de cliente; `ThemeScript` es de servidor, y una constante importada a
 * través de esa frontera no llega como valor sino como referencia de cliente.
 * El script salía al HTML con `localStorage.getItem(undefined)` y el tema
 * elegido no sobrevivía a la recarga.
 *
 * Un módulo neutro lo importan los dos lados y ninguno lo transforma.
 */
export const CLAVE_TEMA = "nexmoni:tema";
