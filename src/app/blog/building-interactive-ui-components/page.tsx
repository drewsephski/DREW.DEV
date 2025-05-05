"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import LandingNavbar from "@/components/landing-navbar";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";

export default function BuildingInteractiveUIComponentsBlog() {
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
        <LandingNavbar />

        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto mt-16 mb-32 bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              Building Interactive UI Components with React and Motion
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Modern web applications demand engaging, interactive user interfaces that respond to user actions with fluid animations and transitions. In this comprehensive guide, we'll explore how we built our library of interactive UI components using React, Motion, and Tailwind CSS.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">The Importance of Interactive Components</h2>
              
              <p>
                Interactive components enhance user engagement by providing visual feedback, guiding user attention, and creating a more enjoyable user experience. When implemented correctly, these interactions feel natural and intuitive, making your application more accessible and user-friendly.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Key Components in Our Library</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">1. AceternityGlareCard</h3>
              
              <p>
                The AceternityGlareCard is one of our most popular components, featuring a premium glare effect that follows the user's cursor. This component creates a sense of depth and dimension, making flat designs feel more tactile and engaging.
              </p>
              
              <p>
                Key features of the AceternityGlareCard include:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Cursor-following glare effect with smooth transitions</li>
                <li>Customizable content and styling</li>
                <li>Responsive design that works on all screen sizes</li>
                <li>Optimized performance with React's useRef for DOM manipulation</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">2. EnhancedTextEffect</h3>
              
              <p>
                Text animations can significantly enhance the visual appeal of your application. Our EnhancedTextEffect component provides multiple text animation variants, including character-by-character generation, reveal effects, and combined animations.
              </p>
              
              <p>
                Implementation details:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Intersection Observer API for triggering animations when elements enter the viewport</li>
                <li>Character-by-character animation using array manipulation and timeouts</li>
                <li>Customizable animation speed, delay, and easing functions</li>
                <li>Accessibility considerations with appropriate ARIA attributes</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">3. WobbleCard</h3>
              
              <p>
                The WobbleCard component adds a playful, 3D wobble effect on hover, creating a sense of depth and interactivity. This component is perfect for featured content, call-to-action cards, or any element you want to draw attention to.
              </p>
              
              <p>
                Technical implementation:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>3D transformations using CSS perspective and transform properties</li>
                <li>Mouse position tracking for dynamic rotation</li>
                <li>Spring animations for natural, physics-based movement</li>
                <li>Optimized performance with debounced event handlers</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Technical Implementation Challenges</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Performance Optimization</h3>
              
              <p>
                One of the biggest challenges in implementing interactive components is ensuring smooth performance, especially on lower-end devices. We addressed this by:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Using CSS transforms and opacity for animations instead of more expensive properties</li>
                <li>Implementing debouncing and throttling for event handlers</li>
                <li>Leveraging React's useRef for direct DOM manipulation when necessary</li>
                <li>Using the will-change CSS property judiciously to hint at upcoming animations</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Cross-Browser Compatibility</h3>
              
              <p>
                Ensuring consistent behavior across different browsers required careful testing and fallback strategies:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Feature detection for newer CSS properties</li>
                <li>Graceful degradation for browsers that don't support certain features</li>
                <li>Vendor prefixes and polyfills where necessary</li>
                <li>Comprehensive testing across Chrome, Firefox, Safari, and Edge</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                Building interactive UI components requires a combination of technical knowledge, design sensibility, and attention to detail. By leveraging the power of React, Motion, and Tailwind CSS, we've created a library of components that not only look great but also provide engaging, intuitive user experiences.
              </p>
              
              <p>
                Our component library continues to evolve as we refine existing components and add new ones based on user feedback and emerging design trends. We're committed to maintaining the perfect balance between visual appeal, performance, and accessibility.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Link href="/demo" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Explore our interactive components →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
