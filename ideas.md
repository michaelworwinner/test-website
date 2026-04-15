# Design Strategy: PT. Maranti Trenchlesindo Abadi

## Selected Design Approach: Industrial Precision + Modern Minimalism

### Design Movement
**Neo-Industrial Modernism** — A fusion of heavy industrial aesthetics with clean, contemporary design. This approach emphasizes engineering precision, reliability, and forward-thinking technology while maintaining accessibility and clarity.

### Core Principles

1. **Structural Clarity**: Layouts use asymmetric grids and intentional negative space to guide the eye through content hierarchy. Avoid centered layouts; instead use left-aligned text with right-aligned imagery.

2. **Material Authenticity**: Incorporate subtle textures (concrete grain, metal brushed finishes) in backgrounds and accents to evoke industrial credibility without overwhelming the interface.

3. **Technical Precision**: Typography and spacing follow strict mathematical ratios. Every element has a purpose; nothing is decorative for decoration's sake.

4. **Progressive Disclosure**: Information reveals itself through scrolling and interaction, building narrative momentum from problem → solution → proof → action.

### Color Philosophy

**Primary Palette:**
- **Deep Navy** (`#0F2847`): Trust, stability, engineering precision. Used for headlines and primary CTAs.
- **Burnt Orange** (`#E67E22`): Energy, construction, forward momentum. Used for accents, highlights, and secondary CTAs.
- **Charcoal** (`#2C3E50`): Professional text, body copy. High contrast for readability.
- **Light Gray** (`#F5F6FA`): Clean backgrounds, breathing room.
- **Accent Gold** (`#D4A574`): Premium touches, subtle luxury in details.

**Emotional Intent**: The navy conveys engineering expertise and trust. The burnt orange injects energy and construction vitality. Together they communicate "professional yet dynamic."

### Layout Paradigm

**Asymmetric Sectioning:**
- Hero: Full-width image on right, text + CTA on left
- Services: Staggered cards (left, center, right) with alternating image positions
- Why Choose Us: 4-column grid with icon + text, left-aligned
- Process: Horizontal timeline with diagonal connectors
- Gallery: Masonry grid with varying aspect ratios
- Form: Single-column, left-aligned with right-side accent bar

**Spacing System**: 8px base unit (8, 16, 24, 32, 48, 64, 80px increments)

### Signature Elements

1. **Diagonal Accent Bar**: A subtle angled element (15° rotation) appears on the left of major sections, reinforcing the "cutting-edge" theme.

2. **Metric Badges**: Small circular badges with numbers (100+, 4, etc.) used throughout to highlight key statistics. Styled with navy background, burnt orange text.

3. **Subtle Grid Background**: Faint grid pattern (1px lines, very low opacity) in backgrounds to evoke blueprint/technical drawings without being distracting.

### Interaction Philosophy

- **Hover States**: Buttons shift color to burnt orange with subtle shadow lift. Cards gain a left border accent on hover.
- **Form Interactions**: Input fields have a bottom border that animates from left to right on focus, mimicking a technical "scan" effect.
- **Scroll Reveals**: Sections fade in and slide up slightly as they enter the viewport, creating a sense of progressive discovery.

### Animation

- **Entrance**: Sections fade in (0.6s ease-out) + slight upward slide (20px) as they scroll into view.
- **Hover**: Buttons scale 1.05 with color transition (0.2s ease). Cards lift shadow on hover (0.3s ease).
- **Form Focus**: Input underline animates left-to-right (0.4s ease-out), reinforcing precision.
- **CTA Pulse**: Primary CTA buttons have a subtle pulse animation (2s infinite) to draw attention without being jarring.

### Typography System

**Font Pairing:**
- **Headlines**: `Sora` (bold, 700) — Modern, geometric sans-serif with industrial character
- **Body**: `Inter` (regular, 400) — Clean, highly readable sans-serif
- **Accents**: `Roboto Mono` (500) — For technical specs, metrics, and code-like elements

**Hierarchy:**
- **H1** (Hero): 48px / 56px (desktop/mobile), bold, navy
- **H2** (Section): 36px / 28px, bold, navy
- **H3** (Card): 20px, bold, charcoal
- **Body**: 16px / 14px, regular, charcoal
- **Small**: 12px, regular, muted gray

---

## Implementation Notes

- Use CSS custom properties for color tokens to ensure consistency
- Leverage Tailwind's spacing scale (8px base) throughout
- Apply subtle box-shadows (0 2px 8px rgba) for depth
- Ensure WCAG AA contrast ratios for all text
- Mobile-first responsive design with breakpoints at 640px, 1024px, 1280px
