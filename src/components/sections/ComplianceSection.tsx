"use client";

import {
  ScrollText,
  IndianRupee,
  ShieldCheck,
  Heart,
  Receipt,
  UtensilsCrossed,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const complianceItems = [
  {
    icon: ScrollText,
    title: "Labour License",
    description:
      "Valid labour license ensuring all employment practices comply with government regulations.",
    color: "text-[#1c1512]",
    bg: "bg-[#1c1512]/5",
  },
  {
    icon: IndianRupee,
    title: "Minimum Wages",
    description:
      "Full compliance with Minimum Wages Act, ensuring fair compensation for all team members.",
    color: "text-[#1f8b4c]",
    bg: "bg-[#1f8b4c]/8",
  },
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description:
      "International quality and food safety management standards followed across all operations.",
    color: "text-[#c0392b]",
    bg: "bg-[#c0392b]/8",
  },
  {
    icon: Heart,
    title: "PF & ESIC",
    description:
      "Provident Fund and Employee State Insurance contributions made regularly for all eligible staff.",
    color: "text-[#d48c2c]",
    bg: "bg-[#d48c2c]/8",
  },
  {
    icon: Receipt,
    title: "GST Registered",
    description:
      "Fully GST compliant with timely filings and transparent business transactions.",
    color: "text-[#2563eb]",
    bg: "bg-[#2563eb]/8",
  },
  {
    icon: UtensilsCrossed,
    title: "FSSAI Certified",
    description:
      "Certified food safety standards ensuring hygienic food preparation and handling at every step.",
    color: "text-[#d48c2c]",
    bg: "bg-[#d48c2c]/8",
  },
];

export default function ComplianceSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="We Are Fully Compliant"
            subtitle="Every legal and quality standard is met, giving our clients complete peace of mind"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {complianceItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.07}>
              <div className="bg-white rounded-lg border border-[#f3efe7] p-5 text-center h-full hover:shadow-md hover:border-[#e8d5c0] transition-all duration-300 group">
                <div
                  className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-sm font-bold text-[#1c1512] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8a7f72] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
