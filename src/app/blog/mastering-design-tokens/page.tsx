"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import LandingNavbar from "@/components/landing-navbar";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";

export default function MasteringDesignTokensBlog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 20)"
        gradientBackgroundEnd="rgb(0, 0, 40)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="200, 50, 50"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
      />
      <div className="z-10 max-w-4xl w-full items-center justify-between font-mono text-sm relative">
        <LandingNavbar />

        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto mt-16 mb-32 bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Mastering Design Tokens: Building Consistent UI Systems
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Design tokens are the foundation of any robust design system, serving as the single source of truth for your application's visual language. In this comprehensive guide, we'll explore how we implemented our design token system and how it powers our component library.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">What Are Design Tokens?</h2>
              
              <p>
                Design tokens are named entities that store visual design attributes. They help you maintain a consistent visual language across your application by centralizing values for colors, typography, spacing, shadows, and other design properties.
              </p>
              
              <p>
                Instead of hardcoding values like <code>#0070f3</code> or <code>16px</code> throughout your codebase, you reference tokens like <code>--color-primary</code> or <code>--space-4</code>, making your design system more maintainable and consistent.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Our Design Token Architecture</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">1. Token Categories</h3>
              
              <p>
                We organize our design tokens into several key categories:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Colors:</strong> Primary, secondary, accent, and semantic colors (success, warning, error)</li>
                <li><strong>Typography:</strong> Font families, sizes, weights, line heights, and letter spacing</li>
                <li><strong>Spacing:</strong> Consistent spacing values for margins, padding, and layout</li>
                <li><strong>Borders:</strong> Border widths, radii, and styles</li>
                <li><strong>Shadows:</strong> Elevation levels and shadow styles</li>
                <li><strong>Animation:</strong> Duration, easing functions, and delay values</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">2. Token Naming Convention</h3>
              
              <p>
                We follow a structured naming convention for our tokens to ensure clarity and consistency:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`// Format: --category-property-variant-state
--color-primary-500
--color-primary-500-hover
--space-4
--font-size-lg
--shadow-md
--animation-duration-fast`}
              </pre>
              
              <p>
                This naming convention makes it easy to understand what each token represents and how it should be used.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">3. Implementation with CSS Variables</h3>
              
              <p>
                We implement our design tokens using CSS custom properties (variables) for maximum flexibility and browser support:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`:root {
  /* Colors */
  --color-primary-50: #f0f9ff;
  --color-primary-100: #e0f2fe;
  --color-primary-500: #0ea5e9;
  --color-primary-600: #0284c7;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Roboto Mono', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  
  /* ... other tokens */
}`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Integration with Tailwind CSS</h2>
              
              <p>
                We extend Tailwind CSS with our design tokens to ensure consistency between our token system and utility classes:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
        },
        // ... other colors
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        4: 'var(--space-4)',
        8: 'var(--space-8)',
        // ... other spacing values
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: '1rem' }],
        sm: ['var(--font-size-sm)', { lineHeight: '1.25rem' }],
        base: ['var(--font-size-base)', { lineHeight: '1.5rem' }],
        lg: ['var(--font-size-lg)', { lineHeight: '1.75rem' }],
        xl: ['var(--font-size-xl)', { lineHeight: '1.75rem' }],
        // ... other font sizes
      },
      // ... other theme extensions
    },
  },
  // ... other Tailwind config
};`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Theme Switching with Design Tokens</h2>
              
              <p>
                One of the most powerful aspects of design tokens is their ability to facilitate theme switching. We implement dark mode and other themes by changing token values rather than rewriting component styles:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`:root {
  /* Light theme (default) */
  --color-background: #ffffff;
  --color-foreground: #1a1a1a;
  --color-primary: #0ea5e9;
  /* ... other tokens */
}

.dark {
  /* Dark theme */
  --color-background: #121212;
  --color-foreground: #f5f5f5;
  --color-primary: #38bdf8;
  /* ... other tokens */
}`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Benefits of Our Design Token System</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consistency:</strong> Ensures visual consistency across all components and pages</li>
                <li><strong>Maintainability:</strong> Makes design updates easier by changing values in one place</li>
                <li><strong>Scalability:</strong> Supports growing design systems with a structured approach</li>
                <li><strong>Theming:</strong> Facilitates theme switching and customization</li>
                <li><strong>Documentation:</strong> Serves as self-documenting code for design decisions</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                A well-implemented design token system is the foundation of any successful design system. By centralizing design decisions into tokens, we've created a more consistent, maintainable, and scalable UI library that can adapt to changing design requirements while maintaining visual coherence.
              </p>
              
              <p>
                Our approach to design tokens has enabled us to build a component library that not only looks great but is also flexible enough to support multiple themes and customization options for our users.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Link href="/demo" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Explore our design token system in action →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
