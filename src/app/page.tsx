"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";
import ProgressBar from "@/components/ProgressBar";
import SlideCounter from "@/components/SlideCounter";
import OverviewGrid from "@/components/OverviewGrid";

import Slide01 from "@/components/slides/Slide01";
import Slide03 from "@/components/slides/Slide03";
import Slide04 from "@/components/slides/Slide04";
import Slide07 from "@/components/slides/Slide07";
import Slide10 from "@/components/slides/Slide10";
import Slide12 from "@/components/slides/Slide12";
import Slide13 from "@/components/slides/Slide13";
import Slide15 from "@/components/slides/Slide15";
import Slide16 from "@/components/slides/Slide16";
import Slide17 from "@/components/slides/Slide17";
import Slide18 from "@/components/slides/Slide18";
import Slide21 from "@/components/slides/Slide21";
import Slide22 from "@/components/slides/Slide22";
import Slide23 from "@/components/slides/Slide23";
import Slide26 from "@/components/slides/Slide26";
import Slide31 from "@/components/slides/Slide31";
import Slide32 from "@/components/slides/Slide32";
import Slide33 from "@/components/slides/Slide33";
import Slide35 from "@/components/slides/Slide35";
import Slide36 from "@/components/slides/Slide36";
import Slide37 from "@/components/slides/Slide37";
import Slide38 from "@/components/slides/Slide38";
import Slide39 from "@/components/slides/Slide39";


const slides = [
  Slide01, Slide33, Slide32, Slide04,
  Slide37, Slide35, Slide36, Slide10, Slide07,
  Slide12, Slide38, Slide13, Slide15,
  Slide16, Slide17, Slide18,
  Slide21, Slide39, Slide22, Slide23,
  Slide03, Slide31,
  Slide26,
];

const TOTAL = slides.length;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showOverview, setShowOverview] = useState(false);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setShowOverview(false);
  }, [current]);

  const next = useCallback(() => {
    if (current < TOTAL - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const prev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  // Touch swipe navigation
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const MIN_SWIPE = 50;

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchEnd.current = null;
      touchStart.current = e.targetTouches[0].clientX;
    };
    const onTouchMove = (e: TouchEvent) => {
      touchEnd.current = e.targetTouches[0].clientX;
    };
    const onTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return;
      const distance = touchStart.current - touchEnd.current;
      if (Math.abs(distance) > MIN_SWIPE) {
        if (distance > 0) next();
        else prev();
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showOverview && e.key === "Escape") {
        setShowOverview(false);
        return;
      }
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prev();
          break;
        case "Escape":
          setShowOverview(true);
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, showOverview]);

  const CurrentSlide = slides[current];

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#FAF9F7]">
      <ProgressBar current={current} total={TOTAL} />
      <AnimatePresence custom={direction} mode="wait">
        <SlideWrapper key={current} direction={direction}>
          <CurrentSlide />
        </SlideWrapper>
      </AnimatePresence>
      {/* Mobile tap zones */}
      <div className="absolute inset-0 z-30 flex md:hidden pointer-events-none">
        <div className="w-[30%] h-full pointer-events-auto" onClick={prev} />
        <div className="w-[40%] h-full" />
        <div className="w-[30%] h-full pointer-events-auto" onClick={next} />
      </div>
      <SlideCounter current={current} total={TOTAL} />
      <AnimatePresence>
        {showOverview && (
          <OverviewGrid
            current={current}
            onSelect={goTo}
            onClose={() => setShowOverview(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
