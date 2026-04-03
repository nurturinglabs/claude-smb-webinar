"use client";

import { motion } from "framer-motion";

const bullets = [
  {
    kn: "Install ಬೇಡ. App ಬೇಡ. ಮಾತಾಡಿ.",
    en: "Open browser, start talking. That's it.",
  },
  {
    kn: "ಕನ್ನಡದಲ್ಲಿ ಕೇಳಿ — ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರ.",
    en: "Ask in Kannada — get answers in Kannada.",
  },
  {
    kn: "Business, legal, content — ಎಲ್ಲಾ ಒಂದೇ ಕಡೆ.",
    en: "Every business question. One place.",
  },
];

const claudePoints = [
  "Invoices read ಮಾಡುತ್ತೆ — vendor bills scan ಮಾಡಿ data extract ಮಾಡುತ್ತೆ",
  "Expiry track ಮಾಡುತ್ತೆ — medicines expire ಆಗೋ ಮೊದಲು alert ಕೊಡುತ್ತೆ",
  "Customer queries answer — medicine ಬಗ್ಗೆ questions ಗೆ reply draft ಮಾಡುತ್ತೆ",
];

function TypingDots() {
  return (
    <div className="flex gap-1.5 items-center">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{ width: 7, height: 7, background: "rgba(217,119,87,0.5)" }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay }}
        />
      ))}
    </div>
  );
}

export default function Slide37() {
  return (
    <div className="h-screen w-full flex" style={{ background: "#05101F" }}>
      {/* Left column */}
      <div className="w-1/2 flex flex-col justify-center" style={{ padding: "56px 40px 56px 64px" }}>
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold uppercase text-[#D97757] block mb-5"
          style={{ fontSize: 15, letterSpacing: "0.22em" }}
        >
          Claude Chat — ಮೊದಲ ಹೆಜ್ಜೆ
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-3"
          style={{ fontSize: 52, lineHeight: 1.2 }}
        >
          <span className="text-white font-heading font-extrabold">Claude Chat</span>
          <br />
          <span className="font-kannada font-bold" style={{ color: "#D97757" }}>ಅಂದ್ರೆ ಏನು?</span>
        </motion.h1>

        {/* 3 bullet points */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col gap-4 mb-0"
        >
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-3.5">
              <div className="rounded-full bg-[#D97757] flex-shrink-0 mt-2" style={{ width: 8, height: 8 }} />
              <div>
                <p className="font-kannada font-semibold text-white" style={{ fontSize: 20 }}>
                  {b.kn}
                </p>
                <p className="font-body italic" style={{ fontSize: 15, color: "rgba(255,255,255,0.35)" }}>
                  {b.en}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="my-7"
          style={{ width: 48, height: 2, background: "#D97757", opacity: 0.5 }}
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center gap-3.5"
        >
          <span
            className="font-heading font-bold text-[#FAF9F5] rounded-lg"
            style={{ fontSize: 14, padding: "10px 24px", background: "#D97757" }}
          >
            claude.ai
          </span>
        </motion.div>
      </div>

      {/* Right column — Chat window */}
      <div className="w-1/2 flex items-center justify-center" style={{ padding: "40px 48px 40px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
          style={{
            maxWidth: 480,
            background: "#0D1F35",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center gap-2.5"
            style={{
              background: "#141F2E",
              padding: "14px 18px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full bg-[#D97757] font-heading font-extrabold text-white"
              style={{ width: 32, height: 32, fontSize: 13 }}
            >
              C
            </div>
            <span className="font-heading font-bold text-white" style={{ fontSize: 14 }}>Claude</span>
            <div className="flex items-center gap-1.5 ml-auto">
              <div className="rounded-full bg-[#788C5D]" style={{ width: 6, height: 6 }} />
              <span className="font-heading" style={{ fontSize: 11, color: "#788C5D" }}>
                Online · Ready to help
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-4" style={{ padding: "20px 18px" }}>
            {/* User message 1 */}
            <div className="flex justify-end">
              <div style={{
                background: "#D97757",
                borderRadius: "16px 16px 4px 16px",
                padding: "12px 16px",
                maxWidth: "85%",
              }}>
                <span className="font-heading font-bold uppercase block mb-1" style={{ fontSize: 10, color: "rgba(250,249,245,0.6)" }}>You</span>
                <p className="font-kannada font-medium text-[#FAF9F5]" style={{ fontSize: 14 }}>
                  ನನ್ನ pharmacy ಗೆ AI ಹೇಗೆ help ಮಾಡುತ್ತೆ?
                </p>
              </div>
            </div>

            {/* Claude message */}
            <div className="flex gap-2.5">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0 font-heading font-extrabold"
                style={{
                  width: 28, height: 28,
                  background: "#141F2E",
                  border: "1px solid rgba(217,119,87,0.4)",
                  color: "#D97757", fontSize: 12,
                }}
              >
                ✦
              </div>
              <div style={{
                background: "#162438",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px 16px 16px 16px",
                padding: "14px 16px",
                maxWidth: "90%",
              }}>
                <span className="font-heading font-bold uppercase block mb-1.5" style={{ fontSize: 10, color: "rgba(217,119,87,0.7)" }}>Claude</span>
                <p className="font-kannada mb-2.5" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                  ನಿಮ್ಮ pharmacy ಗೆ 3 ರೀತಿ help ಮಾಡ್ತೇನೆ:
                </p>
                <div className="flex flex-col gap-2">
                  {claudePoints.map((pt, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="font-heading font-bold text-[#D97757] flex-shrink-0" style={{ fontSize: 11, width: 16 }}>
                        {i + 1}.
                      </span>
                      <span className="font-kannada" style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User message 2 */}
            <div className="flex justify-end">
              <div style={{
                background: "rgba(217,119,87,0.2)",
                border: "1px solid rgba(217,119,87,0.3)",
                borderRadius: "16px 16px 4px 16px",
                padding: "10px 14px",
                maxWidth: "80%",
              }}>
                <p className="font-kannada" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                  Kannada ನಲ್ಲಿ ಮಾತಾಡ್ತೀಯಾ? 😊
                </p>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="flex gap-2.5 items-center">
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0 font-heading font-extrabold"
                style={{
                  width: 28, height: 28,
                  background: "#141F2E",
                  border: "1px solid rgba(217,119,87,0.4)",
                  color: "#D97757", fontSize: 12,
                }}
              >
                ✦
              </div>
              <div style={{
                background: "#162438",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "4px 12px 12px 12px",
                padding: "10px 16px",
              }}>
                <TypingDots />
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div
            className="flex items-center gap-2.5"
            style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="flex-1 font-kannada"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "9px 14px",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              ನಿಮ್ಮ question ಇಲ್ಲಿ type ಮಾಡಿ...
            </div>
            <div
              className="flex items-center justify-center bg-[#D97757] text-[#FAF9F5]"
              style={{ width: 36, height: 36, borderRadius: 8, fontSize: 16 }}
            >
              →
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
