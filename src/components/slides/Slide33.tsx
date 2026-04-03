"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Slide33() {
  return (
    <div
      className="h-screen w-full flex"
      style={{ background: "#05101F", minHeight: "100vh" }}
    >
      {/* Left column — brain image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-1/2 flex items-center justify-center"
        style={{ padding: "48px 40px 48px 56px" }}
      >
        <Image
          src="/brain.png"
          alt="AI Brain"
          width={520}
          height={520}
          className="block rounded-xl"
          style={{ width: "100%", maxWidth: 520, height: "auto" }}
          priority
        />
      </motion.div>

      {/* Right column — quotes */}
      <div
        className="w-1/2 flex flex-col justify-center"
        style={{ padding: "56px 56px 56px 32px" }}
      >
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading font-bold uppercase mb-4 block"
          style={{
            fontSize: 11,
            color: "#D97757",
            letterSpacing: "0.22em",
          }}
        >
          What is AI?
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading font-extrabold mb-2"
          style={{ fontSize: 42, lineHeight: 1.15 }}
        >
          <span className="text-white">AI </span>
          <span className="font-kannada" style={{ color: "#D97757" }}>
            ಅಂದ್ರೆ
          </span>
          <span className="text-white font-kannada"> ಏನು?</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-heading italic mb-9"
          style={{ fontSize: 16, color: "rgba(255,255,255,0.45)" }}
        >
          3 ways to understand it
        </motion.p>

        {/* 3 Quote cards */}
        <div className="flex flex-col gap-4 mb-0">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "3px solid #D97757",
              borderRadius: "0 8px 8px 0",
              padding: "14px 18px",
            }}
          >
            <p
              className="font-kannada font-semibold text-white"
              style={{ fontSize: 15, lineHeight: 1.7 }}
            >
              AI ಅಂದ್ರೆ — ನಿಮ್ಮ ಮಾತು ಕೇಳಿ,
              <br />
              ನಿಮ್ಮ ಕೆಲಸ ಮಾಡೋ ಒಂದು ಜಾಣ ಸಹಾಯಕ.
            </p>
            <p
              className="font-heading italic mt-1"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}
            >
              A smart assistant that listens to you and does your work.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "3px solid #D97757",
              borderRadius: "0 8px 8px 0",
              padding: "14px 18px",
            }}
          >
            <p
              className="font-kannada font-semibold text-white"
              style={{ fontSize: 15, lineHeight: 1.7 }}
            >
              AI ಅಂದ್ರೆ — ಒಂದು ಜಾಣ ಗೆಳೆಯ.
              <br />
              ಎಲ್ಲಾ ಗೊತ್ತು. ಯಾವಾಗಲೂ ಇದ್ದಾನೆ. ಎಂದೂ ಬೇಜಾರು ಮಾಡಲ್ಲ.
            </p>
            <p
              className="font-heading italic mt-1"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}
            >
              A smart friend — knows everything, always available, never tires.
            </p>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
          className="my-5"
          style={{ width: 40, height: 2, background: "#D97757", opacity: 0.6 }}
        />

        {/* Punch card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          style={{
            background: "rgba(217,119,87,0.15)",
            border: "1px solid rgba(217,119,87,0.4)",
            borderRadius: 8,
            padding: "16px 20px",
          }}
        >
          <p
            className="font-kannada font-bold"
            style={{ fontSize: 18, color: "#D97757", lineHeight: 1.6 }}
          >
            ಹೊಸ ತರಹದ ಉದ್ಯೋಗಿ —
            <br />
            ಸಂಬಳ ಬೇಡ. ರಜೆ ಬೇಡ. ತಪ್ಪು ಮಾಡಲ್ಲ.
          </p>
          <p
            className="font-heading italic mt-1"
            style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}
          >
            A new kind of employee — no salary, no leave, no mistakes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
