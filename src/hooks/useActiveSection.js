// HOW IT WORKS (compared to PLC logic):
//   Think of each section as a proximity sensor.
//   When a section enters the "detection zone" (viewport),
//   it sends a signal: "I am active."
//   This hook wires up all those sensors and returns the
//   id of whichever sensor is currently firing.
//
// USAGE:
//   const activeSection = useActiveSection(['hero','experience','skills']);
//   // activeSection === 'experience' when that part is on screen
//
// The hook also updates the URL hash automatically, so the
// browser address bar always reflects the current section.
// This makes the URL shareable at any scroll depth.
// ============================================================

import { useState, useEffect, useRef } from 'react';

const useActiveSection = (sectionIds = [], options = {}) => {
  const {
    rootMargin  = '-20% 0px -60% 0px', // trigger when section is ~20% into view
    updateHash  = true,                 // write #sectionId to the URL bar
    initialHash = true,                 // scroll to hash on page load if present
  } = options;

  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const observerRef = useRef(null);

  // ── On mount: scroll to hash if URL already has one ──────────────────────
  useEffect(() => {
    if (!initialHash) return;
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionIds.includes(hash)) {
      // Small delay so the page has time to render before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection(hash);
        }
      }, 150);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── IntersectionObserver: watch all sections ──────────────────────────────
  useEffect(() => {
    // IntersectionObserver is like a hardware interrupt in a PLC —
    // it fires a callback whenever a watched element crosses a threshold,
    // instead of polling every cycle asking "is this on screen yet?"
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry that is currently intersecting
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;

        const id = visible.target.id;
        setActiveSection(id);

        // Update the URL hash without adding to browser history
        // replaceState = update bar silently, no back-button entry created
        if (updateHash && id) {
          window.history.replaceState(null, '', `#${id}`);
        }
      },
      { rootMargin }
    );

    // Attach observer to every section element
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    // Cleanup: detach all observers when component unmounts
    // (PLC analogy: deenergise all sensors when the FB instance is deleted)
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [sectionIds.join(','), rootMargin, updateHash]); // eslint-disable-line react-hooks/exhaustive-deps

  return activeSection;
};

export default useActiveSection;