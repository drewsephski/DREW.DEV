"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import LandingNavbar from "@/components/landing-navbar";
import Link from "next/link";

export default function BuildingPricingPageBlog() {
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
      <div className="z-10 max-w-4xl w-full items-center justify-between font-mono text-sm relative">
        <LandingNavbar />

        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto mt-16 mb-32 bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              Building a Modern Pricing Page with React, Tailwind, and Motion
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                A well-designed pricing page is crucial for any SaaS or product website. It not only communicates your pricing structure but also serves as a conversion point for potential customers. In this detailed guide, we'll walk through how we built our modern, interactive pricing page using React, Tailwind CSS, and Motion.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">The Design Philosophy</h2>
              
              <p>
                Our pricing page design follows several key principles:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Visual Hierarchy:</strong> The most popular plan stands out with additional height and a prominent badge.</li>
                <li><strong>Micro-interactions:</strong> Subtle animations and hover effects create an engaging experience.</li>
                <li><strong>Clear Value Proposition:</strong> Each plan clearly communicates what users get for their money.</li>
                <li><strong>Responsive Design:</strong> The layout adapts seamlessly to different screen sizes.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Key Components</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">1. Interactive Background</h3>
              
              <p>
                We implemented an animated gradient background using the <code>BackgroundGradientAnimation</code> component from Aceternity UI. This creates a dynamic, engaging backdrop that responds to user mouse movements.
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<BackgroundGradientAnimation
  gradientBackgroundStart="rgb(0, 0, 20)"
  gradientBackgroundEnd="rgb(0, 0, 40)"
  firstColor="18, 113, 255"
  secondColor="221, 74, 255"
  thirdColor="100, 220, 255"
  size="100%"
  blendingValue="hard-light"
  interactive={true}
/>`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">2. Billing Period Toggle</h3>
              
              <p>
                We added a monthly/yearly toggle to allow users to switch between billing periods. This is implemented using React state and conditional rendering:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`const [billingPeriod, setBillingPeriod] = useState('monthly');

// Toggle UI
<div className="relative inline-flex rounded-full p-1 bg-slate-800/50">
  <button
    onClick={() => setBillingPeriod('monthly')}
    className={\`relative px-6 py-2 text-sm font-medium rounded-full \${
      billingPeriod === 'monthly'
        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600'
        : 'text-slate-300 hover:text-white'
    }\`}
  >
    Monthly
  </button>
  <button
    onClick={() => setBillingPeriod('yearly')}
    className={\`relative px-6 py-2 text-sm font-medium rounded-full \${
      billingPeriod === 'yearly'
        ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600'
        : 'text-slate-300 hover:text-white'
    }\`}
  >
    Yearly
    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] px-2 py-0.5 rounded-full">
      Save 20%
    </span>
  </button>
</div>`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">3. Enhanced Pricing Cards</h3>
              
              <p>
                Each pricing tier is displayed in a card with hover effects, decorative elements, and clear feature lists. We used the <code>AceternityGlareCard</code> component which provides a premium glare effect on hover.
              </p>
              
              <p>
                Key features of our pricing cards:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Decorative background elements using absolute positioning</li>
                <li>Gradient text for headings using <code>bg-clip-text</code> and <code>text-transparent</code></li>
                <li>Hover animations using Motion's <code>whileHover</code> property</li>
                <li>Dynamic pricing based on the selected billing period</li>
                <li>Consistent feature list styling with custom checkmark icons</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">4. FAQ Section</h3>
              
              <p>
                We added a FAQ section to address common questions about pricing, implemented as an array of question/answer objects that are mapped to UI components:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`{[
  {
    question: "How does the 14-day free trial work?",
    answer: "You can start your 14-day free trial with full access to all features..."
  },
  // More FAQ items...
].map((faq, index) => (
  <motion.div 
    key={index}
    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
    <p className="text-white/70 text-sm">{faq.answer}</p>
  </motion.div>
))}`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Technical Implementation Details</h2>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Responsive Design</h3>
              
              <p>
                We used Tailwind's responsive utilities to ensure the pricing page looks great on all devices:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Single column layout on mobile (<code>grid-cols-1</code>)</li>
                <li>Three column layout on medium screens and up (<code>md:grid-cols-3</code>)</li>
                <li>Adjusted padding and spacing for different screen sizes</li>
                <li>Flexible button layout that stacks on mobile (<code>flex-col sm:flex-row</code>)</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Animation with Motion</h3>
              
              <p>
                We used the Motion library to add subtle animations throughout the page:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Staggered fade-in animations for each pricing card</li>
                <li>Hover animations for cards and buttons</li>
                <li>Scale animations on button clicks</li>
                <li>Transition effects for the billing period toggle</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Styling with Tailwind CSS</h3>
              
              <p>
                Tailwind CSS allowed us to rapidly build and iterate on the design:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom gradients using <code>bg-gradient-to-r</code></li>
                <li>Glass-like effects with <code>backdrop-blur-sm</code> and <code>bg-white/10</code></li>
                <li>Consistent spacing with Tailwind's spacing utilities</li>
                <li>Custom animations and transitions</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                Building a modern pricing page requires attention to both design details and technical implementation. By combining React for component structure, Tailwind CSS for styling, and Motion for animations, we created a pricing page that not only communicates our pricing structure clearly but also provides an engaging user experience.
              </p>
              
              <p>
                The result is a visually appealing, interactive pricing page that helps convert visitors into customers by clearly communicating the value of each pricing tier.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View the pricing page →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
