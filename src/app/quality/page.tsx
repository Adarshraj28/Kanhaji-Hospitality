"use client";

import { QUALITY_STANDARDS } from "@/data/constants";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quality & Hygiene
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Our commitment to the highest standards of food safety, hygiene,
              and quality assurance is unwavering.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1c1512] mb-4">
                Our Quality Promise
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Kanhaji Hospitality, quality is not just a department — it is
                the foundation of everything we do. From sourcing ingredients to
                serving meals, every step follows rigorous protocols to ensure
                the highest standards of food safety and hygiene. We are
                FSSAI-certified and HACCP-compliant across all our operations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITY_STANDARDS.map((standard, index) => (
              <AnimatedSection key={standard.title} delay={index * 0.06}>
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#1f8b4c]/10 flex items-center justify-center mb-5">
                    <Icon
                      name={standard.icon}
                      className="text-[#1f8b4c]"
                      size={28}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1512] mb-3">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {standard.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="Certifications & Compliance"
              subtitle="We maintain the highest industry standards"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "FSSAI Certified",
                desc: "Fully compliant with Food Safety and Standards Authority of India regulations. All our kitchens are FSSAI licensed and regularly inspected.",
              },
              {
                title: "HACCP Compliant",
                desc: "Hazard Analysis and Critical Control Points system implemented across all operations to identify and prevent food safety risks.",
              },
              {
                title: "ISO 22000:2018",
                desc: "Food Safety Management System certified. Our processes meet international standards for food safety management.",
              },
            ].map((cert) => (
              <AnimatedSection key={cert.title} delay={0.1}>
                <Card className="text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-[#1c1512] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1512] mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500">{cert.desc}</p>
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
