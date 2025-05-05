"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/cards/card";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";
import { Button } from "@/components/ui/buttons/button";
import {
  IconDeviceLaptop,
  IconAccessible,
  IconBolt,
  IconPalette,
  IconComponents,
  IconBrandReact,
  IconCheck
} from "@tabler/icons-react";

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Features & Capabilities
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
          Discover the powerful features that make our component library the perfect choice for your next project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Try Demo
            </Button>
          </Link>
          <Link href="/docs/components">
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Main Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-neutral-900/50 border-neutral-800/50">
            <CardContent className="p-8">
              <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <IconComponents size={28} className="text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Modern Components</h2>
              <p className="text-neutral-400 mb-4">
                Over 50 beautifully designed, fully responsive components that work seamlessly together to build stunning interfaces.
              </p>
              <ul className="space-y-2">
                {["Buttons", "Cards", "Navigation", "Forms", "Modals", "Dropdowns"].map((item) => (
                  <li key={item} className="flex items-center text-neutral-300">
                    <IconCheck size={16} className="text-blue-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50">
            <CardContent className="p-8">
              <div className="bg-purple-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                <IconBolt size={28} className="text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Stunning Animations</h2>
              <p className="text-neutral-400 mb-4">
                Fluid animations and micro-interactions that bring your interface to life without sacrificing performance.
              </p>
              <ul className="space-y-2">
                {["Hover Effects", "Transitions", "Page Animations", "Scroll Effects", "Micro-interactions", "Loading States"].map((item) => (
                  <li key={item} className="flex items-center text-neutral-300">
                    <IconCheck size={16} className="text-purple-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800/50">
            <CardContent className="p-8">
              <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <IconAccessible size={28} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-white">Accessibility First</h2>
              <p className="text-neutral-400 mb-4">
                Built with accessibility in mind, ensuring your applications are usable by everyone, regardless of ability.
              </p>
              <ul className="space-y-2">
                {["WCAG Compliant", "Keyboard Navigation", "Screen Reader Support", "Focus Management", "Color Contrast", "Semantic HTML"].map((item) => (
                  <li key={item} className="flex items-center text-neutral-300">
                    <IconCheck size={16} className="text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Showcase Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AceternityGlareCard className="flex flex-col items-center justify-center p-6">
            <div className="bg-blue-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <IconBrandReact size={28} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">React & Next.js Ready</h3>
            <p className="text-neutral-300 text-sm">
              Built specifically for React and Next.js applications with full TypeScript support.
            </p>
          </AceternityGlareCard>

          <AceternityGlareCard className="flex flex-col items-center justify-center p-6">
            <div className="bg-purple-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <IconPalette size={28} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Customizable Design</h3>
            <p className="text-neutral-300 text-sm">
              Easily customize colors, typography, spacing, and more to match your brand.
            </p>
          </AceternityGlareCard>

          <AceternityGlareCard className="flex flex-col items-center justify-center p-6">
            <div className="bg-green-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <IconDeviceLaptop size={28} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Responsive by Default</h3>
            <p className="text-neutral-300 text-sm">
              All components are designed to work flawlessly on any device size.
            </p>
          </AceternityGlareCard>
        </div>
      </motion.section>

      {/* Feature Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-12 text-white text-center">Everything You Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dark Mode Support",
              description: "Built-in dark mode with smooth transitions between light and dark themes.",
              icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            },
            {
              title: "Tailwind CSS Integration",
              description: "Seamlessly works with Tailwind CSS for easy customization and extension.",
              icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            },
            {
              title: "TypeScript Support",
              description: "Full TypeScript support with comprehensive type definitions for all components.",
              icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            },
            {
              title: "Performance Optimized",
              description: "Optimized for performance with minimal bundle size and efficient rendering.",
              icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            },
            {
              title: "Comprehensive Documentation",
              description: "Detailed documentation with examples, API references, and best practices.",
              icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            },
            {
              title: "Regular Updates",
              description: "Frequent updates with new components, features, and improvements.",
              icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            },
          ].map((feature, index) => (
            <Card key={index} className="bg-neutral-900/50 border-neutral-800/50">
              <CardContent className="p-6">
                <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-800/30">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Start building beautiful, responsive, and accessible web applications today with our component library.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo">
                <Button variant="primary" size="lg">
                  Try Demo
                </Button>
              </Link>
              <Link href="/docs/components">
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
