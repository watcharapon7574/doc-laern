# Technical Requirements

- React with Framer Motion for all animations using spring physics,
  never use linear or CSS transition

## 🎨 Visual Art & Image Generation (CRITICAL)

- **DO NOT use inline SVG to draw characters, food, animals, backgrounds,
  or any illustrated artwork.** SVG path drawing produces ugly, low-quality
  results that ruin the visual experience.
- **ALL illustrated visuals** (characters, food items, animals, backgrounds,
  UI decorations, icons that need to look hand-drawn or cartoon-style)
  **MUST be generated using Lovable AI image generation** in a colorful,
  child-friendly cartoon illustration style.
- This includes but is not limited to:
  - Character sprites and mascots
  - Food illustrations
  - Background scenes and environments
  - Decorative elements and borders
  - Any visual that is meant to look "drawn" or "illustrated"
- Simple geometric UI elements (buttons, cards, progress bars, containers)
  may use CSS/HTML styling — these do not need image generation.
- Emoji may be used as supplementary decoration only, never as primary
  game artwork.
- No placeholder shapes, no colored circles pretending to be characters,
  no SVG approximations of real objects.

## Audio

- All sounds generated via Web Audio API, no external audio files needed

## Feedback & Effects

- Particle burst effect on every correct answer
- Haptic feedback via `navigator.vibrate(40)` on correct
  and `navigator.vibrate([50, 30, 50])` on incorrect
- Brief screen flash on correct answer (soft green)
  and incorrect answer (soft red), opacity 0.3, duration 300ms

## Animation

- Continuous idle animation loop on all characters at all times
- All drag interactions must use `dragElastic: 0.2`
  and spring physics with `bounceStiffness` for natural feel
- Smooth 60fps animations throughout

## Interaction

- Touch and mouse support, minimum tap/drag target 44px

## Layout

- Fully responsive for iPad landscape and portrait

## Dependency Rules

- No external images (all visuals via AI image generation or CSS)
- No external audio files
- No external dependencies beyond React and Framer Motion
