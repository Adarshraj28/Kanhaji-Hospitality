import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PhotoBanner from "@/components/sections/PhotoBanner";
import SafetyChecksSection from "@/components/sections/SafetyChecksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <PhotoBanner />
      <SafetyChecksSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <CertificationsSection />
      <ComplianceSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
