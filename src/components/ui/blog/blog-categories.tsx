"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  slug: string;
  count: number;
  icon?: React.ReactNode;
}

interface BlogCategoriesProps {
  categories: Category[];
  activeCategory?: string;
  className?: string;
}

export function BlogCategories({ categories, activeCategory, className }: BlogCategoriesProps) {
  return (
    <div className={cn("w-full", className)}>
      <h3 className="text-white font-medium mb-4">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={cn(
            "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
            !activeCategory
              ? "bg-blue-600 text-white"
              : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
          )}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5",
              activeCategory === category.slug
                ? "bg-blue-600 text-white"
                : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
            )}
          >
            {category.icon && <span>{category.icon}</span>}
            <span>{category.name}</span>
            <span className="text-xs bg-black/30 px-1.5 py-0.5 rounded-full">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Default categories for the blog
export const defaultCategories: Category[] = [
  {
    name: "Components",
    slug: "components",
    count: 5,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    name: "Tutorials",
    slug: "tutorials",
    count: 3,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Design",
    slug: "design",
    count: 2,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    name: "Updates",
    slug: "updates",
    count: 1,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];
