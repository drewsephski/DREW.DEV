"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FloatingDock, blogDockItems } from "@/components/ui/navigation/floating-dock";

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
      <FloatingDock items={blogDockItems} />

      <article
        className={cn(
          "prose prose-invert lg:prose-xl max-w-4xl mx-auto mt-16 mb-32 backdrop-blur-sm p-8 rounded-xl border border-white/10",
          className
        )}
        style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title && (
            <h1 className="text-4xl font-bold mb-6 text-white">
              {title}
            </h1>
          )}

          {publishDate && (
            <div className="text-white mb-8 italic">
              Published on {publishDate}
            </div>
          )}

          <div className="space-y-6 text-white">
            {children}
          </div>
        </motion.div>
      </article>
    </div>
  );
}
