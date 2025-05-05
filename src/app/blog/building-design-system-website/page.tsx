"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import LandingNavbar from "@/components/landing-navbar";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";

export default function BuildingDesignSystemWebsiteBlog() {
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
              Building a Modern Design System Website: A Comprehensive Guide
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Creating a modern design system website requires careful planning, thoughtful component architecture, and attention to visual details. In this comprehensive guide, we'll walk through the development process of each major section of our design system website, sharing insights, challenges, and solutions along the way.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. The Interactive Background</h2>
              
              <p>
                One of the first elements we implemented was the interactive gradient background that responds to user mouse movements. This creates an engaging, dynamic experience that immediately captures visitors' attention.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                We created a reusable <code>BackgroundGradientAnimation</code> component that uses a combination of CSS gradients, SVG filters, and JavaScript to track mouse movements and update the gradient accordingly.
              </p>
              
              <p>
                Key features of our implementation:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Smooth animation using requestAnimationFrame for optimal performance</li>
                <li>Configurable colors, sizes, and blending modes</li>
                <li>Responsive design that works on all screen sizes</li>
                <li>Fallback static gradient for devices that don't support the required features</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. The Navigation Bar</h2>
              
              <p>
                Our navigation bar needed to be both visually appealing and functional, providing easy access to different sections of the website while maintaining the overall design aesthetic.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                We implemented a responsive navbar with the following features:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Glass-like backdrop blur effect using <code>backdrop-blur-sm</code></li>
                <li>Smooth mobile menu transitions using Motion animations</li>
                <li>Intelligent hiding of less important links on smaller screens</li>
                <li>Active link highlighting to indicate current page</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. The Hero Section</h2>
              
              <p>
                The hero section is the first thing visitors see, so it needed to make a strong impression while clearly communicating what our design system offers.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                Our hero section features:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Animated text using our custom <code>EnhancedTextEffect</code> component</li>
                <li>Staggered animations for different elements using Motion</li>
                <li>A prominent call-to-action button with hover effects</li>
                <li>Responsive layout that adapts to different screen sizes</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">4. The Bento Grid Component Showcase</h2>
              
              <p>
                To showcase our design system's features, we implemented a Bento grid layout that provides a visually interesting way to display different aspects of our system.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                Our Bento grid implementation includes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>A flexible grid layout using CSS Grid</li>
                <li>Items that can span multiple columns for visual hierarchy</li>
                <li>Staggered animations as items enter the viewport</li>
                <li>Interactive hover effects for each grid item</li>
                <li>Consistent styling with subtle shadows and borders</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">5. The Interactive Component Showcase</h2>
              
              <p>
                To demonstrate our interactive components, we created a dedicated section featuring our WobbleCard component, which showcases advanced hover interactions.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                The WobbleCard showcase features:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>3D rotation effects based on mouse position</li>
                <li>Physics-based animations using spring configurations</li>
                <li>Optimized performance with debounced event handlers</li>
                <li>Accessible implementation with appropriate ARIA attributes</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">6. The Design Token Management Section</h2>
              
              <p>
                To highlight our design token system, we created a section that demonstrates how tokens can be used to maintain consistent design across an application.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                This section includes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Visual representation of color, typography, and spacing tokens</li>
                <li>Interactive examples showing how tokens are applied</li>
                <li>Code snippets demonstrating token implementation</li>
                <li>Theme switching functionality to showcase token flexibility</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">7. The Card Variants Section</h2>
              
              <p>
                To showcase our various card components, we implemented a grid of different card styles with unique effects and interactions.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                Our card showcase includes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>AceternityGlareCard with cursor-following glare effect</li>
                <li>EnhancedCard with customizable glow and depth</li>
                <li>Consistent styling with centered content and icons</li>
                <li>Animated text generation effects for card descriptions</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">8. The Resource Cards Section</h2>
              
              <p>
                To provide easy access to different resources, we created a section with cards linking to documentation, component library, and pricing pages.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                This section features:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>EnhancedCard components with glass effect and accent colors</li>
                <li>Animated icons that respond to hover interactions</li>
                <li>Clear typography with gradient hover effects</li>
                <li>Consistent card heights and spacing for visual harmony</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">9. The Featured Articles Section</h2>
              
              <p>
                To showcase our blog content, we implemented a Featured Articles section using a Bento grid layout for visual interest.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                Our Featured Articles section includes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Reusable BentoGrid component for consistent layout</li>
                <li>Featured articles that span multiple columns</li>
                <li>Clickable cards that link to dedicated blog pages</li>
                <li>Consistent styling with the rest of the website</li>
                <li>"View all articles" link for easy navigation to the blog index</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">10. The Pricing Page</h2>
              
              <p>
                Our pricing page needed to clearly communicate our pricing structure while providing an engaging user experience with micro-interactions.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                Key features of our pricing page:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Monthly/yearly billing toggle with "Save 20%" badge</li>
                <li>AceternityGlareCard components for pricing tiers</li>
                <li>Visual hierarchy with the recommended plan standing out</li>
                <li>Hover animations and micro-interactions for buttons and cards</li>
                <li>FAQ section addressing common questions</li>
                <li>Strong call-to-action section at the bottom</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">11. The Blog System</h2>
              
              <p>
                To share insights and tutorials, we implemented a comprehensive blog system with individual article pages and a blog index.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Implementation Details</h3>
              
              <p>
                Our blog implementation includes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Consistent article layout with Tailwind Typography for styling</li>
                <li>Code snippets with syntax highlighting</li>
                <li>Responsive design that works well on all devices</li>
                <li>Animated page transitions for a smoother reading experience</li>
                <li>Blog index page with Bento grid layout for article previews</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Technical Challenges and Solutions</h2>
              
              <p>
                Throughout the development process, we encountered several challenges:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Performance Optimization:</strong> We used React.memo, useMemo, and useCallback to optimize component rendering, especially for animation-heavy components.</li>
                <li><strong>Responsive Design:</strong> We implemented a mobile-first approach with Tailwind's responsive utilities to ensure a great experience on all devices.</li>
                <li><strong>Accessibility:</strong> We ensured all interactive elements were keyboard accessible and had appropriate ARIA attributes.</li>
                <li><strong>Animation Performance:</strong> We used hardware-accelerated properties and optimized animations to maintain smooth performance.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                Building a modern design system website requires a combination of technical expertise, design sensibility, and attention to detail. By breaking down the project into manageable sections and focusing on reusable components, we created a cohesive, engaging website that effectively showcases our design system.
              </p>
              
              <p>
                The result is not just a website, but a living demonstration of our design system in action, showing potential users exactly what they can achieve with our components and tools.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Explore our design system website →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
