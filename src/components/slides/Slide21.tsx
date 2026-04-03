"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bullets = [
  { main: "Reads last week's orders + customer reviews", sub: "Finds top 5 sellers, bottom 3 to drop, patterns in feedback" },
  { main: "Builds this week's recommended menu", sub: "Keep winners · Drop losers · Add 2 new based on reviews" },
  { main: "Calculates raw material order + pricing", sub: "Exact quantities based on expected demand · What to price higher" },
];

const outputFiles = [
  { num: "1", file: "weekly_plan_monday.html", desc: "full plan + menu" },
  { num: "2", file: "supplier_order.txt", desc: "Kannada WhatsApp message" },
];

const legendItems = [
  { color: "#D97757", label: "Files" },
  { color: "#FAF9F5", label: "Build", border: true },
  { color: "#6A9BCC", label: "Message" },
  { color: "#788C5D", label: "Save as" },
];

const enPlain = `Read last_week_orders.csv and customer_reviews.txt.

Build this week's plan:
1. Recommended menu — keep top 5 sellers, drop bottom 3, suggest 2 new items based on reviews
2. Raw material order list with exact quantities
3. Pricing tips — which items to price higher this week

Write a Kannada WhatsApp message to my supplier with the full order.

Save as:
weekly_plan_monday.html
supplier_order.txt`;

const knPlain = `last_week_orders.csv ಮತ್ತು customer_reviews.txt ಓದಿ.

ಈ ವಾರದ plan ಮಾಡಿ:
1. Menu — top 5 ಇಟ್ಕೋ, bottom 3 ತೆಗೆ, reviews ನೋಡಿ 2 new items suggest ಮಾಡು
2. Raw material order list — exact quantities ಸಮೇತ
3. Pricing tips — ಯಾವ items ಈ ವಾರ ಜಾಸ್ತಿ price ಹಾಕಬಹುದು

Supplier ಗೆ Kannada ನಲ್ಲಿ WhatsApp message ಬರೆ — full order ಸಮೇತ.

Save ಮಾಡಿ:
weekly_plan_monday.html
supplier_order.txt`;

function EnglishPrompt() {
  return (
    <pre className="font-mono whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.8 }}>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What files to read\n"}</span><span style={{ color: "#D97757" }}>Read last_week_orders.csv and{"\n"}customer_reviews.txt.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What to build\n"}</span><span style={{ color: "#FAF9F5" }}>Build this week&apos;s plan:{"\n"}1. Recommended menu — keep top 5{"\n"}   sellers, drop bottom 3, suggest{"\n"}   2 new items based on reviews{"\n"}2. Raw material order list with{"\n"}   exact quantities{"\n"}3. Pricing tips — which items{"\n"}   to price higher this week</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Supplier message\n"}</span><span style={{ color: "#6A9BCC" }}>Write a Kannada WhatsApp message{"\n"}to my supplier with the full order.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save as\n"}</span><span style={{ color: "#788C5D" }}>weekly_plan_monday.html{"\n"}supplier_order.txt</span>
    </pre>
  );
}

function KannadaPrompt() {
  return (
    <pre className="font-kannada whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.8 }}>
      <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಯಾವ files ಓದಬೇಕು\n"}</span><span style={{ color: "#D97757" }}>last_week_orders.csv ಮತ್ತು{"\n"}customer_reviews.txt ಓದಿ.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಏನು build ಮಾಡಬೇಕು\n"}</span><span style={{ color: "#FAF9F5" }}>ಈ ವಾರದ plan ಮಾಡಿ:{"\n"}1. Menu — top 5 ಇಟ್ಕೋ, bottom 3{"\n"}   ತೆಗೆ, reviews ನೋಡಿ 2 new items{"\n"}   suggest ಮಾಡು{"\n"}2. Raw material order list —{"\n"}   exact quantities ಸಮೇತ{"\n"}3. Pricing tips — ಯಾವ items{"\n"}   ಈ ವಾರ ಜಾಸ್ತಿ price ಹಾಕಬಹುದು</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Supplier message\n"}</span><span style={{ color: "#6A9BCC" }}>Supplier ಗೆ Kannada ನಲ್ಲಿ WhatsApp{"\n"}message ಬರೆ — full order ಸಮೇತ.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save ಮಾಡಿ\n"}</span><span style={{ color: "#788C5D" }}>weekly_plan_monday.html{"\n"}supplier_order.txt</span>
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

export default function Slide21() {
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
          Claude Cowork — More Examples
        </motion.span>

        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-heading font-semibold uppercase text-[#B0AEA5] block mb-4" style={{ fontSize: 11, letterSpacing: "0.15em" }}>
          Cloud Kitchen · Tiffin Centre · Restaurant
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="font-heading font-extrabold mb-1.5" style={{ fontSize: 32, lineHeight: 1.2 }}>
          <span className="text-[#141413]">Monday morning guesswork →</span><br />
          <span className="text-[#D97757]">Data-driven weekly plan</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="font-body italic mb-6" style={{ fontSize: 15, color: "#B0AEA5" }}>
          Menu · Raw material order · Pricing · Supplier message. One prompt.
        </motion.p>

        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="font-heading font-bold uppercase text-[#B0AEA5] block mb-2.5" style={{ fontSize: 10, letterSpacing: "0.18em" }}>
          What Claude does every Monday
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

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="flex flex-col gap-1.5 mb-5">
          {outputFiles.map((f, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-[#F5F4F0] border border-[#E8E6DC] rounded-lg" style={{ padding: "9px 12px" }}>
              <div className="flex items-center justify-center rounded-full font-heading font-bold text-[#FAF9F5] flex-shrink-0" style={{ width: 20, height: 20, fontSize: 10, background: "#D97757" }}>{f.num}</div>
              <span className="font-mono font-medium text-[#141413]" style={{ fontSize: 11 }}>{f.file}</span>
              <span className="font-body italic text-[#B0AEA5] ml-auto" style={{ fontSize: 11 }}>{f.desc}</span>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex gap-2.5 mb-5">
          <div className="flex-1 bg-[#F5F4F0] border border-[#E8E6DC] rounded-lg" style={{ padding: "10px 14px" }}>
            <span className="block font-heading font-bold uppercase text-[#B0AEA5] mb-1" style={{ fontSize: 9, letterSpacing: "0.15em" }}>Input</span>
            <span className="font-mono text-[#141413]" style={{ fontSize: 11, lineHeight: 1.5 }}>last_week_orders.csv<br />customer_reviews.txt</span>
          </div>
          <div className="flex-1 rounded-lg" style={{ background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.3)", padding: "10px 14px" }}>
            <span className="block font-heading font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(217,119,87,0.7)" }}>Output</span>
            <span className="font-mono font-medium text-[#D97757]" style={{ fontSize: 11, lineHeight: 1.5 }}>2 files —<br />html + txt</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.85 }} className="bg-white border border-[#E8E6DC] rounded-r-lg" style={{ borderLeft: "3px solid #D97757", padding: "13px 18px" }}>
          <p className="font-heading font-bold text-[#141413]" style={{ fontSize: 15, marginBottom: 2 }}>Replaces 2–3 hours of Monday morning guesswork</p>
          <p className="font-kannada text-[#B0AEA5]" style={{ fontSize: 13, lineHeight: 1.5 }}>Data ನೋಡಿ menu decide ಮಾಡುತ್ತೆ — ನೀವು coffee ಕುಡೀತಾ ಇರ್ತೀರಿ</p>
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
            <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>Estimated time · ~3 minutes</span>
            <span className="font-mono font-semibold text-[#788C5D]" style={{ fontSize: 11 }}>✓ 2 files saved · Every Monday</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
