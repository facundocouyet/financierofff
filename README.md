# Handoff: Informes Financieros F3 (Caja Q2 2026)

## Overview
Internal financial reporting for **FFF Consulting (F3)** — a set of "informes de caja" (cash reports) for the partners, covering **March, April, May 2026**. The product is a small **hub + report** system:

- A **Home / hub** that lists the reports and shows a dashboard.
- Four **presentations** (16:9 slide decks): one per month (Marzo, Abril, Mayo) and one **Trimestre** (quarter) deck.
- The Trimestre report has **two forms of the same content**: a slide deck on desktop/tablet and a **vertical scroll** version on phones (device-detected, not a separate section).

Language is **Spanish (Rioplatense/Argentine)**. Currency is **USD** (`US$32.823` — dot thousands separator, `es-AR` formatting).

> ⚠️ The financial numbers in these files are **current-but-provisional** — the client is sending an updated spreadsheet. Treat all figures as data to be wired from a source (JSON/sheet), not hardcoded. The company is also repositioning to a "growth partner" model (fewer clients), which may change the narrative later.

## About the Design Files
The files in this bundle are **design references created in HTML** — working prototypes that show the intended look, layout, and behavior. They are **not meant to be shipped as-is**. The task is to **recreate these designs in the target codebase** using its established framework and patterns (React/Next, Vue, etc.). If there is no existing front-end yet, pick the most appropriate stack for a small static, data-driven report site (these prototypes are framework-free vanilla HTML/CSS/JS and could be ported to React components or kept static).

The decks use a reusable web component, **`deck-stage.js`** (a fixed-canvas 16:9 slide shell with scaling, keyboard/tap nav, and print-to-PDF). You can keep it or replace it with an equivalent slide mechanism in your stack.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, components, and interactions. Recreate pixel-faithfully using the F3 brand tokens documented below. The brand identity is **technical / editorial / brutalist**: monochrome + a single signal red, warm paper surfaces, fine film grain, the **Exposure** ink-bleed serif for display numbers/words, and bold **Helvetica Now Display** for statements. (Note: the original brand is hard-edged/square; per client request the report UI was **softened with rounded corners** — keep that rounding.)

---

## Design Tokens

### Color
| Token | Hex | Use |
|---|---|---|
| Negro (ink) | `#171717` | primary text, dark frames |
| Ink warm | `#1A1815` | dark slide background (warm black) |
| Gris oscuro | `#2D2D2D` | raised dark surfaces |
| Gris 700 | `#3A3A3A` | donut/chart mid-dark slice |
| Gris 500 | `#6E6E6E` | secondary text (`--muted`) |
| Gris 400 | `#9A9A9A` | faint text |
| Gris medio | `#C7C7C7` | borders (brand) |
| Line | `#B6B4AC` | hairline/divider color actually used in reports |
| Gris claro | `#EDEDED` | light fills |
| Paper | `#ECEAE4` | **default page/slide surface** (warm bone) |
| Soft | `#F4F2EC` | card fill on paper |
| Blanco | `#FAFAFA` | pure light |
| **Acento (rojo)** | `#FE1414` | **the single signal red** — accents, key KPI, data series, red closing panel |
| Acento press | `#D40D0D` | darker red (pressed/active) |

Red is **rationed**: a dot, one word, the data series, or one full textured panel (the closing slide). Never tint everything red.

### Typography
- **Base / UI:** `"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif`. Weights used: 400, 500, **700**, **900 (Black)**. Statements/headings are Black (900), tightly tracked (`letter-spacing:-0.02 to -0.03em`).
- **Display (character):** `"Exposure", Georgia, "Times New Roman", serif` — the ink-bleed editorial serif. Used for **big numbers, month names, and one display word per layout**. Three cuts: `Exposure-0` (clean), `-80`, `-90` (progressive ink bleed).
- **Mono (labels/stamps):** `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`, uppercase, `letter-spacing:0.12–0.18em`. Used for eyebrows, corner stamps, metadata.
- **Numbers:** always `font-variant-numeric: tabular-nums`. Currency format `US$32.823` (es-AR, `.` thousands).

**Deck type scale (1280×720 canvas)** — CSS custom properties on `:root`:
```
--type-month: 132px;   /* cover month name (Exposure) */
--type-figure: 92px;   /* big KPI numbers (Exposure) */
--type-figure-sm: 60px;
--type-stmt: 46px;     /* section statement (Helvetica Black) */
--type-h: 30px;
--type-body: 18px;
--type-small: 15px;
--type-label: 11px;    /* mono stamps */
```
**Home / scroll scale:** H1 `clamp(52px, 8.4vw, 108px)` Black; KPI value Exposure 54px; card month 38px Black; card figure 21px Exposure; section labels mono 12–13px; body 15–18px.

### Spacing & layout
- Deck slide frame padding: `60px 72px`.
- Home page padding: `64px clamp(26px,6vw,118px) 90px`; max content width `1320px`.
- Card padding ~30px; KPI cell padding ~26–30px.
- Grid gaps: 18–22px.

### Radius (softened UI — keep these)
| Element | Radius |
|---|---|
| Cards (home card, book, caja, chartcard, kpis frame) | 16–20px |
| Detail modal | 22px |
| Nav buttons (‹ ›) | 50% (circular, 48px) |
| Detalle button & action chips | 999px (pill) |
| Donut/legend track bars | 999px |
| Mini bar tops (facturado/cobrado, pulse) | 7px 7px 0 0 |
| Donuts | 50% (true circle) |

### Borders & elevation
- Outer card frames: **2px solid** ink. Inner dividers: **1.5px**. Hairlines: 1px.
- Elevation = rules + contrast, **not** soft shadows (only the modal floats, with a large soft shadow `0 30px 80px rgba(0,0,0,0.45)`).

### Texture
- Fine **film grain** over paper and dark surfaces via an inline SVG `feTurbulence` noise (`baseFrequency 0.85`), `mix-blend-mode: multiply` (paper, opacity ~0.04) / `overlay` (dark/red, opacity ~0.16–0.22). Keep it **subtle/delicate**.
- A whisper-quiet **ghost wall of manifesto text** behind display type on some slides (opacity ~0.05).

### Motion
Mechanical, restrained: 120–400ms, ease-out. Fades + short translates. **No bounce/overshoot, no infinite loops.** Hover = subtle invert or red shift.

---

## Screens / Views

### 1. Home / Hub — `Informe F3 - Home.html`
**Purpose:** Landing page; overview dashboard + entry to each report.
**Layout (responsive, single column, max 1320px):**
1. **Header** — kicker (mono red, "Informes 2026 · F3") top-left; F3 wordmark + `ESTD ID` stamp top-right.
2. **H1** "Caja del *trimestre*" (Black + Exposure mix) + lede paragraph.
3. **Dashboard:**
   - **KPI row** — 4 cells in one 2px-framed, 18px-radius container (`grid 4col`, collapses 2col <1100px, 1col <560px). First cell is the **key** cell (red bg `#FE1414`, white text). Each cell: mono label, Exposure value (54px), small caption. Values: `US$32.823` (Cobrado Mar–May, key), `US$7.181` (Saldo al cierre), `US$25.900` (Facturado Marzo), `−51%` (Cobros Mar→May).
   - **Dashnote** — bordered rounded note (14px radius).
   - **Two donut charts** side-by-side (`chartcard`, 2px frame, 18px radius): "De dónde entró" (cobros by channel) and "A dónde fue" (salida). Donut = `conic-gradient` ring with a paper-filled center hole (inset 33px) showing an Exposure total + mono label. Legend rows: square-ish dot (4px radius), name + amount, Exposure % on the right.
   - **Bars chart** (full width chartcard): "Facturado vs. cobrado" — per month a pair of bars (facturado = solid red, cobrado = 1.5px outline), 172px tall plot, baseline 2px. Caption row with `facturado/cobrado` values + month.
4. **"Los informes"** section label (mono, with right-aligned subtitle) + **card grid** (`repeat(auto-fit, minmax(300px,1fr))`, gap 18px): 4 cards.
   - Month cards (Marzo/Abril/Mayo): soft bg, 2px ink frame, 20px radius; Exposure number (red), Black month name (38px), description, two metrics (Cobrado / Saldo final) in Exposure 21px, red arrow → top-right. Hover: lift `translateY(-3px)` + bg→white.
   - **Trimestre card**: same shape but **red bg** (sum/red variant), white text; links to the Trimestre deck.
5. **Footer** — mono confidential line.

**Links:** Marzo→`Marzo 2026.html`, Abril→`Abril 2026.html`, Mayo→`Mayo 2026.html`, Trimestre→`Trimestre Mar-May 2026.html`.

### 2. Month decks — `Marzo 2026.html`, `Abril 2026.html`, `Mayo 2026.html`
16:9 slide decks (1280×720) via `deck-stage`. Slides (parallel structure across months):
1. **Cover** (dark): back-link stamp top-left, boxlabel `FFF™ Consulting`, eyebrow "Informe de caja · Mes 0X / 03", huge Exposure month name, subtitle.
2. **Dos lecturas** *(Marzo only)*: two "book" cards — *Lo facturado* (US$25.900) vs *Lo cobrado* (US$15.700, 61%, brecha US$10.200).
3. **El mes (waterfall)**: month name + 2 KPIs (Cobrado / Pagos), then a 4-step **flow**: Saldo inicial → + Cobros → − Pagos → = Saldo final (each step Exposure 42px; final value red).
4. **De dónde entró**: `dlist` of clients (name + payment method in mono small + Exposure amount), `tot` row "Total cobrado".
5. **A dónde fue la caja**: Marzo = a big Exposure statement "Nada salió en marzo" + note; Abril/Mayo = `dlist` of payout groups (Reparto a socios / Equipo / Comisiones) + total + note.
6. **La lectura del mes** (dark): eyebrow, Black statement with one red phrase, note.

Each deck has fixed **nav buttons** (‹ ›, circular) bottom-left, a **Detalle** pill button bottom-right opening a **modal** with that month's Cobros/Pagos line items + saldo waterfall.

### 3. Trimestre deck — `Trimestre Mar-May 2026.html` ("la presentación")
Slides: **Portada** (artistic — see below), **Resumen** (3 KPIs), **Evolución mes a mes** (single SVG line chart: Cobros = solid red line, Saldo = dashed white line, over Mar/Abr/May), **De dónde entró** (channel legend bars), **Las cajas de los socios** (3 caja cards), **Egresos fijos y reparto** (two-column: fijos list + reparto pill chips), **La lectura** (artistic red panel — see below).
- **Portada (artistic):** split layout — left dark panel with title "Marzo → Mayo" (Exposure, red arrow); right ~45% is a full-height **photo of the red F3 ball** (`assets/photography/red-ball-hero.jpg`) blended into the dark via a left-edge linear-gradient scrim.
- **La lectura (artistic):** full **red (#FE1414) textured panel** (grain overlay), white Exposure "Cierra positiva" + Black sub "pero los cobros vienen cayendo", white note, three pill chips (two white/red, one black/white).
- Same nav + Detalle modal (full per-month detail + totals).

### 4. Trimestre scroll (mobile form) — `Informe F3 - Analisis del trimestre.html`
The **phone version of the Trimestre report** (not a separate section). Centered single column (max 560px). Sections: hero (dark) with saldo "US$15.700 → US$7.181"; funnel (Facturado → Cobrado → Por cobrar); donut "de dónde vino"; donut "en qué se fue"; pulse bars (entró/salió per month); a red "signal" section (−51%); cajas mini-cards; reparto rows; dark closing with back-link to Home. Same tokens, rounded cards, bottom "Detalle" pattern not needed here (content is inline).

---

## Interactions & Behavior
- **Deck navigation** (`deck-stage`): ← / → / PageUp-Down / Space, tap left/right thirds, and the on-screen **‹ ›** buttons (`deckStage.prev()/.next()`). Slide count overlay. Print → one page per slide (PDF). The thumbnail rail is disabled (`no-rail` attribute).
- **Letterbox bars match the active slide** (`deck-ui.js`): a `MutationObserver` watches `[data-deck-active]` on each `<section>` and sets the `deck-stage` host background to the active slide's surface (`paper #ECEAE4` / `ink #1A1815` / `red #FE1414`) — so there are **no black bars**. It also sets `body[data-slide-theme]` so the nav/Detalle buttons **invert** to stay legible (dark buttons on paper, light buttons on dark, dark on red).
- **Detalle modal:** button opens a centered modal (backdrop + Esc/×/backdrop-click to close); 22px radius, scrollable body, grid of detail cards.
- **Responsive device redirect (one report, two forms):**
  - `Trimestre Mar-May 2026.html` redirects to the scroll version when `matchMedia('(max-width:700px)')` (phone).
  - `Informe F3 - Analisis del trimestre.html` redirects to the deck when `matchMedia('(min-width:701px)')` (desktop/tablet).
  - In your codebase, implement this as one route that renders deck vs scroll by breakpoint, rather than two files.
- **Hover:** cards lift + bg→white; buttons shift to red; links underline/red.

## State Management
Minimal. Per deck: current slide index (held in URL hash by `deck-stage`), modal open/closed. The **financial data should be a single source** (`months[]` + quarter aggregates) feeding all views — see the data appendix. No auth in the prototype (it's "uso interno"; add real access control in production).

## Data (provisional — wire from the updated spreadsheet)
Cobros (cash collected): Marzo **15.700**, Abril **9.450**, Mayo **7.673** → Q **32.823**.
Saldo de caja fin de mes: Marzo **15.700**, Abril **10.995**, Mayo **7.181**.
Marzo: facturado **25.900** vs cobrado **15.700** (61%); brecha 10.200 en cuotas.
Reparto socios (abril): Facu 3.810, Franco 3.810, Fede 3.500, Mateo 2.000, Teo 1.000.
Cajas saldo: Facu 3.553, Franco 790, Mateo 0.
Channels (Q): Mercury/Cáscara 6.700, Efectivo 6.000, Dreamworld 5.700, Brubank 3.500, lemon 2.423, Binance 2.000, Galicia 1.500, Stripe/crypto 1.000.

## Assets (in this bundle)
- `assets/fonts/` — Helvetica Now Display (Regular/Medium/Bold/Black/ExtBlk woff2). **Exposure** + **MANIC** live under `_ds/<brand>/assets/fonts/` (Exposure-0/-80/-90 OTF). *Exposure & Helvetica are licensed fonts — confirm licensing before production; Exposure here is the trial.*
- `assets/photography/red-ball-hero.jpg` — the F3 red ball (used on the Trimestre cover). `still-life-stack.jpg` also included.
- `assets/logos/` — F3 / FFF wordmarks (SVG/PNG, black & white).
- `assets/marks/` — "manic" hand-drawn marks (currently not used after the latest revision; kept for reference).
- `_ds/<brand>/tokens/*.css` — the brand design tokens (colors, typography, fonts, spacing, effects, motifs). Use these as the source of truth for token values.

## Files
- `Informe F3 - Home.html` — hub/dashboard.
- `Marzo 2026.html`, `Abril 2026.html`, `Mayo 2026.html` — month decks.
- `Trimestre Mar-May 2026.html` — quarter deck ("la presentación").
- `Informe F3 - Analisis del trimestre.html` — phone (scroll) form of the quarter report.
- `deck-f3.css` — **shared stylesheet** for all decks (slide vocabulary, financial components, nav, modal). Imports the `_ds` token CSS + declares Helvetica @font-face.
- `deck-ui.js` — letterbox-bar matching + button theming.
- `deck-stage.js` — the 16:9 slide-shell web component (vanilla; load with a plain `<script src>`).
- `assets/`, `_ds/` — fonts, photography, logos, tokens.
