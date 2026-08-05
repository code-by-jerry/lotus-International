"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number; // multiplier, e.g., 0.1 means moves 10% of scroll offset
}

export default function ParallaxImage({
  src,
  alt,
  className = "object-cover w-full h-full",
  containerClassName = "relative overflow-hidden w-full h-full",
  speed = 0.15,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate translation range based on speed
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  if (prefersReducedMotion) {
    return (
      <div className={containerClassName}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={className} />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={containerClassName}>
      <motion.div style={{ y, height: "130%", top: "-15%" }} className="absolute inset-0 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={`${className} h-full w-full absolute top-0 left-0`} />
      </motion.div>
    </div>
  );
}
