"use client";
import React from "react";
import { Boxes, BoxesVariant, BoxesAnimation, BoxesSize } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "motion/react";

interface BackgroundBoxesVariantProps {
  title: string;
  description: string;
  variant: BoxesVariant;
  animation: BoxesAnimation;
  size?: BoxesSize;
  rows?: number;
  cols?: number;
  showIcons?: boolean;
  className?: string;
}

export function BackgroundBoxesVariant({
  title,
  description,
  variant,
  animation,
  size = "small",
  rows = 80,
  cols = 50,
  showIcons = true,
  className,
}: BackgroundBoxesVariantProps) {
  const [ref, isInView] = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative h-64 overflow-hidden bg-slate-900 rounded-lg border border-slate-800",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        borderColor: "rgba(100, 100, 255, 0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {/* Only render Boxes when in viewport */}
      {isInView && (
        <Boxes
          variant={variant}
          animation={animation}
          size={size}
          rows={rows}
          cols={cols}
          showIcons={showIcons}
        />
      )}
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
        <motion.h3 
          className="text-xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-sm text-white/70"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
