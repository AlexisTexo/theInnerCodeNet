# CLAUDE.md — theInnerCode · Brand & Visual System

This file is the single source of truth for the visual identity of **theinnercode.net**.
All code generated for this project MUST follow the rules and tokens defined here.

---

## 1. Project context

- Stack: **Vite + React** (JSX). No TypeScript unless explicitly requested.
- Entry points: `index.html` → `src/main.jsx` → `src/App.jsx`
- Styles: plain CSS files (`src/index.css` global reset/tokens, `src/App.css` component styles).
  **Do NOT use Tailwind, CSS modules, or CSS-in-JS.**
- Language: bilingual EN/ES. Copy is driven by `window.__THEINNERCODE_LANG__`
  (set by the inline script in `index.html`). Always keep both keys in every copy object.
- Public assets live in `/public/`. Never import them with `import` — use absolute `/` paths in URLs.

---

## 2. Typography system

### Google Fonts to load (add to `index.html` `<head>`)

```html
<!-- Primary: Lato (all weights used) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,700;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```

### Font families

| Token (CSS var)              | Value                                              | Usage |
|------------------------------|----------------------------------------------------|-------|
| `--font-primary`             | `'Lato', 'Helvetica Neue', Arial, sans-serif`      | All body copy, UI, navigation |
| `--font-display`             | `'Libre Baskerville', Georgia, serif`              | **Headlines / Titles only** |

### Weight tokens

| Token                  | Lato weight | Name   |
|------------------------|-------------|--------|
| `--fw-light`           | `300`       | Light  |
| `--fw-regular`         | `400`       | Regular|
| `--fw-bold`            | `700`       | Bold   |
| `--fw-black`           | `900`       | Black  |

### Typography scale & rules

#### Títulos grandes (Hero / H1)
- **Font:** `var(--font-display)` — Libre Baskerville
- **Style:** *Bold Italic* (`font-weight: 700; font-style: italic`)  
  followed by normal bold for the second line (mixed italic+normal is intentional, see brand)
- **Tracking (letter-spacing):** `-0.01em` (equivalent to tracking −10 in print)
- **Line-height:** `1.1`
- **Example class:** `.title-hero`

#### Títulos H2 / Section headings — Lato
- **Font:** `var(--font-primary)` — Lato
- **Weight:** `900` (Black)
- **Case:** sentence case OR ALL CAPS variant (see `.title-caps`)
- **Tracking:** `-0.01em`
- **Line-height:** `1.15`
- **Example classes:** `.title-section`, `.title-caps`

#### Subtítulos / Subheadings
- **Font:** `var(--font-primary)` — Lato
- **Weight:** `700` (Bold)
- **Tracking:** `-0.01em`
- **Line-height:** `1.3`
- **Example class:** `.subtitle`

#### Texto-Copy (body)
- **Font:** `var(--font-primary)` — Lato
- **Weight:** `400` (Regular)
- **Tracking:** `0` (normal)
- **Line-height:** `1.6`
- **Example class:** `.body-copy`

#### Texto-Copy 2 (secondary body / captions)
- **Font:** `var(--font-primary)` — Lato
- **Weight:** `300` (Light)
- **Tracking:** `0`
- **Line-height:** `1.7`
- **Example class:** `.body-copy-2`

#### UI / CTA labels
- **Font:** `var(--font-primary)` — Lato
- **Weight:** `700`
- **Letter-spacing:** `0.05em`–`0.1em` (slightly open, never closed)
- **Text-transform:** uppercase where used in buttons/nav

---

## 3. Color palette

### Primary palette

```css
/* --- Neutrals --- */
--color-black:   #000000;
--color-white:   #ffffff;

/* --- Brand accent colors --- */
--color-pastel-orange:  #FDB360;   /* Pantone 149   — R:253 G:179 B:96  */
--color-pumpkin:        #FE8851;   /* Pantone 1645  — R:254 G:136 B:81  */
--color-persimmon:      #FE5740;   /* Pantone RED032— R:254 G:87  B:64  */
--color-amethyst:       #A36BDA;   /* Pantone 265   — R:163 G:107 B:208 */
--color-light-royal-purple: #6751C4; /* Pantone 2725 — R:103 G:81  B:196 */
--color-mirror-blue:    #2D72FF;   /* Pantone 2727  — R:45  G:114 B:255 */
--color-neon-teal:      #00B3BD;   /* Pantone 2727  — R:0   G:179 B:189 */
--color-emerald:        #52DF83;   /* Pantone 346   — R:82  G:223 B:131 */
```

### Secondary palette (grays)

```css
--color-gray-dark:    #4C4C4C;   /* R:76  G:76  B:76  */
--color-gray-mid:     #7F7F7F;   /* R:127 G:127 B:127 */
--color-gray-light:   #CCCCCC;   /* R:204 G:204 B:204 */
```

### Tonal / pastel variants

```css
--color-pastel-orange-2:  #FDC280;
--color-pumpkin-2:        #FEA074;
--color-persimmon-2:      #FE7966;
--color-amethyst-2:       #B589E1;
--color-royal-purple-2:   #8574D0;
--color-mirror-blue-2:    #578EFF;
--color-neon-teal-2:      #33C2CA;
--color-emerald-2:        #75E59C;
```

### Semantic aliases

```css
--color-bg:          var(--color-white);
--color-bg-dark:     var(--color-black);
--color-text:        var(--color-black);
--color-text-muted:  var(--color-gray-mid);
--color-text-invert: var(--color-white);
--color-accent-1:    var(--color-pumpkin);        /* warm CTA */
--color-accent-2:    var(--color-mirror-blue);    /* cool highlight */
--color-accent-3:    var(--color-emerald);        /* positive / success */
```

---

## 4. Visual design rules

### General
- **Background:** White (`--color-white`) for light sections; Black (`--color-black`) for the dark hero section.
- **Grid:** max content width `1200px`, centered, with `5vw` side padding.
- **Border-radius:** 0 for blocks/cards with content; `999px` for pill buttons only.
- Avoid drop shadows — use color contrast and spacing instead.

### Navbar / Header
- White background, 1px bottom border (`--color-gray-light`).
- Logo left; navigation links centered; CTA "Contact us" right — pill button, black fill, white text.
- Font: Lato Regular `14px`, tracking `0.02em`.
- On mobile: hamburger or hidden nav (implement as needed).

### Hero section
- Full-width, **black background**.
- Large display graphic (3D colorful cylinders / brand visual) on the left column.
- Right column: headline mixing Libre Baskerville Bold Italic + Lato Black.
  - EN: *"Crack the code –"* [italic Baskerville] + **"your clients will thank you for that."** [Lato Black]
  - ES: *"Descifra el código –"* [italic Baskerville] + **"tus clientes te lo agradecerán."** [Lato Black]
- Below headline: body copy in Lato Regular white, max `460px` wide.
- Below body: 3 feature blurbs in a row, each with a colored heading (`--color-pumpkin`, `--color-neon-teal`, `--color-emerald`) and body copy.
- Text color in dark section: `--color-text-invert` (white).

### Secondary strip (tagline)
- White background.
- Left: logo mark (small pixelated icon only, not full logo).
- Center: tagline text. The italic word "*we*" uses Libre Baskerville Italic; the rest is Lato Black.
  - EN: *we* will solve your problem and you will pay us
  - ES: *nosotros* resolveremos tu problema y tú nos pagarás
- Right: "Contact us →" — pill CTA, black background, white text, `→` arrow.

### CTAs / Buttons

```
.btn-primary {
  background: var(--color-black);
  color: var(--color-white);
  border: none;
  border-radius: 999px;
  padding: 0.75rem 2rem;
  font-family: var(--font-primary);
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}
.btn-primary:hover {
  background: var(--color-gray-dark);
  transform: translateY(-1px);
}
```

---

## 5. File structure to rework

| File | Action |
|------|--------|
| `index.html` | Add Google Fonts `<link>` tags. Update `<title>` and meta description. |
| `src/index.css` | Declare all CSS custom properties (tokens from sections 2 & 3). Set `font-family: var(--font-primary)` on `:root`. |
| `src/App.css` | Replace existing styles with new component styles following brand rules. |
| `src/App.jsx` | Rework JSX to include: Navbar, Hero section, Tagline strip. Keep bilingual copy object. |

---

## 6. Copy reference (bilingual)

```js
const copy = {
  en: {
    nav: {
      solutions: 'Our Solutions',
      stories: 'Success Stories',
      methodology: 'Our Methodology',
      company: 'Company',
      contact: 'Contact',
    },
    hero: {
      headlineItalic: 'Crack the code –',
      headlineBold: 'your clients will thank you for that.',
      sub: 'To successfully decipher, solve, or understand a complex, mysterious, or previously unsolvable problem. It originates from breaking encrypted messages but now commonly refers to gaining a breakthrough, finding a hidden solution, or discovering the secret formula to success.',
      feature1Title: 'Problem Solving',
      feature1Body: 'It means turning a secret, hidden, or unknown system (like a cipher or secret language) into something understandable.',
      feature2Title: 'Deciphering',
      feature2Body: 'It means turning a secret, hidden, or unknown system (like a cipher or secret language) into something understandable.',
      feature3Title: 'Breakthrough to client app',
      feature3Body: 'It means turning a secret, hidden, or unknown system (like a cipher or secret language) into something understandable.',
    },
    tagline: {
      pre: 'we',
      post: 'will solve your problem and you will pay us',
      paulRand: 'designer Paul Rand when hired by Steve Jobs: It signifies an expert-driven approach where the expert provides a single, high-quality solution, rather than options, and requires trust and payment regardless of whether the client uses it.',
      cta: 'Contact us',
    },
  },
  es: {
    nav: {
      solutions: 'Nuestras soluciones',
      stories: 'Casos de éxito',
      methodology: 'Nuestra metodología',
      company: 'Empresa',
      contact: 'Contacto',
    },
    hero: {
      headlineItalic: 'Descifra el código –',
      headlineBold: 'tus clientes te lo agradecerán.',
      sub: 'Descifrar, resolver o comprender un problema complejo, misterioso o antes irresoluble. Proviene de romper mensajes cifrados, pero hoy se asocia a lograr un avance, encontrar una solución oculta o descubrir la fórmula secreta del éxito.',
      feature1Title: 'Resolución de problemas',
      feature1Body: 'Significa convertir un sistema secreto, oculto o desconocido (como un cifrado o un idioma secreto) en algo comprensible.',
      feature2Title: 'Descifrar',
      feature2Body: 'Significa convertir un sistema secreto, oculto o desconocido (como un cifrado o un idioma secreto) en algo comprensible.',
      feature3Title: 'Avance para la app del cliente',
      feature3Body: 'Significa convertir un sistema secreto, oculto o desconocido (como un cifrado o un idioma secreto) en algo comprensible.',
    },
    tagline: {
      pre: 'nosotros',
      post: 'resolveremos tu problema y tú nos pagarás',
      paulRand: 'diseñador Paul Rand contratado por Steve Jobs: Significa un enfoque dirigido por expertos donde el experto proporciona una solución única y de alta calidad, en lugar de opciones, y requiere confianza y pago independientemente de si el cliente la usa.',
      cta: 'Contáctanos',
    },
  },
}
```

---

## 7. Implementation checklist

- [ ] Add Google Fonts `<link>` to `index.html`
- [ ] Update `<title>` to `The Inner Code` and add meta description
- [ ] Declare all CSS tokens in `src/index.css` `:root`
- [ ] Rework `src/App.jsx` to render: `<Navbar>`, `<HeroSection>`, `<TaglineStrip>`
- [ ] Rework `src/App.css` to implement all brand styles, following sections 2–4
- [ ] Verify bilingual copy renders correctly for both `en` and `es`
- [ ] Test responsive layout at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Replace the old universe background image — the new hero background is solid black

---

## 8. Do NOTs

- ❌ Do NOT use Tailwind, Sass, CSS Modules, or styled-components
- ❌ Do NOT use any font other than **Lato** and **Libre Baskerville**
- ❌ Do NOT change the language-detection logic in `index.html`
- ❌ Do NOT add new npm dependencies without explicit approval
- ❌ Do NOT use `font-weight: 100` (Thin) — minimum is 300 (Light)
- ❌ Do NOT add drop shadows (`box-shadow`) on content blocks
- ❌ Do NOT use colors outside the palette defined in section 3
