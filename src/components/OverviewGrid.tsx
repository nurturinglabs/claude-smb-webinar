"use client";

import { motion } from "framer-motion";

const slideTitles = [
  "SuperPower for your Business",
  "What is AI?",
  "7 Specialists → 1 Subscription",
  "Meet Claude",
  "Claude Chat ಅಂದ್ರೆ ಏನು?",
  "Prompt Technique",
  "Menu Prompt Technique",
  "Podcast Flyer Technique",
  "Idea Validator Technique",
  "Cowork ಅಂದ್ರೆ ಏನು?",
  "About the Business",
  "Cowork Project Setup",
  "Vendor Invoice Dashboard",
  "6 Month Sales Analytics",
  "Overdue Payment Tracker",
  "What Did We Automate?",
  "Cloud Kitchen Dashboard",
  "Staff Scheduling",
  "Weekly Auto Review Analysis",
  "Code ಅಂದ್ರೆ ಏನು?",
  "Brain + Voice Superpowers",
  "What Can You Build?",
  "The time is now.",
];

interface OverviewGridProps {
  current: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

export default function OverviewGrid({ current, onSelect, onClose }: OverviewGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-[#191918]/90 flex items-center justify-center p-8 overview-scroll overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="grid grid-cols-5 gap-4 max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {slideTitles.map((title, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className={`aspect-video rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all duration-200 border-2 hover:scale-105 ${
              i === current
                ? "border-[#DA7756] bg-[#DA7756]/10"
                : "border-[#DDD8CE]/40 bg-[#FAF9F7]/90 hover:border-[#DA7756]/50"
            }`}
          >
            <span className="text-[#DA7756] font-mono text-xs mb-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[#191918] text-xs leading-tight font-heading">
              {title}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
