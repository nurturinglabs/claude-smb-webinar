"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "1", text: 'Create project: vegetable-wholesaler' },
  { num: "2", text: 'Paste global instructions (business context)' },
  { num: "3", text: 'Connect folder — and you are ready' },
];

export default function Slide13() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-3 text-center"
      >
        Vegetable Wholesaler — Bengaluru
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-xl text-[#DA7756] font-body mb-14 text-center"
      >
        Setting up the Cowork Project
      </motion.p>
      <div className="flex items-center gap-4 max-w-4xl w-full justify-center mb-14">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.2 }}
            className="contents"
          >
            <div className="flex flex-col items-center bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-6 flex-1 text-center">
              <span className="text-4xl font-heading font-bold text-[#DA7756] mb-3">{step.num}</span>
              <span className="text-[#191918] font-body text-base leading-relaxed">{step.text}</span>
            </div>
            {i < 2 && (
              <span className="text-[#DA7756] text-3xl font-bold flex-shrink-0">→</span>
            )}
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-xl text-[#6B6B65] font-body text-center max-w-3xl"
      >
        ಒಂದು ಸಾರಿ business ಬಗ್ಗೆ ಹೇಳಿ — ಮತ್ತೆ ಹೇಳಬೇಕಿಲ್ಲ
      </motion.p>
    </div>
  );
}
