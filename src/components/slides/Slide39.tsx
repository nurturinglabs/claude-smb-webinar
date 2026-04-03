"use client";

import { motion } from "framer-motion";

const chatChips = [
  "Weekly shift table — ready to share",
  "Kannada shift messages per staff",
  "Overtime flags + recommendations",
];

const coworkChips = [
  "roster_week.html",
  "shifts.txt — Kannada per staff",
  "overtime_flags.txt — alerts",
];

export default function Slide39() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#B0AEA5 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.25, zIndex: 1 }} />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: "44px 60px 40px" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-center mb-6">
          <span className="block font-heading font-bold uppercase text-[#D97757] mb-2.5" style={{ fontSize: 15, letterSpacing: "0.22em" }}>
            Staff Scheduling · Restaurant · Pharmacy · Cloud Kitchen · Any Business with Staff
          </span>
          <h1 className="font-heading font-extrabold text-[#141413]" style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 6 }}>
            Sunday evening chaos →<br /><span className="text-[#D97757]">Weekly roster. Done.</span>
          </h1>
          <p className="font-body italic text-[#B0AEA5]" style={{ fontSize: 16 }}>
            One use case. Two tools. You decide what fits your business.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-5 flex-1 min-h-0 mb-5">
          {/* Chat card */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white border border-[#E8E6DC] rounded-[14px] overflow-hidden flex flex-col">
            <div className="flex items-center gap-3" style={{ padding: "16px 20px", borderBottom: "1px solid #F0EEE8" }}>
              <div className="flex items-center justify-center font-heading font-extrabold flex-shrink-0" style={{ width: 36, height: 36, borderRadius: 8, background: "#F5F4F0", color: "#B0AEA5", fontSize: 13 }}>C</div>
              <div>
                <div className="font-heading font-bold text-[#141413]" style={{ fontSize: 16 }}>Claude Chat</div>
                <span className="font-heading font-bold bg-[#F5F4F0] text-[#B0AEA5] rounded-full" style={{ fontSize: 10, padding: "3px 10px", letterSpacing: "0.05em" }}>One time · No setup · 2 minutes</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-[#F5F4F0]" style={{ padding: "11px 20px", borderBottom: "1px solid #E8E6DC" }}>
              <span className="font-kannada font-bold text-[#141413]" style={{ fontSize: 14 }}>ಒಂದು ಸಾರಿ, ಈ ವಾರ ಮಾತ್ರ ಬೇಕಾ?</span>
              <span className="font-body italic text-[#B0AEA5] ml-auto" style={{ fontSize: 12 }}>Quick, ad hoc</span>
            </div>
            <div className="flex flex-col gap-3 flex-1" style={{ padding: "16px 20px" }}>
              <div className="rounded-lg" style={{ background: "#141413", padding: "14px 16px" }}>
                <pre className="font-mono whitespace-pre-wrap" style={{ fontSize: 11.5, lineHeight: 1.75 }}>
                  <span style={{ color: "#D97757" }}>I run a restaurant with 6 staff.{"\n"}Here is their availability this week:</span>{"\n"}<span style={{ color: "#FAF9F5" }}>Ravi — off Tuesday{"\n"}Suma — half day Friday{"\n"}Peak days: Fri, Sat, Sun</span>{"\n"}<span style={{ color: "#6A9BCC" }}>Build weekly shift schedule.{"\n"}No overtime. Fair distribution.</span>{"\n"}<span style={{ color: "#788C5D" }}>Format as a clean table.</span>
                </pre>
              </div>
              <div>
                <span className="block font-heading font-bold uppercase text-[#B0AEA5] mb-1" style={{ fontSize: 10, letterSpacing: "0.15em" }}>What you get instantly</span>
                <div className="flex flex-col gap-1.5">
                  {chatChips.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#F5F4F0] border border-[#E8E6DC] rounded-md" style={{ padding: "7px 10px" }}>
                      <div className="rounded-full flex-shrink-0" style={{ width: 6, height: 6, background: "#788C5D" }} />
                      <span className="font-mono text-[#141413]" style={{ fontSize: 11 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#FAF9F5] border border-[#E8E6DC] rounded-lg mt-auto" style={{ padding: "10px 14px" }}>
                <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>Time to output</span>
                <span className="font-mono font-semibold text-[#141413]" style={{ fontSize: 12 }}>~2 minutes</span>
              </div>
            </div>
          </motion.div>

          {/* Cowork card */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="bg-white rounded-[14px] overflow-hidden flex flex-col" style={{ border: "2px solid #D97757" }}>
            <div className="flex items-center gap-3" style={{ padding: "16px 20px", borderBottom: "1px solid rgba(217,119,87,0.15)" }}>
              <div className="flex items-center justify-center font-heading font-extrabold text-[#FAF9F5] flex-shrink-0" style={{ width: 36, height: 36, borderRadius: 8, background: "#D97757", fontSize: 13 }}>✦</div>
              <div>
                <div className="font-heading font-bold text-[#141413]" style={{ fontSize: 16 }}>Claude Cowork</div>
                <span className="font-heading font-bold rounded-full" style={{ fontSize: 10, padding: "3px 10px", letterSpacing: "0.05em", background: "#FEF3EE", color: "#D97757" }}>Scheduled · File-based · Every Sunday</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5" style={{ padding: "11px 20px", background: "#FEF3EE", borderBottom: "1px solid rgba(217,119,87,0.15)" }}>
              <span className="font-kannada font-bold text-[#141413]" style={{ fontSize: 14 }}>ಪ್ರತಿ ವಾರ automatic ಆಗಿ ಬೇಕಾ?</span>
              <span className="font-body italic text-[#B0AEA5] ml-auto" style={{ fontSize: 12 }}>Set once, runs forever</span>
            </div>
            <div className="flex flex-col gap-3 flex-1" style={{ padding: "16px 20px" }}>
              <div className="rounded-lg" style={{ background: "#141413", padding: "14px 16px" }}>
                <pre className="font-mono whitespace-pre-wrap" style={{ fontSize: 11.5, lineHeight: 1.75 }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>{"// Read files\n"}</span><span style={{ color: "#D97757" }}>Read staff_availability.csv,{"\n"}leave_requests.csv, peak_days.txt.</span>{"\n"}<span style={{ color: "#FAF9F5" }}>Build weekly roster HTML —{"\n"}no overtime, fair distribution,{"\n"}peak days fully covered.</span>{"\n"}<span style={{ color: "#6A9BCC" }}>Write Kannada shift message{"\n"}for each staff member.</span>{"\n"}<span style={{ color: "#788C5D" }}>Save roster_week.html + shifts.txt</span>{"\n"}<span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>{"// Run every Sunday evening\n"}</span><span style={{ color: "#788C5D" }}>/schedule Sunday 8PM</span>
                </pre>
              </div>
              <div>
                <span className="block font-heading font-bold uppercase mb-1" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#B0AEA5" }}>What you get every Sunday 8PM</span>
                <div className="flex flex-col gap-1.5">
                  {coworkChips.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-md" style={{ padding: "7px 10px", background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.2)" }}>
                      <div className="rounded-full flex-shrink-0" style={{ width: 6, height: 6, background: "#D97757" }} />
                      <span className="font-mono font-medium text-[#D97757]" style={{ fontSize: 11 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg mt-auto" style={{ padding: "10px 14px", background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.2)" }}>
                <span className="font-mono text-[#B0AEA5]" style={{ fontSize: 11 }}>Runs automatically</span>
                <span className="font-mono font-semibold text-[#D97757]" style={{ fontSize: 12 }}>Every Sunday · 8PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="flex items-center justify-between rounded-[10px]" style={{ background: "#141413", padding: "16px 28px" }}>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full font-heading font-bold" style={{ width: 22, height: 22, background: "rgba(255,255,255,0.08)", fontSize: 10, color: "rgba(255,255,255,0.4)" }}>C</div>
              <span className="font-heading" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>Chat — type it now, get roster in 2 minutes</span>
            </div>
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full font-heading font-bold text-[#FAF9F5]" style={{ width: 22, height: 22, background: "#D97757", fontSize: 10 }}>✦</div>
              <span className="font-heading font-semibold text-white" style={{ fontSize: 13 }}>Cowork — set once, roster every Sunday automatically</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-kannada font-bold text-white" style={{ fontSize: 17, lineHeight: 1.5 }}>ಒಂದೇ use case. <span className="text-[#D97757]">ನಿಮ್ಮ choice.</span></p>
            <p className="font-body italic" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>Same result. You decide the tool.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
