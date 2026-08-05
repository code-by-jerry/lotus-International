"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, ChevronDown, Calendar } from "lucide-react";
import { useInquiry } from "./InquiryProvider";
import ConsultationModal from "./ConsultationModal";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Capabilities", href: "/manufacturing" },
  { name: "Private Label", href: "/private-label" },
  { name: "Sustainability", href: "/sustainability" },
];

const secondaryNavigationItems = [
  { name: "About Us", href: "/about" },
  { name: "Quality & Compliance", href: "/compliance" },
  { name: "Our Clients", href: "/clients" },
  { name: "Nature Polo Club", href: "/nature-polo-club" },
  { name: "Careers", href: "/careers" },
  { name: "Resources", href: "/resources" },
  { name: "Contact & RFQ", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useInquiry();
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Hysteresis threshold to prevent scroll chatter/flicker at boundary
          if (scrollY > 50) {
            setScrolled(true);
          } else if (scrollY < 20) {
            setScrolled(false);
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ─── Fixed Header Outer Wrapper (Prevents CLS & Layout Shift) ─────── */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 pointer-events-none flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between gap-4 w-full ${
            scrolled
              ? "mt-3 w-[94%] max-w-7xl rounded-full bg-brand-ink/90 backdrop-blur-xl border border-white/15 shadow-2xl py-2 px-4 sm:px-6 text-white"
              : "mt-0 max-w-full rounded-none bg-brand-bg/95 backdrop-blur-md border-b border-brand-light-grey/70 py-3.5 px-4 sm:px-6 lg:px-10 text-brand-ink"
          }`}
        >

          {/* ── Left: Brand Logo (GPU Opacity Cross-Fade - Zero Blink) ──── */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="group relative inline-flex items-center h-9 md:h-10">
              <div className="relative h-9 md:h-10 w-28 sm:w-32 flex items-center">
                {/* Standard Logo (Scrolled = False) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="The Lotus International"
                  className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-400 ease-in-out group-hover:scale-105 ${
                    scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                />
                {/* Inverted White Logo (Scrolled = True) */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="The Lotus International"
                  className={`absolute inset-0 h-full w-auto object-contain brightness-0 invert transition-opacity duration-400 ease-in-out group-hover:scale-105 ${
                    scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                />
              </div>
            </Link>
          </div>

          {/* ── Center: Desktop Navigation (Zero Layout Shift) ────────── */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                    scrolled
                      ? isActive
                        ? "bg-black/60 text-white shadow-inner border border-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : isActive
                      ? "text-brand-accent bg-brand-light-grey/40 font-bold"
                      : "text-brand-ink hover:text-brand-accent hover:bg-brand-light-grey/20"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Explore CSS Hover Dropdown (Zero JS lag / flickering) */}
            <div className="relative group py-1">
              <button
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                  secondaryNavigationItems.some((i) => i.href === pathname)
                    ? scrolled
                      ? "bg-black/60 text-white border border-white/10"
                      : "text-brand-accent bg-brand-light-grey/40 font-bold"
                    : scrolled
                    ? "text-white/80 group-hover:text-white group-hover:bg-white/10"
                    : "text-brand-ink group-hover:text-brand-accent group-hover:bg-brand-light-grey/20"
                }`}
              >
                <span>Explore</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu Container */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 ease-out transform group-hover:translate-y-0 -translate-y-1 z-50">
                <div
                  className={`w-56 rounded-2xl shadow-2xl py-2.5 border overflow-hidden transition-all duration-300 ${
                    scrolled
                      ? "bg-brand-ink/95 backdrop-blur-2xl border-white/15 text-white"
                      : "bg-brand-bg/95 backdrop-blur-md border-brand-light-grey/60 text-brand-ink"
                  }`}
                >
                  {secondaryNavigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-xs font-semibold transition-colors duration-150 ${
                        scrolled
                          ? pathname === item.href
                            ? "text-brand-accent bg-white/10 font-bold"
                            : "text-white/85 hover:text-white hover:bg-white/10"
                          : pathname === item.href
                          ? "text-brand-accent font-bold bg-brand-light-grey/40"
                          : "text-brand-ink hover:bg-brand-light-grey/40 hover:text-brand-accent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* ── Right: Action Buttons & CTAs ─────────────────────────── */}
          <div className="flex items-center justify-end gap-2.5 flex-shrink-0">
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Inquiry Counter Icon */}
              <Link
                href="/contact"
                title="Inquiry List"
                className={`relative p-2 rounded-full border transition-all duration-300 ${
                  scrolled
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-brand-ink/15 text-brand-ink hover:border-brand-accent hover:text-brand-accent bg-white/40"
                }`}
              >
                <FileText className="w-4 h-4" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-brand-accent text-brand-bg text-[8px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {items.length}
                  </span>
                )}
              </Link>

              {/* Book Consultation */}
              <button
                onClick={() => setIsConsultationOpen(true)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                  scrolled
                    ? "rounded-full border border-white/20 text-white/90 hover:text-white hover:bg-white/10"
                    : "rounded-xl border border-brand-ink/15 text-brand-ink hover:border-brand-accent hover:text-brand-accent bg-white/40"
                }`}
              >
                Book Consultation
              </button>

              {/* Request a Quote CTA */}
              <Link
                href="/contact"
                className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md whitespace-nowrap ${
                  scrolled
                    ? "rounded-full bg-brand-accent hover:bg-brand-accent-hover text-brand-bg hover:shadow-brand-accent/25"
                    : "rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-brand-bg"
                }`}
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className={`relative p-2 rounded-full border transition-colors duration-300 ${
                  scrolled
                    ? "border-white/20 text-white bg-white/10"
                    : "border-brand-ink/15 text-brand-ink bg-white/40"
                }`}
              >
                <FileText className="w-4 h-4" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent text-brand-bg text-[8px] font-bold rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                className={`p-2 rounded-full border transition-colors duration-300 ${
                  scrolled
                    ? "border-white/20 text-white bg-white/10"
                    : "border-brand-ink/15 text-brand-ink bg-white/40"
                }`}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* ─── Mobile Drawer Overlay ─────────────────────────────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-brand-ink/50 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ─── Mobile Drawer Navigation ──────────────────────────────────── */}
      <div
        className={`fixed top-0 bottom-0 right-0 z-50 w-full max-w-xs backdrop-blur-2xl border-l shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden ${
          scrolled
            ? "bg-brand-ink/95 border-white/15 text-white"
            : "bg-brand-bg/95 border-brand-light-grey/50 text-brand-ink"
        } ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          {/* Drawer Header */}
          <div
            className={`flex items-center justify-between pb-5 border-b ${
              scrolled ? "border-white/15" : "border-brand-light-grey/80"
            }`}
          >
            <Link href="/" className="inline-flex" onClick={() => setIsOpen(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="The Lotus International"
                className={`h-8 w-auto object-contain ${scrolled ? "brightness-0 invert" : ""}`}
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1.5 rounded-full border ${
                scrolled ? "border-white/20 text-white" : "border-brand-ink/10 text-brand-ink"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Nav Items */}
          <nav className="flex flex-col gap-4 mt-6">
            <div
              className={`text-[9px] tracking-widest font-bold uppercase ${
                scrolled ? "text-white/50" : "text-brand-grey/60"
              }`}
            >
              Primary
            </div>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-bold tracking-wider uppercase py-0.5 transition-colors ${
                  pathname === item.href
                    ? "text-brand-accent font-bold"
                    : scrolled
                    ? "text-white"
                    : "text-brand-ink"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div
              className={`text-[9px] tracking-widest font-bold uppercase mt-4 ${
                scrolled ? "text-white/50" : "text-brand-grey/60"
              }`}
            >
              Explore More
            </div>
            {secondaryNavigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-bold tracking-wider uppercase py-0.5 transition-colors ${
                  pathname === item.href
                    ? "text-brand-accent font-bold"
                    : scrolled
                    ? "text-white/80"
                    : "text-brand-ink"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom CTAs */}
        <div
          className={`mt-8 pt-5 border-t space-y-3 ${
            scrolled ? "border-white/15" : "border-brand-light-grey/80"
          }`}
        >
          <button
            onClick={() => {
              setIsOpen(false);
              setIsConsultationOpen(true);
            }}
            className={`w-full text-center py-3 rounded-full border font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
              scrolled
                ? "border-white/20 text-white bg-white/10"
                : "border-brand-accent/20 text-brand-ink bg-white/40"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all shadow-md bg-brand-accent hover:bg-brand-accent-hover text-brand-bg"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </>
  );
}







