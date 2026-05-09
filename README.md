# PIXELART.CSS

**Professional pixel-art CSS frame styles.**

> `image-rendering: pixelated;`

Build retro pixel-art UIs without writing CSS. A functional atomic CSS library — fully rebranded with authentic NES, Game Boy, CGA, and Synthwave neon aesthetics.

---

## Features

- **Zero border-radius** — hard pixel edges everywhere
- **Pixel-art box-shadow frames** — 7 shadow styles (raised, inset, neon glow, double-border…)
- **Retro color palette** — NES, Game Boy (4-shade), CGA, and Synthwave neons
- **Pixel fonts** — Press Start 2P, VT323, Share Tech Mono, Silkscreen (Google Fonts)
- **Pixel UI components** — windows, buttons, badges, progress bars, tooltips, sprite containers
- **CRT scanline overlay** — `.px-scanline`, `.px-crt`
- **Pixel animations** — blink, shake, bounce, float, spin (all `steps()`-based — no easing)
- **Pixel backgrounds** — grid, checker, starfield
- **Pixel text effects** — hard shadow, neon glow, outline, rainbow gradient
- **Mobile-first**, 8px baseline grid, responsive breakpoints
- Built with PostCSS

---

## Getting Started

### CDN

```html
<link rel="stylesheet" href="https://github.com/blackmoon87/pixelart.css/raw/main/css/pixelart.min.css">
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

| Class | Description |
|-------|-------------|
| `.px-frame` | 3D raised pixel frame |
| `.px-frame-neon` | Synthwave neon glow frame |
| `.px-frame-gb` | Game Boy green frame |
| `.px-frame-inset` | Sunken/pressed frame |
| `.px-window` | Retro OS window with title bar |
| `.px-btn` | 3D pixel button (6 color variants) |
| `.px-badge` | Inline pixel tag/badge |
| `.px-progress` | Retro progress bar |
| `.px-scanline` | CRT scanline overlay |
| `.px-tooltip` | Pixel-art tooltip |
| `.px-sprite` | Sprite container (`pixelated` rendering) |
| `.px-bg-grid` | 8px pixel grid background |
| `.px-bg-checker` | 8px checkerboard background |
| `.px-bg-stars` | Starfield background |
| `.px-blink` | Blinking animation |
| `.px-shake` | Shake-on-hover animation |
| `.px-bounce` | Bounce-on-hover animation |
| `.px-text-shadow-neon` | Neon text glow effect |
| `.px-text-rainbow` | Rainbow gradient text |

---

## Color Palettes

- **NES** — 14 colors faithful to the Nintendo Entertainment System
- **Game Boy** — 5-shade green palette (DMG-01)
- **CGA** — 8 classic PC colors (modes 4 & 5)
- **Synthwave Neons** — pink, cyan, purple, yellow, green, orange

---

## Build

```bash
npm run build        # Build CSS + minified
npm run build:watch  # Watch src/ for changes
npm run mutations    # Check for duplicate class definitions
```

Output: `css/pixelart.css` and `css/pixelart.min.css`

---

## License

MIT © [blackmoon87](https://github.com/blackmoon87)
