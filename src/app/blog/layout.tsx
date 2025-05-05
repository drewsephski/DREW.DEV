
'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const BlogLayout = ({ children }) => {
  const pathname = usePathname();

  // Implement scroll restoration and analytics
  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    // Example analytics tracking
    const logPageView = () => {
      console.log(`Page view: ${pathname}`);
      // In a real app, you would call your analytics service here
    };

    logPageView();

    // Implement prefetching for performance
    const prefetchRelatedContent = () => {
      // This would prefetch related content based on the current path
      // For example, if on a blog post, prefetch related posts
    };

    // Run after initial render
    setTimeout(prefetchRelatedContent, 1000);
  }, [pathname]);

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-[rgb(0,0,30)] to-[rgb(0,10,60)]">
      {children}
    </main>
  );
};

export default BlogLayout;
