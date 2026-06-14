# FFF Consulting · F3 — Design System

A working design system for **FFF Consulting** (wordmark **F3**), a private, LATAM-based
creative & brand-building consultancy — a "founder system" that builds digital brands
through strategy, content, data and AI. The visual identity is technical, brutalist and
editorial: a strict monochrome palette cut by a single signal red, blueprint grids,
grainy black-and-white photography, and a vocabulary of stamps, labels and hand
annotations.

> "Compartimos nuestra cabeza estructurada, la fascinación por las estrategias,
> tendencias globales y una ambición desmedida."
> *(We share our structured mind, our fascination with strategy, global trends, and
> a boundless ambition.)*

---

## Sources

This system was reconstructed from the official brand package only — there was no
codebase or Figma file. Everything below is derived from these assets (copied into
`assets/`):

- **`assets/brand/Branding F3.pdf`** — the 31-page brand book by **Cáscara Collective**,
  © 2026 F3. Source of truth for palette, type and look & feel.
- **Logos** — `assets/logos/` (principal `F3` + secondary `fff`, in black/white, PNG+SVG).
- **Brand marks** — `assets/brand/` (the *manic smiley* hand-drawn faces, `fff` color
  badges, blueprint/grain reference imagery, look-&-feel boards).
- **Fonts** — `assets/fonts/` (Exposure, MANIC family, Helvetica Now Display Thin-Italic).
- **Website source** — the live site's Lovable codebase (`f3-pkg/`: `BRIEF.md`,
  `source/*.tsx` for all 10 sections + the application form, `design-system/` tokens,
  and `screenshots/`). The `ui_kits/website/` recreation is a faithful, section-by-section
  rebuild of this code (same structure and copy) re-skinned in the new branding.

If you have access to the original Figma or the full Helvetica Neue / Exposure license
files, drop them in to replace the substitutions noted below.

---

## The brand at a glance

- **Two names, one brand.** The **`fff` mark is the PRINCIPAL logo** — the slab/serif
  `fff™` signature (also set in MANIC), and the spoken name is **FFF Consulting**. **`F3`**
  is the **secondary** mark: a compact geometric "F3™" lockup used where a tight, bold
  wordmark fits better (favicons, nav, the product/ball). Same brand, two marks — lead
  with `fff`.
- **Audience & voice:** founders and operators across LATAM. Copy is **Spanish
  (Rioplatense / Argentine)** — "mirá esto", "encontranos", "porfolio".
- **Positioning lines** seen in the system: `CREATIVE CONSULTING 2026`, `FOUNDER SYSTEM`,
  `82 OPERATORS`, `11 BRANDS`, `BUILDING THROUGH DATA / AI`, `{ FILE UNDER: CURATED }`,
  `CURATED BY FFF /// FOUNDERS`, `ESTD ID: SM-2026`.
- **Channel:** Instagram-first (profile + post templates are central to the book) backed
  by the site `f3consulting.com` / `fffconsulting.com`.

---

## CONTENT FUNDAMENTALS — how FFF writes

**Language.** Primary copy is **Spanish, Rioplatense (Argentine)**: voseo and regional
imperatives ("mirá", "encontranos", "aplicá"). English is used as a *graphic* layer —
short, capitalized, technical tags ("STRATEGY / CONTENT", "AT SCALE", "PRIVATE",
"WORK", "PORTFOLIO"). Mixing the two languages is intentional and on-brand.

**Voice.** Confident, structured, a little severe. It sells *systems and ambition*, not
warmth. First-person **plural** ("compartimos", "sistematizamos", "estudiamos") — the
firm speaks as a collective, never as one person. To the reader it uses **vos/tú**
sparingly and directly ("te explicamos cómo en 24 minutos").

**Casing.** Two registers:
- **ALL-CAPS, letter-spaced** for tags, labels, navigation and stamps — the technical/
  editorial layer. Often wrapped in brackets or slashes: `[DESMEDIDA]`, `/// FOUNDERS`,
  `{ CURATED }`.
- **Sentence case** for the long manifesto/body sentences set big in Helvetica.

**Punctuation & motifs.** Brackets `[ ]`, braces `{ }`, triple slashes `///`, the
`™` superscript on marks, file/ID stamps (`ESTD ID: SM-2026`, `EDITION 01`), and
date stamps (`2026`, "Hace 2 días"). Plus signs as connectors: `f+f+f`.

**Vibe:** *curated, data-driven, ambitious, underground-luxury.* Think a strategy
deck crossed with a fashion lookbook. **No emoji.** Arrows (`↓ → ↗`) are used as
functional pointers, never decoration-for-decoration's-sake.

**Examples (verbatim from the book):**
- "5 años para aprender a conectar contenido con ventas, ahora lanzamos ofertas
  digitales en 90 días. Te explicamos cómo en 24 minutos ↓"
- "resultado de narrativa, posicionamiento y dirección creativa"
- Pillars: "Intencionalidad · Apalancamiento · Talento"

---

## VISUAL FOUNDATIONS

**Color.** A monochrome system with one accent (see `tokens/colors.css`):
`Negro #171717`, `Gris Oscuro #2D2D2D`, `Gris Medio #C7C7C7`, `Gris Claro #EDEDED`,
`Blanco #FAFAFA`, warm **paper `#ECEAE4`** (the working canvas), and **Acento `#FE1414`**
(signal red). The swatches are deliberately neutral — the brand's warmth comes from paper
texture and photography, not tinted tokens. Red is rationed but can be **bold**: a dot or
one word, *or* a whole textured panel / the F3 object. Light **paper is the default
surface**; warm charcoal is the secondary mode; greys do the structural work.

**Type.** Three roles, used together (see `tokens/typography.css`):
1. **Helvetica (base)** — the workhorse. Set it **BOLD / BLACK and large** for statements
   and headings (the book's voice is heavy, tightly tracked, often justified), regular for
   body, and spaced-caps for labels. (Earlier drafts of this system set it too thin — the
   brand is bold.)
2. **Exposure (character)** — the **ink-bleed editorial serif** used for monumental display
   words: `Ambition`, `Diplomacy`, `Roadmap`, big numbers. The `[0] → -80 → -90` cuts thicken
   until letters fuse. This serif is the single strongest signal of the brand — reach for it
   on the one big word per layout. `--font-display` → Exposure (serif fallback).
3. **MANIC (annotation)** — a hand-drawn marker face for **diagram labels and marks**
   (the `F+1 Estrategia` / `F+2 Oferta` Venn annotations) and the `fff` lockup. The casual,
   human layer — use on hand-drawn diagrams, not for body or UI.

**Backgrounds — the signature is texture, not a grid.** The dominant surface is **warm
paper** (`--f3-paper #ECEAE4`) carrying a fine **film grain** and, behind display type, a
whisper-quiet **wall of ghosted literary/manifesto text** (`.f3-paper`, `.f3-grain`,
`.f3-ghost`). A **dark warm-charcoal** (`--f3-ink-warm`) is the *secondary* mode for some
spreads, same grain + ghost treatment. **Red** can take a whole textured panel.
The **blueprint grid is RARE** — reserved for the odd technical / data spread
(`.f3-grid`), never a default; over-using it reads wrong. No decorative gradients, no
rounded blobs, no glassmorphism.

**Photography.** Warm, analog, editorial — three veins: art-directed **still lifes**
(vintage objects with a single note of brand red — the F3 ball / card / pouch); **warm
lifestyle** (golden-hour, film snapshots, slightly faded colour); and high-contrast
**grainy B&W portraits**, often numbered `01.` `02.`. Studio backdrops are sometimes a
**deep navy** — that blue is a *photographic* choice only, **never** a UI/graphic colour.
Real selects live in `assets/photography/`.

**Layout.** Strict, editorial magazine grid; generous margins; content hangs off hairline
rules. The repeatable motifs (`tokens/motifs.css`) are what make a page read as FFF:
**boxed `FFF™Consulting` labels**, **metadata stamps** (`ESTD ID`, `FILE UNDER: CURATED`,
`METHOD / FIELD / ARCHIVE`) with **bracketed numbers** (`[ 11 ] MARCAS`, `[ 82 ]`),
**redacted name bars**, the **F → FF → FFF → F3** progression, and hand-drawn diagrams.
Information is stamped into corners. Asymmetry with intent.

**Shape & corners.** Hard-edged. Default radius is **0** — square cards, square inputs,
square buttons. The *only* curves are true circles (the `fff` badge, avatars, dots) and
the pill tag. See `--radius-*` in `tokens/spacing.css`.

**Borders & elevation.** Elevation is communicated with **hairline rules and contrast,
not soft shadows**. `--hairline 1px`, `--rule 1.5px`, `--rule-bold 2px`. Shadows exist
only for genuinely floating UI (menus, social cards, modals) and stay subtle
(`tokens/effects.css`).

**Motion.** Mechanical and restrained — `--ease-standard` / `--ease-out`, 120–400ms.
Fades and short translates; **no bounce, no overshoot, no infinite loops** on content.
Hover = subtle inversion or red shift; press = darker (`--accent-press`) or a 1–2px
nudge, never a squishy scale.

**Hover / press states.** Light UI: hover lifts to pure white or inverts to black;
red elements darken to `--accent-press` on press. Links underline or flip to red.
Keep transitions to opacity/colour/transform only.

**Transparency & blur.** Used on photography (motion blur, dark scrims over images for
legibility) — not as a frosted-UI gimmick.

---

## ICONOGRAPHY

The brand is **type- and mark-led, not icon-led** — there is no bespoke icon font in the
package. Approach:

- **Brand marks as icons.** The recurring graphic devices — use these before any UI icon.
  The mark system: the **`fff` slab/serif PRINCIPAL** (`assets/logos/logo-secundario-*`
  — note the filename says "secundario" but it is the principal mark); the **`F3™`
  geometric secondary** (`assets/logos/logo-principal-*`, on the red ball, nav, favicon);
  a **`FFF` blackletter** mark seen on merch and the printed booklet; and the **three-`F`/
  three-circle** arrangement. Plus the *manic smiley* (`assets/brand/manic_smiley-0{3,4,5}.svg`).
- **Typographic "icons".** Arrows (`↓ → ↗ ←`), `™`, `©`, `+`, brackets `[ ] { }` and
  slashes `///` stand in for ornament. Unicode, not images.
- **No emoji, ever.**
- **UI icons (substitution — FLAGGED).** For functional product UI (nav, forms, social
  chrome) the package ships nothing, so this system uses **[Lucide](https://lucide.dev)**
  via CDN — a thin, square-cornered, 1.5–2px stroke set that matches the technical line
  weight. This is a substitution, not from the brand book; swap if FFF adopts a defined
  set. Stroke width 1.75, `currentColor`, square linecaps where possible.

All brand SVG/PNG marks live in `assets/`. **Never redraw them by hand — reference the
files.**

---

## FONT SUBSTITUTIONS (please confirm / replace)

- **Helvetica Neue (base):** the book specifies *Helvetica Neue LT Std*. The package only
  ships **Helvetica Now Display Thin-Italic** as a webfont, so the working base falls back
  to the **platform Helvetica Neue / Arial** grotesque (`--font-base`). For pixel-faithful
  output, add the licensed Helvetica Neue / Helvetica Now web files to `assets/fonts/` and
  extend `tokens/fonts.css`.
- **Exposure** ships as **trial** OTFs (`Exposure-0/-80/-90`). Fine for mocks; licence
  before production.
- **MANIC** ships complete (5 cuts) — no substitution.

---

## INDEX — what's in this project

**Foundations**
- `styles.css` — entry point; `@import`s everything below.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `motifs.css` · `fonts.css`
- `guidelines/` — foundation specimen cards (Design System tab).

**Components** (`components/core/` — `window.FFFConsultingF3DesignSystem_d499a4`)
- `Button`, `Tag`, `Stamp`, `Badge`, `Avatar`, `Input`, `Card`, `Annotation`.

**UI kits**
- `ui_kits/slides/` — 8-slide presentation deck in the calibrated aesthetic (deck-stage).
- `ui_kits/website/` — `f3.rainmakerscompany.com` marketing site, fully recreated.
- `ui_kits/social/` — Instagram profile + post-template set.

**Assets** (`assets/`)
- `logos/` — F3 principal + fff secundario (black/white · PNG · SVG).
- `photography/` — real brand selects (red F3 ball, still lifes, B&W & golden-hour).
- `textures/` — paper / charcoal grain scans.
- `brand/` — manic smileys, fff badges, look-&-feel imagery, the brand PDF.
- `fonts/` — Exposure, MANIC ×5, Helvetica Now Thin-Italic.

**Meta**
- `readme.md` (this file) · `SKILL.md` (Agent-Skill manifest).
