# Homepage Cleanup — What Goes Where

## The principle

A homepage has one job: turn a stranger into a lead.
Visitors have four questions. Answer them and stop.

| Question | Section |
|---|---|
| Is this relevant to me? | Hero |
| Can they actually help me? | Services |
| Should I trust these people? | Founders + Endorsements |
| What do I do next? | Contact |

## New homepage — 5 sections only

```
Header
│
├── 1. HeroSection          (who you are, one CTA)
├── 2. ServicesSection      (what you offer — 5 cards)  [LIGHT #1e293b]
│       SectionTransition   LIGHT → DARK
├── 3. FounderSection       (who you are dealing with)  [LIGHT #1e293b]
│       SectionTransition   LIGHT → DARK
├── 4. HowWeWorkSection     (how the process works)     [DARK  #020818]
│       SectionTransition   DARK → LIGHT
├── 5. EndorsementsSection  (what clients say)          [LIGHT #1e293b]
│       SectionTransition   LIGHT → DARK
└── 6. Contact + Footer                                 [DARK  #020818]
```

## About page — the full story

All sections removed from the homepage now live here:

```
Header
│
├── Hero banner
├── Our Story         (existing whoWeAre content)       [LIGHT]
│       SectionTransition
├── CrossoverSection  (OT / IoT / AI pillars)           [DARK]
│       SectionTransition
├── TechnologiesSection (platforms & tools)             [LIGHT wrapper]
│       SectionTransition
├── Industries        (sectors we have worked in)       [DARK]
│       SectionTransition
├── ProjectProofSection (example projects)              [LIGHT wrapper]
│       SectionTransition
├── ServiceAreaSection  (where we work)                 [DARK]
│       SectionTransition
└── CTA + Footer                                        [LIGHT]
```

## Sections removed entirely (not needed on any page)

| Section | Why removed |
|---|---|
| WhyPreaumateSection | Overlaps with Founders and Endorsements — redundant |
| FeaturesBar | The same information is in Services and Founders |
| AbouSection (homepage duplicate) | Moved to About page properly |
| TrustSection | Covered more powerfully by real founder bios |
| ProblemsSection | Implied by Services — adding it creates repetition |

## Files to replace

| File | Action |
|---|---|
| `src/pages/HomePage.jsx` | Replace with new version |
| `src/pages/AboutPage.jsx` | Replace with new version |
| `src/components/ServicesSection.jsx` | Replace with new version |
| `src/components/FounderSection.jsx` | Replace with new version |

## Existing component background colours to verify

These existing components need to match the section they sit in.
Check each one has the correct background:

| Component | Background needed | Why |
|---|---|---|
| HowWeWorkSection | `#020818` DARK | Position 4 on homepage |
| EndorsementsSection | `#1e293b` LIGHT | Position 5 on homepage |
| CrossoverSection | `#1e293b` LIGHT | Position 3 on About page |
| ServiceAreaSection | `#020818` DARK | Position 7 on About page |

If any of these still have `#0f172a` — change that one line
to the correct value from the table above.

## The single most important action right now

Fill in the founders section with real names, bios and photos.
This one change will have more impact on enquiries than
any combination of extra homepage sections.

Open `translations.json` (or `i18n.js`) and replace:
  "[YOUR FULL NAME]"   → your real name
  "[2-3 sentences...]" → your real bio
  "#"                  → your real LinkedIn URL
  ""  (photoUrl)       → "/images/founder1.jpg"

Put your photo in `/public/images/founder1.jpg`.
