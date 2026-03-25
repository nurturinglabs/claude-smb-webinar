"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "📄", text: "25 messy PDFs — WhatsApp scans, scanner dumps" },
  { emoji: "📊", text: "4 KPI cards: Total Spend, Invoices, Top Category, Biggest Vendor" },
  { emoji: "🍩", text: "Donut chart: Spend by Category" },
  { emoji: "📈", text: "Bar chart: Monthly trend Oct 2025 – Mar 2026" },
  { emoji: "📋", text: "Sortable invoice table" },
];

const promptSnippet = `Read all PDF invoices inside subfolder
"invoices_demo". Build HTML dashboard...`;

const fullPrompt = `Read all PDF invoices inside subfolder "invoices_demo".
For each extract: vendor name, date, category,
total amount (Grand Total).
Build HTML dashboard with:
- 4 KPI cards: Total Spend, No. of Invoices,
  Top Category, Biggest Vendor
- Donut chart: Spend by Category
- Bar chart: Monthly trend Oct 2025 to Mar 2026
- Sortable invoice table
Save as vendor_dashboard_march2026.html`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Slide15() {
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
            Vegetable Wholesaler · 25 Vendor PDFs
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Vendor Invoice Dashboard
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="text-6xl">🧾</motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-3 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            scan_0012.pdf&ensp;·&ensp;WhatsApp Image 3952.pdf&ensp;·&ensp;New Doc 6068.pdf&ensp;·&ensp;...
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
            ಮಾಲೀಕರು ಚಹಾ ಕುಡೀತಿದ್ದಾರೆ. Cowork ಕೆಲಸ ಮಾಡ್ತಿದೆ.
          </p>
          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
