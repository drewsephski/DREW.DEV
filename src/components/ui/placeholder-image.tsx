'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export type PlaceholderService = 'picsum' | 'placeholder';

export interface PlaceholderImageProps extends Omit<ImageProps, 'src' | 'blurDataURL'> {
  /**
   * Width of the image in pixels
   */
  width: number;
  
  /**
   * Height of the image in pixels
   */
  height: number;
  
  /**
   * Text to display on the placeholder (only for placeholder.com)
   */
  text?: string;
  
  /**
   * Background color (only for placeholder.com)
   */
  bgColor?: string;
  
  /**
   * Text color (only for placeholder.com)
   */
  textColor?: string;
  
  /**
   * Which placeholder service to use
   * @default 'picsum'
   */
  service?: PlaceholderService;
  
  /**
   * Category for picsum photos (optional)
   */
  category?: string;
  
  /**
   * Whether to use a random image each time
   * @default true
   */
  random?: boolean;
  
  /**
   * Specific image ID for picsum (overrides random)
   */
  imageId?: number;
  
  /**
   * Additional class names for the container
   */
  containerClassName?: string;
  
  /**
   * Whether to fade in the image when loaded
   * @default true
   */
  fadeIn?: boolean;
  
  /**
   * Whether to use a skeleton loader while the image is loading
   * @default true
   */
  useSkeleton?: boolean;
}

/**
 * PlaceholderImage component that generates dynamic placeholder images
 * using either Picsum.photos or Placeholder.com
 */
export function PlaceholderImage({
  width,
  height,
  text,
  bgColor = '1f1f1f',
  textColor = 'ffffff',
  service = 'picsum',
  category,
  random = true,
  imageId,
  alt = 'Placeholder image',
  className,
  containerClassName,
  fadeIn = true,
  useSkeleton = true,
  ...props
}: PlaceholderImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  // Generate the placeholder URL based on the service
  const generatePlaceholderUrl = (): string => {
    // Remove the # if present in color codes
    const bg = bgColor.replace('#', '');
    const fg = textColor.replace('#', '');
    
    if (service === 'picsum') {
      // Picsum.photos service
      let url = `https://picsum.photos/${width}/${height}`;
      
      // Add specific image ID if provided
      if (imageId) {
        url = `https://picsum.photos/id/${imageId}/${width}/${height}`;
      } 
      // Add randomness if requested
      else if (random) {
        url += `?random=${Math.floor(Math.random() * 1000)}`;
      }
      
      // Add category if provided (grayscale is a special case)
      if (category === 'grayscale') {
        url += url.includes('?') ? '&' : '?';
        url += 'grayscale';
      }
      
      return url;
    } else {
      // Placeholder.com service
      const displayText = text || `${width}×${height}`;
      return `https://via.placeholder.com/${width}x${height}/${bg}/${fg}?text=${encodeURIComponent(displayText)}`;
    }
  };
  
  const placeholderUrl = generatePlaceholderUrl();
  
  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        useSkeleton && !isLoaded && 'animate-pulse bg-gray-200 dark:bg-gray-700',
        containerClassName
      )}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={placeholderUrl}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'object-cover',
          fadeIn && !isLoaded && 'opacity-0',
          fadeIn && isLoaded && 'opacity-100 transition-opacity duration-500',
          className
        )}
        onLoad={handleImageLoad}
        unoptimized // Use unoptimized for external placeholder services
        {...props}
      />
    </div>
  );
}

export default PlaceholderImage;
