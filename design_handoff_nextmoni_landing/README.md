# Handoff: NextMoni — Landing page (v1c-f1a "Acero / Halftone")

## Overview
Spanish-language marketing landing page for **NextMoni**, a EUR e-money account aimed at Latin American migrants living in the EU (licence No. 24, Bank of Lithuania). The page explains the product, the three-step onboarding, the plan tiers, the full fee schedule, and the security/regulatory story, and converts to a lead form ("Abrir cuenta").

Two things distinguish this design from a generic fintech page:
1. A **Swiss/ledger editorial system** — hairline 1px rules, `§ NN` section numbering, mono eyebrows, no rounded corners, no drop shadows on content.
2. A **glossary tooltip layer** — regulated jargon (SEPA, SWIFT, IBAN, KYC, AML, E2E, FX, PSD2, GDPR) is auto-detected anywhere in the copy and explained on hover/focus.

## About the Design Files
The files in `design/` are **design references authored as HTML** — prototypes that show the intended look, copy and behaviour. They are **not production code to copy**. `NextMoni v1c-f1a - Halftone.dc.html` uses an in-house prototyping runtime (`support.js`, `<x-dc>`, `<sc-for>`, `<sc-if>`, `{{ }}` holes, `style-hover` attributes); do not port that runtime.

The task is to **recreate this design in the target codebase's own environment** (Next.js/React, Astro, Vue, etc.) using its established component patterns, styling solution and content model. If no codebase exists yet, pick the appropriate framework — this is a static marketing page with one form, so a static-site framework (Next.js App Router or Astro) with Tailwind or CSS modules is a good default. `NextMoni - Halftone (standalone).html` is the same design bundled into a single self-contained file (fonts and runtime inlined) — the easiest way to open it in a browser and inspect the real rendering.

Repeating `<sc-for>` blocks should become a `.map()` over a data array; the arrays are all listed under **Content data** below and are the intended CMS/constants shape.

## Fidelity
**High-fidelity.** Final colours, type, spacing, copy and interaction timings. Recreate pixel-accurately using the codebase's libraries. Two deliberate exceptions:

- **Photography is not final.** Every image area is a placeholder: an animated halftone graphic with a mono caption that acts as the **photo brief** (aspect ratio, framing, subject, lighting, treatment). These animated placeholders must be replaced by real photographs with a coarse black-and-white halftone treatment. Do not ship the animated placeholders.
- The lead form is presentational only (no endpoint, no validation wired).

## Layout system (global)
- Single column, full-bleed sections stacked vertically. **No max-width container** — sections span the viewport and are padded `40px` horizontally.
- Section vertical rhythm: `padding: 88px 40px` for standard sections; image sections use `padding: 0 40px 40px`; split sections use `78px 40px` per pane.
- Every section is separated by `border-bottom: 1px solid rgba(20,24,29,.16)`.
- **Section headers** use a two-column grid: `grid-template-columns: 220px 1fr; gap: 40px`. The left column holds the mono `§ NN — NAME` label; the right holds the `<h2>` plus a lead paragraph.
- **Hairline card grids** are built with `display:grid; gap:1px` over a `background: rgba(20,24,29,.16)` wrapper, each cell painted `#e5e8ea` — the gap shows through as a 1px rule. ⚠ With an odd cell count the trailing empty cell paints a grey block; in the terminology grid this is solved by making the wrapper transparent and giving each cell `box-shadow: 0 0 0 1px rgba(20,24,29,.16)`. Prefer real cell borders in the rebuild.
- Header is `position: sticky; top: 0; z-index: 20`, opaque `#e5e8ea`.
- Not yet responsive: the design is authored for desktop (≥1200px). Type uses `clamp()` so it degrades, but the 3-column grids and 2-column splits need mobile stacking rules defined during the rebuild.

## Design tokens

### Colour ("Piedra / Acero" palette)
| Token | Value | Use |
|---|---|---|
| Surface | `#e5e8ea` | Page and card background |
| Surface alt | `#dbdfe2` | Hero image pane backdrop |
| Surface halftone | `#c9ced2` | Halftone placeholder base |
| Row hover | `#dfe3e6` | Card/row hover tint |
| Ink | `#14181d` | Text, dark bands, button fill |
| Ink 78 / 72 / 68 / 65 / 64 / 62 / 60 / 55 / 50 / 45 / 42 | `rgba(20,24,29,α)` | Text hierarchy |
| Hairline | `rgba(20,24,29,.16)` | All rules and grid gaps |
| Accent (amber) | `#8d5217` | Primary CTA fill, links on hover, focus, terminology labels |
| Accent light | `#ad6a24` | Mono eyebrows, list bullets, "MÁS POPULAR" badge, featured plan bar |
| Accent on dark | `#e0a35e` | Amber for use on `#14181d` (glossary terms + tooltip label) |
| On-dark text | `#e5e8ea`, `rgba(229,232,234,.86 / .62 / .25)` | Text on dark bands |
| Button text | `#fafbfc` | Label on amber/ink fills |

Max two background colours per page: `#e5e8ea` and `#14181d`.

### Typography
- **Archivo** (400/500/600/700) — display and body.
- **Space Mono** (400/700) — eyebrows, labels, metadata, buttons, prices.
- Google Fonts, `subset=latin,latin-ext`.

| Role | Spec |
|---|---|
| H1 | Archivo 600, `clamp(52px,6.4vw,104px)/.92`, `letter-spacing:-.045em`, `text-wrap:balance` |
| H2 (section) | Archivo 600, `clamp(34px,4vw,60px)/1`, `-.035em` |
| H2 (wide) | Archivo 600, `clamp(34px,4.4vw,66px)/.98`, `-.04em` |
| H3 (step) | Archivo 600, 22px/1.2, `-.02em` |
| H3 (feature) | Archivo 600, 19px/1.25, `-.015em` |
| Stat figure | Archivo 600, `clamp(48px,6vw,86px)/.9`, `-.05em` |
| Plan price | Archivo 600, `clamp(30px,3.4vw,44px)/1`, `-.04em` |
| Quote | Archivo 500, `clamp(24px,2.7vw,38px)/1.25`, `-.025em` |
| Hero lead | Archivo 400, 17px/1.55, `max-width:46ch` |
| Section lead | Archivo 400, 15.5–16px/1.6, `max-width:48–56ch` |
| Body / card | Archivo 400, 13.5–14px/1.6 |
| Fee label | Archivo 500, 17px/1.3, `-.015em` |
| Fee amount | Space Mono 700, 14px/1.3 |
| Eyebrow `§ NN` | Space Mono 400, 10px/1, `letter-spacing:.16em`, uppercase |
| Nav / button | Space Mono 500, 10.5–12px/1, `.1–.12em`, uppercase |
| Figure caption | Space Mono 400, 8.5px/1.75, `.1em`, uppercase |
| Terminology label | Space Mono 700, 10px/1.3, `.1em`, uppercase, `#8d5217` |

Long prose uses `text-wrap: pretty`; H1 uses `text-wrap: balance`.

### Other tokens
- Border radius: **0** everywhere (only circles in halftone placeholders use `border-radius:50%`).
- Shadows: none on content. Only the glossary tooltip: `0 12px 30px rgba(20,24,29,.22)` (light section) / `0 14px 34px rgba(0,0,0,.5)` (dark section).
- Standard transition: `.25s ease` for colour, `.2s` for transform, `.28–.32s cubic-bezier(.4,0,.2,1)` for wipes.

## Screens / Views
One continuous page. Sections in order:

1. **Header** (sticky) — wordmark `NextMoni` (Archivo 600 17px) + mono meta `EUR · LT · REG.24`; nav `Cómo funciona / Cuenta / Precios / Tarifas / Seguridad` anchoring to `#como #cuenta #precios #tarifas #seguridad`; right side `WhatsApp` text link + ink "Abrir cuenta" button. `18px 40px` padding, bottom hairline.
2. **Hero** — `grid-template-columns: 1.05fr .95fr`, hairline between panes. Left: mono kicker row (`CUENTA EUROPEA · 100% REMOTO · LICENCIA REG. EN LA UE`), H1 "Tu vida está en dos países. / Tu cuenta también." (second line at 42% ink), lead paragraph, amber primary CTA "Abrir cuenta gratis →" + underlined WhatsApp link, then a 2-cell hairline trust grid (licence, funds protection). Right: `FIG. 01 — HERO` pane, `min-height:640px`, photo brief = **3:4 vertical**, half-body figure holding a phone, hard side light, plain background, coarse halftone, no colour.
3. **§ 02 — Cómo funciona** — 3 hairline cards from `steps` (number, title, body).
4. **FIG. 02 — Tríptico de uso** — three **4:5** image slots, `gap:20px`, mono header row. Briefs: hands + phone close-up sending; two people (mother/daughter) receiving the news, interior; Visa card in hand, neutral background, no 3D gloss.
5. **§ (unnumbered) Cuenta** (`#cuenta`) — H2 "Una cuenta, dos países, cero fricción." with right-aligned mono label; 3×2 hairline grid of 6 feature cards from `features` (mono `NN` + `tag` row, title, body).
6. **Stats band** — `background:#14181d`, 3 columns from `stats`: big figure, 1px divider, mono label.
7. **§ 05 — Precios** — 3 hairline plan cards from `plans`. Featured plan (driven by the `featuredPlan` prop, default "Plus") gets a 4px `#ad6a24` top bar and a bordered "MÁS POPULAR" badge. Card: name (mono), price, pitch (`min-height:66px` to align), `INCLUYE` label, em-dash bullet list, outlined CTA. Below the grid: link "Tarifas detalladas" → `#tarifas` + note "Sin comisiones ocultas — todo lo que cobramos, en un solo lugar."
8. **§ 06 — Tarifas** (`#tarifas`) — section header "Tarifas detalladas."; then a two-column block (`220px 1fr`): left mono note `Importes en EUR / Vigentes desde 2026`, right a 7-row fee table (`grid-template-columns:1fr auto`, `padding:17px 12px`, bottom hairline, label + note left, mono amount right). Then, 70px below, the **Terminología estandarizada** block: intro paragraph + `auto-fit minmax(240px,1fr)` grid of 7 cards pairing the Bank of Lithuania English term with its Spanish equivalent.
9. **§ 07 — Testimonio** (`#seguridad`) — split `1.15fr .85fr`. Left: pull quote + 44px halftone avatar placeholder (photo brief: testimonial portrait) + mono attribution "Usuaria de NextMoni / Vive en España, envía a Colombia". Right: 3 stacked `security` items separated by top hairlines.
10. **FIG. 03 — Cierre** — full-width **3:1** image slot. Brief: closing panorama, two places in one image (European street / Latin American street) or a table shared over video call.
11. **CTA "Abrir cuenta"** (`#abrir`) — split: left mono eyebrow `EMPIEZA HOY`, H2 "Abre tu cuenta en minutos.", paragraph; right the 3-field lead form (`fields`: full name, phone, email) as bottom-bordered underline inputs + submit.
12. **Footer** — 3 link columns from `footer` (PRODUCTOS / EMPRESA / TÉRMINOS LEGALES) plus a mono legal strip: `NEXTMONI · LICENCIA N.º 24 — BANCO DE LITUANIA`, `PSD2 · GDPR`, version tag.

## Interactions & Behavior

**Buttons (`data-nm-btn`)** — ink wipe: `::before` absolutely fills the button with `#14181d`, `transform: translateY(101%)`, transitioning to `translateY(0)` on hover over `.32s cubic-bezier(.4,0,.2,1)`. Label sits in a `z-index:1` span. `:active` nudges `translateY(1px)`. Arrow glyphs (`data-nm-arrow`) slide `translateX(5px)` over `.26s`. The hero CTA additionally opens letter-spacing `.12em → .16em`.

**Nav links** — a 1px `#8d5217` underline grows left→right via `right: 100% → 0` over `.28s ease`.

**Cards/rows (`data-nm-row`)** — background tints to `#dfe3e6` over `.25s`.

**Plan cards (`data-nm-plan`)** — `box-shadow: inset 0 0 0 1px rgba(20,24,29,.5)` + `translateY(-2px)` over `.3s`.

**Inputs** — bottom border and `box-shadow: 0 1px 0 0 #8d5217` on focus.

**Links** — `#14181d` → `#8d5217`.

**Glossary tooltips (the notable behaviour).** After mount, the page walks all text nodes and wraps occurrences of `\b(SEPA|SWIFT|IBAN|KYC|AML|E2E|FX|PSD2|GDPR)\b` in a `<span data-nm-term="KEY" tabindex="0" role="button">` (currently 23 instances). Skips `SCRIPT/STYLE/INPUT/TEXTAREA` and anything already inside a term or the tooltip. Each term gets `cursor:help` and a `1px dashed rgba(141,82,23,.55)` underline; hover/focus sets colour `#8d5217`.

A single shared fixed-position tooltip card (max-width 268px, `13px 15px 14px` padding, mono uppercase label + 12.5px Archivo definition) is filled and positioned on `mouseover`/`focusin` (delegated on the root) and hidden on `mouseout`/`focusout`/any scroll. Positioning: centred above the term, `10px` offset, clamped to `14px` from the viewport edges, flipped below when it would cross the top edge. Fade/rise in over `.18s`.

**Dark-section adaptation.** Each term's effective background is resolved by walking ancestors for the first opaque `background-color` and computing relative luminance (`<0.45` = dark). Dark terms get `data-nm-dark`: underline `rgba(224,163,94,.6)`, hover `#e0a35e`. The tooltip itself inverts for those: background `#fafbfc`, label `#8d5217`, body `rgba(20,24,29,.78)`, deeper shadow — so it never sits dark-on-dark. (In a component rebuild, prefer passing an explicit `tone="dark"` prop from the section instead of measuring luminance at runtime.)

**Ambient animation** (placeholders only): `nm-dots` 7s halftone drift, `nm-drift` 9s float, `nm-rise` 3.2s, `nm-pulse` 2.2–3.4s, `nm-inL/nm-inR` 4.4s, `nm-sweep` 3.6s, `nm-tilt` 6s, `nm-scan` 5s. All disappear when photos land.

**Reduced motion:** `@media (prefers-reduced-motion:reduce)` forces all animation and transition durations to `.001s`. Keep this.

## State Management
Almost none — it is a static page.
- `featuredPlan: "Standard" | "Plus" | "Premium"` (default `"Plus"`) selects which pricing card gets the top bar and badge. Make it a prop/config value, not local state.
- Glossary tooltip: which term is active + its screen position. In React, prefer a `<Term>` component + one portal-rendered tooltip driven by state, rather than the DOM-walking approach used in the prototype (which exists only because the prototype's copy lives in data strings).
- Lead form: three controlled fields + submit/validation, to be defined (name required, phone E.164-ish, email format).
- Smooth-scroll anchor nav; sticky header needs no scroll state.

## Content data
Exact copy is in the prototype's logic class; arrays: `steps` (3), `features` (6), `stats` (3), `plans` (3, each with `items`), `fees` (7), `terminology` (7), `security` (3), `fields` (3), `footer` (3 groups). Fee schedule:

| Concept | Amount |
|---|---|
| Cambio de moneda (FX) | Spread 1–3% por par |
| Transferencia SEPA | 1,5% · mín. 0,50 € |
| Transferencia SWIFT | 25,00 € |
| Recarga con tarjeta | 2% del monto |
| Retiro bancario | 1,00 € |
| Transferencia interna | Gratis |
| Mantenimiento de cuenta | 1,00 € / 30 días |

Standardized terminology (Bank of Lithuania glossary): Account management · Issuance of a debit card · Cash withdrawal · Credit transfer SEPA · Credit transfer non-SEPA · Settlement of received payments (euros / other currencies) · Currency conversion.

Glossary definitions (Spanish) for SEPA, SWIFT, IBAN, KYC, AML, E2E, FX, PSD2, GDPR are in the same logic class — move them to a content file.

## Assets
- **Fonts:** Archivo + Space Mono from Google Fonts. Self-host in production.
- **Images:** none yet. Six placeholders to fill: hero 3:4, three 4:5 use shots, one 3:1 closing panorama, one testimonial portrait (44px avatar, shoot larger). Each carries its brief in the on-image caption. Treatment: coarse black-and-white halftone, no colour.
- **Icons:** none — arrows are the `→` character, bullets are em dashes.
- No third-party JS libraries.

## Files
- `design/NextMoni v1c-f1a - Halftone.dc.html` — the source design (needs `support.js` next to it).
- `design/support.js` — prototyping runtime. Reference only; do not port.
- `design/NextMoni - Halftone (standalone).html` — self-contained single-file build of the same design. **Open this one in a browser.**

## Project history (how we got here)
1. **Five full directions** explored: *Swiss Ledger*, *Terminal Nocturno*, *Broadsheet*, *Blueprint*, *Monolito* (kept in the project's `v1`–`v5` folders and a comparator page).
2. Narrowed to **v1c "Piedra"** (cool grey + warm amber), then variants *Niebla*, *Acero*, *Cal*, *Arena*; **v1c-f "Acero"** won.
3. **Type test:** f1 Archivo + Space Mono, f2 Instrument Sans + JetBrains Mono, f3 Libre Caslon + Public Sans + Plex Mono → **f1 (Grotesk)** chosen.
4. **Imagery test:** halftone vs. linework vs. dither → **halftone**; placeholders rewritten as animated photo briefs.
5. Interaction pass: button wipes, nav underlines, row tints, focus states, reduced-motion guard.
6. **Glossary tooltips** added for regulated jargon, incl. dark-section inversion.
7. **§ 06 Tarifas** section added: detailed fee table + Bank of Lithuania standardized terminology grid; nav and "Tarifas detalladas" link wired; Testimonio renumbered to § 07.

## Open items for the rebuild
- Source and halftone the six photographs.
- Define responsive breakpoints (grids → stacked; header nav → menu).
- Wire the lead form to a real endpoint + validation and a success state.
- Verify all fee figures and glossary definitions against the current legal/compliance copy before launch.
- Decide whether Tarifas should be its own route (`/tarifas`) rather than an anchor, for SEO and legal linking.
