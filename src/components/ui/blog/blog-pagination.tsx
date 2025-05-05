"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  className?: string;
}

export function BlogPagination({
  currentPage,
  totalPages,
  basePath,
  className,
}: BlogPaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If we have fewer pages than the max, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always include first page
      pageNumbers.push(1);

      // Calculate start and end of the middle section
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're near the beginning
      if (currentPage <= 3) {
        endPage = 4;
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pageNumbers.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }

      // Always include last page
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={cn("flex justify-center items-center space-x-2", className)}>
      {/* Previous Page Button */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}/${currentPage - 1}`}
          className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800 text-white hover:bg-blue-600 transition-colors"
        >
          <IconChevronLeft size={20} />
        </Link>
      ) : (
        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800/50 text-neutral-500 cursor-not-allowed">
          <IconChevronLeft size={20} />
        </div>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => {
        if (page === "...") {
          return (
            <div
              key={`ellipsis-${index}`}
              className="flex items-center justify-center w-10 h-10 text-neutral-400"
            >
              ...
            </div>
          );
        }

        return (
          <Link
            key={index}
            href={`${basePath}/${page}`}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-md transition-colors",
              currentPage === page
                ? "bg-blue-600 text-white"
                : "bg-neutral-800 text-white hover:bg-blue-600/70"
            )}
          >
            {page}
          </Link>
        );
      })}

      {/* Next Page Button */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}/${currentPage + 1}`}
          className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800 text-white hover:bg-blue-600 transition-colors"
        >
          <IconChevronRight size={20} />
        </Link>
      ) : (
        <div className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800/50 text-neutral-500 cursor-not-allowed">
          <IconChevronRight size={20} />
        </div>
      )}
    </div>
  );
}
