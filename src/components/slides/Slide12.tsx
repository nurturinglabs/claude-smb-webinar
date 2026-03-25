"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tasks = [
  { hour: 4, label: "4:00 AM", task: "Writing supplier negotiation email" },
  { hour: 7, label: "7:00 AM", task: "Replying to Google reviews" },
  { hour: 10, label: "10:00 AM", task: "Analysing 6 months of sales data" },
  { hour: 13, label: "1:00 PM", task: "Creating Instagram captions — 3 languages" },
  { hour: 16, label: "4:00 PM", task: "Answering a legal question about GST" },
  { hour: 19, label: "7:00 PM", task: "Drafting overdue payment reminders in Kannada" },
  { hour: 22, label: "10:00 PM", task: "Building tomorrow\u2019s delivery schedule" },
  { hour: 2, label: "2:00 AM", task: "Still working. While you sleep." },
];

const rows = [
  ["You ask", "You delegate"],
  ["It answers", "It executes"],
  ["One at a time", "Multi-step tasks"],
  ["No files", "Works with YOUR files"],
  ["You implement", "Finished work delivered"],
];

function ClockFace({ hour }: { hour: number }) {
  const hourAngle = ((hour % 12) / 12) * 360 - 90;
  const minuteAngle = -90;

  return (
    <svg viewBox="0 0 200 200" className="w-44 h-44 md:w-56 md:h-56">
      <circle cx="100" cy="100" r="95" fill="#FAF9F7" stroke="#DDD8CE" strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 80 * Math.cos(rad);
        const y1 = 100 + 80 * Math.sin(rad);
        const x2 = 100 + 90 * Math.cos(rad);
        const y2 = 100 + 90 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#191918"
            strokeWidth={i % 3 === 0 ? 3 : 1.5}
            strokeLinecap="round"
          />
        );
      })}
      <motion.line
        x1="100"
        y1="100"
        animate={{
          x2: 100 + 50 * Math.cos((hourAngle * Math.PI) / 180),
          y2: 100 + 50 * Math.sin((hourAngle * Math.PI) / 180),
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        stroke="#191918"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <motion.line
        x1="100"
        y1="100"
        animate={{
          x2: 100 + 70 * Math.cos((minuteAngle * Math.PI) / 180),
          y2: 100 + 70 * Math.sin((minuteAngle * Math.PI) / 180),
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        stroke="#6B6B65"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="4" fill="#DA7756" />
    </svg>
  );
}

export default function Slide12() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % tasks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const active = tasks[activeIndex];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-heading font-bold text-[#191918] mb-2 text-center"
      >
        Claude Cowork
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-xl text-[#DA7756] font-body mb-8 text-center"
      >
        From Assistant to Agent — Available 24/7
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-8 max-w-5xl w-full items-start"
      >
        {/* LEFT SIDE — Clock */}
        <div className="flex-1 flex flex-col items-center">
          <ClockFace hour={active.hour} />
          <div className="h-20 relative w-full max-w-xs mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-center absolute inset-0 flex flex-col justify-center"
              >
                <span className="text-[#DA7756] font-mono text-sm mb-1">{active.label}</span>
                <p className="text-[#191918] font-heading font-semibold text-base leading-snug">
                  {active.task}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Progress dots */}
          <div className="flex gap-1.5 mt-2 mb-4">
            {tasks.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-[#DA7756] scale-125" : "bg-[#DDD8CE]"
                }`}
              />
            ))}
          </div>
          <p className="text-[#6B6B65] font-body text-sm text-center">
            ನೀವು ನಿದ್ರೆ ಮಾಡ್ವಾಗಲೂ Claude ಕೆಲಸ ಮಾಡ್ತೆ.
          </p>
        </div>

        {/* RIGHT SIDE — Comparison Table */}
        <div className="flex-1">
          <div className="bg-[#EDE8E0] rounded-xl overflow-hidden border border-[#DDD8CE]">
            <div className="grid grid-cols-2 gap-0">
              <div className="px-6 py-3 border-b border-[#DDD8CE]">
                <span className="text-[#6B6B65] font-heading font-semibold text-sm">Claude Chat</span>
              </div>
              <div className="px-6 py-3 border-b border-[#DDD8CE] border-l border-l-[#DDD8CE]">
                <span className="text-[#191918] font-heading font-bold text-sm">Claude Cowork</span>
              </div>
              {rows.map(([left, right], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="contents"
                >
                  <div className="px-6 py-3 border-b border-[#DDD8CE]/50 text-[#6B6B65] font-body text-sm">
                    {left}
                  </div>
                  <div className="px-6 py-3 border-b border-[#DDD8CE]/50 border-l border-l-[#DDD8CE] text-[#191918] font-body text-sm font-bold">
                    {right}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom pill */}
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="inline-block px-4 py-2 rounded-full bg-[#DA7756] text-white font-mono text-sm font-semibold mt-6"
      >
        ₹2,000/month · Less than ₹67/day
      </motion.span>
    </div>
  );
}
