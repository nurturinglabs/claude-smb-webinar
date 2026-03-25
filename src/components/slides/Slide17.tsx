"use client";

import { motion } from "framer-motion";
import CopyPrompt from "../CopyPrompt";

const bullets = [
  { emoji: "🚨", text: "Color-coded urgency dashboard (yellow / orange / red)" },
  { emoji: "📱", text: "17 personalised WhatsApp reminders in Kannada" },
  { emoji: "💳", text: "UPI ID included in every message" },
  { emoji: "📝", text: "Recovery action plan — who to call first" },
];

const promptSnippet = `Read payments_register.csv in subfolder
"overdue". Do 3 things: dashboard,
reminders, action plan...`;

const fullPrompt = `Read payments_register.csv in subfolder "overdue".
Do 3 things:
TASK 1: Build HTML dashboard — color coded urgency
table (yellow/orange/red borders by overdue weeks),
KPIs, horizontal bar chart of top balances.
TASK 2: Draft WhatsApp reminder in Kannada for every
customer with balance > 0 — polite, personalised,
mention name + amount + days + UPI: mundebanni@upi
TASK 3: Write recovery action plan — who to call
first, at-risk customers, prevention recommendation.
Save as: overdue_payments_march2026.html,
overdue_reminders_march2026.txt,
payment_summary_march2026.txt`;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Slide17() {
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
            Vegetable Wholesaler · ₹91,230 Outstanding
          </span>
          <h1 className="text-3xl font-bold font-heading text-[#191918] text-center">
            Overdue Payment Tracker
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="text-6xl">💸</motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-[#EDE8E0] rounded-xl px-6 py-3 text-center max-w-lg"
        >
          <p className="text-sm font-body text-[#191918]">
            payments_register.csv&ensp;·&ensp;17 customers&ensp;·&ensp;₹91,230 stuck&ensp;·&ensp;3 outputs from 1 prompt
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
            17 messages. Kannada. Personalised.
            <br />
            ₹91,230 recover ಮಾಡೋ chance — ಒಂದು prompt ಮೂಲಕ.
          </p>
          <CopyPrompt snippet={promptSnippet} fullPrompt={fullPrompt} />
        </motion.div>
      </motion.div>
    </div>
  );
}
