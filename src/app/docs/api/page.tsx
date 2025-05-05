"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/cards/card";
import { IconCode, IconBrandTypescript, IconApi, IconComponents } from "@tabler/icons-react";

// Sample API components
const apiComponents = [
  {
    name: "Button",
    description: "Interactive button component with various styles and animations.",
    props: [
      { name: "variant", type: "string", default: "'primary'", description: "Button style variant: 'primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'" },
      { name: "size", type: "string", default: "'md'", description: "Button size: 'sm', 'md', 'lg', 'icon'" },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the button is disabled" },
      { name: "className", type: "string", default: "''", description: "Additional CSS classes" },
      { name: "onClick", type: "function", default: "undefined", description: "Function called when button is clicked" },
    ],
  },
  {
    name: "Card",
    description: "Versatile card component for displaying content in a contained format.",
    props: [
      { name: "className", type: "string", default: "''", description: "Additional CSS classes" },
      { name: "children", type: "ReactNode", default: "undefined", description: "Card content" },
    ],
    subComponents: [
      { name: "Card.Header", description: "Card header section" },
      { name: "Card.Title", description: "Card title" },
      { name: "Card.Description", description: "Card description text" },
      { name: "Card.Content", description: "Main card content area" },
      { name: "Card.Footer", description: "Card footer section" },
    ],
  },
  {
    name: "AceternityDropdown",
    description: "Modern dropdown component with animations and keyboard navigation.",
    props: [
      { name: "options", type: "DropdownOption[]", default: "[]", description: "Array of dropdown options" },
      { name: "value", type: "string", default: "''", description: "Currently selected value" },
      { name: "onChange", type: "function", default: "undefined", description: "Function called when selection changes" },
      { name: "placeholder", type: "string", default: "'Select an option'", description: "Placeholder text when no option is selected" },
      { name: "className", type: "string", default: "''", description: "Additional CSS classes" },
      { name: "variant", type: "string", default: "'default'", description: "Dropdown style variant: 'default', 'minimal', 'bordered', 'glass'" },
      { name: "size", type: "string", default: "'md'", description: "Dropdown size: 'sm', 'md', 'lg'" },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the dropdown is disabled" },
      { name: "label", type: "string", default: "undefined", description: "Label text for the dropdown" },
      { name: "error", type: "string", default: "undefined", description: "Error message to display" },
    ],
  },
];

export default function ApiReferencePage() {
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
            API Reference
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Detailed documentation of component props, methods, and usage patterns.
          </p>
        </motion.div>

        <div className="space-y-12">
          {apiComponents.map((component, index) => (
            <motion.section
              key={component.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              id={component.name.toLowerCase()}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-neutral-200">
                <IconComponents className="text-blue-500" size={24} />
                {component.name}
              </h2>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconApi size={20} className="text-blue-500" />
                    Overview
                  </CardTitle>
                  <CardDescription>{component.description}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IconBrandTypescript size={20} className="text-blue-500" />
                    Props
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-800">
                          <th className="py-2 px-4 text-left text-neutral-200">Name</th>
                          <th className="py-2 px-4 text-left text-neutral-200">Type</th>
                          <th className="py-2 px-4 text-left text-neutral-200">Default</th>
                          <th className="py-2 px-4 text-left text-neutral-200">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {component.props.map((prop) => (
                          <tr key={prop.name} className="border-b border-neutral-800">
                            <td className="py-2 px-4">
                              <code className="bg-neutral-800 px-2 py-1 rounded text-sm">{prop.name}</code>
                            </td>
                            <td className="py-2 px-4 text-blue-400">
                              <code className="bg-blue-500/10 px-2 py-1 rounded text-sm">{prop.type}</code>
                            </td>
                            <td className="py-2 px-4 text-neutral-400">
                              <code className="bg-neutral-800 px-2 py-1 rounded text-sm">{prop.default}</code>
                            </td>
                            <td className="py-2 px-4 text-neutral-300">{prop.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {component.subComponents && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconCode size={20} className="text-blue-500" />
                      Sub-Components
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {component.subComponents.map((subComponent) => (
                        <div key={subComponent.name} className="flex items-center justify-between border-b border-neutral-800 pb-2">
                          <code className="bg-neutral-800 px-2 py-1 rounded text-sm">{subComponent.name}</code>
                          <span className="text-neutral-400">{subComponent.description}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
