"use client";

export default function SlideCounter({ current, total }: { current: number; total: number }) {
  const display = String(current + 1).padStart(2, "0");
  const totalDisplay = String(total).padStart(2, "0");
  return (
    <div className="fixed bottom-6 right-8 z-50 font-mono text-[#6B6B65] text-sm tracking-widest">
      {display} / {totalDisplay}
    </div>
  );
}
