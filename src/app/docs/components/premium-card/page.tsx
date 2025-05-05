"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PremiumCard } from "@/components/ui/cards/premium-card";
import { Button } from "@/components/ui/buttons/button";
import { AceternityDropdown } from "@/components/ui/dropdown/aceternity-dropdown";
import { IconStar, IconArrowRight, IconCheck, IconX } from "@tabler/icons-react";

export default function PremiumCardPage() {
  const [variant, setVariant] = useState<"default" | "gradient" | "glass" | "dark">("default");
  const [hoverEffect, setHoverEffect] = useState<"glow" | "lift" | "border" | "none">("glow");
  const [borderGradient, setBorderGradient] = useState<boolean>(false);
  const [glowColor, setGlowColor] = useState<string>("rgba(59, 130, 246, 0.5)");

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for small projects and individual developers.",
      features: [
        "20 components",
        "Basic animations",
        "Dark mode support",
        "Community support",
      ],
      notIncluded: [
        "Premium components",
        "Advanced animations",
        "Priority support",
        "Custom theming",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Ideal for professional developers and small teams.",
      features: [
        "50+ components",
        "Advanced animations",
        "Dark mode support",
        "Email support",
        "Premium components",
        "1 project",
      ],
      notIncluded: [
        "Custom theming",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large teams and complex applications.",
      features: [
        "All components",
        "All animations",
        "Dark mode support",
        "Priority support",
        "Custom theming",
        "Unlimited projects",
        "Dedicated support",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Premium Card Component
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A versatile card component with premium effects, perfect for pricing tables, feature highlights, and more.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Customize Premium Card</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <AceternityDropdown
                  label="Variant"
                  options={[
                    { value: "default", label: "Default" },
                    { value: "gradient", label: "Gradient" },
                    { value: "glass", label: "Glass" },
                    { value: "dark", label: "Dark" },
                  ]}
                  value={variant}
                  onChange={(value) => setVariant(value as any)}
                  fullWidth
                />
              </div>
              <div>
                <AceternityDropdown
                  label="Hover Effect"
                  options={[
                    { value: "glow", label: "Glow" },
                    { value: "lift", label: "Lift" },
                    { value: "border", label: "Border" },
                    { value: "none", label: "None" },
                  ]}
                  value={hoverEffect}
                  onChange={(value) => setHoverEffect(value as any)}
                  fullWidth
                />
              </div>
              <div>
                <AceternityDropdown
                  label="Glow Color"
                  options={[
                    { value: "rgba(59, 130, 246, 0.5)", label: "Blue" },
                    { value: "rgba(139, 92, 246, 0.5)", label: "Purple" },
                    { value: "rgba(236, 72, 153, 0.5)", label: "Pink" },
                    { value: "rgba(16, 185, 129, 0.5)", label: "Green" },
                    { value: "rgba(245, 158, 11, 0.5)", label: "Amber" },
                  ]}
                  value={glowColor}
                  onChange={setGlowColor}
                  fullWidth
                />
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={borderGradient}
                    onChange={(e) => setBorderGradient(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-10 h-6 rounded-full transition ${borderGradient ? 'bg-blue-600' : 'bg-neutral-700'} relative`}>
                    <div className={`absolute w-4 h-4 rounded-full transition transform ${borderGradient ? 'translate-x-5 bg-white' : 'translate-x-1 bg-neutral-400'} top-1`}></div>
                  </div>
                  <span className="ml-3 text-neutral-300">Border Gradient</span>
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Example Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Pricing Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PremiumCard
                key={index}
                variant={variant}
                hoverEffect={hoverEffect}
                glowColor={glowColor}
                borderGradient={borderGradient}
                className={plan.popular ? "md:scale-105 md:-translate-y-2" : ""}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">
                    POPULAR
                  </div>
                )}
                <PremiumCard.Header>
                  <PremiumCard.Title gradient={true} className="mb-1">
                    {plan.name}
                  </PremiumCard.Title>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-neutral-400 ml-1">/month</span>
                  </div>
                  <p className="text-neutral-400 mb-4">{plan.description}</p>
                  <Button 
                    variant={plan.popular ? "primary" : "outline"} 
                    className="w-full"
                  >
                    {plan.cta}
                    <IconArrowRight size={16} className="ml-2" />
                  </Button>
                </PremiumCard.Header>
                <PremiumCard.Content>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-neutral-400 mb-2">INCLUDES:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <IconCheck size={16} className="text-green-500 mt-0.5 mr-2 shrink-0" />
                            <span className="text-neutral-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.notIncluded.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-neutral-400 mb-2">NOT INCLUDED:</h4>
                        <ul className="space-y-2">
                          {plan.notIncluded.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <IconX size={16} className="text-neutral-600 mt-0.5 mr-2 shrink-0" />
                              <span className="text-neutral-500">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </PremiumCard.Content>
              </PremiumCard>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Feature Cards Example</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Modern Design",
                description: "Clean, minimal design with attention to detail and modern aesthetics.",
                icon: <IconStar className="text-blue-500" size={24} />,
              },
              {
                title: "Interactive Effects",
                description: "Engaging hover and interaction effects that enhance user experience.",
                icon: <IconStar className="text-purple-500" size={24} />,
              },
            ].map((feature, index) => (
              <PremiumCard
                key={index}
                variant={variant}
                hoverEffect={hoverEffect}
                glowColor={glowColor}
                borderGradient={borderGradient}
              >
                <PremiumCard.Header>
                  <div className="flex items-center mb-4">
                    <div className="bg-neutral-800 p-3 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <PremiumCard.Title gradient={true}>
                      {feature.title}
                    </PremiumCard.Title>
                  </div>
                  <p className="text-neutral-400">
                    {feature.description}
                  </p>
                </PremiumCard.Header>
                <PremiumCard.Footer>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    Learn More
                    <IconArrowRight size={16} className="ml-2" />
                  </Button>
                </PremiumCard.Footer>
              </PremiumCard>
            ))}
          </div>
        </motion.div>

        {/* Usage Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Usage</h2>
          <div className="bg-neutral-900/50 border border-neutral-800/50 rounded-xl p-6 overflow-hidden">
            <pre className="language-tsx overflow-x-auto">
              <code className="text-sm text-neutral-300 font-mono">
{`import { PremiumCard } from "@/components/ui/cards/premium-card";

export default function MyComponent() {
  return (
    <PremiumCard 
      variant="gradient" 
      hoverEffect="glow" 
      glowColor="rgba(59, 130, 246, 0.5)"
      borderGradient={true}
    >
      <PremiumCard.Header>
        <PremiumCard.Title gradient={true}>
          Premium Feature
        </PremiumCard.Title>
        <p className="text-neutral-400">
          This is a premium feature with amazing capabilities.
        </p>
      </PremiumCard.Header>
      <PremiumCard.Content>
        <p>Main content goes here</p>
      </PremiumCard.Content>
      <PremiumCard.Footer>
        <Button variant="primary">Get Started</Button>
      </PremiumCard.Footer>
    </PremiumCard>
  );
}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
