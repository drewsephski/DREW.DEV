'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface LogoItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoMarqueeProps {
  logos: LogoItem[];
  speed?: number;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  className?: string;
  itemClassName?: string;
  grayscale?: boolean;
  darkMode?: boolean;
}

export const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  logos,
  speed = 40,
  pauseOnHover = true,
  direction = 'left',
  className,
  itemClassName,
  grayscale = true,
  darkMode = true,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [duplicateCount, setDuplicateCount] = React.useState(2);

  // Calculate how many times we need to duplicate the logos to fill the screen
  useEffect(() => {
    if (!marqueeRef.current) return;
    
    const calculateWidth = () => {
      if (!marqueeRef.current) return;
      
      const containerWidth = marqueeRef.current.offsetWidth;
      setContainerWidth(containerWidth);
      
      // Calculate how many duplicates we need to ensure continuous scrolling
      const itemsWidth = logos.reduce((acc, _, i) => {
        const item = marqueeRef.current?.children[i] as HTMLElement;
        return acc + (item?.offsetWidth || 0);
      }, 0);
      
      const duplicatesNeeded = Math.ceil((containerWidth * 2) / itemsWidth) + 1;
      setDuplicateCount(Math.max(2, duplicatesNeeded));
    };
    
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    
    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, [logos.length]);

  // Create duplicated logo arrays for seamless scrolling
  const duplicatedLogos = React.useMemo(() => {
    return Array(duplicateCount).fill(logos).flat();
  }, [logos, duplicateCount]);

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden py-6 bg-white/5 backdrop-blur-sm",
        darkMode ? "bg-black/20" : "bg-white/20",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      ref={marqueeRef}
    >
      <div className="flex items-center">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{
            x: isPaused ? 0 : direction === 'left' ? "-100%" : "100%",
          }}
          transition={{
            duration: containerWidth / speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div 
              key={`${logo.alt}-${idx}`}
              className={cn(
                "flex items-center justify-center px-6",
                itemClassName
              )}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 120}
                height={logo.height || 40}
                className={cn(
                  "object-contain max-h-12",
                  grayscale && "filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
                  darkMode && "invert"
                )}
              />
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap"
          animate={{
            x: isPaused ? 0 : direction === 'left' ? "-100%" : "100%",
          }}
          transition={{
            duration: containerWidth / speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div 
              key={`${logo.alt}-dup-${idx}`}
              className={cn(
                "flex items-center justify-center px-6",
                itemClassName
              )}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 120}
                height={logo.height || 40}
                className={cn(
                  "object-contain max-h-12",
                  grayscale && "filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
                  darkMode && "invert"
                )}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
