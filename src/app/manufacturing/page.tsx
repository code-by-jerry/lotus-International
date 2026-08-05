"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Factory, Cpu, Layers, ClipboardCheck, Download, Calendar, Layers3 } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";

const INFRASTRUCTURE = [
  {
    icon: <Factory className="w-6 h-6 text-brand-accent" />,
    title: "Facility Footprint",
    details: "75,000 Sq. Ft. built-up industrial area located in Tirupur, India's leading knitwear hub. Custom designed for linear manufacturing efficiency.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-brand-accent" />,
    title: "Stitching & Sewing",
    details: "180+ high-speed modern sewing machines (Juki, Pegasus, Siruba) including overlock, flatlock, and automatic collar attachment setups.",
  },
  {
    icon: <Layers3 className="w-6 h-6 text-brand-accent" />,
    title: "CAD & Cutting Desk",
    details: "Computer-aided marker planning (Optitex CAD) and automated fabric spreading to ensure 98% yield and minimal raw material wastage.",
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-accent" />,
    title: "In-House Sampling",
    details: "Dedicated sampling room with 15 master tailors, producing prototype fits and counters within 7-10 days of tech pack sign-off.",
  },
];

const PROCESS_STEPS = [
  {
    phase: "01",
    title: "Design & Tech-Pack Review",
    desc: "Our CAD department reviews buyer specifications, measurement charts, and fabric constructions. We verify tolerances and material behaviors before prototyping.",
    visual: "CAD Optitex & Pattern Design"
  },
  {
    phase: "02",
    title: "Yarn & Fiber Sourcing",
    desc: "Sourcing premium ring-spun organic cotton, bamboo, polyester, or modal fibers from certified spinning mills. Yarn parameters are tested for tensile strength.",
    visual: "GOTS Certified Yarn Inputs"
  },
  {
    phase: "03",
    title: "Sampling & Approvals",
    desc: "Creating fit samples, size sets, and pre-production (PP) samples. We run shrinkage, spirality, and GSM tests prior to official client seal approval.",
    visual: "Prototype Fitting & GSM Testing"
  },
  {
    phase: "04",
    title: "Precision Cutting",
    desc: "Relaxing knit fabrics for 24 hours to stabilize fibers. Automatic spreading and computerized pattern layout layout minimize cutting waste.",
    visual: "Fabric Relaxation & Lay Cutting"
  },
  {
    phase: "05",
    title: "High-Speed Sewing",
    desc: "Operations are divided into modular lines. Flatlock, overlock, and blind hem stitches are applied matching buyer stitch-density instructions.",
    visual: "Modular Production Line Assembly"
  },
  {
    phase: "06",
    title: "Quality Control (AQL 1.5)",
    desc: "Inline checking, end-of-line inspections, and final AQL 1.5 audits. Garments are run through metal detection tunnels to ensure total safety.",
    visual: "Inline Inspections & Needle Detection"
  },
  {
    phase: "07",
    title: "Packing & Presentation",
    desc: "Steam pressing, custom tag attachment (hangtags, UPC barcodes, price stickers), and individual polybag packaging following buyer layout specs.",
    visual: "Pressing, Tagging & Polybagging"
  },
  {
    phase: "08",
    title: "Global Logistics & Shipping",
    desc: "Carton packing in heavy-duty shipping containers. Coordination with sea freights via Tuticorin/Chennai ports or air shipment via Bangalore/Coimbatore.",
    visual: "Port Coordination & Custom Clearance"
  },
];

export default function ManufacturingPage() {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="bg-brand-ink text-brand-bg py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3 block">
              Infrastructure & Capacities
            </span>
            <h1 className="font-serif-heading text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              State-of-the-Art Knitwear Facility
            </h1>
            <p className="text-sm md:text-base text-brand-bg/75 mt-4 max-w-2xl font-medium">
              We translate fiber into global-market garments using modern machinery, automated cutting layouts, and a highly skilled workforce of 250+ artisans.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      </section>

      {/* Infrastructure Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <ScrollReveal>
                <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-6">
                  In-House Capabilities & Engineering
                </h2>
                <p className="text-xs md:text-sm text-brand-grey leading-relaxed mb-6 font-medium">
                  At Lotus, we control every manufacturing step except spinning and dyeing, which we outsource to GOTS-certified local partners under our strict QA supervision. This ensures we maintain cost-efficiency while keeping oversight of quality.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {INFRASTRUCTURE.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1} className="bg-brand-bg border border-brand-light-grey p-5 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-serif-heading text-base font-bold text-brand-ink mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-brand-grey leading-normal">
                      {item.details}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-light-grey shadow-md border border-brand-light-grey">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
                alt="Modern sewing machines on assembly floor"
                speed={0.08}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-brand-bg">
                <span className="text-[10px] tracking-wider uppercase font-bold text-brand-accent bg-brand-bg/25 px-2.5 py-1 rounded backdrop-blur-sm border border-brand-bg/10">
                  Export Standards
                </span>
                <p className="font-serif-heading text-xl mt-3 font-semibold">
                  Annual production capacity exceeding 4.5 million knitwear units.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Lead times and capacity chart */}
          <div className="bg-brand-bg border border-brand-light-grey rounded-2xl p-8 md:p-10">
            <h3 className="font-serif-heading text-2xl font-bold text-brand-ink mb-6 text-center">
              Program Operations & Timelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-light-grey">
              <div className="p-4 pt-8 md:pt-4">
                <Calendar className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <h4 className="font-serif-heading text-lg font-bold text-brand-ink mb-2">Sampling Lead Time</h4>
                <p className="text-xs text-brand-grey font-medium">7 to 10 Business Days</p>
                <p className="text-[10px] text-brand-grey/80 mt-1">Requires official PDF tech sheets or sample reference.</p>
              </div>
              <div className="p-4 pt-8 md:pt-4">
                <ClockIcon className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <h4 className="font-serif-heading text-lg font-bold text-brand-ink mb-2">Production Lead Time</h4>
                <p className="text-xs text-brand-grey font-medium">45 to 60 Days (Post PP Seal)</p>
                <p className="text-[10px] text-brand-grey/80 mt-1">Varies based on fabric blend and local dye mills schedule.</p>
              </div>
              <div className="p-4 pt-8 md:pt-4">
                <ClipboardCheck className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <h4 className="font-serif-heading text-lg font-bold text-brand-ink mb-2">Minimum Order Quantity</h4>
                <p className="text-xs text-brand-grey font-medium">1,000 Pcs per Colorway</p>
                <p className="text-[10px] text-brand-grey/80 mt-1">Special concessions up to 500 pcs for Nature Polo Club brand products.</p>
              </div>
            </div>
            <div className="text-center mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold bg-brand-accent hover:bg-brand-accent-hover text-brand-bg px-6 py-3 rounded-full transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Infrastructure Fact Sheet (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Production Process Flow - Vertical Timeline */}
      <section className="py-20 bg-brand-bg border-t border-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal>
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3 block">
                Standard B2B Workflow
              </span>
              <h2 className="font-serif-heading text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                Our Production Process Flow
              </h2>
              <p className="text-xs md:text-sm text-brand-grey font-medium">
                How we coordinate client garments from initial concept review to final sea/air container loading.
              </p>
            </ScrollReveal>
          </div>

          <div className="relative border-l border-brand-accent/20 max-w-4xl mx-auto pl-6 md:pl-12 space-y-12">
            {PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal key={idx} delay={0.05} className="bg-white border border-brand-light-grey p-6 md:p-8 rounded-2xl shadow-sm relative hover:border-brand-accent/40 transition-colors">
                {/* Step node tag */}
                <div className="absolute -left-[35px] md:-left-[59px] top-6 w-8 h-8 rounded-full bg-brand-accent text-brand-bg text-xs font-bold flex items-center justify-center shadow">
                  {step.phase}
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="font-serif-heading text-xl font-bold text-brand-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-grey leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="bg-brand-bg border border-brand-light-grey px-4 py-2.5 rounded-xl text-center md:min-w-[200px]">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-brand-accent block mb-1">
                      Floor Milestone
                    </span>
                    <span className="text-xs font-bold text-brand-ink">{step.visual}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline fallback for ClockIcon
function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
