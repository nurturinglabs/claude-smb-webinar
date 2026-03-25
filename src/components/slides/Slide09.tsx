"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "🌍", text: "3 countries, 3 dishes" },
  { emoji: "🥘", text: "Ingredients available in Bengaluru" },
  { emoji: "👨‍🍳", text: "Chef tips for Indian kitchen" },
  { emoji: "🎨", text: "Beautiful HTML page output" },
];

const promptSnippet = `Give me 3 unique street food recipes
from 3 different countries...`;

const fullPrompt = `I run a small restaurant in Bengaluru that changes
its menu every week to surprise customers.

This week's theme is: Street Food from Around the World

Give me 3 unique street food recipes from
3 different countries that I can realistically
make in an Indian kitchen.

For each recipe include:
- Country and city it comes from
- Name of the dish in local language + English
- Key ingredients (available in Bengaluru)
- Step by step cooking instructions
- One sentence on why customers will love it
- Suggested selling price in ₹
- Chef's tips for an Indian kitchen
- One fun fact about this dish

Format as a beautiful self-contained HTML page with:
- Warm earthy theme — saffron, terracotta, cream
- Cards for each dish — click to open full recipe
- Google Fonts — Playfair Display + Lato
- Save as weekly_menu.html`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
};

export default function Slide09() {
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
            For: Restaurant Owners
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Weekly Menu Generator
          </h1>
        </motion.div>

        {/* Large Emoji */}
        <motion.div variants={fadeUp} className="text-6xl">
          🌮
        </motion.div>

        {/* Scenario Card */}
        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-4 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            Street Food from Around the World&ensp;·&ensp;3 countries&ensp;·&ensp;3 recipes&ensp;·&ensp;HTML output
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
            Chef ಗೆ ideas ಹುಡುಕೋಕೆ 2 hours. Claude ಗೆ 15 seconds.
          </p>

          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
