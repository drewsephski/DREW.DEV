"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AceternityGlareCard } from "@/components/ui/cards/aceternity-glare-card";

interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  date?: string;
  category?: string;
  featured?: boolean;
  className?: string;
  contentClassName?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function BlogCard({
  title,
  description,
  href,
  icon,
  date,
  category,
  featured = false,
  className = "",
  contentClassName = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = "",
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/30 hover:shadow-lg",
        featured ? "col-span-2 row-span-2" : "",
        className
      )}
    >
      {icon && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-bl-full">
          {icon}
        </div>
      )}

      <div className={cn("z-10 flex flex-col p-6", contentClassName)}>
        {category && (
          <div className={cn("mb-4 inline-block w-auto px-3 py-1 text-xs font-medium text-blue-200 bg-blue-600/30 rounded-full", badgeClassName)}>
            {category}
          </div>
        )}

        <h3 className={cn("text-xl font-bold text-white mb-2", titleClassName)}>
          {title}
        </h3>

        <p className={cn("text-sm text-neutral-300 flex-grow", descriptionClassName)}>
          {description}
        </p>

        {date && (
          <div className="mt-4 text-xs text-neutral-400">
            {date}
          </div>
        )}
      </div>
    </Link>
  );
}
