"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   UTILITY: clamp
──────────────────────────────────────────────────────────────────────────── */
const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(max, val));

/* ─────────────────────────────────────────────────────────────────────────────
   HOOK: useScrollProgress
   Returns a 0→1 progress value as the element scrolls through the viewport.
──────────────────────────────────────────────────────────────────────────── */
function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let rafId: number;

    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 = fully below viewport, 0 = center, 1 = fully above viewport
      const raw = (vh - rect.top) / (vh + rect.height);
      setProgress(clamp(raw, 0, 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return progress;
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT: ProcessCard
   Each card floats at its own speed and fades in from below.
──────────────────────────────────────────────────────────────────────────── */
interface ProcessCardProps {
  children: ReactNode;
  index: number;
  total: number;
  sectionProgress: number;
}

function ProcessCard({
  children,
  index,
  total,
  sectionProgress,
}: ProcessCardProps) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Stagger: each card has a slightly different entry window
  const entryStart = (index / (total + 2)) * 0.55;
  const entryEnd = entryStart + 0.45;
  const cardProgress = clamp(
    (sectionProgress - entryStart) / (entryEnd - entryStart),
    0,
    1
  );

  // Ease-out cubic
  const eased = 1 - Math.pow(1 - cardProgress, 3);

  // Responsive parallax travel distance
  const getTravel = () => {
    if (typeof window === "undefined") return 30;
    if (window.innerWidth >= 1024) return index % 2 === 0 ? 60 : 80;
    if (window.innerWidth >= 768) return index % 2 === 0 ? 30 : 40;
    return 20;
  };

  const travel = prefersReduced ? 0 : getTravel();
  const translateY = travel * (1 - eased);
  const opacity = prefersReduced ? 1 : eased;
  const scale = prefersReduced ? 1 : 0.94 + 0.06 * eased;

  return (
    <div
      style={{
        transform: `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`,
        opacity: opacity.toFixed(3),
        willChange: "transform, opacity",
        transition: "transform 0.05s linear, opacity 0.05s linear",
      }}
      className="flex w-full h-full"
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT: WatermarkParallax
   Large ghost text that drifts upward slower than the cards.
──────────────────────────────────────────────────────────────────────────── */
function WatermarkParallax({
  sectionProgress,
  children,
}: {
  sectionProgress: number;
  children: ReactNode;
}) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const travel = prefersReduced ? 0 : -60;
  const translateY = travel * sectionProgress;
  const opacity = clamp(sectionProgress * 3, 0, 0.04);

  return (
    <div
      aria-hidden="true"
      className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl lg:text-9xl font-bold font-serif-heading tracking-widest uppercase pointer-events-none whitespace-nowrap select-none text-brand-ink"
      style={{
        transform: `translate3d(-50%, ${translateY.toFixed(2)}px, 0)`,
        opacity: opacity.toFixed(3),
        willChange: "transform, opacity",
        transition: "transform 0.05s linear, opacity 0.05s linear",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT: SectionHeaderParallax
   Title + subtitle drift slightly upward as section scrolls.
──────────────────────────────────────────────────────────────────────────── */
function SectionHeaderParallax({
  sectionProgress,
  children,
}: {
  sectionProgress: number;
  children: ReactNode;
}) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const travel = prefersReduced ? 0 : -25;
  const translateY = travel * sectionProgress;

  return (
    <div
      style={{
        transform: `translate3d(0, ${translateY.toFixed(2)}px, 0)`,
        willChange: "transform",
        transition: "transform 0.05s linear",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT: DecorativeOrb
   Floating ambient glow blobs drift at unique speed per position.
──────────────────────────────────────────────────────────────────────────── */
function DecorativeOrb({
  sectionProgress,
  speedX = 0,
  speedY = 40,
  className = "",
}: {
  sectionProgress: number;
  speedX?: number;
  speedY?: number;
  className?: string;
}) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const tx = prefersReduced ? 0 : speedX * sectionProgress;
  const ty = prefersReduced ? 0 : speedY * sectionProgress;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        transform: `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`,
        willChange: "transform",
        transition: "transform 0.05s linear",
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT: ManufacturingParallaxWrapper
   Wraps the entire section and passes scroll progress to all children.
──────────────────────────────────────────────────────────────────────────── */
interface ManufacturingParallaxWrapperProps {
  steps: Array<{ num: string; title: string; desc: string }>;
  renderCard: (
    step: { num: string; title: string; desc: string },
    idx: number,
    sectionProgress: number
  ) => ReactNode;
  headerContent: ReactNode;
}

export function ManufacturingParallaxWrapper({
  steps,
  renderCard,
  headerContent,
}: ManufacturingParallaxWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionProgress = useScrollProgress(
    sectionRef as React.RefObject<HTMLElement | null>
  );

  return (
    <div ref={sectionRef} className="relative">
      {/* Floating ambient orbs */}
      <DecorativeOrb
        sectionProgress={sectionProgress}
        speedX={-20}
        speedY={-50}
        className="absolute -top-20 -left-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"
      />
      <DecorativeOrb
        sectionProgress={sectionProgress}
        speedX={15}
        speedY={-35}
        className="absolute -bottom-10 -right-16 w-96 h-96 bg-brand-ink/5 rounded-full blur-3xl pointer-events-none"
      />
      <DecorativeOrb
        sectionProgress={sectionProgress}
        speedX={-10}
        speedY={-25}
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-sage/5 rounded-full blur-2xl pointer-events-none"
      />

      {/* Watermark ghost text */}
      <WatermarkParallax sectionProgress={sectionProgress}>
        PRODUCTION FLOW
      </WatermarkParallax>

      {/* Section Header with gentle upward drift */}
      <SectionHeaderParallax sectionProgress={sectionProgress}>
        {headerContent}
      </SectionHeaderParallax>

      {/* Grid of cards with staggered parallax */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, idx) => (
          <ProcessCard
            key={idx}
            index={idx}
            total={steps.length}
            sectionProgress={sectionProgress}
          >
            {renderCard(step, idx, sectionProgress)}
          </ProcessCard>
        ))}
      </div>
    </div>
  );
}
