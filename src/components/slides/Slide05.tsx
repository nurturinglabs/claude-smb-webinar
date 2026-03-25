"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const years = [
  {
    year: 2022,
    emoji: "📒",
    color: "#DA7756",
    analogy: "Like hiring a 5th grader",
    desc: "Eager to help. Forgets what you said 2 minutes ago. Needs constant hand-holding.",
  },
  {
    year: 2023,
    emoji: "📚",
    color: "#DA7756",
    analogy: "Like hiring a 10th standard student",
    desc: "Can write letters, answer basic questions. But needs you to explain every little step.",
  },
  {
    year: 2024,
    emoji: "🎓",
    color: "#DA7756",
    analogy: "Like hiring a fresh graduate",
    desc: "Reads files, speaks multiple languages, analyses data. Smart — but still needs supervision.",
  },
  {
    year: 2025,
    emoji: "💼",
    color: "#DA7756",
    analogy: "Like hiring an experienced manager",
    desc: "Describe the outcome. They figure out the steps. Come back to finished work. No babysitting needed.",
  },
  {
    year: 2026,
    emoji: "🧠",
    color: "#3FB950",
    analogy: "Like hiring a PhD who knows your business",
    desc: "Thinks ahead. Works while you sleep. Reads your invoices, replies to reviews, tracks payments — all on its own.",
  },
];

export default function Slide05() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(years.length - 1, i + 1));

  const active = years[activeIndex];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-2 text-center"
      >
        How smart is your AI assistant today?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-xl text-[#6B6B65] font-body mb-12 text-center"
      >
        From basic chatbot to your business partner
      </motion.p>

      {/* Timeline track */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative flex items-center gap-0 mb-10 w-full max-w-3xl"
      >
        {/* Background line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#DDD8CE] -translate-y-1/2 rounded-full" />
        {/* Active line */}
        <motion.div
          className="absolute top-1/2 left-0 h-1 bg-[#DA7756] -translate-y-1/2 rounded-full"
          animate={{ width: `${(activeIndex / (years.length - 1)) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
        {years.map((y, i) => (
          <button
            key={y.year}
            onClick={() => setActiveIndex(i)}
            className="relative z-10 flex-1 flex flex-col items-center"
          >
            <div
              className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                i <= activeIndex
                  ? "border-[#DA7756] bg-[#DA7756]"
                  : "border-[#DDD8CE] bg-[#FAF9F7]"
              }`}
            />
            <span
              className={`mt-2 font-mono text-sm transition-colors duration-300 ${
                i === activeIndex ? "text-[#DA7756] font-bold" : "text-[#6B6B65]"
              }`}
            >
              {y.year}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Card */}
      <div className="w-full max-w-2xl h-56 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-[#EDE8E0] border rounded-xl p-8 text-center absolute inset-0 flex flex-col items-center justify-center"
            style={{ borderColor: active.color + "40" }}
          >
            <span className="text-5xl mb-3">{active.emoji}</span>
            <h3
              className="text-2xl font-heading font-bold mb-3"
              style={{ color: active.color }}
            >
              {active.analogy}
            </h3>
            <p className="text-[#6B6B65] font-body text-base leading-relaxed max-w-lg">
              {active.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2026 highlight box */}
      <AnimatePresence>
        {activeIndex === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 px-8 py-4 rounded-xl border-2 border-[#3FB950] bg-[#3FB950]/10"
          >
            <p className="text-[#3FB950] font-body text-lg text-center">
              ಈ PhD holder ನಿಮ್ಮ business ಗೆ ₹2,000/month ಗೆ ಸಿಗ್ತಾರೆ.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex gap-4 mt-6"
      >
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="px-4 py-2 rounded-lg border border-[#DDD8CE] text-[#6B6B65] font-mono text-sm disabled:opacity-30 hover:border-[#DA7756] hover:text-[#DA7756] transition-colors"
        >
          &larr; Prev
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === years.length - 1}
          className="px-4 py-2 rounded-lg border border-[#DDD8CE] text-[#6B6B65] font-mono text-sm disabled:opacity-30 hover:border-[#DA7756] hover:text-[#DA7756] transition-colors"
        >
          Next &rarr;
        </button>
      </motion.div>
    </div>
  );
}
