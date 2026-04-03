"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const tracks = [
  {
    emoji: "🎓",
    label: "Track 01",
    labelColor: "#DA7756",
    borderColor: "#DA7756",
    title: "Students",
    age: "Age 12–22",
    duration: "3 months",
    durationBg: "#FEF3EE",
    durationColor: "#DA7756",
    goal: "Build with AI. Get first client.",
    fee: "₹20,000",
    feeSub: "per student",
  },
  {
    emoji: "💼",
    label: "Track 02",
    labelColor: "#B0AEA5",
    borderColor: "#B0AEA5",
    title: "Professionals",
    age: "Age 25–50",
    duration: "4 weeks",
    durationBg: "#F5F4F0",
    durationColor: "#B0AEA5",
    goal: "Use AI at work and in business.",
    fee: "₹6,500",
    feeSub: "per person",
  },
  {
    emoji: "🧘",
    label: "Track 03",
    labelColor: "#788C5D",
    borderColor: "#788C5D",
    title: "Seniors",
    age: "Age 55+",
    duration: "4 sessions",
    durationBg: "#EDF3E8",
    durationColor: "#788C5D",
    goal: "Claude in Kannada for daily life.",
    fee: "₹2,500",
    feeSub: "per person",
  },
];

export default function Slide30() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="h-screen w-full flex flex-col items-center justify-center px-8 py-10 relative"
    >
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#B0AEA5 1px, transparent 1px)`,
          backgroundSize: `28px 28px`,
          opacity: 0.25,
          zIndex: 1,
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* Tag pill */}
        <motion.span
          variants={fadeUp}
          className="inline-block bg-[#FEF3EE] text-[#DA7756] text-sm font-heading font-semibold px-5 py-2 rounded-full mb-4"
        >
          Idea 04 · The Biggest Opportunity
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-[34px] font-heading font-extrabold text-[#141413] text-center mb-2"
        >
          AI Learning Lab
        </motion.h2>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="font-body italic text-base text-[#B0AEA5] text-center mb-2"
        >
          Karnataka&apos;s missing AI education layer.
        </motion.p>

        {/* Gap statement */}
        <motion.p
          variants={fadeUp}
          className="font-heading font-medium text-base text-[#141413] text-center mb-6"
        >
          &ldquo;AI ಕಲಿಯೋಕೆ ಎಲ್ಲಿ ಹೋಗಬೇಕು?&rdquo; — ಈ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರ ಇಲ್ಲ ಇನ್ನೂ.
        </motion.p>

        {/* Three track cards */}
        <motion.div variants={fadeUp} className="flex gap-4 w-full mb-6">
          {tracks.map((t, i) => (
            <div
              key={i}
              className="flex-1 bg-white border border-[#E8E6DC] rounded-xl p-5"
              style={{ borderTopWidth: 3, borderTopColor: t.borderColor }}
            >
              <div className="text-4xl mb-2">{t.emoji}</div>
              <span
                className="text-xs uppercase font-heading font-semibold tracking-wide block mb-1"
                style={{ color: t.labelColor }}
              >
                {t.label}
              </span>
              <h3 className="font-heading font-bold text-lg text-[#141413] mb-0.5">
                {t.title}
              </h3>
              <p className="text-sm text-[#B0AEA5] mb-2">{t.age}</p>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-heading font-medium mb-2"
                style={{ backgroundColor: t.durationBg, color: t.durationColor }}
              >
                {t.duration}
              </span>
              <p className="font-body italic text-sm text-[#B0AEA5] mt-2 leading-relaxed">
                {t.goal}
              </p>
              <div className="mt-3">
                <div className="font-heading font-bold text-xl text-[#141413]">{t.fee}</div>
                <div className="text-xs text-[#B0AEA5]">{t.feeSub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom dark revenue bar */}
        <motion.div
          variants={fadeUp}
          className="w-full bg-[#141413] rounded-xl p-4 flex items-center justify-between"
        >
          <div>
            <div className="text-white text-sm font-heading">1 lab · 1 city</div>
            <div className="text-[#DA7756] text-2xl font-heading font-bold">₹34 lakh/year</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-white text-sm font-body">Scale to 5 cities</div>
            <div className="text-[#DA7756] text-xl font-heading font-bold">₹1.7 crore/year</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-right">
            <div className="text-white text-sm font-body">Minimum to start</div>
            <div className="text-[#788C5D] text-lg font-heading font-semibold">₹50,000 (BYOD)</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
