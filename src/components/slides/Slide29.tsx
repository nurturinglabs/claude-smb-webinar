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

export default function Slide29() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="h-screen w-full flex flex-col items-center justify-center px-8 py-10 relative"
    >
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
          Ideas 02 &amp; 03 · For: Freelancers, Tech-curious, Anyone
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-[32px] font-heading font-bold text-[#141413] text-center mb-2"
        >
          Two ways to earn with AI skills
        </motion.h2>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="font-body italic text-base text-[#B0AEA5] text-center mb-6"
        >
          The credential is your demo. Not your degree.
        </motion.p>

        {/* Two cards */}
        <motion.div variants={fadeUp} className="flex gap-5 w-full mb-6">
          {/* Left — Idea 02 */}
          <div className="flex-1 bg-white border border-[#E8E6DC] rounded-xl p-6 border-t-[3px] border-t-[#DA7756]">
            <span className="text-xs uppercase text-[#DA7756] font-heading font-semibold tracking-wide mb-2 block">
              Idea 02
            </span>
            <h3 className="font-heading font-bold text-xl text-[#141413] mb-2">
              AI Consultant for SMBs
            </h3>
            <p className="font-body italic text-[15px] text-[#B0AEA5] mb-4 leading-relaxed">
              Visit a business. Show them what Claude can do.
              <br />
              Set it up. Train them. Come back monthly.
            </p>
            <div className="h-px bg-[#E8E6DC] mb-3" />
            {/* Pricing rows */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[15px] text-[#141413]">Setup fee</span>
                <span className="text-[15px] font-mono text-[#DA7756]">₹8,000–₹15,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[15px] text-[#141413]">Monthly retainer</span>
                <span className="text-[15px] font-mono text-[#DA7756]">₹5,000–₹10,000/client</span>
              </div>
            </div>
            {/* Revenue pill */}
            <div className="bg-[#FEF3EE] rounded-lg px-3 py-2">
              <span className="text-[#DA7756] font-heading font-semibold text-[15px]">
                10 clients = ₹1,00,000/month
              </span>
            </div>
          </div>

          {/* Right — Idea 03 */}
          <div className="flex-1 bg-white border border-[#E8E6DC] rounded-xl p-6 border-t-[3px] border-t-[#6A9BCC]">
            <span className="text-xs uppercase text-[#6A9BCC] font-heading font-semibold tracking-wide mb-2 block">
              Idea 03
            </span>
            <h3 className="font-heading font-bold text-xl text-[#141413] mb-2">
              Custom Tool Builder
            </h3>
            <p className="font-body italic text-[15px] text-[#B0AEA5] mb-4 leading-relaxed">
              Replace their ₹20,000/month SaaS.
              <br />
              Build a custom tool they own forever.
              <br />
              Charge once. Maintain monthly.
            </p>
            <div className="h-px bg-[#E8E6DC] mb-3" />
            {/* Pricing rows */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-[15px] text-[#141413]">Build fee</span>
                <span className="text-[15px] font-mono text-[#6A9BCC]">₹25,000–₹1,50,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[15px] text-[#141413]">Maintenance</span>
                <span className="text-[15px] font-mono text-[#6A9BCC]">₹3,000–₹10,000/month</span>
              </div>
            </div>
            {/* Revenue pill */}
            <div className="bg-[#EBF3FA] rounded-lg px-3 py-2">
              <span className="text-[#6A9BCC] font-heading font-semibold text-[15px]">
                5 clients = ₹2,20,000/month
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom dark banner */}
        <motion.div
          variants={fadeUp}
          className="w-full bg-[#141413] rounded-xl p-4 flex justify-between items-center"
        >
          <span className="text-white text-base font-body">Both ideas: ₹0 to start</span>
          <span className="text-white text-base font-body">
            Anyone who can use AI can do both
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
