"use client";

import { Brain, Wrench, ShieldCheck, ArrowUpRight, Volume2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const safetyChecks = [
  {
    icon: Brain,
    title: "Do I know how to do the job?",
    description:
      "Every team member is trained and certified for their specific role before stepping into the workplace.",
    color: "text-[#d48c2c]",
    bg: "bg-[#d48c2c]/8",
  },
  {
    icon: Wrench,
    title: "Do I have the right equipment?",
    description:
      "All necessary tools, protective gear, and equipment are provided and inspected before every shift.",
    color: "text-[#1f8b4c]",
    bg: "bg-[#1f8b4c]/8",
  },
  {
    icon: ShieldCheck,
    title: "Is my environment safe?",
    description:
      "Work areas are regularly inspected for hazards, ensuring a clean and secure environment for all.",
    color: "text-[#c0392b]",
    bg: "bg-[#c0392b]/8",
  },
];

export default function SafetyChecksSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="3 Checks for Safety"
            subtitle="Before every task, our team members are trained to pause and verify these three critical safety checks"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Safety Check Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyChecks.map((check, index) => (
              <AnimatedSection key={check.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg border border-[#f3efe7] p-6 h-full hover:shadow-md hover:border-[#e8d5c0] transition-all duration-300 group">
                  <div
                    className={`w-12 h-12 rounded-lg ${check.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <check.icon className={`w-6 h-6 ${check.color}`} />
                  </div>
                  <h3 className="text-base font-semibold text-[#1c1512] mb-3 leading-snug">
                    {check.title}
                  </h3>
                  <p className="text-sm text-[#8a7f72] leading-relaxed">
                    {check.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Speak Up Panel */}
          <AnimatedSection delay={0.3}>
            <div className="h-full bg-white rounded-lg border border-[#f3efe7] p-7 flex flex-col hover:shadow-md hover:border-[#e8d5c0] transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-[#d48c2c]/8 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Volume2 className="w-6 h-6 text-[#d48c2c]" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1512] mb-3">
                Speak Up for Safety
              </h3>
              <p className="text-sm text-[#8a7f72] leading-relaxed flex-1">
                If any safety check fails, employees are empowered and
                encouraged to immediately report concerns to their supervisor.
                No task is so urgent that it cannot be done safely.
              </p>
              <div className="mt-6 pt-5 border-t border-[#f3efe7]">
                <div className="flex items-center gap-3 text-sm text-[#8a7f72]">
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#d48c2c]" />
                  <span>Your safety is our priority</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
