"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/db";
import { useInquiry } from "./InquiryProvider";
import { Plus, Check, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToInquiry, isInInquiry, removeFromInquiry } = useInquiry();
  const added = isInInquiry(product.id);

  const handleInquiryToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <div className="group bg-white border border-brand-light-grey/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full interactive-card">
      
      {/* Product Image Container */}
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden aspect-[4/3] bg-brand-light-grey/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Category tag */}
        <div className="absolute top-3 left-3 bg-brand-bg/85 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-brand-ink px-2.5 py-1 rounded-lg border border-brand-light-grey/50">
          {product.category}
        </div>
        
        {/* Quick view icon overlay on hover */}
        <div className="absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-brand-ink scale-90 group-hover:scale-100 transition-transform duration-300">
            <Eye className="w-4.5 h-4.5" />
          </div>
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-serif-heading text-base md:text-lg font-bold text-brand-ink hover:text-brand-accent transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          
          <div className="text-[10px] font-bold text-brand-grey/80 uppercase tracking-wider flex items-center gap-2">
            <span>{product.type}</span>
            <span className="w-1 h-1 rounded-full bg-brand-light-grey" />
            <span>{product.gsm}</span>
          </div>

          <p className="text-xs text-brand-ink/80 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          <div className="text-[10px] font-semibold text-brand-ink bg-brand-bg/60 border border-brand-light-grey/50 px-3 py-2 rounded-xl">
            <span className="text-brand-grey font-medium">Fabric: </span>
            {product.fabric}
          </div>
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-2 pt-3 border-t border-brand-light-grey/40">
          <Link
            href={`/products/${product.id}`}
            className="flex-grow text-center text-[11px] font-bold tracking-wider uppercase py-2.5 px-3 rounded-xl border border-brand-ink/10 hover:border-brand-accent hover:text-brand-accent transition-all bg-white"
          >
            Details
          </Link>
          
          <button
            onClick={handleInquiryToggle}
            className={`p-2.5 rounded-xl border transition-all flex items-center justify-center shrink-0 ${
              added
                ? "bg-brand-sage border-brand-sage text-white"
                : "border-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:border-brand-accent hover:text-brand-bg bg-white"
            }`}
            title={added ? "Remove from Inquiry List" : "Add to Inquiry List"}
          >
            {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
