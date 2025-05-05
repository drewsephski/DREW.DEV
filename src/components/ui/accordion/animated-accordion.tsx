'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onToggle,
  index,
  className,
  titleClassName,
  contentClassName,
}) => {
  return (
    <motion.div
      className={cn(
        "border-b border-white/10 overflow-hidden",
        isOpen && "bg-white/5",
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <motion.button
        className={cn(
          "flex items-center justify-between w-full py-4 px-5 text-left font-medium text-white focus:outline-none",
          titleClassName
        )}
        onClick={onToggle}
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
        whileTap={{ scale: 0.99 }}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-6 h-6"
        >
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-400"
          >
            <path 
              d="M6 1.5V10.5M1.5 6H10.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={isOpen ? "opacity-0" : "opacity-100"}
              style={{ transformOrigin: 'center', transition: 'opacity 0.3s' }}
            />
            <path 
              d="M1.5 6H10.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={cn("px-5 pb-4 text-white/80", contentClassName)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

interface AnimatedAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export const AnimatedAccordion: React.FC<AnimatedAccordionProps> = ({
  items,
  allowMultiple = false,
  className,
  itemClassName,
  titleClassName,
  contentClassName,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={cn("rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.question}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
          index={index}
          className={itemClassName}
          titleClassName={titleClassName}
          contentClassName={contentClassName}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
};
