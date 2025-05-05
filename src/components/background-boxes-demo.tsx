"use client";
import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

export default function BackgroundBoxesDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Optimize hover handlers with useCallback
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Implement true Intersection Observer for performance
  useEffect(() => {
    if (!componentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);

        // Only set visible if it's in view and hasn't been set before
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // trigger when 10% of the element is visible
      }
    );

    observer.observe(componentRef.current);

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [isVisible]);

  // Memoize custom colors for better performance
  const customColors = useMemo(() => [
    "#93c5fd", // blue-300
    "#f9a8d4", // pink-300
    "#86efac", // green-300
    "#fde047", // yellow-300
    "#fca5a5", // red-300
    "#d8b4fe", // purple-300
  ], []);

  // Reduce animation complexity for users who prefer reduced motion
  const animationSettings = useMemo(() => ({
    // Disable or simplify animations for users who prefer reduced motion
    scale: prefersReducedMotion ? 1 : (isHovered ? 1.05 : 1),
    textShadow: prefersReducedMotion ? "none" : (isHovered ? "0 0 8px rgba(255, 255, 255, 0.5)" : "none"),
    opacity: prefersReducedMotion ? 1 : (isHovered ? 1 : 0.8),
  }), [isHovered, prefersReducedMotion]);

  // Optimize row/column count for better performance
  const optimizedRowCount = useMemo(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 150,
  []);

  const optimizedColCount = useMemo(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 100,
  []);

  return (
    <motion.div
      ref={componentRef}
      className="h-96 sm:h-[450px] md:h-[500px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg border border-slate-800 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReducedMotion ? {} : {
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        borderColor: "rgba(100, 100, 255, 0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Only render Boxes when component is in viewport and visible */}
      {isVisible && isInView && (
        <Boxes
          rows={optimizedRowCount}
          cols={optimizedColCount}
          colors={customColors}
          ariaLabel="Interactive grid animation background"
        />
      )}

      <div className="relative z-20 flex flex-col items-center max-w-md px-4 text-center">
        <motion.h1
          className={cn("md:text-4xl text-2xl font-bold text-white mb-4")}
          animate={{
            scale: animationSettings.scale,
            textShadow: animationSettings.textShadow
          }}
          transition={{ duration: 0.3 }}
        >
          Interactive Grid Animation
        </motion.h1>

        <motion.p
          className="text-center text-sm md:text-base text-neutral-300 max-w-sm"
          animate={{ opacity: animationSettings.opacity }}
          transition={{ duration: 0.3 }}
        >
          Hover over the grid cells to see them change colors dynamically.
          This component uses Framer Motion for smooth animations and interactions.
        </motion.p>

        <motion.button
          className="mt-6 px-4 py-2 bg-blue-600/80 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors duration-300"
          whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Explore Component
        </motion.button>
      </div>
    </motion.div>
  );
}
