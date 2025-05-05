"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [isMounted, setIsMounted] = useState(false);
  // Split words on the server and client the same way
  const wordsArray = words.split(" ");

  // First useEffect to mark component as mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Second useEffect for the animation (client-side only)
  useEffect(() => {
    if (!isMounted) return;

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [isMounted, animate, filter, duration]);

  // Use a stable key that doesn't change between server and client
  const renderWords = () => {
    return (
      <motion.span ref={scope} className="inline-block">
        {wordsArray.map((word, idx) => {
          // Use a stable key that doesn't depend on random values
          return (
            <motion.span
              key={`word-${idx}`}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <span className={cn("font-bold inline-block", className)}>
      <span className="mt-4 inline-block">
        <span className="dark:text-white text-black text-2xl leading-snug tracking-wide inline-block">
          {renderWords()}
        </span>
      </span>
    </span>
  );
};
