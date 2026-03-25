"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "💰", text: "Total Revenue, Best Month, Top Customer, Top Vegetable" },
  { emoji: "📈", text: "Monthly revenue trend line chart" },
  { emoji: "👥", text: "Top 10 customers by purchase value" },
  { emoji: "🥕", text: "Revenue split by vegetable" },
  { emoji: "💡", text: "Business insights + recommendation" },
];

const promptSnippet = `Read all PDF sales reports in subfolder
"sales_demo". Build HTML dashboard...`;

const fullPrompt = `Read all PDF sales reports in subfolder "sales_demo".
Extract: month, customer, vegetable, qty, rate, total.
Build HTML dashboard with:
- KPIs: Total Revenue, Best Month,
  Top Customer, Top Vegetable
- Line chart: Monthly revenue trend
- Bar chart: Top 10 customers by value
- Donut: Revenue split by vegetable
- Insights: top customers, at-risk customers,
  one business recommendation
- Monthly summary table with % change vs prev month
Save as sales_analytics_march2026.html`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Slide16() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#FAF9F7] px-12 py-8 overflow-hidden">
      <motion.div
        className="flex flex-col items-center gap-5 max-w-3xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <span className="bg-[#DA7756] text-white rounded-full px-4 py-1 text-xs font-body tracking-wide">
            Vegetable Wholesaler · 6 Monthly PDFs
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            6 Month Sales Analytics
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="text-6xl">📊</motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-3 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            sales_demo/&ensp;·&ensp;Oct 2025 to Mar 2026&ensp;·&ensp;25 customers&ensp;·&ensp;10 vegetables
          </p>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-3 w-full max-w-lg"
        >
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex items-center gap-3 bg-white/80 border border-[#DDD8CE] rounded-lg p-3${
                i === bullets.length - 1 ? " col-span-2 justify-center" : ""
              }`}
            >
              <span className="text-xl flex-shrink-0">{b.emoji}</span>
              <span className="text-sm font-body text-[#191918]">{b.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex items-end justify-between w-full max-w-3xl mt-3"
        >
          <p className="text-sm font-kannada text-[#6B6B65] max-w-sm leading-relaxed">
            Accountant ಕೆಲಸ. Cowork ಮಾಡ್ತೆ. ₹2,000/month.
          </p>
          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
