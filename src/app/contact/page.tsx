"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  PhoneCall,
  MessageCircle,
  Building2,
} from "lucide-react";
import { COMPANY, BRANCHES } from "@/data/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import LeadForm from "@/components/forms/LeadForm";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Get in touch with our team. We are here to discuss your
              institutional food service requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatedSection>
                <Card hover={false}>
                  <h3 className="text-xl font-bold text-[#1c1512] mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#d48c2c]/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-[#d48c2c]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1c1512]">
                          Phone
                        </div>
                        <a
                          href={`tel:${COMPANY.phone}`}
                          className="text-sm text-gray-500 hover:text-[#d48c2c] transition-colors"
                        >
                          {COMPANY.phone}
                        </a>
                        <br />
                        <a
                          href={`tel:${COMPANY.altPhone}`}
                          className="text-sm text-gray-500 hover:text-[#d48c2c] transition-colors"
                        >
                          {COMPANY.altPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#d48c2c]/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-[#d48c2c]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1c1512]">
                          Email
                        </div>
                        <a
                          href={`mailto:${COMPANY.email}`}
                          className="text-sm text-gray-500 hover:text-[#d48c2c] transition-colors"
                        >
                          {COMPANY.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#d48c2c]/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-[#d48c2c]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1c1512]">
                          Office Address
                        </div>
                        <p className="text-sm text-gray-500">
                          {COMPANY.address.street}
                          <br />
                          {COMPANY.address.city}, {COMPANY.address.state} –{" "}
                          {COMPANY.address.zip}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#d48c2c]/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-[#d48c2c]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1c1512]">
                          Working Hours
                        </div>
                        <p className="text-sm text-gray-500">
                          Mon–Fri: {COMPANY.workingHours.weekdays}
                          <br />
                          Sat: {COMPANY.workingHours.saturday}
                          <br />
                          Sun: {COMPANY.workingHours.sunday}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#d48c2c]/10 flex items-center justify-center shrink-0">
                        <PhoneCall className="h-5 w-5 text-[#d48c2c]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1c1512]">
                          Emergency Contact
                        </div>
                        <a
                          href={`tel:${COMPANY.emergencyContact}`}
                          className="text-sm text-gray-500 hover:text-[#d48c2c] transition-colors"
                        >
                          {COMPANY.emergencyContact}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a
                      href={`https://wa.me/${COMPANY.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" size="md" className="w-full">
                        <MessageCircle className="h-4 w-4" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </Card>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection delay={0.1}>
                <Card hover={false} padding="sm">
                  <div className="rounded-lg overflow-hidden aspect-[4/3]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.695!2d79.395!3d28.973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390855db49f63299%3A0xbdfc0e7e2a3e5f7a!2sPantnagar%20University!5e0!3m2!1sen!2sin!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "280px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                      className="rounded-lg"
                    />
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection delay={0.05}>
                <h2 className="text-2xl font-bold text-[#1c1512] mb-6">
                  Send Us an Enquiry
                </h2>
                <LeadForm />
              </AnimatedSection>

              {/* Branches */}
              <AnimatedSection delay={0.15}>
                <Card hover={false}>
                  <h3 className="text-lg font-bold text-[#1c1512] mb-5 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#d48c2c]" />
                    Our Offices
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {BRANCHES.map((branch) => (
                      <div key={branch.city} className="p-4 rounded-lg bg-[#faf7f2] border border-[#f3efe7]">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="h-4 w-4 text-[#d48c2c] mt-0.5 shrink-0" />
                          <div>
                            <div className="text-sm font-semibold text-[#1c1512]">
                              {branch.city}
                              <span className="text-[11px] font-normal text-[#8a7f72] ml-2">({branch.type})</span>
                            </div>
                            <p className="text-xs text-[#8a7f72] mt-0.5">
                              {branch.address}, {branch.state}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
