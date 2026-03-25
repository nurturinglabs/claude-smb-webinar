"use client";

import { motion } from "framer-motion";

const traditional = [
  { role: "Social Media Manager", cost: "₹15,000" },
  { role: "Bookkeeper", cost: "₹10,000" },
  { role: "Content Writer", cost: "₹12,000" },
  { role: "HR Screener", cost: "₹8,000" },
];

export default function Slide24() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-14 text-center"
      >
        What does this replace?
      </motion.h1>
      <div className="flex gap-8 max-w-4xl w-full mb-12">
        {/* Traditional */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 bg-[#EDE8E0] border border-[#DDD8CE] rounded-xl p-8"
        >
          <h3 className="font-heading font-semibold text-[#6B6B65] text-xl mb-6 text-center">Traditional</h3>
          <div className="space-y-4">
            {traditional.map((item, i) => (
              <div key={i} className="flex justify-between text-[#6B6B65] font-body text-lg">
                <span>{item.role}</span>
                <span>{item.cost}</span>
              </div>
            ))}
            <div className="border-t border-[#DDD8CE] pt-4 flex justify-between font-heading font-bold text-xl">
              <span className="text-[#6B6B65]">Total</span>
              <span className="text-[#6B6B65] line-through">₹45,000/month</span>
            </div>
          </div>
        </motion.div>
        {/* Claude */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 bg-[#DA7756] border-2 border-[#DA7756] rounded-xl p-8 flex flex-col items-center justify-center"
        >
          <h3 className="font-heading font-semibold text-white text-xl mb-6">Claude</h3>
          <p className="text-white font-heading font-bold text-5xl mb-2">₹2,000</p>
          <p className="text-white/80 font-body text-lg">/month</p>
          <p className="text-white font-mono text-sm mt-4">Claude Pro Plan</p>
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-2xl font-heading font-semibold text-[#DA7756] text-center"
      >
        One subscription. All four roles. ₹2,000/month.
      </motion.p>
    </div>
  );
}
