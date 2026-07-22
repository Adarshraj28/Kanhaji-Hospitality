"use client";

import { Check, ChevronDown, ChefHat } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SERVICES, COMPANY } from "@/data/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import CTASection from "@/components/sections/CTASection";

function ServicePageImage({ src, title }: { src: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <ChefHat className="w-16 h-16 text-white/20" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={title}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      onError={() => setHasError(true)}
    />
  );
}

const serviceImages: Record<string, string> = {
  "guest-house-management": "/images/services/guest-house.jpg",
  "on-site-catering": "/images/services/on-site-catering.jpg",
  "central-kitchen": "/images/services/central-kitchen.jpg",
  "buffet-catering": "/images/services/buffet-catering.jpg",
  "retail-management": "/images/services/retail-management.jpg",
};

const SERVICE_DETAILS: Record<string, { extendedDesc: string; benefits: string[] }> = {
  "guest-house-management": {
    extendedDesc:
      "We provide end-to-end management of corporate guest houses, ensuring a hotel-like experience for visiting employees, clients, and partners. From housekeeping and maintenance to kitchen operations and hospitality, our team handles every detail so your guests feel at home. Our guest house management services are designed to reflect your organization's standards of excellence.",
    benefits: [
      "24/7 front desk and concierge support",
      "Weekly deep cleaning and sanitization",
      "Linens, towels, and toiletries management",
      "On-call maintenance and repair services",
      "Flexible check-in/check-out for corporate travelers",
    ],
  },
  "on-site-catering": {
    extendedDesc:
      "Our on-site catering solutions bring professional food service directly to your location. Whether it's a corporate office cafeteria, a factory canteen, or an institutional dining hall, we set up and manage the entire operation — from kitchen equipment and staffing to menu planning and daily service. Every meal is prepared with the highest standards of hygiene and quality.",
    benefits: [
      "Turnkey kitchen setup at your premises",
      "Trained and uniformed service staff",
      "Daily menu planning with nutritionists",
      "Real-time feedback and quality tracking",
      "Flexible pricing models to suit your budget",
    ],
  },
  "central-kitchen": {
    extendedDesc:
      "Our centralized kitchen model is built for scale and consistency. Food is prepared in state-of-the-art facilities using standardized recipes and then efficiently distributed to multiple client locations. This approach ensures uniform quality, reduces overhead, and allows us to serve large volumes without compromising on taste or hygiene. Perfect for institutions with multiple sites.",
    benefits: [
      "HACCP-compliant production facility",
      "Temperature-controlled logistics fleet",
      "Batch cooking with quality holds",
      "Ingredient traceability from source to serving",
      "Reduced operational costs through economies of scale",
    ],
  },
  "buffet-catering": {
    extendedDesc:
      "From intimate board meetings to large-scale corporate conferences, our buffet catering services bring variety and elegance to every event. We design diverse menus featuring Indian, Continental, and regional cuisines to delight every palate. Our experienced service team ensures seamless execution, allowing you to focus on your event while we handle the food.",
    benefits: [
      "Customizable menu packages for any event size",
      "Live cooking stations and themed counters",
      "Dietary preference management (Jain, vegan, gluten-free)",
      "Professional setup with elegant presentation",
      "Efficient replenishment and waste management",
    ],
  },
  "retail-management": {
    extendedDesc:
      "We specialize in the professional management of retail food outlets including cafeterias, food courts, kiosks, and canteens. Our team optimizes operations, improves customer experience, and drives profitability through efficient inventory management, staff training, and menu engineering. We transform everyday dining spaces into vibrant, well-run destinations.",
    benefits: [
      "Comprehensive outlet management and staffing",
      "Point-of-sale system integration",
      "Menu engineering and profitability analysis",
      "Inventory and supply chain optimization",
      "Customer satisfaction surveys and continuous improvement",
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1c1512] pt-32 pb-20 overflow-hidden">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Comprehensive corporate hospitality and catering solutions designed
              to meet the unique needs of every client.
            </p>
          </AnimatedSection>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/40" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf7f2] to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.id} delay={0}>
                <div
                  id={service.id}
                  className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#1c1512] to-[#2d221c]">
                      <ServicePageImage src={serviceImages[service.id]} title={service.title} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card hover={false} padding="lg">
                      <h2 className="text-2xl font-bold text-[#1c1512] mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                        {SERVICE_DETAILS[service.id]?.extendedDesc}
                      </p>
                      <h4 className="font-semibold text-[#1c1512] mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2.5 mb-6">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#1f8b4c]/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-[#1f8b4c]" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <h4 className="font-semibold text-[#1c1512] mb-3">
                        Why Choose This Service
                      </h4>
                      <ul className="space-y-2.5">
                        {SERVICE_DETAILS[service.id]?.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#d48c2c]/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-[#d48c2c]" />
                            </span>
                            {benefit}
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
