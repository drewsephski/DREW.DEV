'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Testimonial {
  id: string | number;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    company?: {
      name: string;
      logo?: string;
    };
  };
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  autoplay = true,
  interval = 5000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      goToNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={cn("relative w-full overflow-hidden py-12", className)}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-full bg-gradient-to-br from-blue-600/5 to-indigo-600/5 blur-3xl" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonial content */}
          <div className="relative overflow-hidden px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ 
                  opacity: 0,
                  x: direction === 'right' ? 100 : -100 
                }}
                animate={{ 
                  opacity: 1,
                  x: 0 
                }}
                exit={{ 
                  opacity: 0,
                  x: direction === 'right' ? -100 : 100 
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-blue-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                    <p className="text-lg text-white/90 italic">
                      {currentTestimonial.content}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400">
                      <Image
                        src={currentTestimonial.author.avatar}
                        alt={currentTestimonial.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-white">{currentTestimonial.author.name}</h4>
                      <div className="text-sm text-white/70">
                        {currentTestimonial.author.role}
                        {currentTestimonial.author.company && (
                          <>, {currentTestimonial.author.company.name}</>
                        )}
                      </div>
                    </div>
                    {currentTestimonial.author.company?.logo && (
                      <div className="ml-4">
                        <Image
                          src={currentTestimonial.author.company.logo}
                          alt={currentTestimonial.author.company.name || ''}
                          width={80}
                          height={24}
                          className="object-contain h-6"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-blue-500 w-6" 
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
