"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/cards/card";
import { Button } from "@/components/ui/buttons/button";
import { IconComponents, IconArrowRight } from "@tabler/icons-react";

const components = [
  {
    name: "Buttons",
    description: "Interactive button components with various styles and animations.",
    href: "/docs/components/buttons",
    category: "Core",
  },
  {
    name: "Cards",
    description: "Versatile card components for displaying content in a contained format.",
    href: "/docs/components/cards",
    category: "Core",
  },
  {
    name: "Premium Card",
    description: "Advanced card component with interactive effects and premium styling.",
    href: "/docs/components/premium-card",
    category: "Premium",
  },
  {
    name: "Dropdowns",
    description: "Dropdown menus and select components with keyboard navigation.",
    href: "/docs/components/dropdowns",
    category: "Core",
  },
  {
    name: "Navigation",
    description: "Navigation components including navbar and floating dock.",
    href: "/docs/components/navigation",
    category: "Layout",
  },
  {
    name: "Effects",
    description: "Visual effects and animations to enhance your UI.",
    href: "/docs/components/effects",
    category: "Animation",
  },
  {
    name: "Bento Grid",
    description: "Flexible grid layout for creating modern bento box designs.",
    href: "/docs/components/bento-grid",
    category: "Layout",
  },
];

export default function ComponentsPage() {
  // Group components by category
  const groupedComponents = components.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, typeof components>);

  // Get categories
  const categories = Object.keys(groupedComponents);

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
            Component Library
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A collection of modern, accessible, and customizable UI components for your next project.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-neutral-200">{category} Components</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {groupedComponents[category].map((component, index) => (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + categoryIndex * 0.1 }}
                  >
                    <Link href={component.href} className="block h-full">
                      <Card className="h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <IconComponents className="text-blue-500" size={20} />
                            {component.name}
                          </CardTitle>
                          <CardDescription>{component.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-end">
                          <Button variant="ghost" size="sm" className="group">
                            View Documentation
                            <IconArrowRight
                              size={16}
                              className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link href="/demo">
            <Button variant="primary" size="lg">
              Try Interactive Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
