"use client";

import { Check, TrendingUp } from "lucide-react";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Discover how we have transformed food service operations for our
              clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom space-y-20">
          {CASE_STUDIES.map((study, index) => (
            <AnimatedSection key={study.id} delay={0}>
              <div
                id={study.id}
                className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10"
              >                {/* Image */}
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-2" : ""
                    } relative rounded-2xl aspect-[4/3] overflow-hidden bg-gray-100`}
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                        {study.client}
                      </span>
                    </div>
                  </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d48c2c]/10 text-[#d48c2c] text-sm font-medium mb-4">
                    {study.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1c1512] mb-6">
                    {study.title}
                  </h2>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                      The Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Our Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <Check className="h-4 w-4 text-[#1f8b4c] mt-0.5 shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
