"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles, Mail, Send, CheckCircle2, Leaf, Heart, Recycle } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";

export default function NaturePoloClubPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="page-transition bg-brand-ink text-brand-bg min-h-screen pb-20">
      {/* Brand Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-12">
        <div className="absolute inset-0 opacity-25 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200"
            alt="Organic cotton close up weave"
            speed={0.1}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-sage/30 bg-brand-sage/10 text-xs font-semibold tracking-wider text-brand-sage uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> In-House Sustainable Label
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Nature Polo Club
            </h1>
            <p className="text-base sm:text-lg text-brand-bg/85 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              Where technical textile engineering meets slow-fashion mindfulness. Bamboo cotton blends processed entirely using solar power and organic plant dyes.
            </p>
            <div className="w-24 h-0.5 bg-brand-sage mx-auto" />
          </ScrollReveal>
        </div>
      </section>

      {/* Brand Story & Features */}
      <section className="py-20 bg-brand-ink border-t border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <ScrollReveal>
                <span className="text-xs font-bold tracking-widest text-brand-sage uppercase mb-3 block">
                  The Organic Standard
                </span>
                <h2 className="font-serif-heading text-3xl md:text-4xl font-bold mb-6">
                  Crafted for Conscious Lifestyles
                </h2>
                <p className="text-xs md:text-sm text-brand-bg/80 leading-relaxed mb-6">
                  Nature Polo Club was created as our in-house testbed. We wanted to prove that a high-volume factory could craft luxury-quality polos with a zero-carbon objective. By blending organic combed cotton with structural bamboo fibers, we created a garment that is naturally anti-bacterial, breathable, and holds colors without toxic chemical fixers.
                </p>
                <p className="text-xs md:text-sm text-brand-bg/80 leading-relaxed mb-6">
                  Each polo uses coconut shell buttons, GOTS-certified organic cotton threads, and organic labels. We manufacture these in small production blocks to support boutique brands and premium corporate buyers.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <ScrollReveal delay={0.05} className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
                  <Leaf className="w-6 h-6 text-brand-sage mx-auto mb-3" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">Bamboo blend</h4>
                  <p className="text-[10px] text-brand-bg/70 leading-normal">Anti-bacterial, breathable, silk-smooth handfeel.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.1} className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
                  <Recycle className="w-6 h-6 text-brand-sage mx-auto mb-3" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">Solar Knitted</h4>
                  <p className="text-[10px] text-brand-bg/70 leading-normal">Made in Tirupur using 100% solar captive arrays.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.15} className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
                  <Heart className="w-6 h-6 text-brand-sage mx-auto mb-3" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">Organic Dyes</h4>
                  <p className="text-[10px] text-brand-bg/70 leading-normal">Natural color fastness with zero toxic discharge.</p>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800"
                alt="Green Polo Shirt close up details"
                speed={0.12}
              />
            </ScrollReveal>
          </div>

          {/* Sourcing parameters */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-center max-w-4xl mx-auto">
            <h3 className="font-serif-heading text-2xl font-bold mb-4">Sourcing Nature Polo Club for Your Brand</h3>
            <p className="text-xs md:text-sm text-brand-bg/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Are you a retail brand or corporate client looking to customize our Signature Organic Polo under your private label? We support custom brand labels, packaging, embroidery, and colors.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-brand-sage">
              <span className="border border-brand-sage/30 px-3 py-1 rounded bg-brand-sage/5">MOQ: 500 Pcs per color</span>
              <span className="border border-brand-sage/30 px-3 py-1 rounded bg-brand-sage/5">Lead Time: 35-45 Days</span>
              <span className="border border-brand-sage/30 px-3 py-1 rounded bg-brand-sage/5">Sample Fit: 7 Days</span>
            </div>
          </div>

          {/* Email Newsletter Sign Up */}
          <div className="mt-20 max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            {submitted ? (
              <div className="animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-brand-sage mx-auto mb-4" />
                <h3 className="font-serif-heading text-xl font-bold mb-2">Subscription Confirmed</h3>
                <p className="text-xs text-brand-bg/75">
                  Thank you for your interest. You will be notified as soon as the Nature Polo Club retail storefront goes live.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Mail className="w-10 h-10 text-brand-sage mx-auto mb-2" />
                <h3 className="font-serif-heading text-xl font-bold mb-2">Nature Polo Club Storefront</h3>
                <p className="text-xs text-brand-bg/75 leading-relaxed mb-6">
                  Subscribe to receive updates on our direct-to-consumer store launch and seasonal retail drops.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="flex-grow px-4 py-3 rounded-lg bg-brand-ink border border-white/10 focus:outline-none focus:ring-1 focus:ring-brand-sage focus:border-brand-sage text-xs text-brand-bg"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-brand-sage hover:bg-brand-sage/80 text-brand-ink font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-1 shrink-0"
                  >
                    <span>Notify Me</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
