"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-12",
        centered && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold tracking-tight",
          light ? "text-white" : "text-[#1c1512]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/60" : "text-[#8a7f72]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
