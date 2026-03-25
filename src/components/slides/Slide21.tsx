"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "🗺️", text: "Bengaluru zone bubble map — glowing, interactive" },
  { emoji: "📈", text: "Daily revenue trend — 90 day animated line chart" },
  { emoji: "🍛", text: "Top dishes by revenue — horizontal bar chart" },
  { emoji: "📱", text: "Platform split — Swiggy / Zomato / Direct / Instagram" },
  { emoji: "⏰", text: "Orders by hour — peak hour highlighted" },
];

const promptSnippet = `Read koramangala_transactions.json.
Build D3.js dashboard with zone map,
charts, KPIs...`;

const fullPrompt = `Read koramangala_transactions.json in subfolder "ecommerce".
Build D3.js dashboard with:
- KPIs: Revenue, Delivered Orders, AOV,
  Cancellation Rate (all animated count-up)
- Animated daily revenue line chart — 90 day view
- Koramangala zone bubble map — each zone as glowing
  bubble sized by order count, hover tooltip
- Top dishes horizontal bar chart
- Platform split donut (Swiggy/Zomato/Direct/Instagram)
- Orders by hour bar chart — highlight peak hour
- Zone breakdown table — sorted by revenue
Dark terminal theme #0D1117, yellow #FFB800 accent.
Save as cloud_kitchen_dashboard.html`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Slide21() {
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
            Spice Route · 1,792 Orders · 90 Days
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Cloud Kitchen Dashboard
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="text-6xl">🍳</motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-3 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            Koramangala 5th Block&ensp;·&ensp;9 delivery zones&ensp;·&ensp;₹6,37,949 revenue&ensp;·&ensp;D3.js animated
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
            1,792 transactions. Zone map. Animated D3.js.
            <br />
            ಒಂದು prompt. 3 minutes. Data scientist ₹50,000/month. Cowork ₹2,000/month.
          </p>
          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
