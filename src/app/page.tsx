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
import MobileJumpNav from "@/components/ui/MobileJumpNav";

export default function Home() {
  return (
    <>
      <div className="lg:pb-0 pb-14">
      <HeroSection />
      <div id="why-us"><WhyChooseUs /></div>
      <PhotoBanner />
      <SafetyChecksSection />
      <div id="services"><ServicesSection /></div>
      <div id="industries"><IndustriesSection /></div>
      <div id="clients"><ClientsSection /></div>
      <div id="certifications"><CertificationsSection /></div>
      <ComplianceSection />
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="cta"><CTASection /></div>
      </div>
      <MobileJumpNav />
    </>
  );
}
