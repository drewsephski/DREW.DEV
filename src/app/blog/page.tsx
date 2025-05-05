"use client";

import React, { useState, useMemo, Suspense } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BlogCard } from "@/components/ui/blog/blog-card";
import { CategoryFilter } from "@/components/ui/blog/category-filter";
import { blogPosts } from "@/data/blog-posts";
import { FloatingDock, blogDockItems } from "@/components/ui/navigation/floating-dock";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    blogPosts.forEach(post => {
      if (post.category) {
        categorySet.add(post.category);
      }
    });
    return Array.from(categorySet);
  }, []);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

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

      <div className="z-10 w-full items-center justify-between font-mono text-sm relative">
        <FloatingDock items={blogDockItems} />

        <div className="max-w-6xl mx-auto mt-16 mb-32">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">DREW.DEV Blogs</h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Explore our latest articles, tutorials, and insights on design systems, UI components, and modern web development.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-8 text-white">Loading categories...</div>}>
            <CategoryFilter
              categories={categories}
              onCategoryChangeAction={setSelectedCategory}
              className="justify-center mb-8"
            />
          </Suspense>

          <BentoGrid className="max-w-6xl mx-auto gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts
              .filter(post => {
                // Only show posts that have corresponding pages or valid hrefs
                const href = post.href.split('/').pop();
                return href && href.length > 0;
              })
              .map((post, i) => (
                <Suspense key={i} fallback={<div className="h-64 bg-black/20 rounded-xl animate-pulse"></div>}>
                  <BlogCard
                    title={post.title}
                    description={post.description}
                    href={post.href}
                    icon={post.icon}
                    image={post.image}
                    date={post.date}
                    category={post.category}
                    featured={post.featured}
                    className="flex flex-col items-center justify-center text-center h-full p-6"
                    contentClassName="flex flex-col items-center justify-center h-full"
                    badgeClassName="self-center mb-4"
                    titleClassName="line-clamp-2 mb-2"
                    descriptionClassName="line-clamp-3 overflow-hidden text-ellipsis"
                  />
                </Suspense>
              ))}
          </BentoGrid>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No articles found</h2>
              <p className="text-lg mb-8">
                We couldn&apos;t find any articles in this category. Please try another category or check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
