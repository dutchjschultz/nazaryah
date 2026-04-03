# Nazaryah Design Guide

A modern, scholarly design system inspired by ancient manuscripts and academic publications.

## Design Philosophy

The Nazaryah design system balances:
- **Biblical Aesthetics**: Warm tones inspired by ancient manuscripts and parchment
- **Modern Clarity**: Clean, readable interfaces with excellent contrast
- **Scholarly Authority**: Academic typography and refined visual hierarchy
- **Accessibility**: WCAG AA compliant color contrast ratios

---

## Color Palette

### Light Mode - Parchment and Ink

Inspired by ink on parchment, ancient manuscripts, and scholarly publications.

#### Text Colors
- **Primary Text**: `#1a1614` - Rich black (like ink on parchment)
- **Secondary Text**: `#5c5551` - Warm gray for less prominent text
- **Link**: `#1e4d7b` - Deep scholarly blue
- **Link Hover**: `#16375a` - Darker blue for interaction

#### Background Colors
- **Background**: `#faf8f4` - Warm off-white (parchment-like)
- **Surface**: `#ffffff` - Pure white for cards and elevated elements
- **Surface Elevated**: `#f5f3ef` - Subtle warmth for sections

#### Accent Colors (Deep Burgundy)
- **Accent**: `#8b2635` - Deep burgundy (ancient manuscript accents)
- **Accent Hover**: `#6e1f2a` - Darker burgundy for interaction
- **Accent Light**: `#a83647` - Lighter burgundy for highlights

#### Borders & Dividers
- **Border**: `#e8e5df` - Warm neutral
- **Border Strong**: `#d4cec4` - More prominent borders

### Dark Mode - Night Reading

Optimized for comfortable night reading with warm tones.

#### Text Colors
- **Primary Text**: `#f0ede8` - Warm white
- **Secondary Text**: `#b8b3ad` - Warm gray
- **Link**: `#6ba3d4` - Soft blue (readable on dark)
- **Link Hover**: `#83b5df` - Lighter blue for interaction

#### Background Colors
- **Background**: `#1c1916` - Deep warm black
- **Surface**: `#252220` - Elevated surfaces
- **Surface Elevated**: `#2d2926` - More elevated elements

#### Accent Colors (Gold & Amber)
- **Accent**: `#d4a85f` - Rich gold (manuscript illumination)
- **Accent Hover**: `#e3b86f` - Lighter gold for interaction
- **Accent Light**: `#c19850` - Deeper gold

#### Borders & Dividers
- **Border**: `#3a3733` - Warm dark border
- **Border Strong**: `#4a4540` - Stronger borders

---

## Typography

### Font Families

#### Serif (Headings & Body)
- **Font**: Crimson Text, Georgia, serif
- **Use For**: All headings, body text, article content
- **Character**: Traditional, scholarly, refined

#### Sans-Serif (UI Elements)
- **Font**: Inter, system-ui, sans-serif
- **Use For**: Navigation, buttons, labels, UI elements
- **Character**: Modern, clean, readable

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 40px (2.5rem) | 700 | 1.3 |
| H2 | 32px (2rem) | 600 | 1.3 |
| H3 | 24px (1.5rem) | 600 | 1.3 |
| Body | 18px (1.125rem) | 400 | 1.7 |
| Body Large | 20px (1.25rem) | 400 | 1.7 |

### Typography Rules

1. **Headings**: Always use serif font family for scholarly feel
2. **Body Text**: Serif with comfortable line height (1.7) for readability
3. **UI Elements**: Sans-serif for buttons, navigation, forms
4. **Line Length**: Max 780px for optimal reading (65-75 characters)

---

## Components

### Buttons

#### Primary Button
- Background: Accent color (`#8b2635` / `#d4a85f`)
- Text: White / Dark background
- Hover: Slightly darker + lift effect
- Border radius: 8px
- Padding: 0.75rem 1.5rem

```html
<a href="#" class="btn btn-primary">Explore Studies</a>
```

#### Outline Button
- Background: Transparent
- Border: 2px solid accent
- Text: Accent color
- Hover: Fill with accent, text becomes white

```html
<a href="#" class="btn btn-outline">Learn More</a>
```

### Cards

- Background: Surface color
- Border: 1px solid border color
- Border radius: 12px
- Padding: 1.5rem - 2rem
- Hover: Lift effect with subtle shadow

```html
<div class="card">
  <!-- content -->
</div>
```

#### Card Hover Effects
- Border color strengthens
- Subtle shadow appears
- Lifts 2px upward
- Smooth transition (0.3s)

### Shadows

Soft, warm shadows that complement the parchment aesthetic:

- **Small**: `box-shadow: 0 1px 3px rgba(26, 22, 20, 0.08), 0 1px 2px rgba(26, 22, 20, 0.06)`
- **Medium**: `box-shadow: 0 4px 6px rgba(26, 22, 20, 0.07), 0 2px 4px rgba(26, 22, 20, 0.06)`
- **Large**: `box-shadow: 0 10px 15px rgba(26, 22, 20, 0.10), 0 4px 6px rgba(26, 22, 20, 0.08)`

---

## Layout

### Spacing System

Use consistent spacing based on multiples of 4px:

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Container Widths

- **Content**: 780px (optimal reading width)
- **Wide**: 1200px (for grid layouts)
- **Full**: Edge-to-edge with padding

### Section Spacing

- **Vertical Padding**: 5rem (80px) on desktop, 3rem (48px) on mobile
- **Between Sections**: Natural flow with alternating backgrounds

---

## Interactions

### Transitions

All interactive elements use smooth transitions:

- **Duration**: 0.2s for color changes, 0.3s for transforms
- **Easing**: `ease` for natural feel
- **Properties**: color, background-color, border-color, transform, box-shadow

### Hover States

1. **Links**: Color change to accent hover variant
2. **Buttons**: Slight lift (translateY(-1px)) + shadow
3. **Cards**: Border strengthens + shadow + lift
4. **Navigation**: Underline appears (2px) for active/hover

### Focus States

- **Outline**: 2px solid accent color
- **Outline Offset**: 2px for breathing room
- **Border Radius**: 4px for rounded appearance

---

## Dark Mode

Dark mode is automatically applied based on system preferences using `prefers-color-scheme: dark`.

### Principles

1. **Warm Tones**: Avoid pure black/white, use warm variants
2. **Reduced Contrast**: Softer contrast for comfortable night reading
3. **Gold Accents**: Replace burgundy with warm gold
4. **Consistent Experience**: All components have dark mode variants

### Testing

Test both modes regularly:
- macOS: System Preferences > General > Appearance
- Windows: Settings > Personalization > Colors
- Browser DevTools: Can force either mode

---

## Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Clear hover/focus states

### Focus Management

- All interactive elements have visible focus states
- Keyboard navigation fully supported
- Skip links for screen readers

### Typography

- Minimum 16px base font size
- Scalable with user preferences
- Clear visual hierarchy

---

## Usage Examples

### Hero Section

```astro
<section class="relative py-24 md:py-32">
  <div class="container mx-auto px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="font-serif text-4xl md:text-6xl font-bold mb-6">
        Your Heading <span class="text-[var(--color-accent)] dark:text-[var(--color-dark-accent)]">With Accent</span>
      </h1>
      <p class="text-lg text-[var(--color-secondary-text)] dark:text-[var(--color-dark-secondary-text)] mb-8">
        Your description text
      </p>
      <div class="flex gap-4">
        <a href="#" class="btn btn-primary">Primary Action</a>
        <a href="#" class="btn btn-outline">Secondary Action</a>
      </div>
    </div>
  </div>
</section>
```

### Article Cards

```astro
<article class="card group">
  <div class="p-6">
    <div class="text-xs font-sans font-semibold text-[var(--color-accent)] dark:text-[var(--color-dark-accent)] mb-3 uppercase tracking-wider">
      Category
    </div>
    <h3 class="font-serif text-xl font-semibold mb-3">
      <a href="#" class="hover:text-[var(--color-accent)] dark:hover:text-[var(--color-dark-accent)] transition-colors">
        Article Title
      </a>
    </h3>
    <p class="text-sm text-[var(--color-secondary-text)] dark:text-[var(--color-dark-secondary-text)] mb-4">
      Article description
    </p>
  </div>
</article>
```

---

## CSS Variables Reference

All colors are defined as CSS custom properties in `src/styles/global.css`:

```css
/* Light Mode */
--color-primary-text: #1a1614;
--color-secondary-text: #5c5551;
--color-background: #faf8f4;
--color-accent: #8b2635;
--color-link: #1e4d7b;

/* Dark Mode */
--color-dark-text: #f0ede8;
--color-dark-accent: #d4a85f;
--color-dark-link: #6ba3d4;
```

Always use CSS variables to ensure dark mode compatibility:

```css
/* Good */
color: var(--color-primary-text);

/* Bad */
color: #1a1614;
```

---

## Design Inspiration

The Nazaryah design draws from:

1. **Ancient Manuscripts**: Warm parchment tones, rich burgundy accents
2. **Academic Publications**: Clear typography, generous whitespace
3. **Modern Biblical Studies**: Professional, scholarly, accessible
4. **Illuminated Texts**: Gold/amber accents in dark mode

## Maintenance

When adding new components:

1. Use existing CSS variables for colors
2. Follow the spacing system (multiples of 4px)
3. Ensure dark mode variants exist
4. Test contrast ratios for accessibility
5. Apply smooth transitions to interactive elements
6. Use semantic HTML for structure

---

**Version**: 1.0
**Last Updated**: January 2026
**Framework**: Astro + Tailwind CSS
