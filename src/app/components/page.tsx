'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { EnhancedTextEffect } from '@/components/ui/effects/enhanced-text-effect';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import ComponentsTemplate from './template';

// Component categories with their icons and descriptions
const componentCategories = [
  {
    id: 'buttons',
    name: 'Buttons',
    description: 'Interactive elements that trigger actions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="10" x="3" y="7" rx="2" />
        <path d="M7 11h10" />
      </svg>
    ),
  },
  {
    id: 'cards',
    name: 'Cards',
    description: 'Containers for displaying content and actions',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    id: 'forms',
    name: 'Forms',
    description: 'Input components for collecting user data',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    ),
  },
  {
    id: 'layout',
    name: 'Layout',
    description: 'Components for structuring page content',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Components for navigating between pages',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
        <path d="M12 12h.01" />
      </svg>
    ),
  },
  {
    id: 'data-display',
    name: 'Data Display',
    description: 'Components for displaying data and information',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

export default function ComponentsPage() {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <ComponentsTemplate>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            <EnhancedTextEffect
              words="Component Library"
              duration={0.8}
              variant="combined"
              textSize="3xl"
              fontWeight="bold"
              threshold={0.1}
              rootMargin="50px"
            />
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Explore our collection of customizable, accessible UI components for building modern web applications.
            Each component is designed with performance, accessibility, and customization in mind.
          </p>
        </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {componentCategories.map((category, index) => (
          <motion.div
            key={category.id}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/components/${category.id}`} className="block h-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                  {category.icon}
                </div>
                <h2 className="text-xl font-semibold text-white">{category.name}</h2>
              </div>
              <p className="text-slate-300 mb-4">{category.description}</p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                <span>Explore components</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      </div>
    </ComponentsTemplate>
  );
}
