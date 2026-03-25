"use client";

import { motion } from "framer-motion";

export default function Slide14() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-10 text-center"
      >
        Vegetable Wholesaler — Bengaluru
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-2xl bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-8 mb-8"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-[#DA7756]">Vegetable Wholesaler</h2>
          <p className="text-[#6B6B65] font-mono text-sm">
            APMC Yard, Yeshwanthpur, Bengaluru
          </p>
          <p className="text-[#191918] font-body text-base leading-relaxed mt-4">
            Supplies fresh vegetables to 25 retail stores and restaurants across Bengaluru every day.
            Solo owner. 2 helpers. 4AM to 2PM daily.
          </p>
        </div>

        {/* Pain point */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 p-5 rounded-lg border-l-4 border-[#DA7756] bg-[#FAF9F7]"
        >
          <p className="text-[#191918] font-body text-base leading-relaxed text-center">
            Calls 25 customers every 2 days to collect orders. Manually tracks invoices, payments, and sales.
            No data. No system. No time to grow.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-[#6B6B65] font-body text-lg text-center"
      >
        Sound familiar? This is most SMBs in India.
      </motion.p>
    </div>
  );
}
