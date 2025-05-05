'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { EnhancedTextEffect } from '@/components/ui/effects/enhanced-text-effect';

/**
 * Template for component pages
 * 
 * This template will be used for all pages in the /components route
 * but unlike layouts, it will reset its state on each navigation.
 * 
 * Key differences from layouts:
 * - State is reset when navigating between pages
 * - Components re-render completely on each navigation
 * - Good for page-specific UI that needs fresh state
 */
export default function ComponentsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  // This state will be reset when navigating between component pages
  const [visitCount, setVisitCount] = useState(1);
  const [lastVisit, setLastVisit] = useState(new Date());
  
  // This effect will run every time the template is rendered
  // which happens on every navigation to a new page
  useEffect(() => {
    console.log('Component template rendered');
    setVisitCount((prev) => prev + 1);
    setLastVisit(new Date());
    
    // This cleanup function will run before the next render
    return () => {
      console.log('Component template cleanup');
    };
  }, []);
  
  return (
    <div className="space-y-8">
      {/* This header will be re-rendered on each page navigation */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <EnhancedTextEffect
            words="Component Library"
            duration={0.8}
            variant="combined"
            textSize="3xl"
            fontWeight="bold"
            threshold={0.1}
            rootMargin="50px"
          />
        </motion.div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-slate-300">
            Explore our collection of customizable, accessible UI components
          </p>
          
          {/* This counter will reset on each page navigation */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-md px-4 py-2 text-sm text-slate-300">
            <p>Page visits: {visitCount}</p>
            <p>Last visit: {lastVisit.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
      
      {/* Children content */}
      {children}
    </div>
  );
}
