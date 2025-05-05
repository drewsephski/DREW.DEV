import { CardSpotlight } from "@/components/ui/card-spotlight";
import { RainbowButton } from "@/components/ui/buttons/rainbow-button";
import { motion } from "motion/react";

interface PricingSpotlightCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
  color?: string;
}

export default function PricingSpotlightCard({
  title,
  price,
  description,
  features,
  ctaText,
  ctaHref,
  popular = false,
  color = "#1e293b"
}: PricingSpotlightCardProps) {
  return (
    <CardSpotlight 
      className={`h-full w-full ${popular ? 'border-blue-500/50' : ''}`} 
      radius={250} 
      color={color}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-md rounded-tr-md z-20">
          MOST POPULAR
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold relative z-20 text-white mb-2">
          {title}
        </h3>
        
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== 'Custom' && <span className="text-white/60 ml-1">/month</span>}
        </div>
        
        <p className="text-neutral-300 relative z-20 text-sm mb-6">
          {description}
        </p>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-3 w-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm text-blue-100/90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <RainbowButton
            href={ctaHref}
            variant={popular ? "rainbow" : "outline"}
            size="lg"
            rounded="md"
            className="w-full"
          >
            {ctaText}
          </RainbowButton>
        </div>
      </div>
    </CardSpotlight>
  );
}
