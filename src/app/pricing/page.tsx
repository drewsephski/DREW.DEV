"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const handlePlanHover = (plan: string | null) => {
    setHoveredPlan(plan);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 20)"
        gradientBackgroundEnd="rgb(0, 0, 40)"
        firstColor="18, 113, 255"
        secondColor="221, 74, 255"
        thirdColor="100, 220, 255"
        fourthColor="200, 50, 50"
        fifthColor="180, 180, 50"
        pointerColor="140, 100, 255"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
      />
      <div className="z-10 max-w-7xl w-full items-center justify-between font-mono text-sm relative">

        <div className="w-full max-w-7xl mx-auto mt-16 mb-32">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-accent dark:from-primary dark:via-foreground dark:to-accent mb-6">
              <EnhancedTextEffect
                words="Simple, Transparent Pricing"
                duration={0.3}
                variant="combined"
                textSize="4xl"
                fontWeight="bold"
                threshold={0.1}
                rootMargin="50px"
              />
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              <EnhancedTextEffect
                words="Choose the plan that's right for your team. All plans include a 14-day free trial with full access to premium features."
                duration={0.2}
                variant="reveal"
                textSize="xl"
                threshold={0.1}
                rootMargin="20px"
              />
            </p>

            {/* Billing Period Toggle */}
            <div className="flex items-center justify-center space-x-4 mt-8 mb-4">
              <motion.div
                className="relative inline-flex rounded-full p-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    billingPeriod === 'monthly'
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    billingPeriod === 'yearly'
                      ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                    Save 20%
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onHoverStart={() => handlePlanHover('starter')}
              onHoverEnd={() => handlePlanHover(null)}
            >
              <AceternityGlareCard
                className="h-full min-h-[600px] flex flex-col text-white overflow-hidden"
                contentClassName="flex flex-col p-6 relative z-10"
              >
                {/* Plan Icon */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full"></div>
                <div className="mb-6 relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Starter</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">${billingPeriod === 'monthly' ? '29' : '23'}</span>
                    <span className="text-lg text-blue-300/70 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'month'}</span>
                    {billingPeriod === 'yearly' && <span className="ml-2 text-xs text-blue-300/70">(billed annually)</span>}
                  </div>
                  <div className="text-blue-100/80 mb-6 text-sm">
                    <EnhancedTextEffect
                      words="Perfect for individuals and small teams just getting started with design systems."
                      duration={0.3}
                      variant="generate"
                      textSize="sm"
                      threshold={0.1}
                      rootMargin="20px"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {[
                      'Up to 3 team members',
                      '50 components',
                      'Basic design tokens',
                      'React export only',
                      'Community support'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm text-blue-100/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  type="button"
                  className="group relative w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </AceternityGlareCard>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:-mt-4 md:-mb-4 z-10"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onHoverStart={() => handlePlanHover('pro')}
              onHoverEnd={() => handlePlanHover(null)}
            >
              <AceternityGlareCard
                className="h-full min-h-[650px] flex flex-col text-white relative overflow-hidden"
                contentClassName="flex flex-col p-8 relative z-10"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/10 rounded-tr-full"></div>

                {/* Popular badge */}
                <div className="absolute -top-4 -right-16 w-40 transform rotate-45 bg-gradient-to-r from-indigo-600 to-purple-600 text-center py-1 text-xs font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>

                <div className="mb-6 mt-2 relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 mb-4">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Pro</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">${billingPeriod === 'monthly' ? '79' : '63'}</span>
                    <span className="text-lg text-indigo-300/70 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'month'}</span>
                    {billingPeriod === 'yearly' && <span className="ml-2 text-xs text-indigo-300/70">(billed annually)</span>}
                  </div>
                  <div className="text-indigo-100/80 mb-6 text-sm">
                    <EnhancedTextEffect
                      words="For growing teams that need more power and flexibility. Scale your design system with advanced features."
                      duration={0.3}
                      variant="generate"
                      textSize="sm"
                      threshold={0.1}
                      rootMargin="20px"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {[
                      'Up to 10 team members',
                      'Unlimited components',
                      'Advanced design tokens',
                      'React, Vue, and Angular export',
                      'Version history (30 days)',
                      'Priority email support'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm text-indigo-100/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  type="button"
                  className="group relative w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 overflow-hidden shadow-lg shadow-indigo-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </AceternityGlareCard>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onHoverStart={() => handlePlanHover('enterprise')}
              onHoverEnd={() => handlePlanHover(null)}
            >
              <AceternityGlareCard
                className="h-full min-h-[600px] flex flex-col text-white overflow-hidden"
                contentClassName="flex flex-col p-6 relative z-10"
              >
                {/* Plan Icon */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-bl-full"></div>
                <div className="mb-6 relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 mb-4">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600">Enterprise</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">${billingPeriod === 'monthly' ? '199' : '159'}</span>
                    <span className="text-lg text-pink-300/70 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'month'}</span>
                    {billingPeriod === 'yearly' && <span className="ml-2 text-xs text-pink-300/70">(billed annually)</span>}
                  </div>
                  <div className="text-pink-100/80 mb-6 text-sm">
                    <EnhancedTextEffect
                      words="For large organizations with complex design system needs. Enterprise-grade solutions with dedicated support."
                      duration={0.3}
                      variant="generate"
                      textSize="sm"
                      threshold={0.1}
                      rootMargin="20px"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-3 mb-8">
                    {[
                      'Unlimited team members',
                      'Unlimited components',
                      'Custom design token system',
                      'All framework exports',
                      'Unlimited version history',
                      'Dedicated support manager',
                      'Custom onboarding'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm text-pink-100/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  type="button"
                  className="group relative w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Contact Sales</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </AceternityGlareCard>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            className="mt-24 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              Frequently Asked Questions
            </h2>

            <Accordion
              items={[
                {
                  title: "How does the 14-day free trial work?",
                  content: "You can start your 14-day free trial with full access to all features. No credit card required. At the end of your trial, you can choose the plan that best fits your needs or continue with the free tier."
                },
                {
                  title: "Can I switch plans later?",
                  content: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated amount for the remainder of your billing cycle. When downgrading, the new rate will apply to your next billing cycle."
                },
                {
                  title: "What payment methods do you accept?",
                  content: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Enterprise plans, we also offer invoicing with net-30 terms."
                },
                {
                  title: "Is there a discount for non-profits or educational institutions?",
                  content: "Yes, we offer special pricing for non-profits, educational institutions, and open-source projects. Please contact our sales team for more information."
                },
                {
                  title: "How does the team member limit work?",
                  content: "The team member limit refers to the number of users who can access your design system with edit permissions. Viewers (read-only access) are unlimited on all plans."
                }
              ]}
              className="space-y-4"
              itemClassName="hover:shadow-lg transition-all duration-300"
            />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-24 mb-16 text-center max-w-4xl mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-10 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Ready to elevate your design system?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of designers and developers who are building better products faster with our premium UI components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                type="button"
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-indigo-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                type="button"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/" className="text-white/50 hover:text-white underline transition-colors">
                Return to home
              </Link>
              <Link href="/blog/building-modern-pricing-page" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                <span>Read how we built this page</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
