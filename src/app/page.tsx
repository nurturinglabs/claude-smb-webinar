"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import SlideWrapper from "@/components/SlideWrapper";
import ProgressBar from "@/components/ProgressBar";
import SlideCounter from "@/components/SlideCounter";
import OverviewGrid from "@/components/OverviewGrid";

import Slide01 from "@/components/slides/Slide01";
import Slide02 from "@/components/slides/Slide02";
import Slide03 from "@/components/slides/Slide03";
import Slide04 from "@/components/slides/Slide04";
import Slide05 from "@/components/slides/Slide05";
import Slide06 from "@/components/slides/Slide06";
import Slide07 from "@/components/slides/Slide07";
import Slide08 from "@/components/slides/Slide08";
import Slide09 from "@/components/slides/Slide09";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import Slide12 from "@/components/slides/Slide12";
import Slide13 from "@/components/slides/Slide13";
import Slide14 from "@/components/slides/Slide14";
import Slide15 from "@/components/slides/Slide15";
import Slide16 from "@/components/slides/Slide16";
import Slide17 from "@/components/slides/Slide17";
import Slide18 from "@/components/slides/Slide18";
import Slide19 from "@/components/slides/Slide19";
import Slide20 from "@/components/slides/Slide20";
import Slide21 from "@/components/slides/Slide21";
import Slide22 from "@/components/slides/Slide22";
import Slide23 from "@/components/slides/Slide23";
import Slide24 from "@/components/slides/Slide24";
import Slide25 from "@/components/slides/Slide25";
import Slide26 from "@/components/slides/Slide26";

const slides = [
  Slide01, Slide02, Slide03, Slide04, Slide05,
  Slide06, Slide07, Slide08, Slide09, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19, Slide20,
  Slide21, Slide22, Slide23, Slide24, Slide25,
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
