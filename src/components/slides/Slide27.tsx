"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const pills = [
  "AI Learning Consultant",
  "AI Consultant",
  "Custom Tool Builder",
  "AI Learning Lab",
];

export default function Slide27() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="h-screen w-full flex flex-col items-center justify-center bg-[#141413] px-8"
    >
      {/* Tag */}
      <motion.span
        variants={fadeUp}
        className="text-[#DA7756] text-sm font-heading font-semibold uppercase tracking-[0.2em] mb-4"
      >
        AI ನಿಂದ Business ಮಾಡಬಹುದು
      </motion.span>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="text-5xl md:text-[48px] font-heading font-extrabold text-white mb-4 text-center"
      >
        4 Ideas. ₹0 Investment.
      </motion.h1>

      {/* Sub */}
      <motion.p
        variants={fadeUp}
        className="font-body italic text-[#B0AEA5] text-xl mb-6 text-center"
      >
        Starting this week.
      </motion.p>

      {/* Divider */}
      <motion.div
        variants={fadeUp}
        className="w-20 h-px bg-white/10 mb-6"
      />

      {/* Muted line */}
      <motion.p
        variants={fadeUp}
        className="text-base text-[#B0AEA5] font-body italic text-center max-w-lg mb-8 leading-relaxed"
      >
        Every idea here came from what you told us
        <br />
        in the registration form.
      </motion.p>

      {/* Idea pills */}
      <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
        {pills.map((pill, i) => (
          <span
            key={i}
            className="border border-white/30 rounded-full px-5 py-2.5 text-sm text-[#B0AEA5] font-body"
          >
            {pill}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
