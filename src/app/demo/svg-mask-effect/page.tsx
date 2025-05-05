'use client';

import React from 'react';
import SVGMaskEffectDemo from '@/components/ui/svg-mask-effect-demo';
import { EnhancedTextEffect } from '@/components/ui/effects/enhanced-text-effect';
import { Button } from '@/components/ui/buttons/button';
import Link from 'next/link';

export default function SVGMaskEffectPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <EnhancedTextEffect
          words="SVG Mask Effect Component"
          variant="combined"
          textSize="4xl"
          fontWeight="bold"
          className="mb-4"
        />
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          A beautiful interactive component that reveals content through a circular mask as users hover over it.
          Perfect for creating engaging and interactive sections on your website.
        </p>
      </div>

      {/* Main Demo */}
      <div className="mb-16">
        <SVGMaskEffectDemo />
      </div>

      {/* Usage Examples */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <div className="bg-slate-950 p-4 rounded-md overflow-x-auto mb-6">
          <pre className="text-sm text-slate-300">
            <code>{`import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function MyComponent() {
  return (
    <MaskContainer
      revealText={
        <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-white">
          Your revealed text here
        </p>
      }
      className="h-[40rem] rounded-md border border-slate-800"
    >
      Your masked content here with <span className="text-blue-500">highlighted elements</span>
    </MaskContainer>
  );
}`}</code>
          </pre>
        </div>
      </div>

      {/* Props Documentation */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-2 px-4 text-left">Prop</th>
                <th className="py-2 px-4 text-left">Type</th>
                <th className="py-2 px-4 text-left">Default</th>
                <th className="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800">
                <td className="py-2 px-4 font-mono text-sm">children</td>
                <td className="py-2 px-4">React.ReactNode</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Content that appears in the masked area</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 px-4 font-mono text-sm">revealText</td>
                <td className="py-2 px-4">React.ReactNode</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Content that appears in the background</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 px-4 font-mono text-sm">size</td>
                <td className="py-2 px-4">number</td>
                <td className="py-2 px-4">10</td>
                <td className="py-2 px-4">Initial size of the mask in pixels</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-2 px-4 font-mono text-sm">revealSize</td>
                <td className="py-2 px-4">number</td>
                <td className="py-2 px-4">600</td>
                <td className="py-2 px-4">Size of the mask when hovered in pixels</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono text-sm">className</td>
                <td className="py-2 px-4">string</td>
                <td className="py-2 px-4">-</td>
                <td className="py-2 px-4">Additional CSS classes for the container</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center">
        <Link href="/demo">
          <Button variant="outline" className="mr-4">Back to Demo</Button>
        </Link>
        <Link href="/components">
          <Button>Explore All Components</Button>
        </Link>
      </div>
    </div>
  );
}
