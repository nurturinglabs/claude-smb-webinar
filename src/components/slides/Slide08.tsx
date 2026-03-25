"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "🔍", text: "Find top 3 pain areas" },
  { emoji: "💡", text: "Suggest AI-powered solutions" },
  { emoji: "🏪", text: "Estimate market size" },
  { emoji: "💵", text: "Price & build time" },
];

const promptSnippet = `Search Google reviews about ladies
boutiques in Sahakarnagar, Bengaluru...`;

const fullPrompt = `Search Google reviews and complaints about ladies
boutiques in Sahakarnagar, Bengaluru.

Find the top 3 pain areas customers complain about most.

For each pain area:
- Describe the problem clearly
- Suggest one simple digital solution a freelancer
  can build using AI
- Estimate how many boutiques in Sahakarnagar
  would pay for this solution
- Suggested monthly price they would pay
- How long to build with Claude Code assistance`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0, 0, 0.2, 1] } },
};

export default function Slide08() {
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
            For: Freelancers
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Freelancer Market Research
          </h1>
        </motion.div>

        {/* Large Emoji */}
        <motion.div variants={fadeUp} className="text-6xl">
          🏪
        </motion.div>

        {/* Scenario Card */}
        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-4 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            Ladies boutiques in Sahakarnagar&ensp;·&ensp;Pain points&ensp;·&ensp;Digital solutions
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
            ಈ research ಮಾಡೋಕೆ normally 2 days. Claude ಗೆ 30 seconds.
            <br />
            Confident ಆಗಿ pitch ಮಾಡಿ.
          </p>

          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
