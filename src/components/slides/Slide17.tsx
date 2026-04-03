"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const bullets = [
  { main: "Builds colour-coded overdue dashboard", sub: "Yellow · Orange · Red by urgency — who owes what" },
  { main: "Drafts 17 personalised Kannada WhatsApp messages", sub: "Name + amount + days overdue + UPI — ready to send" },
  { main: "Writes a payment recovery action plan", sub: "Who to call first, at-risk accounts, prevention tips" },
];

const outputFiles = [
  { num: "1", file: "overdue_payments_march2026.html", desc: "dashboard" },
  { num: "2", file: "overdue_reminders_march2026.txt", desc: "17 Kannada messages" },
  { num: "3", file: "payment_summary_march2026.txt", desc: "recovery plan" },
];

const legendItems = [
  { color: "#D97757", label: "Files" },
  { color: "#6A9BCC", label: "Messages" },
  { color: "#FAF9F5", label: "Build/Plan", border: true },
  { color: "#788C5D", label: "Save as" },
];

const enPlain = `Read payments_register.csv in subfolder "overdue".

TASK 1: Build colour-coded HTML dashboard — yellow/orange/red borders by overdue weeks, KPIs, bar chart of top balances.

TASK 2: Draft WhatsApp reminder in Kannada for every customer with balance > 0 — polite, personalised, mention name + amount + days + UPI: mundebanni@upi

TASK 3: Write recovery action plan — who to call first, at-risk customers, prevention recommendation.

Save as:
overdue_payments_march2026.html
overdue_reminders_march2026.txt
payment_summary_march2026.txt`;

const knPlain = `"overdue" folder ನಲ್ಲಿರೋ payments_register.csv ಓದಿ.

TASK 1: Colour-coded HTML dashboard ಮಾಡಿ — yellow/orange/red by overdue weeks, KPIs, bar chart.

TASK 2: Balance > 0 ಇರೋ ಪ್ರತಿ customer ಗೆ Kannada WhatsApp message ಬರೆ — polite, personalised, ಹೆಸರು + amount + days + UPI: mundebanni@upi

TASK 3: Recovery action plan ಬರೆ — ಯಾರಿಗೆ ಮೊದಲು call ಮಾಡಬೇಕು, at-risk customers, prevention tips.

Save ಮಾಡಿ:
overdue_payments_march2026.html
overdue_reminders_march2026.txt
payment_summary_march2026.txt`;

function EnglishPrompt() {
  return (
    <pre className="font-mono whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.8 }}>
      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// What file to read\n"}</span><span style={{ color: "#D97757" }}>Read payments_register.csv{"\n"}in subfolder &quot;overdue&quot;.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Task 1 — Dashboard\n"}</span><span style={{ color: "#FAF9F5" }}>Build colour-coded HTML dashboard{"\n"}— yellow/orange/red by overdue weeks,{"\n"}KPIs, bar chart of top balances.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Task 2 — WhatsApp messages\n"}</span><span style={{ color: "#6A9BCC" }}>Draft Kannada WhatsApp reminder{"\n"}for every customer with balance &gt; 0.{"\n"}Polite, personalised — name +{"\n"}amount + days + UPI: mundebanni@upi</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Task 3 — Recovery plan\n"}</span><span style={{ color: "#FAF9F5" }}>Write recovery action plan —{"\n"}who to call first, at-risk customers,{"\n"}prevention recommendation.</span>{"\n\n"}<span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save as\n"}</span><span style={{ color: "#788C5D" }}>overdue_payments_march2026.html{"\n"}overdue_reminders_march2026.txt{"\n"}payment_summary_march2026.txt</span>
    </pre>
  );
}

function KannadaPrompt() {
  return (
    <pre className="font-kannada whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.8 }}>
      <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// ಯಾವ file ಓದಬೇಕು\n"}</span><span style={{ color: "#D97757" }}>&quot;overdue&quot; folder ನಲ್ಲಿರೋ{"\n"}payments_register.csv ಓದಿ.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Task 1 — Dashboard\n"}</span><span style={{ color: "#FAF9F5" }}>Colour-coded HTML dashboard ಮಾಡಿ{"\n"}— yellow/orange/red by overdue weeks,{"\n"}KPIs, bar chart.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Task 2 — WhatsApp messages\n"}</span><span style={{ color: "#6A9BCC" }}>Balance &gt; 0 ಇರೋ ಪ್ರತಿ customer ಗೆ{"\n"}Kannada WhatsApp message ಬರೆ.{"\n"}Polite, personalised — ಹೆಸರು +{"\n"}amount + days + UPI: mundebanni@upi</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Task 3 — Recovery plan\n"}</span><span style={{ color: "#FAF9F5" }}>Recovery action plan ಬರೆ —{"\n"}ಯಾರಿಗೆ ಮೊದಲು call ಮಾಡಬೇಕು,{"\n"}at-risk customers, prevention tips.</span>{"\n\n"}<span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{"// Save ಮಾಡಿ\n"}</span><span style={{ color: "#788C5D" }}>overdue_payments_march2026.html{"\n"}overdue_reminders_march2026.txt{"\n"}payment_summary_march2026.txt</span>
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

export default function Slide17() {
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
          Demo 3 of 3 · Overdue Payment Tracker
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="font-heading font-extrabold mb-1.5" style={{ fontSize: 34, lineHeight: 1.2 }}>
          <span className="text-[#141413]">₹91,230 outstanding →</span><br />
          <span className="text-[#D97757]">Recovery plan ready</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="font-body italic mb-7" style={{ fontSize: 16, color: "#B0AEA5" }}>
          Dashboard. Reminders. Action plan. One prompt.
        </motion.p>

        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="font-heading font-bold uppercase text-[#B0AEA5] block mb-3" style={{ fontSize: 10, letterSpacing: "0.18em" }}>
          What Claude does — 3 tasks in one prompt
        </motion.span>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="flex flex-col gap-2.5 mb-6">
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

        {/* Output file chips */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="flex flex-col gap-1.5 mb-5">
          {outputFiles.map((f, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-[#F5F4F0] border border-[#E8E6DC] rounded-lg" style={{ padding: "9px 12px" }}>
              <div className="flex items-center justify-center rounded-full font-heading font-bold text-[#FAF9F5] flex-shrink-0" style={{ width: 20, height: 20, fontSize: 10, background: "#D97757" }}>{f.num}</div>
              <span className="font-mono font-medium text-[#141413]" style={{ fontSize: 11 }}>{f.file}</span>
              <span className="font-body italic text-[#B0AEA5] ml-auto" style={{ fontSize: 11 }}>{f.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* I/O chips */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="flex gap-2.5 mb-5">
          <div className="flex-1 bg-[#F5F4F0] border border-[#E8E6DC] rounded-lg" style={{ padding: "10px 14px" }}>
            <span className="block font-heading font-bold uppercase text-[#B0AEA5] mb-1" style={{ fontSize: 9, letterSpacing: "0.15em" }}>Input</span>
            <span className="font-mono text-[#141413]" style={{ fontSize: 11, lineHeight: 1.5 }}>overdue/<br />payments_register.csv</span>
          </div>
          <div className="flex-1 rounded-lg" style={{ background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.3)", padding: "10px 14px" }}>
            <span className="block font-heading font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.15em", color: "rgba(217,119,87,0.7)" }}>Output</span>
            <span className="font-mono font-medium text-[#D97757]" style={{ fontSize: 11, lineHeight: 1.5 }}>3 files —<br />html + 2 txt</span>
          </div>
        </motion.div>

        {/* Benefit bar */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.85 }} className="bg-white border border-[#E8E6DC] rounded-r-lg" style={{ borderLeft: "3px solid #D97757", padding: "13px 18px" }}>
          <p className="font-heading font-bold text-[#141413]" style={{ fontSize: 15, marginBottom: 2 }}>17 personalised reminders drafted in seconds</p>
          <p className="font-kannada text-[#B0AEA5]" style={{ fontSize: 13, lineHeight: 1.5 }}>ಒಂದು prompt — dashboard, Kannada messages, recovery plan ಎಲ್ಲಾ ready</p>
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
            <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>Estimated time · ~4 minutes</span>
            <span className="font-mono font-semibold text-[#788C5D]" style={{ fontSize: 11 }}>✓ 3 files saved</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
