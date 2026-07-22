"use client";

import { CLIENTS_SHOWCASE } from "@/data/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ClientLogoCard from "@/components/ui/ClientLogoCard";
import CTASection from "@/components/sections/CTASection";

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Clients
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Trusted by leading institutions and corporations across India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="Our Valued Partners"
              subtitle="Organizations that trust Kanhaji Hospitality for their food service needs"
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {CLIENTS_SHOWCASE.map((client, index) => (
              <AnimatedSection key={client.name} delay={index * 0.05}>
                <ClientLogoCard client={client} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
