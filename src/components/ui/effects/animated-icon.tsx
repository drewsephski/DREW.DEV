'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export type AnimationStyle = 'bounce' | 'rotate' | 'pulse' | 'shake' | 'flip' | 'float';

export interface AnimatedIconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  animationStyle?: AnimationStyle;
  containerClassName?: string;
  color?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  src,
  alt,
  size = 64,
  className,
  animationStyle = 'bounce',
  containerClassName,
  color,
}) => {
  // Define animation variants based on the animation style
  const getAnimationVariants = () => {
    switch (animationStyle) {
      case 'bounce':
        return {
          initial: { y: 0 },
          hover: { 
            y: [-5, 0, -5], 
            transition: { 
              repeat: Infinity, 
              duration: 1.5,
              ease: 'easeInOut'
            } 
          },
        };
      case 'rotate':
        return {
          initial: { rotate: 0 },
          hover: { 
            rotate: 360, 
            transition: { 
              duration: 1,
              ease: 'easeInOut'
            } 
          },
        };
      case 'pulse':
        return {
          initial: { scale: 1 },
          hover: { 
            scale: [1, 1.1, 1], 
            transition: { 
              repeat: Infinity, 
              duration: 1.2,
              ease: 'easeInOut'
            } 
          },
        };
      case 'shake':
        return {
          initial: { x: 0 },
          hover: { 
            x: [-2, 2, -2, 2, 0], 
            transition: { 
              repeat: Infinity, 
              duration: 0.5,
              ease: 'easeInOut'
            } 
          },
        };
      case 'flip':
        return {
          initial: { rotateY: 0 },
          hover: { 
            rotateY: 180, 
            transition: { 
              duration: 0.6,
              ease: 'easeInOut'
            } 
          },
        };
      case 'float':
        return {
          initial: { y: 0 },
          hover: { 
            y: [-5, 5, -5], 
            transition: { 
              repeat: Infinity, 
              duration: 3,
              ease: 'easeInOut'
            } 
          },
        };
      default:
        return {
          initial: { scale: 1 },
          hover: { scale: 1.1 },
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <motion.div
      className={cn('relative', containerClassName)}
      initial="initial"
      whileHover="hover"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={cn('object-contain', className)}
        style={color ? { filter: `drop-shadow(0 0 8px ${color})` } : undefined}
      />
    </motion.div>
  );
};
