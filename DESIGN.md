# Country Farms — Design Document

## 1. Brand Overview

**Country Farms** is a farmland investment platform that gives everyday investors access to productive agricultural land. Beyond financial returns, Country Farms actively supports the communities surrounding its properties — connecting local farmers, suppliers, and residents to create more productive and resilient rural economies.

**Positioning:** Accessible impact investing. Not just land ownership — community stewardship.

**Tone of voice:**
- Warm, plain-spoken, and honest — never corporate or jargon-heavy
- Grounded and earthy — evokes open land, hard work, real results
- Optimistic about agriculture's role in community building
- Inclusive: speaks to first-time investors, not just wealth managers

**Tagline candidates:**
- "Invest in the land. Grow the community."
- "Where returns are rooted in real ground."
- "Farmland for everyone. Futures for all."

---

## 2. Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Background | Warm White | `#FFF8EF` | Page backgrounds, cards |
| Surface | Straw | `#F5E9D4` | Secondary backgrounds, section dividers |
| Primary | Terracotta | `#C4622D` | CTAs, active states, accents |
| Primary Dark | Burnt Clay | `#9A4520` | Hover states, links |
| Text Primary | Dark Soil | `#2C1810` | Headings, body copy |
| Text Secondary | Field Brown | `#6B4C3B` | Subheadings, captions, labels |
| Success / Nature | Sage Green | `#5A7A52` | Tags, positive stats, farm icons |
| Sky | Pale Blue | `#D4E8F0` | Highlight bands, illustration fills |
| Border | Wheat | `#DFC9A8` | Dividers, input borders |

**Primary gradient:** `linear-gradient(135deg, #FFF8EF 0%, #F5E9D4 100%)` — used on hero sections.

---

## 3. Typography

| Role | Family | Weight | Mobile (<640px) | Tablet (640–1024px) | Desktop (>1024px) | Fluid `clamp()` |
|---|---|---|---|---|---|---|
| Display / Hero | Lora | 700 | 36px | 48px | 64px | `clamp(2.25rem, 0.25rem + 5vw, 4rem)` |
| H1 | Lora | 600 | 28px | 36px | 44px | `clamp(1.75rem, 0.6rem + 2.86vw, 2.75rem)` |
| H2 | Lora | 600 | 22px | 27px | 32px | `clamp(1.375rem, 0.66rem + 1.79vw, 2rem)` |
| H3 | DM Sans | 600 | 18px | 20px | 22px | `clamp(1.125rem, 0.84rem + 0.71vw, 1.375rem)` |
| Body | DM Sans | 400 | 15px / 1.65lh | 16px / 1.7lh | 16px / 1.7lh | — |
| Body Small | DM Sans | 400 | 13px | 14px | 14px | — |
| Label / Tag | DM Sans | 600 | 11px, uppercase | 12px, uppercase | 12px, uppercase | — |
| CTA / Button | DM Sans | 600 | 14px | 15px | 15px | — |
| Nav | DM Sans | 500 | 16px (drawer) | 15px | 15px | — |

**Fluid scaling:** Display, H1, H2, and H3 use `clamp()` for smooth type scaling between 640px and 1200px — no hard jumps at breakpoints. Body and UI text use fixed sizes (fluid scaling below 16px causes readability issues on small screens).

**Line heights by breakpoint:**
- Mobile: slightly tighter (1.5–1.65) to reduce scroll distance
- Tablet/Desktop: comfortable reading (1.7–1.8 for body, 1.15–1.2 for headings)

**Font pairing rationale:** Lora's warm serifs carry editorial weight and feel rooted; DM Sans is clean and modern without feeling cold — together they balance tradition and accessibility.

---

## 4. Spacing & Layout

- **Base unit:** 8px
- **Max content width:** 1200px
- **Section padding:** 96px vertical (64px mobile)
- **Grid:** 12-column, 24px gutter
- **Border radius:** 12px (cards), 8px (buttons/inputs), 24px (pill tags)
- **Card shadow:** `0 2px 16px rgba(44, 24, 16, 0.08)`

---

## 5. Component Styles

### Buttons
- **Primary:** Terracotta fill (`#C4622D`), white text, 8px radius, 48px height, 24px horizontal padding. Hover: Burnt Clay (`#9A4520`).
- **Secondary:** Transparent, Terracotta border + text. Hover: light terracotta fill (`#C4622D10`).
- **Ghost / Text link:** No border, Terracotta text, underline on hover.

### Cards
- Background: Warm White (`#FFF8EF`) or Straw (`#F5E9D4`)
- Border: 1px solid Wheat (`#DFC9A8`)
- Radius: 12px
- Padding: 32px
- Subtle shadow on hover

### Input fields
- Border: 1.5px Wheat, radius 8px, height 48px
- Focus ring: Terracotta (`#C4622D`), 2px
- Label: Dark Soil, DM Sans 600 14px
- Placeholder: Field Brown

### Tags / Badges
- Sage Green background (`#5A7A5220`) + Sage Green text for status/category
- Terracotta background (`#C4622D15`) + Terracotta text for highlights

### Navigation

**Desktop (>1024px):**
- Sticky, Warm White background, 1px Wheat border-bottom, 72px height
- Logo far left, links centered or right-aligned, primary CTA button far right
- Active link: Terracotta underline (2px, 4px offset)

**Tablet (640–1024px):**
- Sticky, same height — drop secondary nav links, keep Logo + 2–3 core links + CTA

**Mobile (<640px) — Hamburger Menu:**
- Nav bar: 56px height, Logo left, hamburger icon right
- Hamburger icon: 3 horizontal lines, 24×18px, 2px stroke, Dark Soil (`#2C1810`), 44×44px tap target
- Tap opens a full-width drawer sliding in from the right, 280px wide max, covering full viewport height
- Drawer background: Warm White (`#FFF8EF`), 24px horizontal padding, 32px top padding
- Drawer header: logo top-left, ✕ close icon top-right (24px, same Dark Soil color, 44×44px tap target)
- Nav links stacked vertically, 48px min tap height, 20px between items, Lora 600 22px, Dark Soil text
- Active / current page: Terracotta text
- CTA button full-width at the bottom of the drawer, 48px height, Primary style
- Page overlay: `rgba(44, 24, 16, 0.45)` behind the drawer, tapping it closes the drawer
- Open animation: drawer slides from `translateX(100%)` → `translateX(0)`, 250ms `ease-out`; overlay fades in 200ms
- Close animation: reverse — 200ms `ease-in`
- Body scroll locked while drawer is open (`overflow: hidden` on `<body>`)

### Section dividers
- Alternating backgrounds: Warm White ↔ Straw
- Occasional Sky Blue (`#D4E8F0`) band for visual variety

---

## 6. Iconography & Imagery

**Icons:** Outlined, 2px stroke, rounded caps — Lucide or Phosphor icon library. Use Sage Green for nature/farm icons, Terracotta for action icons.

**Illustration style:** Soft, flat farm illustrations — wheat fields, tractors, barn silhouettes, hands planting seeds. Line-art overlays on photography are acceptable.

**Photography direction:**
- Golden-hour farmland shots, aerial field patterns
- People: farmers at work, community gatherings, handshakes between investors and growers
- No stock-photo sterility — favor authentic, documentary-style images
- Color grading: warm, slightly desaturated, leaning golden

---

## 7. Pages

### 7.1 Home (Landing Page)

**Goal:** Convert visitors to sign-up or "Learn More" click.

**Sections (top to bottom):**

1. **Nav** — Logo | How It Works | Portfolio | About | Contact | [Get Started →]

2. **Hero** — Full-width, warm gradient background with a large farmland photo or illustration overlay.
   - Display heading: "Invest in Farmland. Grow Something Real."
   - Subheading: "Country Farms lets you invest in productive agricultural land — and the communities that depend on it."
   - Two CTAs: [Get Started] (Primary) + [How It Works] (Secondary)
   - Trust bar below fold: "2,400+ investors · $48M in farmland · 18 active properties"

3. **Why Farmland?** — Three-column stat/icon cards
   - Historical returns, inflation hedge, tangible asset
   - Each card: icon + large stat + one-sentence explanation

4. **Community Impact** — Two-column: left is editorial text, right is a warm photo or illustration
   - "We don't just buy land. We invest in the people around it."
   - Explains the community productivity angle — local farmer partnerships, supplier networks, co-ops

5. **How It Works (preview)** — Numbered horizontal steps (3 steps), link to full page
   - Browse → Invest → Earn & Impact

6. **Featured Properties** — 3-card horizontal scroll or grid, each showing property photo, location, projected return %, minimum investment. [View All Properties →]

7. **Testimonials** — 2–3 quote cards, investor + farmer voices

8. **CTA Banner** — Full-width Terracotta band: "Ready to put your money where the land is?" + [Create Free Account]

9. **Footer** — Logo, nav links, social icons, disclaimer copy, copyright

---

### 7.2 How It Works

**Goal:** Remove hesitation, explain process clearly.

**Sections:**

1. **Page Hero** — Straw background, H1 + short intro paragraph

2. **Step-by-step process** — Alternating left/right layout, each step numbered with a large illustrated icon
   - Step 1: Create your account
   - Step 2: Browse available farmland
   - Step 3: Choose your investment amount
   - Step 4: Earn returns & watch your impact grow

3. **Your Investment At Work** — Split section explaining financial returns (projected yields, distributions) alongside community outcomes (jobs supported, local partnerships)

4. **Fees & Transparency** — Simple table or icon list, plain language

5. **FAQ accordion** — 6–8 common questions

6. **CTA** — [Start Investing Today]

---

### 7.3 Portfolio / Properties

**Goal:** Showcase available and past investments to build credibility.

**Sections:**

1. **Page Hero** — H1 "Our Properties", short intro, filter bar (All | Available | Funded | Completed)

2. **Property Grid** — 3-column card grid (2 on tablet, 1 on mobile)
   - Each card: hero photo, property name + location, acreage, crop type, projected annual return, min. investment, status badge, [View Details →]

3. **Property Detail (modal or sub-page):**
   - Full photo gallery
   - Key stats: acreage, crop type, operator, projected return, term
   - Community section: local farmer profile, community partnerships
   - Investment breakdown: how returns are calculated
   - [Invest Now] CTA

4. **Impact Summary Banner** — Total acres managed, communities supported, total investor returns distributed

---

### 7.4 About / Our Story

**Goal:** Build trust and emotional connection with the brand mission.

**Sections:**

1. **Page Hero** — Full-bleed pastoral photo, H1 "We believe land should work for everyone."

2. **Our Mission** — Editorial text block, warm and human. 2–3 paragraphs about why Country Farms was founded, the gap in accessible farmland investing, and the community focus.

3. **Our Values** — 4-icon grid: Transparency · Community · Stewardship · Accessibility

4. **Team** — Photo + name + title + 1-line bio cards (3–5 team members)

5. **Partners & Farmers** — Logo row of farm partners/co-ops, or 2–3 short farmer profile cards with photos

6. **Timeline / Milestones** — Horizontal or vertical timeline from founding to present

7. **CTA** — [Join Our Community of Investors]

---

### 7.5 Contact / Get Started

**Goal:** Capture leads and answer last-mile questions.

**Sections:**

1. **Page Hero** — Simple H1 + short paragraph

2. **Two-column layout:**
   - Left: Contact form — Name, Email, Phone (optional), Investment interest level (dropdown), Message, [Send Message]
   - Right: Contact info (email, phone, address), office hours, embedded map or illustration

3. **Investor FAQ** — 4–5 short Q&As for common pre-contact questions

4. **Newsletter signup** — Email input + [Stay in the Loop] CTA

---

## 8. Responsive Breakpoints

| Token | Width | Grid | Gutter |
|---|---|---|---|
| `mobile` | < 640px | 4-column | 16px |
| `tablet` | 640–1024px | 8-column | 20px |
| `desktop` | > 1024px | 12-column | 24px |
| `wide` | > 1440px | 12-column (max-width 1200px centered) | 24px |

### Per-component breakpoint behaviour

**Navigation**
| Breakpoint | Behaviour |
|---|---|
| Desktop | Sticky full bar — logo, all links, CTA button |
| Tablet | Sticky bar — logo, 2–3 core links, CTA button |
| Mobile | 56px bar — logo + hamburger only; links in slide-in drawer |

**Hero Section**
| Breakpoint | Behaviour |
|---|---|
| Desktop | Full-bleed background, text left / image right (50/50 split), display type 64px |
| Tablet | Center-aligned text, image below or as background overlay, type 48px |
| Mobile | Stacked: text first, image below (or subtle background), type 36px, both CTAs stack vertically |

**Section Padding**
| Breakpoint | Vertical padding | Horizontal padding |
|---|---|---|
| Desktop | 96px | 0 (contained by 1200px max-width) |
| Tablet | 72px | 32px |
| Mobile | 48px | 20px |

**Card Padding**
| Breakpoint | Padding |
|---|---|
| Desktop | 32px |
| Tablet | 24px |
| Mobile | 20px |

**Content Grids (property cards, stat cards, team cards)**
| Breakpoint | Columns |
|---|---|
| Desktop | 3 columns |
| Tablet | 2 columns |
| Mobile | 1 column (full width), cards horizontally scrollable in carousels where applicable |

**Two-column Content Sections (e.g. Community Impact, About)**
| Breakpoint | Layout |
|---|---|
| Desktop | 50/50 or 55/45 side-by-side |
| Tablet | 60/40 side-by-side or stacked if content is heavy |
| Mobile | Fully stacked — text first, media second |

**Step / Process Section**
| Breakpoint | Layout |
|---|---|
| Desktop | Horizontal numbered steps in a single row |
| Tablet | 2×2 grid of steps |
| Mobile | Vertical stacked list with connecting line on the left |

**Footer**
| Breakpoint | Columns |
|---|---|
| Desktop | 4 columns (logo+tagline, nav links, social, newsletter signup) |
| Tablet | 2×2 grid |
| Mobile | Single column, stacked, links condensed into groups |

**Images**
- All images use `max-width: 100%` and `height: auto`
- Hero images: `object-fit: cover`, fixed height (Desktop: 600px, Tablet: 440px, Mobile: 320px)
- Property card images: `aspect-ratio: 16/9`, `object-fit: cover`
- Team/farmer portraits: `aspect-ratio: 1/1`, `object-fit: cover`, rounded at 50% (circle) on mobile

**Touch targets (mobile)**
- All interactive elements minimum 44×44px tap target
- Inputs: 48px height
- Buttons: 48px height, full-width on mobile unless paired side-by-side

---

## 9. Motion & Interaction

- **Scroll animations:** Fade-up on section entry (subtle, 300ms, 24px translate). Use `prefers-reduced-motion` to disable.
- **Button hover:** 150ms ease background-color + 1px translate-Y
- **Card hover:** 200ms shadow lift + subtle scale (1.01)
- **Page transitions:** Fade (opacity 0→1, 200ms) — no dramatic slide transitions
- **Skeleton loading:** Show warm beige skeleton cards while property data loads

---

## 10. Accessibility

- All interactive elements meet WCAG AA contrast (4.5:1 minimum)
- Focus styles: 2px solid Terracotta + 2px offset
- Alt text on all images describing both content and emotional tone
- Keyboard-navigable modals and drawers with focus trap
- Skip-to-content link in the `<head>` of every page

---

## 11. Tech Stack (Planned)

- **Framework:** To be decided at build phase
- **Design source:** Figma (designed before build)
- **Fonts:** Google Fonts — Lora, DM Sans
- **Icons:** Lucide or Phosphor
- **Deployment:** TBD

---

## 12. AI Agent Prompt Guide

> **System Instruction for AI:**
> When writing code for this project, you are a world-class UI engineer. Adhere strictly to the definitions in this `DESIGN.md` file. Prioritize semantic HTML, strict compliance with the color mapping, and clean spacing. If a design request violates the "Hard Constraints" section, refuse to implement the visual violation and suggest an alternative that matches the theme.

### Hard Constraints

The following rules must never be violated. If a request conflicts with them, decline the visual change and propose a compliant alternative.

1. **Color fidelity** — Only use hex values defined in Section 2. No hardcoded grays, blacks, or whites outside the palette. `#000000` and `#ffffff` are banned; use `#2C1810` and `#FFF8EF` respectively.
2. **Typography** — Only Lora and DM Sans. No system fonts, no fallback-only stacks in production. Use the `clamp()` values from Section 3 for fluid headings.
3. **No decorative shadows** — Only the card shadow defined in Section 4 (`0 2px 16px rgba(44,24,16,0.08)`). No coloured glows, no large drop shadows.
4. **Contrast compliance** — Never reduce contrast below WCAG AA (4.5:1 for text, 3:1 for UI elements). Do not place light text on Straw or Warm White without checking contrast first.
5. **Spacing grid** — All spacing values must be multiples of 8px. No arbitrary pixel values like 7px, 13px, or 22px.
6. **Responsive behaviour** — Every component must implement all three breakpoint states as defined in Section 8. Mobile-first CSS is required (min-width media queries).
7. **Hamburger drawer** — On mobile, the nav must use the slide-in drawer pattern defined in Section 5. No dropdown menus, no accordion navs, no visible link list on mobile.
8. **Semantic HTML** — Use `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<h1>`–`<h6>` correctly. No `<div>` soup. One `<h1>` per page.
9. **Accessibility** — All interactive elements must have visible focus styles (2px solid `#C4622D`, 2px offset). All images must have meaningful `alt` text.
10. **No inline styles** — All styling via CSS classes or design tokens. No `style=""` attributes in HTML except for dynamic values that cannot be expressed in CSS (e.g. progress bar widths set by JS).

### Preferred Patterns

- CSS custom properties for all design tokens (colors, spacing, type sizes)
- BEM or utility-first class naming — pick one and be consistent
- `prefers-reduced-motion` media query wrapping all animations
- `clamp()` for fluid typography; `min()` / `max()` for fluid spacing where applicable
- Images: always include `width`, `height`, `loading="lazy"` (except above-the-fold), and `alt`
- Buttons: always `type="button"` unless submitting a form (`type="submit"`)
- Forms: every input paired with a visible `<label>` using `for`/`id` linkage
