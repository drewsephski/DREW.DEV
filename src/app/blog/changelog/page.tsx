
import React from "react";
import { motion } from "framer-motion";
import { BlogContainer } from "@/components/ui/blog/blog-container";
import { RelatedArticles } from "@/components/ui/blog/related-articles";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";
import { IconCalendar, IconTag, IconBug, IconRocket, IconTools, IconBolt } from "@tabler/icons-react";
import { blogPosts } from "@/data/blog-posts";

interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    type: "feature" | "improvement" | "fix" | "breaking";
    description: string;
  }[];
}

const changelog: ChangelogEntry[] = [
  {
    version: "1.5.0",
    date: "June 15, 2023",
    changes: [
      { type: "feature", description: "Added AceternityDropdown component with keyboard navigation support" },
      { type: "feature", description: "Added comprehensive footer component with newsletter subscription" },
      { type: "improvement", description: "Enhanced floating dock visibility logic for better user experience" },
      { type: "improvement", description: "Updated navigation system with fully linked pages" },
      { type: "fix", description: "Fixed tooltip display in floating dock component" },
      { type: "fix", description: "Resolved issue with mobile menu animation" },
    ],
  },
  {
    version: "1.4.0",
    date: "May 22, 2023",
    changes: [
      { type: "feature", description: "Added AceternityGlareCard component with interactive hover effects" },
      { type: "feature", description: "Implemented TextHoverEffect component with enhanced brightness" },
      { type: "improvement", description: "Optimized animations for better performance on mobile devices" },
      { type: "improvement", description: "Enhanced typography with gradient text effects" },
      { type: "fix", description: "Fixed layout issues in bento grid on smaller screens" },
    ],
  },
  {
    version: "1.3.0",
    date: "April 10, 2023",
    changes: [
      { type: "feature", description: "Added BentoGrid component for creating modern layouts" },
      { type: "feature", description: "Implemented FloatingDock navigation component" },
      { type: "improvement", description: "Enhanced button animations and transitions" },
      { type: "improvement", description: "Updated card components with new hover effects" },
      { type: "fix", description: "Resolved issues with dark mode consistency" },
      { type: "breaking", description: "Renamed CardEffect to WobbleCard for better clarity" },
    ],
  },
  {
    version: "1.2.0",
    date: "March 5, 2023",
    changes: [
      { type: "feature", description: "Added SpotlightCursor effect for enhanced user interaction" },
      { type: "feature", description: "Implemented TypewriterEffect component" },
      { type: "improvement", description: "Enhanced responsive design for all components" },
      { type: "improvement", description: "Optimized animations using Motion library" },
      { type: "fix", description: "Fixed accessibility issues in form components" },
    ],
  },
  {
    version: "1.1.0",
    date: "February 12, 2023",
    changes: [
      { type: "feature", description: "Added card component variants (standard, glare, wobble)" },
      { type: "feature", description: "Implemented button component with multiple variants" },
      { type: "improvement", description: "Enhanced typography system with responsive scaling" },
      { type: "improvement", description: "Updated color system with new gradient options" },
      { type: "fix", description: "Resolved issues with component rendering in Safari" },
    ],
  },
  {
    version: "1.0.0",
    date: "January 20, 2023",
    changes: [
      { type: "feature", description: "Initial release of DZN.DEV component library" },
      { type: "feature", description: "Core components: Button, Card, Typography" },
      { type: "feature", description: "Basic animations and transitions" },
      { type: "feature", description: "Responsive design system" },
      { type: "feature", description: "Dark mode support" },
    ],
  },
];

export default function ChangelogBlogPage() {
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

      <BlogContainer
        title="DZN.DEV Changelog"
        publishDate="Last updated: June 15, 2023"
        backgroundOpacity={0.6}
      >
        <p className="lead">
          Welcome to the DZN.DEV changelog! This page documents all the updates, improvements, and fixes
          we've made to our component library. We're constantly working to enhance the library with new
          components, features, and optimizations.
        </p>

        <div className="space-y-12 mt-8">
          {changelog.map((release, index) => (
            <div key={release.version} className="space-y-4">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full flex items-center">
                  <IconTag size={18} className="mr-2" />
                  <span className="font-bold text-xl tracking-wide">v{release.version}</span>
                </div>
                <div className="ml-4 text-neutral-300 flex items-center">
                  <IconCalendar size={18} className="mr-2" />
                  <span className="text-lg">{release.date}</span>
                </div>
              </div>

              <AceternityGlareCard
                className="max-h-[500px] h-auto w-full"
                contentClassName="p-4 sm:p-5"
              >
                <div className="space-y-6">
                  {release.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex">
                      <div className="mr-4 mt-1">
                        {change.type === "feature" && (
                          <div className="bg-green-500/20 p-2 rounded-full">
                            <IconRocket size={20} className="text-green-500" />
                          </div>
                        )}
                        {change.type === "improvement" && (
                          <div className="bg-blue-500/20 p-2 rounded-full">
                            <IconBolt size={20} className="text-blue-500" />
                          </div>
                        )}
                        {change.type === "fix" && (
                          <div className="bg-amber-500/20 p-2 rounded-full">
                            <IconBug size={20} className="text-amber-500" />
                          </div>
                        )}
                        {change.type === "breaking" && (
                          <div className="bg-red-500/20 p-2 rounded-full">
                            <IconTools size={20} className="text-red-500" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center">
                          <span className="text-base font-bold text-neutral-200 capitalize mb-1">
                            {change.type === "breaking" ? "Breaking Change" : change.type}:
                          </span>
                        </div>
                        <p className="text-lg text-neutral-300 leading-relaxed">{change.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AceternityGlareCard>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
          <p>
            We&apos;re constantly improving our component library. Follow us on
            <a href="https://github.com/drewsephski/" className="text-blue-400 hover:text-blue-300 mx-1">GitHub</a>
            to stay updated with the latest changes and improvements.
          </p>
        </div>

        <RelatedArticles
          currentPostSlug="changelog"
          posts={blogPosts.filter(post => post.href !== "/blog/changelog")}
          maxPosts={3}
        />
      </BlogContainer>
    </main>
  );
}
