"use client";

import React from "react";
import { motion } from "motion/react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";
import { FloatingDock, blogDockItems } from "@/components/ui/navigation/floating-dock";

export default function BadgeComponentBlog() {
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
              Badge Component
            </h1>
            
            <div className="text-white/70 mb-8 italic">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="space-y-6 text-white/80">
              <p>
                Badges are small visual indicators used to highlight status, counts, or labels. They're perfect for drawing attention to new items, unread messages, or status indicators. Our Badge component is highly customizable and can be used in various contexts throughout your application.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Component Purpose</h2>
              
              <p>
                The Badge component serves several key purposes in modern UI design:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Status Indication:</strong> Quickly communicate the status of an item (new, completed, pending)</li>
                <li><strong>Notification Counts:</strong> Display the number of unread messages or notifications</li>
                <li><strong>Categorization:</strong> Label content with relevant categories or tags</li>
                <li><strong>Feature Highlighting:</strong> Draw attention to new or premium features</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Implementation Details</h2>
              
              <p>
                Our Badge component is built with accessibility and customization in mind. Here's how we implemented it:
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Core Structure</h3>
              
              <p>
                The Badge component is a simple span element with carefully crafted styling:
              </p>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };`}
              </pre>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Variant System</h3>
              
              <p>
                We use class-variance-authority (CVA) to create a flexible variant system for our Badge component. This allows for easy customization while maintaining consistent styling:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Default:</strong> Primary color background with contrasting text</li>
                <li><strong>Secondary:</strong> Secondary color background for less emphasis</li>
                <li><strong>Destructive:</strong> Error/warning color for critical information</li>
                <li><strong>Outline:</strong> Bordered style with transparent background</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Accessibility Considerations</h3>
              
              <p>
                We've implemented several accessibility features in our Badge component:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Sufficient color contrast between background and text</li>
                <li>Focus states for keyboard navigation</li>
                <li>Semantic HTML structure</li>
                <li>Support for aria attributes when needed</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Usage Examples</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Basic Badge</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<Badge>New</Badge>`}
              </pre>
              
              <div className="flex items-center justify-center my-4">
                <span className="inline-flex items-center rounded-full border border-transparent bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                  New
                </span>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">Variant Examples</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
              </pre>
              
              <div className="flex items-center justify-center space-x-2 my-4">
                <span className="inline-flex items-center rounded-full border border-transparent bg-blue-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                  Default
                </span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-gray-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                  Secondary
                </span>
                <span className="inline-flex items-center rounded-full border border-transparent bg-red-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                  Destructive
                </span>
                <span className="inline-flex items-center rounded-full border border-white px-2.5 py-0.5 text-xs font-semibold text-white">
                  Outline
                </span>
              </div>

              <h3 className="text-xl font-bold mt-6 mb-3 text-white">With Icons</h3>
              
              <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<Badge>
  <CheckIcon className="mr-1 h-3 w-3" />
  Completed
</Badge>`}
              </pre>
              
              <div className="flex items-center justify-center my-4">
                <span className="inline-flex items-center rounded-full border border-transparent bg-green-500 px-2.5 py-0.5 text-xs font-semibold text-white">
                  <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Completed
                </span>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Customization</h2>
              
              <p>
                The Badge component can be customized in several ways:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Custom Colors:</strong> Extend the variant system with your brand colors</li>
                <li><strong>Size Variations:</strong> Add size variants for different contexts</li>
                <li><strong>Animation:</strong> Add subtle animations for state changes</li>
                <li><strong>Shape:</strong> Modify the border-radius for different shapes</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Best Practices</h2>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Keep badge text short and concise</li>
                <li>Use consistent badge styles throughout your application</li>
                <li>Choose colors with sufficient contrast for readability</li>
                <li>Consider using badges sparingly to avoid visual clutter</li>
                <li>Ensure badges are accessible to all users, including those using screen readers</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>
              
              <p>
                The Badge component is a versatile UI element that can enhance your application's user experience by providing visual cues and status indicators. By following the implementation details and best practices outlined in this guide, you can effectively use badges to improve the usability and visual appeal of your interface.
              </p>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between">
                <Link href="/blog/components" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ← Back to Components
                </Link>
                <Link href="/blog/components/glare-card" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Next: Glare Card Component →
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
}
