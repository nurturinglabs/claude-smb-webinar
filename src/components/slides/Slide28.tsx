"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const services = [
  { label: "Family AI Setup", price: "₹2,000 one time" },
  { label: "Monthly Support", price: "₹1,500/month" },
  { label: "School Workshop", price: "₹15,000/school" },
];

export default function Slide28() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="h-screen w-full flex flex-col items-center justify-center px-8 py-10 relative"
      style={{
        background: `#FAF9F5`,
        backgroundImage: `radial-gradient(#B0AEA5 1px, transparent 1px)`,
        backgroundSize: `28px 28px`,
        backgroundPosition: `0 0`,
      }}
    >
      {/* Dot grid overlay with opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#B0AEA5 1px, transparent 1px)`,
          backgroundSize: `28px 28px`,
          opacity: 0.25,
        }}
      />
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#B0AEA5 1px, transparent 1px)`,
          backgroundSize: `28px 28px`,
          opacity: 0.25,
          zIndex: 1,
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        {/* Tag pill */}
        <motion.span
          variants={fadeUp}
          className="inline-block bg-[#FEF3EE] text-[#DA7756] text-sm font-heading font-semibold px-5 py-2 rounded-full mb-4"
        >
          Idea 01 · For: Parents, Teachers, Anyone
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-[32px] font-heading font-bold text-[#141413] text-center mb-2"
        >
          The most ignored opportunity in education
        </motion.h2>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="font-body italic text-base text-[#B0AEA5] text-center mb-6"
        >
          Every school. Every family. Nobody is helping them.
        </motion.p>

        {/* Two cards */}
        <motion.div variants={fadeUp} className="flex gap-5 w-full mb-5">
          {/* Left card — The Reality */}
          <div className="flex-1 bg-white border border-[#E8E6DC] rounded-xl p-6 border-t-[3px] border-t-[#DA7756]">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#DA7756] flex items-center justify-center mb-3">
              <span className="text-white text-sm font-heading font-bold">GAP</span>
            </div>
            <h3 className="font-heading font-semibold text-lg text-[#141413] mb-2">
              The Reality
            </h3>
            <p className="font-body italic text-[15px] text-[#B0AEA5] leading-relaxed">
              Karnataka has 25,000+ schools.
              <br />
              90% of parents have never used AI.
              <br />
              Not one person has shown them how.
            </p>
            {/* Stats */}
            <div className="flex gap-4 mt-4">
              <div>
                <div className="font-heading font-bold text-2xl text-[#DA7756]">25,000+</div>
                <div className="text-xs uppercase text-[#B0AEA5] tracking-wide">Schools in Karnataka</div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-[#DA7756]">1 crore+</div>
                <div className="text-xs uppercase text-[#B0AEA5] tracking-wide">Families to reach</div>
              </div>
            </div>
          </div>

          {/* Right card — The Business */}
          <div className="flex-1 bg-white border border-[#E8E6DC] rounded-xl p-6 border-t-[3px] border-t-[#788C5D]">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-[#788C5D] flex items-center justify-center mb-3">
              <span className="text-white text-base font-heading font-bold">₹</span>
            </div>
            <h3 className="font-heading font-semibold text-lg text-[#141413] mb-2">
              The Business
            </h3>
            {/* Service rows */}
            <div className="space-y-0">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 border-b border-[#F0EEE8]"
                >
                  <span className="text-[15px] text-[#141413]">{s.label}</span>
                  <span className="text-[15px] font-mono text-[#DA7756]">{s.price}</span>
                </div>
              ))}
            </div>
            {/* Revenue box */}
            <div className="mt-4 bg-[#F5F4F0] rounded-lg p-4">
              <div className="text-sm text-[#B0AEA5] mb-1">5 schools + 20 families</div>
              <div className="font-heading font-bold text-xl text-[#141413]">₹1,05,000/month</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          variants={fadeUp}
          className="font-heading font-semibold text-base text-[#141413] text-center"
        >
          Investment: ₹0 · Tool needed: Claude ₹2,000/month
        </motion.p>
      </div>
    </motion.div>
  );
}
