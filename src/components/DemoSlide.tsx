"use client";

import { motion } from "framer-motion";

interface DemoSlideProps {
  title: string;
  pill: string;
  smallText?: string;
  prompt: string;
  narration: string;
}

export default function DemoSlide({ title, pill, smallText, prompt, narration }: DemoSlideProps) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-heading font-bold text-[#191918] mb-4 text-center"
      >
        {title}
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="inline-block px-5 py-1.5 rounded-full bg-[#DA7756] text-white font-mono text-sm font-semibold mb-4"
      >
        {pill}
      </motion.span>
      {smallText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-[#6B6B65] text-xs font-mono mb-3 text-center max-w-2xl"
        >
          {smallText}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-3xl bg-[#191918] rounded-xl p-6 mb-6 overflow-auto max-h-[50vh]"
      >
        <pre className="text-[#FAF9F7] font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {prompt}
        </pre>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-[#6B6B65] font-body text-base md:text-lg text-center max-w-3xl leading-relaxed italic"
      >
        {narration}
      </motion.p>
    </div>
  );
}
