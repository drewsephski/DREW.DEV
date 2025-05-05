"use client";

import React, { useEffect, Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BlogContainer } from "@/components/ui/blog/blog-container";
import { RelatedArticles } from "@/components/ui/blog/related-articles";
import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="animate-pulse space-y-4 max-w-4xl mx-auto p-6">
      <div className="h-10 bg-blue-700/20 rounded w-3/4 mx-auto"></div>
      <div className="h-4 bg-blue-700/20 rounded w-1/2 mx-auto"></div>
      <div className="h-64 bg-blue-700/10 rounded-lg mt-8"></div>
      <div className="space-y-2 mt-4">
        <div className="h-4 bg-blue-700/20 rounded"></div>
        <div className="h-4 bg-blue-700/20 rounded"></div>
        <div className="h-4 bg-blue-700/20 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export default function DynamicBlogPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug?.toString() || "";

  // Check if this is a valid blog post
  const post = blogPosts.find(post => post.href.includes(slug));

  // For actual implementation, you would render the real blog post content here
  // This is just a placeholder that redirects to the specific component page if it exists
  useEffect(() => {
    if (!post) return;

    // Check if the post href is different from the current path
    // This prevents infinite redirects
    const currentPath = `/blog/${slug}`;
    if (post.href !== currentPath) {
      router.push(post.href);
    } else {
      // If we're already at the correct path, render the content directly
      // This is a fallback for posts that don't have dedicated pages
      console.log("Rendering content directly for:", post.title);
    }
  }, [post, post?.href, router, slug, post?.title]);

  if (!post) {
    // If no matching post is found, show a "coming soon" message
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
          title="Coming Soon"
          publishDate="This content is under development"
          backgroundOpacity={0.6}
        >
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">We&apos;re working on this content</h2>
            <p className="text-lg mb-8">
              The article you&apos;re looking for is currently being developed. Please check back soon!
            </p>
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>

          <Suspense fallback={<LoadingFallback />}>
            <RelatedArticles
              currentPostSlug={slug}
              posts={blogPosts}
              maxPosts={3}
            />
          </Suspense>
        </BlogContainer>
      </main>
    );
  }

  // If we're at the correct path but there's no dedicated page,
  // render a generic blog post template
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
        title={post.title}
        publishDate={post.date || "Recently published"}
        backgroundOpacity={0.6}
        className="text-center overflow-hidden"
      >
        <div className="prose prose-invert max-w-none mx-auto px-4 md:px-8">
          {post.category && (
            <div className="inline-block px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium mb-6">
              {post.category}
            </div>
          )}

          <p className="lead text-xl md:text-2xl">{post.description}</p>

          {/* Placeholder content - in a real app, this would be the actual blog content */}
          <div className="my-8">
            <p>
              This article is part of our {post.category || "Blog"} series. We&apos;re constantly adding new content
              and improving existing articles to provide you with the best resources.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Learn about the latest trends in {post.category || "web development"}</li>
              <li>Understand best practices for implementing modern UI components</li>
              <li>Explore practical examples and code snippets</li>
              <li>Discover how to integrate these concepts into your own projects</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
            <p>
              To get started with {post.title}, you&apos;ll need a basic understanding of React and Next.js.
              If you&apos;re new to these technologies, we recommend checking out our introductory guides first.
            </p>

            <div className="bg-blue-900/30 p-6 rounded-lg my-8 border border-blue-500/30">
              <h3 className="text-xl font-bold mb-2">Pro Tip</h3>
              <p>
                Make sure to check our documentation for the most up-to-date information and examples.
                Our component library is constantly evolving with new features and improvements.
              </p>
            </div>
          </div>

          <Link href="/blog" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4">
            Back to Blog
          </Link>
        </div>

        <Suspense fallback={<LoadingFallback />}>
          <RelatedArticles
            currentPostSlug={slug}
            posts={blogPosts}
            maxPosts={3}
          />
        </Suspense>
      </BlogContainer>
    </main>
  );
}
