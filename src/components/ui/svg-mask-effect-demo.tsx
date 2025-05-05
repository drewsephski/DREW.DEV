"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export default function SVGMaskEffectDemo() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Build beautiful UI components with DZN.DEV - the modern design system for React developers.
          </p>
        }
        className="h-[40rem] rounded-md border border-slate-800 text-white dark:text-black"
      >
        Explore the power of{" "}
        <span className="text-blue-500">Tailwind CSS v4</span> with our
        <span className="text-blue-500"> advanced component library</span> for
        modern web applications.
      </MaskContainer>
    </div>
  );
}
