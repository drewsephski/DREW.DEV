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
import { AceternityDropdown } from "@/components/ui/dropdown/aceternity-dropdown";
import { IconPalette, IconLayoutDashboard, IconCode, IconBrandGithub, IconCreditCard, IconSpeedboat, IconAccessible } from "@tabler/icons-react";

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
                words="Experience how DZN.DEV helps you build and manage your design system with premium components."
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
              <div className="flex-1 text-center text-sm font-medium text-neutral-400">DZN.DEV - Demo</div>
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
                            <AceternityDropdown
                              label="Variant"
                              options={[
                                { value: "primary", label: "Primary", icon: <div className="w-3 h-3 rounded-full bg-blue-600" /> },
                                { value: "secondary", label: "Secondary", icon: <div className="w-3 h-3 rounded-full bg-neutral-600" /> },
                                { value: "outline", label: "Outline", icon: <div className="w-3 h-3 rounded-full border border-neutral-400" /> },
                                { value: "ghost", label: "Ghost", icon: <div className="w-3 h-3 rounded-full bg-neutral-400/30" /> },
                                { value: "link", label: "Link", icon: <div className="w-3 h-3 rounded-full bg-blue-500/30" /> },
                                { value: "destructive", label: "Destructive", icon: <div className="w-3 h-3 rounded-full bg-red-600" /> },
                              ]}
                              value={selectedVariant}
                              onChange={setSelectedVariant}
                              fullWidth
                              variant="glass"
                            />
                          </div>
                          <div>
                            <AceternityDropdown
                              label="Size"
                              options={[
                                { value: "sm", label: "Small", icon: <div className="w-2 h-2 rounded-full bg-neutral-400" /> },
                                { value: "md", label: "Medium", icon: <div className="w-3 h-3 rounded-full bg-neutral-400" /> },
                                { value: "lg", label: "Large", icon: <div className="w-4 h-4 rounded-full bg-neutral-400" /> },
                                ...(selectedComponent === "button" ? [{ value: "icon", label: "Icon", icon: <div className="w-3 h-3 rounded-sm bg-neutral-400" /> }] : []),
                              ]}
                              value={selectedSize}
                              onChange={setSelectedSize}
                              fullWidth
                              variant="glass"
                            />
                          </div>

                          {/* Card Type Dropdown - Only show for card component */}
                          {selectedComponent === "card" && (
                            <div className="col-span-2 mt-4">
                              <AceternityDropdown
                                label="Card Type"
                                options={[
                                  { value: "standard", label: "Standard Card", icon: <IconLayoutDashboard size={16} /> },
                                  { value: "glare", label: "Glare Card", icon: <IconPalette size={16} /> },
                                  { value: "wobble", label: "Wobble Card", icon: <IconCode size={16} /> },
                                  { value: "aceternity", label: "Aceternity Glare Card", icon: <IconBrandGithub size={16} /> },
                                ]}
                                value={selectedCardType}
                                onChange={setSelectedCardType}
                                fullWidth
                                variant="glass"
                              />
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

                  <div className="mb-6 max-w-xs">
                    <AceternityDropdown
                      label="Framework"
                      options={[
                        { value: "react", label: "React", icon: <svg viewBox="0 0 24 24" height="16" width="16" aria-hidden="true" focusable="false" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path></svg> },
                        { value: "vue", label: "Vue", icon: <svg viewBox="0 0 24 24" height="16" width="16" aria-hidden="true" focusable="false" fill="currentColor"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"></path></svg> },
                        { value: "angular", label: "Angular", icon: <svg viewBox="0 0 24 24" height="16" width="16" aria-hidden="true" focusable="false" fill="currentColor"><path d="M9.93 12.645h4.134L11.996 7.74M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z"></path></svg> },
                      ]}
                      value={selectedFramework}
                      onChange={setSelectedFramework}
                      variant="glass"
                    />
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
