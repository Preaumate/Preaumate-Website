// ============================================================
// CENTRALISED IMAGE REGISTRY
// ============================================================
// All images used across the site are defined here.
//
// HOW TO USE:
//   import { images } from '@/data/images';
//   <img src={images.hero.background} alt="..." />
//
// HOW TO UPDATE AN IMAGE:
//   Change the URL or path here — updates everywhere automatically.
//
// IMAGE PATH OPTIONS:
//   External URL:  'https://images.unsplash.com/photo-...'
//   Local file:    '/images/my-photo.jpg'
//                  (place file in /public/images/my-photo.jpg)
//   Imported file: import heroImg from '@/assets/hero-bg.jpg'
//                  (place file in /src/assets/hero-bg.jpg)
//
// RECOMMENDED: Use /public/images/ for photos you will update often.
// It is the easiest — just drop a file in and reference by name.
// ============================================================

export const images = {

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    // Full-screen background image behind the hero section
    // Recommended: 1920×1080px minimum, factory/industrial theme
    // Replace URL with '/images/hero-bg.jpg' once you have your own photo
    background: 'https://images.unsplash.com/photo-1582533632670-55d43ff95331?w=1920&q=80',
  },

  // ── ABOUT PAGE ───────────────────────────────────────────
  about: {
    // Team photo — shown on the About page if you add one
    // Recommended: 800×600px, natural working environment
    // team: '/images/team-photo.jpg',  // ← uncomment when you have a photo
  },

  // ── SERVICE PAGES ─────────────────────────────────────────
  services: {
    robotics: {
      main:      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    },
    assembly: {
      main:      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80',
    },
    materialHandling: {
      main:      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    },
    qualityControl: {
      main:      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    },
  },

  // ── SOLUTION PAGES ────────────────────────────────────────
  solutions: {
    plcProgramming: {
      main:      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    },
    hmiScada: {
      main:      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    systemModernisation: {
      main:      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    },
    industrialCybersecurity: {
      main:      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    },
    engineeringConsulting: {
      main:      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    },
    customSolutions: {
      main:      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
      secondary: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
  },

  // ── OPEN GRAPH / SOCIAL SHARING ───────────────────────────
  // This image appears when your site is shared on LinkedIn, WhatsApp etc.
  // Recommended: exactly 1200×630px, with your logo and a clear background
  // Place the file at /public/images/og-image.jpg
  og: {
    default: '/images/og-image.jpg',  // ← create this file
  },

  // ── FAVICON ──────────────────────────────────────────────
  // See Step 5 for favicon setup — managed via index.html not here
};

// ── HELPER: Get image with fallback ──────────────────────────────────────────
// Usage: getImage(images.hero.background, '/images/fallback.jpg')
// Returns fallback if the primary image is undefined or empty string
// ─────────────────────────────────────────────────────────────────────────────
export const getImage = (primary, fallback = '') => primary || fallback;