

## New Section: Cara Pakai Motionary (Versi Install Lokal)

Create a new `WorkflowSection.tsx` component and place it between TutorialSection and WhatYouGetSection in the page layout.

### Design

The section will feature:
- Headline + subheadline at the top
- A vertical 3-step timeline with numbered circles connected by a line
- Each step has a title, description, and bullet points
- A highlight box below the steps with 4 key benefits
- A soft CTA button at the bottom

### Changes

**New file: `src/components/landing/WorkflowSection.tsx`**

- Uses framer-motion for scroll-triggered fade-up animations (matching existing section patterns)
- 3-step vertical timeline layout:
  1. "Generate kode TSX dengan AI" -- with sub-bullets about prompt and output
  2. "Paste kode ke Studio Editor" -- with sub-bullets about editing capabilities
  3. "Preview & render di Remotion Studio" -- with sub-bullets about resolution, watermark, hardware
- Highlight box styled with `bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20` (same pattern as WhatYouGetSection)
- Soft CTA linking to the sandbox section (`#sandbox`)
- Uses neon-text class for brand-colored accents

**File: `src/pages/Index.tsx`**

- Import WorkflowSection
- Place it after `<TutorialSection />` and before `<WhatYouGetSection />`

### Technical Details

- Timeline uses a vertical line (`border-l-2 border-primary/30`) with numbered circles (`rounded-full neon-bg`) for each step
- Each step animates in with staggered delays using framer-motion `whileInView`
- Highlight box uses a grid of 4 benefit items with Check icons
- CTA button scrolls to the `#sandbox` section
- Fully responsive: stacks cleanly on mobile with proper spacing
