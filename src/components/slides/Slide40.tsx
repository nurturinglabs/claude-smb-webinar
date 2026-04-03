"use client";

import { motion } from "framer-motion";

const career = [
  { year: "Early career", text: "Support Executive", sub: "Customer operations, process management", active: false },
  { year: "Mid career", text: "Program Manager → Data Analyst", sub: "Enterprise projects, analytics systems", active: false },
  { year: "Recent years", text: "Data Engineer", sub: "", active: false },
  { year: "2026 — Now", text: "AI Entrepreneur", sub: "NurturingLabs · Vibe MKE · This webinar", active: true },
];

const journey = [
  { num: "01", month: "Dec 2025 — Christmas Holidays", heading: "Built a web app with Voice AI for an Ice Cream store", detail: "Experimenting during holidays — just to see what AI could actually build", active: false },
  { num: "02", month: "Jan 2026", heading: "Built a full AI Voice Agent for the same shop", detail: "It worked. That gave me the confidence to keep going.", active: false },
  { num: "03", month: "Jan – Feb 2026", heading: "Built Voice AI agents for many more businesses", detail: "Still testing, still learning — built agents for restaurant, dental, apartments, admissions. NurturingLabs was taking shape.", active: false },
  { num: "04", month: "March 2026 — The Pivot", heading: "Met local business owners. Changed everything.", detail: "First real customer conversations. They needed broader AI help for their business. Pivoted to full AI implementation.", active: true },
];

export default function Slide40() {
  return (
    <div className="h-screen w-full grid" style={{ background: "#05101F", gridTemplateColumns: "420px 1fr" }}>
      {/* Left column */}
      <div className="flex flex-col justify-center" style={{ padding: "64px 48px 64px 72px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-heading font-bold uppercase text-[#D97757] block mb-5" style={{ fontSize: 11, letterSpacing: "0.22em" }}>
          Your Host Today
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="font-body font-bold text-white mb-1.5" style={{ fontSize: 52, lineHeight: 1.0 }}>
          Umesh<span className="block text-[#D97757]">Narayanappa</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="font-body italic mb-11" style={{ fontSize: 15, color: "rgba(255,255,255,0.3)" }}>
          NurturingLabs · Data Engineer · AI Entrepreneur
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}>
          <span className="block font-heading font-bold uppercase mb-4" style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)" }}>17 years · Corporate Journey</span>
          <div className="flex flex-col">
            {career.map((item, i) => (
              <div key={i} className="flex" style={{ gap: 16 }}>
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: 28 }}>
                  <div className="rounded-full flex-shrink-0" style={{ width: 10, height: 10, marginTop: 4, background: item.active ? "#D97757" : "rgba(255,255,255,0.15)", boxShadow: item.active ? "0 0 0 3px rgba(217,119,87,0.15)" : "none" }} />
                  {i < career.length - 1 && <div className="flex-1" style={{ width: 1, background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: i < career.length - 1 ? 20 : 0 }}>
                  <span className="block font-mono mb-0.5" style={{ fontSize: 10, letterSpacing: "0.08em", color: item.active ? "rgba(217,119,87,0.5)" : "rgba(255,255,255,0.2)" }}>{item.year}</span>
                  <p className="font-heading font-semibold mb-0.5" style={{ fontSize: 14, lineHeight: 1.3, color: item.active ? "#FFFFFF" : "rgba(255,255,255,0.5)" }}>{item.text}</p>
                  <p className={item.active ? "font-mono" : `font-body italic ${item.sub.match(/[\u0C80-\u0CFF]/) ? "font-kannada" : ""}`} style={{ fontSize: item.active ? 11 : 12, lineHeight: 1.5, color: item.active ? "rgba(217,119,87,0.5)" : "rgba(255,255,255,0.2)", marginTop: 2 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right column */}
      <div className="flex flex-col justify-center" style={{ padding: "64px 72px 64px 56px" }}>
        <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="font-heading font-bold uppercase text-[#D97757] block mb-2.5" style={{ fontSize: 11, letterSpacing: "0.22em" }}>
          How it started
        </motion.span>

        <motion.h2 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="font-body font-bold text-white mb-9" style={{ fontSize: 26, lineHeight: 1.2 }}>
          I did not plan to start a company. I just started building.
          <br />
          90 days later — <span className="italic text-[#D97757]">NurturingLabs was born.</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="flex flex-col">
          {journey.map((item, i) => (
            <div key={i} className="flex" style={{ gap: 20 }}>
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: 36 }}>
                <div className="flex items-center justify-center rounded-full font-mono font-bold" style={{ width: 36, height: 36, fontSize: 11, background: item.active ? "rgba(217,119,87,0.15)" : "rgba(255,255,255,0.06)", border: item.active ? "1px solid rgba(217,119,87,0.35)" : "1px solid rgba(255,255,255,0.1)", color: item.active ? "#D97757" : "rgba(255,255,255,0.3)" }}>{item.num}</div>
                {i < journey.length - 1 && <div className="flex-1 mx-auto" style={{ width: 1, background: "rgba(255,255,255,0.08)", margin: "4px auto" }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: i < journey.length - 1 ? 22 : 0, paddingTop: 4 }}>
                <span className="block font-mono mb-1" style={{ fontSize: 11, letterSpacing: "0.06em", color: item.active ? "rgba(217,119,87,0.5)" : "rgba(255,255,255,0.2)" }}>{item.month}</span>
                <p className="font-heading font-bold mb-1" style={{ fontSize: item.active ? 16 : 15, lineHeight: 1.3, color: item.active ? "#FFFFFF" : "rgba(255,255,255,0.6)" }}>{item.heading}</p>
                <p className={item.active ? "font-mono" : "font-body italic"} style={{ fontSize: 13, lineHeight: 1.6, color: item.active ? "rgba(217,119,87,0.6)" : "rgba(255,255,255,0.25)", fontStyle: item.active ? "normal" : undefined }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
