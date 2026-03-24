"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Cada seção tem largura / espaçamento próprios (não forçar um único padrão global). */
export type CarouselVariant = "sobre" | "areas";

const VARIANT = {
  /** Sobre: cards horizontais (ícone + texto) — slide mais largo */
  sobre: {
    scrollerGap: "gap-3",
    slide:
      "flex w-[min(100%,calc(100vw-1.5rem))] max-w-[21rem] shrink-0 snap-center self-stretch",
    dots: "mt-4 gap-1.5",
  },
  /** Áreas: card vertical centralizado — largura confortável de leitura */
  areas: {
    scrollerGap: "gap-3",
    slide:
      "flex w-[min(100%,calc(100vw-2rem))] max-w-[18.5rem] shrink-0 snap-center self-stretch",
    dots: "mt-5 gap-2",
  },
} as const satisfies Record<
  CarouselVariant,
  { scrollerGap: string; slide: string; dots: string }
>;

interface MobileCardCarouselProps {
  items: ReactNode[];
  variant: CarouselVariant;
  className?: string;
  ariaLabel: string;
}

export default function MobileCardCarousel({
  items,
  variant,
  className,
  ariaLabel,
}: MobileCardCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const v = VARIANT[variant];

  const scrollToIndex = useCallback((index: number) => {
    const root = scrollerRef.current;
    if (!root) return;
    const slide = root.querySelector(
      `[data-carousel-slide="${index}"]`,
    ) as HTMLElement | null;
    slide?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || items.length === 0) return;

    const slides = root.querySelectorAll("[data-carousel-slide]");

    const pickActive = () => {
      const centerX = root.scrollLeft + root.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      slides.forEach((slide, i) => {
        const el = slide as HTMLElement;
        const mid = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.abs(mid - centerX);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };

    pickActive();
    root.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      root.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={scrollerRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label={ariaLabel}
        className={cn(
          "flex items-stretch snap-x snap-mandatory overflow-x-auto scroll-smooth pb-0.5",
          v.scrollerGap,
          "[-webkit-overflow-scrolling:touch]",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {items.map((node, i) => (
          <div
            key={i}
            data-carousel-slide={i}
            className={cn(v.slide, "first:pl-0.5 last:pr-0.5")}
          >
            {node}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div
          className={cn("flex items-center justify-center", v.dots)}
          role="tablist"
          aria-label="Posição no carrossel"
        >
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Ir para o slide ${i + 1} de ${items.length}`}
              className={cn(
                "h-1.5 rounded-full transition-[width,background-color] duration-300",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest/40",
                i === active
                  ? "w-6 bg-forest"
                  : "w-1.5 bg-forest/20 hover:bg-forest/35",
              )}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
