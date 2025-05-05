"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type BoxesVariant =
  | "default"
  | "blue"
  | "purple"
  | "green"
  | "rainbow"
  | "monochrome"
  | "custom";

export type BoxesSize =
  | "small"
  | "medium"
  | "large";

export type BoxesAnimation =
  | "hover"
  | "pulse"
  | "wave"
  | "random"
  | "none";

export interface BoxesCoreProps {
  className?: string;
  /**
   * Number of rows in the grid
   * @default 150
   */
  rows?: number;
  /**
   * Number of columns in the grid
   * @default 100
   */
  cols?: number;
  /**
   * Array of colors to use for the grid cells
   */
  colors?: string[];
  /**
   * ARIA label for the grid
   * @default "Interactive background grid"
   */
  ariaLabel?: string;
  /**
   * Predefined color variant
   * @default "default"
   */
  variant?: BoxesVariant;
  /**
   * Size of the grid
   * @default "medium"
   */
  size?: BoxesSize;
  /**
   * Animation style
   * @default "hover"
   */
  animation?: BoxesAnimation;
  /**
   * Border color for grid cells
   */
  borderColor?: string;
  /**
   * Whether to show plus icons in the grid
   * @default true
   */
  showIcons?: boolean;
}

// Predefined color palettes for variants
const VARIANT_COLORS = {
  default: [
    "#93c5fd", // blue-300
    "#f9a8d4", // pink-300
    "#86efac", // green-300
    "#fde047", // yellow-300
    "#fca5a5", // red-300
    "#d8b4fe", // purple-300
    "#a5b4fc", // indigo-300
    "#c4b5fd", // violet-300
  ],
  blue: [
    "#93c5fd", // blue-300
    "#60a5fa", // blue-400
    "#3b82f6", // blue-500
    "#2563eb", // blue-600
    "#1d4ed8", // blue-700
    "#bfdbfe", // blue-200
    "#dbeafe", // blue-100
  ],
  purple: [
    "#d8b4fe", // purple-300
    "#c084fc", // purple-400
    "#a855f7", // purple-500
    "#9333ea", // purple-600
    "#7e22ce", // purple-700
    "#e9d5ff", // purple-200
    "#f3e8ff", // purple-100
  ],
  green: [
    "#86efac", // green-300
    "#4ade80", // green-400
    "#22c55e", // green-500
    "#16a34a", // green-600
    "#15803d", // green-700
    "#bbf7d0", // green-200
    "#dcfce7", // green-100
  ],
  rainbow: [
    "#f87171", // red-400
    "#fb923c", // orange-400
    "#fbbf24", // amber-400
    "#4ade80", // green-400
    "#60a5fa", // blue-400
    "#a78bfa", // violet-400
    "#f472b6", // pink-400
  ],
  monochrome: [
    "#f8fafc", // slate-50
    "#f1f5f9", // slate-100
    "#e2e8f0", // slate-200
    "#cbd5e1", // slate-300
    "#94a3b8", // slate-400
    "#64748b", // slate-500
    "#475569", // slate-600
  ],
};

// Size configurations
const SIZE_CONFIG = {
  small: {
    scale: 0.5,
    cellHeight: 6,
    cellWidth: 12,
  },
  medium: {
    scale: 0.675,
    cellHeight: 8,
    cellWidth: 16,
  },
  large: {
    scale: 0.85,
    cellHeight: 10,
    cellWidth: 20,
  },
};

export const BoxesCore = ({
  className,
  rows: rowCount = 150,
  cols: colCount = 100,
  colors: customColors,
  ariaLabel = "Interactive background grid",
  variant = "default",
  size = "medium",
  animation = "hover",
  borderColor = "rgba(100, 116, 139, 0.7)", // slate-500 with opacity
  showIcons = true,
  ...rest
}: BoxesCoreProps) => {
  const rows = new Array(rowCount).fill(1);
  const cols = new Array(colCount).fill(1);

  // Determine colors based on variant
  let colors = customColors;
  if (!colors) {
    colors = variant === "custom" ? VARIANT_COLORS.default : VARIANT_COLORS[variant] || VARIANT_COLORS.default;
  }

  // Get size configuration
  const sizeConfig = SIZE_CONFIG[size] || SIZE_CONFIG.medium;

  const getRandomColor = () => {
    return colors![Math.floor(Math.random() * colors!.length)];
  };

  // Define animation variants
  const getAnimationProps = (j: number, i: number) => {
    switch (animation) {
      case "hover":
        return {
          whileHover: {
            backgroundColor: `${getRandomColor()}`,
            transition: { duration: 0 },
          },
          animate: {
            transition: { duration: 2 },
          },
        };
      case "pulse":
        return {
          animate: {
            backgroundColor: [
              "rgba(0, 0, 0, 0)",
              (j % 3 === 0 && i % 3 === 0) ? getRandomColor() : "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
            ],
            transition: {
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse" as const,
            },
          },
        };
      case "wave":
        return {
          animate: {
            backgroundColor: [
              "rgba(0, 0, 0, 0)",
              ((i + j) % 10 === 0) ? getRandomColor() : "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0)",
            ],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror" as const,
              delay: (i + j) * 0.01, // Creates a wave effect
            },
          },
        };
      case "random":
        return {
          animate: {
            backgroundColor: Math.random() > 0.92 ? [
              "rgba(0, 0, 0, 0)",
              getRandomColor(),
              "rgba(0, 0, 0, 0)",
            ] : "rgba(0, 0, 0, 0)",
            transition: {
              duration: 1 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "mirror" as const,
              delay: Math.random() * 5,
            },
          },
        };
      case "none":
      default:
        return {};
    }
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(${sizeConfig.scale}) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      role="presentation"
      aria-label={ariaLabel}
      aria-hidden="true" // Hide from screen readers as this is decorative
      {...rest}
    >
      {/* Reduced motion support */}
      <div className="sr-only">
        This is a decorative grid animation that responds to hover interactions.
      </div>

      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className={cn(
            "relative border-l",
            `h-${sizeConfig.cellHeight} w-${sizeConfig.cellWidth}`
          )}
          style={{
            height: `${sizeConfig.cellHeight * 4}px`,
            width: `${sizeConfig.cellWidth * 4}px`,
            borderColor: borderColor
          }}
        >
          {cols.map((_, j) => {
            const animationProps = getAnimationProps(j, i);

            return (
              <motion.div
                {...animationProps}
                key={`col` + j}
                className={cn(
                  "relative border-t border-r",
                  `h-${sizeConfig.cellHeight} w-${sizeConfig.cellWidth}`
                )}
                style={{
                  height: `${sizeConfig.cellHeight * 4}px`,
                  width: `${sizeConfig.cellWidth * 4}px`,
                  borderColor: borderColor
                }}
                // Add data attributes for potential debugging and testing
                data-row={i}
                data-col={j}
              >
                {showIcons && j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px]"
                    style={{ color: borderColor }}
                    aria-hidden="true" // Hide decorative SVG from screen readers
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
