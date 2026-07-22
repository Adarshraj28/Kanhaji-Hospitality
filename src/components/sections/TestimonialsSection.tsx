"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/data/constants";
import { getInitials } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(current * perPage, current * perPage + perPage);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="Client Testimonials"
            subtitle="Hear from the institutions we serve"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-white rounded-lg border border-[#f3efe7] p-7 h-full flex flex-col">
                <Quote className="h-8 w-8 text-[#d48c2c]/15 mb-4" />
                <p className="text-base text-[#3d3028] leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-4 w-4", i < t.rating ? "text-[#d48c2c] fill-[#d48c2c]" : "text-[#f3efe7]")}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#f3efe7]">
                  <div className="w-11 h-11 rounded-full bg-[#1c1512] flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1c1512]">{t.name}</div>
                    <div className="text-xs text-[#8a7f72]">{t.designation}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {total > 1 && (
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="w-8 h-8 rounded-full border border-[#f3efe7] flex items-center justify-center text-[#8a7f72] hover:border-[#d48c2c] hover:text-[#d48c2c] transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn("w-1.5 h-1.5 rounded-full transition-all", i === current ? "bg-[#d48c2c] w-5" : "bg-[#e0d4c4]")}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent(Math.min(total - 1, current + 1))}
              disabled={current === total - 1}
              className="w-8 h-8 rounded-full border border-[#f3efe7] flex items-center justify-center text-[#8a7f72] hover:border-[#d48c2c] hover:text-[#d48c2c] transition-colors disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
