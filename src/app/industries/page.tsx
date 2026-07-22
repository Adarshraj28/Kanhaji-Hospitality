"use client";

import { INDUSTRIES } from "@/data/constants";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industries We Serve
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Specialized food management solutions tailored to the unique
              requirements of each institutional sector.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {INDUSTRIES.map((industry, index) => (
              <AnimatedSection key={industry.id} delay={0}>
                <div
                  id={industry.id}
                  className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div
                    className={`${
                      index % 2 === 1 ? "lg:order-2" : ""
                    } bg-gray-50 rounded-2xl p-10 md:p-12`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#1c1512]/5 flex items-center justify-center mb-6">
                      <Icon
                        name={industry.icon}
                        className="text-[#1c1512]"
                        size={32}
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1c1512] mb-3">
                      {industry.title}
                    </h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d48c2c]/10 text-[#d48c2c] text-sm font-medium mb-4">
                      {industry.stats}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Additional points */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card hover={false}>
                      <h3 className="text-lg font-bold text-[#1c1512] mb-4">
                        Why Choose Us for {industry.title}?
                      </h3>
                      <ul className="space-y-3">
                        {[
                          `Dedicated team for ${industry.title.toLowerCase()}`,
                          `Customized menu planning for ${industry.title.toLowerCase()}`,
                          "Flexible pricing models",
                          "Regular quality audits",
                          "24/7 support and supervision",
                          "Trained and certified staff",
                        ].map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e8751a] mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
