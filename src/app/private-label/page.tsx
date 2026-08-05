import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle } from "lucide-react";

const STEPS = [
  {
    num: "1",
    title: "Tech Pack Submission",
    desc: "Submit your measurement charts, CAD sketches, fabric structures, and pantone colors. If you don't have a tech pack, we can duplicate your physical sample.",
  },
  {
    num: "2",
    title: "Yarn & Knit Development",
    desc: "We knit yarn loops matching your target GSM and drape. We formulate lab-dips for pantone dye approvals under D65 light boxes.",
  },
  {
    num: "3",
    title: "Prototype Fit Sampling",
    desc: "Our masters sew a prototype sample to check tolerances, shrinkage, and neck openings. Samples are shipped to your office for physical fits approval.",
  },
  {
    num: "4",
    title: "Pre-Production Seal",
    desc: "Once fits are signed off, we generate a final sealed pre-production (PP) sample with accessories, trims, and final barcode labels in place.",
  },
  {
    num: "5",
    title: "Bulk Production & QC",
    desc: "Dyeing, cutting, stitching, and finishing lines start. Inline QC inspections test seam strengths and final measurements against AQL 1.5 guidelines.",
  },
  {
    num: "6",
    title: "Packing & Delivery",
    desc: "Polybag packing, carton stuffing, container sealing, and custom export clearance. We deliver to your chosen forwarder port (sea/air).",
  },
];

const SERVICES = [
  {
    title: "Custom Fabrics & Blends",
    desc: "Sourcing and fabrication of organic cotton, cotton-polyester fleece, French terry, waffle knit, bamboo fiber blends, and elastane ribbing.",
  },
  {
    title: "Specialized Garment Dyes",
    desc: "Reactive piece dyeing, yarn dyeing, garment dyeing (cold dye, pigment wash), enzyme washes, and silicone washes for ultra-soft handfeel.",
  },
  {
    title: "Apparel Embellishments",
    desc: "High-density chest prints, puff printing, discharge printing, screen prints, computer embroidery, chenille patches, and DTF/heat transfers.",
  },
  {
    title: "Custom Trims & Labelling",
    desc: "Satin or woven neck labels, tear-away tags, custom paper hangtags, price stickers, and custom printed recycled polybag packaging.",
  },
];

export default function PrivateLabelPage() {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="bg-brand-ink text-brand-bg py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3 block">
              OEM & Private Label Services
            </span>
            <h1 className="font-serif-heading text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Turn Your App Designs Into Export-Grade Reality
            </h1>
            <p className="text-sm md:text-base text-brand-bg/75 mt-4 max-w-2xl font-medium">
              We offer full-service OEM contract manufacturing. You provide the designs, brand parameters, and sizing; we handle fabric sourcing, fabrication, compliance, and shipping.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      </section>

      {/* OEM Capabilities & MOQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <ScrollReveal>
                <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-6">
                  B2B Customization Capabilities
                </h2>
                <p className="text-xs md:text-sm text-brand-grey leading-relaxed mb-6 font-medium">
                  We specialize in producing private-label knitwear collections for mid-to-large lifestyle brands. Our Tirupur plant is fully equipped to handle intricate chest embellishments, customized sizing grids, and sustainable material certifications.
                </p>
              </ScrollReveal>

              <div className="space-y-4 mt-8">
                <ScrollReveal delay={0.05} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="font-serif-heading text-base font-bold text-brand-ink block">Standard MOQ Policies</span>
                    <p className="text-xs text-brand-grey">1,000 Pcs per color/style. Lower MOQs of 500 Pcs supported for bamboo organic blends.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="font-serif-heading text-base font-bold text-brand-ink block">Sampling Costs</span>
                    <p className="text-xs text-brand-grey">Standard sampling is refundable upon bulk purchase order confirmation. Prototyping takes 7-10 days.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.15} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                  <div>
                    <span className="font-serif-heading text-base font-bold text-brand-ink block">Sizing & Patterns</span>
                    <p className="text-xs text-brand-grey">US, UK, European, and Asian size charts are supported. CAD pattern files can be submitted directly.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Customization Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((s, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08} className="bg-brand-bg border border-brand-light-grey p-6 rounded-xl flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-lg font-bold text-brand-ink mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-brand-grey leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* OEM Process Steps */}
          <div className="border-t border-brand-light-grey pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <ScrollReveal>
                <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-4">
                  Step-by-Step OEM Workflow
                </h2>
                <p className="text-xs md:text-sm text-brand-grey font-medium">
                  We maintain transparent gates at each manufacturing milestone to ensure bulk shipments match your approved samples perfectly.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STEPS.map((s, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08} className="bg-brand-bg border border-brand-light-grey p-6 rounded-2xl relative">
                  <span className="absolute top-4 right-4 text-3xl font-bold font-serif-heading text-brand-accent/25">
                    {s.num}
                  </span>
                  <h4 className="font-serif-heading text-lg font-bold text-brand-ink mb-2 pr-8">
                    {s.title}
                  </h4>
                  <p className="text-xs text-brand-grey leading-relaxed">
                    {s.desc}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Call to Action card */}
          <div className="mt-20 bg-brand-ink text-brand-bg rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="font-serif-heading text-2xl md:text-3xl font-bold mb-4">
                Have a Private Label Project in Mind?
              </h3>
              <p className="text-sm text-brand-bg/85 leading-relaxed mb-8">
                Connect directly with our sampling coordinators. Submit your specifications and receive standard fabric recommendations and cost estimates.
              </p>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-bg font-semibold text-sm tracking-wide transition-colors inline-block"
              >
                Submit Private Label Specs
              </Link>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
