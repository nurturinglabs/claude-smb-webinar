"use client";

import { motion } from "framer-motion";
import CopyButton from "../CopyButton";

const ingredients = [
  {
    num: "1",
    label: "What you are promoting",
    example: "Munde Banni Podcast — new episode",
    tip: "Name the brand and what it is",
  },
  {
    num: "2",
    label: "Your guest or subject",
    example: "Nitin Kamath · Zerodha · ₹0 VC funding",
    tip: "Name + company + one compelling fact",
  },
  {
    num: "3",
    label: "What to highlight",
    example: "3 things listeners will learn",
    tip: "The hook that makes people tune in",
  },
  {
    num: "4",
    label: "Output format",
    example: "Square HTML · dark navy · Instagram ready",
    tip: "Tell Claude the size, theme, platform",
  },
];

export default function Slide10() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#B0AEA5 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.25, zIndex: 1 }} />

      <div className="relative z-10 flex flex-col w-full h-full px-8 py-4">
        {/* Top: Tag + Title */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading font-bold uppercase text-[#D97757]" style={{ fontSize: 12, letterSpacing: "0.18em" }}>Demo 3 · Claude Chat</span>
            <span className="inline-block bg-[#FEF3EE] text-[#D97757] text-sm font-heading font-semibold px-4 py-1 rounded-full">For: Podcasters · Content Creators · Any Business</span>
          </div>
          <h1 className="text-[32px] font-heading font-extrabold text-[#141413] leading-tight">How to write a great promotional flyer prompt</h1>
        </motion.div>

        {/* Main: Two columns */}
        <div className="flex gap-5 flex-1 min-h-0">
          {/* LEFT 38% */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-3" style={{ width: "38%" }}>
            <p className="font-heading font-bold text-[15px] text-[#141413] mb-1">4 ingredients every flyer prompt needs:</p>
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
              <p className="font-heading font-medium text-[13px] text-[#D97757] leading-relaxed">This works for any flyer — podcast, event, product launch, shop opening. Same 4 ingredients.</p>
            </motion.div>
          </motion.div>

          {/* RIGHT 62% */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex flex-col flex-1 min-h-0">
              <span className="block font-heading font-semibold text-xs text-[#B0AEA5] uppercase mb-1" style={{ letterSpacing: "0.15em" }}>ENGLISH PROMPT</span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"I am promoting an upcoming episode of Munde Banni Podcast — a Kannada entrepreneurship podcast from Karnataka.\n\nGuest: Nitin Kamath, Co-founder of Zerodha — India's largest stock broker, built without raising a single rupee of VC funding.\n\nCreate a square HTML flyer. Include: guest name large and bold, 3 things listeners will learn, podcast platform row (Spotify · YouTube · Apple Podcasts), Coming Soon · Subscribe Now message.\n\nDesign: dark navy #032A4A background, yellow #FFB800 accent, Poppins font, square format for Instagram sharing, fade-in animations on load, no photos — typography only."} />
                <pre className="font-mono text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>I am promoting an upcoming episode of Munde Banni Podcast — a Kannada entrepreneurship podcast from Karnataka.</span>{"\n\n"}<span style={{ color: "#6A9BCC" }}>Guest: Nitin Kamath, Co-founder of Zerodha — India&apos;s largest stock broker, built without raising a single rupee of VC funding.</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>Create a square HTML flyer. Include: guest name large and bold, 3 things listeners will learn, podcast platform row (Spotify · YouTube · Apple Podcasts), Coming Soon · Subscribe Now message.</span>{"\n\n"}<span style={{ color: "#788C5D" }}>Design: dark navy #032A4A background, yellow #FFB800 accent, Poppins font, square format for Instagram sharing, fade-in animations on load, no photos — typography only.</span>
                </pre>
              </div>
            </div>
            <div className="flex flex-col flex-1 min-h-0">
              <span className="block font-heading font-semibold text-xs text-[#D97757] uppercase mb-1" style={{ letterSpacing: "0.15em" }}>ಕನ್ನಡ PROMPT</span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"ನಾನು Munde Banni Podcast ನ ಒಂದು upcoming episode promote ಮಾಡ್ತಿದ್ದೇನೆ — Karnataka ದ Kannada entrepreneurship podcast.\n\nGuest: Nitin Kamath, Zerodha ನ Co-founder — India ನ largest stock broker. VC funding ಇಲ್ಲದೆ build ಮಾಡಿದ್ದಾರೆ.\n\nSquare HTML flyer ಮಾಡಿ. Include: Guest name bold ಆಗಿ, listeners ಏನು learn ಮಾಡ್ತಾರೆ ಅಂತ 3 points, platforms: Spotify · YouTube · Apple Podcasts, Coming Soon · Subscribe ಮೆಸ್ಸೇಜ್.\n\nDesign: dark navy background, yellow accent, square format — Instagram share ಗೆ ready, animations on load, photo ಬೇಡ — text only."} />
                <pre className="font-kannada text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>ನಾನು Munde Banni Podcast ನ ಒಂದು upcoming episode promote ಮಾಡ್ತಿದ್ದೇನೆ — Karnataka ದ Kannada entrepreneurship podcast.</span>{"\n\n"}<span style={{ color: "#6A9BCC" }}>Guest: Nitin Kamath, Zerodha ನ Co-founder — India ನ largest stock broker. VC funding ಇಲ್ಲದೆ build ಮಾಡಿದ್ದಾರೆ.</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>Square HTML flyer ಮಾಡಿ. Include: Guest name bold ಆಗಿ, listeners ಏನು learn ಮಾಡ್ತಾರೆ ಅಂತ 3 points, platforms: Spotify · YouTube · Apple Podcasts, Coming Soon · Subscribe ಮೆಸ್ಸೇಜ್.</span>{"\n\n"}<span style={{ color: "#788C5D" }}>Design: dark navy background, yellow accent, square format — Instagram share ಗೆ ready, animations on load, photo ಬೇಡ — text only.</span>
                </pre>
              </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1.0 }} className="flex items-center justify-center gap-2">
              <span className="font-heading font-semibold text-[13px] text-[#D97757]">Claude ಗೆ perfect English ಬೇಕಿಲ್ಲ.</span>
              <span className="text-[#B0AEA5]">·</span>
              <span className="font-body italic text-[12px] text-[#B0AEA5]">Write how you speak — Claude understands.</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
