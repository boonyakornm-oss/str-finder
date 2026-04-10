# Design System Specification: Strength & Growth

## 1. Overview & Creative North Star: "The Architect of Potential"
This design system moves beyond the generic utility of a data-tracking tool and enters the realm of a high-end editorial experience. Our Creative North Star is **"The Architect of Potential."** 

We avoid the "SaaS-dashboard-in-a-box" look by embracing intentional asymmetry, expansive white space, and a sophisticated layering strategy. Instead of rigid grids and borders, we use tonal depth and "breathable" layouts to guide the user. The goal is to make the user feel empowered, not managed—treating their personal strengths as a premium asset rather than a data point.

---

## 2. Colors: Tonal Architecture
The palette is built on a foundation of deep teals and aquatic neutrals, creating a sense of calm authority.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. 
Structure must be defined through:
- **Background Shifts:** Placing a `surface-container-low` section against a `surface` background.
- **Negative Space:** Using generous margins to imply boundaries.
- **Tonal Transitions:** Subtle shifts between containers to denote hierarchy.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, physical layers. 
- **Base Layer:** `surface` (#e2fffe) or `surface-container-lowest` (#ffffff).
- **Secondary Tier:** `surface-container-low` (#d3fbfa) for grouping secondary modules.
- **Tertiary Tier:** `surface-container-highest` (#b0eeed) for high-impact sidebar or navigation elements.

### The "Glass & Gradient" Rule
To inject "soul" into the professional aesthetic:
- **Glassmorphism:** For floating modals or navigation bars, use `surface` at 80% opacity with a `24px` backdrop-blur.
- **Signature Gradients:** For primary CTAs and Strength category headers, use a linear gradient: `primary` (#006b62) to `primary-container` (#83efe1) at a 135-degree angle.

---

## 3. Typography: Editorial Authority
We pair the technical precision of **Inter** with the characterful, wide-set geometry of **Manrope** to create a system that feels both functional and curated.

- **Display & Headlines (Manrope):** Used for large-scale storytelling. `display-lg` (3.5rem) should be used sparingly to celebrate "Top Strengths." The wide aperture of Manrope conveys openness and growth.
- **Titles & Body (Inter):** Used for all functional data and descriptions. Inter’s high x-height ensures legibility even at `body-sm` (0.75rem).
- **Labeling:** `label-md` and `label-sm` should always be set in **All Caps** with a `0.05em` letter-spacing to provide an "authoritative" metadata feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are a last resort. We convey hierarchy through the **Layering Principle**.

### Ambient Shadows
When an element must "float" (e.g., a Strength Card during a drag-and-drop interaction):
- **Shadow:** `0px 20px 40px rgba(0, 57, 57, 0.06)`. 
- **Tinting:** Shadows must never be pure grey. Use a low-opacity version of `on-surface` (#003939) to simulate natural light interacting with the teal-tinted surfaces.

### The "Ghost Border" Fallback
If a visual boundary is strictly required for accessibility (e.g., in high-contrast modes):
- Use `outline-variant` (#80bdbc) at **15% opacity**. This provides a whisper of a line that maintains the "No-Line" philosophy.

---

## 5. Components: Refined Interaction

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-dim`), `xl` (1.5rem) corner radius. No border. Text is `on-primary`.
- **Secondary:** `surface-container-high` background. On hover, transition to `surface-container-highest`.
- **Tertiary:** Pure text with `primary` color. Interaction is shown via a subtle `surface-container-low` background pill shape on hover.

### Strength Cards
- **Construction:** Use `surface-container-lowest` (#ffffff). Avoid borders. 
- **Separation:** Use a `2rem` vertical spacing from the Spacing Scale.
- **Accent:** A 4px vertical "accent bar" on the left side using `tertiary` (#865400) or `primary-fixed` to denote the strength category.

### Input Fields
- **State:** Resting state uses `surface-container-low`.
- **Focus:** Transition to `surface-container-highest` with a `2px` "Ghost Border" of `primary`.
- **Error:** Background shifts to `error-container` (#f56965) with text in `on-error-container`.

### Progress Visualization (Strength Meters)
- Forbid standard thin loading bars. 
- Use thick, rounded tracks (`lg` radius) with `primary` fill and a `primary-container` background track.

---

## 6. Do's and Don'ts

### Do
- **DO** use asymmetry in hero sections to create a "custom-built" feel.
- **DO** leverage `surface-dim` for footers or background utility sections to ground the lighter colors.
- **DO** use the `tertiary` (#865400) palette as a "spark" color for rare achievements or unique strengths.

### Don't
- **DON'T** use 1px solid dividers to separate list items. Use white space or a 5% opacity `outline-variant`.
- **DON'T** use pure black (#000000) for text. Always use `on-surface` (#003939) to maintain the sophisticated teal-tonal harmony.
- **DON'T** use "Standard" shadows. If the shadow looks like a default CSS property, it is too heavy. It should be felt, not seen.