'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LandingNavbar from '@/components/landing-navbar';
import FloatingDockDemo from '@/components/floating-dock-demo';

export default function GlobalNavigation() {
  // State to track scroll position
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollThreshold = 300; // Show floating dock after scrolling 300px

  useEffect(() => {
    // Set mounted state
    setMounted(true);
    
    // Add scroll event listener only on client side
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > scrollThreshold);
      }
    };

    // Only add event listeners on client side
    if (typeof window !== 'undefined') {
      // Initial check
      handleScroll();
      
      // Add event listener
      window.addEventListener('scroll', handleScroll);
      
      // Cleanup
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
    </>
  );
}
