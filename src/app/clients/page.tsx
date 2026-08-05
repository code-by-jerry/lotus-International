import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";

const CASE_STUDIES = [
  {
    client: "Studio Earth (Europe)",
    scope: "Organic Bamboo Cotton Polos",
    volume: "180,000 Pcs Annually",
    details: "Studio Earth required GOTS certified bamboo cotton blends with natural anti-bacterial finishing. We set up isolated cutting and sewing batches to satisfy GOTS chemical safety parameters, delivering the program ahead of schedule.",
  },
  {
    client: "Fabindia (India)",
    scope: "Sustainable Summer Knitwear",
    volume: "240,000 Pcs",
    details: "Fabindia required eco-friendly low-impact fiber knitwear. We utilized 100% solar-powered spinning and modular sewing lines, satisfying their carbon-offset guidelines and providing detailed audit logs for their ESG reporting.",
  },
  {
    client: "US Retail Brand Partner",
    scope: "Heavyweight Fleece Hoodies",
    volume: "120,000 Pcs (Winter program)",
    details: "Required premium 340 GSM cotton-poly fleece with custom reactive dyeing to resist color bleeding. Garments were audited matching AQL 1.5 standards and passed Hashima needle-detector tunnels, ensuring safety for retail shelves.",
  },
];

const FEEDBACKS = [
  {
    quote: "Lotus is our benchmark factory for social audits. Their Sedex score is the highest among our South Asian suppliers, and their women empowerment initiatives are outstanding.",
    author: "Elena G.",
    role: "Global ESG Coordinator",
    company: "Studio Earth (Europe)",
  },
  {
    quote: "Their responsiveness is excellent. If a measurement spec changes, the CAD team updates the patterns within hours and runs fit counters without delaying production lines.",
    author: "Pradeep K.",
    role: "VP Sourcing",
    company: "Fabindia Limited",
  },
  {
    quote: "Lotus has consistently delivered our retail programs with zero rejects. Their quality inspections at packaging leave no margin for errors.",
    author: "Arthur Pendelton",
    role: "Apparel Buying Agent",
    company: "US Sourcing Desk",
  },
];

export default function ClientsPage() {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="bg-brand-ink text-brand-bg py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3 block">
              Procurement Partners
            </span>
            <h1 className="font-serif-heading text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Our Clients & Sourcing Partners
            </h1>
            <p className="text-sm md:text-base text-brand-bg/75 mt-4 max-w-2xl font-medium">
              We collaborate with global brands, design houses, and buying agents. Meet the retail partners who trust Lotus with their knitwear production.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-4">
                Sourcing Program Case Studies
              </h2>
              <p className="text-xs md:text-sm text-brand-grey font-medium">
                Detailed breakdowns of how we satisfy custom fabric, compliance, and volume requirements.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="bg-brand-bg border border-brand-light-grey rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex gap-2 items-center text-[10px] font-bold tracking-widest uppercase text-brand-accent mb-4">
                    <span>Program Spec Sheet</span>
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-brand-ink mb-1">
                    {study.client}
                  </h3>
                  <p className="text-xs text-brand-grey font-semibold mb-4">
                    {study.scope}
                  </p>
                  <p className="text-xs text-brand-ink/90 leading-relaxed font-medium mb-6">
                    {study.details}
                  </p>
                </div>
                <div className="border-t border-brand-light-grey pt-4 mt-auto">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-brand-grey block mb-1">
                    Annual Volume Delivered
                  </span>
                  <span className="text-sm font-bold text-brand-ink">{study.volume}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-bg border-t border-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-4">
                Client Testimonials & Feedback
              </h2>
              <p className="text-xs md:text-sm text-brand-grey font-medium">
                Hear what global apparel sourcing directors say about working with our Tirupur team.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEEDBACKS.map((f, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="flex">
                <TestimonialCard
                  quote={f.quote}
                  author={f.author}
                  role={f.role}
                  company={f.company}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
