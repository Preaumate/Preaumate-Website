import React from "react";

/**
 * SectionTransition
 * Renders a gradient div that smoothly blends one section colour into the next.
 *
 * The previous version used marginTop/marginBottom: -1px which caused a
 * visible sub-pixel artifact (the "band" effect). This version removes those
 * margins and uses a taller default height so the colour change reads as a
 * natural part of the layout rather than a distinct stripe.
 *
 * Usage in HomePage.jsx:
 *   <TrustSection />                          (background: DARK)
 *   <SectionTransition from={DARK} to={LIGHT} />
 *   <CrossoverSection />                      (background: LIGHT)
 *
 * Props:
 *   from   – hex colour of the section ABOVE  (required)
 *   to     – hex colour of the section BELOW  (required)
 *   height – gradient height in px, default 200
 */
const SectionTransition = ({ from, to, height = 200 }) => (
  <div
    aria-hidden="true"
    style={{
      display: "block",
      height: `${height}px`,
      background: `linear-gradient(to bottom, ${from}, ${to})`,
      pointerEvents: "none",
      /* No negative margins — they caused the visible banding artifact. */
    }}
  />
);

export default SectionTransition;