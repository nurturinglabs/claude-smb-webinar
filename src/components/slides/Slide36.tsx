"use client";

import { motion } from "framer-motion";
import CopyButton from "../CopyButton";

const ingredients = [
  {
    num: "1",
    label: "Your context",
    example: "Small restaurant, weekly menu",
    tip: "Tell Claude your situation",
  },
  {
    num: "2",
    label: "The theme",
    example: "Street Food from Around the World",
    tip: "Give creative direction",
  },
  {
    num: "3",
    label: "What to include",
    example: "Ingredients, steps, price, tips",
    tip: "List every field you need",
  },
  {
    num: "4",
    label: "Output format",
    example: "HTML page, warm theme, cards",
    tip: "Describe how it should look",
  },
];

export default function Slide36() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#B0AEA5 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.25, zIndex: 1 }} />

      <div className="relative z-10 flex flex-col w-full h-full px-8 py-4">
        {/* Top: Tag + Title */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading font-bold uppercase text-[#D97757]" style={{ fontSize: 12, letterSpacing: "0.18em" }}>Demo 2 · Claude Chat</span>
            <span className="inline-block bg-[#FEF3EE] text-[#D97757] text-sm font-heading font-semibold px-4 py-1 rounded-full">For: Restaurant Owners · Food Businesses</span>
          </div>
          <h1 className="text-[32px] font-heading font-extrabold text-[#141413] leading-tight">How to write a great creative prompt</h1>
        </motion.div>

        {/* Main: Two columns */}
        <div className="flex gap-5 flex-1 min-h-0">
          {/* LEFT 38% */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-3" style={{ width: "38%" }}>
            <p className="font-heading font-bold text-[15px] text-[#141413] mb-1">4 ingredients every creative prompt needs:</p>
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
              <p className="font-heading font-medium text-[13px] text-[#D97757] leading-relaxed">The output format instruction is what makes Claude produce a beautiful HTML page — not just plain text.</p>
            </motion.div>
          </motion.div>

          {/* RIGHT 62% */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex flex-col flex-1 min-h-0">
              <span className="block font-heading font-semibold text-xs text-[#B0AEA5] uppercase mb-1" style={{ letterSpacing: "0.15em" }}>ENGLISH PROMPT</span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"I run a small restaurant in Bengaluru that changes its menu every week.\nThis week's theme: Street Food from Around the World\n\nGive me 3 street food recipes from 3 countries I can make in an Indian kitchen. For each: country, dish name in local language, ingredients available in Bengaluru, cooking steps, why customers will love it, price in ₹, chef tips, one fun fact.\n\nFormat as a self-contained HTML page with warm earthy theme, click-to-open recipe cards, Google Fonts. Save as weekly_menu.html"} />
                <pre className="font-mono text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>I run a small restaurant in Bengaluru that changes its menu every week.</span>{"\n"}<span style={{ color: "#6A9BCC" }}>This week&apos;s theme: Street Food from Around the World</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>Give me 3 street food recipes from 3 countries I can make in an Indian kitchen. For each: country, dish name in local language, ingredients available in Bengaluru, cooking steps, why customers will love it, price in ₹, chef tips, one fun fact.</span>{"\n\n"}<span style={{ color: "#788C5D" }}>Format as a self-contained HTML page with warm earthy theme, click-to-open recipe cards, Google Fonts. Save as weekly_menu.html</span>
                </pre>
              </div>
            </div>
            <div className="flex flex-col flex-1 min-h-0">
              <span className="block font-heading font-semibold text-xs text-[#D97757] uppercase mb-1" style={{ letterSpacing: "0.15em" }}>ಕನ್ನಡ PROMPT</span>
              <div className="rounded-xl flex-1 relative overflow-auto" style={{ background: "#141413", padding: "14px 18px" }}>
                <CopyButton text={"ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಒಂದು ಚಿಕ್ಕ restaurant ನಡೆಸ್ತೀನಿ. ಪ್ರತಿ ವಾರ menu ಬದಲಾಗ್ತೆ.\nಈ ವಾರದ theme: ದುನಿಯಾದ Street Food\n\n3 ದೇಶಗಳಿಂದ 3 street food recipes ಕೊಡಿ — Indian kitchen ನಲ್ಲಿ ಮಾಡಬಹುದಾದವು. ಪ್ರತಿದಕ್ಕೂ: ದೇಶ, ಹೆಸರು local ಭಾಷೆಯಲ್ಲಿ, ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸಿಗೋ ingredients, cooking steps, customers ಯಾಕೆ ಇಷ್ಟಪಡ್ತಾರೆ, ₹ ನಲ್ಲಿ ಬೆಲೆ, chef tips, ಒಂದು fun fact.\n\nBeautiful HTML page ಆಗಿ format ಮಾಡಿ — warm earthy theme, click ಮಾಡಿದ್ರೆ recipe open ಆಗ್ಲಿ. Save as weekly_menu.html"} />
                <pre className="font-kannada text-[15px] whitespace-pre-wrap" style={{ lineHeight: 1.7 }}>
                  <span style={{ color: "#D97757" }}>ನಾನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ಒಂದು ಚಿಕ್ಕ restaurant ನಡೆಸ್ತೀನಿ. ಪ್ರತಿ ವಾರ menu ಬದಲಾಗ್ತೆ.</span>{"\n"}<span style={{ color: "#6A9BCC" }}>ಈ ವಾರದ theme: ದುನಿಯಾದ Street Food</span>{"\n\n"}<span style={{ color: "#FAF9F5" }}>3 ದೇಶಗಳಿಂದ 3 street food recipes ಕೊಡಿ — Indian kitchen ನಲ್ಲಿ ಮಾಡಬಹುದಾದವು. ಪ್ರತಿದಕ್ಕೂ: ದೇಶ, ಹೆಸರು local ಭಾಷೆಯಲ್ಲಿ, ಬೆಂಗಳೂರಿನಲ್ಲಿ ಸಿಗೋ ingredients, cooking steps, customers ಯಾಕೆ ಇಷ್ಟಪಡ್ತಾರೆ, ₹ ನಲ್ಲಿ ಬೆಲೆ, chef tips, ಒಂದು fun fact.</span>{"\n\n"}<span style={{ color: "#788C5D" }}>Beautiful HTML page ಆಗಿ format ಮಾಡಿ — warm earthy theme, click ಮಾಡಿದ್ರೆ recipe open ಆಗ್ಲಿ. Save as weekly_menu.html</span>
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
