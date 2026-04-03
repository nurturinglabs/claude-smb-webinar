"use client";

import { motion } from "framer-motion";

export default function Slide26() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-12" style={{ background: "#05101F" }}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-heading font-bold text-white mb-10 text-center"
      >
        Time to use AI and build is <span className="text-[#DA7756]">NOW</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-[#DA7756] font-mono text-lg tracking-wide"
      >
        claude.ai/download
      </motion.p>
    </div>
  );
}
