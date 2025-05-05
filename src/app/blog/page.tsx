"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

export default function BlogIndexPage() {
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
      <div className="z-10 w-full items-center justify-between font-mono text-sm relative">

        <div className="max-w-6xl mx-auto mt-16 mb-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              <EnhancedTextEffect
                words="Design System Blog"
                duration={0.3}
                variant="combined"
                textSize="4xl"
                fontWeight="bold"
                threshold={0.1}
                rootMargin="50px"
              />
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              <EnhancedTextEffect
                words="Insights, tutorials, and behind-the-scenes looks at building modern UI components and design systems."
                duration={0.2}
                variant="reveal"
                textSize="lg"
                threshold={0.1}
                rootMargin="20px"
              />
            </p>
          </motion.div>

          <BentoGrid className="max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <BentoGridItem
                key={i}
                title={post.title}
                description={post.description}
                header={
                  <Link href={post.href} className="block w-full h-full">
                    <div className="w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-primary/10 via-neutral-200/80 to-accent/10 dark:from-primary/20 dark:via-neutral-900/50 dark:to-accent/20 relative overflow-hidden group">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/20 via-neutral-200/90 to-accent/20 dark:from-primary/30 dark:via-neutral-900/60 dark:to-accent/30 transition-opacity duration-700"></div>
                      <div className="absolute -inset-[100%] bg-[length:50%_50%] bg-no-repeat animate-shimmer bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <img src={post.image} alt={post.title} className="w-full h-full object-contain" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white font-medium text-sm">Read Article</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                }
                icon={post.icon}
                className={post.featured ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          ><Button>
            <Link href="/" className="text-white/50 hover:text-white underline transition-colors">
              Return to home
            </Link>
</Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const blogPosts = [
  // General Blog Posts
  {
    title: "Building a Modern Design System Website",
    description: "A comprehensive guide to the development process of each major section of our design system website.",
    href: "/blog/building-design-system-website",
    image: "/images/design-system-website.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    ),
    featured: true,
  },
  {
    title: "Building Interactive UI Components",
    description: "Learn how we built our library of interactive UI components using React and Motion.",
    href: "/blog/building-interactive-ui-components",
    image: "/images/interactive-ui-components.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    featured: true,
  },
  {
    title: "Mastering Design Tokens",
    description: "Explore how design tokens form the foundation of our consistent UI system.",
    href: "/blog/mastering-design-tokens",
    image: "/images/design-tokens-article.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    ),
    featured: false,
  },
  {
    title: "Creating a Modern Pricing Page",
    description: "A detailed look at how we built our pricing page with micro-interactions and animations.",
    href: "/blog/creating-modern-pricing-page",
    image: "/images/pricing-page.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    featured: false,
  },
  {
    title: "Building Bento Grid Layouts",
    description: "How to create flexible and visually appealing Bento grid layouts for modern web interfaces.",
    href: "/blog/building-bento-grid-layouts",
    image: "/images/bento-grid-layouts.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
      </svg>
    ),
    featured: false,
  },

  // Component Documentation Blog Posts
  {
    title: "Badge Component",
    description: "Learn how to implement and customize the Badge component for highlighting status, counts, and labels.",
    href: "/blog/components/badge",
    image: "/images/badge-component.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    ),
    featured: false,
  },
  {
    title: "Glare Card Component",
    description: "Discover how to create stunning card components with interactive glare effects that follow cursor movement.",
    href: "/blog/components/glare-card",
    image: "/images/glare-card-component.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
      </svg>
    ),
    featured: true,
  },
  {
    title: "Text Effects Component",
    description: "Explore various text animation effects including character-by-character generation and reveal animations.",
    href: "/blog/components/text-effects",
    image: "/images/text-effects-component.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    ),
    featured: false,
  },
  {
    title: "Wobble Card Component",
    description: "Learn how to implement 3D wobble card effects with physics-based animations for engaging user interactions.",
    href: "/blog/components/wobble-card",
    image: "/images/wobble-card-component.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
      </svg>
    ),
    featured: false,
  },
  {
    title: "GitHub Button Component",
    description: "Implement a stylish GitHub button with gradient effects and smooth hover animations.",
    href: "/blog/components/github-button",
    image: "/images/github-button-component.svg",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    ),
    featured: false,
  },
];
