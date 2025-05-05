"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";

interface HeadingHoverEffectProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  className?: string;
  glowEffect?: boolean;
  pulseEffect?: boolean;
  interactive?: boolean;
  automatic?: boolean;
  colors?: string[];
  strokeWidth?: string;
  maskSize?: string;
  duration?: number;
}

export const HeadingHoverEffect: React.FC<HeadingHoverEffectProps> = ({
  text,
  as = "h2",
  size = "3xl",
  className = "",
  glowEffect = true,
  pulseEffect = false,
  interactive = true,
  automatic = false,
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"],
  strokeWidth = "0.3",
  maskSize = "20%",
  duration = 0,
}) => {
  // Map heading size to TextHoverEffect size
  const sizeMap: Record<string, string> = {
    "sm": "sm",
    "md": "base",
    "lg": "lg",
    "xl": "xl",
    "2xl": "2xl",
    "3xl": "3xl",
    "4xl": "4xl",
    "5xl": "5xl",
    "6xl": "6xl",
    "7xl": "7xl",
    "8xl": "8xl",
    "9xl": "9xl",
  };

  const textSize = sizeMap[size] || "3xl";
  
  // Create the component based on the heading type
  const Component = as;
  
  return (
    <Component className={cn("relative", className)}>
      <div className="w-full h-full">
        <TextHoverEffect
          text={text}
          size={textSize}
          glowEffect={glowEffect}
          pulseEffect={pulseEffect}
          interactive={interactive}
          automatic={automatic}
          colors={colors}
          strokeWidth={strokeWidth}
          maskSize={maskSize}
          duration={duration}
        />
      </div>
    </Component>
  );
};
