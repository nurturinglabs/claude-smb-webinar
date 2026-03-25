"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "🎯", text: "Is this a good idea?" },
  { emoji: "⚠️", text: "Top 3 risks" },
  { emoji: "📋", text: "Karnataka licences needed" },
  { emoji: "💰", text: "Pricing strategy" },
  { emoji: "📱", text: "Best sales channel" },
];

const promptSnippet = `I am thinking of starting a home-based
pickle and papad business in Bengaluru
targeting working women and NRI families...`;

const fullPrompt = `I am thinking of starting a home-based pickle and
papad business in Bengaluru targeting working women
and NRI families. I have ₹50,000 to invest.
Tell me:
1. Is this a good idea? Be honest.
2. What are the top 3 risks?
3. What licences do I need in Karnataka?
4. How should I price my products?
5. Where should I sell — Instagram, WhatsApp, or Swiggy?`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
};

export default function Slide07() {
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
            For: Aspiring Entrepreneurs
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Business Idea Validator
          </h1>
        </motion.div>

        {/* Large Emoji */}
        <motion.div variants={fadeUp} className="text-6xl">
          🥒
        </motion.div>

        {/* Scenario Card */}
        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-4 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            Home-based pickle &amp; papad business&ensp;·&ensp;Bengaluru&ensp;·&ensp;₹50,000 investment
          </p>
        </motion.div>

        {/* Visual Bullet Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-3 w-full max-w-lg"
        >
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-center gap-3 bg-white/80 border border-[#DDD8CE] rounded-lg p-3"
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
            Business consultant ₹5,000/hour. Claude — ₹2,000/month.
            <br />
            ನಿಮ್ಮ idea ಗೆ honest feedback ತಕ್ಷಣ.
          </p>

          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
