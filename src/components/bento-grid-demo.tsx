import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const ImageCard = ({ src, alt }) => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-primary/10 via-neutral-200/80 to-accent/10 dark:from-primary/20 dark:via-neutral-900/50 dark:to-accent/20 animate-gradient-slow relative overflow-hidden group">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/20 via-neutral-200/90 to-accent/20 dark:from-primary/30 dark:via-neutral-900/60 dark:to-accent/30 transition-opacity duration-700"></div>
    <div className="absolute -inset-[100%] bg-[length:50%_50%] bg-no-repeat animate-shimmer bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"></div>
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  </div>
);
const items = [
  {
    title: "Component Library",
    description: "Build and manage reusable UI components for your design system.",
    header: <ImageCard src="/images/component-library.svg" alt="Component Library" />,
    icon: <IconBoxAlignTopLeft className="h-5 w-5" stroke={1.5} />,
  },
  {
    title: "Design Tokens",
    description: "Define and manage colors, typography, spacing, and more.",
    header: <ImageCard src="/images/design-tokens.svg" alt="Design Tokens" />,
    icon: <IconTableColumn className="h-5 w-5" stroke={1.5} />,
  },
  {
    title: "Version Control",
    description: "Track changes and manage versions of your design system.",
    header: <ImageCard src="/images/version-control.svg" alt="Version Control" />,
    icon: <IconClipboardCopy className="h-5 w-5" stroke={1.5} />,
  },
  {
    title: "Framework Export",
    description:
      "Export components to React, Vue, Angular, and other frameworks.",
    header: <ImageCard src="/images/framework-export.svg" alt="Framework Export" />,
    icon: <IconArrowWaveRightUp className="h-5 w-5" stroke={1.5} />,
  },
  {
    title: "Team Collaboration",
    description: "Work together with designers and developers in real-time.",
    header: <ImageCard src="/images/team-collaboration.svg" alt="Team Collaboration" />,
    icon: <IconSignature className="h-5 w-5" stroke={1.5} />,
  },
  {
    title: "Documentation",
    description: "Automatically generate documentation for your design system.",
    header: <ImageCard src="/images/documentation.svg" alt="Documentation" />,
    icon: <IconFileBroken className="h-5 w-5" stroke={1.5} />,
  },
  {
    title: "Enterprise Features",
    description: "Advanced tools for large organizations and complex design systems.",
    header: <ImageCard src="/images/enterprise-features.svg" alt="Enterprise Features" />,
    icon: <IconBoxAlignRightFilled className="h-5 w-5" stroke={1.5} />,
  },
];
