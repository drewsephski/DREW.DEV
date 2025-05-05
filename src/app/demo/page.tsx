"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import Link from "next/link";
import { Button } from "@/components/ui/buttons/button";
import GitHubButton from "@/components/ui/buttons/github-button";
import { Badge } from "@/components/ui/data-display/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/cards/card";
// GlareCard replaced with AceternityGlareCard
import { WobbleCard } from "@/components/ui/cards/wobble-card";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";

// Demo component types
type ColorToken = {
  name: string;
  value: string;
}

type SpacingToken = {
  name: string;
  value: string;
}

type Component = {
  id: string;
  name: string;
  description: string;
  framework: string;
  preview: React.ReactNode;
}

export default function DemoPage() {
  // State for the demo
  const [activeTab, setActiveTab] = useState("components");
  const [selectedComponent, setSelectedComponent] = useState("button");
  const [selectedFramework, setSelectedFramework] = useState("react");
  const [selectedVariant, setSelectedVariant] = useState("primary");
  const [selectedSize, setSelectedSize] = useState("md");
  const [selectedCardType, setSelectedCardType] = useState("standard");

  // Function to copy code to clipboard
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Demo data
  const colorTokens = [
    { name: "primary", value: "#3B82F6" },
    { name: "secondary", value: "#6366F1" },
    { name: "accent", value: "#EC4899" },
    { name: "background", value: "#111827" },
    { name: "foreground", value: "#F9FAFB" },
    { name: "muted", value: "#374151" },
    { name: "muted-foreground", value: "#9CA3AF" },
  ];

  const spacingTokens = [
    { name: "xs", value: "0.25rem" },
    { name: "sm", value: "0.5rem" },
    { name: "md", value: "1rem" },
    { name: "lg", value: "1.5rem" },
    { name: "xl", value: "2rem" },
    { name: "2xl", value: "3rem" },
    { name: "3xl", value: "4rem" },
  ];

  const components = [
    {
      id: "button",
      name: "Button",
      description: "A clickable button element with multiple variants",
      framework: "react",
      preview: (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>
      ),
    },
    {
      id: "github-button",
      name: "GitHub Button",
      description: "An interactive button with gradient animation effects",
      framework: "react",
      preview: (
        <div className="flex justify-center w-full">
          <GitHubButton />
        </div>
      ),
    },
    {
      id: "card",
      name: "Card",
      description: "A container for content with multiple variants",
      framework: "react",
      preview: (
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>This is a default card component</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">Card content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
              <CardDescription>This is a bordered card component</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">Card content goes here.</p>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      id: "badge",
      name: "Badge",
      description: "A small status indicator with multiple variants",
      framework: "react",
      preview: (
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      ),
    },
    {
      id: "glare-card",
      name: "Aceternity Glare Card",
      description: "A premium card with an advanced glare effect on hover",
      framework: "react",
      preview: (
        <div className="w-full max-w-[280px] mx-auto">
          <AceternityGlareCard
            className="text-center"
            contentClassName="flex flex-col items-center justify-center p-4"
          >
            <div className="mb-2 bg-blue-500/20 p-2 rounded-full">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-sm font-medium mb-1 tracking-wide">Aceternity Glare Card</h3>
            <p className="text-xs text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">Hover to see the glare effect.</p>
          </AceternityGlareCard>
        </div>
      ),
    },
    {
      id: "wobble-card",
      name: "Wobble Card",
      description: "A card with a wobble effect on hover",
      framework: "react",
      preview: (
        <div className="w-full max-w-[280px] mx-auto">
          <WobbleCard>
            <div className="text-center p-4">
              <div className="mb-2 bg-purple-500/20 p-2 rounded-full inline-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
                  <path d="M21 7.5L12 2L3 7.5M21 7.5L12 13M21 7.5V16.5L12 22M12 13L3 7.5M12 13V22M3 7.5V16.5L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1 tracking-wide">Wobble Card</h3>
              <p className="text-xs text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">Hover to see the wobble effect.</p>
            </div>
          </WobbleCard>
        </div>
      ),
    },
  ];

  // Get the selected component
  const currentComponent = components.find(c => c.id === selectedComponent) || components[0];

  // Function to get the dynamic component preview based on selected variant and size
  const getDynamicPreview = () => {
    if (selectedComponent === "button") {
      return (
        <div className="flex flex-col gap-4">
          <Button variant={selectedVariant} size={selectedSize}>
            {selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Button
          </Button>
        </div>
      );
    } else if (selectedComponent === "github-button") {
      return (
        <div className="flex justify-center w-full">
          <GitHubButton />
        </div>
      );
    } else if (selectedComponent === "badge") {
      return (
        <div className="flex flex-wrap gap-2">
          <Badge variant={selectedVariant} size={selectedSize}>
            {selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)}
          </Badge>
        </div>
      );
    } else if (selectedComponent === "card") {
      // Render different card types based on selectedCardType
      if (selectedCardType === "standard") {
        return (
          <Card variant={selectedVariant} size={selectedSize}>
            <CardHeader>
              <CardTitle>{selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Card</CardTitle>
              <CardDescription>This is a {selectedVariant} card with {selectedSize} size</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-300">Card content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        );
      } else if (selectedCardType === "glare") {
        return (
          <AceternityGlareCard
            className="text-center"
            contentClassName="flex flex-col items-center justify-center p-4"
          >
            <div className="mb-2 bg-blue-500/20 p-2 rounded-full inline-block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-sm font-medium mb-1 tracking-wide">Aceternity Glare Card</h3>
            <p className="text-xs text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">Hover to see the glare effect.</p>
          </AceternityGlareCard>
        );
      } else if (selectedCardType === "wobble") {
        return (
          <WobbleCard>
            <div className="text-center p-4">
              <div className="mb-2 bg-purple-500/20 p-2 rounded-full inline-block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400">
                  <path d="M21 7.5L12 2L3 7.5M21 7.5L12 13M21 7.5V16.5L12 22M12 13L3 7.5M12 13V22M3 7.5V16.5L12 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-sm font-medium mb-1 tracking-wide">Wobble Card</h3>
              <p className="text-xs text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">Hover to see the wobble effect.</p>
            </div>
          </WobbleCard>
        );
      } else if (selectedCardType === "aceternity") {
        return (
          <AceternityGlareCard
            className="flex flex-col items-center justify-center"
            contentClassName="flex flex-col items-center justify-center p-4"
          >
            <div className="mb-2 bg-pink-500/20 p-2 rounded-full inline-block">
              <svg
                width="24"
                height="24"
                viewBox="0 0 66 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-pink-400"
              >
                <path
                  d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                  stroke="currentColor"
                  strokeWidth="15"
                  strokeMiterlimit="3.86874"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium mb-1 tracking-wide">Aceternity</h3>
            <p className="text-xs text-neutral-300/90 max-w-[90%] mx-auto leading-relaxed">Premium design components.</p>
          </AceternityGlareCard>
        );
      }

      // Default to standard card
      return (
        <Card variant={selectedVariant} size={selectedSize}>
          <CardHeader>
            <CardTitle>{selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Card</CardTitle>
            <CardDescription>This is a {selectedVariant} card with {selectedSize} size</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-300">Card content goes here.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
      );
    }

    // For other components, return the default preview
    return currentComponent.preview;
  };

  // Generate code based on the selected component and framework
  const generateCode = () => {
    if (selectedComponent === "button") {
      if (selectedFramework === "react") {
        return `import React from "react";
import { Button } from "@/components/ui/buttons/button";

// Example usage with ${selectedVariant} variant and ${selectedSize} size
export default function Example() {
  return (
    <Button
      variant="${selectedVariant}"
      size="${selectedSize}"
    >
      ${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Button
    </Button>
  );
}`;
      }
    } else if (selectedComponent === "github-button") {
      if (selectedFramework === "react") {
        return `import React from "react";
import GitHubButton from "@/components/ui/buttons/github-button";

export default function Example() {
  return (
    <GitHubButton
      href="https://github.com/your-username/your-repo"
      showStar={true}
      text="Github"
    />
  );
}`;
      } else if (selectedFramework === "vue") {
        return `<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors',
      variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
});
</script>`;
      } else {
        return `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: \`
    <button
      [ngClass]="[
        'px-4 py-2 rounded-md transition-colors',
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
      ]"
    >
      <ng-content></ng-content>
    </button>
  \`
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
}`;
      }
    } else if (selectedComponent === "card") {
      if (selectedFramework === "react") {
        // Generate different code based on the selected card type
        if (selectedCardType === "standard") {
          return `import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/cards/card";
import { Button } from "@/components/ui/buttons/button";

// Example usage with ${selectedVariant} variant and ${selectedSize} size
export default function Example() {
  return (
    <Card
      variant="${selectedVariant}"
      size="${selectedSize}"
    >
      <CardHeader>
        <CardTitle>${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Card</CardTitle>
        <CardDescription>This is a ${selectedVariant} card with ${selectedSize} size</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  );
}`;
        } else if (selectedCardType === "glare") {
          return `import React from "react";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";

export default function Example() {
  return (
    <AceternityGlareCard
      className="text-center"
      contentClassName="flex flex-col items-center justify-center p-4"
    >
      <h3 className="text-lg font-medium mb-2">Aceternity Glare Card</h3>
      <p className="text-xs text-neutral-300 max-w-full">Hover over this card to see the enhanced glare effect.</p>
    </AceternityGlareCard>
  );
}`;
        } else if (selectedCardType === "wobble") {
          return `import React from "react";
import { WobbleCard } from "@/components/ui/cards/wobble-card";

export default function Example() {
  return (
    <WobbleCard>
      <div className="text-center">
        <h3 className="text-lg font-medium mb-2">Wobble Card</h3>
        <p className="text-sm text-neutral-300">Hover over this card to see the wobble effect.</p>
      </div>
    </WobbleCard>
  );
}`;
        } else if (selectedCardType === "aceternity") {
          return `import React from "react";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";

export default function Example() {
  return (
    <AceternityGlareCard
      className="flex flex-col items-center justify-center"
      contentClassName="flex flex-col items-center justify-center p-4"
    >
      <svg
        width="56"
        height="55"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-white font-bold text-lg mt-3">Aceternity</p>
    </AceternityGlareCard>
  );
}`;
        } else {
          // Default to standard card
          return `import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/cards/card";
import { Button } from "@/components/ui/buttons/button";

// Example usage with ${selectedVariant} variant and ${selectedSize} size
export default function Example() {
  return (
    <Card
      variant="${selectedVariant}"
      size="${selectedSize}"
    >
      <CardHeader>
        <CardTitle>${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)} Card</CardTitle>
        <CardDescription>This is a ${selectedVariant} card with ${selectedSize} size</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  );
}`;
        }
      } else if (selectedFramework === "vue") {
        return `<template>
  <div class="p-4 bg-neutral-800 rounded-lg border border-neutral-700">
    <h3 v-if="title" class="text-lg font-medium mb-2">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>`;
      } else {
        return `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: \`
    <div class="p-4 bg-neutral-800 rounded-lg border border-neutral-700">
      <h3 *ngIf="title" class="text-lg font-medium mb-2">{{ title }}</h3>
      <ng-content></ng-content>
    </div>
  \`
})
export class CardComponent {
  @Input() title: string = '';
}`;
      }
    } else {
      if (selectedFramework === "react") {
        return `import React from "react";
import { Badge } from "@/components/ui/data-display/badge";

// Example usage with ${selectedVariant} variant and ${selectedSize} size
export default function Example() {
  return (
    <Badge
      variant="${selectedVariant}"
      size="${selectedSize}"
    >
      ${selectedVariant.charAt(0).toUpperCase() + selectedVariant.slice(1)}
    </Badge>
  );
}`;
      } else if (selectedFramework === "vue") {
        return `<template>
  <span
    :class="[
      'px-2 py-1 text-xs font-medium rounded-full',
      variant === 'primary'
        ? 'bg-blue-600/20 text-blue-500'
        : 'bg-neutral-700 text-neutral-300'
    ]"
  >
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
});
</script>`;
      } else {
        return `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: \`
    <span
      [ngClass]="[
        'px-2 py-1 text-xs font-medium rounded-full',
        variant === 'primary'
          ? 'bg-blue-600/20 text-blue-500'
          : 'bg-neutral-700 text-neutral-300'
      ]"
    >
      <ng-content></ng-content>
    </span>
  \`
})
export class BadgeComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
}`;
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 bg-black">
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm">

        <div className="w-full max-w-7xl mx-auto mt-16 mb-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-accent dark:from-primary dark:via-foreground dark:to-accent mb-6">
              <EnhancedTextEffect
                words="Interactive Demo"
                duration={0.3}
                variant="combined"
                textSize="4xl"
                fontWeight="bold"
                threshold={0.1}
                rootMargin="50px"
              />
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              <EnhancedTextEffect
                words="Experience how DZN.dev helps you build and manage your design system with premium components."
                duration={0.2}
                variant="reveal"
                textSize="xl"
                threshold={0.1}
                rootMargin="20px"
              />
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Demo Header */}
            <div className="bg-neutral-950 p-4 border-b border-neutral-800 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-sm font-medium text-neutral-400">DZN.dev - Demo</div>
            </div>

            {/* Demo Tabs */}
            <div className="flex border-b border-neutral-800">
              <button
                type="button"
                className={`px-4 py-3 text-sm font-bold ${activeTab === "components" ? "text-blue-500 border-b-2 border-blue-500" : "text-neutral-400 hover:text-blue-200"}`}
                onClick={() => setActiveTab("components")}
              >
                Components
              </button>
              <button
                type="button"
                className={`px-4 py-3 text-sm font-bold ${activeTab === "tokens" ? "text-blue-500 border-b-2 border-blue-500" : "text-neutral-400 hover:text-blue-200"}`}
                onClick={() => setActiveTab("tokens")}
              >
                Design Tokens
              </button>
              <button
                type="button"
                className={`px-4 py-3 text-sm font-bold ${activeTab === "export" ? "text-blue-500 border-b-2 border-blue-500" : "text-neutral-400 hover:text-blue-200"}`}
                onClick={() => setActiveTab("export")}
              >
                Export
              </button>
            </div>

            {/* Demo Content */}
            <div className="p-6">
              {activeTab === "components" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-medium mb-4 text-neutral-200">Component Library</h3>
                    <div className="space-y-2">
                      {components.map((component) => (
                        <button
                          type="button"
                          key={component.id}
                          className={`w-full text-left p-3 rounded-md ${selectedComponent === component.id ? "bg-blue-600/20 text-blue-500 border border-blue-600/30" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`}
                          onClick={() => setSelectedComponent(component.id)}
                        >
                          <div className="font-medium">{component.name}</div>
                          <div className="text-xs mt-1 text-neutral-400">{component.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h3 className="text-lg font-medium mb-4 text-neutral-200">Component Preview</h3>
                    <div className="bg-neutral-800 rounded-md p-8 flex items-center justify-center min-h-[200px] border border-neutral-700">
                      {getDynamicPreview()}
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2 text-neutral-300">Component Properties</h4>
                      <div className="bg-neutral-800 rounded-md p-4 border border-neutral-700">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="variant-select" className="block text-xs text-neutral-400 mb-1">Variant</label>
                            <select
                              id="variant-select"
                              className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-sm text-neutral-200"
                              value={selectedVariant}
                              onChange={(e) => setSelectedVariant(e.target.value)}
                            >
                              <option value="primary">Primary</option>
                              <option value="secondary">Secondary</option>
                              <option value="outline">Outline</option>
                              <option value="ghost">Ghost</option>
                              <option value="link">Link</option>
                              <option value="destructive">Destructive</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="size-select" className="block text-xs text-neutral-400 mb-1">Size</label>
                            <select
                              id="size-select"
                              className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-sm text-neutral-200"
                              value={selectedSize}
                              onChange={(e) => setSelectedSize(e.target.value)}
                            >
                              <option value="sm">Small</option>
                              <option value="md">Medium</option>
                              <option value="lg">Large</option>
                              {selectedComponent === "button" && <option value="icon">Icon</option>}
                            </select>
                          </div>

                          {/* Card Type Dropdown - Only show for card component */}
                          {selectedComponent === "card" && (
                            <div className="col-span-2 mt-4">
                              <label htmlFor="card-type-select" className="block text-xs text-neutral-400 mb-1">Card Type</label>
                              <select
                                id="card-type-select"
                                className="w-full bg-neutral-700 border border-neutral-600 rounded-md px-3 py-2 text-sm text-neutral-200"
                                value={selectedCardType}
                                onChange={(e) => setSelectedCardType(e.target.value)}
                              >
                                <option value="standard">Standard Card</option>
                                <option value="glare">Glare Card</option>
                                <option value="wobble">Wobble Card</option>
                                <option value="aceternity">Aceternity Glare Card</option>
                              </select>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tokens" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-neutral-200">Color Tokens</h3>
                    <div className="space-y-3">
                      {colorTokens.map((token) => (
                        <div key={token.name} className="flex items-center">
                          {/* Inline style is used here for dynamic background color based on token value */}
                          <div
                            className="w-10 h-10 rounded-md mr-3 border border-neutral-700"
                            style={{ backgroundColor: token.value }}
                          ></div>
                          <div>
                            <div className="font-medium text-neutral-200">{token.name}</div>
                            <div className="text-xs text-neutral-400">{token.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4 text-neutral-200">Spacing Tokens</h3>
                    <div className="space-y-3">
                      {spacingTokens.map((token) => (
                        <div key={token.name} className="flex items-center">
                          <div className="w-16 mr-3">
                            {/* Inline style is used here for dynamic width based on token value */}
                            <div
                              className="h-4 bg-blue-600 rounded-sm"
                              style={{ width: token.value }}
                            ></div>
                          </div>
                          <div>
                            <div className="font-medium text-neutral-200">{token.name}</div>
                            <div className="text-xs text-neutral-400">{token.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "export" && (
                <div>
                  <h3 className="text-lg font-medium mb-4 text-neutral-200">Export Components</h3>

                  <div className="flex mb-6 space-x-2">
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm rounded-md ${selectedFramework === "react" ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`}
                      onClick={() => setSelectedFramework("react")}
                    >
                      React
                    </button>
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm rounded-md ${selectedFramework === "vue" ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`}
                      onClick={() => setSelectedFramework("vue")}
                    >
                      Vue
                    </button>
                    <button
                      type="button"
                      className={`px-3 py-1 text-sm rounded-md ${selectedFramework === "angular" ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"}`}
                      onClick={() => setSelectedFramework("angular")}
                    >
                      Angular
                    </button>
                  </div>

                  <div className="bg-neutral-950 rounded-md p-4 border border-neutral-800 font-mono text-sm text-neutral-300 overflow-auto max-h-[400px]">
                    <pre>{generateCode()}</pre>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                      onClick={copyToClipboard}
                    >
                      {isCopied ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/" className="text-foreground/70 hover:text-foreground underline">
              Return to home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
