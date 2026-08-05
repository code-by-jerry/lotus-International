import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { TIMELINE } from "@/data/db";
import { Target, Eye, ShieldCheck, Heart } from "lucide-react";

const VALUES = [
  {
    icon: <Target className="w-6 h-6 text-brand-accent" />,
    title: "Mission",
    description: "To engineer and export premium-grade knitted apparel that combines traditional cotton craftsmanship with cutting-edge, eco-friendly production systems.",
  },
  {
    icon: <Eye className="w-6 h-6 text-brand-accent" />,
    title: "Vision",
    description: "To lead India's knitwear export market in environmental preservation, operating a 100% waste-free, carbon-neutral manufacturing network by 2030.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />,
    title: "Compliance & Integrity",
    description: "Strict adherence to Sedex 4-Pillar, GOTS, and Oeko-Tex certifications. We operate with zero-tolerance for ethical shortcuts.",
  },
  {
    icon: <Heart className="w-6 h-6 text-brand-accent" />,
    title: "Human Empowerment",
    description: "Actively fostering career growth and leadership roles for women on our production floor, providing equal pay and technical training.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-transition">
      {/* Page Header */}
      <section className="bg-brand-ink text-brand-bg py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-3 block">
              Our Journey & Ethos
            </span>
            <h1 className="font-serif-heading text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Two Decades of Knitted Garment Export Excellence
            </h1>
            <p className="text-sm md:text-base text-brand-bg/75 mt-4 max-w-2xl">
              From our humble beginnings as Paruthi in 2004 to exporting millions of private-label garments annually, we remain anchored in quality and integrity.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      </section>

      {/* Legacy & Founders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* S. Jayakumar Srinivasan */}
            <ScrollReveal className="bg-brand-bg border border-brand-light-grey rounded-2xl p-8 md:p-10">
              <span className="text-[10px] font-bold tracking-wider text-brand-accent uppercase mb-2 block">
                Founding Legacy
              </span>
              <h2 className="font-serif-heading text-2xl md:text-3xl font-bold text-brand-ink mb-4">
                Late S. Jayakumar Srinivasan
              </h2>
              <p className="text-xs text-brand-grey font-semibold mb-6">
                Founder, The Lotus International (originally Paruthi)
              </p>
              <div className="space-y-4 text-xs md:text-sm text-brand-ink/90 leading-relaxed font-medium">
                <p>
                  S. Jayakumar Srinivasan founded the company with a singular focus: to establish a high-compliance knitwear manufacturing facility in the heart of Tirupur. His dedication to worker safety, ethical buyer partnerships, and environmental initiatives laid the groundwork for what the company represents today.
                </p>
                <p>
                  Under his guidance, we transitioned from domestic contracting to direct global exports, setting up auditing standards that achieved shortlists from demanding U.S. and European retail brands. His core belief that &ldquo;manufacturing success is built on human dignity&rdquo; guides our workforce welfare policies today.
                </p>
              </div>
            </ScrollReveal>

            {/* M. Raghupathy */}
            <ScrollReveal delay={0.15} className="bg-brand-bg border border-brand-light-grey rounded-2xl p-8 md:p-10">
              <span className="text-[10px] font-bold tracking-wider text-brand-accent uppercase mb-2 block">
                Mentor & Advisory Board
              </span>
              <h2 className="font-serif-heading text-2xl md:text-3xl font-bold text-brand-ink mb-4">
                M. Raghupathy
              </h2>
              <p className="text-xs text-brand-grey font-semibold mb-6">
                Chief Advisor & Production Mentor
              </p>
              <div className="space-y-4 text-xs md:text-sm text-brand-ink/90 leading-relaxed font-medium">
                <p>
                  Bringing over 35 years of industrial experience in spinning, fabric structure, and dye chemistry, M. Raghupathy serves as our technical compass. He oversees our yarn sourcing relationships, ensuring that our inputs meet the rigorous tensile and colorfast requirements of retail programs.
                </p>
                <p>
                  He has spearheaded our modernization audits, including the installation of high-efficiency stitching machines, computer-aided markers, and waste reduction layouts. His mentorship ensures that our floor teams bridge the gap between textile craftsmanship and industrial automation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="py-20 bg-brand-bg border-t border-b border-brand-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="font-serif-heading text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                Our Corporate Pillars
              </h2>
              <p className="text-xs md:text-sm text-brand-grey font-medium">
                Sourcing managers select Lotus not just for capacity, but for values that align with their customers&apos; expectations.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="flex">
                <div className="bg-white border border-brand-light-grey rounded-2xl p-6 shadow-sm flex flex-col items-start w-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-brand-ink mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs text-brand-grey leading-relaxed mt-auto">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="font-serif-heading text-3xl md:text-4xl font-bold text-brand-ink mb-4">
                Our History & Milestones
              </h2>
              <p className="text-xs md:text-sm text-brand-grey font-medium">
                A trajectory defined by capacity expansion, sustainability investments, and consistent trust.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto relative border-l border-brand-light-grey pl-8 md:pl-16 space-y-12">
            {TIMELINE.map((event, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="relative">
                {/* Bullet node */}
                <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-6 h-6 rounded-full bg-brand-bg border-4 border-brand-accent flex items-center justify-center" />
                
                <div>
                  <span className="text-lg font-bold font-serif-heading text-brand-accent mb-2 block">
                    {event.year}
                  </span>
                  <h3 className="font-serif-heading text-xl font-bold text-brand-ink mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-grey leading-relaxed font-medium">
                    {event.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
