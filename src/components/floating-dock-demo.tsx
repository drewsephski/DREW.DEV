import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconFileText,
  IconComponents,
  IconCreditCard,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Components",
      icon: (
        <IconComponents className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/components",
    },
    {
      title: "Blog",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
    {
      title: "Pricing",
      icon: (
        <IconCreditCard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pricing",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/drewsephski/",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock
        items={links}
        desktopClassName="shadow-lg border border-white/10"
        mobileClassName=""
      />
    </div>
  );
}
