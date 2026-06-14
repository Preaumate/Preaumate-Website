import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// ScrollToTop
//
// Runs on every route change.
//
// PREVIOUS BEHAVIOUR (the bug):
//   Always scrolled to the top of the page, ignoring any #hash in the URL.
//   So <Link to="/#contact"> from the About page navigated to "/" but then
//   immediately jumped to the top — the hash was effectively discarded.
//
// NEW BEHAVIOUR:
//   - If the URL has no hash → scroll to top (unchanged default behaviour).
//   - If the URL has a hash (e.g. "#contact") → scroll to that element instead.
//
// WHY THE setTimeout IS NEEDED:
//   When navigating from /about to /#contact, React first has to render
//   HomePage before the #contact element exists in the DOM. If we look for
//   it immediately, it isn't there yet. A short delay lets the new page
//   render first. 50ms is imperceptible to the visitor but enough for React
//   to finish mounting the page.
// ─────────────────────────────────────────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the new page to render, then scroll to the target element.
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          // Match the same -80px header offset used elsewhere on the site
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        } else {
          // Target not found (e.g. typo in the hash) — fall back to top
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
      }, 50);

      return () => clearTimeout(timer);
    }

    // No hash — original behaviour, jump to top instantly
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;