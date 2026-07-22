"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles, ShieldCheck, ChefHat } from "lucide-react";
import { COMPANY } from "@/data/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0605] via-[#1c1512] to-[#2d221c] z-0" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#d48c2c]/5 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#d48c2c]/3 blur-3xl" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative food/kitchen icon elements */}
      <div className="absolute top-1/4 right-[8%] opacity-[0.06] z-0 hidden lg:block">
        <ChefHat className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-1/4 left-[5%] opacity-[0.04] z-0 hidden lg:block">
        <ShieldCheck className="w-28 h-28 text-white" />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-8 tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-[#d48c2c]" />
              Trusted Food Service Partner
            </div>

            <h1 className="text-white mb-4">
              <span className="text-[#d48c2c]">Professional</span>
              <br />
              <span className="text-white/90">Hospitality & Catering</span>
            </h1>

            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-xl mb-10">
              Professional corporate catering, guest house management, central
              kitchen operations, buffet catering, and retail dining solutions.
              Quality, hygiene, and reliability — delivered every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-proposal"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#d48c2c] text-white text-base font-semibold rounded-md hover:bg-[#c47d1e] transition-colors shadow-lg shadow-[#d48c2c]/20"
              >
                Request Proposal
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white text-base font-semibold rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
              >
                <Phone className="h-5 w-5" />
                Contact Sales
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "10,000+", label: "Meals Daily" },
                { value: "8+", label: "Years Experience" },
                { value: "50+", label: "Happy Clients" },
                { value: "10+", label: "Cities Served" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-lg p-3 md:p-0 md:bg-transparent">
                  <div className="text-xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/50 mt-0.5 md:mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - image card */}
          <div className="hidden lg:block relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/hero/hero-bg.jpg"
                alt="Professional commercial kitchen"
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Decorative content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-sm">Quality</span>
                  <span className="px-4 py-1.5 rounded-full bg-[#d48c2c]/30 backdrop-blur-sm text-[#d48c2c] text-sm">Trusted</span>
                </div>

                <div className="space-y-4">
                  {/* Stats mini card */}
                  <div className="flex gap-3">
                    <div className="flex-1 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-white/90 text-base font-bold">500+</div>
                      <div className="text-white/60 text-xs">Staff</div>
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
                      <div className="text-white/90 text-base font-bold">15Cr+</div>
                      <div className="text-white/60 text-xs">Meals Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf7f2] to-transparent z-10" />
    </section>
  );
}
