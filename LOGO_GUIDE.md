# Nazaryah Logo Guide

## Design Concept

The Nazaryah logo merges two powerful biblical symbols:

### 1. **The Hebrew Aleph (א)**
The first letter of the Hebrew alphabet, representing:
- Beginning and primacy
- God's oneness (Deuteronomy 6:4 - "Hear O Israel, the LORD is One")
- Foundational truth

### 2. **The Torah Scroll**
Ancient scrolls representing:
- Scripture and sacred text
- Scholarly study and preservation
- Continuity from ancient to modern

## Visual Elements

```
┌─────────────────┐
│   ╱│╲           │  Scroll outline (Torah)
│  ╱ │ ╲          │
│   ╱│╲           │  Aleph-inspired strokes
│  • │ •          │  Vowel points (nikkud)
└─────────────────┘
```

### Color Scheme

**Light Mode**: Deep burgundy (#8b2635)
- Reflects ancient manuscripts and sacred texts
- Scholarly, serious, timeless

**Dark Mode**: Rich gold (#d4a85f)
- Represents illumination and wisdom
- Precious, valuable knowledge
- Like gold leaf on medieval manuscripts

## Usage

### Full Logo (Icon + Wordmark)
```astro
<Logo variant="full" />
```
Use in:
- Site header
- Email signatures
- Social media profiles with text space

### Icon Only
```astro
<Logo variant="icon-only" />
```
Use in:
- Favicon
- Social media profile pictures
- App icons
- Small spaces where text would be illegible

## File Locations

- **Component**: `src/components/Logo.astro`
- **Favicon**: `public/favicon.svg`

## Technical Specifications

### Dimensions
- Icon: 40×40px (scalable SVG)
- Favicon: 128×128px (optimized for browser tabs)

### Minimum Sizes
- Full logo: Minimum 120px wide
- Icon only: Minimum 24×24px

### Clear Space
Maintain minimum clear space of 0.5× logo height on all sides

### Accessibility
- Logo includes proper ARIA labels
- SVG is inline for color theme adaptation
- Hover states provide visual feedback

## Design Rationale

### Why This Works

1. **Instantly Recognizable**: Unique shape sets us apart from generic biblical sites
2. **Culturally Authentic**: Hebrew letter grounds us in original languages
3. **Scholarly Feel**: Scroll motif signals serious academic approach
4. **Scalable**: Works from 16px favicon to billboard size
5. **Memorable**: Simple geometric form is easy to recall

### What It Communicates

- **Original Languages**: Aleph signals Hebrew/Greek focus
- **Scholarly Rigor**: Scroll represents ancient manuscripts and careful study
- **Accessibility**: Clean design is readable, not intimidating
- **Timeless**: Classic elements won't look dated in 5 years

## Brand Consistency

### Do's
✅ Use provided color values exactly
✅ Maintain aspect ratio when scaling
✅ Keep adequate white space around logo
✅ Use SVG format for web (crisp at any size)

### Don'ts
❌ Don't rotate or skew the logo
❌ Don't add drop shadows or effects
❌ Don't place on busy backgrounds
❌ Don't alter the aleph strokes or proportions
❌ Don't use logo as a watermark over content

## Future Variations

Potential extensions:
- **Social Media**: Squared version for Instagram, Twitter
- **Print**: High-res PNG/PDF for business cards, letterhead
- **Animated**: Subtle reveal animation for video intros
- **Monochrome**: Black/white versions for B&W printing

---

**Version**: 1.0
**Created**: January 2026
**Designer**: Claude Code (with Josh)
