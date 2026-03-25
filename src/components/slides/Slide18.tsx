"use client";

import { motion } from "framer-motion";

const checks = [
  {
    before: "25 messy invoices",
    after: "CFO-level spend dashboard",
    time: "2 minutes",
    beforeTime: "2 hours of manual entry",
  },
  {
    before: "6 months sales data",
    after: "Revenue insights + recommendations",
    time: "3 minutes",
    beforeTime: "No visibility at all",
  },
  {
    before: "\u20B991,230 stuck with 17 customers",
    after: "Dashboard + 17 personalised Kannada WhatsApp reminders",
    time: "2 minutes",
    beforeTime: "Awkward phone calls, no follow-up",
  },
];

export default function Slide18() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-heading font-bold text-[#191918] mb-2 text-center"
      >
        One business. Three demos. Look what changed.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-[#DA7756] font-body mb-10 text-center"
      >
        Vegetable Wholesaler — Bengaluru
      </motion.p>

      <div className="w-full max-w-4xl space-y-4 mb-8">
        {checks.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
            className="bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-5"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#DA7756] text-2xl flex-shrink-0 mt-0.5">{"\u2705"}</span>
              <div className="flex-1">
                <p className="text-[#191918] font-body text-base">
                  <span className="text-[#6B6B65]">{item.before}</span>
                  <span className="text-[#DA7756] mx-2">{"\u2192"}</span>
                  <span className="font-semibold">{item.after}</span>
                </p>
                <p className="text-[#6B6B65] font-mono text-xs mt-1">
                  Time: {item.time} | Before: {item.beforeTime}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Totals box */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="w-full max-w-4xl border-2 border-[#DA7756] rounded-xl p-6 bg-[#FAF9F7] mb-8"
      >
        <div className="flex justify-around text-center">
          <div>
            <p className="text-[#DA7756] font-heading font-bold text-2xl">~4 hours</p>
            <p className="text-[#6B6B65] font-body text-sm">Time saved per week</p>
          </div>
          <div>
            <p className="text-[#DA7756] font-heading font-bold text-2xl">{"\u20B9"}91,230</p>
            <p className="text-[#6B6B65] font-body text-sm">Money at risk now tracked</p>
          </div>
          <div>
            <p className="text-[#DA7756] font-heading font-bold text-2xl">0</p>
            <p className="text-[#6B6B65] font-body text-sm">Staff needed</p>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-xl font-heading font-semibold text-[#DA7756] text-center"
      >
        Coding {"\u0C87\u0CB2\u0CCD\u0CB2"}. Excel {"\u0C87\u0CB2\u0CCD\u0CB2"}. {"\u20B9"}2,000/month.
      </motion.p>
    </div>
  );
}
