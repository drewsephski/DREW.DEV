"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import LandingNavbar from "@/components/landing-navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { throttle } from "@/lib/utils";
import {
  IconHome,
  IconFileText,
  IconComponents,
  IconCreditCard,
  IconNewSection,
} from "@tabler/icons-react";

export default function GlobalNavigation() {
  // State to track scroll position
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollThreshold = 100; // Show floating dock after scrolling 100px

  // Define navigation items
  const navItems = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Documentation",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/demo",
    },
    {
      title: "Components",
      icon: (
        <IconComponents className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/demo",
    },
    {
      title: "Blogs",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: "Pricing",
      icon: (
        <IconCreditCard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pricing",
    },
  ];

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    throttle(() => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > scrollThreshold);
    }, 100)();
  }, [scrollThreshold]);

  useEffect(() => {
    setMounted(true);

    // Set initial scroll position
    setScrolled(window.scrollY > scrollThreshold);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, scrollThreshold]);

  // Return null during server-side rendering to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Navbar - Hide when scrolled */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <LandingNavbar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Dock - Show when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <FloatingDock
              items={navItems}
              desktopClassName="shadow-lg border border-white/10"
              mobileClassName=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
