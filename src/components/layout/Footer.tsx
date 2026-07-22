"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SocialIcon } from "@/components/ui/Icon";
import { COMPANY, FOOTER_SECTIONS, BRANCHES } from "@/data/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1512] text-[#c4b8a8]">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold text-white">Kanhaji</span>
              <span className="text-2xl font-bold text-[#d48c2c]">Hospitality</span>
            </Link>
            <p className="text-[#8a7f72] leading-relaxed mb-6 text-base max-w-sm">
              Professional institutional food management services across North India.
            </p>
            <div className="space-y-3">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-base text-[#8a7f72] hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-[#d48c2c]" />
                </span>
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-base text-[#8a7f72] hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-[#d48c2c]" />
                </span>
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-base text-[#8a7f72]">
                <span className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-[#d48c2c]" />
                </span>
                <span>{COMPANY.address.street}, {COMPANY.address.city}, {COMPANY.address.state}</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-[#8a7f72] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#6b5f50]">
              &copy; {year} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {[
                { platform: "linkedin", href: COMPANY.social.linkedin },
                { platform: "facebook", href: COMPANY.social.facebook },
                { platform: "instagram", href: COMPANY.social.instagram },
                { platform: "twitter", href: COMPANY.social.twitter },
              ].map(({ platform, href }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-[#8a7f72] hover:bg-[#d48c2c] hover:text-white transition-all duration-200"
                  aria-label={platform}
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-5 text-sm text-[#6b5f50]">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
