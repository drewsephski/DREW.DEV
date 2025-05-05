"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/data/blog-posts";

/**
 * @typedef {Object} BlogNavigationProps
 * @property {string} currentSlug
 * @property {string} [className]
 */

/**
 * @param {BlogNavigationProps} props
 */
export function BlogNavigation({ currentSlug, className }) {
  const currentPostIndex = blogPosts.findIndex(post => post.href.includes(currentSlug));

  if (currentPostIndex === -1) {
    return null;
  }

  const previousPost = currentPostIndex > 0 ? blogPosts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex < blogPosts.length - 1 ? blogPosts[currentPostIndex + 1] : null;

  const renderLink = (post, direction) => (
    post ? (
      <Link href={post.href} className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
        {direction === 'prev' && (
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        )}
        {post.title}
        {direction === 'next' && (
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </Link>
    ) : (
      <div></div>
    )
  );

  return (
    <div className={cn("mt-12 pt-8 border-t border-white/10 flex justify-between", className)}>
      {renderLink(previousPost, 'prev')}
      {renderLink(nextPost, 'next')}
    </div>
  );
}
