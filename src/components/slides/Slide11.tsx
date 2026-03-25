"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "✅", text: "Honest idea validation" },
  { emoji: "📅", text: "Week-by-week 30-day plan" },
  { emoji: "🎯", text: "Day 1 — specific action" },
  { emoji: "⚠️", text: "3 mistakes to avoid" },
  { emoji: "🌙", text: "One thing to do TONIGHT" },
];

const promptSnippet = `I am thinking of starting a ladies
boutique in Sahakarnagar...`;

const fullPrompt = `I am thinking of starting a ladies boutique in
Sahakarnagar, Bengaluru.

I have ₹20,000 to invest.
I love fashion but have never run a business.
I am nervous about starting.

Give me:
1. Is this a good idea? Be honest.
2. My exact first 30 days — week by week
3. What to do on Day 1 — specifically
4. The 3 biggest mistakes to avoid
5. How much can I realistically earn
   in month 1, 3, and 6?
6. One thing I should do TODAY
   before I sleep tonight

Be direct, practical, and encouraging.
I need a push, not just information.`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Slide11() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12 py-8 overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-6 max-w-3xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Title + Pill */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <span className="bg-[#DA7756] text-white rounded-full px-4 py-1 text-xs font-body tracking-wide">
            For: Fence Sitters
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Your First 30 Days
          </h1>
        </motion.div>

        {/* Large Emoji */}
        <motion.div variants={fadeUp} className="text-6xl">
          🚀
        </motion.div>

        {/* Scenario Card */}
        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-4 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            Ladies boutique&ensp;·&ensp;Sahakarnagar&ensp;·&ensp;₹20,000&ensp;·&ensp;First-time entrepreneur
          </p>
        </motion.div>

        {/* Visual Bullet Grid — flowing layout for 5 items */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-3 w-full max-w-lg"
        >
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex items-center gap-3 bg-white/80 border border-[#DDD8CE] rounded-lg p-3${
                i === bullets.length - 1 ? " col-span-2 justify-center" : ""
              }`}
            >
              <span className="text-xl flex-shrink-0">{b.emoji}</span>
              <span className="text-sm font-body text-[#191918]">{b.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeUp}
          className="flex items-end justify-between w-full max-w-3xl mt-4"
        >
          {/* Narration */}
          <p className="text-sm font-kannada text-[#6B6B65] max-w-sm leading-relaxed">
            ಇನ್ನು ಕಾಯೋ ಕಾರಣ ಇಲ್ಲ. Claude ಹೇಳ್ತೆ — ಇವತ್ತೇ ಶುರು ಮಾಡಿ.
          </p>

          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
