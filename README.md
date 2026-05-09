# PIXELART.CSS

**Professional pixel-art CSS framework with zero-code magic.**

> `image-rendering: pixelated;`

[![npm](https://img.shields.io/npm/v/@blue87moon/pixelart-css?color=ff2d78&label=npm&style=flat-square)](https://www.npmjs.com/package/@blue87moon/pixelart-css)
[![License: MIT](https://img.shields.io/badge/license-MIT-00f5ff?style=flat-square)](./license)
[![GitHub Pages](https://img.shields.io/badge/demo-live-39ff14?style=flat-square)](https://blackmoon87.github.io/pixelart.css/)

---

## 🕹️ Live Demo

| Page | Link |
|------|------|
| **Showcase** | [blackmoon87.github.io/pixelart.css](https://blackmoon87.github.io/pixelart.css/) |
| **Usage Guide** | [blackmoon87.github.io/pixelart.css/usage.html](https://blackmoon87.github.io/pixelart.css/usage.html) |

---

## Features

- **Zero border-radius** — hard pixel edges everywhere
- **Pixel-art box-shadow frames** — 7 shadow styles (raised, inset, neon glow, double-border…)
- **Retro color palettes** — NES, Game Boy (4-shade), CGA, and Synthwave neons
- **Pixel fonts** — Press Start 2P, VT323, Share Tech Mono, Silkscreen (Google Fonts)
- **17 UI component categories** — frames, windows, buttons, badges, cards, tabs, modals, alerts, forms, tooltips, and more
- **CRT scanline overlay** — `.px-scanline`, `.px-crt`
- **Pixel animations** — blink, shake, bounce, float, spin (all `steps()`-based — no easing)
- **Pixel backgrounds** — grid, checker, starfield
- **Pixel text effects** — hard shadow, neon glow, outline, rainbow gradient
- **3 built-in themes** — Dark (default), Light (Retro Beige), Game Boy (Classic Green)
- **Magic Mode** — auto-transform any site with one `<script>` tag (SPA-compatible via MutationObserver)
- **Framework-proof** — overrides Tailwind, Bootstrap, and any CSS framework via inline `!important`
- **Mobile-first**, 8px baseline grid, responsive breakpoints
- Built with PostCSS

---

## Getting Started

### CDN (Recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/blackmoon87/pixelart.css@main/css/pixelart.min.css">
```

### npm

```bash
npm install @blue87moon/pixelart-css
```

```html
<link rel="stylesheet" href="/node_modules/@blue87moon/pixelart-css/css/pixelart.min.css">
```

### Local Setup

```bash
git clone https://github.com/blackmoon87/pixelart.css
cd pixelart.css
npm install
npm run build
```

---

## Components

### Layout & Frames

| Class | Description |
|-------|-------------|
| `.px-frame` | 3D raised pixel frame |
| `.px-frame-neon` | Synthwave neon glow frame |
| `.px-frame-gb` | Game Boy green frame |
| `.px-frame-inset` | Sunken/pressed frame |
| `.px-window` | Retro OS window with title bar |
| `.px-card` | Content card with header/body/footer |
| `.px-card-neon` | Neon-styled card variant |
| `.px-card-gb` | Game Boy card variant |

### Interactive

| Class | Description |
|-------|-------------|
| `.px-btn` | 3D pixel button |
| `.px-btn-primary` `.px-btn-success` `.px-btn-danger` `.px-btn-warning` `.px-btn-neon` | Button color variants |
| `.px-press` | 3D press-down effect on click |
| `.px-tabs` / `.px-tab` | Tabbed navigation |
| `.px-modal` | Modal dialog (native `<dialog>` support) |
| `.px-alert` | Notification alert |
| `.px-alert-success` `.px-alert-danger` `.px-alert-warning` | Alert color variants |
| `.px-tooltip` | Pixel-art tooltip |

### Forms

| Class | Description |
|-------|-------------|
| `.px-input` | Text input / textarea |
| `.px-select` | Dropdown select |
| `.px-checkbox` | Custom pixel checkbox |
| `.px-radio` | Custom pixel radio button |

### Typography & Text

| Class | Description |
|-------|-------------|
| `.px-text-shadow` | Hard pixel text shadow |
| `.px-text-shadow-neon` | Neon text glow |
| `.px-text-rainbow` | Rainbow gradient text |
| `.px-link` | Pixel-styled hyperlink |
| `.px-blockquote` | Pixel-art blockquote |
| `.px-kbd` | Keyboard key indicator |
| `.px-badge` | Inline pixel tag/badge |

### Borders

| Class | Description |
|-------|-------------|
| `.px-border` | Standard pixel border |
| `.px-border-neon` `.px-border-pink` `.px-border-gold` `.px-border-green` | Colored borders |
| `.px-border-double` `.px-border-double-neon` | Double-line borders |
| `.px-border-dashed` `.px-border-dashed-neon` | Dashed borders |

### Effects & Overlays

| Class | Description |
|-------|-------------|
| `.px-scanline` | CRT scanline overlay |
| `.px-progress` | Retro progress bar |
| `.px-sprite` | Sprite container (`pixelated` rendering) |
| `.px-render` | Force `image-rendering: pixelated` |
| `.px-bg-grid` | 8px pixel grid background |
| `.px-bg-checker` | 8px checkerboard background |
| `.px-bg-stars` | Starfield background |

### Animations

| Class | Description |
|-------|-------------|
| `.px-blink` | Blinking (steps-based) |
| `.px-shake` | Shake on hover |
| `.px-bounce` | Bounce on hover |
| `.px-float` | Floating animation |
| `.px-spin` | Spinning animation |

---

## Color Palettes

- **NES** — 14 colors faithful to the Nintendo Entertainment System
- **Game Boy** — 4-shade green palette (DMG-01)
- **CGA** — 8 classic PC colors (modes 4 & 5)
- **Synthwave Neons** — pink, cyan, purple, yellow, green, orange

---

## 🪄 Magic Mode (Zero-Code)

Transform any website into pixel-art with a single `<script>` tag. No classes needed.

```html
<body>
  <button>Click Me</button>
  <input type="text" placeholder="Type...">
  <progress value="50" max="100"></progress>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/blackmoon87/pixelart.css@main/css/pixelart.min.css">
  <script src="https://cdn.jsdelivr.net/gh/blackmoon87/pixelart.css@main/js/pixelart-magic.js"></script>
</body>
```

### Usage Modes

| Mode | How | Description |
|------|-----|-------------|
| **Auto (full page)** | Just include the `<script>` | Transforms entire `<body>` |
| **Scoped** | `<div data-pixelart="true">` | Only transforms elements inside that container |
| **Opt-out** | `<body data-pixelart="false">` | Prevents auto-transformation |
| **Programmatic** | `PixelArtMagic.apply(element)` | Call from your own JS code |

### SPA Support

The Magic Script includes a built-in `MutationObserver` that automatically detects and transforms dynamically-injected elements (React, Vue, Angular, etc.).

### Console Injection (for testing on any site)

```javascript
(function() {
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/gh/blackmoon87/pixelart.css@main/css/pixelart.min.css';
  document.head.appendChild(css);

  var js = document.createElement('script');
  js.src = 'https://cdn.jsdelivr.net/gh/blackmoon87/pixelart.css@main/js/pixelart-magic.js';
  js.onload = function() { PixelArtMagic.init(); };
  document.body.appendChild(js);
})();
```

---

## 🎨 Theming & Customization

### Built-in Themes

```html
<!-- Dark (default) — no attribute needed -->
<html>

<!-- Light (Retro IBM Beige) -->
<html data-theme="light">

<!-- Game Boy (Classic 4-color Green) -->
<html data-theme="gameboy">
```

### Custom Color Override

Override CSS variables in your own stylesheet to create any theme:

```css
:root {
  --px-frame-shadow: #111111;
  --px-frame-mid:    #333333;
  --px-neon-cyan:    #ff00ff;
  --px-neon-pink:    #00ffff;
}
```

---

## Build

```bash
npm run build        # Build CSS + minified
npm run build:watch  # Watch src/ for changes
npm run mutations    # Check for duplicate class definitions
```

Output: `css/pixelart.css` and `css/pixelart.min.css`

---

## Support

If you find this useful, consider buying me a coffee ☕

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/black.moon)

---

## License

MIT © [pixelart-css](https://github.com/blackmoon87/pixelart.css)
