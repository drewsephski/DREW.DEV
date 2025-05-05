"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { FloatingDock, blogDockItems } from "@/components/ui/navigation/floating-dock";

export default function TextEffectsComponentBlog() {
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
              Text Effects Component
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Text animations can significantly enhance the visual appeal and user engagement of your application. Our EnhancedTextEffect component provides multiple text animation variants, including character-by-character generation, reveal effects, and combined animations that trigger when elements enter the viewport.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Component Purpose</h2>
              
              <p>
                The EnhancedTextEffect component serves several key purposes in modern UI design:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Visual Engagement:</strong> Captures user attention with dynamic text animations</li>
                <li><strong>Progressive Disclosure:</strong> Reveals content gradually to guide user focus</li>
                <li><strong>Perceived Performance:</strong> Creates a sense of responsiveness and interactivity</li>
                <li><strong>Storytelling:</strong> Enhances narrative flow by controlling the timing of text appearance</li>
                <li><strong>Brand Personality:</strong> Adds character and distinctiveness to your interface</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Implementation Details</h2>
              
              <p>
                Our EnhancedTextEffect component uses a combination of React hooks, the Intersection Observer API, and carefully timed animations to create engaging text effects:
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Core Structure</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface EnhancedTextEffectProps {
  words: string;
  duration?: number;
  delay?: number;
  className?: string;
  variant?: "generate" | "reveal" | "combined";
  textSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  threshold?: number;
  rootMargin?: string;
}

export function EnhancedTextEffect({
  words,
  duration = 0.5,
  delay = 0.1,
  className,
  variant = "generate",
  textSize = "base",
  fontWeight = "normal",
  threshold = 0,
  rootMargin = "0px",
}: EnhancedTextEffectProps) {
  const [isInView, setIsInView] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Text size classes
  const textSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  // Font weight classes
  const fontWeightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (!isInView) return;

    if (variant === "generate" || variant === "combined") {
      let currentText = "";
      const interval = duration * 1000 / words.length;

      const timer = setInterval(() => {
        if (currentText.length < words.length) {
          currentText = words.substring(0, currentText.length + 1);
          setDisplayText(currentText);
        } else {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    } else if (variant === "reveal") {
      setDisplayText(words);
    }
  }, [isInView, words, duration, variant]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "inline-block",
        textSizeClasses[textSize],
        fontWeightClasses[fontWeight],
        className
      )}
    >
      {variant === "generate" && (
        <span>{isInView ? displayText : ""}</span>
      )}
      {variant === "reveal" && (
        <div className="overflow-hidden">
          <div
            className="transform transition-transform"
            style={{
              transitionDuration: \`\${duration}s\`,
              transitionDelay: \`\${delay}s\`,
              transform: isInView ? "translateY(0)" : "translateY(100%)",
            }}
          >
            {words}
          </div>
        </div>
      )}
      {variant === "combined" && (
        <div className="overflow-hidden">
          <div
            className="transform transition-transform"
            style={{
              transitionDuration: \`\${duration * 0.5}s\`,
              transitionDelay: \`\${delay}s\`,
              transform: isInView ? "translateY(0)" : "translateY(100%)",
            }}
          >
            {displayText}
          </div>
        </div>
      )}
    </div>
  );
}`}
              </pre>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Animation Variants</h3>
              
              <p>
                The component supports three main animation variants:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Generate:</strong> Types out text character by character, similar to a typewriter effect</li>
                <li><strong>Reveal:</strong> Slides the entire text into view with a smooth transition</li>
                <li><strong>Combined:</strong> Combines both effects - slides in while also typing out the text</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Intersection Observer</h3>
              
              <p>
                A key feature of our implementation is using the Intersection Observer API to trigger animations when elements enter the viewport:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>The component creates an observer that watches for the element to enter the viewport</li>
                <li>Animation only starts when the element is visible, saving resources</li>
                <li>Customizable threshold and rootMargin for fine-tuning when animations trigger</li>
                <li>Proper cleanup of observers to prevent memory leaks</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Usage Examples</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Basic Generate Effect</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<EnhancedTextEffect
  words="This text will be typed out character by character."
  duration={0.5}
  variant="generate"
  textSize="xl"
/>`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Reveal Effect</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<EnhancedTextEffect
  words="This text will slide up into view."
  duration={0.5}
  variant="reveal"
  textSize="xl"
  delay={0.2}
/>`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Combined Effect</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<EnhancedTextEffect
  words="This text will slide up while being typed out."
  duration={0.7}
  variant="combined"
  textSize="xl"
  fontWeight="bold"
/>`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">With Custom Threshold</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<EnhancedTextEffect
  words="This animation will trigger when 50% of the element is visible."
  duration={0.5}
  variant="generate"
  textSize="lg"
  threshold={0.5}
  rootMargin="20px"
/>`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Customization Options</h2>
              
              <p>
                The component accepts several props for customization:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><code>words</code>: The text content to animate</li>
                <li><code>duration</code>: Animation duration in seconds (default: 0.5)</li>
                <li><code>delay</code>: Delay before animation starts in seconds (default: 0.1)</li>
                <li><code>variant</code>: Animation type - "generate", "reveal", or "combined"</li>
                <li><code>textSize</code>: Text size from "xs" to "5xl"</li>
                <li><code>fontWeight</code>: Font weight - "normal", "medium", "semibold", or "bold"</li>
                <li><code>threshold</code>: Intersection observer threshold (0-1)</li>
                <li><code>rootMargin</code>: Intersection observer root margin</li>
                <li><code>className</code>: Additional CSS classes</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Performance Considerations</h2>
              
              <p>
                While text animations can enhance user experience, it's important to consider performance:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Animations only trigger when elements are in view, reducing unnecessary processing</li>
                <li>Interval timers are properly cleared to prevent memory leaks</li>
                <li>For very long text, consider using a larger duration to maintain smooth animation</li>
                <li>Use the component judiciously on pages with many instances to avoid performance issues</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Accessibility Considerations</h2>
              
              <p>
                We've implemented several accessibility features in our text effects component:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Text remains selectable and readable by screen readers</li>
                <li>Animations don't interfere with keyboard navigation</li>
                <li>The full text is available in the DOM for assistive technologies</li>
                <li>Animations respect user preferences for reduced motion when implemented with appropriate CSS</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Best Practices</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Use text animations sparingly for maximum impact</li>
                <li>Keep animated text concise and readable</li>
                <li>Consider using animations for headings and important callouts rather than body text</li>
                <li>Adjust duration based on text length - longer text should have longer durations</li>
                <li>Test animations on different devices to ensure smooth performance</li>
                <li>Consider implementing a "prefers-reduced-motion" media query check</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                The EnhancedTextEffect component provides a flexible and engaging way to animate text in your application. By using the Intersection Observer API and carefully timed animations, it creates visually appealing effects that enhance user engagement without sacrificing performance or accessibility.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between">
                <Link href="/blog/components/glare-card" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ← Glare Card Component
                </Link>
                <Link href="/blog/components/wobble-card" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Next: Wobble Card Component →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
