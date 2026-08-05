"use client";

import React, { useEffect, useState, useRef } from "react";

interface ParallaxProps {
  children?: React.ReactNode;
  speed?: number; // e.g. -0.25 moves up slower, 0.3 moves down
  className?: string;
}

export function ParallaxElement({ children, speed = 0.2, className = "" }: ParallaxProps) {
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate position relative to viewport center
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportHeight / 2;
      
      setOffsetY(distanceFromCenter * speed * -0.15);
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(0, ${offsetY.toFixed(2)}px, 0)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export function HeroParallaxBackground({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [offsetY, setOffsetY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 1200) {
        setOffsetY(scrollY * 0.35);
        setScale(1 + scrollY * 0.0003);
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        transform: `translate3d(0, ${offsetY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export function ProcessParallaxCard({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setIsReducedMotion(true);
      return;
    }

    let animationFrameId: number;

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Card position relative to viewport center (-1 to 1)
      const elementCenter = rect.top + rect.height / 2;
      const progress = (elementCenter - viewportHeight / 2) / viewportHeight;

      // Responsive parallax scaling factor
      const screenWidth = window.innerWidth;
      const maxShift = screenWidth >= 1024 ? 45 : screenWidth >= 768 ? 20 : 8;

      // Alternating multi-speed vertical translation
      const direction = index % 2 === 0 ? 1 : -1;
      const calculatedY = progress * maxShift * direction;
      const calculatedScale = 1 - Math.abs(progress) * (screenWidth >= 1024 ? 0.04 : 0.015);
      
      // Smooth fade dynamics near viewport boundaries
      const calculatedOpacity = Math.min(1, Math.max(0.4, 1 - Math.abs(progress) * 0.6));

      setOffsetY(calculatedY);
      setScale(Math.max(0.95, Math.min(1.02, calculatedScale)));
      setOpacity(calculatedOpacity);
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [index]);

  if (isReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transform: `translate3d(0, ${offsetY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`,
        opacity: opacity.toFixed(3),
        willChange: "transform, opacity",
        transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease-out",
      }}
    >
      {children}
    </div>
  );
}

