"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { INDUSTRIES } from "@/data/constants";

export default function IndustriesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="Industries We Serve"
            subtitle="Specialized solutions for diverse institutional sectors"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map((industry, index) => (
            <AnimatedSection key={industry.id} delay={index * 0.07}>
              <div className="bg-white rounded-lg border border-[#f3efe7] p-6 h-full hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-[#1c1512]/5 flex items-center justify-center mb-4">
                  <Icon name={industry.icon} className="text-[#1c1512]" size={24} />
                </div>
                <h3 className="text-base font-semibold text-[#1c1512] mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-[#8a7f72] leading-relaxed mb-3 line-clamp-3">
                  {industry.description}
                </p>
                <div className="text-sm font-medium text-[#d48c2c] mb-2">
                  {industry.stats}
                </div>
                <Link
                  href={`/industries#${industry.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#1c1512] hover:text-[#d48c2c] transition-colors"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2 border-2 border-[#1c1512] text-[#1c1512] text-sm font-semibold rounded-md hover:bg-[#1c1512] hover:text-white transition-colors"
            >
              View All Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
