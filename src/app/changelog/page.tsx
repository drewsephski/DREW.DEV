
"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/cards/card";
import { IconCalendar, IconTag, IconBug, IconRocket, IconTools, IconBolt } from "@tabler/icons-react";

/**
 * @typedef {Object} Change
 * @property {'feature'|'improvement'|'fix'|'breaking'} type - Type of change
 * @property {string} description - Description of the change
 */

/**
 * @typedef {Object} ChangelogEntry
 * @property {string} version - Version number
 * @property {string} date - Release date
 * @property {Change[]} changes - List of changes
 */

const changelog = [
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

export default function ChangelogPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Changelog
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A detailed history of updates, improvements, and fixes to our component library.
          </p>
        </motion.div>

        <div className="space-y-12">
          {changelog.map((release, index) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full flex items-center">
                  <IconTag size={16} className="mr-1" />
                  <span className="font-medium">v{release.version}</span>
                </div>
                <div className="ml-4 text-neutral-400 flex items-center">
                  <IconCalendar size={16} className="mr-1" />
                  <span>{release.date}</span>
                </div>
              </div>

              <Card className="bg-neutral-900/50 border-neutral-800/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {release.changes.map((change, changeIndex) => (
                      <div key={changeIndex} className="flex">
                        <div className="mr-3 mt-0.5">
                          {change.type === "feature" && (
                            <div className="bg-green-500/20 p-1 rounded-full">
                              <IconRocket size={16} className="text-green-500" />
                            </div>
                          )}
                          {change.type === "improvement" && (
                            <div className="bg-blue-500/20 p-1 rounded-full">
                              <IconBolt size={16} className="text-blue-500" />
                            </div>
                          )}
                          {change.type === "fix" && (
                            <div className="bg-amber-500/20 p-1 rounded-full">
                              <IconBug size={16} className="text-amber-500" />
                            </div>
                          )}
                          {change.type === "breaking" && (
                            <div className="bg-red-500/20 p-1 rounded-full">
                              <IconTools size={16} className="text-red-500" />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-neutral-300 capitalize">
                              {change.type === "breaking" ? "Breaking Change" : change.type}:
                            </span>
                          </div>
                          <p className="text-neutral-400">{change.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
