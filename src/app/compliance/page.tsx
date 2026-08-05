import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { CERTIFICATES } from "@/data/db";
import { Award, FileText, CheckCircle2 } from "lucide-react";

const QA_PROCESS = [
  {
    stage: "Stage 1",
    title: "Yarn & Raw Input Testing",
    desc: "Every batch of cotton yarn is checked for count, twist, tensile strength, and color fastness. Organic yarns must arrive with valid GOTS transaction certificates.",
  },
  {
    stage: "Stage 2",
    title: "Dyeing Lab Dip Verification",
    desc: "We verify fabric dye formulations under standard D65 and TL84 light boxes to ensure perfect matches. Fabric is checked for dimensional stability (shrinkage) after washing.",
  },
  {
    stage: "Stage 3",
    title: "In-line Stitch Inspections",
    desc: "Inspectors audit sewing panels during assembly. Stitch density (Stitches Per Inch - SPI), seam stretch, tension, and alignment are tracked continuously.",
  },
  {
    stage: "Stage 4",
    title: "100% Metal Detection Gate",
    desc: "All finished apparel must pass through a Japanese Hashima tunnel metal detector before steam iron packaging to ensure zero broken sewing needle shards.",
  },
  {
    stage: "Stage 5",
    title: "Final AQL 1.5 Audits",
    desc: "Our independent QA division conducts final random checks based on international AQL 1.5 standard criteria (fabric flaws, print errors, measurements).",
  },
];

export default function CompliancePage() {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="bg-brand-ink text-brand-bg py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3 block">
              Certifications & Standards
            </span>
            <h1 className="font-serif-heading text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Export Compliance & Quality Assurance
            </h1>
            <p className="text-sm md:text-base text-brand-bg/75 mt-4 max-w-2xl font-medium">
              We align our manufacturing with global retail requirements. Our facilities are audited annually for ethical labor practices, safe operations, and non-toxic materials.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      </section>

      {/* Audits & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-4">
                Active International Certifications
              </h2>
              <p className="text-xs md:text-sm text-brand-grey font-medium">
                Our plant maintains credentials verified by independent third-party certification bodies.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATES.map((cert, idx) => (
              <ScrollReveal key={cert.id} delay={idx * 0.1} className="bg-brand-bg border border-brand-light-grey rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-brand-accent/40 transition-colors">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-sage/10 border border-brand-sage/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-brand-sage" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-brand-sage bg-brand-sage/10 px-2.5 py-1 rounded">
                      {cert.validity}
                    </span>
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-brand-ink mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-brand-grey font-semibold mb-4">
                    Audit / Issuing Body: <span className="text-brand-ink font-bold">{cert.issuingBody}</span>
                  </p>
                  <p className="text-xs text-brand-ink/90 leading-relaxed font-medium mb-6">
                    <span className="font-bold text-brand-grey block mb-1">Audit Scope:</span>
                    {cert.scope}
                  </p>
                </div>
                <div className="border-t border-brand-light-grey pt-4 mt-auto">
                  <a
                    href={cert.downloadUrl}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-accent hover:text-brand-accent-hover transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Audit Certificate Details</span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Sequence */}
      <section className="py-20 bg-brand-bg border-t border-b border-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="font-serif-heading text-3xl font-bold text-brand-ink mb-4">
                Our 5-Gate Quality Assurance System
              </h2>
              <p className="text-xs md:text-sm text-brand-grey font-medium">
                Preventing mistakes, monitoring assembly, and validating finished garments before shipment container loading.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {QA_PROCESS.map((proc, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} className="bg-white border border-brand-light-grey rounded-xl p-5 shadow-sm flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="sm:w-28 shrink-0">
                  <span className="text-xs font-bold tracking-wider uppercase text-brand-accent bg-brand-accent/10 px-3 py-1 rounded block text-center">
                    {proc.stage}
                  </span>
                </div>
                <div className="flex-grow">
                  <h4 className="font-serif-heading text-lg font-bold text-brand-ink mb-1">{proc.title}</h4>
                  <p className="text-xs text-brand-grey leading-relaxed">{proc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-ink text-brand-bg rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif-heading text-2xl md:text-3xl font-bold mb-6">
                  Technical Specifications & Testing Methods
                </h3>
                <p className="text-xs md:text-sm text-brand-bg/85 leading-relaxed mb-8">
                  We verify our fabric parameters using accredited test laboratories. Standard testing items run before bulk stitching include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>ISO 105 color fastness to wash</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>Dimensional stability (shrinkage &lt; 5%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>Fabric spirality & twist control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                    <span>REACH and Oeko-Tex chemical restrictions</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                <h4 className="font-serif-heading text-lg font-bold mb-4">Inspection Criteria</h4>
                <div className="space-y-4 text-xs text-brand-bg/90">
                  <p>
                    <span className="font-bold text-brand-accent block mb-1">Stitch density</span>
                    Standard stitch density ranges from 10 to 12 stitches per inch (SPI) depending on buyer specifications.
                  </p>
                  <p>
                    <span className="font-bold text-brand-accent block mb-1">AQL 1.5 Standard</span>
                    Maximum allowed minor defects: 4.0%; Major defects: 1.5%; Critical defects: 0% (e.g. needles, oil stains).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
