
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({
  href,
  children,
  variant = 'primary',
  className
}) => {
  return (
    <Link href={href}>
      <motion.button
        className={cn(
          "relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden group",
          variant === 'primary'
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:shadow-blue-500/30 border border-blue-500/30"
            : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center justify-center">
          {children}
          {variant === 'primary' && (
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </span>
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
      </motion.button>
    </Link>
  );
};

interface AceternityHeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
  showTrustedBy?: boolean;
  trustedByLogos?: Array<{src: string, alt: string, width?: number, height?: number}>;
}

export const AceternityHero: React.FC<AceternityHeroProps> = ({
  title,
  subtitle,
  primaryButtonText = 'Explore Components',
  primaryButtonHref = '/blog/components',
  secondaryButtonText = 'Get Started',
  secondaryButtonHref = '/demo',
  className,
  showTrustedBy = false,
  trustedByLogos = [],
}) => {
  return (
    <div className={cn("relative w-full h-screen flex items-center justify-center overflow-hidden", className)}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 blur-3xl"
            style={{
              width: `${Math.random() * 30 + 10}%`,
              height: `${Math.random() * 40 + 20}%`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div
            className="mb-2" /* Reduced from mb-6 to mb-2 for better vertical centering */
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className="dark:invert w-24 h-auto mb-2" /* Reduced from mb-4 to mb-2 */
              src="/next.svg"
              alt="Next.js logo"
              width={96}
              height={20}
            />
          </motion.div>

          {typeof title === 'string' ? (
            <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center mb-6">
              <TextHoverEffect
                text={title}
                size="6xl"
                glowEffect={true}
                pulseEffect={true}
                colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
                strokeWidth="0.4"
                maskSize="25%"
                interactive={true}
              />
            </div>
          ) : (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              {title}
            </h1>
          )}
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HeroButton
              href={primaryButtonHref}
              variant="primary"
              className="px-8 py-4 text-base font-bold shadow-lg hover:shadow-blue-500/30"
            >
              {primaryButtonText}
            </HeroButton>
            <HeroButton
              href={secondaryButtonHref}
              variant="secondary"
              className="px-6 py-3.5"
            >
              {secondaryButtonText}
            </HeroButton>
          </div>

          {/* Trusted By Section */}
          {showTrustedBy && trustedByLogos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-white/60 mb-4">Trusted by innovative teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {trustedByLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 100}
                      height={logo.height || 40}
                      className="object-contain h-8 opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Animated foreground elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};
