"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "🎨", text: "Professional design theme" },
  { emoji: "✨", text: "Fade-in animations" },
  { emoji: "📝", text: "All event details included" },
  { emoji: "📱", text: "WhatsApp sharing ready" },
];

const promptSnippet = `Create a beautiful HTML flyer for a
free AI webinar...`;

const fullPrompt = `I am organising a free AI webinar for SMB owners
in Bengaluru called "AI for Your Business"
Date: Saturday April 12, 2026, 6PM IST
Platform: YouTube Live — Free to join
Host: Umesh — Data Engineer and AI Entrepreneur
Theme: How Claude AI can automate your business tasks

Create a beautiful single HTML flyer I can open
in browser and screenshot for WhatsApp sharing.

Design requirements:
- Dark Ocean Blue (#032A4A) and Chinese Yellow (#FFB800)
- Professional finance-meets-education aesthetic
- Business name: "Munde Banni AI Webinar Series"
- Kannada tagline: ಬರೀ ಮಾತಲ್ಲ — ಫಲಿತಾಂಶ ನೋಡಿ
- Show: Date, Time, Platform, Host name
- List 4-5 things attendees will learn
- Register button with placeholder link
- Fade-in animations on load`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Slide10() {
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
            For: Any Business
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Event Flyer in 30 Seconds
          </h1>
        </motion.div>

        {/* Large Emoji */}
        <motion.div variants={fadeUp} className="text-6xl">
          📢
        </motion.div>

        {/* Scenario Card */}
        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-4 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            AI Webinar flyer&ensp;·&ensp;April 12, 2026&ensp;·&ensp;YouTube Live&ensp;·&ensp;Screenshot-ready for WhatsApp
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
            Designer ₹2,000 + 2 days. Claude — 30 seconds.
            <br />
            Screenshot ತೆಗೆದು WhatsApp ಗೆ share ಮಾಡಿ.
          </p>

          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
