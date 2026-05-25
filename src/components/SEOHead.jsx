import React from 'react';
import { Helmet } from 'react-helmet';
import { getOrganizationSchema, SITE } from '@/data/seo';

// =============================================================================
// SEOHead.jsx — Reusable SEO component
// =============================================================================
//
// WHAT THIS DOES
// ──────────────
// Drop this component at the top of any page to set:
//   • Page title (the blue link text in Google results)
//   • Meta description (the grey text under the link)
//   • Open Graph tags (how the page looks when shared on LinkedIn, WhatsApp)
//   • JSON-LD structured data (tells Google what your business is)
//   • hreflang tags (tells Google which language version to show to which visitor)
//   • Canonical URL (prevents duplicate content penalty when pages have
//     similar URLs like /?lang=en and /?lang=nl)
//
// USAGE — minimal (most pages):
// ──────────────────────────────
//   import SEOHead from '@/components/SEOHead';
//   import { seo } from '@/data/seo';
//
//   // Inside your component:
//   <SEOHead
//     title={seo.home.title}
//     description={seo.home.description}
//   />
//
// USAGE — service page with JSON-LD and breadcrumbs:
// ────────────────────────────────────────────────────
//   <SEOHead
//     title={seo.services['plc-programming'].title}
//     description={seo.services['plc-programming'].description}
//     path="/services/plc-programming"
//     jsonLd={seo.services['plc-programming'].jsonLd}
//     breadcrumbs={seo.services['plc-programming'].breadcrumbs}
//   />
//
// PROPS
// ──────
//   title        string   Required. Page title shown in Google and browser tab.
//   description  string   Required. Meta description shown in Google results.
//   path         string   Optional. The URL path, e.g. "/services/plc-programming"
//                         Defaults to "/" if not provided.
//   jsonLd       object   Optional. Extra JSON-LD for service pages.
//   breadcrumbs  object   Optional. Breadcrumb JSON-LD schema.
//   noIndex      bool     Optional. Set true to hide a page from Google entirely.
//   ogImage      string   Optional. Custom image URL for social sharing.
// =============================================================================

const SEOHead = ({
  title,
  description,
  path = '/',
  jsonLd = null,
  breadcrumbs = null,
  noIndex = false,
  ogImage = null,
}) => {
  const canonicalUrl = `${SITE.url}${path}`;

  // The image shown when your page is shared on LinkedIn, WhatsApp etc.
  // Replace /og-image.jpg with a real image (1200×630px recommended).
  const ogImageUrl = ogImage || `${SITE.url}/og-image.jpg`;

  // hreflang — tells Google which language version to show to which visitor.
  // Your site uses query params (?lang=nl) for language switching.
  const hreflangLinks = [
    { lang: 'en',        url: `${SITE.url}${path}?lang=en`  },
    { lang: 'nl',        url: `${SITE.url}${path}?lang=nl`  },
    { lang: 'es',        url: `${SITE.url}${path}?lang=es`  },
    { lang: 'de',        url: `${SITE.url}${path}?lang=de`  },
    { lang: 'fr',        url: `${SITE.url}${path}?lang=fr`  },
    { lang: 'pt',        url: `${SITE.url}${path}?lang=pt`  },
    // x-default = shown when no language matches the visitor's language
    { lang: 'x-default', url: `${SITE.url}${path}` },
  ];

  // Build the list of JSON-LD schemas for this page.
  // Organisation schema is on every page.
  // Service schema and breadcrumbs are added when provided.
  const schemas = [getOrganizationSchema()];
  if (jsonLd)       schemas.push(jsonLd);
  if (breadcrumbs)  schemas.push(breadcrumbs);

  return (
    <Helmet>
      {/* ── Core ────────────────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Tell Google not to index this page if noIndex is true */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Canonical URL ───────────────────────────────────────── */}
      {/* Prevents duplicate content penalty — tells Google which
          URL is the "real" one when the same page has multiple URLs */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ── hreflang — multilingual signal to Google ────────────── */}
      {hreflangLinks.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hreflang={lang} href={url} />
      ))}

      {/* ── Open Graph — controls how page looks on LinkedIn etc ── */}
      <meta property="og:type"        content="website"      />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:title"       content={title}        />
      <meta property="og:description" content={description}  />
      <meta property="og:image"       content={ogImageUrl}   />
      <meta property="og:site_name"   content={SITE.name}    />
      <meta property="og:locale"      content="en_GB"        />

      {/* ── Twitter / X card ────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title}               />
      <meta name="twitter:description" content={description}         />
      <meta name="twitter:image"       content={ogImageUrl}          />

      {/* ── JSON-LD structured data ──────────────────────────────── */}
      {/* This is invisible to visitors but Google reads it to
          understand your business and create enhanced search listings */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema, null, 2)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
