# NexMoni — landing

Landing de NexMoni en Next.js (App Router) con CSS propio.

> **¿Retomas el proyecto?** Lee primero [`HANDOFF.md`](HANDOFF.md): estado
> actual, decisiones de diseño con su porqué, y las trampas del despliegue.

> **El bloque de precios ya no sigue el sistema.** Usa `spotlight-card`
> (`src/components/ui/`), un componente importado con radio 16 px, sombra y
> desenfoque, elegido por el cliente. Es la razón de que el proyecto tenga
> Tailwind. Ver `HANDOFF.md` §3, regla 4.

## Sistema de diseño: «Acero templado»

Parte del encargo v1c-f1a "Acero / Halftone" (`design_handoff_nextmoni_landing/`)
y le aplica cuatro disciplinas de composición. Todo vive en `globals.css`.

**Se conserva la identidad:** paleta acero + óxido, Archivo y Space Mono,
filete de 1 px sin sombras, radio 0 y el lenguaje halftone.

**Se adopta la disciplina:**

1. **Contención** — 1200 px centrado. Solo la banda de cifras va a sangre.
2. **Escala** — nueve tamaños declarados (12/13/15/17/20/24/32/48/64), con el
   interletraje atado a cada peldaño. Prohibidos los medios píxeles.
3. **Un acento** — el óxido solo en botones de acción: cuatro usos por página.
   Números, etiquetas y distintivos van en gris.
4. **Aire** — 96 px entre secciones. Las rejillas de tres tarjetas son ahora
   listas con filete y dos columnas; los planes conservan las tres columnas
   porque en precios es el patrón que la gente ya sabe leer.

El encargo fotográfico baja de seis piezas a dos: figura de portada y retrato
del testimonio.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

### Tailwind

Está instalado **solo** para `spotlight-card`, y se importa por capas sueltas
en `globals.css` **sin preflight**. El preflight reinicia márgenes, bordes y
tipografía de los elementos base, y este archivo tiene 500 líneas escritas a
mano que dependen de esos valores: importarlo entero desmonta el resto del
sitio. Si algún día se añade `@import "tailwindcss"` a secas, eso es lo que
pasará.

## Idiomas

Cuatro: `es` (por defecto), `en`, `pt`, `lt`. Todas las páginas viven bajo
`/<idioma>`; `middleware.ts` atiende las rutas sin prefijo y redirige según el
`Accept-Language` del visitante, cayendo al español si no hay coincidencia.

El español es la fuente de la forma del diccionario: `Dictionary` se deriva de
`locales/es.ts`, así que **si a una traducción le falta una clave, el build
falla**. Para añadir texto: escribirlo en `es.ts` y resolver los errores de
tipos que aparezcan en los otros tres.

## Rutas

Los *slugs* se traducen. El mapa está en `src/content/routes.ts`, que es lo
único que hay que tocar para renombrar una ruta.

| Página | ES | EN | PT | LT |
|---|---|---|---|---|
| Portada | `/es` | `/en` | `/pt` | `/lt` |
| Tarifas | `/es/tarifas` | `/en/fees` | `/pt/tarifas` | `/lt/ikainiai` |
| Acerca | `/es/acerca` | `/en/about` | `/pt/sobre-nos` | `/lt/apie-mus` |
| FAQ | `/es/preguntas-frecuentes` | `/en/faq` | `/pt/perguntas-frequentes` | `/lt/duk` |

`/api/lead` recibe el formulario y no se traduce.

## El embudo

**El objetivo es la descarga de la aplicación.** Todas las llamadas a la acción
—barra superior, portada, los tres planes y el pie— llevan a `#descargar`.

Las tres páginas interiores cierran con `PageCloser`: hasta ahora terminaban
dejando al lector frente al pie justo cuando acababa de resolver su duda, y el
único enlace a la descarga era el botón de la barra. Cada una trae su propio
texto en `closers` porque el momento en que se lee es distinto, y su enlace
secundario apunta a la página interior que al lector le queda por ver. Es el
único uso del óxido en esas tres páginas.

Esa sección ofrece los distintivos de App Store y Google Play, un código QR
para quien navega desde el ordenador, y como respaldo el formulario, que ahora
envía el enlace de descarga en lugar de abrir una cuenta.

Los enlaces de las tiendas viven en `stores`, dentro de `content/brand.ts`.
Mientras `published` sea `false`, los distintivos se muestran sin enlace y
anunciados como próximos.

Un slug de otro idioma o uno antiguo (`/en/tarifas`) redirige con 308 al
canónico, para no servir el mismo contenido en dos direcciones. **Cambiar un
slug ya publicado tira el posicionamiento de esa página**: si hay que hacerlo,
añadir el viejo a `legacySlugs` para que siga redirigiendo.

Cada página emite su canónico, `hreflang` para los cuatro idiomas y un
`x-default` que apunta a la ruta sin prefijo, la que negocia por navegador.
`sitemap.xml` lista las 16 con sus alternativas.

## Dónde se edita cada cosa

Ningún componente lleva cifras ni copy dentro. Todo vive en `src/content/`:

- **`locales/es.ts`** — todo el texto en español, y la forma del diccionario.
- **`locales/en.ts`, `pt.ts`, `lt.ts`** — las traducciones.
- **`brand.ts`** — lo que no se traduce: nombre societario y direcciones.
- **`routes.ts`** — slugs por idioma y redirecciones de los antiguos.
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
   Ahora promete enviar el enlace de descarga: hay que cumplirlo.
6. **Fichas de las tiendas.** Faltan las URL reales en `stores`. Y los
   distintivos actuales están compuestos con el sistema de la marca: Apple y
   Google exigen los suyos oficiales, con su logotipo y sus márgenes mínimos.
   El código QR también es un marcador hasta que existan esas URL.
7. ~~**Fotografía.**~~ **Hecho.** La figura de portada y el retrato del
   testimonio ya están montados, en `public/foto/`. **Son imágenes generadas
   por IA, no fotografía**; los masters y el detalle del procesado están en
   `design_handoff_nextmoni_landing/originales/`. El halftone lo pone el CSS
   encima (`.hero-figure__screen`), así que las imágenes van sin tramar: si
   alguna vez se sustituyen por foto real, que venga también sin tramar o las
   dos retículas producirán muaré.
8. **Verificación legal** de importes y definiciones del glosario.
9. **Revisión nativa del lituano.** Es el idioma del supervisor y la
   terminología regulada tiene traducción oficial fijada en la normativa. Ver
   el aviso de `locales/lt.ts`. Inglés y portugués también deberían pasar por
   un jurista en las partes regulatorias.
10. **Variante del portugués.** Ahora es pt-PT. Si el público son brasileños en
   Europa, hay que cambiar vocabulario y `numberLocale` a pt-BR.
11. **Dominio real.** `NEXT_PUBLIC_SITE_URL` decide el dominio del canónico, el
    `hreflang` y el sitemap. Por defecto asume `https://nexmoni.com`, deducido
    del dominio de correo. Con un dominio equivocado el buscador emparejaría
    mal las cuatro versiones de cada página: fijarlo en el despliegue.

## Handoff original

`design_handoff_nextmoni_landing/` conserva la especificación y los prototipos.
`design/NextMoni - Halftone (standalone).html` es el render de referencia.
