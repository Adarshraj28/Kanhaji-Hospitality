"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    image: "/images/gallery/kitchen-1.jpg",
  },
  {
    image: "/images/gallery/food-1.jpg",
  },
  {
    image: "/images/gallery/infra-2.jpg",
  },
  {
    image: "/images/gallery/staff-2.jpg",
  },
];

export default function PhotoBanner() {
  return (
    <section className="py-12 md:py-16 bg-[#faf7f2]">
      <div className="container-custom">
        <AnimatedSection>
          <SectionHeading
            title="A Glimpse Into Our Operations"
            subtitle="Take a look at our kitchens, food, facilities, and team in action"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <AnimatedSection key={item.image} delay={i * 0.1}>
              <div className="relative group aspect-[4/3] rounded-xl overflow-hidden border border-[#f3efe7] shadow-sm hover:shadow-xl transition-all duration-500">
                <Image
                  src={item.image}
                  alt="Operations glimpse"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
