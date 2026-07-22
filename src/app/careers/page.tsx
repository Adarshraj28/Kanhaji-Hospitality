"use client";

import { useState } from "react";
import {
  MapPin,
  Briefcase,
  Clock,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Send,
  Upload,
  CheckCircle,
  Search,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import { JOB_OPENINGS } from "@/data/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";


export default function CareersPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Careers
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Join India&apos;s fastest-growing institutional food service
              company. Build a career that makes a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="Why Join Kanhaji Hospitality?"
              subtitle="We believe in nurturing talent and providing opportunities for growth. Our team of 200+ professionals is the backbone of our success, and we are always looking for passionate individuals to join our family."
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Growth Opportunities",
                desc: "Clear career progression paths with regular skill development programs",
                icon: GraduationCap,
              },
              {
                title: "Job Security",
                desc: "Stable employment with a growing company trusted by 50+ institutional partners",
                icon: Briefcase,
              },
              {
                title: "Work-Life Balance",
                desc: "Structured shifts and rotational schedules that respect personal time",
                icon: Clock,
              },
              {
                title: "Pan-India Presence",
                desc: "Opportunity to work across 10+ cities with diverse institutional environments",
                icon: MapPin,
              },
            ].map((item) => (
              <AnimatedSection key={item.title} delay={0.1}>
                <Card className="text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#d48c2c]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-[#d48c2c]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1512] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting Process */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeading
              title="Our Recruitment Process"
              subtitle="A rigorous multi-stage process to ensure only the best professionals join the Kanhaji family"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                icon: Search,
                title: "Manpower Planning",
                description: "Identifying workforce requirements based on client needs and operational scope.",
                details: [],
              },
              {
                icon: ClipboardCheck,
                title: "Recruitment & Screening",
                description: "Multi-stage screening to find the right talent.",
                details: [
                  "Medical Check-up",
                  "Background Verification",
                  "Reference Check",
                ],
              },
              {
                icon: Briefcase,
                title: "Enrollment",
                description: "Formal onboarding and documentation.",
                details: [
                  "Code of Conduct Signed",
                  "Employee Validation",
                ],
              },
              {
                icon: GraduationCap,
                title: "Induction & Training",
                description: "Comprehensive pre-deployment preparation.",
                details: [
                  "40 Hours Training Before Deployment",
                ],
              },
              {
                icon: ArrowUpRight,
                title: "Employment & Growth",
                description: "Ongoing development and support.",
                details: [
                  "Continuous Training",
                  "Daily Toolbox Meetings",
                ],
              },
            ].map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#d48c2c]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-6 w-6 text-[#d48c2c]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1512] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8a7f72] leading-relaxed mb-3">
                    {step.description}
                  </p>
                  {step.details.length > 0 && (
                    <ul className="space-y-1.5">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start justify-center gap-1.5 text-xs text-gray-500"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d48c2c] mt-1.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1c1512] mb-8">
              Current Openings
            </h2>

            <div className="space-y-4">
              {JOB_OPENINGS.map((job) => (
                <AnimatedSection key={job.id} delay={0}>
                  <Card hover={false} padding="md">
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#1c1512]">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 mt-3">
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                              <Briefcase className="h-3 w-3" />
                              {job.department}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              {job.experience}
                            </span>
                            <span className="inline-flex px-2 py-0.5 rounded-full bg-[#1c1512]/5 text-[#1c1512] text-xs font-medium">
                              {job.type}
                            </span>
                          </div>
                        </div>
                        {expandedJob === job.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-400 shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                        )}
                      </div>
                    </button>

                    {expandedJob === job.id && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {job.description}
                        </p>
                        <h4 className="text-sm font-bold text-[#1c1512] mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((req) => (
                            <li
                              key={req}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#e8751a] mt-2 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => setShowForm(true)}
                        >
                          Apply Now
                        </Button>
                      </div>
                    )}
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {JOB_OPENINGS.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold text-[#1c1512] mb-2">
                  No Openings Currently
                </h3>
                <p className="text-gray-500">
                  We don&apos;t have any open positions right now, but we are
                  always looking for talent. Send us your resume.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {showForm && (
        <section className="section-padding section-alt">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <Card className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#1f8b4c]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-[#1f8b4c]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1c1512] mb-3">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-500">
                    Thank you for your interest. Our HR team will review your
                    application and get back to you within 5-7 working days.
                  </p>
                </Card>
              ) : (
                <Card>
                  <h3 className="text-2xl font-bold text-[#1c1512] mb-6">
                    Apply Now
                  </h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="email@example.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Position Applying For
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none">
                          <option value="">Select position</option>
                          {JOB_OPENINGS.map((job) => (
                            <option key={job.id} value={job.id}>
                              {job.title}
                            </option>
                          ))}
                          <option value="general">General Application</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Cover Letter / Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about yourself and why you want to join Kanhaji Hospitality..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-[#d48c2c]/30 focus:border-[#d48c2c] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Upload Resume *
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-[#e8751a]/50 transition-colors cursor-pointer">
                        <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">
                          Drop your resume or click to browse
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PDF, DOC up to 5MB
                        </p>
                      </div>
                    </div>

                    <Button type="submit" variant="secondary" size="lg">
                      Submit Application
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
