"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const cards = [
  {
    label: "01 · Ideal Client",
    title: "Exactly who to target",
    body: "Owner-operated pharmacy, 5–20 years old, 2–5 staff. Paper register = your signal.",
    kannada: false,
  },
  {
    label: "02 · WhatsApp Message",
    title: "53 words · Ready to send",
    body: "ನಮಸ್ಕಾರ ಸರ್ — expiry tracking ಮತ್ತು billing ಗೆ AI ಹೇಗೆ help ಮಾಡುತ್ತೆ ಅಂತ 30 min free demo ಕೊಡ್ತೀನಿ. Interested ಆದ್ರೆ reply ಮಾಡಿ.",
    kannada: true,
  },
  {
    label: "03 · Meeting Questions",
    title: "3 questions that open doors",
    body: "What takes most time daily? Has expired medicine caused problems? What system do you use for stock?",
    kannada: false,
  },
  {
    label: "04 · First 5 Minutes",
    title: "What to demo to win trust",
    body: "Ask Claude about pharmacy problems. Owner nods — they feel seen. Upload one invoice. Extract data in 10 seconds. Stop talking. Let silence work.",
    kannada: false,
  },
];

const promptText = `I am an AI consultant in Bengaluru. I want to
approach small pharmacy owners in Jayanagar
as my first clients.

Help me:
1. Define exactly who my ideal client is
2. Write a WhatsApp outreach message in Kannada
   (under 60 words, friendly, mentions one pain point)
3. Give me 3 questions to ask in the first meeting
4. Tell me what to demonstrate in the first 5 minutes
   to win their trust`;

export default function Slide34() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="h-screen w-full flex flex-col items-center justify-center px-10 py-8 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#B0AEA5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.25,
          zIndex: 1,
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* Top section */}
        <motion.div variants={fadeUp} className="flex flex-col items-center mb-3">
          <span
            className="font-heading font-bold uppercase text-[#D97757] mb-2"
            style={{ fontSize: 11, letterSpacing: "0.18em" }}
          >
            Demo 1 · Claude Chat
          </span>
          <span
            className="inline-block bg-[#FEF3EE] text-[#D97757] text-sm font-heading font-semibold px-4 py-1 rounded-full mb-3"
          >
            For: Aspiring Consultants · Freelancers
          </span>
          <h1 className="text-[36px] font-heading font-extrabold text-[#141413] text-center mb-1">
            Demo — Find Your First Client with AI
          </h1>
          <p className="font-body italic text-xl text-[#B0AEA5] text-center">
            Your complete sales playbook — in one prompt.
          </p>
        </motion.div>

        {/* Prompt block */}
        <motion.div variants={fadeUp} className="w-full mb-4">
          <span
            className="block font-heading font-semibold text-xs text-[#B0AEA5] uppercase mb-2"
            style={{ letterSpacing: "0.15em" }}
          >
            LIVE PROMPT — paste into claude.ai
          </span>
          <div
            className="rounded-[10px] p-5"
            style={{ background: "#141413" }}
          >
            <pre
              className="font-mono text-[15px] text-[#FAF9F5] whitespace-pre-wrap"
              style={{ lineHeight: 1.8 }}
            >
              {promptText}
            </pre>
          </div>
        </motion.div>

        {/* Output cards — 2x2 */}
        <div className="grid grid-cols-2 gap-3 w-full mb-3">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white border border-[#E8E6DC] rounded-[10px]"
              style={{
                borderTopWidth: 3,
                borderTopColor: "#D97757",
                padding: "16px 18px",
              }}
            >
              <span
                className="font-heading font-bold uppercase text-[#D97757] block mb-1"
                style={{ fontSize: 11 }}
              >
                {card.label}
              </span>
              <p className="font-heading font-semibold text-[15px] text-[#141413] mb-1.5">
                {card.title}
              </p>
              <p
                className={`${card.kannada ? "font-kannada font-semibold text-[#141413]" : "font-body italic text-[#B0AEA5]"} text-[13px]`}
                style={{ lineHeight: 1.7 }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="w-full rounded-lg flex justify-between items-center mb-3"
          style={{ background: "#141413", padding: "16px 22px" }}
        >
          <span className="font-body italic text-sm text-[#FAF9F5]">
            30 minutes of prep. Walk in like a pro.
          </span>
          <span className="font-mono text-xs text-[#D97757]">
            Claude · ~8 seconds
          </span>
        </motion.div>

        {/* Kannada narration */}
        <motion.p
          variants={fadeUp}
          className="font-body italic text-sm text-[#B0AEA5] text-center"
        >
          ಒಂದು prompt. Ideal client, Kannada message, meeting questions, demo script — ಎಲ್ಲಾ ready.
          Manually ಮಾಡಿದ್ರೆ 2 days. Claude ಗೆ 8 seconds.
        </motion.p>
      </div>
    </motion.div>
  );
}
