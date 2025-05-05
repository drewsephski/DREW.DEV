import React from "react";
import { HTMLMotionProps } from "framer-motion";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "md";
  glow?: boolean;
  dot?: boolean;
  dotColor?: string;
  animated?: boolean;
}

export type AnimatedBadgeProps = React.PropsWithChildren<BadgeProps & HTMLMotionProps<'span'>>;
