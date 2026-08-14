# NextMoni — landing

Landing de NextMoni en Next.js (App Router) con CSS propio. Recreación del diseño
v1c-f1a "Acero / Halftone" del handoff en `design_handoff_nextmoni_landing/`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Landing: hero, cómo funciona, cuenta, cifras, precios, testimonio, alta |
| `/tarifas` | Tarifario completo + calculadora de conversión + terminología |
| `/api/lead` | Recepción del formulario de alta (sin destino final aún) |

## Dónde se edita cada cosa

Ningún componente lleva cifras ni copy dentro. Todo vive en `src/content/`:

- **`site.ts`** — copy de la landing: hero, pasos, características, planes, glosario.
- **`fees.ts`** — tarifario publicado y terminología del Banco de Lituania.
- **`pricing.ts`** — **tipos de cambio, diferenciales y corredores.** Es lo que
  alimenta la calculadora. Lleva marcado en comentarios qué falta por definir.

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

## Handoff original

`design_handoff_nextmoni_landing/` conserva la especificación y los prototipos.
`design/NextMoni - Halftone (standalone).html` es el render de referencia.
