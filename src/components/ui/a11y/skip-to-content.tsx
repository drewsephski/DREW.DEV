"use client";

import React from "react";
import { cn } from "@/lib/utils";

type SkipToContentProps = {
  contentId?: string;
  className?: string;
}

export function SkipToContent({
  contentId = "main-content",
  className,
}: React.PropsWithoutRef<SkipToContentProps>) {
  return (
    <a
      href={`#${contentId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none focus:shadow-lg",
        className
      )}
    >
      Skip to content
    </a>
  );
}
