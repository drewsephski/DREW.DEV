'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { FloatingDock, defaultDockItems } from '@/components/ui/navigation/floating-dock';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { HeadingHoverEffect } from '@/components/ui/heading-hover-effect';
import Link from 'next/link';

export default function TextHoverEffectPage() {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Interactive gradient background animation */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 30)"
        gradientBackgroundEnd="rgb(0, 10, 60)"
        firstColor="0, 50, 150"
        secondColor="30, 70, 200"
        thirdColor="0, 100, 180"
        fourthColor="10, 30, 120"
        fifthColor="50, 90, 160"
        pointerColor="70, 130, 210"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
      />

      {/* Navigation */}
      <FloatingDock items={defaultDockItems} />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="h-24 md:h-32 flex items-center justify-center mb-6">
              <TextHoverEffect 
                text="Text Hover Effect" 
                size="7xl"
                glowEffect={true}
                pulseEffect={true}
                colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
                strokeWidth="0.4"
                maskSize="25%"
                interactive={true}
              />
            </div>
            <p className="text-white/70 text-lg mb-8">
              Interactive text effects with mouse tracking and customizable animations
            </p>
            <Link 
              href="/demo" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Demo
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Standard Effect</h3>
              <div className="h-40 flex items-center justify-center">
                <TextHoverEffect 
                  text="Hover Me" 
                  size="4xl"
                  glowEffect={false}
                  pulseEffect={false}
                  colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
                />
              </div>
              <div className="mt-4 text-white/70 text-sm">
                <p>Basic hover effect with mouse tracking</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">With Glow</h3>
              <div className="h-40 flex items-center justify-center">
                <TextHoverEffect 
                  text="Glow Effect" 
                  size="4xl"
                  glowEffect={true}
                  pulseEffect={false}
                  colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
                />
              </div>
              <div className="mt-4 text-white/70 text-sm">
                <p>Hover effect with added glow for more visual impact</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Pulse Animation</h3>
              <div className="h-40 flex items-center justify-center">
                <TextHoverEffect 
                  text="Pulsing" 
                  size="4xl"
                  glowEffect={true}
                  pulseEffect={true}
                  colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
                />
              </div>
              <div className="mt-4 text-white/70 text-sm">
                <p>Hover effect with pulsing animation for dynamic feel</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Automatic Mode</h3>
              <div className="h-40 flex items-center justify-center">
                <TextHoverEffect 
                  text="Auto Animate" 
                  size="4xl"
                  glowEffect={true}
                  pulseEffect={true}
                  interactive={false}
                  automatic={true}
                  colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
                />
              </div>
              <div className="mt-4 text-white/70 text-sm">
                <p>Automatic animation without requiring hover interaction</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-16"
          >
            <HeadingHoverEffect
              text="Use as Headings"
              as="h2"
              size="4xl"
              glowEffect={true}
              pulseEffect={false}
              interactive={true}
              colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#eab308", "#ef4444"]}
            />
            <p className="text-white/70 text-lg mt-4">
              The HeadingHoverEffect component makes it easy to use these effects as headings
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
