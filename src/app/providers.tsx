'use client';

import React, { useEffect } from 'react';
import GlobalNavigation from '@/components/global-navigation';
import { createPortal } from 'react-dom';

export function NavigationProvider() {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Find the navigation container in the DOM
  const navigationContainer = document.getElementById('global-navigation');
  
  // If the container exists, render the GlobalNavigation component inside it
  if (navigationContainer) {
    return createPortal(<GlobalNavigation />, navigationContainer);
  }
  
  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationProvider />
      {children}
    </>
  );
}
