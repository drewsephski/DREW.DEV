"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FloatingDock, blogDockItems } from "@/components/ui/navigation/floating-dock";
import Image from "next/image";

export default function ComponentsBlogIndexPage() {
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
        <FloatingDock items={blogDockItems} />

        <div className="max-w-6xl mx-auto mt-16 mb-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              <EnhancedTextEffect
                words="Component Library"
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
                words="Explore our collection of reusable UI components with detailed implementation guides, usage examples, and best practices."
                duration={0.2}
                variant="reveal"
                textSize="lg"
                threshold={0.1}
                rootMargin="20px"
              />
            </p>
          </motion.div>

          <BentoGrid className="max-w-6xl mx-auto">
            {componentPosts.map((post, i) => (
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
          >
            <Link href="/blog" className="text-white/50 hover:text-white underline transition-colors">
              Back to All Blogs
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

const componentPosts = [
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
    featured: true,
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
