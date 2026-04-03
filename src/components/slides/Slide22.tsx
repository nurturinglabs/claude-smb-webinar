"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bullets = [
  { main: "Searches web for last 30 days of reviews", sub: "Google Reviews · MouthShut · ConsumerComplaints.in" },
  { main: "Categorises every complaint automatically", sub: "Staff · Billing · Parking · Product · Delivery · Other" },
  { main: "Builds a full review analytics dashboard", sub: "KPIs · Bar chart · Donut · Sample complaints table" },
];

const outputFiles = [
  { num: "1", file: "dmart_review_31-03-2026.html", desc: "dashboard" },
  { num: "2", file: "New file every Monday — auto-dated", desc: "always fresh" },
];

const legendItems = [
  { color: "#D97757", label: "Web search" },
  { color: "#6A9BCC", label: "Categorise" },
  { color: "#FAF9F5", label: "Build", border: true },
  { color: "#788C5D", label: "Save + schedule" },
];

const enPlain = `Search web for DMart Bangalore customer reviews — last 30 days.
Sources: Google Reviews, MouthShut, ConsumerComplaints.in

Categorise all complaints into:
Staff Behaviour, Billing, Parking, Product Quality, Online Delivery, Other.

Build HTML dashboard with:
- KPIs: Total reviews, avg rating, top complaint, worst week
- Bar chart: complaints by category
- Donut: sentiment split
- Sample complaints table
- 3 key insights + recommendations

Save as dmart_review_[today date].html
/schedule Monday 8AM`;

const knPlain = `DMart Bangalore ಕಸ್ಟಮರ್ reviews web ನಲ್ಲಿ search ಮಾಡಿ — last 30 days.
Sources: Google Reviews, MouthShut, ConsumerComplaints.in

ಎಲ್ಲಾ complaints ಇವುಗಳಲ್ಲಿ categorise ಮಾಡಿ:
Staff, Billing, Parking, Product Quality, Delivery, Other.

HTML dashboard ತಯಾರು ಮಾಡಿ:
- KPIs: Total reviews, avg rating, top complaint, worst week
- Bar chart: category wise complaints
- Donut: sentiment split
- Sample complaints table
- 3 key insights + recommendations

dmart_review_[today date].html save ಮಾಡಿ
/schedule Monday 8AM`;

function EnglishPrompt() {
  return (
    <pre className="font-mono whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.8 }}>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Search the web — no files needed\n"}</span><span style={{ color: "#D97757" }}>Search web for DMart Bangalore{"\n"}customer reviews — last 30 days.{"\n"}Sources: Google Reviews, MouthShut,{"\n"}ConsumerComplaints.in</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Categorise complaints\n"}</span><span style={{ color: "#6A9BCC" }}>Categorise all complaints into:{"\n"}Staff Behaviour, Billing, Parking,{"\n"}Product Quality, Online Delivery, Other.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Build dashboard\n"}</span><span style={{ color: "#FAF9F5" }}>Build HTML dashboard with:{"\n"}- KPIs: Total reviews, avg rating,{"\n"}  top complaint, worst week{"\n"}- Bar chart: complaints by category{"\n"}- Donut: sentiment split{"\n"}- Sample complaints table{"\n"}- 3 key insights + recommendations</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save + schedule\n"}</span><span style={{ color: "#788C5D" }}>Save as dmart_review_[today date].html{"\n"}/schedule Monday 8AM</span>
    </pre>
  );
}

function KannadaPrompt() {
  return (
    <pre className="font-kannada whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.8 }}>
      <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Web search — files ಬೇಡ\n"}</span><span style={{ color: "#D97757" }}>DMart Bangalore ಕಸ್ಟಮರ್ reviews{"\n"}web ನಲ್ಲಿ search ಮಾಡಿ — last 30 days.{"\n"}Sources: Google Reviews, MouthShut,{"\n"}ConsumerComplaints.in</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Complaints categorise ಮಾಡಿ\n"}</span><span style={{ color: "#6A9BCC" }}>ಎಲ್ಲಾ complaints ಇವುಗಳಲ್ಲಿ ಹಾಕಿ:{"\n"}Staff, Billing, Parking,{"\n"}Product Quality, Delivery, Other.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Dashboard build ಮಾಡಿ\n"}</span><span style={{ color: "#FAF9F5" }}>HTML dashboard ತಯಾರು ಮಾಡಿ:{"\n"}- KPIs: Total reviews, avg rating,{"\n"}  top complaint, worst week{"\n"}- Bar chart: category wise complaints{"\n"}- Donut: sentiment split{"\n"}- Sample complaints table{"\n"}- 3 key insights + recommendations</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save + schedule\n"}</span><span style={{ color: "#788C5D" }}>dmart_review_[today date].html{"\n"}save ಮಾಡಿ{"\n"}/schedule Monday 8AM</span>
    </pre>
  );
}

function PulsingDot() {
  return (
    <motion.div
      className="rounded-full bg-[#D97757] flex-shrink-0"
      style={{ width: 8, height: 8 }}
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}

export default function Slide22() {
  const [tab, setTab] = useState<"en" | "kn">("en");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tab === "en" ? enPlain : knPlain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const switchTab = (t: "en" | "kn") => {
    setTab(t);
    setCopied(false);
  };

  return (
    <div className="h-screen w-full flex relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#B0AEA5 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.25, zIndex: 1 }} />

      {/* Left column */}
      <div className="w-1/2 flex flex-col justify-center relative z-10" style={{ padding: "48px 40px 48px 64px" }}>
        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-heading font-bold uppercase text-[#D97757] block mb-2" style={{ fontSize: 15, letterSpacing: "0.22em" }}>
          Claude Cowork — More Examples
        </motion.span>

        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-heading font-semibold uppercase text-[#B0AEA5] block mb-4" style={{ fontSize: 11, letterSpacing: "0.15em" }}>
          Retail · Any business with public reviews
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="font-heading font-extrabold mb-1.5" style={{ fontSize: 32, lineHeight: 1.2 }}>
          <span className="text-[#141413]">Customer complaints →</span><br />
          <span className="text-[#D97757]">Weekly insight dashboard</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="font-body italic mb-5" style={{ fontSize: 15, color: "#B0AEA5" }}>
          No files. Claude searches the web — automatically.
        </motion.p>

        {/* Special badge */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="inline-flex items-center gap-2 mb-5 self-start" style={{ background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.3)", borderRadius: 8, padding: "8px 14px" }}>
          <PulsingDot />
          <span className="font-heading font-semibold text-[#D97757]" style={{ fontSize: 12 }}>No files needed — Claude reads the internet</span>
        </motion.div>

        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="font-heading font-bold uppercase text-[#B0AEA5] block mb-2.5" style={{ fontSize: 10, letterSpacing: "0.18em" }}>
          What Claude does every Monday 8AM
        </motion.span>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="flex flex-col gap-2 mb-5">
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-2.5">
              <div className="rounded-full bg-[#D97757] flex-shrink-0 mt-1.5" style={{ width: 6, height: 6 }} />
              <div>
                <p className="font-heading font-medium text-[#141413]" style={{ fontSize: 14 }}>{b.main}</p>
                <p className="font-body italic text-[#B0AEA5]" style={{ fontSize: 12, marginTop: 1 }}>{b.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Sources row */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="flex flex-wrap gap-2 mb-5">
          {["No CSV needed", "No PDF needed"].map((t, i) => (
            <span key={i} className="font-mono font-semibold rounded-md" style={{ fontSize: 11, padding: "5px 12px", background: "#F5F4F0", border: "1px solid #E8E6DC", color: "#B0AEA5" }}>{t}</span>
          ))}
          {["Web search only", "/schedule Monday 8AM"].map((t, i) => (
            <span key={i} className="font-mono font-semibold rounded-md" style={{ fontSize: 11, padding: "5px 12px", background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.25)", color: "#D97757" }}>{t}</span>
          ))}
        </motion.div>

        {/* Output chips */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex flex-col gap-1.5 mb-4">
          {outputFiles.map((f, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-[#F5F4F0] border border-[#E8E6DC] rounded-lg" style={{ padding: "8px 12px" }}>
              <div className="flex items-center justify-center rounded-full font-heading font-bold text-[#FAF9F5] flex-shrink-0" style={{ width: 20, height: 20, fontSize: 10, background: "#D97757" }}>{f.num}</div>
              <span className="font-mono font-medium text-[#141413]" style={{ fontSize: 11 }}>{f.file}</span>
              <span className="font-body italic text-[#B0AEA5] ml-auto" style={{ fontSize: 11 }}>{f.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* Benefit bar */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.85 }} className="bg-white border border-[#E8E6DC] rounded-r-lg" style={{ borderLeft: "3px solid #D97757", padding: "13px 18px" }}>
          <p className="font-heading font-bold text-[#141413]" style={{ fontSize: 15, marginBottom: 2 }}>Manager gets insights every Monday — zero effort</p>
          <p className="font-kannada text-[#B0AEA5]" style={{ fontSize: 13, lineHeight: 1.5 }}>ಪ್ರತಿ ವಾರ automatically run ಆಗುತ್ತೆ — ಏನೂ ಮಾಡಬೇಕಿಲ್ಲ</p>
        </motion.div>
      </div>

      {/* Right column */}
      <div className="w-1/2 flex items-center justify-center relative z-10" style={{ padding: "44px 52px 44px 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="w-full" style={{ maxWidth: 500 }}>
          <div className="flex items-center gap-2 mb-3">
            <PulsingDot />
            <span className="font-heading font-bold uppercase text-[#B0AEA5]" style={{ fontSize: 10, letterSpacing: "0.18em" }}>Live prompt — paste into Cowork</span>
          </div>

          <div className="flex">
            <button onClick={() => switchTab("en")} className="font-heading font-semibold transition-colors" style={{ fontSize: 12, padding: "8px 20px", borderRadius: "6px 6px 0 0", background: tab === "en" ? "#141413" : "#E8E6DC", color: tab === "en" ? "#FAF9F5" : "#B0AEA5", cursor: "pointer", border: "none" }}>English</button>
            <button onClick={() => switchTab("kn")} className="font-heading font-semibold transition-colors" style={{ fontSize: 12, padding: "8px 20px", borderRadius: "6px 6px 0 0", background: tab === "kn" ? "#141413" : "#E8E6DC", color: tab === "kn" ? "#FAF9F5" : "#B0AEA5", cursor: "pointer", border: "none" }}>ಕನ್ನಡ</button>
          </div>

          <div className="relative" style={{ background: "#141413", borderRadius: "0 8px 8px 8px", padding: "20px 22px", minHeight: 300 }}>
            <button onClick={handleCopy} className="absolute font-heading font-semibold transition-all" style={{ top: 12, right: 12, fontSize: 11, padding: "5px 12px", borderRadius: 6, cursor: "pointer", background: copied ? "rgba(120,140,93,0.2)" : "rgba(255,255,255,0.08)", border: copied ? "1px solid rgba(120,140,93,0.4)" : "1px solid rgba(255,255,255,0.15)", color: copied ? "#788C5D" : "rgba(255,255,255,0.5)" }}>
              {copied ? "Copied ✓" : "Copy"}
            </button>
            {tab === "en" ? <EnglishPrompt /> : <KannadaPrompt />}
          </div>

          <div className="flex flex-wrap gap-3.5 mt-3">
            {legendItems.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="rounded-full" style={{ width: 8, height: 8, background: item.color, border: item.border ? "1px solid #555" : "none" }} />
                <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#E8E6DC] rounded-lg flex items-center justify-between mt-3" style={{ padding: "11px 16px" }}>
            <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>Runs every Monday · 8AM · Zero effort</span>
            <span className="font-mono font-semibold text-[#788C5D]" style={{ fontSize: 11 }}>✓ Fresh dashboard every week</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
