"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CLIENTS_SHOWCASE } from "@/data/constants";
import ClientLogoCard from "@/components/ui/ClientLogoCard";

export default function ClientsSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="Our Clients"
            subtitle="Trusted by industry leaders across sectors"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {CLIENTS_SHOWCASE.map((client, index) => (
            <AnimatedSection key={client.name} delay={index * 0.04}>
              <ClientLogoCard client={client} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
