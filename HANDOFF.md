# Traspaso de sesión — Rediseño Litoral de NexMoni

Este archivo recoge lo que **no** está en el código: decisiones tomadas, arquitectura de diseño, y las trampas que solo se aprenden habiéndolas pisado. El `README.md` explica cómo construir; esto explica cómo llegamos aquí y qué falta.

Última actualización: commit `e9819db` (2026-08-25).

---

## 1. Disposición de repositorios

| Repositorio | Rama | Propósito | Despliegue |
|---|---|---|---|
| `diegoheredia593/webapp` | `main` @ `8bd1a7b` | **Original intacto** — diseño "Acero templado" | *Congelado* |
| `diegoheredia593/nexmoni-rediseno` | `main` ← `rediseno` | Rediseño Litoral en desarrollo | Cloudflare Workers |

**Flujo de trabajo:** desarrollar en rama `rediseno`, push a `diegoheredia593/nexmoni-rediseno`, y desde allí despliegue automático a Cloudflare.

**El original nunca se toca.** El cliente quiso ver ambas versiones en paralelo durante la presentación.

---

## 2. Qué es esto

Rediseño completo de la landing de **NexMoni** (Estonia), distribuidor de **ConnectPay UAB** (EMI licencia 24, Banco de Lituania). Envíos de dinero Europa → Latinoamérica.

**Cambios principales:**
- **Paleta:** Cambio de "Acero templado" (óxido `#8d5217`) a sistema **Litoral** con tres paletas intercambiables (Litoral, Altiplano, Tránsito)
- **Temas:** Dos temas día/noche con selector animado en el encabezado
- **Interactividad:** iPhone 16 con scroll paralelo, animaciones de texto, gradientes animados, transición circular al cambiar tema
- **Autoridad:** Fotografía real en lugar de generada
- **Calculadora:** Sin movimiento de animación (como se pidió)

**Stack:** Next.js 15.5.23 (App Router), React 19.1.1, TypeScript 5.7.2, Tailwind v4 sin preflight, GSAP 3.15 + ScrollTrigger, `motion` 13.1, View Transitions API.

**Despliegue:** Cloudflare Workers via `@opennextjs/cloudflare` 1.20.2.

---

## 3. Arquitectura de diseño: Sistema de dos ejes

### Paletas × Temas = 6 apariencias

```
data-paleta: "litoral" | "altiplano" | "transito"
data-tema:   "dia"     | "noche"
```

Cada combinación es un bloque `:root[…]` en `src/app/globals.css`:

| | Día | Noche |
|---|---|---|
| **Litoral** | `:root` (líneas 1–184) | `:root[data-tema="noche"]` (185–227) |
| **Altiplano** | `:root[data-paleta="altiplano"]` (228–244) | `…[data-paleta="altiplano"][data-tema="noche"]` (245–267) |
| **Tránsito** | `:root[data-paleta="transito"]` (268–284) | `…[data-paleta="transito"][data-tema="noche"]` (285–301) |

**Litoral Día (invariantes + valores Litoral):**
```
--papel: #f4f3ef        (fondo)
--tinta: #131719        (texto primario)
--noche: #0e2a2d        (fondo hero nocturno, rara vez usado)
--acento: #0f5f63       (botones, iconos activos)
--acento-alto: #5fb8bd  (acentos secundarios)
--senal: #2f7d4a        (éxito)
--aviso: #8a5a12        (advertencia)
--error: #a33720        (error)
```

Todas las variantes han sido **verificadas WCAG AA** en contraste.

### Capa de alias: Compatibilidad sin tocar CSS

El proyecto usa nombres antiguos de tokens (`--ink`, `--surface`, `--accent`, `--hairline`). Todos apuntan al sistema Litoral:

```css
--ink: var(--tinta);
--surface: var(--papel);
--accent: var(--acento);
--hairline: #d9d6cf;  /* Derivado de Litoral Día */
```

**Efecto:** ~700 líneas de CSS de componentes heredan la nueva paleta sin cambios. Un componente que hace `color: var(--ink)` funciona en las 6 variantes automáticamente.

### Triples RGB para opacidad

Gradientes, medios tonos y resplandores del puntero usan variables `--rgb-*`:

```css
--rgb-papel: 244 243 239;
--rgb-tinta: 19 23 25;
--rgb-acento: 15 95 99;
```

Se invocan con `rgb(var(--rgb-*) / opacity)` en `@supports (color: rgb(...))`.

---

## 4. Stack técnico completo

### Runtime y framework
- **Next.js 15.5.23** — App Router, renderizado en servidor → Cloudflare Workers
- **React 19.1.1** — Cliente
- **TypeScript 5.7.2** — Tipado completo
- **Tailwind CSS v4.3.3** — Utilidades sin preflight (importado manual: `theme.css` + `utilities.css`)

### Animación
- **GSAP 3.15.0** — ScrollTrigger para animaciones vinculadas a scroll
  - `gsap.context()` para limpieza de referencias
  - Guarded con `useReducedMotion()` (comprobado en **JavaScript**, no en CSS)
- **Motion 13.1.0** — Animaciones de entrada/salida (deliberadamente NO Framer Motion para evitar libs de animación duplicadas)
- **View Transitions API** — Transición circular al cambiar tema, Chromium-only con detección de características

### Componentes de UI
- **Radix UI** (`@radix-ui/react-slot@^1.3.3`) — Primitivos sin estilo
- **Lucide React** (`^1.33.0`) — Iconos SVG
- **shadcn/ui** — Componentes de mercado integrados (accordion, etc.)

### Utilities
- **class-variance-authority** (`^0.7.1`) — API de variantes
- **clsx** (`^2.1.1`) — Fusión condicional de clases
- **tailwind-merge** (`^3.6.0`) — Fusión inteligente de clases Tailwind

### Despliegue
- **@opennextjs/cloudflare** (`^1.20.2`) — Adaptador Next.js → Cloudflare Workers
- **wrangler** (`^4.125.0`) — CLI de Cloudflare
- **nodejs_compat** — Flag para compatibilidad Node.js en Workers

### Dev
- ESLint (Next.js) — Linting integrado
- TypeScript strict — Tipado completo

### Scripts
```
npm run dev              # Desarrollo local
npm run build            # Build Next.js
npm run start            # Servidor Next.js
npm run lint             # ESLint
npm run typecheck        # TypeScript check
npm run cf:build         # Build para Cloudflare
npm run cf:preview       # Preview local de Cloudflare
npm run cf:deploy        # Deploy a Cloudflare
```

---

## 5. Componentes y arquitectura

### Componentes de diseño nuevos esta sesión

| Componente | Archivo | Propósito |
|---|---|---|
| `HeroCinematic` | `src/components/HeroCinematic.tsx` | Hero rediseñado con gradiente animado |
| `PhoneScroll` | `src/components/PhoneScroll.tsx` | iPhone 16 (393×852pt) con canvas scrubbed a scroll |
| `FeeBar` | `src/components/FeeBar.tsx` | Barra visual de tarifa, actualizada en vivo por la calculadora |
| `ThemeToggle` | `src/components/ui/theme-toggle.tsx` | Selector día/noche (64×32, lucide Moon/Sun) |
| `PaletteSwitch` | `src/components/PaletteSwitch.tsx` | Selector de las tres paletas (Litoral/Altiplano/Tránsito) |
| `TextRoll` | `src/components/glossary/TextRoll.tsx` | Animación de scroll de texto (hero) |
| `RandomLetterSwap` | `src/components/glossary/RandomLetterSwap.tsx` | Glitch de letras aleatorias (deferred motion) |
| `MovingBorder` | `src/components/ui/moving-border.tsx` | Borde animado (deferred motion) |
| `AppIcon` | `src/components/AppIcon.tsx` | Marca vectorial (3 rutas copiadas byte-a-byte de `NexMoni_logo_vector.svg`) |

**Componentes heredados que heredan la paleta automáticamente:** ~30 componentes (Calculator, CTA, Footer, Header, etc.) sin cambios en su CSS.

### Estructura de directorios

```
src/
├── app/
│   ├── globals.css                  (1696 líneas: sistema de diseño)
│   ├── layout.tsx                   (root layout)
│   └── [locale]/
│       ├── page.tsx                 (landing principal)
│       ├── [slug]/page.tsx           (páginas interiores)
│       └── layout.tsx
├── components/
│   ├── HeroCinematic.tsx
│   ├── PhoneScroll.tsx
│   ├── FeeBar.tsx
│   ├── AppIcon.tsx
│   ├── Calculator.tsx               (FeeBar anidado)
│   ├── ui/
│   │   ├── theme-toggle.tsx
│   │   ├── moving-border.tsx
│   │   └── [...shadcn components]
│   ├── glossary/
│   │   ├── TextRoll.tsx
│   │   ├── RandomLetterSwap.tsx
│   │   └── [...otros]
│   └── [~35 componentes en total]
├── lib/
│   ├── tema.ts                      (CLAVE_TEMA = "nexmoni:tema", neutral — sin "use client")
│   ├── cambiar-tema.ts              ("use client", export Tema, temaVigente, cambiarTema)
│   ├── quote.ts                     (motor de cotización)
│   ├── format.ts                    (formateo de números)
│   ├── utils.ts
│   └── site-url.ts
├── content/
│   ├── appDemo.ts                   (figuras del teléfono desde midRates)
│   ├── brand.ts                     (marca, tiendas de apps)
│   ├── dictionary.ts                (diccionario del cliente)
│   ├── pricing.ts                   (tipos de cambio, diferenciales)
│   ├── routes.ts
│   └── locales/
│       ├── es.ts                    (fuente de verdad)
│       ├── en.ts
│       ├── pt.ts
│       └── lt.ts
├── hooks/
│   ├── useReducedMotion.ts          ("use client", detección de preferencia)
│   └── [otros custom hooks]
└── pages/
    └── api/
        └── lead/
            └── route.ts             (validación, sin destino todavía)
```

---

## 6. Decisiones de movimiento y animación

### Regla: Motion en JS, no en CSS

`prefers-reduced-motion` se **comprueba en JavaScript**, no en CSS:

```typescript
// useReducedMotion.ts — "use client"
const [menosMovimiento, setMenosMovimiento] = useState<boolean | null>(null);
useEffect(() => {
  setMenosMovimiento(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}, []);

// Luego en componentes:
{!menosMovimiento && <GSAPAnimation />}
```

**Por qué:** GSAP y `motion` escriben estilos en línea que una media query CSS no puede alcanzar.

### Trampa: Desajuste de hidratación

Si un componente **bifurca estructuralmente** en función de `useReducedMotion()`:
- Servidor renderiza sin la rama (devuelve `null`)
- Cliente hidrata con la rama (devuelve `true` o `false`)
- React ve árboles diferentes → fuerza regeneración → **borra `data-tema`**

**Solución:** diferir la rama tras un estado `montado`:

```typescript
const [montado, setMontado] = useState(false);
useEffect(() => setMontado(true), []);

if (!montado) return null;  // O render neutro sin rama
return !menosMovimiento && <Animated /> || <Static />;
```

Afecta a: `TextRoll.tsx`, `RandomLetterSwap.tsx`, `MovingBorder.tsx`.

### Transición de tema: View Transitions API

Al cambiar tema, se lanza una transición circular desde el toggle hacia abajo:

```typescript
// cambiar-tema.ts
const siguiente = temaVigente() === "dia" ? "noche" : "dia";

const puedoTransicionar = 
  typeof document !== "undefined" && 
  "startViewTransition" in document &&
  !menosMovimiento;

if (puedoTransicionar) {
  document.startViewTransition(() => {
    document.documentElement.dataset.tema = siguiente;
  });
} else {
  document.documentElement.dataset.tema = siguiente;
}

localStorage.setItem(CLAVE_TEMA, siguiente);
```

**Regla:** dos guardias obligatorios:
1. Sin `startViewTransition` → cambio plano
2. Movimiento reducido → cambio plano

### FOUC (flash de contenido sin estilo)

Script bloqueante en `app/layout.tsx` que escribe `data-tema` antes del first paint:

```html
<script dangerouslySetInnerHTML={{ __html: `
  (function() {
    const t = localStorage.getItem("nexmoni:tema") || "dia";
    document.documentElement.dataset.tema = t;
  })()
` }} />
```

Esto evita parpadeo tema-día → tema-noche en reload.

---

## 7. Trampas ya pisadas esta sesión

### Preflight de Tailwind deshabilitado

El proyecto importa Tailwind sin preflight (solo `theme.css` + `utilities.css`). El componente `border` de Tailwind establece solo el ancho; el estilo viene del preflight.

**Trampa:** `<div className="border">` → `border: 0px` (comprobado).
**Solución:** `<div className="border border-solid">`.

Esto afectó a: `ThemeToggle.tsx`.

### `overflow: clip` en `.fone` rompió `position: sticky`

```css
.fone { overflow: clip; }  /* ❌ crea nuevo contexto de bloque contenedor */
```

La sección se convierte en el bloque contenedor → el teléfono sticky se libera pronto (medido: −195/−1310px en lugar de pegado a 101px).

**Solución:** borrar `overflow: clip`; el `minmax(0, 1fr)` en la grid ya contiene.

### `align-items: start` encogió `.fone__col`

```css
.fone__col { align-items: start; }  /* ❌ ancho: 744px */
```

El valor de inicio acorta las columnas grid. Borrado; estirar por defecto hizo 2970px.

### Alias `--on-dark` confuso

**Uso previo:** "sobre fondo oscuro" (hero nocturno).
**Uso real:** todos los 6 sitios usan `--on-dark` sobre fondos `--ink` (claro en Litoral día, oscuro en Litoral noche).

**Trampa:** `--on-dark: var(--noche)` producía claro-sobre-claro en noche (botón Descargar: 1.18:1).
**Solución:** `--on-dark: var(--papel)` → 13.63:1.

```css
/* En globals.css, línea 41 con nota: */
--on-dark: var(--papel);
--on-dark-62: rgb(var(--rgb-papel) / 0.62);
--on-dark-25: rgb(var(--rgb-papel) / 0.25);
```

### Ancho de la barra de tema (header)

Presupuesto: 52px para el selector día/noche (sin etiqueta). El lituano es largo; el conmutador se desbordó 16px a 360px.

**Solución:** mover el selector **al panel del menú** (debajo de 620px). El interruptor de la barra queda oculto.

```css
.tema { width: 52px; }
@media (max-width: 620px) { .tema { display: none; } }
@media (max-width: 620px) { .menu-tema { display: flex; } }
```

### Desbordamiento del icono de 360px

Añadir la marca junto al wordmark añadió 30px a la izquierda. A 360px, el lituano desbordaba 16px más.

**Solución:** ocultar el icono en la **barra** (no en el menú) debajo de 400px.

```css
@media (max-width: 400px) { .app-icon-header { display: none; } }
```

### Caché `.next` mezclado

Alternar `next build` y `next dev` sin limpiar → `Cannot find module './vendor-chunks/motion-dom.js'` y 500s.

**Solución:** `rm -rf .next` primero, luego servidor/build.

### `ThemeScript` importando desde módulo "use client"

`ThemeScript` es un componente servidor. Importar `CLAVE_TEMA` desde `cambiar-tema.ts` (`"use client"`) emitía `localStorage.getItem(undefined)` → tema no persistía tras reload.

**Solución:** módulo neutral `src/lib/tema.ts` (sin directiva) que exporta solo `CLAVE_TEMA`.

### Desajuste de tema en hidratación

Tres componentes (`TextRoll`, `RandomLetterSwap`, `MovingBorder`) bifurcaban en `useReducedMotion()`. React regeneraba el árbol, borrando `data-tema`.

**Solución:** diferir rama con estado `montado` (ver sección 6).

### La barra de tarifa contradecía la calculadora

Motor de cotización: `amountConverted = amount - transferFee` (deducción).
Mi barra: la sumaba (203 para enviar 200) ❌.

**Solución:** adoptar modelo del motor `send - totalCost`.

### TextRoll desapareció del hero

Fue borrado en commit `c57d9cd` al reemplazar el hero con `HeroCinematic`. Git log con `-S TextRoll` lo confirmó.

**Solución:** restaurado.

### Medición de contraste incluyendo alfa

Medí `rgba(..., 0.42)` como si fuera opaco: `match(/\d+/g)` dropaba el alfa.

**Solución:** actualizar fórmula para restar opacidad antes de calcular contraste relativo.

---

## 8. Lo que está a medias y por qué

### Decisión de precios — más importante

La tarifa SWIFT de 25 € fijos fuera de SEPA da:
- 200 EUR → Colombia: 14.2% (`(28.5 / 200) × 100`)
- 50 EUR → Colombia: **51.0%** (más que lo que se remite)

La barra de tarifas lo **muestra sin piedad** porque es correcto. El problema no es la web; es el tarifario. El cliente lo dejó aparcado a propósito, sabiendo el riesgo visual.

### Activos pendientes

| Activo | Ubicación | Estado | Notas |
|---|---|---|---|
| `public/video/hero.mp4` | Hero background | **Faltan los archivos** | User debe descargar de Higgsfield (2 videos 1080p/8s en la sesión anterior) y colocar; hero ya está cableado |
| Icono de ConnectPay | Footer/legal | Deferred | Documentación oficial no disponible |
| Marca SEPA | Footer | Deferred | Documentación oficial no disponible |
| Distintivos App Store/Google Play | Footer | Deferred | Deben ser oficiales, no compuestos |
| Logotipo del Banco de Lituania | Pie legal | Deferred | Autoridad institucional, deferred |

### Bloqueadores abiertos

| Bloqueador | Prioridad | Situación |
|---|---|---|
| `/api/lead` sin destino real | **CRÍTICO** | Valida y registra, no envía; promete enlace de descarga |
| Páginas legales (4 faltantes) | **CRÍTICO** | Privacidad, Términos, AML/KYC, Quejas — cliente sin documentación |
| Revisión lituana nativa | **Alta** | Terminología regulada lituana; aviso en `locales/lt.ts` |
| Decisión tarifa remesa | **Alta** | Problema comercial que se ve (51% a 50 EUR), no técnico |
| Cabeceras de seguridad / Rate limiting | Alta | No aplicado; sitio es público ahora |
| Contraste del toggle scrolleado | Media | 1.11:1/1.06:1 en scroll (< 3:1 WCAG) — flagged, left as designed |

---

## 9. Variables de entorno y configuración Cloudflare

```
NEXT_PUBLIC_PREVIEW=1              # Activa noindex (demo, no indexable)
NEXT_PUBLIC_SITE_URL=...           # URL raíz para links absolutos
NEXT_PUBLIC_PALETA_DEFAULT=litoral # Paleta por defecto
```

En `wrangler.toml`:
```toml
nodejs_compat = true
```

---

## 10. Cómo continuar

### Para la siguiente sesión

```
Trabajo en repositorio diegoheredia593/nexmoni-rediseno, rama rediseno.
Lee HANDOFF.md y README.md antes de nada.
Desarrolla en rediseno, push a origin, despliegue automático a Cloudflare.

El original (diegoheredia593/webapp @ 8bd1a7b) nunca se toca.
```

### Tareas pendientes en orden de impacto

1. **Descargar videos hero de Higgsfield** (sesión anterior, widget)
   - Dos videos 1080p/8s; elegir uno
   - Colocar en `public/video/hero.mp4`
   - Comprimir: `ffmpeg -i hero.mp4 -c:v hevc_videotoolbox -b:v 2.5M hero-compressed.mp4`
   - **Sin cambios de código; hero ya está cableado**

2. **Destino real de `/api/lead`**
   - Hoy: logging en stderr (datos personales en texto plano)
   - Supabase está disponible (`fgjsmmnlftoixannpiiy`)
   - Tabla `leads` con RLS cerrada, inserción solo desde servidor
   - **Bloqueador:** usuario promete link de descarga, formulario no se envía a ningún lado

3. **Páginas legales** (4 nuevas rutas)
   - Privacidad, Términos, AML/KYC, Quejas
   - Esperar a que cliente entregue documentación

4. **Decidir tramo de remesa** ($, €, etc.)
   - Comercial, no técnico
   - Afecta tarifa visible y confianza del usuario

5. **Cabeceras de seguridad** — el sitio es público
   - CSP, X-Frame-Options, etc.
   - Rate limiting en `/api/lead`

---

## 11. Pendientes menores

- **Fotografías:** 7 webp en `public/foto/`; Higgsfield fue bloqueado (403 en egress), URL local usada como fallback. Considerar comprimir a ~600px (no redimensionadas por Cloudflare `next/image`).
- **Revisión de traductor lituano** — aviso en `locales/lt.ts`
- **Portugués pt-PT vs pt-BR** — actualmente es pt-PT; cambiar si el público es brasileño en Europa
- **Distintivos App Store/Google Play** — actuales son compuestos; deben ser oficiales antes de publicar
- **FAQ estructurada** — sin `FAQPage` ld+json; barato de añadir
- **Avisos de vulnerabilidad en Next.js** — 3 high-severity en `next@15.5.23`; sin acción hasta que haya update disponible

---

## Archivos clave para leer primero

1. **`src/app/globals.css`** — Toda la paleta, alias, y reglas de animación (1696 líneas)
2. **`src/lib/cambiar-tema.ts`** — Cambio de tema con View Transitions
3. **`src/components/PhoneScroll.tsx`** — Parallax del iPhone
4. **`src/components/FeeBar.tsx`** — Barra de tarifa dinámica
5. **`src/components/ui/theme-toggle.tsx`** — Toggle día/noche y su patrón de sincronización
