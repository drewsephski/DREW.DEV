'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EnhancedTextEffect } from '@/components/ui/effects/enhanced-text-effect';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ComponentsTemplate from '../template';
import { WobbleCard } from '@/components/ui/wobble-card';
import { AceternityGlareCard } from '@/components/ui/cards/aceternity-glare-card';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/cards/card';
import { Button } from '@/components/ui/buttons/button';

export default function CardsPage() {
  // This state will be reset when navigating away and back to this page
  // because the page is wrapped in a template, not just a layout
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false,
  });

  const toggleCard = (cardId: string) => {
    setExpandedCard((prev) => (prev === cardId ? null : cardId));
  };

  return (
    <ComponentsTemplate>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            <EnhancedTextEffect
              words="Card Components"
              duration={0.8}
              variant="combined"
              textSize="3xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Cards are containers that group related content and actions.
            Our card components offer various styles and interactive effects to enhance your UI.
          </p>
        </div>

      {/* Standard Card */}
      <div ref={ref} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Standard Card</h2>
        <p className="text-slate-300 mb-6">
          Our standard card component with header, content, and footer sections.
          Click the button to expand/collapse the card.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle>Standard Card</CardTitle>
              <CardDescription>A versatile card component for displaying content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">
                This is a standard card component with header, content, and footer sections.
                {expandedCard === 'standard' && (
                  <span className="block mt-4">
                    Cards are versatile containers that can be used for a wide range of content,
                    from simple text to complex interactive elements. They provide a consistent
                    way to display related information and actions.
                  </span>
                )}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => toggleCard('standard')}>
                {expandedCard === 'standard' ? 'Show Less' : 'Show More'}
              </Button>
              <Button variant="primary" size="sm">
                Action
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Wobble Card */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Wobble Card</h2>
        <p className="text-slate-300 mb-6">
          A card with a subtle wobble effect on hover. Move your cursor over the card to see the effect.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <WobbleCard>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Wobble Card</h3>
              <p className="text-slate-300 mb-4">
                This card has a subtle wobble effect on hover. Move your cursor over the card to see the effect.
                {expandedCard === 'wobble' && (
                  <span className="block mt-4">
                    The wobble effect is created using 3D transforms and mouse tracking to create
                    a dynamic, interactive experience that responds to user movement.
                  </span>
                )}
              </p>
              <Button variant="outline" size="sm" onClick={() => toggleCard('wobble')}>
                {expandedCard === 'wobble' ? 'Show Less' : 'Show More'}
              </Button>
            </div>
          </WobbleCard>
        </motion.div>
      </div>

      {/* Glare Card */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Glare Card</h2>
        <p className="text-slate-300 mb-6">
          A card with a glare effect on hover. Move your cursor over the card to see the effect.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <AceternityGlareCard
            className="flex flex-col items-center justify-center text-blue-200"
            contentClassName="flex flex-col items-center justify-center p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Glare Card</h3>
            <p className="text-slate-300 text-center mb-4">
              This card has a glare effect on hover. Move your cursor over the card to see the effect.
              {expandedCard === 'glare' && (
                <span className="block mt-4">
                  The glare effect simulates light reflection on a glossy surface, creating
                  a premium, interactive experience that responds to user movement.
                </span>
              )}
            </p>
            <Button variant="outline" size="sm" onClick={() => toggleCard('glare')}>
              {expandedCard === 'glare' ? 'Show Less' : 'Show More'}
            </Button>
          </AceternityGlareCard>
        </motion.div>
      </div>

      {/* Usage Examples */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Usage Examples</h2>
        <p className="text-slate-300 mb-6">
          Here's how to use our card components in your code:
        </p>

        <div className="bg-slate-950 rounded-md p-4 overflow-x-auto">
          <pre className="text-sm text-slate-300">
            <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/cards/card';
import { WobbleCard } from '@/components/ui/wobble-card';
import { AceternityGlareCard } from '@/components/ui/cards/aceternity-glare-card';

// Standard Card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Wobble Card
<WobbleCard>
  <div className="p-6">
    <h3>Wobble Card</h3>
    <p>Content with wobble effect on hover</p>
  </div>
</WobbleCard>

// Glare Card
<AceternityGlareCard
  className="flex flex-col items-center justify-center"
  contentClassName="p-6"
>
  <h3>Glare Card</h3>
  <p>Content with glare effect on hover</p>
</AceternityGlareCard>`}</code>
          </pre>
        </div>
      </div>
      </div>
    </ComponentsTemplate>
  );
}
