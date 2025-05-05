'use client';

import Image from "next/image";
import Link from "next/link";
import BentoGridDemo from "@/components/bento-grid-demo";
import WobbleCardDemo from "@/components/wobble-card-demo";
import LandingNavbar from "@/components/landing-navbar";
import TextGenerateEffectDemo from "@/components/text-generate-effect-demo";
import FeaturedArticles from "@/components/featured-articles";
import FloatingDockDemo from "@/components/floating-dock-demo";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { AnimatedIcon } from "@/components/ui/effects/animated-icon";
import { EnhancedCard } from "@/components/ui/cards/enhanced-card";
// Fix GitHubButton import to use default export
import GitHubButton from "@/components/ui/buttons/github-button";
import Icon from "@/components/ui/icon";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  // Force client-side rendering for dark mode
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollThreshold = 300; // Show floating dock after scrolling 300px

  useEffect(() => {
    setMounted(true);
    // Add dark class to body for dark mode
    document.documentElement.classList.add('dark');

    // Add scroll event listener
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen font-sans">
      {/* Interactive gradient background animation */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 30)"
        gradientBackgroundEnd="rgb(0, 10, 60)"
        firstColor="0, 50, 150"
        secondColor="30, 70, 200"
        thirdColor="0, 100, 180"
        fourthColor="10, 30, 120"
        fifthColor="50, 90, 160"
        pointerColor="70, 130, 210"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
      />

      {/* Navbar - Hide when scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <LandingNavbar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Dock - Show when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <FloatingDockDemo />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-32">
        <header className="w-full flex flex-col items-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={360}
              height={76}
              priority
            />
          </motion.div>
        </header>

        <main className="flex flex-col gap-[32px] items-center w-full max-w-7xl mx-auto">
          <motion.div
            className="text-2xl md:text-3xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EnhancedTextEffect
              words="Premium UI Components"
              duration={0.3}
              variant="combined"
              textSize="2xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </motion.div>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <GitHubButton
              href="https://github.com/drewsephski/"
              text="GitHub"
              showStar={true}
              className="transform font-extrabold hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            className="w-full backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-2xl shadow-xl"
            id="bento-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transform: "translateY(-5px)",
              transition: { duration: 0.3 }
            }}
          >
            <BentoGridDemo />
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl font-bold text-center mt-16 mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <EnhancedTextEffect
              words="Interactive Component Showcase"
              duration={0.3}
              variant="combined"
              textSize="3xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 }
            }}
          >
            <WobbleCardDemo />
          </motion.div>



          <motion.div
            className="text-3xl md:text-4xl font-bold text-center mt-16 mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <EnhancedTextEffect
              words="Advanced Design Token Management"
              duration={0.3}
              variant="combined"
              textSize="3xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </motion.div>

          <motion.div
            className="w-full backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transform: "translateY(-5px)",
              transition: { duration: 0.3 }
            }}
          >
            <TextGenerateEffectDemo />
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl font-bold text-center mt-16 mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <EnhancedTextEffect
              words="Premium Card Variants & Effects"
              duration={0.3}
              variant="combined"
              textSize="3xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 md:px-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {/* Enhanced Card 1 */}
            <AceternityGlareCard
              className="flex flex-col items-center justify-center text-blue-200"
              contentClassName="flex flex-col items-center justify-center p-4"
            >
              <div className="mb-3 transform transition-all duration-300 group-hover:scale-110 bg-indigo-500/20 p-3 rounded-full">
                <AnimatedIcon
                  src="/images/cloud-deploy.svg"
                  alt="Cloud Deployment Illustration"
                  size={48}
                  animationStyle="pulse"
                  color="#6366f1"
                  className="opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-base font-bold mb-2 transition-all duration-300 group-hover:text-indigo-300 tracking-wide">UI Components</h3>
              <div className="text-xs text-center text-blue-100/90 hover:text-blue-200 max-w-[90%] mx-auto leading-relaxed">
                <EnhancedTextEffect
                  words="Explore our extensive library of ready-to-use UI components for modern web applications."
                  duration={0.2}
                  variant="generate"
                  textSize="xs"
                  threshold={0.1}
                  rootMargin="20px"
                />
              </div>
            </AceternityGlareCard>

            {/* Enhanced Card 2 */}
            <AceternityGlareCard
              className="flex flex-col items-center justify-center text-blue-200"
              contentClassName="flex flex-col items-center justify-center p-4"
            >
              <div className="mb-3 transform transition-all duration-300 group-hover:scale-110 bg-cyan-500/20 p-3 rounded-full">
                <AnimatedIcon
                  src="/images/code-docs.svg"
                  alt="Code Documentation Illustration"
                  size={48}
                  animationStyle="flip"
                  color="#00f2ff"
                  className="opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-base font-bold mb-2 transition-all duration-300 group-hover:text-cyan-300 tracking-wide">Design Tokens</h3>
              <div className="text-xs text-center text-blue-100/90 hover:text-blue-200 max-w-[90%] mx-auto leading-relaxed">
                <EnhancedTextEffect
                  words="Manage colors, typography, spacing, and other design variables with our powerful token system."
                  duration={0.2}
                  variant="generate"
                  textSize="xs"
                  threshold={0.1}
                  rootMargin="20px"
                />
              </div>
            </AceternityGlareCard>

            {/* Enhanced Card 3 */}
            <AceternityGlareCard
              className="flex flex-col items-center justify-center text-blue-200"
              contentClassName="flex flex-col items-center justify-center p-4"
            >
              <div className="mb-3 transform transition-all duration-300 group-hover:scale-110 bg-pink-500/20 p-3 rounded-full">
                <AnimatedIcon
                  src="/images/learn-tech.svg"
                  alt="Tech Learning Illustration"
                  size={48}
                  animationStyle="float"
                  color="#ec4899"
                  className="opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-base font-bold mb-2 transition-all duration-300 group-hover:text-pink-300 tracking-wide">Code Generation</h3>
              <div className="text-xs text-center text-blue-100/90 hover:text-blue-200 max-w-[90%] mx-auto leading-relaxed">
                <EnhancedTextEffect
                  words="Export to React, Vue, or Angular components with our intelligent code generation system."
                  duration={0.2}
                  variant="generate"
                  textSize="xs"
                  threshold={0.1}
                  rootMargin="20px"
                />
              </div>
            </AceternityGlareCard>
          </motion.div>
        </main>

        <motion.footer
          className="flex flex-col gap-8 items-center justify-center py-12 w-full max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="text-2xl md:text-3xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <EnhancedTextEffect
              words="Explore Our Premium Resources"
              duration={0.3}
              variant="combined"
              textSize="2xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </motion.div>

          <p className="text-sm text-foreground/70 mb-6 max-w-2xl text-center">
            <span className="text-blue-200 font-extrabold text-lg">DesignSystem.io</span> —
            <EnhancedTextEffect
              words="Build beautiful, consistent interfaces faster with our comprehensive design system tools and premium component library. Elevate your design workflow today."
              duration={0.2}
              variant="reveal"
              textSize="sm"
              threshold={0.1}
              rootMargin="20px"
            />
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full px-4 md:px-8 max-w-5xl mx-auto">
            {/* Documentation Card */}
            <EnhancedCard
              as="a"
              href="/demo"
              className="flex flex-col items-center justify-center p-5 h-[200px] text-white group"
              accentColor="#00f2ff"
              glowIntensity={0.6}
              depth={10}
              glassEffect={true}
            >
              <div className="mb-4 transform transition-all duration-300 group-hover:scale-110 bg-cyan-500/10 p-3 rounded-full">
                <Icon
                  name="IconFileText"
                  size={48}
                  color="#00f2ff"
                  animation="pulse"
                  animateOnHover={true}
                  strokeWidth={1.5}
                  className="opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-base font-bold mb-2 transition-all duration-300 group-hover:text-cyan-300 tracking-wide">Documentation</h3>
              <div className="text-xs text-center text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">
                <EnhancedTextEffect
                  words="Comprehensive guides, tutorials, and API references for all components."
                  duration={0.2}
                  variant="generate"
                  textSize="xs"
                  threshold={0.1}
                  rootMargin="20px"
                />
              </div>
            </EnhancedCard>

            {/* Component Library Card */}
            <EnhancedCard
              as="a"
              href="/demo"
              className="flex flex-col items-center justify-center p-5 h-[200px] text-white group"
              accentColor="#6366f1"
              glowIntensity={0.6}
              depth={10}
              glassEffect={true}
            >
              <div className="mb-4 transform transition-all duration-300 group-hover:scale-110 bg-indigo-500/10 p-3 rounded-full">
                <Icon
                  name="IconComponents"
                  size={48}
                  color="#6366f1"
                  animation="spin"
                  animateOnHover={true}
                  strokeWidth={1.5}
                  className="opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-base font-bold mb-2 transition-all duration-300 group-hover:text-indigo-300 tracking-wide">Component Library</h3>
              <div className="text-xs text-center text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">
                <EnhancedTextEffect
                  words="Ready-to-use UI components with advanced animations and interactions."
                  duration={0.2}
                  variant="generate"
                  textSize="xs"
                  threshold={0.1}
                  rootMargin="20px"
                />
              </div>
            </EnhancedCard>

            {/* Pricing & Plans Card */}
            <EnhancedCard
              as="a"
              href="/pricing"
              className="flex flex-col items-center justify-center p-5 h-[200px] text-white group"
              accentColor="#ec4899"
              glowIntensity={0.6}
              depth={10}
              glassEffect={true}
            >
              <div className="mb-4 transform transition-all duration-300 group-hover:scale-110 bg-pink-500/10 p-3 rounded-full">
                <Icon
                  name="IconCreditCard"
                  size={48}
                  color="#ec4899"
                  animation="float"
                  animateOnHover={true}
                  strokeWidth={1.5}
                  className="opacity-90 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-base font-bold mb-2 transition-all duration-300 group-hover:text-pink-300 tracking-wide">Pricing & Plans</h3>
              <div className="text-xs text-center text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">
                <EnhancedTextEffect
                  words="Flexible pricing options for teams of all sizes with enterprise-grade support →"
                  duration={0.2}
                  variant="generate"
                  textSize="xs"
                  threshold={0.1}
                  rootMargin="20px"
                />
              </div>
            </EnhancedCard>
          </div>

          {/* Featured Articles Section */}
          <motion.div
            className="mt-16 w-full backdrop-blur-sm bg-white/5 dark:bg-black/20 p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transform: "translateY(-5px)",
              transition: { duration: 0.3 }
            }}
          >
            <FeaturedArticles />
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
}
