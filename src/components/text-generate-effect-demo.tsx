"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to ensure flexibility and unity across all product experiences. They are stored as data and can be transformed for any platform or language.
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
