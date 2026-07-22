"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
}: CardProps) {
  const paddings = {
    sm: "p-5",
    md: "p-7 md:p-9",
    lg: "p-9 md:p-11",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-[#f3efe7]",
        hover &&
          "transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5",
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
