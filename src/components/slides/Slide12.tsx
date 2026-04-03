"use client";

import { motion } from "framer-motion";

const bullets = [
  {
    kn: "ನಿಮ್ಮ files ನೇರವಾಗಿ read ಮಾಡುತ್ತೆ.",
    en: "Works directly on your invoices, CSVs, PDFs.",
  },
  {
    kn: "ನೀವು ಇಲ್ಲದೇ ಇದ್ರೂ ಕೆಲಸ ಮಾಡುತ್ತೆ.",
    en: "Walk away. Come back to finished work.",
  },
  {
    kn: "ಒಮ್ಮೆ set ಮಾಡಿ — ಪ್ರತಿ ವಾರ automatically run ಆಗುತ್ತೆ.",
    en: "Schedule once — runs every week on its own.",
  },
];

const doneSteps = [
  "scan_0012.pdf — read complete",
  "WhatsApp Image 3952.pdf — read complete",
  "25 invoices extracted — ₹4,82,340 total",
];

function PulsingDot() {
  return (
    <motion.div
      className="rounded-full bg-[#788C5D]"
      style={{ width: 6, height: 6 }}
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}

function Spinner() {
  return (
    <motion.div
      className="rounded-full"
      style={{
        width: 10,
        height: 10,
        border: "1.5px solid rgba(217,119,87,0.3)",
        borderTopColor: "#D97757",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}

function BlinkIcon() {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-heading font-bold"
      style={{
        width: 18,
        height: 18,
        background: "rgba(217,119,87,0.2)",
        color: "#D97757",
        fontSize: 9,
      }}
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      ▶
    </motion.div>
  );
}

export default function Slide12() {
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
          Claude Cowork — ನಿಮ್ಮ AI Agent
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-3"
          style={{ fontSize: 52, lineHeight: 1.2 }}
        >
          <span className="text-white font-heading font-extrabold">Claude Cowork</span>
          <br />
          <span className="font-kannada font-bold" style={{ color: "#D97757" }}>ಅಂದ್ರೆ ಏನು?</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-kannada italic mb-7"
          style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}
        >
          ನೀವು ಹೇಳಿ. Claude ಮಾಡುತ್ತೆ.
          <br />
          ನೀವು ಬೇರೆ ಕೆಲಸ ಮಾಡಿ.
        </motion.p>

        {/* Comparison row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex mb-6"
        >
          {/* Chat cell */}
          <div
            className="flex-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px 0 0 8px",
              padding: "10px 14px",
            }}
          >
            <span
              className="block font-heading font-bold uppercase"
              style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em" }}
            >
              Claude Chat
            </span>
            <span className="font-kannada" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
              ನೀವು ಕೇಳ್ತೀರಿ — Claude ಉತ್ತರ ಕೊಡುತ್ತೆ
            </span>
          </div>
          {/* Arrow */}
          <div
            className="flex items-center justify-center font-heading font-bold text-[#D97757]"
            style={{
              background: "rgba(217,119,87,0.15)",
              borderTop: "1px solid rgba(217,119,87,0.2)",
              borderBottom: "1px solid rgba(217,119,87,0.2)",
              padding: "10px 8px",
              fontSize: 13,
            }}
          >
            →
          </div>
          {/* Cowork cell */}
          <div
            className="flex-1"
            style={{
              background: "rgba(217,119,87,0.08)",
              border: "1px solid rgba(217,119,87,0.25)",
              borderRadius: "0 8px 8px 0",
              padding: "10px 14px",
            }}
          >
            <span
              className="block font-heading font-bold uppercase"
              style={{ fontSize: 11, color: "rgba(217,119,87,0.6)", letterSpacing: "0.15em" }}
            >
              Claude Cowork
            </span>
            <span className="font-kannada font-semibold text-white" style={{ fontSize: 13 }}>
              ನೀವು delegate ಮಾಡ್ತೀರಿ — Claude execute ಮಾಡುತ್ತೆ
            </span>
          </div>
        </motion.div>

        {/* Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-col gap-3.5 mb-7"
        >
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-3">
              <div className="rounded-full bg-[#D97757] flex-shrink-0 mt-2" style={{ width: 8, height: 8 }} />
              <div>
                <p className="font-kannada font-semibold text-white" style={{ fontSize: 20 }}>{b.kn}</p>
                <p className="font-body italic" style={{ fontSize: 14, color: "rgba(255,255,255,0.3)" }}>{b.en}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-6"
          style={{ width: 48, height: 2, background: "#D97757", opacity: 0.5 }}
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-3.5"
        >
          <span
            className="font-heading font-bold text-[#FAF9F5] rounded-lg"
            style={{ fontSize: 13, padding: "9px 22px", background: "#D97757" }}
          >
            Claude Desktop
          </span>
          <span className="font-body italic" style={{ fontSize: 14, color: "rgba(255,255,255,0.3)" }}>
            Download free · Pro plan required
          </span>
        </motion.div>
      </div>

      {/* Right column — Cowork window */}
      <div className="w-1/2 flex items-center justify-center" style={{ padding: "40px 48px 40px 20px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
          style={{
            maxWidth: 490,
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
              padding: "12px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="flex items-center justify-center font-heading font-extrabold text-[#FAF9F5]"
              style={{ width: 28, height: 28, background: "#D97757", borderRadius: 6, fontSize: 12 }}
            >
              ✦
            </div>
            <div>
              <div className="font-heading font-bold text-white" style={{ fontSize: 13 }}>Claude Cowork</div>
              <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>vegetable-wholesaler</div>
            </div>
            <div className="flex items-center gap-1.5 ml-auto">
              <PulsingDot />
              <span className="font-heading font-semibold" style={{ fontSize: 10, color: "#788C5D" }}>Working...</span>
            </div>
          </div>

          {/* Task input area */}
          <div style={{ padding: "16px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <span
              className="block font-heading font-bold uppercase mb-2"
              style={{ fontSize: 11, color: "rgba(217,119,87,0.6)", letterSpacing: "0.15em" }}
            >
              Your task
            </span>
            <div
              style={{
                background: "rgba(217,119,87,0.1)",
                border: "1px solid rgba(217,119,87,0.25)",
                borderRadius: 10,
                padding: "12px 14px",
              }}
            >
              <p className="font-kannada font-medium text-white" style={{ fontSize: 13, lineHeight: 1.7 }}>
                invoices_demo folder ನಲ್ಲಿರೋ 25 PDF invoices read ಮಾಡಿ. Vendor name, date, amount extract ಮಾಡಿ. HTML dashboard build ಮಾಡಿ — KPIs, charts, table ಸಮೇತ. vendor_dashboard.html ಆಗಿ save ಮಾಡಿ.
              </p>
            </div>
          </div>

          {/* Working area */}
          <div style={{ padding: "16px 18px" }}>
            {/* Working label */}
            <div className="flex items-center gap-1.5 mb-3">
              <Spinner />
              <span
                className="font-heading font-bold uppercase"
                style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
              >
                Claude is working
              </span>
            </div>

            {/* Progress steps */}
            <div className="flex flex-col gap-2 mb-3">
              {/* Done steps */}
              {doneSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 rounded-lg"
                  style={{
                    background: "rgba(120,140,93,0.08)",
                    border: "1px solid rgba(120,140,93,0.15)",
                    padding: "8px 12px",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full font-heading font-bold"
                    style={{ width: 18, height: 18, background: "rgba(120,140,93,0.2)", color: "#788C5D", fontSize: 9 }}
                  >
                    ✓
                  </div>
                  <span className="font-mono" style={{ fontSize: 11, color: "#788C5D" }}>{step}</span>
                </div>
              ))}

              {/* Active step */}
              <div
                className="flex items-center gap-2.5 rounded-lg"
                style={{
                  background: "rgba(217,119,87,0.08)",
                  border: "1px solid rgba(217,119,87,0.2)",
                  padding: "8px 12px",
                }}
              >
                <BlinkIcon />
                <span className="font-mono" style={{ fontSize: 11, color: "#D97757" }}>Building HTML dashboard...</span>
              </div>

              {/* Pending step */}
              <div
                className="flex items-center gap-2.5 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  padding: "8px 12px",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full font-heading font-bold"
                  style={{ width: 18, height: 18, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.2)", fontSize: 9 }}
                >
                  ○
                </div>
                <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Save as vendor_dashboard.html</span>
              </div>
            </div>

            {/* Output card */}
            <div
              className="flex items-center gap-2.5 rounded-[10px]"
              style={{
                background: "rgba(120,140,93,0.08)",
                border: "1px solid rgba(120,140,93,0.2)",
                padding: "12px 14px",
              }}
            >
              <span style={{ fontSize: 16, color: "#788C5D" }}>✓</span>
              <div className="min-w-0">
                <div className="font-mono font-medium" style={{ fontSize: 12, color: "#788C5D" }}>vendor_dashboard_march2026.html</div>
                <div className="font-kannada" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>ಸಿದ್ಧ — browser ನಲ್ಲಿ open ಮಾಡಿ</div>
              </div>
              <span className="font-mono ml-auto" style={{ fontSize: 10, color: "rgba(120,140,93,0.6)" }}>2 min</span>
            </div>
          </div>

          {/* Footer */}
          <div
            className="flex justify-between"
            style={{ padding: "10px 18px", borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>
              invoices_demo/ · 25 files · 4.2MB
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
