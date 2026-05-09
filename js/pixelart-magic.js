/**
 * PIXELART.CSS — Magic Integration Script
 * 
 * Automatically applies pixelart-css classes to standard HTML elements
 * when the body or a container has the `data-pixelart="true"` attribute.
 * Zero-code required for site owners!
 */

(function() {
  
  const mappings = [
    // Buttons -> .px-btn .px-btn-primary .px-press
    {
      selector: 'button:not([class*="px-btn"]), input[type="submit"]:not([class*="px-btn"]), input[type="button"]:not([class*="px-btn"])',
      classes: ['px-btn', 'px-btn-primary', 'px-press']
    },
    // Progress bars -> .px-progress
    {
      selector: 'progress:not([class*="px-progress"])',
      classes: ['px-progress']
    },
    // Headings -> .px-text-shadow
    {
      selector: 'h1:not([class*="px-text"]), h2:not([class*="px-text"]), h3:not([class*="px-text"])',
      classes: ['px-text-shadow']
    },
    // HR -> .px-divider
    {
      selector: 'hr:not([class*="px-divider"])',
      classes: ['px-divider']
    },
    // Tables -> .px-border
    {
      selector: 'table:not([class*="px-border"])',
      classes: ['px-border']
    },
    // Inputs -> .px-input
    {
      selector: 'input[type="text"]:not([class*="px-"]), input[type="password"]:not([class*="px-"]), input[type="email"]:not([class*="px-"]), textarea:not([class*="px-"])',
      classes: ['px-input']
    },
    // Select -> .px-select
    {
      selector: 'select:not([class*="px-select"])',
      classes: ['px-select']
    },
    // Checkbox -> .px-checkbox
    {
      selector: 'input[type="checkbox"]:not([class*="px-checkbox"])',
      classes: ['px-checkbox']
    },
    // Radio -> .px-radio
    {
      selector: 'input[type="radio"]:not([class*="px-radio"])',
      classes: ['px-radio']
    },
    // Links -> .px-link
    {
      selector: 'a:not([class*="px-link"]):not([class*="px-btn"])',
      classes: ['px-link']
    },
    // Lists -> .px-list
    {
      selector: 'ul:not([class*="px-list"]), ol:not([class*="px-list"])',
      classes: ['px-list']
    },
    // Blockquotes -> .px-blockquote
    {
      selector: 'blockquote:not([class*="px-blockquote"])',
      classes: ['px-blockquote']
    },
    // KBD -> .px-kbd
    {
      selector: 'kbd:not([class*="px-kbd"])',
      classes: ['px-kbd']
    },
    // Dialog -> .px-modal
    {
      selector: 'dialog:not([class*="px-modal"])',
      classes: ['px-modal']
    },
    // Images -> .px-render
    {
      selector: 'img:not([class*="px-render"]):not([class*="px-sprite"])',
      classes: ['px-render']
    },
    // "card" class -> .px-card
    {
      selector: '.card:not([class*="px-card"])',
      classes: ['px-card']
    },
    // "window" class -> .px-window
    {
      selector: '.window:not([class*="px-window"])',
      classes: ['px-window']
    }
  ];

  window.PixelArtMagic = {
    apply: function(container) {
      if (!container) return;
      
      try {
        container.style.imageRendering = 'pixelated';
        let totalConverted = 0;
        let convertedDetails = {};
        
        mappings.forEach(mapping => {
          const elements = container.querySelectorAll(mapping.selector);
          if (elements.length > 0) {
            convertedDetails[mapping.classes.join('.')] = elements.length;
            elements.forEach(el => {
              // Strip potentially interfering inline styles from standard elements
              if (el.tagName === 'BUTTON' || el.tagName === 'INPUT') {
                el.style.borderRadius = '';
                el.style.border = '';
                el.style.background = '';
              }
              el.classList.add(...mapping.classes);
              totalConverted++;
            });
          }
        });
        
        if (totalConverted > 0) {
          console.log(`[PixelArt CSS] 🪄 Magic applied. Converted ${totalConverted} items.`, convertedDetails);
        } else {
          console.warn(`[PixelArt CSS] ⚠️ Magic ran, but 0 items were converted. (Are elements loaded dynamically later?)`);
        }
        
      } catch (error) {
        console.error(`[PixelArt CSS] ❌ ERROR during Magic transformation:`, error);
      }
    },
    
    init: function() {
      let magicContainers = document.querySelectorAll('[data-pixelart="true"]');
      
      // If no specific containers are marked, assume the user wants it globally on the body
      // (because they included the magic script!).
      if (magicContainers.length === 0) {
        if (document.body && document.body.getAttribute('data-pixelart') !== 'false') {
          magicContainers = [document.body];
        } else {
          return;
        }
      }
      
      console.log('[PixelArt CSS] 🪄 Magic mode activated. Transforming elements...');
      magicContainers.forEach(container => window.PixelArtMagic.apply(container));
    }
  };

  document.addEventListener('DOMContentLoaded', window.PixelArtMagic.init);

})();
