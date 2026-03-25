"use client";

import { motion } from "framer-motion";

export default function Slide20() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#191918] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 text-center"
      >
        {"\u0C87\u0CA8\u0CCD\u0CA8\u0CC1"} {"\u0C8E\u0CB0\u0CA1\u0CC1"} examples {"\u0CA8\u0CCB\u0CA1\u0CCB\u0CA3"}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl md:text-2xl text-white/60 font-body mb-6 text-center"
      >
        Two more businesses. Same power.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-base text-white/30 font-mono tracking-wide text-center"
      >
        Cloud Kitchen {"\u00B7"} DMart Bengaluru
      </motion.p>
    </div>
  );
}
