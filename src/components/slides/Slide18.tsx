"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "~4 hrs", label: "saved every week", color: "#D97757" },
  { value: "₹91,230", label: "now being tracked", color: "#D97757" },
  { value: "0", label: "extra staff needed", color: "#788C5D" },
];

const demos = [
  {
    label: "Demo 1 · Vendor Invoices",
    before: "25 messy PDF invoices in a folder",
    afterText: "CFO-level ",
    afterHighlight: "spend dashboard",
    afterTime: "2 min",
    beforeTime: "2 hrs",
    beforeTimeLabel: "manual before",
    insightMain: "Total spend · Top vendor · Category breakdown · Monthly trend",
    insightKn: "ಎಲ್ಲಾ automatically — zero manual entry",
    delay: 0.3,
  },
  {
    label: "Demo 2 · Sales Analytics",
    before: "6 monthly sales PDFs, no visibility",
    afterText: "Revenue insights + ",
    afterHighlight: "business recommendations",
    afterTime: "3 min",
    beforeTime: "Never",
    beforeTimeLabel: "done before",
    insightMain: "Top customers · At-risk accounts · What to do next month",
    insightKn: "Accountant ಕೆಲಸ — Claude ಮಾಡುತ್ತೆ",
    delay: 0.45,
  },
  {
    label: "Demo 3 · Payment Recovery",
    before: "₹91,230 stuck, awkward phone calls",
    afterText: "Dashboard + ",
    afterHighlight: "17 Kannada reminders",
    afterTime: "4 min",
    beforeTime: "No system",
    beforeTimeLabel: "no follow-up",
    insightMain: "Personalised · Polite · In Kannada · Ready to send",
    insightKn: "17 customers — 17 messages — ಒಂದು prompt",
    delay: 0.6,
  },
];

const crossedItems = ["Coding", "Excel", "Extra staff", "Manual entry"];

export default function Slide18() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden" style={{ background: "#05101F" }}>
      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: "44px 60px 40px" }}>
        {/* Top header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <span className="block font-heading font-bold uppercase text-[#D97757] mb-2.5" style={{ fontSize: 15, letterSpacing: "0.2em" }}>
              Claude Cowork · Vegetable Wholesaler — Bengaluru
            </span>
            <h1 className="font-heading font-extrabold text-white" style={{ fontSize: 38, lineHeight: 1.1 }}>
              One business. Three demos.
              <br />
              <span className="text-[#D97757]">Look what changed.</span>
            </h1>
          </div>
          <div className="flex gap-2.5">
            {stats.map((s, i) => (
              <div key={i} className="rounded-[10px] text-center" style={{ padding: "12px 18px", minWidth: 110, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="font-mono font-semibold" style={{ fontSize: 22, color: s.color }}>{s.value}</div>
                <div className="font-body italic" style={{ fontSize: 11, lineHeight: 1.35, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Body grid */}
        <div className="grid grid-cols-3 gap-4 flex-1 min-h-0" style={{ alignItems: "stretch" }}>
          {demos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: d.delay }}
              className="rounded-[14px] overflow-hidden flex flex-col"
              style={{ background: "#0D1F35", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Card header */}
              <div style={{ padding: "16px 18px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="block font-heading font-bold uppercase mb-2" style={{ fontSize: 10, letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)" }}>{d.label}</span>
                <p className="font-body italic mb-1.5" style={{ fontSize: 13, lineHeight: 1.4, color: "rgba(255,255,255,0.4)" }}>{d.before}</p>
                <div className="flex items-center">
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                  <span className="font-heading font-bold text-[#D97757] mx-1" style={{ fontSize: 14 }}>→</span>
                  <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                </div>
                <p className="font-heading font-bold text-white mt-2" style={{ fontSize: 15, lineHeight: 1.35 }}>
                  {d.afterText}<span className="text-[#D97757]">{d.afterHighlight}</span>
                </p>
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-2.5 flex-1" style={{ padding: "14px 18px" }}>
                {/* Time compare */}
                <div className="flex gap-2">
                  <div className="flex-1 text-center rounded-lg" style={{ background: "rgba(217,119,87,0.1)", border: "1px solid rgba(217,119,87,0.2)", padding: "9px 10px" }}>
                    <div className="font-mono font-semibold text-[#D97757]" style={{ fontSize: 13, lineHeight: 1, marginBottom: 2 }}>{d.afterTime}</div>
                    <div className="font-body italic" style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>with Claude</div>
                  </div>
                  <div className="flex-1 text-center rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "9px 10px" }}>
                    <div className="font-mono font-semibold line-through" style={{ fontSize: 13, lineHeight: 1, marginBottom: 2, color: "rgba(255,255,255,0.25)" }}>{d.beforeTime}</div>
                    <div className="font-body italic" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{d.beforeTimeLabel}</div>
                  </div>
                </div>

                {/* Insight chip */}
                <div className="rounded-lg" style={{ padding: "9px 12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="font-heading font-medium text-white" style={{ fontSize: 12, lineHeight: 1.5 }}>{d.insightMain}</p>
                  <p className="font-kannada" style={{ fontSize: 11, marginTop: 3, lineHeight: 1.4, color: "rgba(255,255,255,0.35)" }}>{d.insightKn}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-between rounded-[10px] mt-4"
          style={{ background: "rgba(217,119,87,0.08)", border: "1px solid rgba(217,119,87,0.2)", padding: "16px 24px" }}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5">
              {crossedItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-full font-heading" style={{ width: 20, height: 20, background: "rgba(255,255,255,0.06)", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>✕</div>
                  <span className="font-heading line-through" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full font-heading font-bold text-[#FAF9F5]" style={{ width: 20, height: 20, background: "#D97757", fontSize: 10 }}>✓</div>
              <span className="font-heading font-semibold text-white" style={{ fontSize: 13 }}>3 prompts · ~9 minutes total</span>
            </div>
          </div>

          <div className="text-right">
            <p className="font-kannada font-bold text-white" style={{ fontSize: 17, lineHeight: 1.5 }}>
              Coding ಇಲ್ಲ. Excel ಇಲ್ಲ. <span className="text-[#D97757]">ಬರೀ Claude.</span>
            </p>
            <p className="font-body italic" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>No code. No spreadsheets. Just Claude.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
