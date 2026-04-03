"use client";

import { motion } from "framer-motion";
import CopyButton from "../CopyButton";

const ingredients = [
  {
    num: "1",
    label: "Who you are",
    example: "I am an AI consultant in Bengaluru",
    tip: "Always set your role first",
  },
  {
    num: "2",
    label: "Your target",
    example: "Small pharmacy owners in Jayanagar",
    tip: "City + area + business type",
  },
  {
    num: "3",
    label: "Numbered asks",
    example: "1. Define... 2. Write... 3. Give...",
    tip: "One clear question per number",
  },
  {
    num: "4",
    label: "Format hint",
    example: "Under 60 words, in Kannada, friendly",
    tip: "Tell Claude how you want the output",
  },
];

export default function Slide35() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden">
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

      <div className="relative z-10 flex flex-col w-full h-full px-8 py-4">
        {/* Top: Tag + Title — compact */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="font-heading font-bold uppercase text-[#D97757]"
              style={{ fontSize: 12, letterSpacing: "0.18em" }}
            >
              Demo 1 · Claude Chat
            </span>
            <span className="inline-block bg-[#FEF3EE] text-[#D97757] text-sm font-heading font-semibold px-4 py-1 rounded-full">
              For: Aspiring Consultants · Freelancers
            </span>
          </div>
          <h1 className="text-[32px] font-heading font-extrabold text-[#141413] leading-tight">
            How to write a great research prompt
          </h1>
        </motion.div>

        {/* Main: Two columns */}
        <div className="flex gap-5 flex-1 min-h-0">
          {/* LEFT 40% — 4 cards + tip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
            style={{ width: "38%" }}
          >
            <p className="font-heading font-bold text-[15px] text-[#141413] mb-1">
              4 ingredients every research prompt needs:
            </p>

            {ingredients.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                className="bg-white border border-[#E8E6DC] rounded-xl flex items-start gap-3 flex-1"
                style={{ borderLeftWidth: 3, borderLeftColor: "#D97757", padding: "12px 14px" }}
              >
                <div
                  className="flex items-center justify-center rounded-full font-heading font-bold text-white flex-shrink-0 mt-0.5"
                  style={{ width: 28, height: 28, fontSize: 13, background: "#D97757" }}
                >
                  {card.num}
                </div>
                <div className="min-w-0">
                  <span
                    className="block font-heading font-bold uppercase text-[#D97757]"
                    style={{ fontSize: 12, letterSpacing: "0.1em" }}
                  >
                    {card.label}
                  </span>
                  <span className="block font-mono text-[13px] text-[#141413] mt-1 bg-[#F5F4F0] rounded px-2 py-0.5 inline-block">
                    {card.example}
                  </span>
                  <p className="font-body italic text-[12px] text-[#B0AEA5] mt-1">
                    {card.tip}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Tip bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="rounded-lg"
              style={{
                background: "#FEF3EE",
                border: "1px solid rgba(217,119,87,0.3)",
                padding: "10px 14px",
              }}
            >
              <p className="font-heading font-medium text-[13px] text-[#D97757] leading-relaxed">
                Vague in = vague out.
                <br />
                The more specific — the more useful.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT 60% — Two prompts stacked */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-3 flex-1 min-w-0"
          >
            {/* English prompt */}
            <div className="flex flex-col flex-1 min-h-0">
              <span
                className="block font-heading font-semibold text-xs text-[#B0AEA5] uppercase mb-1"
                style={{ letterSpacing: "0.15em" }}
              >
                ENGLISH PROMPT
              </span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"I am an AI consultant in Bengaluru.\nI want to approach small pharmacy owners in Jayanagar as my first clients.\n\nHelp me:\n1. Define exactly who my ideal client is\n2. Write a WhatsApp outreach message in Kannada (under 60 words, friendly, mentions one pain point)\n3. Give me 3 questions to ask in the first meeting\n4. Tell me what to demonstrate in the first 5 minutes to win their trust"} />
                <pre className="font-mono text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>I am an AI consultant in Bengaluru.</span>{"\n"}<span style={{ color: "#6A9BCC" }}>I want to approach small pharmacy owners in Jayanagar as my first clients.</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>Help me:{"\n"}1. Define exactly who my ideal client is{"\n"}2. Write a WhatsApp outreach message </span><span style={{ color: "#788C5D" }}>in Kannada</span><span style={{ color: "#FAF9F5" }}> (</span><span style={{ color: "#788C5D" }}>under 60 words</span><span style={{ color: "#FAF9F5" }}>, </span><span style={{ color: "#788C5D" }}>friendly</span><span style={{ color: "#FAF9F5" }}>, mentions one pain point){"\n"}3. Give me 3 questions to ask in the first meeting{"\n"}4. Tell me what to demonstrate in the first 5 minutes to win their trust</span>
                </pre>
              </div>
            </div>

            {/* Kannada prompt */}
            <div className="flex flex-col flex-1 min-h-0">
              <span
                className="block font-heading font-semibold text-xs text-[#D97757] uppercase mb-1"
                style={{ letterSpacing: "0.15em" }}
              >
                ಕನ್ನಡ PROMPT
              </span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಒಬ್ಬ AI ಸಲಹೆಗಾರ.\nಜಯನಗರದಲ್ಲಿ ಚಿಕ್ಕ ಮೆಡಿಕಲ್ ಅಂಗಡಿ ಮಾಲೀಕರನ್ನು ನನ್ನ ಮೊದಲ ಗ್ರಾಹಕರಾಗಿ ಸಂಪರ್ಕಿಸಬೇಕು.\n\nನನಗೆ ಸಹಾಯ ಮಾಡಿ:\n1. ನನ್ನ ಸೂಕ್ತ ಗ್ರಾಹಕ ಯಾರು ಅಂತ ನಿಖರವಾಗಿ ಹೇಳಿ\n2. ಕನ್ನಡದಲ್ಲಿ ಒಂದು ಸಂದೇಶ ಬರೆಯಿ (೬೦ ಪದಗಳ ಒಳಗೆ, ಸ್ನೇಹಪರವಾಗಿ, ಒಂದು ಸಮಸ್ಯೆ ಉಲ್ಲೇಖಿಸಿ)\n3. ಮೊದಲ ಭೇಟಿಯಲ್ಲಿ ಕೇಳಬೇಕಾದ ೩ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೊಡಿ\n4. ಮೊದಲ ೫ ನಿಮಿಷದಲ್ಲಿ ಏನು ತೋರಿಸಿದರೆ ನಂಬಿಕೆ ಬರುತ್ತೆ ಅಂತ ಹೇಳಿ"} />
                <pre className="font-kannada text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಒಬ್ಬ AI ಸಲಹೆಗಾರ.</span>{"\n"}<span style={{ color: "#6A9BCC" }}>ಜಯನಗರದಲ್ಲಿ ಚಿಕ್ಕ ಮೆಡಿಕಲ್ ಅಂಗಡಿ ಮಾಲೀಕರನ್ನು ನನ್ನ ಮೊದಲ ಗ್ರಾಹಕರಾಗಿ ಸಂಪರ್ಕಿಸಬೇಕು.</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>ನನಗೆ ಸಹಾಯ ಮಾಡಿ:{"\n"}1. ನನ್ನ ಸೂಕ್ತ ಗ್ರಾಹಕ ಯಾರು ಅಂತ ನಿಖರವಾಗಿ ಹೇಳಿ{"\n"}2. ಕನ್ನಡದಲ್ಲಿ ಒಂದು ಸಂದೇಶ ಬರೆಯಿ (</span><span style={{ color: "#788C5D" }}>೬೦ ಪದಗಳ ಒಳಗೆ</span><span style={{ color: "#FAF9F5" }}>, </span><span style={{ color: "#788C5D" }}>ಸ್ನೇಹಪರವಾಗಿ</span><span style={{ color: "#FAF9F5" }}>, ಒಂದು ಸಮಸ್ಯೆ ಉಲ್ಲೇಖಿಸಿ){"\n"}3. ಮೊದಲ ಭೇಟಿಯಲ್ಲಿ ಕೇಳಬೇಕಾದ ೩ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೊಡಿ{"\n"}4. ಮೊದಲ ೫ ನಿಮಿಷದಲ್ಲಿ ಏನು ತೋರಿಸಿದರೆ ನಂಬಿಕೆ ಬರುತ್ತೆ ಅಂತ ಹೇಳಿ</span>
                </pre>
              </div>
            </div>

            {/* Teaching note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="font-heading font-semibold text-[13px] text-[#D97757]">
                Claude ಗೆ perfect English ಬೇಕಿಲ್ಲ.
              </span>
              <span className="text-[#B0AEA5]">·</span>
              <span className="font-body italic text-[12px] text-[#B0AEA5]">
                Write how you speak — Claude understands.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
