import React from "react";

/**
 * SectionTransition
 * Renders a short gradient div that softly blends the background
 * colour of one section into the next, removing harsh hard edges.
 *
 * Usage in HomePage.jsx:
 *   <TrustSection />
 *   <SectionTransition from="#020818" to="#1e293b" />
 *   <CrossoverSection />
 *   <SectionTransition from="#1e293b" to="#020818" />
 *   <ProblemsSection />
 *   ... and so on
 *
 * Props:
 *   from  – hex colour of the section ABOVE  (required)
 *   to    – hex colour of the section BELOW  (required)
 *   height – gradient height in px, default 64
 *   height – gradient height in px, default 200
 */
const SectionTransition = ({ from, to, height = 200 }) => (
  <div
    aria-hidden="true"
    style={{
        display: "block",
      height: `${height}px`,
      background: `linear-gradient(to bottom, ${from}, ${to})`,
      /* Pull the div 1 px into each neighbour so there is never
         a visible gap or hard line regardless of sub-pixel rendering. */
      //marginTop:  "-1px",
      //marginBottom: "-1px",
      pointerEvents: "none",
    }}
  />
);

export default SectionTransition;