"use client";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { BlogContainer } from "@/components/ui/blog";
import { RelatedArticles } from "@/components/ui/blog/related-articles";

// Add this import or define the blog posts data
import { blogPosts } from "@/data/blog-posts";

export default function GlareCardComponentBlog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 relative">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 30)"
        gradientBackgroundEnd="rgb(0, 10, 60)"
        firstColor="0, 50, 150"
        secondColor="30, 70, 200"
        thirdColor="0, 100, 180"
        fourthColor="10, 30, 120"
        fifthColor="50, 90, 160"
        pointerColor="70, 130, 210"
        size="100%"
        blendingValue="hard-light"
        interactive={true}
      />
      <BlogContainer
        title="Glare Card Component"
        publishDate={new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        backgroundOpacity={0.6}
      >
        <p>
          The Glare Card component is one of our most visually striking UI elements, featuring a dynamic glare effect that follows the user&apos;s cursor. This premium effect adds depth and interactivity to your cards, creating an engaging user experience that feels responsive and modern.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Component Purpose</h2>

        <p>
          The Glare Card component serves several key purposes in modern UI design:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Visual Engagement:</strong> Creates a visually appealing effect that draws user attention</li>
          <li><strong>Interactive Feedback:</strong> Provides subtle feedback as users interact with the card</li>
          <li><strong>Perceived Quality:</strong> Adds a premium feel to your interface with minimal effort</li>
          <li><strong>Content Highlighting:</strong> Helps important content stand out from the rest of the interface</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Implementation Details</h2>

        <p>
          Our Glare Card component uses a combination of React hooks, DOM manipulation, and CSS effects to create the interactive glare effect. Here&apos;s how we implemented it:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3 text-white">Core Structure</h3>

        <p>
          The component consists of two main parts:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The card container with positioning context</li>
          <li>The glare effect element that moves with the cursor</li>
        </ul>

        <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AceternityGlareCardProps {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  glareOpacity?: number;
  glareSize?: number;
  as?: React.ElementType;
}

export function AceternityGlareCard({
  children,
  className,
  contentClassName,
  glareOpacity = 0.25,
  glareSize = 500,
  as: Component = "div",
}: AceternityGlareCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const glare = glareRef.current;

    if (!container || !glare) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Component
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300",
        className
      )}
    >
      <div
        ref={glareRef}
        className="pointer-events-none absolute -inset-[100%] z-10 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? glareOpacity : 0,
          background: \`radial-gradient(circle at \${position.x}px \${position.y}px, white, transparent \${glareSize}px)\`,
        }}
      />
      <div className={cn("relative z-20", contentClassName)}>{children}</div>
    </Component>
  );
}`}
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-3 text-white">Mouse Tracking Logic</h3>

        <p>
          The key to the glare effect is tracking the mouse position relative to the card:
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>We use <code>useRef</code> to get references to the container and glare elements</li>
          <li>A <code>mousemove</code> event listener calculates the cursor position relative to the card</li>
          <li>The position state is updated with the cursor coordinates</li>
          <li>The glare element&apos;s background is a radial gradient centered on the cursor position</li>
          <li>We track hover state to show/hide the glare effect appropriately</li>
        </ol>

        <h3 className="text-xl font-bold mt-6 mb-3 text-white">Customization Options</h3>

        <p>
          The component accepts several props for customization:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><code>glareOpacity</code>: Controls the opacity of the glare effect (default: 0.25)</li>
          <li><code>glareSize</code>: Controls the size of the glare gradient in pixels (default: 500)</li>
          <li><code>className</code>: Custom classes for the container element</li>
          <li><code>contentClassName</code>: Custom classes for the content wrapper</li>
          <li><code>as</code>: Allows rendering as a different element type (default: &quot;div&quot;)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Usage Examples</h2>

        <h3 className="text-xl font-bold mt-6 mb-3 text-white">Basic Usage</h3>

        <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<AceternityGlareCard className="w-full max-w-md p-6">
  <h3 className="text-xl font-bold mb-2">Feature Card</h3>
  <p className="text-sm text-gray-300">
    This card has a beautiful glare effect that follows your cursor.
  </p>
</AceternityGlareCard>`}
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-3 text-white">Custom Glare Settings</h3>

        <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<AceternityGlareCard
  className="w-full max-w-md p-6"
  glareOpacity={0.4}
  glareSize={300}
>
  <h3 className="text-xl font-bold mb-2">Enhanced Glare</h3>
  <p className="text-sm text-gray-300">
    This card has a more pronounced glare effect with custom settings.
  </p>
</AceternityGlareCard>`}
        </pre>

        <h3 className="text-xl font-bold mt-6 mb-3 text-white">As a Button or Link</h3>

        <pre className="bg-black/50 p-4 rounded-md overflow-auto text-sm">
{`<AceternityGlareCard
  as="button"
  className="w-full max-w-md p-6 cursor-pointer"
  onClick={() => console.log('Card clicked')}
>
  <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
  <p className="text-sm text-gray-300">
    This card functions as a button with the glare effect.
  </p>
</AceternityGlareCard>

<AceternityGlareCard
  as="a"
  href="/some-page"
  className="w-full max-w-md p-6 cursor-pointer"
>
  <h3 className="text-xl font-bold mb-2">Link Card</h3>
  <p className="text-sm text-gray-300">
    This card functions as a link with the glare effect.
  </p>
</AceternityGlareCard>`}
        </pre>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Performance Considerations</h2>

        <p>
          While the glare effect is visually impressive, it&apos;s important to consider performance implications:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The effect uses DOM manipulation and should be used judiciously on pages with many instances</li>
          <li>We use event cleanup in the useEffect hook to prevent memory leaks</li>
          <li>The radial gradient is computationally efficient compared to other visual effects</li>
          <li>Consider using a smaller glareSize on pages with many cards to improve performance</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Accessibility Considerations</h2>

        <p>
          We&apos;ve implemented several accessibility features in our Glare Card component:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>The glare effect is purely decorative and doesn&apos;t affect screen readers</li>
          <li>The component works with keyboard navigation when used as a button or link</li>
          <li>The effect is subtle enough not to cause issues for users with visual sensitivities</li>
          <li>When used as an interactive element, proper focus states are maintained</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Best Practices</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Use the Glare Card for important content that deserves visual emphasis</li>
          <li>Keep content within the card concise and focused</li>
          <li>Consider using the card for call-to-action elements or featured content</li>
          <li>Maintain consistent styling with your overall design system</li>
          <li>Test performance on lower-end devices if using multiple instances</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">Conclusion</h2>

        <p>
          The Glare Card component adds a premium, interactive element to your UI that can significantly enhance user engagement. By following the implementation details and best practices outlined in this guide, you can effectively use this component to create visually stunning interfaces that delight your users.
        </p>

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between">
          <Link href="/blog/components/badge" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Badge Component
          </Link>
          <Link href="/blog/components/text-effects" className="text-blue-400 hover:text-blue-300 transition-colors">
            Next: Text Effects Component →
          </Link>
        </div>

        {/* Add Related Articles component */}
        <RelatedArticles
          currentPostSlug="glare-card"
          posts={blogPosts.filter(post => post.category === "Components")}
          maxPosts={3}
        />
      </BlogContainer>
    </main>
  );
}
