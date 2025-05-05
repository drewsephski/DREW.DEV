"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/cards/card";
import { IconPalette, IconTypography, IconRuler, IconShadow, IconBorderRadius } from "@tabler/icons-react";

// Sample design tokens
const colorTokens = [
  { name: "primary", value: "#3b82f6", description: "Primary brand color" },
  { name: "secondary", value: "#6b7280", description: "Secondary brand color" },
  { name: "accent", value: "#8b5cf6", description: "Accent color for highlights" },
  { name: "background", value: "#111827", description: "Background color" },
  { name: "foreground", value: "#f9fafb", description: "Foreground/text color" },
  { name: "muted", value: "#374151", description: "Muted background color" },
  { name: "muted-foreground", value: "#9ca3af", description: "Muted text color" },
];

const spacingTokens = [
  { name: "0", value: "0px", description: "No spacing" },
  { name: "1", value: "0.25rem (4px)", description: "Extra small spacing" },
  { name: "2", value: "0.5rem (8px)", description: "Small spacing" },
  { name: "3", value: "0.75rem (12px)", description: "Medium-small spacing" },
  { name: "4", value: "1rem (16px)", description: "Medium spacing" },
  { name: "6", value: "1.5rem (24px)", description: "Medium-large spacing" },
  { name: "8", value: "2rem (32px)", description: "Large spacing" },
  { name: "12", value: "3rem (48px)", description: "Extra large spacing" },
  { name: "16", value: "4rem (64px)", description: "2x large spacing" },
];

const typographyTokens = [
  { name: "font-sans", value: "Inter, system-ui, sans-serif", description: "Sans-serif font" },
  { name: "font-mono", value: "Roboto Mono, monospace", description: "Monospace font" },
  { name: "text-xs", value: "0.75rem (12px)", description: "Extra small text" },
  { name: "text-sm", value: "0.875rem (14px)", description: "Small text" },
  { name: "text-base", value: "1rem (16px)", description: "Base text size" },
  { name: "text-lg", value: "1.125rem (18px)", description: "Large text" },
  { name: "text-xl", value: "1.25rem (20px)", description: "Extra large text" },
  { name: "text-2xl", value: "1.5rem (24px)", description: "2x large text" },
];

const borderRadiusTokens = [
  { name: "rounded-none", value: "0", description: "No border radius" },
  { name: "rounded-sm", value: "0.125rem (2px)", description: "Small border radius" },
  { name: "rounded", value: "0.25rem (4px)", description: "Default border radius" },
  { name: "rounded-md", value: "0.375rem (6px)", description: "Medium border radius" },
  { name: "rounded-lg", value: "0.5rem (8px)", description: "Large border radius" },
  { name: "rounded-xl", value: "0.75rem (12px)", description: "Extra large border radius" },
  { name: "rounded-2xl", value: "1rem (16px)", description: "2x large border radius" },
  { name: "rounded-full", value: "9999px", description: "Full/circular border radius" },
];

export default function DesignTokensPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Design Tokens
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            The foundation of our design system, providing consistent values for colors, spacing, typography, and more.
          </p>
        </motion.div>

        {/* Colors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-neutral-200">
            <IconPalette className="text-blue-500" size={24} />
            Colors
          </h2>
          <div className="grid gap-4">
            {colorTokens.map((token) => (
              <Card key={token.name} className="overflow-hidden">
                <div className="flex items-stretch">
                  <div 
                    className="w-24 h-auto" 
                    style={{ backgroundColor: token.value }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-neutral-200">{token.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="bg-neutral-800 px-2 py-1 rounded text-sm">{token.value}</code>
                      <span className="text-neutral-400 text-sm">{token.description}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-neutral-200">
            <IconTypography className="text-blue-500" size={24} />
            Typography
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Font Families & Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {typographyTokens.map((token) => (
                  <div key={token.name} className="flex items-center justify-between border-b border-neutral-800 pb-2">
                    <div>
                      <code className="bg-neutral-800 px-2 py-1 rounded text-sm">{token.name}</code>
                      <p className="text-neutral-400 text-sm mt-1">{token.description}</p>
                    </div>
                    <div className="text-neutral-200">{token.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Spacing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-neutral-200">
            <IconRuler className="text-blue-500" size={24} />
            Spacing
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {spacingTokens.map((token) => (
                  <div key={token.name} className="flex items-center gap-4">
                    <div className="bg-blue-500/20 border border-blue-500/40" style={{ width: token.value, height: "24px" }} />
                    <div>
                      <div className="flex items-center gap-2">
                        <code className="bg-neutral-800 px-2 py-1 rounded text-sm">p-{token.name}</code>
                        <code className="bg-neutral-800 px-2 py-1 rounded text-sm">m-{token.name}</code>
                        <code className="bg-neutral-800 px-2 py-1 rounded text-sm">gap-{token.name}</code>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-neutral-200">{token.value}</span>
                        <span className="text-neutral-400 text-sm">{token.description}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Border Radius */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-neutral-200">
            <IconBorderRadius className="text-blue-500" size={24} />
            Border Radius
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {borderRadiusTokens.map((token) => (
              <Card key={token.name} className="overflow-hidden">
                <CardContent className="p-4">
                  <div 
                    className="w-full h-16 bg-blue-500/20 border border-blue-500/40 mb-3"
                    style={{ borderRadius: token.value }}
                  />
                  <code className="block bg-neutral-800 px-2 py-1 rounded text-sm mb-1">{token.name}</code>
                  <div className="text-neutral-200 text-sm">{token.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
