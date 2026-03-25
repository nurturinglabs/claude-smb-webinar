"use client";

import { motion } from "framer-motion";

const pills = ["Legal", "Accounts", "Marketing", "Writing", "HR", "Translation"];

export default function Slide06() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-heading font-bold text-[#191918] mb-4 text-center"
      >
        Claude Chat
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-2xl text-[#DA7756] font-body mb-4 text-center"
      >
        Your smartest employee — available 24/7
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg text-[#6B6B65] font-body mb-14 text-center"
      >
        No installation. Just go to claude.ai and talk.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {pills.map((pill, i) => (
          <span
            key={i}
            className="px-6 py-3 rounded-full border-2 border-[#DA7756] text-[#DA7756] font-mono text-lg tracking-wide"
          >
            {pill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
