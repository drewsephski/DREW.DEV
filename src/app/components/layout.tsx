'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { FloatingDock, defaultDockItems } from '@/components/ui/navigation/floating-dock';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * Layout for the components section
 * 
 * This layout will be shared across all pages in the /components route
 * and will maintain its state across navigation within this section.
 * 
 * Key benefits:
 * - State is preserved when navigating between pages in this section
 * - Components don't re-render when navigating
 * - Provides consistent UI elements across all component pages
 */
export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This state will be preserved when navigating between component pages
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // This ref and state will be preserved across navigation
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  // Categories for the sidebar
  const categories = [
    { id: 'all', name: 'All Components' },
    { id: 'buttons', name: 'Buttons' },
    { id: 'cards', name: 'Cards' },
    { id: 'forms', name: 'Forms' },
    { id: 'layout', name: 'Layout' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'data-display', name: 'Data Display' },
    { id: 'feedback', name: 'Feedback' },
    { id: 'overlays', name: 'Overlays' },
    { id: 'typography', name: 'Typography' },
  ];
  
  // This effect will only run once when the layout is mounted
  // and will not re-run when navigating between component pages
  useEffect(() => {
    console.log('Components layout mounted');
    
    // This cleanup function will only run when the user navigates away from the components section
    return () => {
      console.log('Components layout unmounted');
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background that persists across component pages */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 30)"
        gradientBackgroundEnd="rgb(0, 10, 60)"
        firstColor="0, 50, 150"
        secondColor="30, 70, 200"
        thirdColor="0, 100, 180"
        fourthColor="10, 30, 120"
        fifthColor="50, 90, 160"
        pointerColor="70, 130, 210"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
      />
      
      {/* Navigation dock that persists across component pages */}
      <FloatingDock items={defaultDockItems} />
      
      <div className="flex min-h-screen relative z-10">
        {/* Sidebar that maintains its state across navigation */}
        <motion.aside
          ref={ref}
          className={`bg-slate-900/50 backdrop-blur-sm border-r border-slate-800 p-4 w-64 fixed h-full transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Components</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600/20 text-blue-300'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.aside>
        
        {/* Toggle button for sidebar */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-20 left-4 z-20 bg-blue-600 text-white p-2 rounded-md shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        
        {/* Main content area */}
        <main className={`flex-1 p-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {/* Breadcrumb navigation */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-slate-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <Link href="/components" className="ml-1 text-sm font-medium text-blue-400 hover:text-blue-300 md:ml-2">
                      Components
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-slate-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-slate-400 md:ml-2">
                      {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          {/* Children content */}
          {children}
        </main>
      </div>
    </div>
  );
}
