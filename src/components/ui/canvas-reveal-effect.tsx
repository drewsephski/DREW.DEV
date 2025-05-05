"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

// Create a simplified version of the CanvasRevealEffect component
export const CanvasRevealEffect = ({
  containerClassName,
  showGradient = true,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simple fallback component that doesn't use Three.js
  return (
    <div className={cn("h-full relative bg-slate-900 w-full", containerClassName)}>
      {isMounted && (
        <div className="h-full w-full relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient-x"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/30 via-transparent to-transparent"></div>
          </div>
        </div>
      )}
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      )}
    </div>
  );
};
