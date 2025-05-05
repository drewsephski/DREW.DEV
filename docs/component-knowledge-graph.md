# UI Component Library Knowledge Graph

## Introduction

This document serves as a living knowledge graph of our UI component library. It maps the structure, components, and relationships within the codebase to provide a comprehensive overview of the system architecture.

**Purpose:**
- Document all components and their relationships
- Provide a reference for developers
- Track changes and evolution of the component library
- Facilitate onboarding of new team members

This document should be updated whenever new components are added or existing components are modified.

## Component Categories

Our UI components are organized into the following categories:

| Category | Description | Location |
|----------|-------------|----------|
| Buttons | Interactive button components | `src/components/ui/buttons` |
| Cards | Content container components with various effects | `src/components/ui/cards` |
| Effects | Animation and visual effect components | `src/components/ui/effects` |
| DataDisplay | Components for displaying data and information | `src/components/ui/data-display` |
| Accordion | Collapsible content section components | `src/components/ui/accordion` |
| Blog | Blog-specific components | `src/components/ui/blog` |
| Layout | Page structure and layout components | `src/components/ui` |

## Individual Components

### Buttons

| Component | Description | Props | Location |
|-----------|-------------|-------|----------|
| Button | Standard button with multiple variants | variant, size, isLoading, leftIcon, rightIcon, glowEffect | `src/components/ui/buttons/button.tsx` |
| GitHubButton | Specialized button for GitHub links with gradient animation | - | `src/components/ui/buttons/github-button.tsx` |

### Cards

| Component | Description | Props | Location |
|-----------|-------------|-------|----------|
| Card | Standard card component | variant, size, interactive, gradientFrom, gradientTo, hoverEffect | `src/components/ui/cards/card.tsx` |
| GlareCard | Card with glare effect on hover | glareColor, borderColor | `src/components/ui/glare-card.tsx` |
| AceternityGlareCard | Enhanced glare card from Aceternity UI | - | `src/components/ui/cards/aceternity-glare-card.tsx` |
| WobbleCard | Card with wobble effect on interaction | - | `src/components/ui/cards/wobble-card.tsx` |
| ThreeDCard | Card with 3D rotation effect | depth, backgroundColor | `src/components/ui/cards/3d-card.tsx` |
| GlassCard | Card with glass morphism effect | blurStrength, borderOpacity, backgroundOpacity | `src/components/ui/cards/glass-card.tsx` |
| EnhancedCard | Card with multiple enhanced effects | accentColor, glowIntensity, borderGlow, depth, glassEffect | `src/components/ui/cards/enhanced-card.tsx` |

### Effects

| Component | Description | Props | Location |
|-----------|-------------|-------|----------|
| TextGenerateEffect | Animates text generation with blur effect | words, filter, duration | `src/components/ui/text-generate-effect.tsx` |
| TextReveal | Reveals text with animation when scrolled into view | threshold, rootMargin | `src/components/ui/text-reveal.tsx` |
| EnhancedTextEffect | Combines text reveal and generation effects | words, variant, textSize, textColor, fontWeight | `src/components/ui/effects/enhanced-text-effect.tsx` |
| BackgroundGradientAnimation | Animated gradient background | gradientBackgroundStart, gradientBackgroundEnd, interactive | `src/components/ui/background-gradient-animation.tsx` |

### Data Display

| Component | Description | Props | Location |
|-----------|-------------|-------|----------|
| Badge | Status indicator component | variant, size | `src/components/ui/data-display/badge.tsx` |

### Accordion

| Component | Description | Props | Location |
|-----------|-------------|-------|----------|
| AccordionItem | Individual accordion item | title, isOpen, onToggle | `src/components/ui/accordion/accordion.tsx` |
| Accordion | Container for accordion items | items, allowMultiple | `src/components/ui/accordion/accordion.tsx` |

### Layout

| Component | Description | Props | Location |
|-----------|-------------|-------|----------|
| BentoGrid | Masonry-style grid layout | - | `src/components/ui/bento-grid.tsx` |
| BentoGridItem | Individual item in BentoGrid | title, description, header, icon | `src/components/ui/bento-grid.tsx` |
| ResizableNavbar | Responsive navigation bar | - | `src/components/ui/resizable-navbar.tsx` |
| LandingNavbar | Main navigation component | - | `src/components/landing-navbar.tsx` |
| FloatingDock | Interactive navigation dock | items, desktopClassName, mobileClassName | `src/components/ui/floating-dock.tsx` |
| SpotlightCursor | Creates spotlight effect following cursor | radius, brightness, color, smoothing | `src/components/SpotlightCursor.tsx` |
| HeroParallax | Parallax scrolling hero section | products | `src/components/ui/hero-parallax.tsx` |

### Other Components

| Component | Description | Props | Location |
|-----------|-------------|-------|----------|
| FeaturedArticles | Displays featured blog articles | - | `src/components/featured-articles.tsx` |
| Icon | Modern icon component using Tabler Icons | name, size, strokeWidth, color, animation, showBackground, backgroundShape | `src/components/ui/icon.tsx` |
| HeroParallaxDemo | Demo component for HeroParallax | - | `src/components/hero-parallax-demo.tsx` |
| FloatingDockDemo | Demo component for FloatingDock | - | `src/components/floating-dock-demo.tsx` |

## Pages

| Page | Description | Components Used | Location |
|------|-------------|-----------------|----------|
| HomePage | Main landing page | BentoGrid, GitHubButton, BackgroundGradientAnimation, FeaturedArticles, LandingNavbar | `src/app/page.tsx` |
| DemoPage | Component library showcase | Button, GitHubButton, Badge, Card | `src/app/demo/page.tsx` |
| BlogIndexPage | Lists all blog articles | BentoGrid, BackgroundGradientAnimation, FloatingDock | `src/app/blog/page.tsx` |
| ComponentsBlogPage | Blog page about components | FloatingDock, BentoGrid | `src/app/blog/components/page.tsx` |
| PricingPage | Displays pricing plans | AceternityGlareCard, EnhancedTextEffect, BackgroundGradientAnimation | `src/app/pricing/page.tsx` |

## Utilities and Hooks

| Utility/Hook | Description | Used By | Location |
|--------------|-------------|---------|----------|
| cn | Combines class names using clsx and tailwind-merge | Most components | `src/lib/utils.ts` |
| useSpotlightEffect | Custom hook for spotlight cursor effect | SpotlightCursor | `src/hooks/use-spotlight.ts` |

## External Libraries

| Library | Description | Version | Used For |
|---------|-------------|---------|----------|
| React | Core UI library | 19.0.0-rc | All components |
| NextJS | React framework | 15.0.3 | Routing, server components |
| MotionReact | Animation library | - | Component animations |
| TailwindCSS | Utility-first CSS framework | 4.0 | Styling |
| TablerIcons | Icon library | 3.31.0 | Modern SVG icons |
| LucideReact | Icon library | 0.507.0 | Alternative icon set |

## Styling Elements

| Element | Description | Location |
|---------|-------------|----------|
| TailwindConfig | Tailwind CSS configuration | `tailwind.config.js` |
| GlobalCSS | Global CSS styles | `src/app/globals.css` |
| CSSVariables | CSS custom properties | Defined in `:root` in `globals.css` |

## Component Relationships

### Inheritance Relationships
- GitHubButton extends Button
- AceternityGlareCard extends GlareCard

### Composition Relationships
- EnhancedTextEffect combines TextGenerateEffect and TextReveal
- BentoGrid uses BentoGridItem
- Accordion uses AccordionItem
- FeaturedArticles uses BentoGrid, BentoGridItem, and EnhancedTextEffect
- HeroParallaxDemo uses HeroParallax
- FloatingDockDemo uses FloatingDock

### Page-Component Relationships
- HomePage uses BentoGrid, GitHubButton, BackgroundGradientAnimation, FeaturedArticles, LandingNavbar, FloatingDockDemo
- DemoPage uses Button, GitHubButton, Badge, Card
- BlogIndexPage uses BentoGrid, BackgroundGradientAnimation, FloatingDock
- ComponentsBlogPage uses FloatingDock, BentoGrid
- PricingPage uses AceternityGlareCard, EnhancedTextEffect, BackgroundGradientAnimation
- HeroParallaxPage uses HeroParallaxDemo, BackgroundGradientAnimation

## Guidelines for Updating This Document

When adding a new component or modifying an existing one, please update this document as follows:

1. **New Component**:
   - Add it to the appropriate category table
   - Document its props and location
   - Add any relationships with other components

2. **Modified Component**:
   - Update its description, props, or location as needed
   - Update any relationships that have changed

3. **New Category**:
   - Add a new section for the category
   - Create a table for components in that category

4. **New Page**:
   - Add it to the Pages table
   - Document which components it uses

Remember that this document is a living knowledge graph that should evolve with the codebase.

## Best Practices for Avoiding Hydration Errors

When developing components, follow these best practices to avoid hydration errors:

1. **Client-Side Only Components**:
   - Use the `'use client'` directive for components that use browser APIs
   - Implement a mounting pattern with `useState` and `useEffect` for components that should only render on the client
   - Return `null` or a simple placeholder during server-side rendering

2. **Avoid Random Values in Initial Render**:
   - Don't use `Math.random()`, `Date.now()`, or other non-deterministic values during initial render
   - If needed, use these values only after the component has mounted on the client

3. **Conditional Rendering**:
   - Avoid `typeof window !== 'undefined'` checks in the render function
   - Instead, use the mounting pattern to conditionally render components

4. **Browser Extensions**:
   - Be aware that browser extensions can modify the DOM and cause hydration errors
   - Use a cleanup script to remove extension-added attributes before hydration

5. **Consistent HTML Structure**:
   - Ensure the HTML structure is consistent between server and client
   - Avoid dynamic class names or styles that might differ between server and client

Example of the mounting pattern:
```tsx
const ClientComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a simple placeholder
  }

  return <div>Client-side rendered content</div>;
};
```
