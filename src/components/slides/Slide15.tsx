"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bullets = [
  { main: "Reads 25 vendor PDF invoices", sub: "Different formats, different layouts — Claude handles all of them" },
  { main: "Extracts vendor, date, category, total amount", sub: "Every field, every invoice — zero manual work" },
  { main: "Builds a complete spend dashboard", sub: "KPIs · Donut chart · Bar chart · Sortable table" },
];

const legendItems = [
  { color: "#D97757", label: "Files" },
  { color: "#6A9BCC", label: "Extract" },
  { color: "#FAF9F5", label: "Build", border: true },
  { color: "#788C5D", label: "Save as" },
];

const enPlain = `Read all PDF invoices inside subfolder "invoices_demo".

For each extract: vendor name, date, category, total amount.

Build HTML dashboard with:
- 4 KPI cards: Total Spend, No. of Invoices, Top Category, Biggest Vendor
- Donut chart: Spend by Category
- Bar chart: Monthly trend
- Sortable invoice table

Save as vendor_dashboard_march2026.html`;

const knPlain = `"invoices_demo" subfolder ನಲ್ಲಿರೋ ಎಲ್ಲಾ PDF invoices ಓದಿ.

ಪ್ರತಿ invoice ನಿಂದ: vendor ಹೆಸರು, date, category, total amount ತೆಗೆ.

HTML dashboard build ಮಾಡಿ:
- 4 KPI cards: Total Spend, Invoices, Top Category, Biggest Vendor
- Donut: Category wise spend
- Bar chart: Monthly trend
- Sortable invoice table

vendor_dashboard_march2026.html ಆಗಿ save ಮಾಡಿ`;

function EnglishPrompt() {
  return (
    <pre className="font-mono whitespace-pre-wrap" style={{ fontSize: 12.5, lineHeight: 1.85 }}>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What files to read\n"}</span><span style={{ color: "#D97757" }}>Read all PDF invoices inside{"\n"}subfolder &quot;invoices_demo&quot;.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What to extract\n"}</span><span style={{ color: "#6A9BCC" }}>For each extract: vendor name,{"\n"}date, category, total amount.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What to build\n"}</span><span style={{ color: "#FAF9F5" }}>Build HTML dashboard with:{"\n"}- 4 KPI cards: Total Spend,{"\n"}  Invoices, Top Category,{"\n"}  Biggest Vendor{"\n"}- Donut: Spend by Category{"\n"}- Bar chart: Monthly trend{"\n"}- Sortable invoice table</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save as\n"}</span><span style={{ color: "#788C5D" }}>Save as vendor_dashboard_march2026.html</span>
    </pre>
  );
}

function KannadaPrompt() {
  return (
    <pre className="font-kannada whitespace-pre-wrap" style={{ fontSize: 12.5, lineHeight: 1.85 }}>
      <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಯಾವ files ಓದಬೇಕು\n"}</span><span style={{ color: "#D97757" }}>&quot;invoices_demo&quot; subfolder ನಲ್ಲಿರೋ{"\n"}ಎಲ್ಲಾ PDF invoices ಓದಿ.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಏನು extract ಮಾಡಬೇಕು\n"}</span><span style={{ color: "#6A9BCC" }}>ಪ್ರತಿ invoice ನಿಂದ: vendor ಹೆಸರು,{"\n"}date, category, total amount ತೆಗೆ.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಏನು build ಮಾಡಬೇಕು\n"}</span><span style={{ color: "#FAF9F5" }}>HTML dashboard build ಮಾಡಿ:{"\n"}- 4 KPI cards: Total Spend,{"\n"}  Invoices, Top Category,{"\n"}  Biggest Vendor{"\n"}- Donut: Category wise spend{"\n"}- Bar chart: Monthly trend{"\n"}- Sortable invoice table</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save ಮಾಡಿ\n"}</span><span style={{ color: "#788C5D" }}>vendor_dashboard_march2026.html{"\n"}ಆಗಿ save ಮಾಡಿ</span>
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

export default function Slide15() {
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
          Demo 1 of 3 · Vendor Invoice Dashboard
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="font-heading font-extrabold mb-1.5" style={{ fontSize: 34, lineHeight: 1.2 }}>
          <span className="text-[#141413]">25 messy invoices →</span><br />
          <span className="text-[#D97757]">One clear dashboard</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="font-body italic mb-7" style={{ fontSize: 16, color: "#B0AEA5" }}>
          No manual entry. No Excel. Just one prompt.
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
            <span className="font-mono text-[#141413]" style={{ fontSize: 12, lineHeight: 1.5 }}>invoices_demo/<br />25 PDF files</span>
          </div>
          <div className="flex-1 rounded-lg" style={{ background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.3)", padding: "12px 14px" }}>
            <span className="block font-heading font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(217,119,87,0.7)" }}>Output</span>
            <span className="font-mono font-medium text-[#D97757]" style={{ fontSize: 12, lineHeight: 1.5 }}>vendor_dashboard_<br />march2026.html</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.85 }} className="bg-white border border-[#E8E6DC] rounded-r-lg flex items-start gap-3.5" style={{ borderLeft: "3px solid #D97757", padding: "14px 18px" }}>
          <div>
            <p className="font-heading font-bold text-[#141413]" style={{ fontSize: 15, marginBottom: 2 }}>Saves 4–6 hours of manual work every month</p>
            <p className="font-kannada text-[#B0AEA5]" style={{ fontSize: 13, lineHeight: 1.5 }}>25 invoices ಓದಿ, data extract ಮಾಡಿ, report ತಯಾರು — 2 minutes ನಲ್ಲಿ</p>
          </div>
        </motion.div>
      </div>

      {/* Right column */}
      <div className="w-1/2 flex items-center justify-center relative z-10" style={{ padding: "44px 52px 44px 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="w-full" style={{ maxWidth: 500 }}>
          {/* Label */}
          <div className="flex items-center gap-2 mb-3">
            <PulsingDot />
            <span className="font-heading font-bold uppercase text-[#B0AEA5]" style={{ fontSize: 10, letterSpacing: "0.18em" }}>Live prompt — paste into Cowork</span>
          </div>

          {/* Tab row */}
          <div className="flex">
            <button
              onClick={() => switchTab("en")}
              className="font-heading font-semibold transition-colors"
              style={{
                fontSize: 12,
                padding: "8px 20px",
                borderRadius: "6px 6px 0 0",
                background: tab === "en" ? "#141413" : "#E8E6DC",
                color: tab === "en" ? "#FAF9F5" : "#B0AEA5",
                cursor: "pointer",
                border: "none",
              }}
            >
              English
            </button>
            <button
              onClick={() => switchTab("kn")}
              className="font-heading font-semibold transition-colors"
              style={{
                fontSize: 12,
                padding: "8px 20px",
                borderRadius: "6px 6px 0 0",
                background: tab === "kn" ? "#141413" : "#E8E6DC",
                color: tab === "kn" ? "#FAF9F5" : "#B0AEA5",
                cursor: "pointer",
                border: "none",
              }}
            >
              ಕನ್ನಡ
            </button>
          </div>

          {/* Code block */}
          <div className="relative" style={{ background: "#141413", borderRadius: "0 8px 8px 8px", padding: "20px 22px", minHeight: 280 }}>
            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="absolute font-heading font-semibold transition-all"
              style={{
                top: 12,
                right: 12,
                fontSize: 11,
                padding: "5px 12px",
                borderRadius: 6,
                cursor: "pointer",
                background: copied ? "rgba(120,140,93,0.2)" : "rgba(255,255,255,0.08)",
                border: copied ? "1px solid rgba(120,140,93,0.4)" : "1px solid rgba(255,255,255,0.15)",
                color: copied ? "#788C5D" : "rgba(255,255,255,0.5)",
              }}
            >
              {copied ? "Copied ✓" : "Copy"}
            </button>

            {tab === "en" ? <EnglishPrompt /> : <KannadaPrompt />}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3.5 mt-3">
            {legendItems.map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="rounded-full" style={{ width: 8, height: 8, background: item.color, border: item.border ? "1px solid #555" : "none" }} />
                <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="bg-white border border-[#E8E6DC] rounded-lg flex items-center justify-between mt-3" style={{ padding: "11px 16px" }}>
            <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>Estimated time · ~2 minutes</span>
            <span className="font-mono font-semibold text-[#788C5D]" style={{ fontSize: 11 }}>✓ vendor_dashboard_march2026.html</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
