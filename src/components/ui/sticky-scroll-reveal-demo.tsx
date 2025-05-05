"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Streamline Your Workflow",
    description:
      "Our SaaS platform simplifies complex processes, allowing your team to focus on what matters most. Automate repetitive tasks and improve efficiency.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Workflow Automation
      </div>
    ),
  },
  {
    title: "Gain Valuable Insights",
    description:
      "Access powerful analytics and reporting tools to understand your data better. Make informed decisions and drive growth with actionable insights.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp" // Replace with a relevant SaaS image if available
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="SaaS Analytics Demo"
        />
      </div>
    ),
  },
  {
    title: "Enhance Collaboration",
    description:
      "Foster seamless collaboration among your team members with integrated communication and project management features. Work together efficiently, no matter where you are.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Team Collaboration
      </div>
    ),
  },
  {
    title: "Scale with Confidence",
    description:
      "Our scalable infrastructure grows with your business. Whether you&apos;re a small startup or a large enterprise, our platform can handle your needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Scalability
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
