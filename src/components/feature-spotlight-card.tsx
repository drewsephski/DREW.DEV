import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AnimatedIcon } from "@/components/ui/effects/animated-icon";
import { EnhancedTextEffect } from "@/components/ui/effects/enhanced-text-effect";

interface FeatureSpotlightCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconColor?: string;
  animationStyle?: 'pulse' | 'rotate' | 'bounce' | 'shake' | 'flip' | 'float';
}

export default function FeatureSpotlightCard({
  title,
  description,
  iconSrc,
  iconColor = "#6366f1",
  animationStyle = 'pulse'
}: FeatureSpotlightCardProps) {
  return (
    <CardSpotlight className="h-full w-full" radius={250} color="#1e1e2f">
      <div className="flex flex-col items-start">
        <div className="mb-4 transform transition-all duration-300 group-hover:scale-110 bg-indigo-500/20 p-3 rounded-full">
          <AnimatedIcon
            src={iconSrc}
            alt={`${title} Icon`}
            size={48}
            animationStyle={animationStyle}
            color={iconColor}
            containerClassName="opacity-90 group-hover:opacity-100"
          />
        </div>

        <h3 className="text-xl font-bold relative z-20 mb-3 text-white">
          {title}
        </h3>

        <div className="text-neutral-200 relative z-20">
          <EnhancedTextEffect
            words={description}
            duration={0.2}
            variant="generate"
            textSize="sm"
            threshold={0.1}
            rootMargin="20px"
          />
        </div>
      </div>
    </CardSpotlight>
  );
}
