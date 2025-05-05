"use client";
import React, { useState } from "react";
import { Boxes, BoxesVariant, BoxesAnimation, BoxesSize } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface BackgroundBoxesDocsProps {
  className?: string;
}

export function BackgroundBoxesDocs({ className }: BackgroundBoxesDocsProps) {
  const [ref, isInView] = useIntersectionObserver({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [variant, setVariant] = useState<BoxesVariant>("default");
  const [animation, setAnimation] = useState<BoxesAnimation>("hover");
  const [size, setSize] = useState<BoxesSize>("medium");
  const [showIcons, setShowIcons] = useState(true);
  
  const variants: BoxesVariant[] = ["default", "blue", "purple", "green", "rainbow", "monochrome"];
  const animations: BoxesAnimation[] = ["hover", "pulse", "wave", "random", "none"];
  const sizes: BoxesSize[] = ["small", "medium", "large"];
  
  return (
    <div ref={ref} className={cn("w-full", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Preview */}
        <div className="relative h-80 overflow-hidden bg-slate-900 rounded-lg border border-slate-800">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          
          {isInView && (
            <Boxes
              variant={variant}
              animation={animation}
              size={size}
              rows={size === "small" ? 100 : size === "medium" ? 80 : 60}
              cols={size === "small" ? 60 : size === "medium" ? 50 : 40}
              showIcons={showIcons}
            />
          )}
          
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
            <h3 className="text-2xl font-bold text-white mb-2">Background Boxes</h3>
            <p className="text-white/70 mb-4">Interactive grid animation component</p>
          </div>
        </div>
        
        {/* Controls */}
        <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-lg border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-4">Customize Component</h3>
          
          {/* Variant selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white/70 mb-2">Color Variant</label>
            <div className="grid grid-cols-3 gap-2">
              {variants.map((v) => (
                <button
                  key={v}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    variant === v 
                      ? "bg-blue-600 text-white" 
                      : "bg-slate-800 text-white/70 hover:bg-slate-700"
                  )}
                  onClick={() => setVariant(v)}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Animation selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white/70 mb-2">Animation Style</label>
            <div className="grid grid-cols-3 gap-2">
              {animations.map((a) => (
                <button
                  key={a}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    animation === a 
                      ? "bg-blue-600 text-white" 
                      : "bg-slate-800 text-white/70 hover:bg-slate-700"
                  )}
                  onClick={() => setAnimation(a)}
                >
                  {a.charAt(0).toUpperCase() + a.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Size selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white/70 mb-2">Size</label>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    size === s 
                      ? "bg-blue-600 text-white" 
                      : "bg-slate-800 text-white/70 hover:bg-slate-700"
                  )}
                  onClick={() => setSize(s)}
                >
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Show icons toggle */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white/70 mb-2">Show Icons</label>
            <div className="flex items-center">
              <button
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors mr-2",
                  showIcons 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-800 text-white/70 hover:bg-slate-700"
                )}
                onClick={() => setShowIcons(true)}
              >
                Yes
              </button>
              <button
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors",
                  !showIcons 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-800 text-white/70 hover:bg-slate-700"
                )}
                onClick={() => setShowIcons(false)}
              >
                No
              </button>
            </div>
          </div>
          
          {/* Code snippet */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-white/70 mb-2">Code Example</label>
            <pre className="bg-slate-950 p-4 rounded-md text-xs text-white/80 overflow-x-auto">
              <code>{`<Boxes
  variant="${variant}"
  animation="${animation}"
  size="${size}"
  showIcons={${showIcons}}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
