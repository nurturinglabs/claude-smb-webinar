"use client";

import { motion } from "framer-motion";

const keywords = [
  "Invoices", "Sales", "Payments", "Reviews",
  "Reports", "Reminders", "Menus", "Schedules",
];

export default function Slide01() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-8 relative overflow-hidden">
      {/* Floating keyword pills in background */}
      {keywords.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.12, 0.12, 0],
            scale: [0.8, 1, 1, 0.9],
            y: [0, -20, -20, -40],
          }}
          transition={{
            duration: 6,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-[#DA7756] font-heading font-bold text-lg pointer-events-none select-none"
          style={{
            left: `${12 + (i % 4) * 22}%`,
            top: `${20 + Math.floor(i / 4) * 50}%`,
          }}
        >
          {word}
        </motion.span>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#DA7756] rounded-full px-5 py-1.5 mb-8"
      >
        <span className="text-white text-sm font-body tracking-wide">
          90-Minute Live Session
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-5xl md:text-7xl font-heading font-extrabold text-[#191918] text-center leading-tight relative z-10"
      >
        SuperPower
        <br />
        <span className="relative inline-block">
          for your Business
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute -bottom-2 left-0 w-full h-2 bg-[#DA7756] rounded-full origin-left"
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-xl text-[#6B6B65] mt-8 font-body text-center max-w-xl leading-relaxed"
      >
        How <span className="text-[#DA7756] font-semibold">Claude AI</span> can automate your business tasks
        — invoices, sales, payments, and more.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="flex gap-4 mt-10 items-center"
      >
        <div className="bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-[#6B6B65] font-body">Host</p>
          <p className="text-sm font-heading font-bold text-[#191918]">Munde Banni</p>
        </div>
        <div className="bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-[#6B6B65] font-body">Duration</p>
          <p className="text-sm font-heading font-bold text-[#191918]">90 min</p>
        </div>
        <div className="bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl px-5 py-3 text-center">
          <p className="text-xs text-[#6B6B65] font-body">Cost</p>
          <p className="text-sm font-heading font-bold text-[#DA7756]">Free</p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="text-sm text-[#6B6B65] font-body mt-6"
      >
        Claude Cowork for Small & Medium Businesses
      </motion.p>
    </div>
  );
}
