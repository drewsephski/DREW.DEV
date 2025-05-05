"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { FloatingDock, blogDockItems } from "@/components/ui/navigation/floating-dock";

export default function GitHubButtonComponentBlog() {
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
        <FloatingDock items={blogDockItems} />

        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto mt-16 mb-32 bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              GitHub Button Component
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                The GitHub Button component is a stylish, animated button designed specifically for GitHub-related actions like repository links, star requests, or fork prompts. With its liquid gradient effect and smooth animations, it adds a premium touch to your application while encouraging user engagement with your GitHub projects.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Component Purpose</h2>
              
              <p>
                The GitHub Button component serves several key purposes in modern UI design:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>GitHub Integration:</strong> Provides a visually distinct way to link to GitHub repositories</li>
                <li><strong>Call to Action:</strong> Encourages users to engage with your open-source projects</li>
                <li><strong>Brand Consistency:</strong> Maintains GitHub branding while integrating with your design system</li>
                <li><strong>Visual Appeal:</strong> Adds a premium, interactive element to your interface</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Implementation Details</h2>
              
              <p>
                Our GitHub Button component combines several advanced CSS and React techniques to create its distinctive appearance:
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Core Structure</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface GitHubButtonProps {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function GitHubButton({
  className,
  href = "https://github.com",
  children = "Star on GitHub",
  onClick,
}: GitHubButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 }
      }}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <svg
          className="mr-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        {children}
      </span>
    </motion.a>
  );
}`}
              </pre>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Gradient Animation</h3>
              
              <p>
                The distinctive liquid gradient effect is created using several CSS techniques:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>A conic gradient that creates the color transition effect</li>
                <li>An absolutely positioned span that extends beyond the button's boundaries</li>
                <li>CSS animation that rotates the gradient continuously</li>
                <li>A 1px padding that allows the gradient to peek through around the button's edge</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Interactive Animations</h3>
              
              <p>
                We use Motion's animation capabilities to add interactive feedback:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><code>whileHover</code> scales the button up slightly when hovered</li>
                <li><code>whileTap</code> scales the button down when clicked</li>
                <li>Smooth transitions ensure the animations feel natural</li>
                <li>Focus states are maintained for accessibility</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Customization Options</h2>
              
              <p>
                The component accepts several props for customization:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><code>href</code>: The GitHub URL to link to (default: "https://github.com")</li>
                <li><code>children</code>: The button text (default: "Star on GitHub")</li>
                <li><code>className</code>: Custom classes for additional styling</li>
                <li><code>onClick</code>: Optional click handler for custom behavior</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Usage Examples</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Basic Usage</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<GitHubButton href="https://github.com/yourusername/yourrepo" />
`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Custom Text</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<GitHubButton href="https://github.com/yourusername/yourrepo">
  Fork on GitHub
</GitHubButton>
`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">With Custom Styling</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<GitHubButton 
  href="https://github.com/yourusername/yourrepo"
  className="w-48 h-14 text-lg"
>
  View Source
</GitHubButton>
`}
              </pre>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">With Click Handler</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<GitHubButton 
  href="https://github.com/yourusername/yourrepo"
  onClick={() => {
    // Track analytics event
    analytics.track('github_button_clicked');
  }}
>
  Star Us ⭐
</GitHubButton>
`}
              </pre>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Styling Considerations</h2>
              
              <p>
                When using the GitHub Button, consider these styling best practices:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Button Size:</strong> The default size works well in most contexts, but you can adjust it using custom classes</li>
                <li><strong>Text Length:</strong> Keep text concise to maintain the button's visual appeal</li>
                <li><strong>Placement:</strong> Position the button where it's easily visible but not distracting</li>
                <li><strong>Contrast:</strong> Ensure the button stands out against its background</li>
                <li><strong>Spacing:</strong> Provide adequate spacing around the button</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Accessibility Considerations</h2>
              
              <p>
                We've implemented several accessibility features in our GitHub Button component:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Proper focus states for keyboard navigation</li>
                <li>Appropriate aria attributes for the GitHub icon</li>
                <li>Sufficient color contrast for text readability</li>
                <li>Proper link attributes including target="_blank" and rel="noopener noreferrer"</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Performance Considerations</h2>
              
              <p>
                While the GitHub Button includes animations, we've optimized it for performance:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>CSS animations are hardware-accelerated where possible</li>
                <li>The component has minimal re-renders</li>
                <li>SVG icon is optimized for size and performance</li>
                <li>Animation complexity is kept to a reasonable level</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Best Practices</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the GitHub Button for direct links to your GitHub repositories</li>
                <li>Place the button in prominent locations for open-source projects</li>
                <li>Consider using it in project documentation, landing pages, or demo sections</li>
                <li>Keep the button text relevant to the action (Star, Fork, View Source, etc.)</li>
                <li>Ensure the linked repository is public and accessible</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                The GitHub Button component provides a visually appealing way to link to your GitHub repositories and encourage user engagement with your open-source projects. With its distinctive gradient animation and interactive effects, it adds a premium touch to your application while maintaining functional simplicity.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between">
                <Link href="/blog/components/wobble-card" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ← Wobble Card Component
                </Link>
                <Link href="/blog/components" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Back to Components →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
