"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "why-us", label: "Why Us" },
  { id: "services", label: "Services" },
  { id: "industries", label: "Industries" },
  { id: "clients", label: "Clients" },
  { id: "certifications", label: "Certs" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta", label: "Contact" },
];

export default function MobileJumpNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
      const sectionIds = SECTIONS.map((s) => s.id);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3) {
            setActive(sectionIds[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white/98 backdrop-blur-lg border-t border-[#f3efe7] shadow-[0_-4px_24px_rgba(60,48,40,0.1)] px-2 py-2.5">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar snap-x snap-mandatory justify-center">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={cn(
                "snap-start shrink-0 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap",
                active === section.id
                  ? "bg-[#d48c2c] text-white shadow-sm"
                  : "bg-[#faf7f2] text-[#3d3028] hover:bg-[#f3efe7] active:scale-95"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
