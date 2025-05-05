'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';

// Dynamically import the FloatingDockDemo with no SSR to avoid hydration issues
const DynamicFloatingDockDemo = dynamic(
  () => import('@/components/floating-dock-demo').then(mod => ({
    default: mod.default
  })),
  { ssr: false }
);

export function NavigationProvider() {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Find the navigation container in the DOM
  const navigationContainer = document.getElementById('global-navigation');

  // If the container exists, render the navigation components inside it
  if (navigationContainer) {
    return createPortal(
      <>
        <DynamicFloatingDockDemo />
      </>,
      navigationContainer
    );
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
