
"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
// Remove the FloatingDock import since it's now handled by GlobalNavigation

interface BlogContainerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  publishDate?: string;
  backgroundOpacity?: number;
}

export function BlogContainer({
  children,
  className,
  title,
  publishDate,
  backgroundOpacity = 0.5,
}: BlogContainerProps) {
  return (
    <div className="z-10 max-w-4xl w-full items-center justify-between font-mono text-sm relative">
      {/* Remove FloatingDock component from here */}
      <motion.div
        className={cn(
          "relative w-full backdrop-blur-sm rounded-xl overflow-hidden border border-white/10",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title && (
          <div className="p-6 border-b border-white/10">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {publishDate && (
              <p className="text-sm text-white/70 mt-2">{publishDate}</p>
            )}
          </div>
        )}
        <div
          className={`p-6 bg-black/50`}
          style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
