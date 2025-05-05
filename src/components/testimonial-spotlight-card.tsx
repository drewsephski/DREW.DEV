import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import { motion } from "motion/react";

interface TestimonialSpotlightCardProps {
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
  metrics?: {
    label: string;
    value: string;
  }[];
}

export default function TestimonialSpotlightCard({
  content,
  author,
  metrics = []
}: TestimonialSpotlightCardProps) {
  return (
    <CardSpotlight className="h-full w-full" radius={300} color="#1a1a2e">
      <div className="flex flex-col h-full">
        {/* Quote icon */}
        <div className="mb-4">
          <svg 
            className="w-10 h-10 text-blue-500/40" 
            fill="currentColor" 
            viewBox="0 0 32 32"
          >
            <path d="M10,8H6A6,6,0,0,0,6,20h4A6,6,0,0,0,10,8Zm0,10H6a4,4,0,0,1,0-8h4a4,4,0,0,1,0,8Zm16-4H22a6,6,0,0,0,0,12h4A6,6,0,0,0,26,14Zm0,10H22a4,4,0,0,1,0-8h4a4,4,0,0,1,0,8Z"/>
          </svg>
        </div>
        
        {/* Testimonial content */}
        <p className="text-lg text-white relative z-20 mb-6 flex-grow">
          "{content}"
        </p>
        
        {/* Metrics if available */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white/5 p-3 rounded-lg">
                <p className="text-2xl font-bold text-blue-400">{metric.value}</p>
                <p className="text-xs text-white/70">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Author info */}
        <div className="flex items-center mt-auto relative z-20">
          <div className="mr-4 relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-white">{author.name}</h4>
            <div className="text-sm text-white/70">
              {author.role}
              {author.company && (
                <>, {author.company.name}</>
              )}
            </div>
          </div>
          {author.company?.logo && (
            <div className="ml-auto">
              <Image
                src={author.company.logo}
                alt={author.company.name || ''}
                width={80}
                height={24}
                className="object-contain h-6"
              />
            </div>
          )}
        </div>
      </div>
    </CardSpotlight>
  );
}
