"use client";

import { motion } from "framer-motion";

const bulletPoints = [
  "ಪ್ರತಿ task ಗೂ business context ಮತ್ತೆ ಮತ್ತೆ ಹೇಳಬೇಕಿಲ್ಲ",
  "Claude ನಿಮ್ಮ customers, vendors, workflow ತಿಳಿದಿರುತ್ತೆ",
  "ಒಂದು project — ಎಲ್ಲಾ demos ಒಂದೇ ಕಡೆ",
];

const previewLines = [
  { text: "Business: Vegetable Wholesaler", color: "#D97757" },
  { text: "Location: APMC Yard, Bengaluru", color: "#D97757" },
  { text: "Customers: 25 retail stores", color: "#B0AEA5" },
  { text: "Revenue: ₹8–12L/month", color: "#B0AEA5" },
  { text: "Language: Kannada + English", color: "#788C5D" },
  { text: "Output: Anthropic theme HTML", color: "#788C5D" },
];

export default function Slide13() {
  return (
    <div className="h-screen w-full flex relative overflow-hidden">
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

      {/* Left column */}
      <div className="w-1/2 flex flex-col justify-center relative z-10" style={{ padding: "56px 40px 56px 64px" }}>
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold uppercase text-[#D97757] block mb-5"
          style={{ fontSize: 15, letterSpacing: "0.22em" }}
        >
          Claude Cowork — Project Setup
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-kannada font-bold text-[#141413] mb-2"
          style={{ fontSize: 36, lineHeight: 1.25 }}
        >
          ಒಂದು ಸಾರಿ <span className="text-[#D97757]">setup</span> —
          <br />
          ಮತ್ತೆ ಮಾಡಬೇಕಿಲ್ಲ
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body italic mb-9"
          style={{ fontSize: 15, color: "#B0AEA5", lineHeight: 1.7 }}
        >
          Tell Claude about your business once.
          <br />
          It remembers forever — every task, every session.
        </motion.p>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col gap-3 mb-9"
        >
          {bulletPoints.map((pt, i) => (
            <div key={i} className="flex gap-3">
              <div className="rounded-full bg-[#D97757] flex-shrink-0 mt-2" style={{ width: 6, height: 6 }} />
              <p className="font-kannada" style={{ fontSize: 14, color: "#141413", lineHeight: 1.6 }}>{pt}</p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-6"
          style={{ width: 48, height: 2, background: "#D97757", opacity: 0.5 }}
        />

        {/* Big Kannada quote */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="font-kannada font-bold"
          style={{ fontSize: 18, color: "#141413", lineHeight: 1.7 }}
        >
          ಒಂದು ಸಾರಿ business ಬಗ್ಗೆ ಹೇಳಿ —
          <br />
          <span className="text-[#D97757]">ಮತ್ತೆ ಹೇಳಬೇಕಿಲ್ಲ.</span>
        </motion.p>
      </div>

      {/* Right column — Setup card */}
      <div className="w-1/2 flex items-center justify-center relative z-10" style={{ padding: "48px 56px 48px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
          style={{
            maxWidth: 480,
            background: "#FFFFFF",
            borderRadius: 16,
            border: "1px solid #E8E6DC",
            overflow: "hidden",
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center gap-3"
            style={{ background: "#F5F4F0", padding: "16px 24px", borderBottom: "1px solid #E8E6DC" }}
          >
            <div
              className="flex items-center justify-center font-heading font-extrabold text-[#FAF9F5]"
              style={{ width: 36, height: 36, background: "#D97757", borderRadius: 8, fontSize: 15 }}
            >
              ✦
            </div>
            <div>
              <div className="font-heading font-bold text-[#141413]" style={{ fontSize: 15 }}>Cowork Project Setup</div>
              <div className="font-mono" style={{ fontSize: 11, color: "#B0AEA5" }}>Vegetable Wholesaler — Bengaluru</div>
            </div>
          </div>

          {/* Steps area */}
          <div style={{ padding: "24px 24px 20px" }}>
            {/* Step 1 */}
            <div className="flex">
              <div className="flex flex-col items-center" style={{ width: 40 }}>
                <div className="flex items-center justify-center rounded-full font-heading font-extrabold text-[#FAF9F5]" style={{ width: 32, height: 32, background: "#D97757", fontSize: 13 }}>1</div>
                <div className="flex-1" style={{ width: 2, background: "#E8E6DC", margin: "4px 0" }} />
              </div>
              <div className="flex-1 pb-5" style={{ paddingLeft: 14 }}>
                <span className="block font-heading font-bold uppercase text-[#B0AEA5] mb-1.5" style={{ fontSize: 10, letterSpacing: "0.15em" }}>Create Project</span>
                <div className="bg-[#FAF9F5] border border-[#E8E6DC] rounded-[10px]" style={{ padding: "14px 16px" }}>
                  <div className="font-heading font-bold text-[#141413]" style={{ fontSize: 14 }}>New Cowork Project</div>
                  <div className="font-mono font-medium text-[#D97757]" style={{ fontSize: 12 }}>vegetable-wholesaler</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex">
              <div className="flex flex-col items-center" style={{ width: 40 }}>
                <div className="flex items-center justify-center rounded-full font-heading font-extrabold text-[#FAF9F5]" style={{ width: 32, height: 32, background: "#D97757", fontSize: 13 }}>2</div>
                <div className="flex-1" style={{ width: 2, background: "#E8E6DC", margin: "4px 0" }} />
              </div>
              <div className="flex-1 pb-5" style={{ paddingLeft: 14 }}>
                <span className="block font-heading font-bold uppercase text-[#B0AEA5] mb-1.5" style={{ fontSize: 10, letterSpacing: "0.15em" }}>Paste Global Instructions</span>
                <div className="rounded-[10px]" style={{ background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.3)", borderLeft: "3px solid #D97757", padding: "14px 16px" }}>
                  <div className="font-heading font-bold text-[#141413] mb-2" style={{ fontSize: 14 }}>Business Context</div>
                  <div className="bg-white border border-[#E8E6DC] rounded-md" style={{ padding: "10px 12px" }}>
                    {previewLines.map((line, i) => (
                      <div key={i} className="font-mono" style={{ fontSize: 11, lineHeight: 1.7, color: line.color }}>{line.text}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="flex flex-col items-center" style={{ width: 40 }}>
                <div className="flex items-center justify-center rounded-full font-heading font-extrabold text-[#FAF9F5]" style={{ width: 32, height: 32, background: "#D97757", fontSize: 13 }}>3</div>
              </div>
              <div className="flex-1" style={{ paddingLeft: 14 }}>
                <span className="block font-heading font-bold uppercase text-[#B0AEA5] mb-1.5" style={{ fontSize: 10, letterSpacing: "0.15em" }}>Connect Folder</span>
                <div className="bg-[#FAF9F5] border border-[#E8E6DC] rounded-[10px]" style={{ padding: "14px 16px" }}>
                  <div className="font-heading font-bold text-[#141413]" style={{ fontSize: 14 }}>Ready to work</div>
                  <div className="font-mono" style={{ fontSize: 12, color: "#B0AEA5" }}>
                    invoices_demo/ · sales_demo/
                    <br />
                    overdue/ · ecommerce/
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card footer */}
          <div
            className="flex items-center gap-2.5"
            style={{ background: "#FEF3EE", borderTop: "1px solid rgba(217,119,87,0.2)", padding: "14px 24px" }}
          >
            <span style={{ fontSize: 14, color: "#D97757" }}>✓</span>
            <span className="font-kannada font-semibold text-[#141413]" style={{ fontSize: 13 }}>
              ಒಂದು ಸಾರಿ business ಬಗ್ಗೆ ಹೇಳಿ — ಮತ್ತೆ ಹೇಳಬೇಕಿಲ್ಲ
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
