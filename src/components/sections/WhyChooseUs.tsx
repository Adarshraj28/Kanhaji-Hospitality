"use client";

import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHY_CHOOSE_US } from "@/data/constants";

const ICON_COLORS = [
  { bg: "bg-red-50", text: "text-red-600" },
  { bg: "bg-amber-50", text: "text-amber-600" },
  { bg: "bg-green-50", text: "text-green-600" },
  { bg: "bg-blue-50", text: "text-blue-600" },
  { bg: "bg-purple-50", text: "text-purple-600" },
  { bg: "bg-teal-50", text: "text-teal-600" },
  { bg: "bg-pink-50", text: "text-pink-600" },
  { bg: "bg-orange-50", text: "text-orange-600" },
  { bg: "bg-cyan-50", text: "text-cyan-600" },
  { bg: "bg-indigo-50", text: "text-indigo-600" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding section-alt">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="Why Kanhaji Hospitality?"
            subtitle="What sets us apart in institutional food service management"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {WHY_CHOOSE_US.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.06}>
              <div className="bg-white rounded-lg border border-[#f3efe7] p-4 md:p-6 text-center h-full hover:shadow-md hover:border-[#e8d5c0] transition-all duration-300 group">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${ICON_COLORS[index % ICON_COLORS.length].bg} flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={item.icon} className={ICON_COLORS[index % ICON_COLORS.length].text} size={20} />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#1c1512] mb-1.5 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-[#8a7f72] leading-relaxed">
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
