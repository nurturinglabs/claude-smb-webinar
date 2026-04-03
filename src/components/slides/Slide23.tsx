"use client";

import { motion } from "framer-motion";

const bullets = [
  {
    kn: "Coding ಬೇಡ — describe ಮಾಡಿದ್ರೆ ಸಾಕು.",
    en: "No coding needed. Just describe what you want.",
  },
  {
    kn: "Website, app, tool — ಎಲ್ಲಾ build ಮಾಡುತ್ತೆ.",
    en: "Websites, dashboards, business tools — all of it.",
  },
  {
    kn: "ನೀವು ನೋಡ್ತಾ ಇರ್ತೀರಿ — files ತಾನಾಗಿ ತಯಾರಾಗುತ್ತೆ.",
    en: "Watch files appear in real time. Live on screen.",
  },
];

const doneFiles = [
  { file: "app/page.tsx", desc: "— registration form" },
  { file: "app/thank-you/page.tsx", desc: "— confirmation page" },
  { file: "app/dashboard/page.tsx", desc: "— live charts" },
];

function BlinkCursor() {
  return (
    <motion.div
      style={{ width: 8, height: 14, background: "#D97757" }}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    />
  );
}

function BlinkIcon() {
  return (
    <motion.span
      style={{ color: "#D97757", fontSize: 12 }}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    >
      ▶
    </motion.span>
  );
}

export default function Slide23() {
  return (
    <div className="h-screen w-full flex" style={{ background: "#05101F" }}>
      {/* Left column */}
      <div className="w-1/2 flex flex-col justify-center" style={{ padding: "56px 40px 56px 64px" }}>
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold uppercase text-[#D97757] block mb-5"
          style={{ fontSize: 15, letterSpacing: "0.22em" }}
        >
          Claude Code — Build ಮಾಡುವ ಶಕ್ತಿ
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-3"
          style={{ fontSize: 52, lineHeight: 1.2 }}
        >
          <span className="text-white font-heading font-extrabold">Claude Code</span>
          <br />
          <span className="font-kannada font-bold" style={{ color: "#D97757" }}>ಅಂದ್ರೆ ಏನು?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-kannada italic mb-7"
          style={{ fontSize: 20, color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}
        >
          ನೀವು idea ಹೇಳಿ.
          <br />
          Claude app build ಮಾಡುತ್ತೆ.
        </motion.p>

        {/* Comparison row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex mb-6"
        >
          <div className="flex-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px 0 0 8px", padding: "10px 14px" }}>
            <span className="block font-heading font-bold uppercase" style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em" }}>Claude Chat + Cowork</span>
            <span className="font-kannada" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>AI ನಿಮಗೆ help ಮಾಡುತ್ತೆ</span>
          </div>
          <div className="flex items-center justify-center font-heading font-bold text-[#D97757]" style={{ background: "rgba(217,119,87,0.15)", borderTop: "1px solid rgba(217,119,87,0.2)", borderBottom: "1px solid rgba(217,119,87,0.2)", padding: "10px 8px", fontSize: 13 }}>→</div>
          <div className="flex-1" style={{ background: "rgba(217,119,87,0.08)", border: "1px solid rgba(217,119,87,0.25)", borderRadius: "0 8px 8px 0", padding: "10px 14px" }}>
            <span className="block font-heading font-bold uppercase" style={{ fontSize: 11, color: "rgba(217,119,87,0.6)", letterSpacing: "0.15em" }}>Claude Code</span>
            <span className="font-kannada font-semibold text-white" style={{ fontSize: 13 }}>AI ನಿಮ್ಮ ಪರವಾಗಿ build ಮಾಡುತ್ತೆ</span>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-6"
          style={{ width: 48, height: 2, background: "#D97757", opacity: 0.5 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-3.5"
        >
          <span className="font-heading font-bold text-[#FAF9F5] rounded-lg" style={{ fontSize: 13, padding: "9px 22px", background: "#D97757" }}>Claude Code</span>
          <span className="font-body italic" style={{ fontSize: 14, color: "rgba(255,255,255,0.3)" }}>Terminal · Max plan required</span>
        </motion.div>
      </div>

      {/* Right column — Terminal */}
      <div className="w-1/2 flex items-center justify-center" style={{ padding: "40px 48px 40px 20px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
          style={{ maxWidth: 500, background: "#0A0E1A", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}
        >
          {/* Top bar */}
          <div className="flex items-center gap-2" style={{ background: "#141822", padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="rounded-full" style={{ width: 12, height: 12, background: "#FF5F57" }} />
            <div className="rounded-full" style={{ width: 12, height: 12, background: "#FFBD2E" }} />
            <div className="rounded-full" style={{ width: 12, height: 12, background: "#28C840" }} />
            <span className="font-mono mx-auto" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>claude — terminal</span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: "20px 20px 16px" }}>
            {/* Prompt line */}
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading font-semibold text-[#D97757]" style={{ fontSize: 13 }}>$</span>
              <span className="font-mono text-[#FAF9F5]" style={{ fontSize: 13 }}>claude</span>
              <BlinkCursor />
            </div>

            {/* Prompt input block */}
            <div className="mb-4" style={{ background: "rgba(217,119,87,0.08)", border: "1px solid rgba(217,119,87,0.2)", borderRadius: 8, padding: "12px 14px" }}>
              <span className="block font-mono uppercase mb-1.5" style={{ fontSize: 10, color: "rgba(217,119,87,0.6)", letterSpacing: "0.1em" }}>Your prompt</span>
              <p className="font-mono text-[#FAF9F5]" style={{ fontSize: 12, lineHeight: 1.7 }}>
                Build a <span className="text-[#D97757]">Next.js registration app</span> for a free Kannada AI webinar. Include: registration form, thank-you page, live dashboard with charts. Use Supabase. Deploy on Vercel.
              </p>
            </div>

            {/* Separator */}
            <div className="font-mono text-center mb-3.5" style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>
              ── Claude is building your app ──
            </div>

            {/* File steps */}
            <div className="flex flex-col gap-1.5 mb-4">
              {doneFiles.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5 font-mono" style={{ fontSize: 12 }}>
                  <span style={{ color: "#788C5D" }}>✓</span>
                  <span className="font-medium" style={{ color: "#788C5D" }}>{f.file}</span>
                  <span style={{ fontSize: 11, color: "rgba(120,140,93,0.5)" }}>{f.desc}</span>
                </div>
              ))}
              {/* Active */}
              <div className="flex items-center gap-2.5 font-mono" style={{ fontSize: 12 }}>
                <BlinkIcon />
                <span className="font-medium text-[#D97757]">lib/supabase.ts</span>
                <span style={{ fontSize: 11, color: "rgba(217,119,87,0.5)" }}>— database connection</span>
              </div>
              {/* Pending */}
              <div className="flex items-center gap-2.5 font-mono" style={{ fontSize: 12 }}>
                <span style={{ color: "rgba(255,255,255,0.15)" }}>○</span>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>package.json</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.1)" }}>— dependencies</span>
              </div>
            </div>

            {/* Run section */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-heading font-semibold" style={{ fontSize: 13, color: "#788C5D" }}>$</span>
                <span className="font-mono text-[#FAF9F5]" style={{ fontSize: 13 }}>npm run dev</span>
              </div>
              <div className="flex items-center justify-between" style={{ background: "rgba(120,140,93,0.08)", border: "1px solid rgba(120,140,93,0.2)", borderRadius: 8, padding: "10px 14px" }}>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold" style={{ fontSize: 13, color: "#788C5D" }}>✓</span>
                  <span className="font-mono" style={{ fontSize: 12, color: "#788C5D" }}>Ready</span>
                  <span className="font-mono" style={{ fontSize: 11, color: "rgba(120,140,93,0.5)" }}>· built in 8 minutes</span>
                </div>
                <span className="font-mono" style={{ fontSize: 11, color: "#D97757", background: "rgba(217,119,87,0.1)", border: "1px solid rgba(217,119,87,0.2)", borderRadius: 4, padding: "3px 10px" }}>localhost:3000</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
