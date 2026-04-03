"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "Idea 01", pill: "Parents · Teachers", icon: "🎓",
    title: "AI Learning Consultant",
    liner: "Help Karnataka families use Claude to support their child's education",
    earnLabel: "Market size", earnValue: "1 Crore+ families", earnSub: "",
    needs: ["Claude account", "Hundreds of families waiting to learn", "Demo ready in 30 min"],
    green: false, delay: 0.25,
  },
  {
    num: "Idea 02", pill: "Freelancers · Anyone", icon: "💼",
    title: "AI Consultant for SMBs",
    liner: "Visit local businesses, demo Claude Cowork, set it up, charge monthly",
    earnLabel: "Market size", earnValue: "8 Lakh+ SMBs", earnSub: "",
    needs: ["What you learned today", "First demo = this webinar", "No degree needed"],
    green: false, delay: 0.4,
  },
  {
    num: "Idea 03", pill: "Tech-curious · Builders", icon: "💻",
    title: "Custom Tool Builder",
    liner: "Build custom tools businesses actually want",
    earnLabel: "Market size", earnValue: "Lakhs of businesses", earnSub: "",
    needs: ["Claude Code", "Describe → Claude builds", "You own the client"],
    green: false, delay: 0.55,
  },
  {
    num: "Idea 04", pill: "Biggest Opportunity", icon: "🏫",
    title: "AI Learning Lab",
    liner: "Karnataka's missing AI school — Kannada, in-person, affordable. Nobody has built it yet.",
    earnLabel: "Market size", earnValue: "31 districts", earnSub: "",
    needs: ["₹50,000 to start", "Any city in Karnataka", "Nobody has done it yet"],
    green: true, delay: 0.7,
  },
];


export default function Slide31() {
  return (
    <div
      className="h-screen w-full flex flex-col relative overflow-hidden"
      style={{ background: "#05101F" }}
    >

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: "48px 64px 44px" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-end justify-between mb-9">
          <div>
            <span className="block font-heading font-bold uppercase text-[#D97757] mb-2.5" style={{ fontSize: 15, letterSpacing: "0.22em" }}>
              AI ನಿಂದ Business ಮಾಡಬಹುದು
            </span>
            <h1 className="font-heading font-extrabold text-white" style={{ fontSize: 42, lineHeight: 1.05 }}>
              4 businesses you can
              <br />
              <span className="text-[#D97757]">start this week.</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="font-kannada font-bold" style={{ fontSize: 20, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
              Investment: <span className="text-[#D97757]" style={{ fontSize: 22 }}>AI subscriptions only</span>
            </p>
            <p className="font-kannada font-bold" style={{ fontSize: 20, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
              No office. No inventory. No staff.
            </p>
          </div>
        </motion.div>

        {/* 4 cards */}
        <div className="grid grid-cols-4 gap-3.5 flex-1 min-h-0 mb-6" style={{ alignItems: "stretch" }}>
          {cards.map((c, i) => {
            const g = c.green;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: c.delay }}
                className="flex flex-col rounded-2xl"
                style={{
                  background: g ? "rgba(120,140,93,0.08)" : "rgba(255,255,255,0.04)",
                  border: g ? "1px solid rgba(120,140,93,0.25)" : "1px solid rgba(255,255,255,0.08)",
                  padding: "22px 20px 20px",
                }}
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-bold uppercase" style={{ fontSize: 10, letterSpacing: "0.2em", color: g ? "rgba(120,140,93,0.6)" : "rgba(255,255,255,0.25)" }}>{c.num}</span>
                  <span className="font-heading font-bold rounded-full" style={{ fontSize: 10, padding: "3px 10px", background: g ? "rgba(120,140,93,0.2)" : "rgba(217,119,87,0.15)", color: g ? "#788C5D" : "#D97757" }}>{c.pill}</span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center rounded-[14px] mb-3.5" style={{ width: 52, height: 52, fontSize: 24, background: g ? "rgba(120,140,93,0.15)" : "rgba(217,119,87,0.1)", border: g ? "1px solid rgba(120,140,93,0.25)" : "1px solid rgba(217,119,87,0.2)" }}>{c.icon}</div>

                {/* Title */}
                <h3 className="font-heading font-extrabold mb-2" style={{ fontSize: 18, lineHeight: 1.2, color: g ? "#9FE1CB" : "#FFFFFF" }}>{c.title}</h3>

                {/* Liner */}
                <p className="font-body italic mb-4 flex-1" style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.4)" }}>{c.liner}</p>

                {/* Divider */}
                <div className="mb-3.5" style={{ height: 1, background: g ? "rgba(120,140,93,0.2)" : "rgba(255,255,255,0.06)" }} />

                {/* Earn */}
                <span className="block font-heading font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.15em", color: g ? "rgba(120,140,93,0.6)" : "rgba(255,255,255,0.25)" }}>{c.earnLabel}</span>
                <span className="font-mono font-semibold" style={{ fontSize: 20, lineHeight: 1, color: g ? "#788C5D" : "#D97757" }}>{c.earnValue}</span>
                <span className="block font-body italic" style={{ fontSize: 11, marginTop: 3, color: g ? "rgba(120,140,93,0.5)" : "rgba(255,255,255,0.25)" }}>{c.earnSub}</span>

                {/* Needs */}
                <div className="flex flex-col gap-1.5 mt-3.5">
                  {c.needs.map((n, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <div className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: g ? "#788C5D" : "#D97757", opacity: g ? 0.6 : 0.5 }} />
                      <span className="font-heading font-medium" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{n}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
