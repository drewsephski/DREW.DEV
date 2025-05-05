import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:gap-5 auto-rows-[minmax(14rem,auto)] xs:auto-rows-[minmax(16rem,auto)] sm:auto-rows-[minmax(18rem,auto)] md:auto-rows-[20rem] md:grid-cols-3",
        className,
      )}
    >
      {React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            index: i,
          });
        }
        return child;
      })}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index = 0,
}) => {
  return (
    <motion.div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-3 sm:space-y-5 rounded-xl border border-neutral-200/50 bg-white/80 p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:bg-white/90 backdrop-blur-sm dark:border-white/[0.1] dark:bg-black/50 dark:hover:bg-black/60 dark:hover:border-primary/50 dark:shadow-none shadow-lg",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div
        initial={{ opacity: 0.8, scale: 0.95 }}
        whileHover={{
          opacity: 1,
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        className="min-h-[8rem] xs:min-h-[9rem] sm:min-h-[10rem] md:min-h-[12rem] flex items-center justify-center rounded-lg overflow-hidden"
      >
        {header}
      </motion.div>
      <motion.div
        className="transition-all duration-300 group-hover/bento:translate-x-2 overflow-hidden"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="text-primary/80 dark:text-primary/90 transition-all duration-300 group-hover/bento:text-primary/100 dark:group-hover/bento:text-primary/100"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <motion.div
          className="mt-2 mb-1 sm:mb-2 font-sans text-sm sm:text-base font-bold text-neutral-700 dark:text-neutral-100 transition-all duration-300 group-hover/bento:text-neutral-900 dark:group-hover/bento:text-white line-clamp-2 bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent dark:from-primary dark:via-foreground dark:to-accent tracking-tight leading-tight"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.div>
        <motion.div
          className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 transition-all duration-300 group-hover/bento:text-neutral-800 dark:group-hover/bento:text-neutral-200 line-clamp-3"
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
