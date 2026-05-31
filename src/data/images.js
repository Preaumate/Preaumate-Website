// ============================================================
// src/data/images.js  —  Centralised Image Registry
// ============================================================
// All images used across the site are defined here.
// Change a path once → updates everywhere automatically.
//
// HOW TO ADD YOUR OWN PHOTOS:
//   1. Put the image file in /public/images/
//   2. Update the path below from '' to '/images/your-file.jpg'
//   3. Save — the site picks it up immediately
// ============================================================

export const images = {

  // ── FOUNDERS ─────────────────────────────────────────────
  // Used in FounderSection on the homepage and CurriculumPage.
  // Recommended: square crop, 400×400px minimum, professional.
  // Place files in /public/images/founders/
  founders: {
    theo: '/images/team/theo-profile.jpg', // ← set to '/images/founders/theo-rietveld.jpg'
    coFounder: '',                         // ← set to '/images/founders/founder2.jpg'
  },

  // ── CURRICULUM PAGE ───────────────────────────────────────
  // Professional photo shown on Theo's CV page.
  // Can be the same as founders.theo or a different shot.
  // Recommended: portrait orientation, 600×800px, neutral background.
  curriculum: {
    theo: '/Images/Team/theo-profile.jpg',                  // ← set to '/images/curriculum/theo-rietveld-cv.jpg'
  },

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    background: 'https://images.unsplash.com/photo-1582533632670-55d43ff95331?w=1920&q=80',
  },

  // ── ABOUT PAGE ───────────────────────────────────────────
  about: {
    // team: '/images/team-photo.jpg',
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
  og: {
    default: '/images/og-image.jpg',
  },
  // ── FAVICON ──────────────────────────────────────────────
  // See Step 5 for favicon setup — managed via index.html not here
};

// ── HELPER: Get image with fallback ──────────────────────────────────────────
// Usage: getImage(images.hero.background, '/images/fallback.jpg')
// Returns fallback if the primary image is undefined or empty string
// ─────────────────────────────────────────────────────────────────────────────
export const getImage = (primary, fallback = '') => primary || fallback;