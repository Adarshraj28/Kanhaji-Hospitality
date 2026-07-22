"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/data/constants";

export default function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1c1512] via-[#2d221c] to-[#1c1512] px-8 py-14 md:px-14 md:py-16">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 text-center max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                <span className="text-[#d48c2c]">Ready to Transform</span>
                <br />
                <span className="text-white">Your Dining Experience?</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Let&apos;s discuss how we can elevate your food service operations
                with professional management and consistent quality.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/get-proposal"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d48c2c] text-white text-sm font-semibold rounded-md hover:bg-[#c47d1e] transition-colors"
                >
                  Get a Proposal
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white text-sm font-semibold rounded-md hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
