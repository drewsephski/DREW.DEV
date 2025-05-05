"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

/**
 * @typedef {Object} LoadingStateProps
 * @property {string} [className]
 * @property {('sm'|'md'|'lg')} [size]
 * @property {('spinner'|'dots'|'pulse')} [variant]
 * @property {string} [text]
 */

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {('sm'|'md'|'lg')} [props.size='md']
 * @param {('spinner'|'dots'|'pulse')} [props.variant='spinner']
 * @param {string} [props.text]
 */
export function LoadingState({
  className,
  size = "md",
  variant = "spinner",
  text,
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={cn("rounded-full bg-blue-500", sizeClasses.sm)}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        );
      case "pulse":
        return (
          <motion.div
            className={cn("rounded-full bg-blue-500", sizeClasses[size])}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      case "spinner":
      default:
        return (
          <div
            className={cn(
              "border-4 border-neutral-200 border-t-blue-500 rounded-full animate-spin",
              sizeClasses[size]
            )}
          />
        );
    }
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      {renderLoader()}
      {text && <p className="text-sm text-neutral-500 dark:text-neutral-400">{text}</p>}
    </div>
  );
}
