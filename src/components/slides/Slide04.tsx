"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Ask anything",
    titleKn: "ಏನು ಬೇಕಾದರೂ ಕೇಳಿ",
    desc: "Legal questions, business advice, tax queries, HR decisions",
  },
  {
    title: "Create anything",
    titleKn: "ಏನು ಬೇಕಾದರೂ ಮಾಡಲು ಹೇಳಿ",
    desc: "Emails, posts, menus, reports, plans, presentations",
  },
  {
    title: "Analyse anything",
    titleKn: "ಏನು ಬೇಕಾದರೂ analyse ಮಾಡಲು ಹೇಳಿ",
    desc: "Invoices, sales data, reviews, customer patterns, payments",
  },
];

export default function Slide04() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-heading font-bold text-[#191918] mb-2 text-center"
      >
        Meet Claude
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-lg text-[#6B6B65] font-body mb-8 text-center"
      >
        Made by Anthropic · claude.ai
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg text-[#6B6B65] font-body max-w-2xl text-center mb-10 leading-relaxed"
      >
        Claude is a Brain AI — made by Anthropic. You talk to it like a person.
        It understands. It thinks. It responds. In Kannada, English, or both.
      </motion.p>

      <div className="flex gap-5 max-w-4xl w-full mb-6">
        {capabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 + i * 0.15 }}
            className="flex-1 bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-5 text-center"
          >
            <h3 className="font-heading font-bold text-[#191918] text-lg mb-1">{cap.title}</h3>
            <p className="text-[#DA7756] text-sm font-kannada mb-2">{cap.titleKn}</p>
            <p className="text-[#6B6B65] font-body text-sm leading-relaxed">{cap.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex gap-4 mt-6"
      >
        <div className="border border-[#DDD8CE] rounded-full px-5 py-2.5 text-[#191918] font-body text-sm">
          Claude Chat → claude.ai (free to start, browser)
        </div>
        <div className="bg-[#DA7756] rounded-full px-5 py-2.5 text-white font-body text-sm font-medium">
          Claude Cowork → Claude Desktop app (₹2,000/month)
        </div>
      </motion.div>

    </div>
  );
}
