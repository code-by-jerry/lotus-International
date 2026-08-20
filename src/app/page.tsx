"use client";

import React, { useState, useEffect } from "react";
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
import { motion, AnimatePresence, type Variants } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StatCounter from "@/components/StatCounter";
import ParallaxImage from "@/components/ParallaxImage";
import ConsultationModal from "@/components/ConsultationModal";

// Hero animated tags
const HERO_TAGS = [
  "Clothing Manufacturing",
  "OEM Specialist",
  "Private Label",
  "Bulk Production",
  "Worldwide Shipping",
];

// Single tag rotating typewriter / letter reveal loop component
function HeroTagRotator() {
  const [tagIndex, setTagIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % HERO_TAGS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const activeTag = HERO_TAGS[tagIndex];

  return (
    <div className="inline-flex items-center justify-center min-h-[46px]">
      <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:border-brand-accent/50 hover:bg-brand-accent/15 backdrop-blur-md shadow-xl transition-colors duration-300">
        {/* Pulsing indicator dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
        </span>

        <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest shrink-0">
          Core Expertise:
        </span>

        {/* Animated Letter Reveal for the active tag */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex items-center"
          >
            <motion.span
              className="font-bold text-xs md:text-sm text-white uppercase tracking-wider flex whitespace-nowrap"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.035,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {activeTag.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 4, filter: "blur(3px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.15 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.75 }}
              className="inline-block w-0.5 h-3.5 bg-brand-accent ml-1.5 shrink-0"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

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

            {/* Dynamic Rotating Tag (One-by-One Loop Reveal) */}
            <ScrollReveal delay={0.35}>
              <HeroTagRotator />
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
      <section className="py-5 sm:py-8 md:py-14 bg-white relative z-10 -mt-5 sm:-mt-8 mx-4 sm:mx-6 md:mx-12 rounded-2xl md:rounded-3xl shadow-md md:shadow-lg border border-brand-light-grey/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 md:gap-0 divide-y-0 md:divide-x divide-brand-light-grey/60">
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
      <section className="py-20 md:py-28 bg-white border-t border-b border-brand-light-grey/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 space-y-4">
            <ScrollReveal>
              <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-3.5 py-1.5 rounded-full inline-block">
                Factory Capabilities
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ink">
                Our Premium B2B Services
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xs md:text-sm text-brand-grey max-w-2xl mx-auto leading-relaxed font-medium">
                At Lotus, we control yarn loop structures, patterns, custom stitching,
                finishing, and global clearance logistics under one roof in Tirupur.
              </p>
            </ScrollReveal>
          </div>

          {/* Category Filter Tabs (Responsive with smooth horizontal scroll on mobile) */}
          <ScrollReveal delay={0.2} className="mb-10 md:mb-12">
            <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
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
                    className={`group px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-brand-ink text-brand-bg shadow-sm"
                        : "bg-brand-bg/80 hover:bg-brand-light-grey/60 text-brand-ink/75 border border-brand-light-grey/80 hover:text-brand-ink"
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
            </div>
          </ScrollReveal>

          {/* Clean, Uniform Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((serv, idx) => {
                return (
                  <motion.div
                    key={serv.title}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    onClick={() => setIsConsultationOpen(true)}
                    className="group cursor-pointer flex flex-col"
                  >
                    {/* 1:1 Square Image Container */}
                    <div className="relative aspect-square w-full rounded-2xl md:rounded-3xl overflow-hidden bg-brand-light-grey/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={serv.image}
                        alt={serv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Subtle resting vignette */}
                      <div className="absolute inset-0 bg-brand-ink/5 group-hover:bg-transparent transition-colors duration-300" />

                      {/* Hover Slide-up Description at Image Bottom */}
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-brand-ink/95 via-brand-ink/80 to-transparent backdrop-blur-[2px] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
                        <p className="text-xs text-white/95 leading-relaxed font-normal line-clamp-3">
                          {serv.desc}
                        </p>
                      </div>
                    </div>

                    {/* Title with clean icon placed below the image */}
                    <div className="pt-3.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-brand-accent shrink-0 [&>svg]:w-4.5 [&>svg]:h-4.5">
                          {serv.icon}
                        </span>
                        <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-brand-ink group-hover:text-brand-accent transition-colors duration-300 leading-snug">
                          {serv.title}
                        </h3>
                      </div>
                      <span className="text-brand-ink/40 group-hover:text-brand-accent transition-colors duration-300 shrink-0">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

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
