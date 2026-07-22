"use client";

import { ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CERTIFICATIONS = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Internationally recognized standard for quality management, ensuring consistent service excellence across all operations.",
    image: "/images/certifications/iso-9001.png",
  },
  {
    title: "ISO 22000:2018",
    subtitle: "Food Safety Management",
    description:
      "Global food safety standard ensuring safe food handling from procurement to serving at every client location.",
    image: "/images/certifications/iso-22000.png",
  },
  {
    title: "GMP Certified",
    subtitle: "Good Manufacturing Practice",
    description:
      "Certified adherence to Good Manufacturing Practices in all our kitchen and food processing operations.",
    image: "/images/certifications/gmp.png",
  },
];

function CertBadge({ cert, index }: { cert: typeof CERTIFICATIONS[0]; index: number }) {
  const [hasError, setHasError] = useState(false);

  return (
    <AnimatedSection key={cert.title} delay={index * 0.1}>
      <div className="bg-white rounded-xl border border-[#f3efe7] p-8 text-center h-full hover:shadow-lg hover:border-[#e8d5c0] transition-all duration-300 group">
        <div className="w-24 h-24 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#faf7f2] to-[#f3efe7] border border-[#e8d5c0] flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
          {hasError ? (
            <ShieldCheck className="w-12 h-12 text-[#c0392b] opacity-60" />
          ) : (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              onError={() => setHasError(true)}
            />
          )}
        </div>
        <h3 className="text-xl font-bold text-[#1c1512] mb-1">{cert.title}</h3>
        <p className="text-sm font-medium text-[#c0392b] mb-3">{cert.subtitle}</p>
        <p className="text-sm text-[#8a7f72] leading-relaxed">{cert.description}</p>
      </div>
    </AnimatedSection>
  );
}

export default function CertificationsSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="Our Certifications"
            subtitle="Commitment to internationally recognized quality and safety standards"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertBadge key={cert.title} cert={cert} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href="/gallery?category=certificates"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1c1512] text-[#1c1512] text-base font-semibold rounded-md hover:bg-[#1c1512] hover:text-white transition-colors"
            >
              See More Certificates
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
