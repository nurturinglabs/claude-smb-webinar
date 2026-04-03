"use client";

import { motion } from "framer-motion";
import CopyButton from "../CopyButton";

const ingredients = [
  {
    num: "1",
    label: "Your idea + context",
    example: "Pickle business · Bengaluru · working women + NRI families",
    tip: "What, where, and who — be specific",
  },
  {
    num: "2",
    label: "Your constraints",
    example: "₹50,000 to invest",
    tip: "Budget, time, skills — your real limits",
  },
  {
    num: "3",
    label: "Ask for honesty",
    example: "Is this a good idea? Be honest.",
    tip: "Tell Claude not to just encourage you",
  },
  {
    num: "4",
    label: "The key decision",
    example: "Instagram, WhatsApp, or Swiggy?",
    tip: "End with the one question you need answered to actually start",
  },
];

export default function Slide07() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#B0AEA5 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.25, zIndex: 1 }} />

      <div className="relative z-10 flex flex-col w-full h-full px-8 py-4">
        {/* Top: Tag + Title */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading font-bold uppercase text-[#D97757]" style={{ fontSize: 12, letterSpacing: "0.18em" }}>Demo 4 · Claude Chat</span>
            <span className="inline-block bg-[#FEF3EE] text-[#D97757] text-sm font-heading font-semibold px-4 py-1 rounded-full">For: Aspiring Entrepreneurs · Fence Sitters</span>
          </div>
          <h1 className="text-[32px] font-heading font-extrabold text-[#141413] leading-tight">How to validate any business idea with AI</h1>
        </motion.div>

        {/* Main: Two columns */}
        <div className="flex gap-5 flex-1 min-h-0">
          {/* LEFT 38% */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-3" style={{ width: "38%" }}>
            <p className="font-heading font-bold text-[15px] text-[#141413] mb-1">4 ingredients every validation prompt needs:</p>
            {ingredients.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }} className="bg-white border border-[#E8E6DC] rounded-xl flex items-start gap-3 flex-1" style={{ borderLeftWidth: 3, borderLeftColor: "#D97757", padding: "12px 14px" }}>
                <div className="flex items-center justify-center rounded-full font-heading font-bold text-white flex-shrink-0 mt-0.5" style={{ width: 28, height: 28, fontSize: 13, background: "#D97757" }}>{card.num}</div>
                <div className="min-w-0">
                  <span className="block font-heading font-bold uppercase text-[#D97757]" style={{ fontSize: 12, letterSpacing: "0.1em" }}>{card.label}</span>
                  <span className="block font-mono text-[13px] text-[#141413] mt-1 bg-[#F5F4F0] rounded px-2 py-0.5 inline-block">{card.example}</span>
                  <p className="font-body italic text-[12px] text-[#B0AEA5] mt-1">{card.tip}</p>
                </div>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.8 }} className="rounded-lg" style={{ background: "#FEF3EE", border: "1px solid rgba(217,119,87,0.3)", padding: "10px 14px" }}>
              <p className="font-heading font-medium text-[13px] text-[#D97757] leading-relaxed">The words &lsquo;Be honest&rsquo; are the most important. Without them — encouragement. With them — real advice.</p>
            </motion.div>
          </motion.div>

          {/* RIGHT 62% */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex flex-col flex-1 min-h-0">
              <span className="block font-heading font-semibold text-xs text-[#B0AEA5] uppercase mb-1" style={{ letterSpacing: "0.15em" }}>ENGLISH PROMPT</span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"I am thinking of starting a home-based pickle and papad business in Bengaluru targeting working women and NRI families.\n\nI have ₹50,000 to invest.\n\nTell me:\n1. Is this a good idea? Be honest.\n2. What are the top 3 risks?\n3. What licences do I need in Karnataka?\n4. How should I price my products?\n\n5. Where should I sell — Instagram, WhatsApp, or Swiggy?"} />
                <pre className="font-mono text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>I am thinking of starting a home-based pickle and papad business in Bengaluru targeting working women and NRI families.</span>{"\n\n"}<span style={{ color: "#6A9BCC" }}>I have ₹50,000 to invest.</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>Tell me:{"\n"}1. Is this a good idea? Be honest.{"\n"}2. What are the top 3 risks?{"\n"}3. What licences do I need in Karnataka?{"\n"}4. How should I price my products?</span>{"\n\n"}<span style={{ color: "#788C5D" }}>5. Where should I sell — Instagram, WhatsApp, or Swiggy?</span>
                </pre>
              </div>
            </div>
            <div className="flex flex-col flex-1 min-h-0">
              <span className="block font-heading font-semibold text-xs text-[#D97757] uppercase mb-1" style={{ letterSpacing: "0.15em" }}>ಕನ್ನಡ PROMPT</span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"ನಾನು Bengaluru ನಲ್ಲಿ ಮನೆಯಲ್ಲಿ pickle ಮತ್ತು papad business ಶುರು ಮಾಡಬೇಕು ಅಂತಿದ್ದೇನೆ — working women ಮತ್ತು NRI families ಗೆ target ಮಾಡಿ.\n\nನನ್ನ ಬಳಿ ₹50,000 invest ಮಾಡಲಿಕ್ಕೆ ಇದೆ.\n\nಹೇಳಿ:\n1. ಇದು ಒಳ್ಳೆ idea ನಾ? Honest ಆಗಿ ಹೇಳಿ.\n2. Top 3 risks ಏನು?\n3. Karnataka ನಲ್ಲಿ ಯಾವ licences ಬೇಕಾಗ್ತೆ?\n4. Products ಗೆ price ಹೇಗೆ ಹಾಕಬೇಕು?\n\n5. ಎಲ್ಲಿ sell ಮಾಡಲಿ — Instagram, WhatsApp, ಅಥವಾ Swiggy?"} />
                <pre className="font-kannada text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>ನಾನು Bengaluru ನಲ್ಲಿ ಮನೆಯಲ್ಲಿ pickle ಮತ್ತು papad business ಶುರು ಮಾಡಬೇಕು ಅಂತಿದ್ದೇನೆ — working women ಮತ್ತು NRI families ಗೆ target ಮಾಡಿ.</span>{"\n\n"}<span style={{ color: "#6A9BCC" }}>ನನ್ನ ಬಳಿ ₹50,000 invest ಮಾಡಲಿಕ್ಕೆ ಇದೆ.</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>ಹೇಳಿ:{"\n"}1. ಇದು ಒಳ್ಳೆ idea ನಾ? Honest ಆಗಿ ಹೇಳಿ.{"\n"}2. Top 3 risks ಏನು?{"\n"}3. Karnataka ನಲ್ಲಿ ಯಾವ licences ಬೇಕಾಗ್ತೆ?{"\n"}4. Products ಗೆ price ಹೇಗೆ ಹಾಕಬೇಕು?</span>{"\n\n"}<span style={{ color: "#788C5D" }}>5. ಎಲ್ಲಿ sell ಮಾಡಲಿ — Instagram, WhatsApp, ಅಥವಾ Swiggy?</span>
                </pre>
              </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.0 }} className="flex items-center justify-center gap-2">
              <span className="font-heading font-semibold text-[13px] text-[#D97757]">&lsquo;Be honest&rsquo; ಅಂದ್ರೆ Claude honest ಆಗುತ್ತೆ.</span>
              <span className="text-[#B0AEA5]">·</span>
              <span className="font-body italic text-[12px] text-[#B0AEA5]">Without it — encouragement. With it — real advice.</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
