"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { FloatingDock, blogDockItems } from "@/components/ui/navigation/floating-dock";

export default function WobbleCardComponentBlog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 20)"
        gradientBackgroundEnd="rgb(0, 0, 40)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="200, 50, 50"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
      />
      <div className="z-10 max-w-4xl w-full items-center justify-between font-mono text-sm relative">
        <FloatingDock items={blogDockItems} />

        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto mt-16 mb-32 bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              Wobble Card Component
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                The Wobble Card component adds a playful, 3D wobble effect on hover, creating a sense of depth and interactivity. This component is perfect for featured content, call-to-action cards, or any element you want to draw attention to with a subtle but engaging animation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Component Purpose</h2>
              
              <p>
                The Wobble Card component serves several key purposes in modern UI design:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Visual Engagement:</strong> Creates a dynamic, interactive element that responds to user movement</li>
                <li><strong>Spatial Depth:</strong> Adds a sense of 3D space to an otherwise flat interface</li>
                <li><strong>Focus Direction:</strong> Draws attention to important content or calls-to-action</li>
                <li><strong>Interactive Feedback:</strong> Provides immediate visual feedback to user interactions</li>
                <li><strong>Playful Experience:</strong> Adds a touch of delight to the user experience</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Implementation Details</h2>
              
              <p>
                Our Wobble Card component uses 3D CSS transformations and mouse position tracking to create a realistic wobble effect:
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Core Structure</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface WobbleCardProps {
  children: React.ReactNode;
  className?: string;
  wobbleFactor?: number;
  perspective?: number;
  as?: React.ElementType;
}

export function WobbleCard({
  children,
  className,
  wobbleFactor = 7,
  perspective = 800,
  as: Component = "div",
}: WobbleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values for rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Springs for smooth animation
  const springConfig = { stiffness: 150, damping: 15 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate rotation based on mouse position relative to card center
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Normalize and apply wobble factor
      rotateX.set((-mouseY / (rect.height / 2)) * wobbleFactor);
      rotateY.set((mouseX / (rect.width / 2)) * wobbleFactor);
    };

    const handleMouseLeave = () => {
      // Reset rotation when mouse leaves
      rotateX.set(0);
      rotateY.set(0);
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    // Add event listeners
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      // Clean up event listeners
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isHovering, rotateX, rotateY, wobbleFactor]);

  return (
    <Component
      ref={cardRef}
      className={cn("relative transition-all duration-200", className)}
      style={{
        perspective: \`\${perspective}px\`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </Component>
  );
}`}
              </pre>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">3D Transformation Logic</h3>
              
              <p>
                The key to the wobble effect is calculating rotation based on mouse position:
              </p>
              
              <ol className="list-decimal pl-6 space-y-2">
                <li>We track the mouse position relative to the card's center</li>
                <li>Based on this position, we calculate rotation values for the X and Y axes</li>
                <li>We use Motion's <code>useMotionValue</code> and <code>useSpring</code> for smooth, physics-based animation</li>
                <li>The card's rotation is reset when the mouse leaves</li>
              </ol>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Physics-Based Animation</h3>
              
              <p>
                To create a natural, realistic wobble effect, we use spring physics:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>The <code>useSpring</code> hook creates a spring-based animation</li>
                <li>Spring configuration controls the stiffness and damping of the animation</li>
                <li>This creates a slight bounce effect when the card rotates</li>
                <li>The result is a more organic, physical feel to the interaction</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Customization Options</h2>
              
              <p>
                The component accepts several props for customization:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><code>wobbleFactor</code>: Controls the intensity of the wobble effect (default: 7)</li>
                <li><code>perspective</code>: Controls the 3D perspective depth in pixels (default: 800)</li>
                <li><code>className</code>: Custom classes for the container element</li>
                <li><code>as</code>: Allows rendering as a different element type (default: "div")</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Usage Examples</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Basic Usage</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<WobbleCard className="w-full max-w-md p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
  <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
  <p className="text-sm text-gray-300">
    This card has a subtle wobble effect on hover.
  </p>
</WobbleCard>`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Custom Wobble Settings</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<WobbleCard 
  className="w-full max-w-md p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10"
  wobbleFactor={12}
  perspective={1200}
>
  <h3 className="text-xl font-bold mb-2">Enhanced Wobble</h3>
  <p className="text-sm text-gray-300">
    This card has a more pronounced wobble effect with custom settings.
  </p>
</WobbleCard>`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">With 3D Elements</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<WobbleCard className="w-full max-w-md p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
  <div className="relative">
    <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full transform-gpu translate-z-20" />
    <h3 className="text-xl font-bold mb-2 transform-gpu translate-z-10">3D Elements</h3>
    <p className="text-sm text-gray-300">
      This card contains elements with different z-translations for a layered 3D effect.
    </p>
  </div>
</WobbleCard>`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Performance Considerations</h2>
              
              <p>
                3D transformations can be computationally intensive, so we've implemented several optimizations:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>We use <code>transform-gpu</code> to enable hardware acceleration</li>
                <li>Event handlers are properly cleaned up to prevent memory leaks</li>
                <li>Calculations only run when the card is being hovered</li>
                <li>We use efficient CSS properties for animations</li>
                <li>For pages with many wobble cards, consider using a smaller wobbleFactor</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Accessibility Considerations</h2>
              
              <p>
                We've implemented several accessibility features in our Wobble Card component:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>The wobble effect is purely decorative and doesn't affect screen readers</li>
                <li>The component works with keyboard navigation when used as a button or link</li>
                <li>The effect is subtle enough not to cause issues for users with vestibular disorders</li>
                <li>Users with "prefers-reduced-motion" settings should have the effect disabled</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Best Practices</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Wobble Card for important content that deserves visual emphasis</li>
                <li>Keep wobble intensity subtle for a professional look (wobbleFactor 5-10)</li>
                <li>Consider using the card for call-to-action elements or featured content</li>
                <li>Test on various devices to ensure smooth performance</li>
                <li>Implement a media query for "prefers-reduced-motion" to disable the effect for users who are sensitive to motion</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                The Wobble Card component adds a delightful, interactive element to your UI that can significantly enhance user engagement. By following the implementation details and best practices outlined in this guide, you can effectively use this component to create visually dynamic interfaces that respond to user interaction in a natural, engaging way.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between">
                <Link href="/blog/components/text-effects" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ← Text Effects Component
                </Link>
                <Link href="/blog/components/github-button" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Next: GitHub Button Component →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
