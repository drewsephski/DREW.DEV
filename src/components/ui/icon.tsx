'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import * as TablerIcons from '@tabler/icons-react';

// Define animation types
export type IconAnimation = 
  | 'pulse'
  | 'bounce'
  | 'spin'
  | 'wiggle'
  | 'float'
  | 'ping'
  | 'none';

export interface IconProps {
  // Icon name from Tabler Icons (e.g., 'IconHome', 'IconUser')
  name: keyof typeof TablerIcons;
  // Size of the icon
  size?: number;
  // Stroke width of the icon
  strokeWidth?: number;
  // Color of the icon
  color?: string;
  // Additional class names
  className?: string;
  // Animation type
  animation?: IconAnimation;
  // Background color/gradient
  background?: string;
  // Whether to show a background
  showBackground?: boolean;
  // Background shape: 'circle', 'rounded', 'square'
  backgroundShape?: 'circle' | 'rounded' | 'square';
  // Background size multiplier (relative to icon size)
  backgroundSize?: number;
  // Whether to animate on hover only
  animateOnHover?: boolean;
  // Additional props
  [key: string]: any;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  strokeWidth = 1.5,
  color = 'currentColor',
  className = '',
  animation = 'none',
  background,
  showBackground = false,
  backgroundShape = 'circle',
  backgroundSize = 2.5,
  animateOnHover = false,
  ...props
}) => {
  // Get the icon component from Tabler Icons
  const IconComponent = TablerIcons[name] as React.ElementType;
  
  if (!IconComponent) {
    console.error(`Icon "${name}" not found in Tabler Icons`);
    return null;
  }

  // Define animation variants
  const getAnimationVariants = () => {
    switch (animation) {
      case 'pulse':
        return {
          animate: {
            scale: [1, 1.1, 1],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
        };
      case 'bounce':
        return {
          animate: {
            y: [0, -5, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
        };
      case 'spin':
        return {
          animate: {
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            },
          },
        };
      case 'wiggle':
        return {
          animate: {
            rotate: [-3, 3, -3],
            transition: {
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
        };
      case 'float':
        return {
          animate: {
            y: [0, -5, 0],
            x: [0, 2, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
        };
      case 'ping':
        return {
          animate: {
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
        };
      default:
        return {
          animate: {},
        };
    }
  };

  // Get background styles
  const getBackgroundStyles = () => {
    if (!showBackground) return {};

    const bgSize = size * backgroundSize;
    
    const shapeStyles = {
      circle: 'rounded-full',
      rounded: 'rounded-xl',
      square: 'rounded-none',
    };

    return {
      width: bgSize,
      height: bgSize,
      background: background || 'rgba(255, 255, 255, 0.1)',
      borderRadius: shapeStyles[backgroundShape],
    };
  };

  const variants = getAnimationVariants();
  const backgroundStyles = getBackgroundStyles();

  return (
    <motion.div
      className={cn(
        'flex items-center justify-center',
        showBackground && 'p-2',
        className
      )}
      style={backgroundStyles}
      initial="initial"
      animate={!animateOnHover ? 'animate' : undefined}
      whileHover={animateOnHover ? 'animate' : undefined}
      variants={variants}
    >
      <IconComponent
        size={size}
        stroke={color}
        strokeWidth={strokeWidth}
        {...props}
      />
    </motion.div>
  );
};

export default Icon;
