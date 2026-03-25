"use client";

import { motion } from "framer-motion";

const brainUseCases = [
  "Read invoices → build dashboards",
  "Analyse sales → find top customers",
  "Draft payment reminders in Kannada",
  "Write Instagram captions in 3 languages",
];

const voiceUseCases = [
  "Answer customer calls 24/7",
  "Take food orders over phone",
  "Handle school admission queries",
  "Follow up on unpaid dues by call",
];

const brainTools = [
  { name: "Claude · Today's demo", highlighted: true },
  { name: "ChatGPT", highlighted: false },
  { name: "Gemini", highlighted: false },
  { name: "Copilot", highlighted: false },
];

const voiceTools = [
  { name: "ElevenLabs", highlighted: false },
  { name: "Smallest AI", highlighted: true },
  { name: "Sarvam AI", highlighted: false },
  { name: "Bhashini", highlighted: false },
];

export default function Slide03() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-2 text-center"
      >
        Two superpowers. Every SMB use case covered.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-lg text-[#6B6B65] font-body mb-8 text-center"
      >
        Brain handles the desk work. Voice handles the phone work.
      </motion.p>

      <div className="flex gap-6 max-w-5xl w-full">
        {/* Brain AI Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-6"
        >
          <span className="text-4xl mb-3 block">🧠</span>
          <span className="text-xs uppercase tracking-widest text-[#DA7756] font-mono">Superpower 01</span>
          <h3 className="text-xl font-heading font-bold text-[#191918] mt-2 mb-2">Brain AI</h3>
          <p className="text-[#6B6B65] font-body text-sm leading-relaxed mb-4">
            Reads, writes, thinks, analyses and plans — everything you do at your desk.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {brainTools.map((tool, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tool.highlighted
                    ? "bg-[#DA7756] text-white"
                    : "border border-[#DDD8CE] text-[#6B6B65]"
                }`}
              >
                {tool.name}
              </span>
            ))}
          </div>
          <ul className="space-y-1.5">
            {brainUseCases.map((uc, i) => (
              <li key={i} className="text-sm font-body text-[#191918]/80 flex items-start gap-2">
                <span className="text-[#DA7756] font-bold">✓</span>
                {uc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Voice AI Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex-1 bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-6"
        >
          <span className="text-4xl mb-3 block">🎙️</span>
          <span className="text-xs uppercase tracking-widest text-[#DA7756] font-mono">Superpower 02</span>
          <h3 className="text-xl font-heading font-bold text-[#191918] mt-2 mb-2">Voice AI</h3>
          <p className="text-[#6B6B65] font-body text-sm leading-relaxed mb-4">
            Speaks and listens like a real human — handles every call, 24/7, never misses one.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {voiceTools.map((tool, i) => (
              <span
                key={i}
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  tool.highlighted
                    ? "bg-[#DA7756] text-white"
                    : "border border-[#DDD8CE] text-[#6B6B65]"
                }`}
              >
                {tool.name}
              </span>
            ))}
          </div>
          <ul className="space-y-1.5">
            {voiceUseCases.map((uc, i) => (
              <li key={i} className="text-sm font-body text-[#191918]/80 flex items-start gap-2">
                <span className="text-[#DA7756] font-bold">✓</span>
                {uc}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom dark banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-[#191918] text-white rounded-xl p-4 mt-6 max-w-5xl w-full flex items-center justify-between"
      >
        <span className="font-heading font-semibold text-base">
          Brain + Voice = A complete AI team for your business
        </span>
        <span className="text-white/60 italic font-body text-sm">
          ಇವತ್ತು Brain demo — Claude.
        </span>
      </motion.div>
    </div>
  );
}
