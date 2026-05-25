# SEO Setup — How to Apply

## Files you received

| File | Where it goes in your project |
|---|---|
| `public/robots.txt`           | `public/robots.txt`           |
| `public/sitemap.xml`          | `public/sitemap.xml`          |
| `src/data/seo.js`             | `src/data/seo.js` (replace)   |
| `src/components/SEOHead.jsx`  | `src/components/SEOHead.jsx`  |

---

## Step 1 — Copy the files

Copy each file into the location shown in the table above.

---

## Step 2 — Fill in your real details in seo.js

Open `src/data/seo.js` and update the SITE object at the top:

```js
export const SITE = {
  name:         'Preaumate',
  url:          'https://www.preaumate.nl',
  logo:         'https://www.preaumate.nl/logo.png',  // ← your real logo path
  email:        'contact@preaumate.nl',               // ← your real email
  phone:        '+31612345678',                       // ← your real phone
  kvk:          '12345678',                           // ← your KVK number
  vatNumber:    'NL123456789B01',                     // ← your VAT number
  foundingYear: 2022,                                 // ← real founding year
  linkedIn:     'https://www.linkedin.com/company/preaumate',
};
```

---

## Step 3 — Add SEOHead to your page components

For each page component, add the SEOHead import and drop it in at the top of the return.

### HomePage.jsx
```jsx
import SEOHead from '@/components/SEOHead';
import { seo } from '@/data/seo';

// Inside the return, as the very first element:
<SEOHead
  title={seo.home.title}
  description={seo.home.description}
  path="/"
/>
```

### AboutPage.jsx
```jsx
import SEOHead from '@/components/SEOHead';
import { seo } from '@/data/seo';

<SEOHead
  title={seo.about.title}
  description={seo.about.description}
  path="/about"
/>
```

### ServicePage.jsx (dynamic — reads slug from URL)
This page already uses a slug from the URL. Update it like this:

```jsx
import SEOHead from '@/components/SEOHead';
import { seo } from '@/data/seo';
import { useParams } from 'react-router-dom';

const ServicePage = () => {
  const { slug } = useParams();

  // Look up SEO data for this slug, fall back to generic if not found
  const pageSeo = seo.services[slug] || {
    title:       `${slug.replace(/-/g, ' ')} — Preaumate`,
    description: 'Industrial automation engineering services from Preaumate.',
  };

  return (
    <>
      <SEOHead
        title={pageSeo.title}
        description={pageSeo.description}
        path={`/services/${slug}`}
        jsonLd={pageSeo.jsonLd || null}
        breadcrumbs={pageSeo.breadcrumbs || null}
      />
      {/* rest of your page */}
    </>
  );
};
```

### BlogPage.jsx
```jsx
<SEOHead
  title={seo.blog.title}
  description={seo.blog.description}
  path="/blog"
/>
```

### PrivacyPolicyPage.jsx
```jsx
<SEOHead
  title={seo.privacy.title}
  description={seo.privacy.description}
  path="/privacy-policy"
  noIndex={false}
/>
```

---

## Step 4 — Create an OG image (optional but recommended)

When someone shares your site on LinkedIn or WhatsApp, the preview image
comes from `/og-image.jpg`. Create a 1200×630px image with:
- Your logo
- Your tagline: "Industrial Automation Engineers"
- Dark background matching your site colours

Save it as `public/og-image.jpg`.

---

## Step 5 — Deploy

Push your changes. After the site deploys:

1. Go to **https://search.google.com/search-console**
2. Add your property if you haven't already (add `preaumate.nl`)
3. Go to **Sitemaps** in the left menu
4. Enter `sitemap.xml` and click **Submit**

Google will now find and index all your pages within a few days.

---

## Step 6 — Verify robots.txt and sitemap are live

After deploying, visit these URLs in your browser:
- `https://www.preaumate.nl/robots.txt`
- `https://www.preaumate.nl/sitemap.xml`

Both should show the file contents. If they return a 404, check that the
files are in your `public/` folder (not `src/`).

---

## What happens after this

- Google will discover your sitemap and begin indexing all pages
- Service pages will start appearing in search results for relevant queries
- The JSON-LD structured data may qualify your pages for rich results
  (enhanced listings showing your business details directly in search)
- hreflang tags tell Google which language version to show to which visitor

Realistic timeline: 2–4 weeks for most pages to appear in Google results.
New pages can take longer; pages with real content and inbound links rank faster.

---

## One important note on hreflang

Your current language switching uses query parameters (`?lang=nl`).
This works but path-based routing (`/nl/`, `/es/`) ranks slightly better
because it creates truly separate URLs that Google indexes independently.
This is a future improvement — the current setup is functional and correct.
