"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import ProposalWizard from "@/components/forms/ProposalWizard";

export default function GetProposalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1c1512] pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get a Proposal
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Tell us about your requirements and we will create a customized
              proposal for your institution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Proposal Wizard */}
      <section className="section-padding">
        <div className="container-custom">
          <ProposalWizard />
        </div>
      </section>
    </>
  );
}
