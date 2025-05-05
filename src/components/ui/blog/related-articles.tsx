"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";

interface BlogPost {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: React.ReactNode;
  featured?: boolean;
  category?: string;
}

interface RelatedArticlesProps {
  currentPostSlug: string;
  posts: BlogPost[];
  maxPosts?: number;
  className?: string;
}

export function RelatedArticles({
  currentPostSlug,
  posts,
  maxPosts = 3,
  className,
}: RelatedArticlesProps) {
  // Filter out the current post and ensure we only show valid posts
  const validPosts = posts.filter(post => {
    const postSlug = post.href.split('/').pop();
    return postSlug && postSlug !== currentPostSlug;
  });

  // Get posts from the same category if possible
  const currentPost = posts.find(post => post.href.includes(currentPostSlug));
  const currentCategory = currentPost?.category;

  let relatedPosts = validPosts;

  if (currentCategory) {
    // First try to get posts from the same category
    const sameCategory = validPosts.filter(post => post.category === currentCategory);

    if (sameCategory.length > 0) {
      relatedPosts = sameCategory;
    }
  }

  // Limit to maxPosts
  relatedPosts = relatedPosts.slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className={cn("mt-12 pt-8 border-t border-white/10", className)}>
      <h3 className="text-xl font-bold mb-6 text-white">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={post.href} className="block h-full">
              <AceternityGlareCard
                className="h-full"
                contentClassName="flex flex-col items-center justify-center text-center p-6 h-full"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  {post.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{post.title}</h4>
                <p className="text-sm text-neutral-300 line-clamp-3">{post.description}</p>
              </AceternityGlareCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
