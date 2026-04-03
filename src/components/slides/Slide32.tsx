"use client";

import { motion } from "framer-motion";

const CX = 570;
const CY = 265;
const RADIUS = 230;
const NODE_W = 175;
const NODE_H = 52;

const nodesData = [
  { emoji: "💰", title: "Accountant", sub: "Invoices · Reports · Expenses", special: false },
  { emoji: "📊", title: "Data Analyst", sub: "Sales · Dashboards · Insights", special: false },
  { emoji: "✍️", title: "Content Writer", sub: "Posts · Emails · Descriptions", special: false },
  { emoji: "🎧", title: "Customer Support", sub: "Replies · Follow-ups · FAQ", special: false },
  { emoji: "💻", title: "Software Developer", sub: "Apps · Tools · Dashboards", special: true },
  { emoji: "⚙️", title: "Operations Manager", sub: "Scheduling · Tasks · Planning", special: false },
  { emoji: "🔍", title: "Research Assistant", sub: "Market · Competitors · Ideas", special: false },
];

const nodes = nodesData.map((n, i) => {
  const angle = (-90 + i * (360 / 7)) * (Math.PI / 180);
  const nx = CX + Math.cos(angle) * RADIUS;
  const ny = CY + Math.sin(angle) * RADIUS;
  return {
    ...n,
    id: i + 1,
    cx: nx,
    cy: ny,
    rx: nx - NODE_W / 2,
    ry: ny - NODE_H / 2,
    spokeDelay: 0.4 + i * 0.1,
    nodeDelay: 0.45 + i * 0.1,
  };
});

export default function Slide32() {
  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FAF9F5]" style={{ zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#B0AEA5 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.22, zIndex: 1 }} />

      <div className="relative z-10 flex flex-col w-full h-full" style={{ padding: "40px 64px 36px" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-center mb-3">
          <h1 className="font-heading font-extrabold text-[#141413]" style={{ fontSize: 36, lineHeight: 1.1 }}>
            Replace <span className="text-[#D97757]">7 specialists</span> with one AI
          </h1>
          <p className="font-body italic text-[#B0AEA5] mt-1" style={{ fontSize: 15 }}>
            Everything Claude can do fully — no half-truths
          </p>
        </motion.div>

        {/* SVG Diagram */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex-1 flex items-center justify-center">
          <svg viewBox="0 0 1140 530" className="w-full h-full" style={{ maxHeight: "100%" }}>
            <defs>
              <filter id="hubGlow">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Spoke lines */}
            {nodes.map((n) => (
              <motion.line
                key={`spoke-${n.id}`}
                x1={CX} y1={CY}
                x2={n.cx} y2={n.cy}
                stroke="#D97757"
                strokeWidth={1.5}
                strokeOpacity={0.25}
                strokeDasharray="5 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: n.spokeDelay, ease: "easeOut" }}
              />
            ))}

            {/* Hub */}
            <circle cx={CX} cy={CY} r={62} fill="#D97757" filter="url(#hubGlow)" />
            <circle cx={CX} cy={CY} r={62} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={1.5} />
            <text x={CX} y={CY - 7} textAnchor="middle" fill="white" fontFamily="var(--font-inter)" fontWeight={800} fontSize={17} letterSpacing={1.5}>AI</text>
            <text x={CX} y={CY + 14} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontFamily="var(--font-noto-sans-kannada)" fontWeight={600} fontSize={12}>ನಿಮ್ಮ ಸಹಾಯಕ</text>

            {/* Nodes */}
            {nodes.map((n) => (
              <motion.g
                key={`node-${n.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: n.nodeDelay, ease: [0.17, 0.67, 0.35, 1.25] }}
                style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
              >
                {/* Top accent bar */}
                <rect x={n.rx} y={n.ry} width={NODE_W} height={4} rx={2} fill="#D97757" opacity={n.special ? 0.8 : 0.5} />
                {/* Card bg */}
                <rect
                  x={n.rx} y={n.ry + 4} width={NODE_W} height={NODE_H - 4} rx={10}
                  fill={n.special ? "#FEF3EE" : "white"}
                  stroke={n.special ? "rgba(217,119,87,0.35)" : "#E8E6DC"}
                  strokeWidth={1}
                />
                {/* Title */}
                <text
                  x={n.cx} y={n.cy - 4}
                  textAnchor="middle"
                  fill={n.special ? "#D97757" : "#141413"}
                  fontFamily="var(--font-inter)"
                  fontWeight={700}
                  fontSize={14}
                >
                  {n.emoji} {n.title}
                </text>
                {/* Sub */}
                <text
                  x={n.cx} y={n.cy + 14}
                  textAnchor="middle"
                  fill="#B0AEA5"
                  fontFamily="var(--font-noto-sans-kannada)"
                  fontWeight={400}
                  fontSize={11}
                >
                  {n.sub}
                </text>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
