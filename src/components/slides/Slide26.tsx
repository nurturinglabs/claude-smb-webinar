"use client";

import { motion } from "framer-motion";

export default function Slide26() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#191918] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-heading font-bold text-white mb-10 text-center"
      >
        The time is now.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-white/60 font-body text-xl md:text-2xl leading-relaxed space-y-2 mb-16"
      >
        <p>ಇವತ್ತು Claude Chat ಶುರು ಮಾಡಿ.</p>
        <p>ನಾಳೆ Cowork try ಮಾಡಿ.</p>
        <p>ಆಮೇಲೆ — ನಿಮ್ಮದೇ product build ಮಾಡಿ.</p>
      </motion.div>
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
