/* @ds-bundle: {"format":3,"namespace":"FFFConsultingF3DesignSystem_d499a4","components":[{"name":"Annotation","sourcePath":"components/core/Annotation.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Stamp","sourcePath":"components/core/Stamp.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Annotation.jsx":"0596438ee638","components/core/Avatar.jsx":"e8413d21b056","components/core/Badge.jsx":"fa6c97a3dd5f","components/core/Button.jsx":"79d7786cb80d","components/core/Card.jsx":"237baa2a2866","components/core/Input.jsx":"c20704f2868c","components/core/Stamp.jsx":"558f30ee004c","components/core/Tag.jsx":"f5bc51b0f970","ui_kits/slides/deck-stage.js":"9436a2deeb46","ui_kits/social/ios-frame.jsx":"be3343be4b51","ui_kits/social/posts.jsx":"77f0b24b5e83","ui_kits/social/screens.jsx":"ae53b970a668","ui_kits/website/sectionsA.js":"5606144233cb","ui_kits/website/sectionsB.js":"bac95e265183"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FFFConsultingF3DesignSystem_d499a4 = window.FFFConsultingF3DesignSystem_d499a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Annotation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Annotation
 * The signature technical leader-line label: a hairline rule connecting a
 * code/marker to a label, as seen on the annotated brand portraits.
 * Stack several inside a flex column for the full "leader list" motif.
 */
function Annotation({
  children,
  code,
  side = "left",
  lineLength = 36,
  ink = true,
  accent = false,
  style = {},
  ...rest
}) {
  const lineColor = accent ? "var(--accent)" : ink ? "var(--text-on-ink)" : "var(--text-primary)";
  const textColor = ink ? "var(--text-on-ink)" : "var(--text-primary)";
  const dimColor = ink ? "var(--text-on-ink-dim)" : "var(--text-muted)";
  const Line = () => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: lineColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: lineLength,
      height: 1,
      background: lineColor
    }
  }));
  const label = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 10
    }
  }, code && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.1em",
      color: dimColor
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-base)",
      fontSize: "14px",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: textColor
    }
  }, children));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      flexDirection: side === "right" ? "row-reverse" : "row",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Line, null), label);
}
Object.assign(__ds_scope, { Annotation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Annotation.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Avatar
 * Circle (default) or square. Image, or monogram initials on a flat fill.
 */
function Avatar({
  src,
  alt = "",
  initials,
  size = 40,
  square = false,
  ring = false,
  grayscale = true,
  style = {},
  ...rest
}) {
  const radius = square ? "var(--radius-none)" : "50%";
  const common = {
    width: size,
    height: size,
    borderRadius: radius,
    flex: "none",
    border: ring ? "var(--rule) solid var(--accent)" : "var(--hairline) solid var(--border-default)",
    boxSizing: "border-box",
    overflow: "hidden",
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        ...common,
        display: "block"
      }
    }, rest), /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: alt,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: grayscale ? "grayscale(1) contrast(1.05)" : "none",
        display: "block"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...common,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--f3-negro)",
      color: "var(--f3-blanco)",
      fontFamily: "var(--font-base)",
      fontWeight: 700,
      fontSize: Math.round(size * 0.36),
      letterSpacing: "0.02em"
    }
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Badge
 * A status dot or a small count/indicator. Circle is the only soft shape.
 */
function Badge({
  children,
  variant = "accent",
  dotOnly = false,
  style = {},
  ...rest
}) {
  const palette = {
    accent: {
      bg: "var(--accent)",
      fg: "var(--on-accent)"
    },
    ink: {
      bg: "var(--f3-negro)",
      fg: "var(--f3-blanco)"
    },
    light: {
      bg: "var(--f3-gris-claro)",
      fg: "var(--text-primary)"
    }
  };
  const p = palette[variant] || palette.accent;
  if (dotOnly) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: p.bg,
        ...style
      }
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 18,
      height: 18,
      padding: "0 6px",
      fontFamily: "var(--font-base)",
      fontSize: "10px",
      fontWeight: 700,
      lineHeight: 1,
      color: p.fg,
      background: p.bg,
      borderRadius: "var(--radius-pill)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Button
 * Hard-edged, technical. Default is square (radius 0); the brand only
 * rounds for the `pill` variant. Labels are usually spaced uppercase.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  pill = false,
  full = false,
  uppercase = true,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "11px",
      padding: "8px 14px",
      gap: "8px",
      letterSpacing: "0.14em"
    },
    md: {
      fontSize: "12px",
      padding: "12px 22px",
      gap: "10px",
      letterSpacing: "0.14em"
    },
    lg: {
      fontSize: "14px",
      padding: "16px 30px",
      gap: "12px",
      letterSpacing: "0.12em"
    }
  };
  const palette = {
    primary: {
      bg: "var(--f3-negro)",
      fg: "var(--f3-blanco)",
      bd: "var(--f3-negro)"
    },
    accent: {
      bg: "var(--accent)",
      fg: "var(--on-accent)",
      bd: "var(--accent)"
    },
    outline: {
      bg: "transparent",
      fg: "var(--f3-negro)",
      bd: "var(--f3-negro)"
    },
    ghost: {
      bg: "transparent",
      fg: "var(--f3-negro)",
      bd: "transparent"
    },
    inverse: {
      bg: "var(--f3-blanco)",
      fg: "var(--f3-negro)",
      bd: "var(--f3-blanco)"
    }
  };
  const p = palette[variant] || palette.primary;
  const s = sizes[size] || sizes.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    width: full ? "100%" : "auto",
    fontFamily: "var(--font-base)",
    fontWeight: 500,
    fontSize: s.fontSize,
    letterSpacing: uppercase ? s.letterSpacing : "0",
    textTransform: uppercase ? "uppercase" : "none",
    lineHeight: 1,
    padding: s.padding,
    color: p.fg,
    background: p.bg,
    border: `var(--hairline) solid ${p.bd}`,
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard)",
    WebkitFontSmoothing: "antialiased",
    userSelect: "none",
    ...style
  };
  const hoverFor = {
    primary: {
      background: "var(--f3-gris-oscuro)"
    },
    accent: {
      background: "var(--accent-press)",
      borderColor: "var(--accent-press)"
    },
    outline: {
      background: "var(--f3-negro)",
      color: "var(--f3-blanco)"
    },
    ghost: {
      background: "var(--f3-gris-claro)"
    },
    inverse: {
      background: "var(--f3-gris-claro)"
    }
  };
  const onEnter = e => {
    if (!disabled) Object.assign(e.currentTarget.style, hoverFor[variant] || {});
  };
  const onLeave = e => {
    if (disabled) return;
    e.currentTarget.style.background = p.bg;
    e.currentTarget.style.color = p.fg;
    e.currentTarget.style.borderColor = p.bd;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: base,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Card
 * Square, hairline-framed surface. Optional corner stamp and accent edge.
 * Elevation comes from the rule, not shadow (set `floating` for menus etc.).
 */
function Card({
  children,
  ink = false,
  accentEdge = false,
  corner = null,
  floating = false,
  padded = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      fontFamily: "var(--font-base)",
      background: ink ? "var(--bg-ink)" : "var(--surface-card)",
      color: ink ? "var(--text-on-ink)" : "var(--text-primary)",
      border: `var(--hairline) solid ${ink ? "var(--border-ink)" : "var(--border-default)"}`,
      borderTop: accentEdge ? "var(--rule-bold) solid var(--accent)" : undefined,
      borderRadius: "var(--radius-none)",
      boxShadow: floating ? "var(--shadow-pop)" : "none",
      padding: padded ? "var(--sp-5)" : "0",
      ...style
    }
  }, rest), corner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "10px",
      right: "12px",
      fontFamily: "var(--font-mono)",
      fontSize: "9.5px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: ink ? "var(--text-on-ink-dim)" : "var(--text-muted)"
    }
  }, corner), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Input
 * Square, hairline field. Label is spaced-caps above; focus draws a black
 * (or red, when `accent`) rule. No rounded corners.
 */
function Input({
  label,
  hint,
  value,
  onChange,
  placeholder = "",
  type = "text",
  accent = false,
  disabled = false,
  full = true,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const focusColor = accent ? "var(--accent)" : "var(--f3-negro)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: "8px",
      width: full ? "100%" : "auto",
      fontFamily: "var(--font-base)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: "var(--font-base)",
      fontSize: "14px",
      color: "var(--text-primary)",
      background: disabled ? "var(--f3-gris-claro)" : "var(--surface-raised)",
      border: `var(--hairline) solid ${focused ? focusColor : "var(--border-default)"}`,
      boxShadow: focused ? `inset 0 -2px 0 ${focusColor}` : "none",
      borderRadius: "var(--radius-none)",
      padding: "12px 14px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...inputStyle
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.02em"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Stamp
 * The technical editorial stamp: monospaced text in a hairline box, often
 * wrapped in brackets or prefixed with an ID. Used in corners of layouts.
 */
function Stamp({
  children,
  bracket = false,
  accent = false,
  boxed = true,
  style = {},
  ...rest
}) {
  const color = accent ? "var(--accent)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      lineHeight: 1,
      padding: boxed ? "6px 10px" : "0",
      color,
      border: boxed ? `var(--hairline) solid ${accent ? "var(--accent)" : "var(--border-default)"}` : "none",
      borderRadius: "var(--radius-none)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), bracket ? "{ " : null, children, bracket ? " }" : null);
}
Object.assign(__ds_scope, { Stamp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FFF / F3 — Tag
 * Small spaced-caps label. Square by default; `pill` for the rounded chip.
 */
function Tag({
  children,
  variant = "outline",
  pill = false,
  dot = false,
  style = {},
  ...rest
}) {
  const palette = {
    solid: {
      bg: "var(--f3-negro)",
      fg: "var(--f3-blanco)",
      bd: "var(--f3-negro)"
    },
    outline: {
      bg: "transparent",
      fg: "var(--text-primary)",
      bd: "var(--border-strong)"
    },
    muted: {
      bg: "var(--f3-gris-claro)",
      fg: "var(--text-secondary)",
      bd: "transparent"
    },
    accent: {
      bg: "transparent",
      fg: "var(--accent)",
      bd: "var(--accent)"
    }
  };
  const p = palette[variant] || palette.outline;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      fontFamily: "var(--font-base)",
      fontSize: "10.5px",
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      lineHeight: 1,
      padding: pill ? "6px 12px" : "5px 9px",
      color: p.fg,
      background: p.bg,
      border: `var(--hairline) solid ${p.bd}`,
      borderRadius: pill ? "var(--radius-pill)" : "var(--radius-none)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: variant === "accent" ? "var(--accent)" : "currentColor",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `deckchange`
 *      CustomEvent on the element: detail = {action, from, to, slide}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav and skip don't trigger
      // spurious refreshes.
      const OWN_ATTRS = /^data-(deck-|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          if (n && this._slideSet && this._slideSet.has(n)) this._liveDirty.add(n);
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Rail mutations (delete/move/duplicate) already reconcile synchronously and
      // emit slidechange with reason 'api'; skip the async slotchange that
      // would otherwise re-broadcast with reason 'init'.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }
    _emitDeckChange(detail) {
      this.dispatchEvent(new CustomEvent('deckchange', {
        detail,
        bubbles: true,
        composed: true
      }));
    }
    _deleteSlide(i) {
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const wasCurrent = i === this._index;
      if (i < this._index || wasCurrent && i === this._slides.length - 1) this._index--;
      this._squelchSlotChange = true;
      slide.remove();
      this._emitDeckChange({
        action: 'delete',
        from: i,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const copy = slide.cloneNode(true);
      // Strip ids so the document stays valid (no duplicate-id collisions
      // with the original). Same treatment _materialize gives rail clones.
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Insert after the original and make the copy active so it's the one
      // on screen. _collectSlides re-derives data-screen-label / data-deck-*
      // attrs, so the cloned values are overwritten.
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._emitDeckChange({
        action: 'duplicate',
        from: i,
        to: i + 1,
        slide: copy
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
      if (this._thumbs && this._thumbs[i]) {
        if (on) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
      }
      this._markLastVisible();
      this._emitDeckChange({
        action: on ? 'skip' : 'unskip',
        from: i,
        slide
      });
      // Re-broadcast so the presenter popup's prev/next thumbnails re-pick
      // the nearest non-skipped slide without waiting for a nav event.
      try {
        window.postMessage({
          slideIndexChanged: this._index,
          deckTotal: this._slides.length,
          deckSkipped: this._skippedIndices()
        }, '*');
      } catch (e) {}
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (j < 0 || j >= this._slides.length || j === i) return;
      const slide = this._slides[i];
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      // Track the active slide across the reorder so the same content
      // stays on screen.
      const cur = this._index;
      if (cur === i) this._index = j;else if (i < cur && j >= cur) this._index = cur - 1;else if (i > cur && j <= cur) this._index = cur + 1;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._emitDeckChange({
        action: 'move',
        from: i,
        to: j,
        slide
      });
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/social/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/posts.jsx
try { (() => {
/*  FFF / F3 — Social UI kit · post templates
    The brand's Instagram content system as reusable tiles. Each POST renders
    the same way in the grid (thumb) and the post-detail view. */

/* The nine grid posts — a mix of photographic, manifesto, blueprint and
   typographic templates that mirror the brand book's IG system. */
const POSTS = [{
  id: "p1",
  kind: "photo",
  src: "../../assets/brand/14-1.jpg",
  likes: "1.204",
  caption: "Founder System. Construimos marcas digitales a escala — estrategia, contenido y dirección creativa.",
  tags: "#founders #latam",
  time: "Hace 2 días"
}, {
  id: "p2",
  kind: "word",
  word: "Desmedida",
  sub: "Ambición",
  likes: "982",
  caption: "Compartimos nuestra cabeza estructurada y una ambición desmedida.",
  tags: "#mindset",
  time: "Hace 4 días"
}, {
  id: "p3",
  kind: "blueprint",
  src: "../../assets/brand/13.png",
  likes: "1.560",
  caption: "Building through data / AI. 82 operators · 11 brands.",
  tags: "#system #data",
  time: "Hace 5 días"
}, {
  id: "p4",
  kind: "stat",
  stat: "+11",
  label: "Marcas digitales en desarrollo",
  likes: "744",
  caption: "Buenos Aires, worldwide.",
  tags: "#buildinpublic",
  time: "Hace 1 semana"
}, {
  id: "p5",
  kind: "manifesto",
  src: "../../assets/brand/15.jpg",
  likes: "1.018",
  caption: "Sistematizamos la data que estudiamos del mercado internacional desde que tenemos memoria.",
  tags: "#strategy",
  time: "Hace 1 semana"
}, {
  id: "p6",
  kind: "list",
  title: "Lanzá en 90 días",
  items: ["Diagnóstico & estrategia", "Arquitectura & contenido", "Lanzamiento & sistema"],
  likes: "1.330",
  caption: "Tres etapas. Noventa días. Una arquitectura ejecutable.",
  tags: "#roadmap",
  time: "Hace 2 semanas"
}, {
  id: "p7",
  kind: "smiley",
  likes: "611",
  caption: "{ file under: curated } — por los founders, para los founders.",
  tags: "#fff",
  time: "Hace 2 semanas"
}, {
  id: "p8",
  kind: "word",
  word: "Talento",
  sub: "Apalancamiento",
  likes: "503",
  caption: "Intencionalidad · Apalancamiento · Talento.",
  tags: "#pilares",
  time: "Hace 3 semanas"
}, {
  id: "p9",
  kind: "quote",
  quote: "Te explicamos cómo en 24 minutos.",
  likes: "877",
  caption: "5 años para conectar contenido con ventas. Aplicá ↓",
  tags: "#advisory",
  time: "Hace 3 semanas"
}];

/* Visual body of a post — fills a square; used by grid + detail */
function PostBody({
  post
}) {
  const base = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%"
  };
  switch (post.kind) {
    case "photo":
      return /*#__PURE__*/React.createElement("div", {
        style: base
      }, /*#__PURE__*/React.createElement("img", {
        src: post.src,
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(1) contrast(1.05)"
        }
      }));
    case "manifesto":
      return /*#__PURE__*/React.createElement("div", {
        style: base
      }, /*#__PURE__*/React.createElement("img", {
        src: post.src,
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      }));
    case "blueprint":
      return /*#__PURE__*/React.createElement("div", {
        style: base
      }, /*#__PURE__*/React.createElement("img", {
        src: post.src,
        alt: "",
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      }));
    case "word":
      return /*#__PURE__*/React.createElement("div", {
        className: "ig-card ig-grid-ink",
        style: {
          ...base,
          padding: "16px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ig-card-eyebrow"
      }, /*#__PURE__*/React.createElement("span", {
        className: "ig-red"
      }, "/// "), post.sub), /*#__PURE__*/React.createElement("span", {
        className: "ig-card-word"
      }, post.word), /*#__PURE__*/React.createElement("span", {
        className: "ig-card-tm"
      }, "F3\u2122"));
    case "stat":
      return /*#__PURE__*/React.createElement("div", {
        className: "ig-card ig-grid-ink",
        style: {
          ...base,
          padding: "16px",
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ig-card-eyebrow"
      }, post.label), /*#__PURE__*/React.createElement("span", {
        className: "ig-card-stat"
      }, post.stat), /*#__PURE__*/React.createElement("span", {
        className: "ig-card-foot"
      }, /*#__PURE__*/React.createElement("span", null, "BUENOS AIRES"), /*#__PURE__*/React.createElement("span", {
        className: "ig-red"
      }, "WORLDWIDE")));
    case "list":
      return /*#__PURE__*/React.createElement("div", {
        className: "ig-card",
        style: {
          ...base,
          padding: "18px",
          justifyContent: "flex-start",
          gap: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ig-card-eyebrow",
        style: {
          marginBottom: 12
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ig-red"
      }, "F3 /// "), "90 days"), /*#__PURE__*/React.createElement("span", {
        className: "ig-card-title"
      }, post.title), /*#__PURE__*/React.createElement("div", {
        className: "ig-card-list"
      }, post.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "ig-card-li"
      }, /*#__PURE__*/React.createElement("span", {
        className: "ig-li-num"
      }, "0", i + 1), it))));
    case "smiley":
      return /*#__PURE__*/React.createElement("div", {
        className: "ig-card ig-card--red",
        style: {
          ...base
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "../../assets/brand/manic_smiley-04.png",
        alt: "",
        className: "ig-smiley"
      }), /*#__PURE__*/React.createElement("span", {
        className: "ig-card-stamp"
      }, "{ FILE UNDER: CURATED }"));
    case "quote":
      return /*#__PURE__*/React.createElement("div", {
        className: "ig-card ig-grid-ink",
        style: {
          ...base,
          padding: "20px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ig-card-quote"
      }, "\"", post.quote, "\""), /*#__PURE__*/React.createElement("span", {
        className: "ig-card-eyebrow",
        style: {
          marginTop: 14
        }
      }, "FFF Consulting ", /*#__PURE__*/React.createElement("span", {
        className: "ig-red"
      }, "\u2193")));
    default:
      return /*#__PURE__*/React.createElement("div", {
        style: {
          ...base,
          background: "var(--bg-ink)"
        }
      });
  }
}
window.IG_POSTS = POSTS;
window.PostBody = PostBody;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/posts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/screens.jsx
try { (() => {
/*  FFF / F3 — Social UI kit · screens (Instagram profile + post detail) */

const DS_S = window.FFFConsultingF3DesignSystem_d499a4 || {};
const {
  Button: IGButton
} = DS_S;
const Posts = window.IG_POSTS;
const PostBodyC = window.PostBody;

/* tiny IG glyphs */
const G = {
  back: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 24,
    height: p?.s || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 5 8 12 15 19"
  })),
  grid: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 22,
    height: p?.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "3",
    x2: "9",
    y2: "21"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "3",
    x2: "15",
    y2: "21"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "15",
    x2: "21",
    y2: "15"
  })),
  tagged: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 22,
    height: p?.s || 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5l9 16 9-16z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })),
  heart: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 24,
    height: p?.s || 24,
    viewBox: "0 0 24 24",
    fill: p?.fill || "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7.5-4.6-10-9.2C.7 9 2 5.5 5.2 5.5c2 0 3.2 1.2 3.8 2.3.6-1.1 1.8-2.3 3.8-2.3C16 5.5 17.3 9 16 11.8 13.5 16.4 12 21 12 21z",
    transform: "translate(0 -1)"
  })),
  comment: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 24,
    height: p?.s || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8 8 0 0 1-11.5 7.2L3 20l1.3-6.5A8 8 0 1 1 21 11.5z"
  })),
  share: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 24,
    height: p?.s || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "3",
    x2: "10",
    y2: "14"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "21 3 14 21 10 14 3 10 21 3"
  })),
  bookmark: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 24,
    height: p?.s || 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "square"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h12v18l-6-4-6 4z"
  })),
  dots: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 20,
    height: p?.s || 20,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.6"
  })),
  verified: p => /*#__PURE__*/React.createElement("svg", {
    width: p?.s || 14,
    height: p?.s || 14,
    viewBox: "0 0 24 24",
    fill: "var(--accent)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 1l2.4 2.2 3.2-.3 1 3.1 2.9 1.4-1 3 1 3-2.9 1.4-1 3.1-3.2-.3L12 23l-2.4-2.2-3.2.3-1-3.1L2.5 16l1-3-1-3 2.9-1.4 1-3.1 3.2.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12.2l2.6 2.6L16 9.4",
    stroke: "#171717",
    strokeWidth: "1.8",
    fill: "none",
    strokeLinecap: "square"
  }))
};

/* ---------- PROFILE SCREEN ---------- */
function Profile({
  onOpenPost
}) {
  const [tab, setTab] = React.useState("grid");
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-topbar-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ig-lock"
  }, "\u25A3"), /*#__PURE__*/React.createElement("span", {
    className: "ig-handle"
  }, "f3consulting"), /*#__PURE__*/React.createElement(G.verified, {
    s: 15
  })), /*#__PURE__*/React.createElement(G.dots, {
    s: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-prof-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-avatar"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-secundario-blanco.png",
    alt: "F3"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-stat"
  }, /*#__PURE__*/React.createElement("b", null, "248"), /*#__PURE__*/React.createElement("span", null, "posts")), /*#__PURE__*/React.createElement("div", {
    className: "ig-stat"
  }, /*#__PURE__*/React.createElement("b", null, "41,2k"), /*#__PURE__*/React.createElement("span", null, "followers")), /*#__PURE__*/React.createElement("div", {
    className: "ig-stat"
  }, /*#__PURE__*/React.createElement("b", null, "11"), /*#__PURE__*/React.createElement("span", null, "following")))), /*#__PURE__*/React.createElement("div", {
    className: "ig-bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-bio-name"
  }, "FFF Consulting ", /*#__PURE__*/React.createElement("span", {
    className: "ig-bio-tm"
  }, "\u2122")), /*#__PURE__*/React.createElement("div", {
    className: "ig-bio-cat"
  }, "Creative Consulting \xB7 Founder System"), /*#__PURE__*/React.createElement("div", {
    className: "ig-bio-text"
  }, "Construimos marcas digitales a escala.", /*#__PURE__*/React.createElement("br", null), "Estrategia \xB7 Contenido \xB7 Data / AI", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "ig-red"
  }, "Lanz\xE1 tu oferta digital en 90 d\xEDas \u2193")), /*#__PURE__*/React.createElement("div", {
    className: "ig-bio-link"
  }, "f3.rainmakerscompany.com")), /*#__PURE__*/React.createElement("div", {
    className: "ig-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ig-act-primary",
    onClick: () => onOpenPost(Posts[0])
  }, "Seguir"), /*#__PURE__*/React.createElement("button", {
    className: "ig-act-secondary"
  }, "Mensaje"), /*#__PURE__*/React.createElement("button", {
    className: "ig-act-secondary ig-act-icon"
  }, "\u25BE")), /*#__PURE__*/React.createElement("div", {
    className: "ig-highlights"
  }, ["Work", "Roadmap", "Team", "Prensa"].map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "ig-hl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-hl-ring"
  }, /*#__PURE__*/React.createElement("span", null, h[0])), /*#__PURE__*/React.createElement("span", {
    className: "ig-hl-label"
  }, h)))), /*#__PURE__*/React.createElement("div", {
    className: "ig-tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ig-tab" + (tab === "grid" ? " on" : ""),
    onClick: () => setTab("grid")
  }, /*#__PURE__*/React.createElement(G.grid, null)), /*#__PURE__*/React.createElement("button", {
    className: "ig-tab" + (tab === "tagged" ? " on" : ""),
    onClick: () => setTab("tagged")
  }, /*#__PURE__*/React.createElement(G.tagged, null))), /*#__PURE__*/React.createElement("div", {
    className: "ig-grid"
  }, Posts.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "ig-tile",
    onClick: () => onOpenPost(p)
  }, /*#__PURE__*/React.createElement(PostBodyC, {
    post: p
  }))))));
}

/* ---------- POST DETAIL ---------- */
function PostDetail({
  post,
  onBack
}) {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "ig-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-topbar"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ig-iconbtn",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(G.back, null)), /*#__PURE__*/React.createElement("div", {
    className: "ig-post-head-name"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ig-mono"
  }, "Publicaciones")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig-scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-post-user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-post-av"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/logo-secundario-blanco.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig-post-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ig-post-handle"
  }, "f3consulting ", /*#__PURE__*/React.createElement(G.verified, {
    s: 13
  })), /*#__PURE__*/React.createElement("span", {
    className: "ig-post-loc"
  }, "Buenos Aires \xB7 Worldwide")), /*#__PURE__*/React.createElement(G.dots, {
    s: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig-post-media"
  }, /*#__PURE__*/React.createElement(PostBodyC, {
    post: post
  })), /*#__PURE__*/React.createElement("div", {
    className: "ig-post-actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ig-post-left"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ig-iconbtn" + (liked ? " liked" : ""),
    onClick: () => setLiked(!liked)
  }, /*#__PURE__*/React.createElement(G.heart, {
    fill: liked ? "var(--accent)" : "none"
  })), /*#__PURE__*/React.createElement("button", {
    className: "ig-iconbtn"
  }, /*#__PURE__*/React.createElement(G.comment, null)), /*#__PURE__*/React.createElement("button", {
    className: "ig-iconbtn"
  }, /*#__PURE__*/React.createElement(G.share, null))), /*#__PURE__*/React.createElement("button", {
    className: "ig-iconbtn" + (saved ? " on" : ""),
    onClick: () => setSaved(!saved)
  }, /*#__PURE__*/React.createElement(G.bookmark, null))), /*#__PURE__*/React.createElement("div", {
    className: "ig-post-likes"
  }, post.likes, " Me gusta"), /*#__PURE__*/React.createElement("div", {
    className: "ig-post-caption"
  }, /*#__PURE__*/React.createElement("b", null, "f3consulting"), " ", post.caption, " ", /*#__PURE__*/React.createElement("span", {
    className: "ig-tags"
  }, post.tags)), /*#__PURE__*/React.createElement("div", {
    className: "ig-post-time"
  }, post.time)));
}
window.IGProfile = Profile;
window.IGPostDetail = PostDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sectionsA.js
try { (() => {
/*  FFF / F3 — Website sections (upper half)
    Nav · Hero · About · Features(Accesos) · RoadmapIntro · Timeline
    Faithful recreation of f3.rainmakerscompany.com in the new branding.
    Plain JS factory funcs returning DOM — no framework, easy to read. */

(function () {
  const LOGO_W = "../../assets/logos/logo-principal-blanco.png";
  const SMILEY = "../../assets/brand/manic_smiley-04.png";

  /* tiny helper */
  function h(tag, cls, html) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html != null) el.innerHTML = html;
    return el;
  }

  /* technical arrow icon */
  const ARROW = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="13 5 20 12 13 19"/></svg>`;

  /* placeholder photo tile */
  function placeholder(tag, withSmiley) {
    const p = h("div", "ph");
    if (withSmiley) {
      const im = h("img", "smiley");
      im.src = SMILEY;
      im.alt = "";
      p.appendChild(im);
    }
    p.appendChild(h("span", "ph-tag", tag));
    return p;
  }

  /* ============================ NAV ============================ */
  function Nav(onApply) {
    const nav = h("nav", "nav");
    nav.innerHTML = `
      <img class="nav-logo" src="${LOGO_W}" alt="F3" />
      <div class="nav-right">
        <a class="nav-link nav-links-text" href="#accesos">Accesos</a>
        <a class="nav-link nav-links-text" href="#roadmap">Roadmap</a>
        <a class="nav-link nav-links-text" href="#team">Team</a>
        <button class="nav-cta">Aplicar a F3</button>
      </div>`;
    nav.querySelector(".nav-cta").addEventListener("click", onApply);
    window.addEventListener("scroll", () => {
      nav.classList.toggle("solid", window.scrollY > 40);
    });
    return nav;
  }

  /* ============================ HERO ============================ */
  function Hero(onApply) {
    const s = h("section", "slide bp");
    s.id = "top";
    s.innerHTML = `
      <div class="bp-cross" style="left:12%;top:24%"></div>
      <div class="bp-cross" style="left:78%;top:32%"></div>
      <div class="bp-cross" style="left:64%;top:70%"></div>
      <div class="slide-overlay" style="background:radial-gradient(ellipse at center, rgba(16,16,16,0.2), rgba(16,16,16,0.78))"></div>
      <span class="stamp-tl">F3™ — Founder System</span>
      <span class="stamp-tr acc">[ PRIVATE ]</span>
      <span class="stamp-bl">Creative Consulting / 2026</span>
      <span class="stamp-br">ESTD ID: SM-2026</span>
      <div class="z" style="width:100%;height:100vh;display:flex;flex-direction:column">
        <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:0 24px">
          <img class="hero-word" src="${LOGO_W}" alt="F3" />
        </div>
        <div style="padding:0 24px 72px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:22px">
          <h1 class="thin hero-sub" style="font-size:clamp(26px,4.4vw,52px);margin:0">Lanzá tu oferta digital en 90 días</h1>
          <p class="mono-body" style="max-width:560px;text-transform:uppercase;font-size:12px">1-1 en estrategia, producto, contenido y operaciones con los founders de F3.</p>
          <button class="btn-hero" style="margin-top:8px">Aplicar a F3 ${ARROW}</button>
        </div>
      </div>`;
    s.querySelector(".btn-hero").addEventListener("click", onApply);
    return s;
  }

  /* ============================ ABOUT ============================ */
  function About() {
    const s = h("section", "section");
    s.id = "nueva-generacion";
    s.style.cssText = "padding:120px 0;display:flex;align-items:center;justify-content:center;min-height:62vh";
    s.innerHTML = `
      <div class="wrap" style="text-align:center;max-width:880px">
        <span class="mono reveal" style="display:block;margin-bottom:34px"><span class="slash">///</span>&nbsp; Un espacio privado</span>
        <p class="thin reveal" style="font-weight:200;font-size:clamp(24px,3.4vw,46px);text-transform:none;letter-spacing:-0.02em;line-height:1.18;margin:0">
          Un espacio privado donde <span style="font-family:var(--font-display);text-transform:uppercase">founders</span> se conectan, colaboran y expanden sus empresas <span class="acc">juntos</span>.
        </p>
      </div>`;
    return s;
  }

  /* ===================== FEATURES / ACCESOS ===================== */
  function Features() {
    const data = [["01", "Dirección Estratégica", "Sesiones 1 a 1 con los founders de F3 sobre visión de negocio, arquitectura comercial, contenido y operaciones."], ["02", "Notion OS", "Sistema operativo en Notion con roadmap, calendario de contenido y checkpoints de ejecución semana a semana."], ["03", "Arquitectura Comercial", "Claridad en tu oferta, monetización, estructura de embudos, KPIs y lógica de ventas."], ["04", "Posicionamiento", "Construcción de narrativa, ángulos de comunicación y estrategia multiplataforma para generar exposición y conversión."], ["05", "Equipo de Comunicación", "Auditoría y diseño operativo para expandir y profesionalizar tu equipo interno de comunicación."], ["06", "Comunidad Privada", "Acceso a la red privada de founders F3 y a la bolsa de talento certificada del ecosistema."]];
    const s = h("section", "section");
    s.id = "accesos";
    const grid = h("div", "feat-grid reveal");
    data.forEach(([num, title, desc]) => {
      const c = h("div", "feat");
      c.innerHTML = `<span class="feat-num">${num}</span><h3 class="feat-title">${title}</h3><p class="feat-desc">${desc}</p>`;
      grid.appendChild(c);
    });
    const head = h("div", "wrap");
    head.innerHTML = `
      <p class="mono reveal" style="margin-bottom:28px"><span class="slash">F3 /</span> Accesos</p>
      <h2 class="giant reveal" style="font-size:clamp(58px,11vw,150px);margin:0 0 56px">Accesos</h2>`;
    const inner = h("div", "wrap");
    inner.appendChild(grid);
    s.appendChild(head);
    s.appendChild(inner);
    return s;
  }

  /* ===================== ROADMAP INTRO ===================== */
  function RoadmapIntro() {
    const s = h("section", "slide bp");
    s.id = "roadmap";
    s.innerHTML = `
      <div class="bp-cross" style="left:18%;top:30%"></div>
      <div class="bp-cross" style="left:82%;top:64%"></div>
      <span class="stamp-tl">F3 / 90 Days</span>
      <span class="stamp-br acc">Edition 01</span>
      <div class="z wrap" style="display:flex;flex-direction:column;align-items:center;text-align:center">
        <p class="mono reveal" style="margin-bottom:34px"><span class="slash">F3 /</span> 90 days</p>
        <h2 class="giant reveal" style="font-size:clamp(72px,17vw,250px);margin:0">Roadmap</h2>
        <p class="mono-body reveal" style="margin-top:38px;max-width:420px;text-transform:uppercase;font-size:12px">Tres etapas. Noventa días. Una arquitectura ejecutable.</p>
      </div>`;
    return s;
  }

  /* ===================== TIMELINE / PHASES ===================== */
  function Timeline() {
    const phases = [["01", "Días 1–30", "Diagnóstico & Estrategia", ["Diagnóstico profundo del negocio", "Definición de oferta principal", "Arquitectura comercial y monetización", "Roadmap operativo"]], ["02", "Días 31–60", "Arquitectura & Contenido", ["Narrativa y estrategia multiplataforma", "Producción de contenido", "Construcción del sistema de ventas", "Preparación técnica del lanzamiento"]], ["03", "Días 61–90", "Lanzamiento & Sistema", ["Activación del lanzamiento digital", "Conversión y seguimiento comercial", "Optimización operativa y de equipo", "Sistema evergreen post-programa"]]];
    const s = h("section", "section");
    const inner = h("div", "wrap");
    const head = h("div", null);
    head.style.cssText = "display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:24px;margin-bottom:64px";
    head.innerHTML = `
      <div>
        <p class="mono reveal" style="margin-bottom:18px"><span class="slash">F3 /</span> Roadmap</p>
        <h2 class="thin reveal" style="font-size:clamp(44px,7vw,104px);margin:0">90 Day<br/>Roadmap</h2>
      </div>
      <p class="mono-body reveal" style="max-width:360px;text-transform:none;font-size:13px">Tres fases secuenciales para llevar tu oferta digital desde el diagnóstico hasta el lanzamiento y el sistema evergreen.</p>`;
    const grid = h("div", "phase-grid reveal");
    phases.forEach(([num, range, label, items]) => {
      const card = h("div", "phase");
      const head2 = h("div", "phase-head");
      head2.innerHTML = `<div><p class="phase-range">${range}</p><h3 class="phase-label">${label}</h3></div><span class="phase-num">${num}</span>`;
      const img = h("div", "phase-img");
      img.appendChild(placeholder("Fase " + num + " — imagen", true));
      const ul = h("div", "phase-items");
      items.forEach(it => ul.appendChild(h("div", "phase-item", "— " + it)));
      card.appendChild(head2);
      card.appendChild(img);
      card.appendChild(ul);
      grid.appendChild(card);
    });
    inner.appendChild(head);
    inner.appendChild(grid);
    s.appendChild(inner);
    return s;
  }
  window.F3Web = window.F3Web || {};
  Object.assign(window.F3Web, {
    h,
    placeholder,
    ARROW,
    Nav,
    Hero,
    About,
    Features,
    RoadmapIntro,
    Timeline,
    LOGO_W,
    SMILEY
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sectionsA.js", error: String((e && e.message) || e) }); }

// ui_kits/website/sectionsB.js
try { (() => {
/*  FFF / F3 — Website sections (lower half)
    Team · Scope · Achievements · Stats · FinalCTA · Footer · ApplicationForm */

(function () {
  const {
    h,
    placeholder,
    ARROW,
    LOGO_W
  } = window.F3Web;

  /* ===================== TEAM ===================== */
  function Team() {
    const team = [["Facundo Couyet", "Arquitectura Empresarial"], ["Franco Dato", "Visión de Negocios"], ["Federico Cristofari", "Estratega Creativo"], ["Teo Pizarro", "Dirección de Operaciones"]];
    const s = h("section", "section");
    s.id = "team";
    s.style.cssText = "padding:0;position:relative";
    const header = h("div", null);
    header.style.cssText = "position:absolute;top:0;left:0;right:0;z-index:20;display:flex;align-items:center;justify-content:space-between;pointer-events:none;padding:40px 24px";
    header.innerHTML = `<p class="mono"><span class="slash">F3 /</span> Team</p><p class="mono" style="display:none">Founding team</p>`;
    if (window.innerWidth >= 768) {
      header.style.padding = "56px 64px";
      header.querySelector("p:last-child").style.display = "block";
    }
    const grid = h("div", "team-grid");
    team.forEach(([name, role], i) => {
      const card = h("article", "team-card");
      const photo = h("div", "team-photo");
      photo.appendChild(placeholder("Retrato — " + name.split(" ")[0], false));
      const grad = h("div", "team-grad");
      const idx = h("div", "team-idx", String(i + 1).padStart(2, "0"));
      const info = h("div", "team-info");
      info.innerHTML = `<div class="team-rule"></div><h3 class="team-name">${name}</h3><p class="team-role">${role}</p>`;
      card.appendChild(photo);
      card.appendChild(grad);
      card.appendChild(idx);
      card.appendChild(info);
      grid.appendChild(card);
    });
    s.appendChild(header);
    s.appendChild(grid);
    return s;
  }

  /* ===================== SCOPE ===================== */
  function Scope() {
    const hacemos = ["Estrategia de negocio y visión", "Arquitectura de oferta y monetización", "Narrativa y estrategia de contenido", "Diseño del lanzamiento digital", "Sistema de ventas y seguimiento", "Auditoría de equipo y operaciones", "Roadmap ejecutable de 90 días"];
    const noHacemos = ["No producimos tu contenido", "No operamos tus redes sociales", "No editamos tus videos", "No manejamos tus ads", "No hacemos licencias ni productos por vos"];
    const s = h("section", "section");
    const inner = h("div", "wrap");
    inner.style.maxWidth = "1080px";
    const yes = hacemos.map(t => `<li class="scope-li yes"><span class="mk">→</span>${t}</li>`).join("");
    const no = noHacemos.map(t => `<li class="scope-li no"><span class="mk">×</span>${t}</li>`).join("");
    inner.innerHTML = `
      <p class="mono reveal" style="text-align:center;margin-bottom:56px">Alcance del servicio</p>
      <div class="scope-grid reveal">
        <div class="scope-col"><h3 class="scope-h">Lo que hacemos</h3><ul class="scope-list">${yes}</ul></div>
        <div class="scope-col"><h3 class="scope-h" style="color:var(--site-dim)">Lo que no hacemos</h3><ul class="scope-list">${no}</ul></div>
      </div>
      <p class="mono reveal" style="text-align:center;max-width:620px;margin:56px auto 0;line-height:1.7;color:rgba(250,250,250,0.6)">No ejecutamos por vos. Diseñamos la arquitectura y te acompañamos a accionar.</p>`;
    s.appendChild(inner);
    return s;
  }

  /* ===================== ACHIEVEMENTS ===================== */
  function Achievements() {
    const items = ["Una oferta digital validada y lista para monetizar.", "Un roadmap ejecutable para que sepas cómo continuar.", "Un calendario de contenido de 90 días en producción.", "Un embudo de ventas con KPIs definidos y seguimiento.", "Tu equipo interno de comunicación auditado y alineado.", "Acceso permanente a la comunidad y a la bolsa de talento F3."];
    const CHECK = `<svg class="ach-check" width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7.5L5.5 11L12 3.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="square"/></svg>`;
    const s = h("section", "section");
    const inner = h("div", "wrap");
    inner.style.maxWidth = "920px";
    const lis = items.map((t, i) => `<li class="ach-li"><span class="ach-num">${String(i + 1).padStart(2, "0")}</span>${CHECK}<p class="ach-text">${t}</p></li>`).join("");
    inner.innerHTML = `
      <p class="mono reveal" style="margin-bottom:28px"><span class="slash">F3 /</span> Resultados</p>
      <h2 class="thin reveal" style="font-size:clamp(30px,5vw,68px);margin:0 0 56px;max-width:14ch">Al cerrar los 90 días<br/>vas a tener<span class="acc">:</span></h2>
      <ul class="ach-list reveal">${lis}</ul>`;
    s.appendChild(inner);
    return s;
  }

  /* ===================== STATS ===================== */
  function Stats() {
    const s = h("section", "slide bp");
    s.innerHTML = `
      <div class="bp-cross" style="left:40%;top:22%"></div>
      <div class="bp-cross" style="left:24%;top:74%"></div>
      <div class="bp-cross" style="left:88%;top:46%"></div>
      <div class="slide-overlay" style="background:linear-gradient(120deg, rgba(16,16,16,0.4), rgba(16,16,16,0.8))"></div>
      <div class="stats-11 z">
        <p class="mono" style="margin:0 0 10px">Empresas digitales en desarrollo</p>
        <p class="giant" style="font-size:clamp(72px,12vw,170px);margin:0;line-height:0.8">+11</p>
      </div>
      <div class="stats-ba z"><p class="thin" style="font-size:clamp(30px,6vw,88px);margin:0">Buenos Aires,</p></div>
      <div class="stats-ww z"><p class="giant" style="font-size:clamp(40px,9vw,140px);margin:0">Worldwide</p></div>
      <span class="stamp-tr acc">[ LATAM /// GLOBAL ]</span>`;
    return s;
  }

  /* ===================== FINAL CTA ===================== */
  function FinalCTA(onApply) {
    const s = h("section", "slide bp");
    s.innerHTML = `
      <div class="bp-cross" style="left:16%;top:36%"></div>
      <div class="bp-cross" style="left:80%;top:60%"></div>
      <div class="slide-overlay" style="background:radial-gradient(ellipse at center, rgba(16,16,16,0.35), rgba(16,16,16,0.82))"></div>
      <span class="stamp-tl">F3™ — Apply</span>
      <span class="stamp-br acc">{ FILE UNDER: CURATED }</span>
      <div class="z wrap" style="text-align:center;max-width:920px">
        <h2 class="thin reveal" style="font-size:clamp(26px,4.2vw,52px);margin:0 0 44px;line-height:1.18;text-transform:none;letter-spacing:-0.02em">
          Generar comunidad, lanzar tu oferta digital, conectar con founders y crecer tu equipo con sistemas…
          <span style="display:block;margin-top:24px;color:rgba(250,250,250,0.68)">Suena como algo que <span class="acc">harías</span>.</span>
        </h2>
        <button class="btn-hero reveal">Aplicar a F3 ${ARROW}</button>
      </div>`;
    s.querySelector(".btn-hero").addEventListener("click", onApply);
    return s;
  }

  /* ===================== FOOTER ===================== */
  function Footer() {
    const f = h("footer", "footer");
    const inner = h("div", "wrap");
    inner.innerHTML = `
      <div class="footer-grid">
        <img src="${LOGO_W}" alt="F3" style="height:44px" />
        <div class="footer-cols">
          <div class="footer-col"><span class="footer-k">Index</span><a href="#accesos">Accesos</a><a href="#roadmap">Roadmap</a><a href="#team">Team</a></div>
          <div class="footer-col"><span class="footer-k">Social</span><a href="#">Instagram</a><a href="#">@f3.consulting</a></div>
          <div class="footer-col"><span class="footer-k">Contacto</span><a href="#">f3.rainmakerscompany.com</a><a href="#">hola@f3consulting.com</a></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} F3 Consulting — Todos los derechos reservados</span>
        <span class="acc">Curated by FFF /// Founders</span>
      </div>`;
    f.appendChild(inner);
    return f;
  }

  /* ===================== APPLICATION FORM (modal) ===================== */
  function ApplicationForm() {
    const revenue = ["Menos de $5,000/mes", "$5,000 – $15,000/mes", "$15,000 – $50,000/mes", "$50,000 – $100,000/mes", "Más de $100,000/mes"];
    const codes = ["+54", "+1", "+34", "+52", "+57", "+55", "+56", "+51"];
    const scrim = h("div", "modal-scrim");
    scrim.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal-x" aria-label="Cerrar"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg></button>
        <div class="modal-body">
          <div class="modal-head">
            <h2 class="modal-title">Aplicar a F3</h2>
            <p class="modal-desc">Unite al ecosistema F3</p>
          </div>
          <form class="form" novalidate>
            <div class="field" data-f="name"><label>Nombre completo <span class="req">*</span></label><input name="name" placeholder="Tu nombre" /><span class="err" hidden>Este campo es obligatorio</span></div>
            <div class="field" data-f="email"><label>Email <span class="req">*</span></label><input name="email" type="email" placeholder="tu@email.com" /><span class="err" hidden>Este campo es obligatorio</span></div>
            <div class="field" data-f="phone"><label>Teléfono <span class="req">*</span></label>
              <div class="phone-row"><select name="code">${codes.map(c => `<option>${c}</option>`).join("")}</select><input name="phone" type="tel" placeholder="11 1234 5678" /></div>
              <span class="err" hidden>Este campo es obligatorio</span></div>
            <div class="field" data-f="instagram"><label>Instagram</label><input name="instagram" placeholder="@tuhandle" /></div>
            <div class="field" data-f="revenue"><label>Facturación mensual <span class="req">*</span></label>
              <select name="revenue"><option value="" disabled selected>Seleccioná un rango</option>${revenue.map(r => `<option>${r}</option>`).join("")}</select>
              <span class="err" hidden>Este campo es obligatorio</span></div>
            <button type="submit" class="form-submit">Enviar aplicación</button>
            <p class="form-note">Al enviar, aceptás ser contactado sobre F3 Consulting.</p>
          </form>
        </div>
      </div>`;
    const close = () => scrim.classList.remove("open");
    scrim.addEventListener("click", e => {
      if (e.target === scrim) close();
    });
    scrim.querySelector(".modal-x").addEventListener("click", close);
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") close();
    });
    const form = scrim.querySelector("form");
    form.addEventListener("submit", e => {
      e.preventDefault();
      const required = ["name", "email", "phone", "revenue"];
      let ok = true;
      required.forEach(f => {
        const field = scrim.querySelector(`[data-f="${f}"]`);
        const val = form.elements[f].value.trim();
        const bad = !val;
        field.classList.toggle("invalid", bad);
        field.querySelector(".err").hidden = !bad;
        if (bad) ok = false;
      });
      if (!ok) return;
      const body = scrim.querySelector(".modal-body");
      body.innerHTML = `
        <div class="form-done">
          <p class="ok-eyebrow">Aplicación recibida</p>
          <h3>Gracias.</h3>
          <p>Revisamos cada aplicación de forma individual. Si hay fit, te contactamos dentro de las próximas 48 horas.</p>
          <button class="btn-ghost" style="margin-top:8px">Cerrar</button>
        </div>`;
      body.querySelector(".btn-ghost").addEventListener("click", close);
    });
    return {
      el: scrim,
      open: () => scrim.classList.add("open")
    };
  }
  Object.assign(window.F3Web, {
    Team,
    Scope,
    Achievements,
    Stats,
    FinalCTA,
    Footer,
    ApplicationForm
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sectionsB.js", error: String((e && e.message) || e) }); }

__ds_ns.Annotation = __ds_scope.Annotation;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.Tag = __ds_scope.Tag;

})();
