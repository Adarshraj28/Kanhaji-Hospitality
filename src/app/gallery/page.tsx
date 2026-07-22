"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/data/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  return (
    <Suspense fallback={null}>
      <GalleryContent />
    </Suspense>
  );
}

function GalleryContent() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState("all");
  const [enlarged, setEnlarged] = useState<number | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category && GALLERY_CATEGORIES.some((c) => c.id === category)) {
      setActive(category);
    }
  }, [searchParams]);

  const filtered =
    active === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              A glimpse into our kitchens, food, team, and operations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  active === cat.id
                    ? "bg-[#1c1512] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <button
                  onClick={() => setEnlarged(item.id)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer w-full text-left"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-medium">
                      {item.alt}
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enlarged image modal */}
      {enlarged !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setEnlarged(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src={GALLERY_ITEMS.find((i) => i.id === enlarged)?.src || ""}
              alt={GALLERY_ITEMS.find((i) => i.id === enlarged)?.alt || ""}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            onClick={() => setEnlarged(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
