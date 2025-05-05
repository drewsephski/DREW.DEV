'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface RainbowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'rainbow' | 'shimmer';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const RainbowButton: React.FC<RainbowButtonProps> = ({
  children,
  href,
  onClick,
  className,
  variant = 'rainbow',
  size = 'md',
  rounded = 'md',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  
  // Common button classes
  const buttonClasses = cn(
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none overflow-hidden',
    sizeClasses[size],
    roundedClasses[rounded],
    className
  );
  
  // Rainbow gradient styles
  const rainbowGradient = {
    backgroundSize: '400% 100%',
    backgroundImage: 'linear-gradient(90deg, #ff0080, #ff8c00, #ffce00, #00ff8c, #00cfff, #cc00ff, #ff0080)',
    transition: 'all 0.5s ease',
  };
  
  // Shimmer gradient styles
  const shimmerGradient = {
    backgroundImage: 'linear-gradient(110deg, #00c6ff 0%, #0072ff 25%, #0072ff 50%, #00c6ff 75%, #0072ff 100%)',
    backgroundSize: '200% 100%',
    transition: 'all 0.5s ease',
  };
  
  // Content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );
  
  // Button component
  const ButtonComponent = () => (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Background gradient */}
      <span 
        className="absolute inset-0 w-full h-full"
        style={variant === 'rainbow' ? rainbowGradient : shimmerGradient}
      />
      
      {/* Shimmer effect for both variants */}
      <span 
        className={cn(
          "absolute inset-0 w-full h-full",
          variant === 'rainbow' ? 'animate-gradient-slow' : 'animate-shimmer'
        )}
        style={variant === 'rainbow' 
          ? { backgroundPosition: isHovered ? '100% 0' : '0% 0' } 
          : { backgroundPosition: isHovered ? '200% 0' : '0% 0' }
        }
      />
      
      {/* Overlay for text contrast */}
      <span className="absolute inset-[1.5px] bg-black/80 rounded-[inherit] z-0" />
      
      {/* Content */}
      {content}
    </motion.button>
  );
  
  // Link component
  const LinkComponent = () => (
    <motion.div
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link href={href || '#'} className="absolute inset-0 z-20" aria-disabled={disabled} />
      
      {/* Background gradient */}
      <span 
        className="absolute inset-0 w-full h-full"
        style={variant === 'rainbow' ? rainbowGradient : shimmerGradient}
      />
      
      {/* Shimmer effect for both variants */}
      <span 
        className={cn(
          "absolute inset-0 w-full h-full",
          variant === 'rainbow' ? 'animate-gradient-slow' : 'animate-shimmer'
        )}
        style={variant === 'rainbow' 
          ? { backgroundPosition: isHovered ? '100% 0' : '0% 0' } 
          : { backgroundPosition: isHovered ? '200% 0' : '0% 0' }
        }
      />
      
      {/* Overlay for text contrast */}
      <span className="absolute inset-[1.5px] bg-black/80 rounded-[inherit] z-0" />
      
      {/* Content */}
      {content}
    </motion.div>
  );
  
  return href ? LinkComponent() : ButtonComponent();
};
