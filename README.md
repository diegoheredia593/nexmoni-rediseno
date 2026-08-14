# NexMoni — landing

Landing de NexMoni en Next.js (App Router) con CSS propio. Recreación del diseño
v1c-f1a "Acero / Halftone" del handoff en `design_handoff_nextmoni_landing/`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

## Idiomas

Cuatro: `es` (por defecto), `en`, `pt`, `lt`. Todas las páginas viven bajo
`/<idioma>`; `middleware.ts` atiende las rutas sin prefijo y redirige según el
`Accept-Language` del visitante, cayendo al español si no hay coincidencia.

El español es la fuente de la forma del diccionario: `Dictionary` se deriva de
`locales/es.ts`, así que **si a una traducción le falta una clave, el build
falla**. Para añadir texto: escribirlo en `es.ts` y resolver los errores de
tipos que aparezcan en los otros tres.

## Rutas

| Ruta | Contenido |
|---|---|
| `/<idioma>` | Landing: hero, cómo funciona, cuenta, cifras, precios, testimonio, alta |
| `/<idioma>/tarifas` | Tarifario completo + calculadora de conversión + terminología |
| `/<idioma>/acerca` | Datos societarios, misión, estado regulatorio, servicios, contacto |
| `/<idioma>/preguntas-frecuentes` | Las ocho preguntas, en acordeón nativo |
| `/api/lead` | Recepción del formulario de alta (sin destino final aún) |

Los *slugs* son los mismos en los cuatro idiomas (`/en/tarifas`, no
`/en/fees`). Traducirlos es posible pero pide un mapa de rutas por idioma.

## Dónde se edita cada cosa

Ningún componente lleva cifras ni copy dentro. Todo vive en `src/content/`:

- **`locales/es.ts`** — todo el texto en español, y la forma del diccionario.
- **`locales/en.ts`, `pt.ts`, `lt.ts`** — las traducciones.
- **`brand.ts`** — lo que no se traduce: nombre societario y direcciones.
- **`pricing.ts`** — **tipos de cambio, diferenciales y corredores.** Es lo que
  alimenta la calculadora. Lleva marcado en comentarios qué falta por definir.
  Los nombres de las monedas se traducen y viven en cada diccionario.

El motor de cálculo está aislado en `src/lib/quote.ts`: comisión de envío primero,
conversión después, y el diferencial expresado también en moneda de origen para
poder sumarlo al coste total.

## Pendientes antes de publicar

1. **Tipos de cambio reales.** Los de `pricing.ts` son orientativos, recogidos de
   prensa financiera el 14-08-2026 para poder enseñar la calculadora. Cinco
   (CLP, BOB, PYG, UYU, VES) son estimaciones sin cotización del día. Al tener
   los definitivos: sustituir y poner `ratesArePlaceholder = false`.
2. **Diferenciales por par.** Los de `spreads` están repartidos dentro de la
   banda 1–3 % que anuncia el tarifario, pero son invención: el diferencial es
   una decisión comercial. Sin entrada en `spreads`, un corredor no se cotiza.
3. **Precio de las remesas.** Los corredores fuera de SEPA usan el SWIFT de
   25 € fijos del tarifario, que es el único precio publicado. En importes de
   remesa pequeños eso pesa mucho: en un envío de 200 € a Colombia el coste
   total sale 28,50 € — un 14 %. Conviene una tarifa escalonada antes de
   publicar, o el propio tarifario delata el problema.
4. **Bolívar venezolano.** Corredor cerrado a propósito: sin fuente fiable de
   cotización, cualquier cifra sería inventada.
5. **Destino del formulario.** `src/app/api/lead/route.ts` valida y registra;
   falta enviar a donde corresponda (y dejar de escribir datos personales al log).
6. **Fotografía.** Los seis marcadores animados llevan su briefing en la leyenda
   y deben sustituirse por foto real con halftone grueso en blanco y negro.
7. **Verificación legal** de importes y definiciones del glosario.
8. **Revisión nativa del lituano.** Es el idioma del supervisor y la
   terminología regulada tiene traducción oficial fijada en la normativa. Ver
   el aviso de `locales/lt.ts`. Inglés y portugués también deberían pasar por
   un jurista en las partes regulatorias.
9. **Variante del portugués.** Ahora es pt-PT. Si el público son brasileños en
   Europa, hay que cambiar vocabulario y `numberLocale` a pt-BR.

## Handoff original

`design_handoff_nextmoni_landing/` conserva la especificación y los prototipos.
`design/NextMoni - Halftone (standalone).html` es el render de referencia.
