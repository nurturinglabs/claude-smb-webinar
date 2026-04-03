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
import Slide27 from "@/components/slides/Slide27";
import Slide28 from "@/components/slides/Slide28";
import Slide29 from "@/components/slides/Slide29";
import Slide30 from "@/components/slides/Slide30";
import Slide31 from "@/components/slides/Slide31";
import Slide32 from "@/components/slides/Slide32";
import Slide33 from "@/components/slides/Slide33";
import Slide34 from "@/components/slides/Slide34";
import Slide35 from "@/components/slides/Slide35";
import Slide36 from "@/components/slides/Slide36";
import Slide37 from "@/components/slides/Slide37";
import Slide38 from "@/components/slides/Slide38";
import Slide39 from "@/components/slides/Slide39";
import Slide40 from "@/components/slides/Slide40";

const slides = [
  Slide01, Slide40, Slide33, Slide32, Slide04,
  Slide37, Slide35, Slide36, Slide10, Slide07,
  Slide12, Slide38, Slide13, Slide15,
  Slide16, Slide17, Slide18,
  Slide21, Slide39, Slide22, Slide23,
  Slide03, Slide31,
  Slide26,
];

const TOTAL = slides.length;

const PASSWORD = "mundebanni2026";

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showOverview, setShowOverview] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("auth") === "true") {
      setAuthenticated(true);
    }
  }, []);

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem("auth", "true");
      setError(false);
    } else {
      setError(true);
    }
  };

  const CurrentSlide = slides[current];

  if (!authenticated) {
    return (
      <main className="w-screen h-screen flex items-center justify-center" style={{ background: "#05101F" }}>
        <form onSubmit={handleLogin} className="flex flex-col items-center gap-6 w-full max-w-sm px-8">
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="font-heading font-bold uppercase text-[#D97757]" style={{ fontSize: 11, letterSpacing: "0.22em" }}>
              AI for Your Business
            </span>
            <h1 className="font-heading font-extrabold text-white text-3xl text-center">
              Enter Password
            </h1>
            <p className="font-body italic text-center" style={{ fontSize: 14, color: "rgba(255,255,255,0.35)" }}>
              This presentation is password protected.
            </p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className="w-full font-mono text-center outline-none"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: error ? "1px solid rgba(217,119,87,0.6)" : "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              padding: "14px 20px",
              fontSize: 16,
              color: "#FAF9F5",
            }}
          />
          {error && (
            <p className="font-heading font-semibold text-[#D97757]" style={{ fontSize: 13, marginTop: -8 }}>
              Incorrect password. Try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full font-heading font-bold text-[#FAF9F5] rounded-lg transition-opacity hover:opacity-90"
            style={{ background: "#D97757", padding: "14px 0", fontSize: 15, cursor: "pointer", border: "none" }}
          >
            Enter
          </button>
        </form>
      </main>
    );
  }

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
