"use client";
import React, { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "./text-generate-effect";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  filter?: boolean;
  duration?: number;
}

export function TextReveal({
  children,
  className,
  threshold = 0.2,
  rootMargin = "0px",
  filter = true,
  duration = 0.5,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Always start with false for both server and client
  const [isVisible, setIsVisible] = useState(false);
  // Add a mounted state to handle client-side only code
  const [isMounted, setIsMounted] = useState(false);

  // First useEffect just to mark component as mounted (client-side only)
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

  // Render the same initial state for both server and client
  return (
    <span ref={ref} className={cn("overflow-hidden inline-block", className)}>
      {isVisible ? (
        <TextGenerateEffect
          words={children}
          className={className}
          filter={filter}
          duration={duration}
        />
      ) : (
        <span className="opacity-0">{children}</span>
      )}
    </span>
  );
}
