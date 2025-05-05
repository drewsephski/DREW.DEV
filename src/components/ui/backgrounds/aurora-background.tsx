'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  baseColor?: string;
  highlightColor?: string;
  size?: 'sm' | 'md' | 'lg';
  blur?: 'sm' | 'md' | 'lg';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  children,
  className,
  baseColor = "0, 0, 40", // Dark blue base
  highlightColor = "80, 100, 255", // Light blue highlight
  size = 'md',
  blur = 'md',
  intensity = 'medium',
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const mouseIsMoving = useRef(false);
  const animationFrameId = useRef<number | null>(null);

  // Size mapping
  const sizeMap = {
    sm: { width: 600, height: 600 },
    md: { width: 1000, height: 1000 },
    lg: { width: 1500, height: 1500 },
  };

  // Blur mapping
  const blurMap = {
    sm: 'blur-xl',
    md: 'blur-2xl',
    lg: 'blur-3xl',
  };

  // Intensity mapping (opacity)
  const intensityMap = {
    low: 0.15,
    medium: 0.25,
    high: 0.4,
  };

  // Handle mouse movement for interactive mode
  useEffect(() => {
    if (!interactive || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Calculate mouse position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mousePosition.current = { x, y };
      mouseIsMoving.current = true;
      
      // Clear any existing animation frame
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      // Schedule animation frame
      animationFrameId.current = requestAnimationFrame(updateAuroraPosition);
    };

    const updateAuroraPosition = () => {
      if (!mouseIsMoving.current || !containerRef.current) return;
      
      const auroraElements = containerRef.current.querySelectorAll('.aurora-blob');
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      auroraElements.forEach((element, index) => {
        const el = element as HTMLElement;
        const speed = 0.1 - (index * 0.02); // Different speeds for each blob
        
        // Calculate new positions with easing
        const targetX = mousePosition.current.x / width;
        const targetY = mousePosition.current.y / height;
        
        // Apply transform with different offsets for each blob
        el.style.transform = `translate(${targetX * 100 * (index + 1) * speed}px, ${targetY * 100 * (index + 1) * speed}px)`;
      });
      
      mouseIsMoving.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [interactive]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
    >
      {/* Base background color */}
      <div className="absolute inset-0 bg-black" style={{ backgroundColor: `rgb(${baseColor})` }} />
      
      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute rounded-full aurora-blob",
              blurMap[blur],
              "mix-blend-screen"
            )}
            style={{
              width: sizeMap[size].width,
              height: sizeMap[size].height,
              background: `radial-gradient(circle, rgba(${highlightColor}, ${intensityMap[intensity]}) 0%, rgba(${highlightColor}, 0) 70%)`,
              left: `${30 + i * 15}%`,
              top: `${40 + (i % 2) * 20}%`,
              opacity: intensityMap[intensity],
              willChange: 'transform',
            }}
            animate={{
              x: [0, 20, -20, 10, 0],
              y: [0, -30, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1.02, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
