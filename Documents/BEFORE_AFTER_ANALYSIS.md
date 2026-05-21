# Rebuild Strategy Implementation: Before & After Analysis

**Date**: May 17, 2026  
**Purpose**: Visual comparison of changes needed to implement Rebuild_strategy.md recommendations

---

## SUMMARY OF CHANGES

### High-Impact Areas (Must Implement)
1. ✅ **Hero Section** - New headline, reduce animations, add trust indicators
2. ✅ **Services Section** - Rewrite descriptions, change language
3. ✅ **Trust Section** - NEW component with founder credibility
4. ✅ **Technologies Section** - NEW platform grid component
5. ✅ **Projects/Proof Section** - NEW example projects component
6. ✅ **Founder Section** - NEW component highlighting team expertise
7. ✅ **Motion/Animations** - Reduce excessive effects site-wide
8. ✅ **Contact Form Security** - Add Cloudflare Turnstile instead of exposed EmailJS

### Medium-Impact Areas
- Industries section (likely exists, needs review)
- Process/How We Work section (likely exists, needs review)
- Final CTA section (likely exists, needs update)
- Footer SEO expansion

### Low-Priority Areas (Future)
- SEO page structure (/plc-programming, /scada-development, etc.)
- Blog strategy
- LinkedIn integration
- Case studies

---

## 1. HERO SECTION

### BEFORE (Current)

```jsx
// Current: Generic animated hero with rotating shapes
- Uses animated rotating squares
- Long animation delays (3.5-4.5s)
- Generic gradient background
- Logo animation is complex
- Minimal trust indicators
```

**Current Problems:**
- Takes too long to show content (delays 3.5-4.5s)
- Spinning animations feel "startup-like" not "industrial"
- No clear trust indicators visible immediately
- Doesn't communicate expertise or experience level

---

### AFTER (Strategy Implementation)

```jsx
// NEW: Direct, confident messaging about industrial expertise
- Remove animated logo delay
- Remove spinning shape animations
- Fast content reveal (<1s total)
- Add explicit trust indicators (30+ years, platforms, regions)
- Clear CTAs: "Talk to an Engineer" + "View Our Services"
- Subtle industrial aesthetic (mesh overlay, not animations)
```

**Key Changes:**

| Aspect | Before | After |
|--------|--------|-------|
| **Headline** | (from translation) | "Industrial Automation Experts Connecting Factory Floor, IoT and AI" |
| **Subheadline** | (from translation) | "Preaumate helps manufacturers modernize industrial systems through PLC programming, robotics, SCADA, industrial IoT and AI-driven automation." |
| **Trust Info** | Hidden | Visible: "30+ years combined experience", "Europe & Latin America support", platforms |
| **Animation Delay** | 3.5-4.5s | <200ms |
| **Background Effects** | Rotating shapes | Subtle mesh/grid overlay |
| **Button Text** | (from translation) | "Talk to an Engineer" (primary), "View Our Services" (secondary) |

---

## 2. SERVICES SECTION

### BEFORE (Current)

```jsx
// Current Service Descriptions (from translations)
const cardConfig = [
  {
    icon: Bot,
    // Description likely includes buzzwords:
    // "innovative", "cutting-edge", "intelligent", etc.
  },
  // ... 4 cards
];
```

**Current Problems:**
- Likely uses generic/buzzword language
- Doesn't communicate specific technical capabilities
- Doesn't position as "practical" and "operational"

---

### AFTER (Strategy Implementation)

**Services Rewrite:**

| Service | OLD Language | NEW Language |
|---------|--------------|--------------|
| **PLC Programming** | (Current) | "We develop, modify and troubleshoot PLC systems for industrial production environments. Supported: Siemens, Rockwell, CoDeSys" |
| **SCADA & HMI** | (Current) | "We build operator interfaces and SCADA systems that improve visibility, diagnostics and production monitoring" |
| **Industrial IoT** | (Current) | "We connect machines, PLCs and industrial equipment to modern data systems using secure industrial communication methods" |
| **Robotics** | (Current) | "We integrate robotic systems into production environments with focus on reliability, safety and maintainability" |
| **Industrial AI** | (Current) | "We help manufacturers identify practical AI opportunities using production data, machine diagnostics and operational insights" |

**Specific Bullets (Examples):**

**PLC Programming:**
- PLC migrations
- Machine commissioning
- Process optimization
- Troubleshooting support
- Remote diagnostics

**SCADA & HMI:**
- Alarm handling
- Production dashboards
- Historian integration
- Remote monitoring
- Operator workflow optimization

---

## 3. TRUST SECTION (NEW COMPONENT)

### BEFORE
```
No dedicated trust/credibility section focused on founder expertise
```

### AFTER
```jsx
// NEW: "Built by Engineers With Real Factory Experience"

Section Structure:
1. Section title: "Built by Engineers With Real Factory Experience"
2. Intro copy: 3-4 sentences about founder experience
3. Four Trust Cards:
   - Factory-floor experience
   - Cross-border engineering
   - Modernization focused
   - Practical implementation
4. Founder Cards Section (see below)
```

**Implementation Priority: CRITICAL** (Most important positioning section)

---

## 4. TECHNOLOGIES SECTION (NEW COMPONENT)

### BEFORE
```
Likely generic or non-existent
```

### AFTER
```jsx
// NEW: Platform & Technology Grid

Title: "Platforms & Technologies"

Four Categories:
├── Automation
│   ├── Siemens TIA Portal
│   ├── Rockwell Studio 5000
│   ├── CoDeSys
│   ├── WinCC
│   └── FactoryTalk
├── Industrial Communication
│   ├── OPC UA
│   ├── MQTT
│   ├── Modbus TCP
│   ├── Profinet
│   └── EtherNet/IP
├── Data & Software
│   ├── Node-RED
│   ├── Python
│   ├── SQL
│   ├── REST APIs
│   └── Edge gateways
└── Infrastructure
    ├── Industrial networking
    ├── Remote access
    ├── Virtualization
    ├── Cloud integration
    └── Industrial PCs
```

---

## 5. FOUNDER SECTION (NEW COMPONENT)

### BEFORE
```
No founder/team credibility section
```

### AFTER
```jsx
// NEW: "Meet The Engineers Behind Preaumate"

Title: "Meet The Engineers Behind Preaumate"

Intro Copy:
"Preaumate was founded by engineers with hands-on experience 
in industrial automation, system integration and factory operations. 
We believe industrial modernization should be practical, reliable 
and achievable — not unnecessarily complex."

Founder 1: [NETHERLANDS]
- Name: [PLACEHOLDER]
- Title: Automation Engineer | Netherlands
- Experience: 20 years of industrial automation experience
- Specializations:
  - [SPECIALIZATION 1]
  - [SPECIALIZATION 2]
  - [SPECIALIZATION 3]
- Industries: [LIST]
- LinkedIn button

Founder 2: [MEXICO]
- Name: [PLACEHOLDER]
- Title: Automation & Integration Engineer | Monterrey, Mexico
- Experience: 10 years of industrial systems and integration
- Specializations:
  - [SPECIALIZATION 1]
  - [SPECIALIZATION 2]
  - [SPECIALIZATION 3]
- Industries: [LIST]
- LinkedIn button
```

**Implementation Priority: CRITICAL** (Most important for conversion)

---

## 6. ANIMATION & MOTION REDUCTIONS

### BEFORE (Current Issues)

```jsx
// Multiple excessive animations
animate={{ rotate: 360 }}                    // Spinning
repeat: Infinity                              // Never stops
whileHover={{ scale: 1.05 }}                 // Aggressive scaling
floating animations                           // Elements moving up/down
aggressive parallax                           // Background movement
animated gradients everywhere                 // Color shifts
constant movement loops                       // Never stable
```

### AFTER (Industrial Confidence)

```jsx
// Minimal, purposeful animations
transition-all duration-300                   // Smooth but brief
hover:border-emerald-500/40                   // Subtle border glow on hover
// NO rotating elements
// NO infinite loops
// NO aggressive parallax
// Static backgrounds with optional subtle overlay
```

**Impact:**
- Site feels more stable and professional
- Faster perceived performance
- Better accessibility (respects prefers-reduced-motion)
- Industrial clients perceive "calm confidence" not "hyper activity"

---

## 7. CONTACT FORM SECURITY

### BEFORE
```
Direct EmailJS exposure in frontend
- No CAPTCHA protection
- Forms directly call EmailJS API
- Vulnerable to bot spam
- Exposes API key or keys to frontend
```

### AFTER
```
Cloudflare Turnstile Protection
├── npm install react-turnstile
├── Add Turnstile widget to form
├── Server-side verification
├── No exposed API keys
└── Better spam/bot protection
```

---

## 8. PERFORMANCE IMPROVEMENTS

### BEFORE
- Hero section has large image + animations running
- Framer Motion used extensively
- No lazy loading for images below fold
- Animations run even on low-end devices

### AFTER
```bash
npm install vite-plugin-compression

Actions:
- Lazy load images below fold
- Compress hero background
- Reduce Framer Motion usage (only use for viewport-triggered animations)
- Remove animations that run on page load
- Use CSS transitions instead of JS where possible
- Split large components
```

---

## 9. VISUAL DIRECTION

### BEFORE (Current)
- Generic tech startup aesthetic
- Excessive glow effects
- Floating animations
- Spinning elements
- Generic stock imagery

### AFTER (Industrial Realism)
**Keep:**
- Dark industrial theme
- Teal/green accents
- Clean typography
- Strong spacing

**Remove:**
- Excessive glow effects
- Excessive blur effects
- Startup-style animations
- Generic stock imagery

**Add:**
- Industrial network topology visuals
- PLC cabinet photography
- Factory floor imagery
- Robotic production cells
- Industrial data flow graphics
- Subtle industrial textures (not animations)
- Abstract factory overlays

---

## 10. SEO IMPROVEMENTS (Future Phase)

### New Pages to Create
```
/src/pages/
├── plc-programming.jsx
├── scada-development.jsx
├── industrial-iot.jsx
├── robotics-integration.jsx
├── industrial-ai.jsx
├── legacy-modernization.jsx
└── automation-troubleshooting.jsx
```

### Recommended Meta Tags
```jsx
// Example: PLC Programming page
<Helmet>
  <title>PLC Programming & Industrial Automation Services | Preaumate</title>
  <meta 
    name="description" 
    content="Industrial PLC programming, migration and automation integration services for manufacturers..."
  />
</Helmet>
```

---

## 11. PROBLEMS WE SOLVE SECTION

### Status: ✅ Mostly Aligned

Current section appears to align well with strategy. May need minor copy adjustments.

**Target Problems (from strategy):**
1. Migrating outdated PLC systems without disrupting production
2. Collecting and visualizing machine data across factory floor
3. Connecting PLCs, SCADA, MES, ERP and IoT systems reliably
4. Programming and integrating robotic systems into production
5. Diagnosing recurring automation failures and improving reliability
6. Applying AI where it creates measurable operational value

---

## 12. PROCESS/HOW WE WORK SECTION

### AFTER (If doesn't exist)

```jsx
Title: "How We Work"

Step 1: Understand the production problem
"We start by understanding operational constraints, 
downtime risks and production goals."

Step 2: Design practical solutions
"We select technologies and architectures that fit 
the production environment."

Step 3: Implement & integrate
"We commission, test and integrate systems with 
minimal operational disruption."

Step 4: Support & optimize
"We provide troubleshooting, optimization and 
long-term technical support."
```

---

## 13. FINAL CTA SECTION

### AFTER

```jsx
Title: "Need Help Modernizing Industrial Systems?"

Copy:
"Whether you need PLC programming, SCADA integration, 
industrial IoT connectivity or AI-driven automation support, 
we are ready to help.

Talk directly with an engineer about your production challenges."

Buttons:
- Primary: "Schedule a Discovery Call"
- Secondary: "Send Us Your Project"
```

---

## IMPLEMENTATION PRIORITY MATRIX

| Component | Priority | Effort | Impact | Dependencies |
|-----------|----------|--------|--------|--------------|
| Hero Section Update | 🔴 CRITICAL | High | Very High | Translation strings |
| Services Copy Rewrite | 🔴 CRITICAL | Medium | Very High | Translation strings |
| Trust Section (NEW) | 🔴 CRITICAL | High | Very High | Founder info |
| Founder Section (NEW) | 🔴 CRITICAL | High | Very High | Founder photos, bios |
| Motion Reduction | 🟠 HIGH | Medium | High | Component audit |
| Technologies Grid (NEW) | 🟠 HIGH | Medium | High | None |
| Contact Security | 🟠 HIGH | Medium | Medium | Turnstile API |
| Performance Optimization | 🟠 HIGH | Medium | Medium | Image optimization |
| Process Section | 🟡 MEDIUM | Low | Medium | None |
| Industries Section | 🟡 MEDIUM | Low | Medium | None |
| SEO Pages | 🟢 LOW | High | Medium | Future blog content |

---

## BEFORE/AFTER SUMMARY TABLE

| Aspect | BEFORE | AFTER | Change |
|--------|--------|-------|--------|
| **Brand Positioning** | "Modern industrial tech startup" | "Experienced industrial automation engineers" | 🔴 Complete shift |
| **Hero Load Time** | 3.5-4.5s content delay | <500ms content reveal | 🟢 7-9x faster |
| **Primary Message** | Capability-focused | Problem-solving focused | 🔴 Major |
| **Animation Frequency** | Constant movement | Minimal, purposeful | 🟢 Reduced 80% |
| **Trust Indicators** | Implicit/missing | Explicit "30+ years" | 🟢 Added |
| **Founder Visibility** | Hidden | Featured prominently | 🟢 Added |
| **Service Language** | Generic/buzzwords | Specific operational terms | 🟢 Updated |
| **Contact Security** | EmailJS exposed | Cloudflare Turnstile | 🟢 Secured |
| **Visual Aesthetic** | Startup style | Industrial professional | 🔴 Major |
| **Performance** | Normal | Optimized (lazy load, compression) | 🟢 Improved |

---

## NEXT STEPS

1. **Phase 1 (Week 1)** - Critical Updates
   - [ ] Update Hero Section copy & reduce animations
   - [ ] Rewrite Services descriptions
   - [ ] Create Trust Section component
   - [ ] Create Founder Section component
   
2. **Phase 2 (Week 2)** - High Priority
   - [ ] Create Technologies Grid component
   - [ ] Audit and reduce all animations site-wide
   - [ ] Add Cloudflare Turnstile to contact form
   - [ ] Implement performance optimizations

3. **Phase 3 (Week 3)** - Medium Priority
   - [ ] Create/update Process section
   - [ ] Review Industries section
   - [ ] Update Footer SEO expansion
   - [ ] Update final CTA section

4. **Phase 4+ (Future)** - Low Priority
   - [ ] Create SEO landing pages (/plc-programming, etc.)
   - [ ] Develop blog strategy
   - [ ] Add real photos/case studies
   - [ ] LinkedIn integration

---

## DEPLOYMENT DECISION FRAMEWORK

**Deploy these changes if:**
- ✅ You want to appeal to industrial manufacturing executives
- ✅ You want to reduce bounce rate from non-target audiences
- ✅ You believe founder expertise is your strongest asset
- ✅ You're comfortable removing "startup vibes" completely

**Hold off if:**
- ❌ Your main revenue still comes from non-industrial clients
- ❌ You need to maintain generic positioning for now
- ❌ Founder bios/info aren't ready to publish
- ❌ You don't have industrial photos/case studies yet

---

**Document Generated**: 2026-05-17  
**Strategy Reference**: Documents/Rebuild_strategy.md
