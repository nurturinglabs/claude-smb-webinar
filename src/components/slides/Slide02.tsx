"use client";

import { motion } from "framer-motion";

const superpowers = [
  "Reads & Writes",
  "Thinks & Plans",
  "Speaks & Listens",
  "Works While You Sleep",
];

export default function Slide02() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-2 text-center"
      >
        Just like any other employee — but with superpowers
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-lg text-[#6B6B65] font-body mb-10 text-center"
      >
        No jargon. No tech talk. Here is all you need to know.
      </motion.p>

      <div className="flex items-center gap-6 max-w-4xl w-full mb-8">
        {/* Normal Employee Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-6"
        >
          <span className="text-4xl mb-3 block">👷</span>
          <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-mono">Normal Employee</span>
          <h3 className="text-lg font-heading font-bold text-[#191918] mt-2 mb-2">Does what you tell them</h3>
          <p className="text-[#6B6B65] font-body text-sm leading-relaxed">
            Needs training. Works fixed hours. Takes leave. Makes mistakes. Asks for a raise.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="uppercase tracking-widest text-[#6B6B65] text-xs font-mono whitespace-nowrap"
        >
          BUT AI IS DIFFERENT
        </motion.span>

        {/* AI Employee Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex-1 bg-[#EDE8E0] border border-[#DDD8CE] border-t-4 border-t-[#DA7756] rounded-xl p-6"
        >
          <span className="text-4xl mb-3 block">🤖</span>
          <span className="text-xs uppercase tracking-widest text-[#6B6B65] font-mono">AI Employee</span>
          <h3 className="text-lg font-heading font-bold text-[#191918] mt-2 mb-2">Does what you tell them — and more</h3>
          <p className="text-[#6B6B65] font-body text-sm leading-relaxed">
            No training needed. Works 24/7. Never takes leave. Never complains. Gets smarter every year.
          </p>
        </motion.div>
      </div>

      {/* Superpower pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex gap-3 mb-8"
      >
        {superpowers.map((sp, i) => (
          <span
            key={i}
            className="bg-[#DA7756]/10 text-[#DA7756] px-3 py-1.5 rounded-full text-sm font-medium"
          >
            {sp}
          </span>
        ))}
      </motion.div>

      {/* Kannada closing */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="text-center"
      >
        <p className="text-[#191918] font-body text-lg">
          Biggest Technological revolution is happening as we speak
        </p>
      </motion.div>
    </div>
  );
}
