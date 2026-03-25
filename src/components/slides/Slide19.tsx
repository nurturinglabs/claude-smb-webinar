"use client";

import { motion } from "framer-motion";

const agents = [
  {
    id: "01",
    title: "Invoice Analyst",
    strikethrough: "Accountant",
    cost: "\u20B915,000/mo",
    color: "#DA7756",
  },
  {
    id: "02",
    title: "Sales Analyst",
    strikethrough: "Data Analyst",
    cost: "\u20B920,000/mo",
    color: "#DA7756",
  },
  {
    id: "03",
    title: "Payment Tracker",
    strikethrough: "Collections Staff",
    cost: "\u20B910,000/mo",
    color: "#DA7756",
  },
];

export default function Slide19() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-heading font-bold text-[#191918] mb-2 text-center"
      >
        Your AI Workforce
      </motion.h1>
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="inline-block px-5 py-1.5 rounded-full bg-[#DA7756] text-white font-mono text-sm font-semibold mb-10"
      >
        Vegetable Wholesaler — Bengaluru
      </motion.span>

      <div className="flex gap-5 max-w-5xl w-full mb-10">
        {agents.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            className="flex-1 bg-[#EDE8E0] rounded-xl p-6 text-center overflow-hidden"
            style={{ borderTop: `4px solid ${agent.color}` }}
          >
            <span className="text-[#6B6B65] font-mono text-xs">Agent {agent.id}</span>
            <h3 className="text-[#DA7756] font-heading font-bold text-lg mt-2 mb-2">{agent.title}</h3>
            <motion.p
              initial={{ textDecorationColor: "transparent" }}
              animate={{ textDecorationColor: "#6B6B65" }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              className="text-[#6B6B65] font-body text-sm line-through decoration-2"
            >
              {agent.strikethrough}
            </motion.p>
            <p className="text-[#6B6B65]/60 font-mono text-xs mt-3">{agent.cost}</p>
          </motion.div>
        ))}

        {/* Add more card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex-1 rounded-xl p-6 text-center border-2 border-dashed border-[#DDD8CE] flex flex-col items-center justify-center"
        >
          <span className="text-[#DA7756] text-3xl mb-2">+</span>
          <h3 className="text-[#191918] font-heading font-semibold text-base mb-3">What&apos;s next?</h3>
          <div className="space-y-1">
            <p className="text-[#6B6B65] font-body text-xs">Reviews Agent</p>
            <p className="text-[#6B6B65] font-body text-xs">Social Media Agent</p>
            <p className="text-[#6B6B65] font-body text-xs">HR Screener</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex items-center justify-between w-full max-w-5xl"
      >
        <p className="text-[#6B6B65] font-body text-base">
          {"\u20B9"}45,000/month of roles {"\u00B7"} replaced by 3 agents
        </p>
        <span className="px-6 py-2 rounded-full bg-[#191918] border border-[#191918] text-white font-mono text-sm font-semibold">
          Your cost: {"\u20B9"}2,000/month
        </span>
      </motion.div>
    </div>
  );
}
