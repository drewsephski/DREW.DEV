"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import LandingNavbar from "@/components/landing-navbar";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";

export default function BuildingBentoGridLayoutsBlog() {
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
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600">
              Building Bento Grid Layouts for Modern Web Interfaces
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Bento grid layouts have become increasingly popular in modern web design, offering a flexible and visually appealing way to organize content. In this comprehensive guide, we'll explore how we built our Bento Grid component and how you can use it to create engaging layouts for your web applications.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">What is a Bento Grid Layout?</h2>
              
              <p>
                A Bento grid layout is inspired by Japanese Bento boxes, which feature compartments of different sizes to hold various food items. In web design, a Bento grid consists of a grid of cards or containers of varying sizes and proportions, creating a visually interesting and dynamic layout.
              </p>
              
              <p>
                Unlike traditional grid layouts with uniform cells, Bento grids allow for more creative arrangements while maintaining a structured, organized appearance.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Building Our Bento Grid Component</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">1. Core Structure</h3>
              
              <p>
                Our Bento Grid component consists of two main parts:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>BentoGrid:</strong> The container component that sets up the grid layout</li>
                <li><strong>BentoGridItem:</strong> Individual grid items with consistent styling and behavior</li>
              </ul>
              
              <p>
                Here's the basic structure of our BentoGrid component:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            index: i,
          });
        }
        return child;
      })}
    </div>
  );
};`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">2. Grid Item Component</h3>
              
              <p>
                The BentoGridItem component handles the styling and animations for each grid cell:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index = 0,
}) => {
  return (
    <motion.div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200/50 bg-white/80 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:bg-white/90 backdrop-blur-sm dark:border-white/[0.1] dark:bg-black/50 dark:hover:bg-black/60 dark:hover:border-primary/50 dark:shadow-none shadow-lg",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        initial={{ opacity: 0.8, scale: 0.95 }}
        whileHover={{
          opacity: 1,
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {header}
      </motion.div>
      <motion.div
        className="transition-all duration-300 group-hover/bento:translate-x-2"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="text-primary/80 dark:text-primary/90 transition-all duration-300 group-hover/bento:text-primary/100 dark:group-hover/bento:text-primary/100"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <motion.div
          className="mt-2 mb-2 font-sans font-bold text-neutral-700 dark:text-neutral-100 transition-all duration-300 group-hover/bento:text-neutral-900 dark:group-hover/bento:text-white"
        >
          {title}
        </motion.div>
        <motion.div
          className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 transition-all duration-300 group-hover/bento:text-neutral-800 dark:group-hover/bento:text-neutral-200"
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Key Features of Our Bento Grid</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">1. Responsive Design</h3>
              
              <p>
                Our Bento Grid is fully responsive, adapting to different screen sizes:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Single column on mobile devices (<code>grid-cols-1</code>)</li>
                <li>Three columns on medium screens and up (<code>md:grid-cols-3</code>)</li>
                <li>Consistent gap spacing (<code>gap-4</code>)</li>
                <li>Fixed row height on larger screens (<code>md:auto-rows-[18rem]</code>)</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">2. Staggered Animations</h3>
              
              <p>
                We implemented staggered animations for grid items to create a more engaging loading experience:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Each item fades in and moves up from its initial position</li>
                <li>Animation delay increases with each item (<code>delay: index * 0.1</code>)</li>
                <li>Custom easing function for a more natural feel</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">3. Interactive Micro-animations</h3>
              
              <p>
                We added several micro-animations to enhance the user experience:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Cards lift slightly on hover (<code>whileHover={{ y: -5 }}</code>)</li>
                <li>Content shifts slightly to the right on hover</li>
                <li>Icons scale and rotate on hover</li>
                <li>Smooth color transitions for text and borders</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">4. Flexible Spanning</h3>
              
              <p>
                Our implementation allows for items to span multiple columns, creating visual hierarchy:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<BentoGridItem
  key={i}
  title={item.title}
  description={item.description}
  header={item.header}
  icon={item.icon}
  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
/>`}
              </pre>
              
              <p>
                This allows certain items to take up more space, drawing attention to important content.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Use Cases for Bento Grids</h2>
              
              <p>
                Bento grid layouts are versatile and can be used for various sections of a website:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Feature Showcases:</strong> Highlight product features with visual elements</li>
                <li><strong>Blog Post Grids:</strong> Display blog posts or articles in an engaging layout</li>
                <li><strong>Portfolio Displays:</strong> Showcase projects or work samples</li>
                <li><strong>Team Member Profiles:</strong> Present team members with photos and information</li>
                <li><strong>Service Offerings:</strong> Display services with icons and descriptions</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                Bento grid layouts offer a modern, flexible approach to content organization that can significantly enhance the visual appeal of your web application. Our Bento Grid component provides a solid foundation that you can customize to fit your specific design needs.
              </p>
              
              <p>
                By combining CSS Grid, React, and Motion animations, we've created a component that not only looks great but also provides an engaging user experience with smooth animations and interactive elements.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Link href="/#bento-grid" className="text-blue-400 hover:text-blue-300 transition-colors">
                  See our Bento Grid in action →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
