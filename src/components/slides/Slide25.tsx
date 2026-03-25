"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Go to claude.ai",
    desc: "Free plan available. No installation.",
  },
  {
    num: "2",
    title: "Download Claude Desktop · Subscribe Pro ₹2,000/month",
    desc: "Open Cowork → Drop folder → Get first output in 5 min",
  },
  {
    num: "3",
    title: "Come back next session",
    desc: "Claude Code deep dive — build your first AI product",
  },
];

export default function Slide25() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-14 text-center"
      >
        Start this week — 3 steps
      </motion.h1>
      <div className="flex gap-6 max-w-5xl w-full mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            className="flex-1 bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-8 text-center"
          >
            <span className="text-6xl font-heading font-bold text-[#DA7756] block mb-4">{step.num}</span>
            <h3 className="text-lg font-heading font-semibold text-[#191918] mb-3 leading-snug">{step.title}</h3>
            <p className="text-[#6B6B65] font-body text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-2xl font-heading font-semibold text-[#DA7756] text-center"
      >
        Your first useful output in under 5 minutes.
      </motion.p>
    </div>
  );
}
