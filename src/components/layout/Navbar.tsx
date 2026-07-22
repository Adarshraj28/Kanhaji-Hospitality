"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPANY } from "@/data/constants";

const VALUES_LINKS = [
  { label: "Menus & Meals", href: "/menus" },
  { label: "Quality & Hygiene", href: "/quality" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

// Ordered nav items with Values positioned after Industries
const NAV_ORDER = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { type: "values" as const },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [valuesOpen, setValuesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setValuesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setValuesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_1px_3px_0_rgb(60_48_40/0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center h-18 md:h-20">
          {/* Logo - Left Section */}
          <div className="flex-[1.5] flex justify-start">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/images/kanhaji-logo.jpg"
                alt="Kanhaji Hospitality"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
              />
              <span
                className={cn(
                  "text-xl md:text-2xl font-bold tracking-tight transition-colors",
                  scrolled ? "text-[#1c1512]" : "text-white"
                )}
              >
                Kanhaji{" "}
                <span className="text-[#d48c2c]">Hospitality</span>
              </span>
            </Link>
          </div>

          {/* Divider */}
          <div className={cn("hidden lg:block w-px h-8", scrolled ? "bg-[#e0d4c4]" : "bg-white/15")} />

          {/* Desktop Nav - Center Section */}
          <nav className="hidden lg:flex flex-[2.5] items-center justify-center gap-1">
            {NAV_ORDER.map((item) => {
              if ("type" in item && item.type === "values") {
                return (
                  <div
                    key="values"
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setValuesOpen(true)}
                    onMouseLeave={() => setValuesOpen(false)}
                  >
                    <button
                      onClick={() => setValuesOpen(!valuesOpen)}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2.5 text-base font-medium rounded-md transition-all duration-200 whitespace-nowrap",
                        scrolled
                          ? "text-[#3d3028] hover:text-[#1c1512] hover:bg-[#f3efe7]"
                          : "text-white/90 hover:text-white hover:bg-white/8",
                        VALUES_LINKS.some((l) => pathname === l.href) &&
                          (scrolled
                            ? "text-[#d48c2c] bg-[#faf7f2]"
                            : "text-white bg-white/10")
                      )}
                    >
                      Values
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          valuesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {valuesOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-[#f3efe7] rounded-xl shadow-dropdown py-2 z-50 animate-fade-in"
                      >
                        {VALUES_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                              "block px-5 py-3 text-base text-[#3d3028] hover:bg-[#faf7f2] hover:text-[#1c1512] transition-colors",
                              pathname === link.href && "text-[#d48c2c] bg-[#faf7f2] font-medium"
                            )}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={cn(
                    "px-4 py-2.5 text-base font-medium rounded-md transition-all duration-200 whitespace-nowrap",
                    scrolled
                      ? "text-[#3d3028] hover:text-[#1c1512] hover:bg-[#f3efe7]"
                      : "text-white/90 hover:text-white hover:bg-white/8",
                    pathname === item.href &&
                      (scrolled
                        ? "text-[#d48c2c] bg-[#faf7f2]"
                        : "text-white bg-white/10")
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className={cn("hidden lg:block w-px h-8", scrolled ? "bg-[#e0d4c4]" : "bg-white/15")} />

          {/* Desktop CTA - Right Section */}
          <div className="hidden lg:flex flex-[1.5] items-center justify-end gap-3">
            {/* Phone Number */}
            <a
              href={`tel:${COMPANY.phone}`}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 whitespace-nowrap",
                scrolled
                  ? "text-[#8a0b0b] hover:text-[#a00d0d] hover:bg-red-50/50 border border-red-100"
                  : "text-white/90 hover:text-white border border-white/20 hover:bg-white/10"
              )}
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <Link
              href="/get-proposal"
              className={cn(
                "inline-flex items-center gap-1.5 px-5 py-2.5 text-base font-semibold rounded-md transition-all duration-200 whitespace-nowrap",
                scrolled
                  ? "bg-[#d48c2c] text-white hover:bg-[#c47d1e] shadow-sm"
                  : "bg-white text-[#1c1512] hover:bg-[#f3efe7]"
              )}
            >
              Get Proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden ml-auto p-2 rounded-md transition-colors",
              scrolled
                ? "text-[#1c1512] hover:bg-[#f3efe7]"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 z-[60] lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Panel */}
      <div
        className={cn(
          "fixed top-16 right-0 bottom-0 w-full max-w-xs bg-white z-50 lg:hidden transform transition-transform duration-300 overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ boxShadow: "-4px 0 24px rgba(60,48,40,0.1)" }}
      >
        <div className="p-6 space-y-2">
          {NAV_ORDER.map((item) => {
            if ("type" in item && item.type === "values") {
              return (
                <div key="values" className="px-4 py-2">
                  <div className="text-sm font-semibold text-[#8a7f72] uppercase tracking-wider mb-3">Values</div>
                  <div className="space-y-1 ml-2">
                    {VALUES_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "block px-3 py-2.5 rounded-md text-base transition-colors",
                          pathname === link.href
                            ? "text-[#d48c2c] bg-[#faf7f2] font-medium"
                            : "text-[#3d3028] hover:bg-[#f3efe7]"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-[#faf7f2] text-[#d48c2c]"
                    : "text-[#3d3028] hover:bg-[#f3efe7]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <hr className="my-4 border-[#f3efe7]" />
          
          {/* Mobile Phone */}
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 px-4 py-3 text-base font-medium text-[#8a0b0b] hover:bg-red-50 rounded-md transition-colors"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          
          <Link
            href="/get-proposal"
            className="block mt-2"
          >
            <button className="w-full px-5 py-3 bg-[#d48c2c] text-white text-base font-semibold rounded-md hover:bg-[#c47d1e] transition-colors">
              Get Proposal
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
