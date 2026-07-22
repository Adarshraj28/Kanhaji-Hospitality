"use client";

import Image from "next/image";
import { useState } from "react";
import { COMPANY, LEADERSHIP, TIMELINE, STATS } from "@/data/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, User } from "lucide-react";

function TeamImage({ leader }: { leader: (typeof LEADERSHIP)[0] }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-[#1c1512] flex items-center justify-center">
      {hasError ? (
        <User className="w-10 h-10 text-white/50" />
      ) : (
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          className="object-cover"
          sizes="96px"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Kanhaji Hospitality
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              From a single mess contract in Rudrapur to a trusted regional institution — our
              journey of excellence in hospitality and food management.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeading
                title="Our Story"
                subtitle=""
                centered={false}
                className="mb-0"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in {COMPANY.founded}, Kanhaji Hospitality began with a
                simple vision — to transform the way institutions approach food
                service management. What started as a single mess contract in
                Rudrapur has grown into a trusted regional institution
                serving 50+ trusted partners across North India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Over the past {new Date().getFullYear() - COMPANY.founded}+ years, we have
                served over {STATS.find((s) => s.label === "Total Meals Served")?.value || "15Cr+"} meals
                across 10+ cities, partnering with 50+ institutions including
                schools, hospitals, corporate offices, and government
                organizations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our growth has been driven by an unwavering commitment to
                quality, hygiene, and customer satisfaction. Today, with a team
                of {COMPANY.employees} dedicated professionals, we continue to set
                benchmarks in the institutional catering industry.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-[#d48c2c]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="Our Mission, Vision & Values"
              subtitle="The principles that guide every meal we prepare"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide exceptional food service management that enhances the quality of life in institutions through nutritious, hygienic, and delicious meals delivered with professionalism and care.",
                color: "text-[#d48c2c]",
                bg: "bg-[#d48c2c]/10",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be India's most trusted and preferred institutional food service partner, setting global benchmarks in quality, innovation, and customer satisfaction.",
                color: "text-[#1c1512]",
                bg: "bg-[#1c1512]/5",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Integrity in every transaction, excellence in every meal, respect for every individual, responsibility toward the community, and sustainability in every operation.",
                color: "text-[#1f8b4c]",
                bg: "bg-[#1f8b4c]/10",
              },
            ].map((item) => (
              <AnimatedSection key={item.title} delay={0.1}>
                <Card className="text-center h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6`}
                  >
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1c1512] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="Our Journey"
              subtitle="Key milestones in our growth story"
            />
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.1}>
                  <div className="relative flex items-start gap-8 md:gap-0">
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#e8751a] border-4 border-white shadow -translate-x-1/2 mt-1.5 z-10" />

                    {/* Content - alternating left/right */}
                    <div
                      className={`ml-10 md:ml-0 md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:ml-auto"
                      }`}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-[#d48c2c]/10 text-[#d48c2c] text-sm font-bold mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-[#1c1512] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="Our Leadership"
              subtitle="Meet the team driving our mission of excellence"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, index) => (
              <AnimatedSection key={leader.name} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <TeamImage leader={leader} />
                  <h3 className="text-lg font-bold text-[#1c1512] mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-[#d48c2c] font-medium mb-3">
                    {leader.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {leader.bio}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1512] mb-4">
                Want to Know More?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-8">
                Schedule a virtual meeting or facility visit to see our
                operations firsthand.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/get-proposal">
                  <Button variant="secondary" size="lg">
                    Get a Proposal <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
