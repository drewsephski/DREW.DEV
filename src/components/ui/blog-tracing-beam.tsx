"use client";

import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

interface BlogTracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * BlogTracingBeam - A wrapper component that adds a tracing beam effect to blog content
 * 
 * This component is designed to be used in blog post pages to add a visual tracing effect
 * that follows the user's scroll position, enhancing the reading experience.
 * 
 * @param {React.ReactNode} children - The blog content to be wrapped
 * @param {string} className - Optional additional CSS classes
 */
export function BlogTracingBeam({ children, className = "" }: BlogTracingBeamProps) {
  return (
    <TracingBeam className={className}>
      <div className="max-w-full mx-auto antialiased relative">
        {children}
      </div>
    </TracingBeam>
  );
}
