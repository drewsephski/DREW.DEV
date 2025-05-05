"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { IconSearch, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogPost {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: React.ReactNode;
  featured?: boolean;
  category?: string;
}

interface BlogSearchProps {
  posts: BlogPost[];
  className?: string;
}

export function BlogSearch({ posts, className }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<BlogPost[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.category && post.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setSearchResults(filteredResults);
  }, [searchTerm, posts]);

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicking on them
    setTimeout(() => {
      setIsSearching(false);
    }, 200);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-2 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconSearch className="h-5 w-5 text-neutral-400" />
        </div>
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-white"
          >
            <IconX className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isSearching && searchResults.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute z-10 mt-2 w-full bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl max-h-96 overflow-y-auto"
        >
          <div className="p-2">
            {searchResults.map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="block p-3 hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-10 h-10 bg-neutral-800 rounded-md flex items-center justify-center">
                      {post.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{post.title}</h3>
                    <p className="text-neutral-400 text-sm line-clamp-1">
                      {post.description}
                    </p>
                    {post.category && (
                      <span className="text-xs text-blue-400 mt-1 inline-block">
                        {post.category}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {isSearching && searchTerm && searchResults.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute z-10 mt-2 w-full bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl p-4 text-center"
        >
          <p className="text-neutral-400">No results found for "{searchTerm}"</p>
        </motion.div>
      )}
    </div>
  );
}
