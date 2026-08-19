"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ParallaxElement, HeroParallaxBackground } from "@/components/ParallaxElement";
import ManufacturingScrollPin from "@/components/ManufacturingScrollPin";
import {
  ArrowRight,
  Award,
  Shield,
  Globe,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Scissors,
  Shirt,
  Printer,
  Palette,
  Package,
  Camera,
  CheckCircle2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  Clock,
  UserCheck,
  Percent,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import ParallaxImage from "@/components/ParallaxImage";
import ConsultationModal from "@/components/ConsultationModal";

// Trust stats
const TRUST_STATS = [
  { end: 15, suffix: "M+", label: "Pieces Manufactured" },
  { end: 25, suffix: "+", label: "Countries Served" },
  { end: 120, suffix: "+", label: "Brands Partnered" },
  { end: 22, suffix: "+", label: "Years of Experience" },
];

// Services
const SERVICE_CATEGORIES = [
  "All Capabilities",
  "Design & Sourcing",
  "Printing & Embellishment",
  "Dyeing & Finishing",
  "Branding & Logistics",
];

const SERVICES = [
  {
    icon: <Cpu className="w-4 h-4 text-brand-accent" />,
    title: "Custom Manufacturing",
    category: "Design & Sourcing",
    desc: "End-to-end knitwear production, custom cutting and sewing patterns designed for your retail specifications.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/custom%20manufaturing.webp",
  },
  {
    icon: <Layers className="w-4 h-4 text-brand-accent" />,
    title: "Fabric Sourcing",
    category: "Design & Sourcing",
    desc: "Direct mill relationships for custom yarn counts, organic cotton, bamboo fibers, and sustainable blends.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Fabric%20Sourcing.webp",
  },
  {
    icon: <Scissors className="w-4 h-4 text-brand-accent" />,
    title: "Pattern Making",
    category: "Design & Sourcing",
    desc: "Digital 2D/3D CAD patterns with precise measurements to optimize sizing fits and fabric yields.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Pattern%20Making.webp",
  },
  {
    icon: <Palette className="w-4 h-4 text-brand-accent" />,
    title: "Graphic Design",
    category: "Design & Sourcing",
    desc: "Tech-pack preparation, CAD mockup illustration, artwork vectorization, and placement prints setup.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Graphic%20Design.webp",
  },
  {
    icon: <Shirt className="w-4 h-4 text-brand-accent" />,
    title: "Sampling",
    category: "Printing & Embellishment",
    desc: "Rapid prototyping and fit sample development, delivering sealed PP counters within 7-10 business days.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Sampling.webp",
  },
  {
    icon: <Printer className="w-4 h-4 text-brand-accent" />,
    title: "DTF Printing",
    category: "Printing & Embellishment",
    desc: "Direct-to-Film high-resolution transfers offering stretchability and wash durability for streetwear.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/DTF%20Printing.webp",
  },
  {
    icon: <Palette className="w-4 h-4 text-brand-accent" />,
    title: "Screen Printing",
    category: "Printing & Embellishment",
    desc: "Water-based ink prints, plastisol, puff, high-density, discharge, and premium retail finishes.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Screen%20Printing.webp",
  },
  {
    icon: <Sparkles className="w-4 h-4 text-brand-accent" />,
    title: "Embroidery",
    category: "Printing & Embellishment",
    desc: "Computerized multi-head embroidery, chenille patches, felt applications, and premium thread logos.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Embroidery.webp",
  },
  {
    icon: <Palette className="w-4 h-4 text-brand-accent" />,
    title: "Garment Dye",
    category: "Dyeing & Finishing",
    desc: "Eco-certified reactive dyeing, pigment dyeing, tie-dye, cold dye, and enzyme washes.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Garment%20Dyeing.webp",
  },
  {
    icon: <CheckCircle2 className="w-4 h-4 text-brand-accent" />,
    title: "Finishing",
    category: "Dyeing & Finishing",
    desc: "Heavy steam pressing, thread trimming, metal detection gates, and final AQL 1.5 audits.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Finishing.webp",
  },
  {
    icon: <Package className="w-4 h-4 text-brand-accent" />,
    title: "Packaging",
    category: "Dyeing & Finishing",
    desc: "Retail-ready tags, UPC barcode labels, price tickets, custom fold templates, and recycled polybags.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Packaging.webp",
  },
  {
    icon: <Award className="w-4 h-4 text-brand-accent" />,
    title: "Branding",
    category: "Branding & Logistics",
    desc: "Custom satin neck labels, tear-away tags, high-density transfer labels, and cardboard paper hangtags.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Branding.webp",
  },
  {
    icon: <Camera className="w-4 h-4 text-brand-accent" />,
    title: "Product Photography",
    category: "Branding & Logistics",
    desc: "Studio flat-lays, ghost mannequin catalog shoots, and lifestyle apparel photography for your website launch.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Product%20Photography.webp",
  },
  {
    icon: <Globe className="w-4 h-4 text-brand-accent" />,
    title: "Worldwide Shipping",
    category: "Branding & Logistics",
    desc: "Sea freight via Tuticorin/Chennai, air freight via Bangalore, custom clearances, and door-to-door forwarding.",
    image: "https://ik.imagekit.io/wepix/lotus%20international/B2B%20Services/Worldwide%20Shipping.webp",
  },
];

// Timeline steps
const PROCESS_STEPS = [
  {
    num: "01",
    title: "Consultation",
    desc: "Initial program review, fabric alignment, costing sheets, and target lead-time planning.",
  },
  {
    num: "02",
    title: "Tech Pack Review",
    desc: "Sizing specs and pattern vector files are verified by our CAD masters for production yields.",
  },
  {
    num: "03",
    title: "Sampling & Approvals",
    desc: "Knitting lab dips, fit counters, and sample fabrication. Physical sign-off prior to bulk operations.",
  },
  {
    num: "04",
    title: "Bulk Production",
    desc: "Linear fabric relaxation, computerized lay cutting, sewing line assembly, and inline verification.",
  },
  {
    num: "05",
    title: "Quality Inspection",
    desc: "Stitch count audits, measurement checks, garment safety checks, and dual metal-detector scans.",
  },
  {
    num: "06",
    title: "Packaging",
    desc: "Steam iron press, customized label tagging, fold layouts, and recycled carton packing.",
  },
  {
    num: "07",
    title: "Shipping",
    desc: "Custom container consolidation, port logistics dispatch, and ocean/air bill of lading tracking.",
  },
];

// Why choose us comparison cards
const WHY_CHOOSE_US = [
  {
    title: "Premium Quality",
    desc: "All garments pass AQL 1.5 standards. Inline checkers inspect every single garment.",
    icon: <Award className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Fast Production",
    desc: "Optimized assembly workflows ensure bulk shipping dispatch within 45 to 60 days.",
    icon: <Clock className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Dedicated Account Manager",
    desc: "Direct communication with Tirupur coordinators. Weekly video reports on progress.",
    icon: <UserCheck className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Worldwide Shipping",
    desc: "Coordination with global freight shipping lines for reliable port arrival.",
    icon: <Globe className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Low MOQ",
    desc: "Base order sizes start from 1,000 pcs. concessions up to 500 pcs for eco blends.",
    icon: <Percent className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Transparent Pricing",
    desc: "Clean BOM cost breakdowns, no hidden raw-material surcharges, fixed contracts.",
    icon: <ThumbsUp className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Quality Inspection",
    desc: "Oeko-Tex Standard 100 chemical tests, needle-detection tunnel safety passes.",
    icon: <Shield className="w-5 h-5 text-brand-accent" />,
  },
  {
    title: "Timely Delivery",
    desc: "Slick critical path tracking ensures we maintain 99.2% on-time container loading.",
    icon: <Calendar className="w-5 h-5 text-brand-accent" />,
  },
];

// Industries served
const INDUSTRIES = [
  {
    title: "Fashion Brands",
    desc: "Premium retail silhouettes, custom fits, and dynamic seasonal colorway collections.",
    bgImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Streetwear Labels",
    desc: "Heavyweight hoodies, oversized t-shirts, drop-shoulder fleece, and high-density printing.",
    bgImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Luxury Clothing",
    desc: "Fine bamboo cotton blends, silk handfeel finishes, herbal dyeing, and minimalist designs.",
    bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sportswear",
    desc: "Interlock mock-mesh, high-stretch elastane blends, flatlock sewing, and moisture-wicking yarns.",
    bgImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Corporate Uniforms",
    desc: "Classic combed cotton pique polos, durable rib collars, embroidery badges, and wash-resistant dyes.",
    bgImage: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Kids Wear",
    desc: "Ultra-soft GOTS certified organic rompers, Nickel-free snaps, and safe water-based prints.",
    bgImage: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Women Wear",
    desc: "Lightweight slub t-shirts, crop fleece, knit loungesets, and tailored female silhouettes.",
    bgImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Private Labels",
    desc: "Tear-away collar support, custom barcode tagging, custom packaging, and complete retail presentation.",
    bgImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800",
  },
];

// Featured Projects
const PORTFOLIO_PROJECTS = [
  {
    title: "Nature Polo Organic Collection",
    category: "Eco Blends",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Heavy Fleece Streetwear Hoodies",
    category: "Streetwear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Premium Combed Pique Polos",
    category: "Polos",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Seamless Lounge & Knit Activewear",
    category: "Activewear",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Infant Oeko-Tex Romper Range",
    category: "Kids Wear",
    image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Sustainable Bamboo fiber Tees",
    category: "Eco Blends",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800",
  },
];

// Testimonials
const TESTIMONIALS = [
  {
    quote:
      "The Lotus International has been our primary B2B knitwear manufacturing partner in India for over 8 years. Their consistency in AQL 1.5 standards, organic cotton sourcing, and transparent timelines is outstanding.",
    author: "Marcello V.",
    role: "Director of Global Sourcing",
    company: "Studio Earth (Europe)",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120",
    logo: "STUDIO EARTH",
  },
  {
    quote:
      "Their commitment to ethical labor, solar-powered loops, and 100% GOTS compliance made them the ideal partner for our organic capsule programs. Their sampling speed is the fastest in Tirupur.",
    author: "Ritu M.",
    role: "Apparel Procurement Lead",
    company: "Fabindia",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120",
    logo: "FABINDIA",
  },
  {
    quote:
      "Dealing with Lotus means zero worries about compliance audits or shipping slip-ups. Their Sedex 4-Pillar audit scores are top-tier. Truly an enterprise B2B export manufacturer.",
    author: "S. K. Goel",
    role: "Managing Director",
    company: "M.G. Cotton Exports",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    logo: "M.G. COTTON",
  },
];

// FAQ items
const FAQS = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Our standard MOQ is 1,000 pieces per style/colorway. For custom eco-blends like bamboo-organic cotton blends under the Nature Polo Club line, we support concessions down to 500 pieces per colorway.",
  },
  {
    q: "How long does the sampling process take?",
    a: "Standard fit and prototype samples take 7 to 10 business days post tech-pack approval. Lab dips for Pantone color matching take 5 business days. Sampling costs are fully credited against bulk order invoices.",
  },
  {
    q: "What certifications do your manufacturing plants hold?",
    a: "Our facility is Sedex 4-Pillar audited (Labor, Ethics, Environment, Health & Safety). We are certified for GOTS (Global Organic Textile Standard), OEKO-TEX Standard 100, and ISO 9001:2015 for quality management systems.",
  },
  {
    q: "Are your facilities fully sustainable?",
    a: "Yes. 100% of our floor operations run on captive solar energy arrays. We also operate a Zero Liquid Discharge (ZLD) RO plant that recycles 95% of our waste water back into the facility loops.",
  },
  {
    q: "Can you assist with shipping and customs clearance?",
    a: "Absolutely. We offer complete FOB (Free on Board) or CIF shipping terms. We regularly consolidate shipping containers via Chennai and Tuticorin ports, or airfreight via Bangalore for express programs.",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePortfolioFilter, setActivePortfolioFilter] = useState("All");
  const [activeServiceFilter, setActiveServiceFilter] = useState("All Capabilities");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Portfolio filters list
  const portfolioFilters = ["All", "Eco Blends", "Streetwear", "Polos", "Activewear", "Kids Wear"];

  const filteredPortfolio =
    activePortfolioFilter === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activePortfolioFilter);

  const filteredServices =
    activeServiceFilter === "All Capabilities"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeServiceFilter);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="page-transition bg-brand-bg text-brand-ink">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-ink rounded-b-[2rem] md:rounded-b-[3.5rem] shadow-xl">
        {/* Parallax Video Background */}
        <HeroParallaxBackground className="absolute inset-0 z-0 opacity-20">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
            poster="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1600"
          >
            <source
              src="https://lotusinternationaltextiles.com/static/images/frontend/hero_banner/home/home_hero.mp4"
              type="video/mp4"
            />
          </video>
        </HeroParallaxBackground>

        {/* Ambient glowing blobs with inverse parallax */}
        <ParallaxElement speed={-0.4} className="absolute -top-40 -left-40 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl pointer-events-none" />
        <ParallaxElement speed={0.5} className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-sage/20 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full lg:w-[80%] max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-6 md:pt-8 pb-12 md:pb-16 text-center">
          <div className="space-y-6 md:space-y-8 flex flex-col items-center">
            
            <ScrollReveal delay={0.1}>
              <ParallaxElement speed={0.1}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/40 bg-brand-accent/20 text-xs font-bold tracking-widest text-brand-accent uppercase shadow-sm">
                  <Sparkles className="w-4 h-4" /> High-End Garment Exports • Est. 2004
                </span>
              </ParallaxElement>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-heading leading-[1.15] tracking-tight text-white">
                Your Manufacturing Partner <br />
                <span className="text-brand-accent italic font-bold">From Design To Delivery</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
                We are a premier private-label knitwear manufacturer in Tirupur, India.
                Specializing in OEM clothing manufacturing, certified organic fabrics,
                and high-density streetwear. Powered by 100% solar operations, exporting worldwide.
              </p>
            </ScrollReveal>

            {/* Tag badges */}
            <ScrollReveal delay={0.35} className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {["Clothing Manufacturing", "OEM Specialist", "Private Label", "Bulk Production", "Worldwide Shipping"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white uppercase tracking-wide backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-wrap justify-center gap-4 items-center pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-bg font-bold text-xs tracking-widest uppercase transition-all shadow-xl hover:shadow-brand-accent/30 flex items-center gap-2 group"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 rounded-xl border border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-xs tracking-widest uppercase transition-all bg-white/5 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </ScrollReveal>

            {/* Sub-banner trust text */}
            <ScrollReveal delay={0.45} className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-accent/90 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <Award className="w-4 h-4" /> SEDEX 4-PILLAR AUDITED &amp; GOTS CERTIFIED
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 2. TRUST / ACHIEVEMENT SECTION */}
      <section className="py-16 bg-white relative z-10 -mt-8 mx-6 md:mx-12 rounded-3xl shadow-lg border border-brand-light-grey/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y-0 md:divide-x divide-brand-light-grey/60">
            {TRUST_STATS.map((stat, idx) => (
              <StatCounter
                key={idx}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOGO TICKER */}
      <section className="py-12 overflow-hidden bg-brand-bg opacity-75">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h3 className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-brand-grey/85 mb-8">
            TRUSTED PARTNER & GLOBAL APPAREL BRANDS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            {[
              { src: "https://ik.imagekit.io/wepix/lotus%20international/us%20polo%20assn.png", alt: "U.S. Polo Assn." },
              { src: "https://ik.imagekit.io/wepix/lotus%20international/max.png", alt: "Max Fashion" },
              { src: "https://ik.imagekit.io/wepix/lotus%20international/aeropostale.png", alt: "Aeropostale" },
              { src: "https://ik.imagekit.io/wepix/lotus%20international/studio%20earth.png", alt: "Studio Earth" },
              { src: "https://ik.imagekit.io/wepix/lotus%20international/fabrika.png", alt: "Fabrika" },
              { src: "https://ik.imagekit.io/wepix/lotus%20international/liverpool.png", alt: "Liverpool" },
              { src: "https://ik.imagekit.io/wepix/lotus%20international/french%20connection.png", alt: "French Connection" },
            ].map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-24 bg-white border-t border-b border-brand-light-grey/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <ScrollReveal>
              <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3.5 py-1.5 rounded-full">
                Factory Capabilities
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif-heading text-3xl md:text-5xl font-bold text-brand-ink">
                Our Premium B2B Services
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xs md:text-sm text-brand-grey max-w-xl mx-auto leading-relaxed font-medium">
                At Lotus, we control yarn loop structures, patterns, custom stitching,
                finishing, and global clearance logistics under one roof.
              </p>
            </ScrollReveal>
          </div>

          {/* Category Filter Tabs */}
          <ScrollReveal delay={0.2} className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
            {SERVICE_CATEGORIES.map((cat) => {
              const count =
                cat === "All Capabilities"
                  ? SERVICES.length
                  : SERVICES.filter((s) => s.category === cat).length;
              const isActive = activeServiceFilter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveServiceFilter(cat)}
                  className={`group px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-brand-ink text-brand-bg shadow-md scale-[1.02]"
                      : "bg-brand-bg/60 hover:bg-brand-light-grey/60 text-brand-ink/80 border border-brand-light-grey/80 hover:text-brand-ink"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? "bg-brand-accent text-white"
                        : "bg-brand-ink/5 text-brand-grey group-hover:bg-brand-ink/10"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </ScrollReveal>

          {/* Visual Cards Grid (Dynamic 3 / 4 / 3 / 4 Rhythm on 12-Col Grid) */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((serv, idx) => {
                const isAll = activeServiceFilter === "All Capabilities";
                // 3 / 4 / 3 / 4 alternating rhythm for 14 items across a 12-column grid
                const colSpanClass = !isAll
                  ? filteredServices.length === 4
                    ? "lg:col-span-3"
                    : "lg:col-span-4"
                  : idx < 3
                  ? "lg:col-span-4"
                  : idx < 7
                  ? "lg:col-span-3"
                  : idx < 10
                  ? "lg:col-span-4"
                  : "lg:col-span-3";

                return (
                  <motion.div
                    key={serv.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    onClick={() => setIsConsultationOpen(true)}
                    className={`group relative aspect-square w-full rounded-2xl md:rounded-3xl overflow-hidden border border-brand-light-grey/70 hover:border-brand-accent/50 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${colSpanClass}`}
                  >
                    {/* 1:1 Background Image */}
                    <img
                      src={serv.image}
                      alt={serv.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Base Gradient (ensures title is legible in resting state) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/25 to-transparent transition-opacity duration-500" />

                    {/* Hover Dark-to-Transparent Gradient (Bottom to middle) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/95 via-brand-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Bottom Content Layer with Icon + Title and Slide-up Details */}
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col justify-end z-10 transition-transform duration-500">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-white/15 backdrop-blur-md flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white border border-white/15 transition-all duration-300 shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                          {serv.icon}
                        </span>
                        <h3 className="font-serif-heading text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-brand-accent transition-colors duration-300 drop-shadow-sm">
                          {serv.title}
                        </h3>
                      </div>

                      {/* Sliding Details on Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                        <div className="overflow-hidden space-y-3 pt-0 group-hover:pt-2.5 transition-all duration-500">
                          <p className="text-xs text-white/85 leading-relaxed font-normal">
                            {serv.desc}
                          </p>
                          <div className="pt-2 border-t border-white/15 flex items-center">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent group-hover:text-amber-300 uppercase tracking-widest transition-colors">
                              <span>Enquire Service</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Full-Package Banner */}
          <ScrollReveal delay={0.2} className="mt-14">
            <div className="rounded-2xl border border-brand-light-grey/80 bg-brand-bg/60 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase">
                  Turnkey OEM Production
                </span>
                <h4 className="font-serif-heading text-xl md:text-2xl font-bold text-brand-ink">
                  Looking for Full-Package Knitwear Manufacturing?
                </h4>
                <p className="text-xs text-brand-grey max-w-xl leading-relaxed">
                  From yarn sourcing & prototyping to Sedex-compliant mass manufacturing and doorstep clearance, our Tirupur facility is equipped to scale your brand.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-6 py-3 rounded-full bg-brand-ink hover:bg-brand-ink/90 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
                >
                  Book Consultation
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 5. MANUFACTURING TIMELINE PROCESS — Sticky Scroll Pin */}
      <ManufacturingScrollPin steps={PROCESS_STEPS} />

      {/* 6. WHY CHOOSE US */}
      <section className="py-24 bg-white border-t border-b border-brand-light-grey/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <ScrollReveal>
              <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full">
                Value Propositions
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif-heading text-3xl md:text-5xl font-bold text-brand-ink">
                Why Global Brands Partner with Lotus
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xs md:text-sm text-brand-grey max-w-xl mx-auto leading-relaxed font-medium">
                We combine traditional fabric craftsmanship with clean energy and compliance integrity.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06} className="flex">
                <div className="w-full bg-brand-bg/40 border border-brand-light-grey/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div className="space-y-3.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-accent/15 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h4 className="font-serif-heading text-base font-bold text-brand-ink">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-brand-grey leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <ScrollReveal>
              <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full">
                Apparel Segments
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif-heading text-3xl md:text-5xl font-bold text-brand-ink">
                Industries We Serve
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xs md:text-sm text-brand-grey max-w-xl mx-auto leading-relaxed font-medium">
                We deliver retail-ready garment lines across different styles, fabrics, and branding grids.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm border border-brand-light-grey/50">
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ind.bgImage}
                  alt={ind.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.7] group-hover:brightness-[0.6]"
                />

                {/* Overlay details */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-brand-bg bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent">
                  <h4 className="font-serif-heading text-base md:text-lg font-bold">
                    {ind.title}
                  </h4>
                  <p className="text-[10px] text-brand-bg/80 leading-normal mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {ind.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FEATURED PROJECTS PORTFOLIO */}
      <section className="py-24 bg-white border-t border-b border-brand-light-grey/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full">
                Product Showcases
              </span>
              <h2 className="font-serif-heading text-3xl md:text-5xl font-bold text-brand-ink">
                Featured Programs
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {portfolioFilters.map((filt) => (
                <button
                  key={filt}
                  onClick={() => setActivePortfolioFilter(filt)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all uppercase tracking-wider ${activePortfolioFilter === filt
                      ? "bg-brand-accent text-brand-bg"
                      : "bg-brand-bg text-brand-ink border border-brand-light-grey hover:bg-brand-light-grey/50"
                    }`}
                >
                  {filt}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPortfolio.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={proj.title}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-brand-light-grey/50 bg-brand-bg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-[0.9] group-hover:brightness-[0.7]"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-brand-bg bg-gradient-to-t from-brand-ink/90 via-brand-ink/30 to-transparent">
                    <span className="text-[9px] font-bold tracking-widest text-brand-accent uppercase mb-1">
                      {proj.category}
                    </span>
                    <h4 className="font-serif-heading text-base md:text-lg font-bold">
                      {proj.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 9. CLIENT TESTIMONIALS */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">

          <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full mb-6 inline-block">
            Global Feedback
          </span>

          {/* Slides Carousel container */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Quotation text */}
                <p className="font-serif-heading text-xl md:text-2xl lg:text-3xl font-medium text-brand-ink leading-relaxed italic">
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </p>

                {/* Client Avatar details */}
                <div className="flex flex-col items-center justify-center space-y-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TESTIMONIALS[activeTestimonial].photo}
                    alt={TESTIMONIALS[activeTestimonial].author}
                    className="w-12 h-12 rounded-full object-cover border border-brand-accent/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-brand-ink">
                      {TESTIMONIALS[activeTestimonial].author}
                    </h4>
                    <p className="text-[10px] text-brand-grey font-semibold mt-0.5">
                      {TESTIMONIALS[activeTestimonial].role}, {TESTIMONIALS[activeTestimonial].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full border border-brand-ink/10 hover:border-brand-accent hover:text-brand-accent transition-colors bg-white shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full border border-brand-ink/10 hover:border-brand-accent hover:text-brand-accent transition-colors bg-white shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 10. PREMIUM ACCORDION FAQ */}
      <section className="py-24 bg-white border-t border-b border-brand-light-grey/50">
        <div className="max-w-3xl mx-auto px-6 md:px-8">

          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full">
              Common Inquiries
            </span>
            <h2 className="font-serif-heading text-2xl md:text-4xl font-bold text-brand-ink">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-brand-light-grey/80 rounded-2xl overflow-hidden bg-brand-bg/35"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-serif-heading text-sm md:text-base font-bold text-brand-ink pr-4">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-accent shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-brand-accent shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-xs text-brand-grey leading-relaxed border-t border-brand-light-grey/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. FINAL CALL TO ACTION */}
      <section className="bg-brand-ink text-brand-bg py-24 relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-2xl">
        <div className="absolute inset-0 opacity-15">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
            alt="Organic knitwear products array"
            speed={0.12}
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center space-y-6 md:space-y-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/15 text-[10px] font-bold tracking-widest text-brand-accent uppercase">
              Attract Global Clients
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif-heading text-3xl md:text-5xl font-bold">
              Ready To Build Your Brand?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs md:text-sm text-brand-bg/80 max-w-xl mx-auto leading-relaxed font-medium">
              Get direct B2B pricing estimates and sample timelines from our Tirupur operations coordinates within 1 business day.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-bg font-bold text-xs tracking-wider uppercase transition-colors shadow-lg hover:shadow-brand-accent/20"
            >
              Request Quote
            </Link>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-brand-accent hover:text-brand-accent text-brand-bg font-bold text-xs tracking-wider uppercase transition-all bg-white/5"
            >
              Book Consultation
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Consultation Scheduling Modal overlay */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
