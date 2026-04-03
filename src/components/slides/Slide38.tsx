"use client";

import { motion } from "framer-motion";

const whyPoints = [
  "Karnataka ನಲ್ಲಿ ಲಕ್ಷಾಂತರ wholesale businesses ಇದ್ದಾರೆ",
  "ಎಲ್ಲರ ಬಳಿ invoices, payments, sales ಸಮಸ್ಯೆ ಇದೆ",
  "ಯಾರ ಬಳಿಯೂ data system ಇಲ್ಲ — ಇವತ್ತು ಅದನ್ನ fix ಮಾಡ್ತೀವಿ",
];

export default function Slide38() {
  return (
    <div
      className="h-screen w-full flex"
      style={{
        background: "#05101F",
        backgroundImage:
          "linear-gradient(rgba(217,119,87,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(217,119,87,0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Left column */}
      <div className="w-1/2 flex flex-col justify-center" style={{ padding: "56px 40px 56px 64px" }}>
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading font-bold uppercase text-[#D97757] block mb-5"
          style={{ fontSize: 15, letterSpacing: "0.22em" }}
        >
          Claude Cowork — Live Demo
        </motion.span>

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-heading font-semibold uppercase block mb-3"
          style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)" }}
        >
          About the business
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-2"
          style={{ fontSize: 36, lineHeight: 1.25 }}
        >
          <span className="text-white font-kannada font-bold">ನಮ್ಮ ಇವತ್ತಿನ</span>
          <br />
          <span className="font-heading font-extrabold" style={{ color: "#D97757" }}>Business</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-body italic mb-9"
          style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}
        >
          One real business. Three real problems.
          <br />
          Watch Claude solve all three — live.
        </motion.p>

        {/* Why section */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-9"
        >
          <span
            className="block font-heading font-bold uppercase mb-3"
            style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)" }}
          >
            Why we chose this business
          </span>
          <div className="flex flex-col gap-3">
            {whyPoints.map((pt, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="rounded-full flex-shrink-0 mt-2"
                  style={{ width: 6, height: 6, background: "rgba(217,119,87,0.5)" }}
                />
                <p className="font-kannada" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  {pt}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-6"
          style={{ width: 48, height: 2, background: "#D97757", opacity: 0.4 }}
        />

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="font-body italic"
          style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}
        >
          ನಿಮ್ಮ business{" "}
          <span className="font-heading font-semibold not-italic text-[#D97757]">
            boutique, pharmacy, restaurant
          </span>{" "}
          ಆಗಿರಬಹುದು —
          <br />
          problems ಒಂದೇ. Solution ಒಂದೇ.
        </motion.p>
      </div>

      {/* Right column — Business card */}
      <div className="w-1/2 flex items-center justify-center" style={{ padding: "48px 56px 48px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
          style={{
            maxWidth: 480,
            background: "#0D1F35",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          {/* Card header */}
          <div
            className="flex items-center gap-3.5"
            style={{
              background: "#141F2E",
              padding: "18px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{ width: 48, height: 48, background: "#D97757", borderRadius: 10, fontSize: 22 }}
            >
              🥦
            </div>
            <div>
              <div className="font-heading font-bold text-white" style={{ fontSize: 17 }}>
                Vegetable Wholesaler
              </div>
              <div className="flex items-center gap-1.5">
                <div className="rounded-full" style={{ width: 5, height: 5, background: "#D97757", opacity: 0.6 }} />
                <span className="font-mono" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                  APMC Yard, Yeshwanthpur, Bengaluru
                </span>
              </div>
            </div>
          </div>

          {/* Card fields */}
          <div style={{ padding: "20px 24px" }}>
            {/* What they do */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span
                className="block font-heading font-bold uppercase mb-1.5"
                style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em" }}
              >
                What they do
              </span>
              <p className="font-kannada font-medium" style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.65 }}>
                25 retail stores ಮತ್ತು restaurants ಗೆ ಪ್ರತಿದಿನ fresh vegetables supply ಮಾಡ್ತಾರೆ. Solo owner. 2 helpers. 4AM to 2PM daily.
              </p>
            </div>

            {/* Monthly revenue */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span
                className="block font-heading font-bold uppercase mb-1.5"
                style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.18em" }}
              >
                Monthly Revenue
              </span>
              <span className="font-mono font-semibold text-white" style={{ fontSize: 20 }}>
                ₹8 – 12 Lakh
              </span>
            </div>

            {/* Pain point — highlighted */}
            <div
              className="rounded-lg"
              style={{
                background: "rgba(217,119,87,0.06)",
                border: "1px solid rgba(217,119,87,0.15)",
                borderLeft: "3px solid #D97757",
                padding: "14px 16px",
                margin: "14px -4px 0",
              }}
            >
              <span
                className="block font-heading font-bold uppercase mb-1.5"
                style={{ fontSize: 9, color: "rgba(217,119,87,0.6)", letterSpacing: "0.18em" }}
              >
                The Pain Point
              </span>
              <p className="font-kannada font-semibold text-white" style={{ fontSize: 14, lineHeight: 1.65 }}>
                25 customers ಗೆ ಪ್ರತಿ 2 days ಗೆ call ಮಾಡಿ orders collect ಮಾಡ್ತಾರೆ. Invoices, payments, sales — ಎಲ್ಲಾ manually. No data. No system. No time to grow.
              </p>
            </div>
          </div>

          {/* Card footer */}
          <div
            className="flex items-center gap-2"
            style={{
              background: "#141F2E",
              padding: "12px 24px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: 13, color: "#D97757" }}>→</span>
            <span className="font-body italic" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              Sound familiar?{" "}
              <span className="font-heading font-semibold not-italic text-[#D97757]">
                This is most SMBs in India.
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
