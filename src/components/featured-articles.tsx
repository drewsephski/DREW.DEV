import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { motion } from "motion/react";
import Image from "next/image";
import Icon, { IconAnimation } from "@/components/ui/icon";
import * as TablerIcons from '@tabler/icons-react';

// Define types for our featured articles
interface FeaturedArticle {
  title: string;
  description: string;
  href: string;
  image: string;
  iconName: keyof typeof TablerIcons;
  iconColor: string;
  iconAnimation: IconAnimation;
  featured: boolean;
  bgColor: string;
}

export default function FeaturedArticles() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-accent dark:from-primary dark:via-foreground dark:to-accent">
          <EnhancedTextEffect
            words="Featured Articles"
            duration={0.3}
            variant="combined"
            textSize="2xl"
            fontWeight="bold"
            threshold={0.1}
            rootMargin="50px"
          />
        </h2>
        <p className="text-sm text-foreground/70 max-w-2xl mx-auto">
          <EnhancedTextEffect
            words="Dive deeper into our design system with these in-depth articles on component development, design tokens, and more."
            duration={0.2}
            variant="reveal"
            textSize="sm"
            threshold={0.1}
            rootMargin="20px"
          />
        </p>
      </div>

      <BentoGrid className="max-w-6xl mx-auto">
        {featuredArticles.map((article, i) => (
          <BentoGridItem
            key={i}
            title={article.title}
            description={article.description}
            header={
              <Link href={article.href} className="block w-full h-full">
                <div className={`w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br ${article.bgColor} relative overflow-hidden group`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/20 via-neutral-200/90 to-accent/20 dark:from-primary/30 dark:via-neutral-900/60 dark:to-accent/30 transition-opacity duration-700"></div>
                  <div className="absolute -inset-[100%] bg-[length:50%_50%] bg-no-repeat animate-shimmer bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"></div>

                  {/* Enhanced image container with icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Decorative icon watermark */}
                      <div className="absolute bottom-2 right-2 opacity-20 transform rotate-12 scale-150">
                        <Icon
                          name={article.iconName}
                          size={48}
                          color={article.iconColor}
                          strokeWidth={1}
                          className="opacity-30"
                        />
                      </div>
                    </div>

                    {/* Hover overlay with improved animation */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex flex-col items-center gap-2">
                        <Icon
                          name={article.iconName}
                          size={32}
                          color={article.iconColor}
                          animation={article.iconAnimation}
                          className="opacity-90"
                        />
                        <span className="text-white font-medium text-sm px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md">Read Article</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            }
            icon={
              <Icon
                name={article.iconName}
                size={28}
                color={article.iconColor}
                animation={article.iconAnimation}
                animateOnHover={true}
                showBackground={true}
                backgroundShape="circle"
                background={`${article.iconColor}20`}
                strokeWidth={1.5}
                className="opacity-90 group-hover:opacity-100"
              />
            }
            className={article.featured ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      <div className="text-center mt-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            All Blogs
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

const featuredArticles: FeaturedArticle[] = [
  {
    title: "Building a Modern Design System Website",
    description: "A comprehensive guide to the development process of each major section of our design system website.",
    href: "/blog/building-design-system-website",
    image: "/images/design-system-website.svg",
    iconName: "IconLayoutDashboard",
    iconColor: "#3b82f6",
    iconAnimation: "float",
    featured: true,
    bgColor: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Building Interactive UI Components",
    description: "Learn how we built our library of interactive UI components using React and Motion.",
    href: "/blog/building-interactive-ui-components",
    image: "/images/interactive-ui-components.svg",
    iconName: "IconComponents",
    iconColor: "#8b5cf6",
    iconAnimation: "pulse",
    featured: true,
    bgColor: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Mastering Design Tokens",
    description: "Explore how design tokens form the foundation of our consistent UI system.",
    href: "/blog/mastering-design-tokens",
    image: "/images/design-tokens-article.svg",
    iconName: "IconPalette",
    iconColor: "#ec4899",
    iconAnimation: "spin",
    featured: false,
    bgColor: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Creating a Modern Pricing Page",
    description: "A detailed look at how we built our pricing page with micro-interactions and animations.",
    href: "/blog/creating-modern-pricing-page",
    image: "/images/pricing-page.svg",
    iconName: "IconCreditCard",
    iconColor: "#10b981",
    iconAnimation: "bounce",
    featured: false,
    bgColor: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Optimizing Performance in React Applications",
    description: "Learn techniques for optimizing the performance of your React applications with our component library.",
    href: "/blog/optimizing-performance",
    image: "/images/design-system-website.svg",
    iconName: "IconSpeedboat",
    iconColor: "#f59e0b",
    iconAnimation: "wiggle",
    featured: false,
    bgColor: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Accessibility Best Practices",
    description: "Ensure your applications are accessible to all users with our comprehensive accessibility guide.",
    href: "/blog/accessibility-best-practices",
    image: "/images/design-system-website.svg",
    iconName: "IconAccessible",
    iconColor: "#ef4444",
    iconAnimation: "ping",
    featured: false,
    bgColor: "from-red-500/20 to-orange-500/20",
  },
];
