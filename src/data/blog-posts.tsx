import React from "react";
import { IconBrandGithub, IconCode, IconComponents, IconDesk, IconDeviceDesktop, IconLayoutGrid, IconPalette, IconRocket, IconStack, IconTypography } from "@tabler/icons-react";

export interface BlogPost {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
  date?: string;
  category?: string;
  featured?: boolean;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Interactive UI Components",
    description: "Learn how to create engaging and interactive UI components using React, Framer Motion, and Tailwind CSS.",
    href: "/blog/building-interactive-ui-components",
    icon: <IconComponents size={24} className="text-blue-400" />,
    image: "/images/blog/interactive-components.webp",
    date: "June 12, 2023",
    category: "Components",
    featured: true,
    tags: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Mastering Design Tokens",
    description: "A comprehensive guide to implementing and managing design tokens in your design system.",
    href: "/blog/mastering-design-tokens",
    icon: <IconPalette size={24} className="text-purple-400" />,
    image: "/images/blog/design-tokens.webp",
    date: "May 28, 2023",
    category: "Design Systems",
    tags: ["Design Tokens", "CSS Variables", "Theming"]
  },
  {
    title: "Building Bento Grid Layouts",
    description: "Create modern, responsive bento grid layouts for your web applications.",
    href: "/blog/building-bento-grid-layouts",
    icon: <IconLayoutGrid size={24} className="text-green-400" />,
    image: "/images/blog/bento-grid.webp",
    date: "May 15, 2023",
    category: "Layouts",
    tags: ["CSS Grid", "Responsive Design", "UI Patterns"]
  },
  {
    title: "Creating Modern Pricing Pages",
    description: "Design and implement effective pricing pages that convert visitors into customers.",
    href: "/blog/creating-modern-pricing-page",
    icon: <IconRocket size={24} className="text-red-400" />,
    image: "/images/blog/pricing-page.webp",
    date: "April 30, 2023",
    category: "UI Design",
    tags: ["Pricing", "Conversion", "UX Design"]
  },
  {
    title: "Building a Design System Website",
    description: "Learn how to create a comprehensive website to showcase your design system.",
    href: "/blog/building-design-system-website",
    icon: <IconDesk size={24} className="text-amber-400" />,
    image: "/images/blog/design-system-website.webp",
    date: "April 18, 2023",
    category: "Design Systems",
    tags: ["Documentation", "Next.js", "Design Systems"]
  },
  {
    title: "Changelog",
    description: "Stay updated with the latest changes and improvements to DZN.DEV.",
    href: "/blog/changelog",
    icon: <IconBrandGithub size={24} className="text-gray-500" />,
    image: "/images/blog/changelog.webp",
    date: "April 10, 2023",
    category: "Updates",
    tags: ["Changelog", "Version History", "Open Source"]
  },
  {
    title: "Badge Component",
    description: "Learn how to implement and customize the Badge component for highlighting status, counts, and labels.",
    href: "/blog/components/badge",
    icon: <IconTypography size={24} className="text-gray-500" />,
    image: "/images/blog/badge-component.webp",
    date: "March 25, 2023",
    category: "Components",
    tags: ["Badge", "Status", "Labels"]
  },
  {
    title: "Glare Card Component",
    description: "Discover how to create stunning card components with interactive glare effects that follow cursor movement.",
    href: "/blog/components/glare-card",
    icon: <IconCode size={24} className="text-gray-500" />,
    image: "/images/blog/glare-card-component.webp",
    date: "March 15, 2023",
    category: "Components",
    tags: ["Card", "Interactive", "Glare Effect"]
  },
  {
    title: "Text Effects Component",
    description: "Explore various text animation effects including character-by-character generation and reveal animations.",
    href: "/blog/components/text-effects",
    icon: <IconStack size={24} className="text-gray-500" />,
    image: "/images/blog/text-effects-component.webp",
    date: "March 5, 2023",
    category: "Components",
    tags: ["Text Effects", "Animations", "Typography"]
  },
  {
    title: "Wobble Card Component",
    description: "Learn how to implement 3D wobble card effects with physics-based animations for engaging user interactions.",
    href: "/blog/components/wobble-card",
    icon: <IconDeviceDesktop size={24} className="text-gray-500" />,
    image: "/images/blog/wobble-card-component.webp",
    date: "February 20, 2023",
    category: "Components",
    tags: ["Card", "Wobble Effect", "Animations"]
  },
  {
    title: "GitHub Button Component",
    description: "Implement a stylish GitHub button with gradient effects and smooth hover animations.",
    href: "/blog/components/github-button",
    icon: <IconBrandGithub size={24} className="text-gray-500" />,
    image: "/images/blog/github-button-component.webp",
    date: "February 10, 2023",
    category: "Components",
    tags: ["GitHub", "Button", "Gradient"]
  },
];
