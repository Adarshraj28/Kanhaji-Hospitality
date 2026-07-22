"use client";

import { useState } from "react";
import { MENU_CATEGORIES } from "@/data/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

export default function MenusPage() {
  const [active, setActive] = useState(MENU_CATEGORIES[0].id);

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Menus
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Diverse, nutritious, and customizable menu options designed for
              institutional dining.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  active === cat.id
                    ? "bg-[#1c1512] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {activeCategory && (
            <AnimatedSection key={activeCategory.id}>
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-[#1c1512] mb-2">
                  {activeCategory.title}
                </h2>
                <p className="text-gray-500 mb-8">
                  {activeCategory.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategory.items.map((item, index) => (
                  <AnimatedSection key={item} delay={index * 0.05}>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#d48c2c]/30 hover:bg-[#d48c2c]/5 transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#d48c2c]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[#d48c2c]">
                            {index + 1}
                          </span>
                        </span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Note */}
          <div className="mt-12 p-6 rounded-xl bg-[#d48c2c]/5 border border-[#d48c2c]/20">
            <p className="text-sm text-gray-600">
              <strong className="text-[#1c1512]">Note:</strong> All menus are
              customizable based on your institution&apos;s requirements,
              dietary preferences, and budget. Our nutrition team will work with
              you to create the perfect menu plan.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
