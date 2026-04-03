"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bullets = [
  { main: "Reads 6 monthly sales PDF reports", sub: "October 2025 to March 2026 — all in one pass" },
  { main: "Extracts revenue, customers, products, trends", sub: "Month-on-month changes, top performers, at-risk accounts" },
  { main: "Builds dashboard + gives business recommendations", sub: "Charts, tables, insights — one business action to take" },
];

const legendItems = [
  { color: "#D97757", label: "Files" },
  { color: "#6A9BCC", label: "Extract" },
  { color: "#FAF9F5", label: "Build", border: true },
  { color: "#788C5D", label: "Save as" },
];

const enPlain = `Read all PDF sales reports in subfolder "sales_demo".

Extract: month, customer, vegetable, quantity, rate, total amount.

Build HTML dashboard with:
- KPIs: Total Revenue, Best Month, Top Customer, Top Vegetable
- Line chart: Monthly revenue trend
- Bar chart: Top 10 customers by value
- Donut: Revenue split by vegetable
- Insights: top customers, at-risk accounts, one business recommendation
- Monthly summary table with % change vs prev month

Save as sales_analytics_march2026.html`;

const knPlain = `"sales_demo" subfolder ನಲ್ಲಿರೋ ಎಲ್ಲಾ PDF sales reports ಓದಿ.

ತೆಗೆ: month, customer, vegetable, quantity, rate, total amount.

HTML dashboard build ಮಾಡಿ:
- KPIs: Total Revenue, Best Month, Top Customer, Top Vegetable
- Line chart: Monthly revenue trend
- Bar chart: Top 10 customers
- Donut: Vegetable wise revenue
- Insights: top customers, at-risk accounts, ಒಂದು business recommendation

sales_analytics_march2026.html ಆಗಿ save ಮಾಡಿ`;

function EnglishPrompt() {
  return (
    <pre className="font-mono whitespace-pre-wrap" style={{ fontSize: 12.5, lineHeight: 1.85 }}>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What files to read\n"}</span><span style={{ color: "#D97757" }}>Read all PDF sales reports in{"\n"}subfolder &quot;sales_demo&quot;.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What to extract\n"}</span><span style={{ color: "#6A9BCC" }}>Extract: month, customer, vegetable,{"\n"}quantity, rate, total amount.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What to build\n"}</span><span style={{ color: "#FAF9F5" }}>Build HTML dashboard with:{"\n"}- KPIs: Total Revenue, Best Month,{"\n"}  Top Customer, Top Vegetable{"\n"}- Line chart: Monthly revenue trend{"\n"}- Bar chart: Top 10 customers{"\n"}- Donut: Revenue by vegetable{"\n"}- Insights: top customers,{"\n"}  at-risk accounts, one{"\n"}  business recommendation</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save as\n"}</span><span style={{ color: "#788C5D" }}>Save as sales_analytics_march2026.html</span>
    </pre>
  );
}

function KannadaPrompt() {
  return (
    <pre className="font-kannada whitespace-pre-wrap" style={{ fontSize: 12.5, lineHeight: 1.85 }}>
      <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಯಾವ files ಓದಬೇಕು\n"}</span><span style={{ color: "#D97757" }}>&quot;sales_demo&quot; subfolder ನಲ್ಲಿರೋ{"\n"}ಎಲ್ಲಾ PDF sales reports ಓದಿ.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಏನು extract ಮಾಡಬೇಕು\n"}</span><span style={{ color: "#6A9BCC" }}>ತೆಗೆ: month, customer, vegetable,{"\n"}quantity, rate, total amount.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಏನು build ಮಾಡಬೇಕು\n"}</span><span style={{ color: "#FAF9F5" }}>HTML dashboard build ಮಾಡಿ:{"\n"}- KPIs: Total Revenue, Best Month,{"\n"}  Top Customer, Top Vegetable{"\n"}- Line chart: Monthly revenue trend{"\n"}- Bar chart: Top 10 customers{"\n"}- Donut: Vegetable wise revenue{"\n"}- Insights: top customers,{"\n"}  at-risk accounts, ಒಂದು{"\n"}  business recommendation</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save ಮಾಡಿ\n"}</span><span style={{ color: "#788C5D" }}>sales_analytics_march2026.html{"\n"}ಆಗಿ save ಮಾಡಿ</span>
    </pre>
  );
}

function PulsingDot() {
  return (
    <motion.div
      className="rounded-full bg-[#D97757]"
      style={{ width: 8, height: 8 }}
      animate={{ opacity: [1, 0.3, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
}

export default function Slide16() {
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
      <div className="w-1/2 flex flex-col justify-center relative z-10" style={{ padding: "52px 40px 52px 64px" }}>
        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-heading font-bold uppercase text-[#D97757] block mb-2" style={{ fontSize: 15, letterSpacing: "0.22em" }}>
          Claude Cowork — Live Demo
        </motion.span>

        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-heading font-semibold uppercase text-[#B0AEA5] block mb-4" style={{ fontSize: 11, letterSpacing: "0.15em" }}>
          Demo 2 of 3 · Sales Analytics
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="font-heading font-extrabold mb-1.5" style={{ fontSize: 34, lineHeight: 1.2 }}>
          <span className="text-[#141413]">6 months of sales →</span><br />
          <span className="text-[#D97757]">Actionable insights</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="font-body italic mb-7" style={{ fontSize: 16, color: "#B0AEA5" }}>
          Who is buying. What is selling. What to do next.
        </motion.p>

        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="font-heading font-bold uppercase text-[#B0AEA5] block mb-3" style={{ fontSize: 10, letterSpacing: "0.18em" }}>
          What Claude does
        </motion.span>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="flex flex-col gap-2.5 mb-7">
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

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex gap-2.5 mb-7">
          <div className="flex-1 bg-[#F5F4F0] border border-[#E8E6DC] rounded-lg" style={{ padding: "12px 14px" }}>
            <span className="block font-heading font-bold uppercase text-[#B0AEA5] mb-1" style={{ fontSize: 9, letterSpacing: "0.15em" }}>Input</span>
            <span className="font-mono text-[#141413]" style={{ fontSize: 12, lineHeight: 1.5 }}>sales_demo/<br />6 monthly PDFs</span>
          </div>
          <div className="flex-1 rounded-lg" style={{ background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.3)", padding: "12px 14px" }}>
            <span className="block font-heading font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(217,119,87,0.7)" }}>Output</span>
            <span className="font-mono font-medium text-[#D97757]" style={{ fontSize: 12, lineHeight: 1.5 }}>sales_analytics_<br />march2026.html</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.85 }} className="bg-white border border-[#E8E6DC] rounded-r-lg" style={{ borderLeft: "3px solid #D97757", padding: "14px 18px" }}>
          <p className="font-heading font-bold text-[#141413]" style={{ fontSize: 15, marginBottom: 2 }}>Replaces a part-time accountant&apos;s monthly report</p>
          <p className="font-kannada text-[#B0AEA5]" style={{ fontSize: 13, lineHeight: 1.5 }}>6 months data ಓದಿ, trends find ಮಾಡಿ, recommendations ಕೊಡುತ್ತೆ — 3 minutes ನಲ್ಲಿ</p>
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

          <div className="relative" style={{ background: "#141413", borderRadius: "0 8px 8px 8px", padding: "20px 22px", minHeight: 280 }}>
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
            <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>Estimated time · ~3 minutes</span>
            <span className="font-mono font-semibold text-[#788C5D]" style={{ fontSize: 11 }}>✓ sales_analytics_march2026.html</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
