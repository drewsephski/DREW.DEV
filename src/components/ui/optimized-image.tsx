'use client';

import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export interface OptimizedImageProps extends Omit<NextImageProps, 'placeholder'> {
  /**
   * Additional class names to apply to the image container
   */
  containerClassName?: string;

  /**
   * Whether to use blur placeholder
   * @default true
   */
  useBlurPlaceholder?: boolean;

  /**
   * Whether to fade in the image when loaded
   * @default true
   */
  fadeIn?: boolean;

  /**
   * Whether to use a skeleton loader while the image is loading
   * @default false
   */
  useSkeleton?: boolean;

  /**
   * Whether to lazy load the image
   * @default true
   */
  lazyLoad?: boolean;
}

/**
 * OptimizedImage component that wraps Next.js Image with additional optimizations
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  useBlurPlaceholder = true,
  fadeIn = true,
  useSkeleton = false,
  lazyLoad = true,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  // Determine if we should use priority loading
  const shouldUsePriority = priority || !lazyLoad;

  // Determine placeholder strategy
  const placeholderStrategy = useBlurPlaceholder ? 'blur' : 'empty';

  // Generate a simple blur data URL for placeholder
  const blurDataURL = useBlurPlaceholder
    ? `data:image/svg+xml;base64,${btoa(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#333"/></svg>`
      )}`
    : undefined;

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        useSkeleton && !isLoaded && 'animate-pulse bg-gray-200 dark:bg-gray-700',
        containerClassName
      )}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: typeof height === 'number' ? `${height}px` : height }}
    >
      <NextImage
        src={src}
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
        placeholder={useBlurPlaceholder ? placeholderStrategy : undefined}
        blurDataURL={blurDataURL}
        priority={shouldUsePriority}
        loading={shouldUsePriority ? undefined : 'lazy'}
        {...props}
      />
    </div>
  );
}

export default OptimizedImage;
