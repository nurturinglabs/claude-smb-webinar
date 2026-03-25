"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "🔍", text: "Scrape Google Reviews, MouthShut, ConsumerComplaints.in" },
  { emoji: "🏷️", text: "Categorise: Staff, Billing, Parking, Quality, Bags, Delivery" },
  { emoji: "📊", text: "Dashboard with KPIs, bar chart, donut chart, insights" },
  { emoji: "🔄", text: "/schedule — runs every Monday 8AM automatically" },
];

const promptSnippet = `Search web for DMart Bangalore reviews.
Build dashboard. Then /schedule to run
every Monday at 8AM...`;

const fullPrompt = `Search web for DMart Bangalore customer reviews
from last 30 days — Google Reviews, MouthShut,
ConsumerComplaints.in.
Categorise all complaints into:
Staff Behaviour, Billing, Parking, Product Quality,
Carry Bags, Online Delivery, Other.
Build HTML dashboard: KPIs, bar chart, donut chart,
insights section, sample complaints table.
Save as dmart_review_[today's date].html
Then type /schedule to run every Monday at 8AM.`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Slide22() {
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
            The Scheduled Task Showstopper
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Weekly Auto Review Analysis
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="text-6xl">🛒</motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-3 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            DMart Bengaluru&ensp;·&ensp;Live web search&ensp;·&ensp;No file needed&ensp;·&ensp;Auto-scheduled
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
              className="flex items-center gap-3 bg-white/80 border border-[#DDD8CE] rounded-lg p-3"
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
            ಪ್ರತಿ ವಾರ Monday 8AM ಗೆ automatically run ಆಗ್ತೆ.
            <br />
            Manager ಏನೂ ಮಾಡಬೇಕಿಲ್ಲ. Dashboard ready ಆಗಿರ್ತೆ.
          </p>
          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
