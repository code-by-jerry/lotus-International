"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/db";
import { useInquiry } from "@/components/InquiryProvider";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, CheckCircle2, ChevronRight, FileText, ShoppingBag } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToInquiry, isInInquiry, removeFromInquiry } = useInquiry();

  if (!product) {
    notFound();
  }

  const added = isInInquiry(product.id);

  const handleInquiryToggle = () => {
    if (added) {
      removeFromInquiry(product.id);
    } else {
      addToInquiry({
        id: product.id,
        name: product.name,
        category: product.category,
        fabric: product.fabric,
        image: product.image,
        gsm: product.gsm,
      });
    }
  };

  return (
    <div className="page-transition min-h-screen pb-24 bg-brand-bg text-brand-ink">
      
      {/* Breadcrumb Navigation */}
      <div className="bg-brand-light-grey/30 border-b border-brand-light-grey/60 py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-grey">
          <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-brand-light-grey" />
          <Link href="/products" className="hover:text-brand-accent transition-colors">Catalog</Link>
          <ChevronRight className="w-3 h-3 text-brand-light-grey" />
          <span className="text-brand-ink font-extrabold line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* Main Detail Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12">
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent-hover transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalogue</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Showcase (Col 1 to 6) */}
          <ScrollReveal className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden bg-brand-light-grey/40 border border-brand-light-grey/60 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-brand-bg/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-brand-ink px-3 py-1.5 rounded-xl border border-brand-light-grey/60">
              {product.category}
            </div>
          </ScrollReveal>

          {/* Right Column: Spec Sheet (Col 7 to 12) */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal className="space-y-2">
              <span className="text-[10px] font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 px-3 py-1 rounded-full w-max">
                {product.type} Silhouette
              </span>
              <h1 className="font-serif-heading text-3xl md:text-4xl font-bold text-brand-ink leading-tight">
                {product.name}
              </h1>
            </ScrollReveal>

            {/* Spec strip */}
            <ScrollReveal delay={0.05} className="grid grid-cols-3 gap-4 py-5 border-t border-b border-brand-light-grey/60 text-xs md:text-sm">
              <div>
                <span className="text-[10px] tracking-wider uppercase font-bold text-brand-grey/85 block mb-1">Fabric Base</span>
                <span className="font-bold text-brand-ink">{product.fabric}</span>
              </div>
              <div className="border-l border-brand-light-grey/60 pl-4">
                <span className="text-[10px] tracking-wider uppercase font-bold text-brand-grey/85 block mb-1">GSM Weight</span>
                <span className="font-bold text-brand-ink">{product.gsm}</span>
              </div>
              <div className="border-l border-brand-light-grey/60 pl-4">
                <span className="text-[10px] tracking-wider uppercase font-bold text-brand-grey/85 block mb-1">Base MOQ</span>
                <span className="font-bold text-brand-accent">{product.moq} Pcs</span>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal delay={0.1} className="space-y-2">
              <h3 className="text-xs font-bold tracking-widest uppercase text-brand-ink">Silhouette Overview</h3>
              <p className="text-xs md:text-sm text-brand-ink/90 leading-relaxed font-medium">
                {product.description}
              </p>
            </ScrollReveal>

            {/* Features Bullet Points */}
            <ScrollReveal delay={0.15} className="space-y-3">
              <h3 className="text-xs font-bold tracking-widest uppercase text-brand-ink">Customization Capabilities</h3>
              <ul className="space-y-2.5">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-brand-grey font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Action buttons */}
            <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-brand-light-grey/60">
              <button
                onClick={handleInquiryToggle}
                className={`flex-grow py-3.5 px-6 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 border ${
                  added
                    ? "bg-brand-sage border-brand-sage text-white"
                    : "border-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:text-brand-bg bg-white"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{added ? "Remove from RFQ" : "Add to RFQ List"}</span>
              </button>

              <Link
                href="/contact"
                className="py-3.5 px-6 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-bg font-bold text-xs tracking-wider uppercase text-center transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-brand-accent/10"
              >
                <FileText className="w-4 h-4" />
                <span>Configure RFQ Now</span>
              </Link>
            </ScrollReveal>

            {/* private label note */}
            <p className="text-[10px] text-brand-grey/85 mt-4 leading-relaxed font-medium">
              Note: Sample fabrication requires tech pack specifications or reference samples. 
              Our manufacturing capabilities support organic reactive dyeing, screen prints, 
              embroidery, heat transfers, and custom label placement.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
