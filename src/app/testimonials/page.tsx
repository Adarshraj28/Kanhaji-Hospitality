"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import { getInitials } from "@/lib/utils";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Testimonials
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Hear from our clients about their experience with Kanhaji
              Hospitality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.08}>
                <Card className="h-full flex flex-col" padding="lg">
                  <Quote className="h-8 w-8 text-[#d48c2c]/20 mb-4" />
                  <p className="text-gray-600 leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-[#d48c2c] fill-[#e8751a]"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[#1c1512] flex items-center justify-center text-white text-sm font-bold">
                      {getInitials(testimonial.name)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1c1512]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.designation}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
