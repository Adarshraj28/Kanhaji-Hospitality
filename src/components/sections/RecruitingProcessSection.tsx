"use client";

import { Search, ClipboardCheck, GraduationCap, Briefcase, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    icon: Search,
    title: "Manpower Planning",
    description: "Identifying workforce requirements based on client needs and operational scope.",
    details: [],
  },
  {
    icon: ClipboardCheck,
    title: "Recruitment",
    description: "Multi-stage screening process to find the right talent.",
    details: [
      "Medical Check-up",
      "Background Verification",
      "Reference Check",
    ],
  },
  {
    icon: Briefcase,
    title: "Enrollment",
    description: "Formal onboarding and documentation.",
    details: [
      "Code of Conduct Signed",
      "Employee Validation",
    ],
  },
  {
    icon: GraduationCap,
    title: "Induction & Training",
    description: "Comprehensive pre-deployment preparation.",
    details: [
      "40 Hours Training Before Deployment",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment",
    description: "Ongoing development and support.",
    details: [
      "Continuous Training",
      "Daily Toolbox Meetings",
    ],
  },
];

export default function RecruitingProcessSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="Recruiting the Team"
            subtitle="Our rigorous hiring process ensures only the best professionals join the Kanhaji family"
          />
        </AnimatedSection>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-[#e0d4c4]" />

          <div className="grid grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.12}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="flex justify-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#d48c2c] flex items-center justify-center z-10 relative">
                      <step.icon className="w-5 h-5 text-[#d48c2c]" />
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-3 -right-3 text-[#c4b8a8] z-20">
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </div>
                  )}

                  {/* Content card */}
                  <div className="bg-white rounded-lg border border-[#f3efe7] p-5 hover:shadow-md hover:border-[#e8d5c0] transition-all duration-300 h-full">
                    <h3 className="text-sm font-bold text-[#1c1512] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#8a7f72] leading-relaxed mb-3">
                      {step.description}
                    </p>
                    {step.details.length > 0 && (
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-1.5 text-xs text-[#3d3028]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d48c2c] mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile/tablet vertical timeline */}
        <div className="lg:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#e0d4c4]" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="relative flex items-start gap-6 pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 w-5 h-5 rounded-full bg-white border-2 border-[#d48c2c] flex items-center justify-center z-10 -translate-x-1/2 mt-0.5">
                    <span className="text-[8px] font-bold text-[#d48c2c]">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-lg border border-[#f3efe7] p-5 hover:shadow-md transition-all duration-300 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-4 h-4 text-[#d48c2c]" />
                      <h3 className="text-base font-bold text-[#1c1512]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#8a7f72] leading-relaxed mb-3">
                      {step.description}
                    </p>
                    {step.details.length > 0 && (
                      <ul className="space-y-1.5">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-sm text-[#3d3028]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d48c2c] mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
