'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/buttons/button';
import GitHubButton from '@/components/ui/buttons/github-button';
import { RainbowButton } from '@/components/ui/buttons/rainbow-button';
import { EnhancedTextEffect } from '@/components/ui/effects/enhanced-text-effect';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ComponentsTemplate from '../template';

// Button variants for demonstration
const buttonVariants = [
  { id: 'primary', name: 'Primary' },
  { id: 'secondary', name: 'Secondary' },
  { id: 'outline', name: 'Outline' },
  { id: 'ghost', name: 'Ghost' },
  { id: 'link', name: 'Link' },
  { id: 'destructive', name: 'Destructive' },
];

export default function ButtonsPage() {
  // This state will be reset when navigating away and back to this page
  // because the page is wrapped in a template, not just a layout
  const [clickCount, setClickCount] = useState<Record<string, number>>({});

  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false,
  });

  const handleButtonClick = (variant: string) => {
    setClickCount((prev) => ({
      ...prev,
      [variant]: (prev[variant] || 0) + 1,
    }));
  };

  return (
    <ComponentsTemplate>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            <EnhancedTextEffect
              words="Button Components"
              duration={0.8}
              variant="combined"
              textSize="3xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Buttons are interactive elements that trigger actions when clicked.
            Our button components are designed to be accessible, customizable, and visually appealing.
          </p>
        </div>

      {/* Standard Button Variants */}
      <div ref={ref} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Standard Button Variants</h2>
        <p className="text-slate-300 mb-6">
          Our standard button component supports multiple variants to match your design needs.
          Click on each button to see the click counter increment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {buttonVariants.map((variant, index) => (
            <motion.div
              key={variant.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant={variant.id as any}
                onClick={() => handleButtonClick(variant.id)}
                className="w-full"
              >
                {variant.name} Button
              </Button>
              <span className="text-sm text-slate-400 mt-2">
                Clicks: {clickCount[variant.id] || 0}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specialty Buttons */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Specialty Buttons</h2>
        <p className="text-slate-300 mb-6">
          In addition to standard buttons, we offer specialty buttons with unique designs and animations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-4">
              <GitHubButton
                href="https://github.com/drewsephski/"
                text="GitHub"
                showStar={true}
                onClick={() => handleButtonClick('github')}
              />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">GitHub Button</h3>
            <p className="text-sm text-slate-400 text-center">
              A button styled like GitHub's button with star count.
              <br />
              Clicks: {clickCount['github'] || 0}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="mb-4">
              <RainbowButton
                onClick={() => handleButtonClick('rainbow')}
              >
                Rainbow Button
              </RainbowButton>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Rainbow Button</h3>
            <p className="text-sm text-slate-400 text-center">
              A button with a colorful rainbow gradient effect.
              <br />
              Clicks: {clickCount['rainbow'] || 0}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Usage Examples</h2>
        <p className="text-slate-300 mb-6">
          Here's how to use our button components in your code:
        </p>

        <div className="bg-slate-950 rounded-md p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`import { Button } from '@/components/ui/buttons/button';
import GitHubButton from '@/components/ui/buttons/github-button';
import { RainbowButton } from '@/components/ui/buttons/rainbow-button';

// Standard Button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// GitHub Button
<GitHubButton
  href="https://github.com/yourusername/repo"
  text="GitHub"
  showStar={true}
/>

// Rainbow Button
<RainbowButton onClick={handleClick}>
  Rainbow Effect
</RainbowButton>`}</code>
          </pre>
        </div>
      </div>
      </div>
    </ComponentsTemplate>
  );
}
