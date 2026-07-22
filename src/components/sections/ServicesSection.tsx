"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, ChefHat } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/data/constants";

const serviceImages = [
  "/images/services/guest-house.jpg",
  "/images/services/on-site-catering.jpg",
  "/images/services/central-kitchen.jpg",
  "/images/services/buffet-catering.jpg",
  "/images/services/retail-management.jpg",
];

function ServiceImage({ src, title }: { src: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="relative h-48 bg-gradient-to-br from-[#1c1512] to-[#2d221c] flex items-center justify-center">
        <ChefHat className="w-12 h-12 text-white/20" />
      </div>
    );
  }

  return (
    <div className="relative h-48 overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive corporate hospitality and catering solutions"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 5).map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.08}>
              <div className="bg-white rounded-lg border border-[#f3efe7] overflow-hidden h-full hover:shadow-lg transition-all duration-300 group">
                <ServiceImage src={serviceImages[index] || "/images/hero/hero-bg.jpg"} title={service.title} />

                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1c1512] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#8a7f72] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[#3d3028]">
                        <Check className="h-4 w-4 text-[#c0392b] mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#d48c2c] hover:text-[#b8731a] transition-colors"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1c1512] text-[#1c1512] text-base font-semibold rounded-md hover:bg-[#1c1512] hover:text-white transition-colors"
            >
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
