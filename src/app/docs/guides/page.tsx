
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/cards/card";
import { Button } from "@/components/ui/buttons/button";
import { IconBook, IconArrowRight, IconCode, IconPalette, IconComponents, IconAccessible } from "@tabler/icons-react";

const guides = [
  {
    title: "Getting Started",
    description: "Learn how to set up and start using our component library in your project.",
    icon: <IconBook size={24} className="text-blue-500" />,
    href: "/blog/guides/getting-started",
    tags: ["Beginner", "Setup"],
  },
  {
    title: "Customizing Components",
    description: "Customize the appearance and behavior of components to match your brand.",
    icon: <IconPalette size={24} className="text-purple-500" />,
    href: "/blog/guides/customizing-components",
    tags: ["Intermediate", "Styling"],
  },
  {
    title: "Creating Custom Components",
    description: "Learn how to create your own custom components using our library as a foundation.",
    icon: <IconComponents size={24} className="text-green-500" />,
    href: "/blog/guides/creating-custom-components",
    tags: ["Advanced", "Development"],
  },
  {
    title: "Animations and Effects",
    description: "Add engaging animations and effects to enhance user experience.",
    icon: <IconCode size={24} className="text-amber-500" />,
    href: "/blog/guides/animations-and-effects",
    tags: ["Intermediate", "Animation"],
  },
  {
    title: "Accessibility Best Practices",
    description: "Ensure your applications are accessible to all users with our comprehensive guide.",
    icon: <IconAccessible size={24} className="text-red-500" />,
    href: "/blog/guides/accessibility",
    tags: ["All Levels", "Accessibility"],
  },
  {
    title: "Performance Optimization",
    description: "Optimize your application for better performance and user experience.",
    icon: <IconCode size={24} className="text-blue-500" />,
    href: "/blog/guides/performance-optimization",
    tags: ["Advanced", "Performance"],
  },
];

export default function GuidesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Guides & Tutorials
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Comprehensive guides and tutorials to help you get the most out of our component library.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {guides.map((guide, index) => (
            <Link key={index} href={guide.href} className="block h-full">
              <Card className="h-full bg-neutral-900/50 border-neutral-800/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {guide.icon}
                    <CardTitle className="ml-3">{guide.title}</CardTitle>
                  </div>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {guide.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="group">
                      Read Guide
                      <IconArrowRight
                        size={16}
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </motion.div>

        {/* Video Tutorials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Getting Started with DZN.DEV",
                duration: "10:24",
                thumbnail: "/images/video-thumbnail-1.jpg",
                href: "#",
              },
              {
                title: "Creating a Modern Dashboard",
                duration: "15:36",
                thumbnail: "/images/video-thumbnail-2.jpg",
                href: "#",
              },
            ].map((video, index) => (
              <Card key={index} className="overflow-hidden bg-neutral-900/50 border-neutral-800/50">
                <div className="aspect-video relative bg-neutral-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium text-white mb-1">{video.title}</h3>
                  <Button variant="ghost" size="sm" className="group p-0">
                    Watch Tutorial
                    <IconArrowRight
                      size={16}
                      className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Community Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-800/30">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">Join Our Community</h2>
                  <p className="text-neutral-300 mb-6 max-w-md">
                    Connect with other developers, get help with your projects, and stay up-to-date with the latest updates and features.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">
                      Join Discord
                    </Button>
                    <Button variant="outline">
                      GitHub Discussions
                    </Button>
                  </div>
                </div>
                <div className="bg-neutral-900/50 rounded-xl p-6 flex-1">
                  <h3 className="text-lg font-medium text-white mb-4">Community Resources</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-neutral-300">
                      <IconArrowRight size={16} className="text-blue-500 mr-2" />
                      <span>Component Showcase</span>
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <IconArrowRight size={16} className="text-blue-500 mr-2" />
                      <span>Code Snippets Repository</span>
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <IconArrowRight size={16} className="text-blue-500 mr-2" />
                      <span>Community Templates</span>
                    </li>
                    <li className="flex items-center text-neutral-300">
                      <IconArrowRight size={16} className="text-blue-500 mr-2" />
                      <span>Integration Guides</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
