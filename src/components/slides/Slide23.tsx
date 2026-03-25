"use client";

import { motion } from "framer-motion";

const comparisons = [
  { label: "Claude Chat", desc: "You use AI", highlighted: false },
  { label: "Claude Cowork", desc: "AI works for you", highlighted: false },
  { label: "Claude Code", desc: "You build with AI", highlighted: true },
];


export default function Slide23() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-heading font-bold text-[#191918] mb-3 text-center"
      >
        Claude Code
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-2xl text-[#DA7756] font-body mb-10 text-center"
      >
        You BUILD with AI
      </motion.p>

      {/* Comparison cards */}
      <div className="flex gap-4 max-w-4xl w-full mb-10">
        {comparisons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            className={`flex-1 rounded-xl p-5 text-center ${
              item.highlighted
                ? "bg-[#EDE8E0] border border-[#DDD8CE] border-t-4 border-t-[#DA7756]"
                : "bg-[#EDE8E0] border border-[#DDD8CE]"
            }`}
          >
            <h3 className={`font-heading font-semibold text-lg mb-1 ${item.highlighted ? "text-[#DA7756]" : "text-[#6B6B65]"}`}>
              {item.label}
            </h3>
            <p className={`font-body text-sm ${item.highlighted ? "text-[#DA7756]" : "text-[#6B6B65]/70"}`}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
