"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function CategoryFilter({
  categories,
  onCategoryChangeAction,
  className,
}) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      onCategoryChangeAction(null);
    } else {
      setActiveCategory(category);
      onCategoryChangeAction(category);
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2 mb-8", className)}>
      <button
        type="button"
        onClick={() => {
          setActiveCategory(null);
          onCategoryChangeAction(null);
        }}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors",
          activeCategory === null
            ? "bg-blue-600 text-white"
            : "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30"
        )}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          type="button"
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === category
              ? "bg-blue-600 text-white"
              : "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}