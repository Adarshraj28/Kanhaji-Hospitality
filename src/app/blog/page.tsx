"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Insights on institutional catering, nutrition, food safety, and
              industry best practices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.08}>
                <Card className="h-full flex flex-col" padding="sm" hover={true}>
                  {/* Image */}
                  <div className="relative rounded-lg aspect-[16/9] overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Category */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#d48c2c]/10 text-[#d48c2c] text-xs font-medium mb-3 self-start">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1c1512] mb-2 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="mt-3 text-xs text-gray-400">
                    By <span className="font-medium text-gray-600">{post.author}</span>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
