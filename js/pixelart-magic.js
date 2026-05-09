/**
 * PIXELART.CSS — Magic Script v1.1
 *
 * Automatically transforms standard HTML elements into pixel-art styled
 * components. Works on any site, any framework, including SPAs.
 *
 * Usage:
 *   1. Auto (zero-code):  <script src="pixelart-magic.js"></script>
 *   2. Scoped:            <div data-pixelart="true">...</div>
 *   3. Programmatic:      PixelArtMagic.apply(element)
 *
 * github.com/blackmoon87/pixelart.css
 */

(function () {
  'use strict';

  /* ── Element-to-class mapping table ─────────────────────────── */

  var MAPPINGS = [
    { s: 'button:not([class*="px-btn"]), input[type="submit"]:not([class*="px-btn"]), input[type="button"]:not([class*="px-btn"])', c: ['px-btn', 'px-btn-primary', 'px-press'] },
    { s: 'progress:not([class*="px-progress"])',                                                                                     c: ['px-progress'] },
    { s: 'h1:not([class*="px-text"]), h2:not([class*="px-text"]), h3:not([class*="px-text"])',                                       c: ['px-text-shadow'] },
    { s: 'hr:not([class*="px-divider"])',                                                                                            c: ['px-divider'] },
    { s: 'table:not([class*="px-border"])',                                                                                          c: ['px-border'] },
    { s: 'input[type="text"]:not([class*="px-"]), input[type="password"]:not([class*="px-"]), input[type="email"]:not([class*="px-"]), input[type="search"]:not([class*="px-"]), input[type="number"]:not([class*="px-"]), textarea:not([class*="px-"])', c: ['px-input'] },
    { s: 'select:not([class*="px-select"])',                                                                                         c: ['px-select'] },
    { s: 'input[type="checkbox"]:not([class*="px-checkbox"])',                                                                       c: ['px-checkbox'] },
    { s: 'input[type="radio"]:not([class*="px-radio"])',                                                                             c: ['px-radio'] },
    { s: 'a:not([class*="px-link"]):not([class*="px-btn"])',                                                                         c: ['px-link'] },
    { s: 'ul:not([class*="px-list"]), ol:not([class*="px-list"])',                                                                    c: ['px-list'] },
    { s: 'blockquote:not([class*="px-blockquote"])',                                                                                  c: ['px-blockquote'] },
    { s: 'kbd:not([class*="px-kbd"])',                                                                                               c: ['px-kbd'] },
    { s: 'dialog:not([class*="px-modal"])',                                                                                          c: ['px-modal'] },
    { s: 'img:not([class*="px-render"]):not([class*="px-sprite"])',                                                                   c: ['px-render'] },
    { s: '.card:not([class*="px-card"])',                                                                                             c: ['px-card'] },
    { s: '.window:not([class*="px-window"])',                                                                                         c: ['px-window'] }
  ];

  /* ── Inline style overrides (beats any stylesheet, even !important) ── */

  var FORCE = {
    'px-btn': {
      'border-radius': '0',
      'border':        '2px solid #111',
      'font-family':   "'Press Start 2P', monospace",
      'font-size':     '8px',
      'box-shadow':    'inset 2px 2px 0 0 rgba(255,255,255,.5), inset -2px -2px 0 0 rgba(0,0,0,.5), 4px 4px 0 0 #111',
      'cursor':        'pointer',
      'image-rendering': 'pixelated',
      'padding':       '8px 16px',
      'text-decoration': 'none',
      'line-height':   '1'
    },
    'px-input': {
      'border-radius': '0',
      'border':        '4px solid #111',
      'font-family':   "'Share Tech Mono', monospace",
      'box-shadow':    'inset 4px 4px 0 0 #000',
      'outline':       'none'
    },
    'px-select': {
      'border-radius': '0',
      'border':        '4px solid #111',
      'font-family':   "'Press Start 2P', monospace",
      'box-shadow':    'inset 2px 2px 0 0 rgba(255,255,255,.3), inset -2px -2px 0 0 rgba(0,0,0,.3)'
    },
    'px-checkbox': { 'border-radius': '0', 'border': '3px solid #111', 'box-shadow': 'inset 2px 2px 0 0 #000' },
    'px-radio':    { 'border-radius': '0', 'border': '3px solid #111', 'box-shadow': 'inset 2px 2px 0 0 #000' },
    'px-render':   { 'image-rendering': 'pixelated' }
  };

  /* ── Helper: apply forced inline styles ─────────────────────── */

  function forceStyle(el, primaryClass) {
    var styles = FORCE[primaryClass];
    if (!styles) return;
    for (var prop in styles) {
      if (styles.hasOwnProperty(prop)) {
        el.style.setProperty(prop, styles[prop], 'important');
      }
    }
  }

  /* ── Public API ─────────────────────────────────────────────── */

  window.PixelArtMagic = {

    /**
     * Transform all matching elements inside a container.
     * Safe to call multiple times — already-converted elements are skipped
     * thanks to the :not([class*="px-"]) selectors.
     */
    apply: function (container) {
      if (!container) return;

      try {
        container.style.imageRendering = 'pixelated';
        var total = 0;
        var details = {};

        MAPPINGS.forEach(function (m) {
          var els = container.querySelectorAll(m.s);
          if (els.length) {
            details[m.c[0]] = els.length;
            els.forEach(function (el) {
              el.classList.add.apply(el.classList, m.c);
              forceStyle(el, m.c[0]);
              total++;
            });
          }
        });

        if (total) {
          console.log('[PixelArt CSS] 🪄 Converted ' + total + ' elements.', details);
        }
      } catch (err) {
        console.error('[PixelArt CSS] ❌ Error:', err);
      }
    },

    /**
     * Watch for dynamically-added elements (SPAs, lazy-loaded content).
     * Uses a debounced MutationObserver.
     */
    observe: function (container) {
      if (!window.MutationObserver) return;

      var timer;
      var observer = new MutationObserver(function (mutations) {
        var dominated = false;
        for (var i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length) { dominated = true; break; }
        }
        if (dominated) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            window.PixelArtMagic.apply(container);
          }, 150);
        }
      });

      observer.observe(container, { childList: true, subtree: true });
    },

    /**
     * Initialise: find containers, apply styles, start observer.
     */
    init: function () {
      var containers = document.querySelectorAll('[data-pixelart="true"]');

      if (!containers.length) {
        if (document.body && document.body.getAttribute('data-pixelart') !== 'false') {
          containers = [document.body];
        } else {
          return;
        }
      }

      console.log('[PixelArt CSS] 🪄 Magic activated.');
      containers.forEach(function (c) {
        window.PixelArtMagic.apply(c);
        window.PixelArtMagic.observe(c);
      });
    }
  };

  /* ── Auto-init ──────────────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', window.PixelArtMagic.init);

})();
