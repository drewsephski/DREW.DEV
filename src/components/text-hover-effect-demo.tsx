import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect 
        text="DZN.DEV" 
        glowEffect={true}
        pulseEffect={true}
        colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
        size="9xl"
        strokeWidth="0.5"
      />
    </div>
  );
}
