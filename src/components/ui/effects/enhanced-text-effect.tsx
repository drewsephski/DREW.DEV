"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

interface EnhancedTextEffectProps {
  words: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  filter?: boolean;
  duration?: number;
  variant?: "reveal" | "generate" | "combined";
  textSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  textColor?: string;
  fontWeight?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

export function EnhancedTextEffect({
  words,
  className,
  threshold = 0.2,
  rootMargin = "0px",
  filter = true,
  duration = 0.5,
  variant = "combined",
  textSize = "base",
  textColor,
  fontWeight = "normal",
}: EnhancedTextEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const wordsArray = words.split(" ");

  // First useEffect to mark component as mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Second useEffect for the intersection observer (client-side only)
  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isMounted, threshold, rootMargin]);

  // Third useEffect for the animation (client-side only)
  useEffect(() => {
    if (!isMounted || !isVisible) return;

    // Different animation based on variant
    if (variant === "reveal" || variant === "combined") {
      animate(
        "span",
        {
          opacity: 1,
          y: 0,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.05),
          ease: [0.2, 0.65, 0.3, 0.9], // Custom easing for smooth animation
        }
      );
    } else {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isMounted, isVisible, animate, filter, duration, variant]);

  // Get text size class
  const getTextSizeClass = () => {
    switch (textSize) {
      case "xs": return "text-xs";
      case "sm": return "text-sm";
      case "base": return "text-base";
      case "lg": return "text-lg";
      case "xl": return "text-xl";
      case "2xl": return "text-2xl";
      case "3xl": return "text-3xl";
      case "4xl": return "text-4xl";
      default: return "text-base";
    }
  };

  // Get font weight class
  const getFontWeightClass = () => {
    switch (fontWeight) {
      case "normal": return "font-normal";
      case "medium": return "font-medium";
      case "semibold": return "font-semibold";
      case "bold": return "font-bold";
      case "extrabold": return "font-extrabold";
      default: return "font-normal";
    }
  };

  // Render the words with animation
  const renderWords = () => {
    return (
      <motion.span ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={`word-${idx}`}
              className={cn(
                "dark:text-white text-black opacity-0",
                textColor && `text-${textColor}`
              )}
              style={{
                filter: filter ? "blur(8px)" : "none",
                ...(variant === "reveal" || variant === "combined" ? { y: "10px" } : {}),
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <span 
      ref={ref} 
      className={cn(
        "inline-block overflow-hidden",
        getTextSizeClass(),
        getFontWeightClass(),
        className
      )}
    >
      {isVisible ? (
        renderWords()
      ) : (
        <span className="opacity-0">{words}</span>
      )}
    </span>
  );
}
