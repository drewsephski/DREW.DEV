"use client";

import React from "react";
import Image from "next/image";
import { WobbleCard } from "@/components/ui/cards/wobble-card";
import { TextReveal } from "@/components/ui/text-reveal";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[400px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            <TextReveal duration={0.4} filter={false}>Create consistent design systems at scale</TextReveal>
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            <TextReveal duration={0.4} filter={false}>
              Trusted by over 10,000 design teams worldwide. Build, manage, and
              implement design systems with our powerful platform.
            </TextReveal>
          </p>
        </div>
        <div
          className="absolute top-1/2 right-0 lg:right-0 transform -translate-y-1/2 translate-x-1/4 lg:translate-x-0 rounded-2xl w-[400px] h-[400px] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/images/ai-robot.svg"
            alt="AI Robot Illustration"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          <TextReveal duration={0.4} filter={false}>Design tokens that scale with your team</TextReveal>
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          <TextReveal duration={0.4} filter={false}>
            Manage colors, typography, spacing, and more with our intuitive token management system.
          </TextReveal>
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[400px] xl:min-h-[400px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            <TextReveal duration={0.4} filter={false}>
              Export your design system to multiple frameworks with a single click
            </TextReveal>
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            <TextReveal duration={0.4} filter={false}>
              Support for React, Vue, Angular, and more. Keep your design system
              consistent across all your applications and platforms.
            </TextReveal>
          </p>
        </div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-0 md:translate-x-1/4 lg:translate-x-1/3 rounded-2xl w-[400px] h-[400px] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/images/tech-landscape.svg"
            alt="Futuristic Tech Landscape"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </WobbleCard>
    </div>
  );
}
