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

1. **Tipos de cambio reales.** Los de `pricing.ts` son provisionales. Mientras
   `ratesArePlaceholder` sea `true`, la calculadora muestra un aviso visible.
2. **Diferenciales por par.** Sin su entrada en `spreads`, un corredor no se
   cotiza: se anuncia como próximo en lugar de inventar una cifra.
3. **Corredores fuera de SEPA.** Solo EUR→EUR tiene precio cerrado. Para activar
   otro: añadir su diferencial, fijar la vía y poner `status: "live"`.
4. **Destino del formulario.** `src/app/api/lead/route.ts` valida y registra;
   falta enviar a donde corresponda (y dejar de escribir datos personales al log).
5. **Fotografía.** Los seis marcadores animados llevan su briefing en la leyenda
   y deben sustituirse por foto real con halftone grueso en blanco y negro.
6. **Verificación legal** de importes y definiciones del glosario.

## Handoff original

`design_handoff_nextmoni_landing/` conserva la especificación y los prototipos.
`design/NextMoni - Halftone (standalone).html` es el render de referencia.
